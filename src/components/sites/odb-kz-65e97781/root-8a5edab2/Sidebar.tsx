interface ContactData {
  label: string;
  value: string;
}

export function Sidebar({ contacts }: { contacts: ContactData[] }) {
  return (
    <aside className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-soft border border-border/50">
        <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
          <div className="w-1 h-5 bg-primary rounded-full" />
          Контакты
        </h3>
        <div className="space-y-3">
          {contacts.map((contact) => (
            <div key={contact.label}>
              <span className="text-xs text-muted-foreground block">{contact.label}</span>
              <a
                href={`tel:${contact.value.replace(/[^+0-9]/g, "")}`}
                className="text-sm font-semibold text-primary hover:underline"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
        <h3 className="text-sm font-bold mb-2">Запишитесь на приём</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Позвоните нам для записи к специалисту
        </p>
        <a
          href={`tel:${(contacts[0]?.value || "+77252530000").replace(/[^+0-9]/g, "")}`}
          className="block w-full text-center px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Позвонить
        </a>
      </div>
    </aside>
  );
}
