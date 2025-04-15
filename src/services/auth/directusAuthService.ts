import { post } from "@/services/provider";

// Helper functions
function setCookie(name: string, value: string, maxAge = 60 * 60 * 24) {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; secure`;
}

function getCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : undefined;
}

function clearCookie(name: string) {
  document.cookie = `${name}=; path=/; max-age=0`;
}

// 🔐 Login
export async function loginToDirectus(email: string, password: string) {
  const res = await post("/auth/login", { email, password });

  const { access_token, refresh_token } = res.data;

  setCookie("access_token", access_token);
  setCookie("refresh_token", refresh_token, 60 * 60 * 24 * 7); // 7 days

  return res;
}

// 🔐 Logout
export async function logoutDirectus() {
  const refresh_token = getCookie("refresh_token");
  const access_token = getCookie("access_token");

  if (!refresh_token || !access_token) return;

  await post(
    "/auth/logout",
    { refresh_token },
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  clearCookie("access_token");
  clearCookie("refresh_token");
}

// 🔁 Refresh Access Token
export async function refreshAccessToken(): Promise<string> {
  const refresh_token = getCookie("refresh_token");
  if (!refresh_token) throw new Error("Missing refresh token");

  const res = await post("/auth/refresh", { refresh_token });
  const { access_token } = res.data;

  setCookie("access_token", access_token);
  return access_token;
}
