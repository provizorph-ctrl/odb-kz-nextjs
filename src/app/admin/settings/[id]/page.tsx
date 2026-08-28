"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";

export default function EditSettingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ key: "", value: "" });

  useEffect(() => {
    fetch(`/api/settings/${id}`).then(r => r.json()).then(data => {
      setForm({ key: data.key || "", value: data.value || "" });
      setLoading(false);
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const res = await fetch(`/api/settings/${id}`, {
      method: "PUT", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push("/admin/settings");
    else { setSaving(false); alert("Ошибка"); }
  };

  const handleDelete = async () => {
    if (!confirm("Удалить настройку?")) return;
    const res = await fetch(`/api/settings/${id}`, { method: "DELETE" });
    if (res.ok) router.push("/admin/settings");
  };

  if (loading) return <p className="text-gray-500">Загрузка...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Редактирование настройки</h1>
        <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Удалить</button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div>
          <label className="block text-sm font-medium mb-1">Ключ</label>
          <input type="text" value={form.key} onChange={e => setForm({ ...form, key: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Значение</label>
          <textarea value={form.value} onChange={e => setForm({ ...form, value: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg h-48" required />
        </div>
        <div className="flex gap-4">
          <button type="submit" disabled={saving} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50">{saving ? "Сохранение..." : "Сохранить"}</button>
          <button type="button" onClick={() => router.back()} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Отмена</button>
        </div>
      </form>
    </div>
  );
}
