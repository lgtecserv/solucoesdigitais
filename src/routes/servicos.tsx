import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Monitor, Wrench, Network, ShieldCheck, Server, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site/SiteShell";
import { useI18n } from "@/lib/i18n";

const iconMap = { Monitor, Wrench, Network, ShieldCheck, Server, Lock } as const;

const bullets: Record<string, string[]> = {
  Monitor: ["Inventário completo", "Monitorização 24/7", "Relatórios mensais"],
  Wrench: ["Estações de trabalho", "Servidores rack", "Periféricos e displays"],
  Network: ["Cabling estruturado", "Switches & firewalls", "Wi-Fi corporativo"],
  ShieldCheck: ["SLA contratual", "Visitas preventivas", "Helpdesk dedicado"],
  Server: ["On-premise & cloud", "Virtualização", "Migrações sem downtime"],
  Lock: ["Endpoint protection", "Backup automatizado", "Disaster recovery"],
};

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços de TI — NexusTI" },
      { name: "description", content: "Gestão de parque informático, montagem, redes, servidores, segurança e suporte para empresas." },
      { property: "og:title", content: "Serviços de TI — NexusTI" },
      { property: "og:description", content: "Soluções completas em TI para empresas." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();
  return (
    <SiteShell>
      <section className="bg-accent text-accent-foreground">
        <div className="container-page py-20 md:py-28">
          <span className="text-xs uppercase tracking-widest text-white/60">{t.nav.services}</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">{t.services.title}</h1>
          <p className="mt-4 max-w-2xl text-white/80">{t.services.subtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {t.services.items.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <article key={s.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{s.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      {bullets[s.icon].map((b) => (
                        <li key={b} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="container-page mt-16">
          <div className="rounded-3xl border border-border bg-secondary/50 p-10 md:p-14">
            <h2 className="text-2xl font-semibold md:text-3xl">{t.cta.title}</h2>
            <p className="mt-2 text-muted-foreground">{t.cta.subtitle}</p>
            <Button asChild size="lg" className="mt-6">
              <Link to="/contato">{t.cta.button} <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
