"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";

export default function EditDepartmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    slug: "", name: "", nameEn: "", nameKz: "", nameQz: "",
    description: "", descriptionEn: "", descriptionKz: "",
    icon: "", sortOrder: 0, isPublished: false,
  });

  useEffect(() => {
    fetch(`/api/departments/${id}`).then(r => r.json()).then(data => {
      setForm({
        slug: data.slug || "", name: data.name || "",
        nameEn: data.nameEn || "", nameKz: data.nameKz || "", nameQz: data.nameQz || "",
        description: data.description || "",
        descriptionEn: data.descriptionEn || "", descriptionKz: data.descriptionKz || "",
        icon: data.icon || "", sortOrder: data.sortOrder || 0,
        isPublished: data.isPublished || false,
      });
      setLoading(false);
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const res = await fetch(`/api/departments/${id}`, {
      method: "PUT", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push("/admin/departments");
    else { setSaving(false); alert("Ошибка"); }
  };

  const handleDelete = async () => {
    if (!confirm("Удалить отделение?")) return;
    const res = await fetch(`/api/departments/${id}`, { method: "DELETE" });
    if (res.ok) router.push("/admin/departments");
  };

  if (loading) return <p className="text-gray-500">Загрузка...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Редактирование отделения</h1>
        <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Удалить</button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input type="text" value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Название (RU) *</label>
            <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Название (EN)</label>
            <input type="text" value={form.nameEn} onChange={e => setForm({ ...form, nameEn: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Название (KZ)</label>
            <input type="text" value={form.nameKz} onChange={e => setForm({ ...form, nameKz: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Название (QZ)</label>
            <input type="text" value={form.nameQz} onChange={e => setForm({ ...form, nameQz: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Описание (RU)</label>
          <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg h-32" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Описание (EN)</label>
            <textarea value={form.descriptionEn} onChange={e => setForm({ ...form, descriptionEn: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg h-24" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Описание (KZ)</label>
            <textarea value={form.descriptionKz} onChange={e => setForm({ ...form, descriptionKz: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg h-24" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Иконка</label>
            <input type="text" value={form.icon} onChange={e => setForm({ ...form, icon: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Порядок</label>
            <input type="number" value={form.sortOrder} onChange={e => setForm({ ...form, sortOrder: Number(e.target.value) })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="flex items-end pb-1">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={form.isPublished} onChange={e => setForm({ ...form, isPublished: e.target.checked })} className="w-4 h-4" />
              <span className="text-sm">Опубликовать</span>
            </label>
          </div>
        </div>
        <div className="flex gap-4">
          <button type="submit" disabled={saving} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50">
            {saving ? "Сохранение..." : "Сохранить"}
          </button>
          <button type="button" onClick={() => router.back()} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}
