import { useEffect, useState } from "react";
import type { Message } from "../services/api";
import {
  getMessages,
  createMessage,
  updateMessage,
  deleteMessage,
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

export default function Messages() {
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
    <>
      <Header />
      <main className="main" style={{ marginTop: '80px' }}>
      <section id="messages" className="py-4">
      <div className="container">
        <div className="section-title mb-4">
          <h2>Messages Management</h2>
          <p>Manage your messages</p>
        </div>
        <div>
          <div className="mb-4">
            <button onClick={() => setEditing({ message1: "" })} className="btn btn-primary">
              New Message
            </button>
          </div>

          {loader.loading && <div className="alert alert-info">Loading...</div>}
          {loader.error && <div className="alert alert-danger">Load error: {loader.error}</div>}
          {saveError && <div className="alert alert-danger mb-4">Save error: {saveError}</div>}

          <ul className="list-unstyled">
            {loader.data?.map((m) => (
              <li key={m.id} className="p-3 border-bottom d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-semibold">{m.message1}</div>
                </div>
                <div className="d-flex gap-2">
                  <button onClick={() => setEditing(m)} className="btn btn-sm btn-warning">Edit</button>
                  <button onClick={() => handleDelete(m.id)} className="btn btn-sm btn-danger">Delete</button>
                </div>
              </li>
            ))}
          </ul>

          {editing && (
            <MessageForm message={editing} onCancel={() => setEditing(null)} onSave={handleSave} />
          )}
        </div>
      </div>
    </section>
      </main>
    </>
  );
}
