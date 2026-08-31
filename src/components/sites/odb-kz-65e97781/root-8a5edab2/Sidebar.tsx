"use client";

import { useLang } from "@/lib/lang-context";

interface ContactData {
  label: string;
  value: string;
}

export function Sidebar({ contacts }: { contacts: ContactData[] }) {
  const { t } = useLang();

  return (
    <aside className="space-y-3 sm:space-y-6 lg:sticky lg:top-24 lg:self-start" aria-label="Sidebar">
      <div className="bg-white rounded-lg sm:rounded-2xl p-3 sm:p-6 shadow-soft border border-border/50">
        <h3 className="text-sm font-bold mb-3 sm:mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)]">
          <div className="w-1 h-5 bg-primary rounded-full" aria-hidden="true" />
          {t("contactsTitle")}
        </h3>
        <div className="space-y-2.5 sm:space-y-3">
          {contacts.map((contact) => (
            <div key={contact.label}>
              <span className="text-[11px] sm:text-xs text-muted-foreground block">{contact.label}</span>
              <a
                href={`tel:${contact.value.replace(/[^+0-9]/g, "")}`}
                className="text-xs sm:text-sm font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary/5 rounded-lg sm:rounded-2xl p-3 sm:p-6 border border-primary/10">
        <h3 className="text-sm font-bold mb-1.5 sm:mb-2 font-[family-name:var(--font-heading)]">{t("bookAppointment")}</h3>
        <p className="text-[11px] sm:text-xs text-muted-foreground mb-3 sm:mb-4">
          {t("callToBook")}
        </p>
        <a
          href={`tel:${(contacts[0]?.value || "+77252530000").replace(/[^+0-9]/g, "")}`}
          className="cta-primary w-full text-center text-sm"
        >
          {t("call")}
        </a>
      </div>
    </aside>
  );
}
