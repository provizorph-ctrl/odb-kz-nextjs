"use client";

import { useLang } from "@/lib/lang-context";

interface CmsContentProps {
  title?: string;
  titleEn?: string;
  titleKz?: string;
  content?: string;
  contentEn?: string;
  contentKz?: string;
  hospitalName?: string;
}

function getLocalized(ru?: string, en?: string, kz?: string, lang?: string) {
  switch (lang) {
    case "en": return en || ru;
    case "kz": return kz || ru;
    default: return ru;
  }
}

export function CmsContent({
  title, titleEn, titleKz,
  content, contentEn, contentKz,
  hospitalName,
}: CmsContentProps) {
  const { lang } = useLang();

  const displayTitle = getLocalized(title, titleEn, titleKz, lang);
  const displayContent = getLocalized(content, contentEn, contentKz, lang);

  if (content !== undefined) {
    return (
      <div className="prose prose-lg max-w-4xl" dangerouslySetInnerHTML={{ __html: displayContent || "" }} />
    );
  }

  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{displayTitle}</h1>
      {hospitalName && (
        <h2 className="text-lg sm:text-xl text-primary mt-2">{hospitalName}</h2>
      )}
    </>
  );
}
