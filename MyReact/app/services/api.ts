export type Contact = {
  id?: number;
  name: string;
  email?: string;
  phone?: string;
};

export type Message = {
  id?: number;
  message1: string;  // The actual message content
  contactid?: number;
  _in?: number;
};

const BASE = (import.meta as any).env.VITE_API_BASE || "http://localhost:5181";

async function request<T>(path: string, opts: RequestInit = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...opts,
  });
  if (!res.ok) throw new Error(await res.text());
  if (res.status === 204) return null as unknown as T;
  return (await res.json()) as T;
}

// Contacts
export const getContacts = () => request<Contact[]>("/api/Contacts");
export const getContact = (id: number) => request<Contact>(`/api/Contacts/${id}`);
export const createContact = (c: Contact) => request<Contact>("/api/Contacts", { method: "POST", body: JSON.stringify(c) });
export const updateContact = (id: number, c: Contact) => request<void>(`/api/Contacts/${id}`, { method: "PUT", body: JSON.stringify(c) });
export const deleteContact = (id: number) => request<void>(`/api/Contacts/${id}`, { method: "DELETE" });

// Messages
export const getMessages = () => request<Message[]>("/api/Messages");
export const getMessage = (id: number) => request<Message>(`/api/Messages/${id}`);
export const createMessage = (m: Message) => request<Message>("/api/Messages", { method: "POST", body: JSON.stringify(m) });
export const updateMessage = (id: number, m: Message) => request<void>(`/api/Messages/${id}`, { method: "PUT", body: JSON.stringify(m) });
export const deleteMessage = (id: number) => request<void>(`/api/Messages/${id}`, { method: "DELETE" });
