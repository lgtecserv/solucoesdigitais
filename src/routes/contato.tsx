import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { ContactForm } from "@/components/site/ContactForm";
import { FadeIn } from "@/components/site/FadeIn";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contactos | SD Soluções Digitais" },
      { name: "description", content: "Entre em contacto connosco para suporte informático e desenvolvimento de websites." },
      { property: "og:title", content: "Contactos | SD Soluções Digitais" },
      { property: "og:description", content: "Entre em contacto com a SD Soluções Digitais." },
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
          <FadeIn direction="up">
            <span className="text-xs uppercase tracking-widest text-white/60">{t.nav.contact}</span>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">{t.contact.title}</h1>
            <p className="mt-4 max-w-2xl text-white/80">{t.contact.subtitle}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <FadeIn direction="left">
            <ContactForm />
          </FadeIn>
          <aside className="space-y-4">
            <FadeIn direction="right">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-semibold">{t.contact.info.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" />{t.contact.info.address}</li>
                  <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-primary" />+258 87 271 1984</li>
                  <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-primary" />comercial@solucoesdigitais.co.mz</li>
                  <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 text-primary" />{t.contact.info.hours}</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Mapa"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=32.41%2C-25.93%2C32.45%2C-25.89&layer=mapnik"
                  className="h-72 w-full"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
