"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewNewsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    slug: "",
    title: "",
    titleEn: "",
    titleKz: "",
    content: "",
    contentEn: "",
    contentKz: "",
    description: "",
    isPublished: false,
    isFeatured: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push("/admin/news");
    else {
      setLoading(false);
      alert("Ошибка при создании");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Новая новость</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input type="text" value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Заголовок (RU) *</label>
            <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Заголовок (EN)</label>
            <input type="text" value={form.titleEn} onChange={e => setForm({ ...form, titleEn: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Заголовок (KZ)</label>
            <input type="text" value={form.titleKz} onChange={e => setForm({ ...form, titleKz: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Описание</label>
          <input type="text" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Контент (RU) *</label>
          <textarea value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg h-48 font-mono text-sm" required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Контент (EN)</label>
            <textarea value={form.contentEn} onChange={e => setForm({ ...form, contentEn: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg h-32 font-mono text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Контент (KZ)</label>
            <textarea value={form.contentKz} onChange={e => setForm({ ...form, contentKz: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg h-32 font-mono text-sm" />
          </div>
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
          <button type="submit" disabled={loading} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50">
            {loading ? "Сохранение..." : "Сохранить"}
          </button>
          <button type="button" onClick={() => router.back()} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}
