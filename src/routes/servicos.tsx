import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Server, Cpu, Wrench, HardDrive, Activity, Database, Code, Globe, Wifi, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site/SiteShell";
import { FadeIn } from "@/components/site/FadeIn";
import { PageFlipCard } from "@/components/site/PremiumAnimations";
import { useI18n } from "@/lib/i18n";

const iconMap = { Server, Cpu, Wrench, HardDrive, Activity, Database, Code, Globe, Wifi } as const;

const bullets: Record<string, string[]> = {
  Server: ["Gestão completa", "Monitorização", "Relatórios detalhados"],
  Cpu: ["Estações de trabalho", "Componentes modernos", "Testes de desempenho"],
  Wrench: ["Reparação rápida", "Troca de peças", "Manutenção preventiva"],
  HardDrive: ["Sistemas operacionais", "Programas essenciais", "Otimização de sistema"],
  Activity: ["Diagnóstico preciso", "Correção imediata", "Suporte técnico"],
  Database: ["Backup automático", "Recuperação de dados", "Segurança da informação"],
  Code: ["Sistemas web", "Aplicações sob medida", "Integrações"],
  Globe: ["Design responsivo", "Otimização SEO", "Gestão de conteúdo"],
  Wifi: ["Cabling estruturado", "Configuração de roteadores", "Resolução de quedas"],
};

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços | SD Soluções Digitais" },
      { name: "description", content: "Montagem, reparação de computadores, instalação de sistemas, backup, desenvolvimento de websites e mais." },
      { property: "og:title", content: "Serviços | SD Soluções Digitais" },
      { property: "og:description", content: "Serviços de informática e desenvolvimento." },
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
          <FadeIn direction="up">
            <span className="text-xs uppercase tracking-widest text-white/60">{t.nav.services}</span>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">{t.services.title}</h1>
            <p className="mt-4 max-w-2xl text-white/80">{t.services.subtitle}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {t.services.items.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <PageFlipCard key={s.title} delay={i * 0.15} className="h-full">
                <article className="h-full rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
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
              </PageFlipCard>
            );
          })}
        </div>

        <div className="container-page mt-16">
          <FadeIn direction="up">
            <div className="rounded-3xl border border-border bg-secondary/50 p-10 md:p-14">
              <h2 className="text-2xl font-semibold md:text-3xl">{t.cta.title}</h2>
              <p className="mt-2 text-muted-foreground">{t.cta.subtitle}</p>
              <Button asChild size="lg" className="mt-6">
                <a href="https://wa.me/258872711984" target="_blank" rel="noopener noreferrer">{t.cta.button} <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </SiteShell>
  );
}
