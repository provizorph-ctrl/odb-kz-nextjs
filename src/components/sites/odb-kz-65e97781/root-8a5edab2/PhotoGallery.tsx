"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import type { GalleryCategory, GalleryImage } from "@/types/odb-kz";

const categories: GalleryCategory[] = [
  { id: "all", name: "О поликлинике", nameEn: "About clinic", nameKz: "Поликлиника туралы", isActive: true },
  { id: "staff", name: "Персонал", nameEn: "Staff", nameKz: "Персонал" },
  { id: "recommendations", name: "Рекомендации специалистов", nameEn: "Specialist Recommendations", nameKz: "Мамандардың ұсыныстары" },
  { id: "events", name: "Мероприятия", nameEn: "Events", nameKz: "Іс-шаралар" },
];

const images: GalleryImage[] = [
  { id: "1", src: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-1.jpg", alt: "Фото 1", thumbnail: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-1.jpg", categoryId: "all" },
  { id: "2", src: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-2.jpg", alt: "Фото 2", thumbnail: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-2.jpg", categoryId: "all" },
  { id: "3", src: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-3.jpg", alt: "Фото 3", thumbnail: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-3.jpg", categoryId: "all" },
  { id: "4", src: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-4.jpg", alt: "Фото 4", thumbnail: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-4.jpg", categoryId: "staff" },
  { id: "5", src: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-5.jpg", alt: "Фото 5", thumbnail: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-5.jpg", categoryId: "staff" },
  { id: "6", src: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-6.jpg", alt: "Фото 6", thumbnail: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-6.jpg", categoryId: "recommendations" },
  { id: "7", src: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-7.jpg", alt: "Фото 7", thumbnail: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-7.jpg", categoryId: "events" },
  { id: "8", src: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-8.jpg", alt: "Фото 8", thumbnail: "/sites/odb-kz-65e97781/root-8a5edab2/images/gallery-8.jpg", categoryId: "events" },
];

export function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { lang, t } = useLang();

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.categoryId === activeCategory);

  function catName(cat: GalleryCategory) {
    switch (lang) {
      case "en": return cat.nameEn || cat.name;
      case "kz": return cat.nameKz || cat.name;
      default: return cat.name;
    }
  }

  return (
    <section className="py-4">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="section-decoration" aria-hidden="true" />
          <h2 className="section-heading">{t("galleryTitle")}</h2>
        </div>
        <a href="#" className="text-sm text-primary hover:text-primary/80 font-medium transition-colors flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
          {t("allPhotos")}
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="flex gap-2 mb-5 overflow-x-auto pb-1 scrollbar-hide" role="tablist" aria-label="Gallery categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            role="tab"
            aria-selected={activeCategory === cat.id}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              activeCategory === cat.id
                ? "bg-primary text-white shadow-soft"
                : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
            }`}
          >
            {catName(cat)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" role="tabpanel">
        {filteredImages.map((image, index) => (
          <a
            key={image.id}
            href={image.src}
            className="group relative aspect-square rounded-xl overflow-hidden bg-muted border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            data-lightbox="gallery"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-primary/5 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="size-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                <svg className="size-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
