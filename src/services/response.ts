import type { AxiosResponse, AxiosError } from "axios";

export function handleResponse<T = any>(response: AxiosResponse<T>) {
  return response.data;
}

export function handleError(error: AxiosError | any) {
  const message =
    error?.response?.data?.errors?.[0]?.message ||
    error?.message ||
    "Something went wrong";

  console.error("[API Error]:", message);
  return Promise.reject(message);
}
