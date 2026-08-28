"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";

export default function EditNewsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    slug: "",
    title: "",
    description: "",
    content: "",
    isPublished: false,
    isFeatured: false,
  });

  useEffect(() => {
    fetch(`/api/news/${id}`).then(r => r.json()).then(data => {
      setForm({
        slug: data.slug || "",
        title: data.title || "",
        description: data.description || "",
        content: data.content || "",
        isPublished: data.isPublished || false,
        isFeatured: data.isFeatured || false,
      });
      setLoading(false);
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const res = await fetch(`/api/news/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push("/admin/news");
    else { setSaving(false); alert("Ошибка"); }
  };

  const handleDelete = async () => {
    if (!confirm("Удалить новость?")) return;
    const res = await fetch(`/api/news/${id}`, { method: "DELETE" });
    if (res.ok) router.push("/admin/news");
  };

  if (loading) return <p className="text-gray-500">Загрузка...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Редактирование новости</h1>
        <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Удалить</button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input type="text" value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Заголовок</label>
            <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Описание</label>
          <input type="text" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Контент</label>
          <textarea value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg h-48" required />
        </div>
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={form.isPublished} onChange={e => setForm({ ...form, isPublished: e.target.checked })} className="w-4 h-4" />
            <span className="text-sm">Опубликовать</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={form.isFeatured} onChange={e => setForm({ ...form, isFeatured: e.target.checked })} className="w-4 h-4" />
            <span className="text-sm">Важная</span>
          </label>
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
