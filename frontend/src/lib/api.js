const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function emitAuthChanged() {
  window.dispatchEvent(new Event("auth:changed"));
}

export function getToken() {
  return localStorage.getItem("access_token");
}

export function getUser() {
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function getPendingUsername() {
  return localStorage.getItem("pending_username");
}

export function setPendingUsername(username) {
  if (typeof username === "string" && username.trim()) {
    localStorage.setItem("pending_username", username.trim());
    emitAuthChanged();
  }
}

export function clearPendingAuth() {
  localStorage.removeItem("pending_username");
  localStorage.removeItem("pending_email");
  emitAuthChanged();
}

async function safeJson(res) {
  return await res.json().catch(() => ({}));
}

export async function fetchStartups(query = "") {
  const params = new URLSearchParams();
  const q = query.trim();
  if (q) params.set("query", q);

  const qs = params.toString();
  const res = await fetch(`${API_URL}/startups${qs ? `?${qs}` : ""}`);
  const data = await safeJson(res);

  if (!res.ok) throw new Error(data?.detail || "Failed to load startups");
  return data;
}

export async function fetchPublicResources() {
  const res = await fetch(`${API_URL}/resources/public`);
  const data = await safeJson(res);

  if (!res.ok) throw new Error(data?.detail || "Failed to load resources");
  return data;
}

export async function fetchResourcesAuthed() {
  const token = getToken();
  const res = await fetch(`${API_URL}/resources`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  const data = await safeJson(res);

  if (!res.ok) throw new Error(data?.detail || "Failed to load resources");
  return data;
}

export async function requestMagicLink({ email, username }) {
  const res = await fetch(`${API_URL}/auth/request-magic-link`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, username }),
  });
  const data = await safeJson(res);

  if (!res.ok) throw new Error(data?.detail || "Request failed");
  return data;
}

export async function verifyMagicLink(token) {
  const res = await fetch(
    `${API_URL}/auth/verify?token=${encodeURIComponent(token)}`
  );
  const data = await safeJson(res);

  if (!res.ok) throw new Error(data?.detail || "Verification failed");
  return data;
}

export function persistSession({ access_token, user }) {
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("user", JSON.stringify(user));
  clearPendingAuth();
  emitAuthChanged();
}

export function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");
  clearPendingAuth();
  emitAuthChanged();
}
