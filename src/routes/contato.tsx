import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { ContactForm } from "@/components/site/ContactForm";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — NexusTI" },
      { name: "description", content: "Fale com a NexusTI e receba um diagnóstico gratuito da sua infraestrutura de TI." },
      { property: "og:title", content: "Contato — NexusTI" },
      { property: "og:description", content: "Entre em contato com a NexusTI." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <SiteShell>
      <section className="bg-accent text-accent-foreground">
        <div className="container-page py-20 md:py-28">
          <span className="text-xs uppercase tracking-widest text-white/60">{t.nav.contact}</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">{t.contact.title}</h1>
          <p className="mt-4 max-w-2xl text-white/80">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-display text-lg font-semibold">{t.contact.info.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" />{t.contact.info.address}</li>
                <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-primary" />+351 210 000 000</li>
                <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-primary" />hello@nexusti.com</li>
                <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 text-primary" />{t.contact.info.hours}</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Mapa"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-9.16%2C38.72%2C-9.13%2C38.74&layer=mapnik"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
