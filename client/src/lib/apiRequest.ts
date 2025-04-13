const BASE_URL = "https://tro-backend.onrender.com"; // API backend của bạn

export async function apiRequest<T>(
  method: string,
  url: string,
  body?: any
): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) throw new Error("Request failed");

  return response.json();
}
