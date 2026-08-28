"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewSettingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ key: "", value: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/settings", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push("/admin/settings");
    else { setLoading(false); alert("Ошибка"); }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Новая настройка</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div>
          <label className="block text-sm font-medium mb-1">Ключ</label>
          <input type="text" value={form.key} onChange={e => setForm({ ...form, key: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono" required placeholder="site_title" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Значение</label>
          <textarea value={form.value} onChange={e => setForm({ ...form, value: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg h-32" required />
        </div>
        <div className="flex gap-4">
          <button type="submit" disabled={loading} className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50">{loading ? "Сохранение..." : "Сохранить"}</button>
          <button type="button" onClick={() => router.back()} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Отмена</button>
        </div>
      </form>
    </div>
  );
}
