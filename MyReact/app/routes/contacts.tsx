import { useEffect, useState } from "react";
import type { Contact } from "../services/api";
import {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} from "../services/api";
import { Header } from "../components/Header";

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

export default function Contacts() {
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
    <>
      <Header />
      <main className="main" style={{ marginTop: '80px' }}>
      <section id="contacts" className="py-4">
      <div className="container">
        <div className="section-title mb-4">
          <h2>Contacts Management</h2>
          <p>Manage your contacts</p>
        </div>
        <div>
          <div className="mb-4">
            <button onClick={() => setEditing({ name: "", email: "", phone: "" })} className="btn btn-primary">
              New Contact
            </button>
          </div>

          {loader.loading && <div className="alert alert-info">Loading...</div>}
          {loader.error && <div className="alert alert-danger">Load error: {loader.error}</div>}
          {saveError && <div className="alert alert-danger mb-4">Save error: {saveError}</div>}

          <ul className="list-unstyled">
            {loader.data?.map((c) => (
              <li key={c.id} className="p-3 border-bottom d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-semibold">{c.name}</div>
                  <div className="text-muted">{c.email} {c.phone && `· ${c.phone}`}</div>
                </div>
                <div className="d-flex gap-2">
                  <button onClick={() => setEditing(c)} className="btn btn-sm btn-warning">Edit</button>
                  <button onClick={() => handleDelete(c.id)} className="btn btn-sm btn-danger">Delete</button>
                </div>
              </li>
            ))}
          </ul>

          {editing && (
            <ContactForm contact={editing} onCancel={() => setEditing(null)} onSave={handleSave} />
          )}
        </div>
      </div>
    </section>
      </main>
    </>
  );
}
