import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Monitor, Wrench, Network, ShieldCheck, Server, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site/SiteShell";
import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-datacenter.jpg";
import networkImg from "@/assets/network-infra.jpg";

const iconMap = { Monitor, Wrench, Network, ShieldCheck, Server, Lock } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexusTI — Gestão e infraestrutura de TI para empresas" },
      { name: "description", content: "Gestão de parque informático, montagem, redes, servidores e suporte profissional para empresas." },
      { property: "og:title", content: "NexusTI — Gestão e infraestrutura de TI" },
      { property: "og:description", content: "Gestão, montagem e manutenção de equipamentos informáticos para empresas." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" width={1920} height={1280} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[image:var(--gradient-primary)] opacity-90" />
        </div>
        <div className="container-page py-24 text-primary-foreground md:py-36">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide uppercase backdrop-blur">
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/85 md:text-lg">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
              <Link to="/contato">{t.hero.ctaPrimary} <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link to="/servicos">{t.hero.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-semibold text-foreground md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">{t.services.title}</h2>
            <p className="mt-3 text-muted-foreground">{t.services.subtitle}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <div key={s.title} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Button asChild variant="outline"><Link to="/servicos">{t.nav.services} <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">{t.why.title}</h2>
            <ul className="mt-8 space-y-5">
              {t.why.items.map((w) => (
                <li key={w.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <div>
                    <div className="font-semibold">{w.title}</div>
                    <div className="text-sm text-muted-foreground">{w.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
            <img src={networkImg} alt="Network infrastructure" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <h2 className="text-3xl font-semibold md:text-4xl">{t.sectors.title}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.sectors.items.map((s) => (
              <div key={s} className="rounded-xl border border-border bg-card p-5 text-sm font-medium">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="overflow-hidden rounded-3xl bg-[image:var(--gradient-primary)] p-10 text-primary-foreground shadow-[var(--shadow-elegant)] md:p-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">{t.cta.title}</h2>
            <p className="mt-3 text-white/85">{t.cta.subtitle}</p>
            <Button asChild size="lg" className="mt-6 bg-white text-accent hover:bg-white/90">
              <Link to="/contato">{t.cta.button} <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
