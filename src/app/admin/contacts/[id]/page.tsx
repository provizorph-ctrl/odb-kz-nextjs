"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";

export default function EditContactPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ label: "", value: "", type: "phone", sortOrder: 0 });

  useEffect(() => {
    fetch(`/api/contacts/${id}`).then(r => r.json()).then(data => {
      setForm({ label: data.label || "", value: data.value || "", type: data.type || "phone", sortOrder: data.sortOrder || 0 });
      setLoading(false);
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const res = await fetch(`/api/contacts/${id}`, {
      method: "PUT", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push("/admin/contacts");
    else { setSaving(false); alert("Ошибка"); }
  };

  const handleDelete = async () => {
    if (!confirm("Удалить контакт?")) return;
    const res = await fetch(`/api/contacts/${id}`, { method: "DELETE" });
    if (res.ok) router.push("/admin/contacts");
  };

  if (loading) return <p className="text-gray-500">Загрузка...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Редактирование контакта</h1>
        <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Удалить</button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div>
          <label className="block text-sm font-medium mb-1">Название</label>
          <input type="text" value={form.label} onChange={e => setForm({ ...form, label: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Значение</label>
          <input type="text" value={form.value} onChange={e => setForm({ ...form, value: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Тип</label>
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="phone">Телефон</option>
              <option value="email">Email</option>
              <option value="address">Адрес</option>
              <option value="hotline">Горячая линия</option>
              <option value="other">Другое</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Порядок</label>
            <input type="number" value={form.sortOrder} onChange={e => setForm({ ...form, sortOrder: Number(e.target.value) })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>
        <div className="flex gap-4">
          <button type="submit" disabled={saving} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50">{saving ? "Сохранение..." : "Сохранить"}</button>
          <button type="button" onClick={() => router.back()} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Отмена</button>
        </div>
      </form>
    </div>
  );
}
