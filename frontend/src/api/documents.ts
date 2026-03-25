const API_BASE = "http://127.0.0.1:8000";

export async function uploadDocument(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("http://127.0.0.1:8000/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  return await response.json();
}

export async function getDocuments(search?: string) {
  let url = `${API_BASE}/documents`;

  if (search) {
    url += `?search=${search}`;
  }

  const response = await fetch(url);
  return response.json();
}