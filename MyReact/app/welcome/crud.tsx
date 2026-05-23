import React, { useEffect, useState } from "react";
import type { Contact, Message } from "../services/api";
import {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getMessages,
  createMessage,
  updateMessage,
  deleteMessage,
} from "../services/api";

function useAsync<T>(fn: () => Promise<T>, deps: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fn()
      .then((d) => mounted && setData(d))
      .catch((e) => mounted && setError(String(e)))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, deps);
  return { data, loading, error, setData } as const;
}

export function Crud() {
  const [tab, setTab] = useState<"contacts" | "messages">("contacts");
  return (
    <section className="p-4">
      <div className="flex gap-2 mb-4">
        <button onClick={() => setTab("contacts")} className="btn">
          Contacts
        </button>
        <button onClick={() => setTab("messages")} className="btn">
          Messages
        </button>
      </div>
      {tab === "contacts" ? <ContactsPanel /> : <MessagesPanel />}
    </section>
  );
}

function ContactsPanel() {
  const loader = useAsync(() => getContacts(), []);
  const [editing, setEditing] = useState<Contact | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  async function handleSave(c: Contact) {
    try {
      setSaveError(null);
      if (c.id) {
        await updateContact(c.id, c);
      } else {
        await createContact(c);
      }
      const refreshed = await getContacts();
      loader.setData(refreshed as any);
      setEditing(null);
    } catch (e) {
      setSaveError(String(e));
    }
  }

  async function handleDelete(id?: number) {
    try {
      setSaveError(null);
      if (!id) return;
      await deleteContact(id);
      const refreshed = await getContacts();
      loader.setData(refreshed as any);
    } catch (e) {
      setSaveError(String(e));
    }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Contacts</h2>
      <div className="mb-4">
        <button onClick={() => setEditing({ name: "", email: "", phone: "" })} className="btn">
          New Contact
        </button>
      </div>

      {loader.loading && <div>Loading...</div>}
      {loader.error && <div className="text-red-600">Load error: {loader.error}</div>}
      {saveError && <div className="text-red-600 mb-4">Save error: {saveError}</div>}

      <ul>
        {loader.data?.map((c) => (
          <li key={c.id} className="p-2 border-b flex justify-between items-center">
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-gray-600">{c.email} {c.phone && `· ${c.phone}`}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditing(c)} className="btn">Edit</button>
              <button onClick={() => handleDelete(c.id)} className="btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {editing && (
        <ContactForm contact={editing} onCancel={() => setEditing(null)} onSave={handleSave} />
      )}
    </div>
  );
}

function ContactForm({ contact, onCancel, onSave }: { contact: Contact; onCancel: () => void; onSave: (c: Contact) => void }) {
  const [form, setForm] = useState<Contact>(contact);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(form);
      }}
      className="mt-4 p-4 border rounded"
    >
      <div className="mb-2">
        <label className="block text-sm">Name</label>
        <input className="w-full" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      </div>
      <div className="mb-2">
        <label className="block text-sm">Email</label>
        <input className="w-full" value={form.email || ""} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </div>
      <div className="mb-2">
        <label className="block text-sm">Phone</label>
        <input className="w-full" value={form.phone || ""} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      </div>
      <div className="flex gap-2">
        <button type="submit" className="btn">Save</button>
        <button type="button" onClick={onCancel} className="btn">Cancel</button>
      </div>
    </form>
  );
}

function MessagesPanel() {
  const loader = useAsync(() => getMessages(), []);
  const [editing, setEditing] = useState<Message | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  async function handleSave(m: Message) {
    try {
      setSaveError(null);
      if (m.id) {
        await updateMessage(m.id, m);
      } else {
        await createMessage(m);
      }
      const refreshed = await getMessages();
      loader.setData(refreshed as any);
      setEditing(null);
    } catch (e) {
      setSaveError(String(e));
    }
  }

  async function handleDelete(id?: number) {
    try {
      setSaveError(null);
      if (!id) return;
      await deleteMessage(id);
      const refreshed = await getMessages();
      loader.setData(refreshed as any);
    } catch (e) {
      setSaveError(String(e));
    }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Messages</h2>
      <div className="mb-4">
        <button onClick={() => setEditing({ message1: "" })} className="btn">
          New Message
        </button>
      </div>

      {loader.loading && <div>Loading...</div>}
      {loader.error && <div className="text-red-600">Load error: {loader.error}</div>}
      {saveError && <div className="text-red-600 mb-4">Save error: {saveError}</div>}

      <ul>
        {loader.data?.map((m) => (
          <li key={m.id} className="p-2 border-b flex justify-between items-center">
            <div>
              <div className="font-medium">{m.message1}</div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditing(m)} className="btn">Edit</button>
              <button onClick={() => handleDelete(m.id)} className="btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {editing && (
        <MessageForm message={editing} onCancel={() => setEditing(null)} onSave={handleSave} />
      )}
    </div>
  );
}

function MessageForm({ message, onCancel, onSave }: { message: Message; onCancel: () => void; onSave: (m: Message) => void }) {
  const [form, setForm] = useState<Message>(message);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(form);
      }}
      className="mt-4 p-4 border rounded"
    >
      <div className="mb-2">
        <label className="block text-sm">Message</label>
        <textarea className="w-full" value={form.message1} onChange={(e) => setForm({ ...form, message1: e.target.value })} />
      </div>
      <div className="flex gap-2">
        <button type="submit" className="btn">Save</button>
        <button type="button" onClick={onCancel} className="btn">Cancel</button>
      </div>
    </form>
  );
}

export default Crud;
