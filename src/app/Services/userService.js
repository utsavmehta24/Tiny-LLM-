// services/userService.js
import { httpAxios } from "@/helper/httpHelper";

// Sign up a new user
export async function signUp(user) {
  const res = await httpAxios.post("/api/users", user);
  return res.data;
}

// Log in and set HTTP-only cookie
export const logIn = async (loginData) => {
  const res = await fetch("/api/login", {
    method: "POST",
    credentials: "include",        // include cookies
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  });

  // always parse JSON, even on error status
  const data = await res.json();
  return {
    status: res.status,
    ...data,
  };
};

// Fetch the currently authenticated user
export const curentUser = async () => {
  const res = await fetch("/api/current", {
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error(`Fetch current user failed: ${res.status}`);
  }
  return res.json();
};

// Log out and clear session/cookie
export const logOut = async () => {
  const res = await fetch("/api/logout", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error(`Logout failed: ${res.status}`);
  }
  return res.json();
};