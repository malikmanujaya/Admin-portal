import axios from "axios";
import { handleResponse, handleError } from "./response";
import { refreshAccessToken } from "@/services/auth/directusAuthService";

const API = axios.create({
  baseURL: "https://uat-healthcare.hemashospitals.com",
  timeout: 10000,
});

function getCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : undefined;
}

// ✅ Add token to every request
API.interceptors.request.use((config) => {
  const token = getCookie("access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 🔁 Handle 401s and auto-refresh once
let isRefreshing = false;
let failedQueue: ((token: string) => void)[] = [];

API.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/refresh")
    ) {
      originalRequest._retry = true;

      try {
        if (!isRefreshing) {
          isRefreshing = true;
          const newToken = await refreshAccessToken();
          failedQueue.forEach((cb) => cb(newToken));
          failedQueue = [];
        }

        return new Promise((resolve) => {
          failedQueue.push((token: string) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(API(originalRequest));
          });
        });
      } catch (refreshError) {
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return handleError(error);
  }
);

// ✅ Common request wrappers
export async function get<T = any>(url: string, config = {}) {
  try {
    const response = await API.get<T>(url, config);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

export async function post<T = any>(
  url: string,
  data?: any,
  config: any = {}
) {
  try {
    const response = await API.post<T>(url, data, config);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

export async function put<T = any>(
  url: string,
  data?: any,
  config: any = {}
) {
  try {
    const response = await API.put<T>(url, data, config);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}

export async function del<T = any>(url: string, config = {}) {
  try {
    const response = await API.delete<T>(url, config);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
}
