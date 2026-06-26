import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Server, Cpu, Wrench, HardDrive, Activity, Database, Code, Globe, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site/SiteShell";
import { FadeIn } from "@/components/site/FadeIn";
import { RevealText, ImageReveal, HoverCard, TypewriterText, PageFlipCard } from "@/components/site/PremiumAnimations";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-datacenter.jpg";
import networkImg from "@/assets/network-infra.jpg";

const iconMap = { Server, Cpu, Wrench, HardDrive, Activity, Database, Code, Globe, Wifi } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SD Soluções Digitais | Soluções Tecnológicas ao Seu Alcance" },
      { name: "description", content: "Serviços de Informática, Tecnologia, Suporte Técnico e Desenvolvimento Web em Moçambique." },
      { property: "og:title", content: "SD Soluções Digitais" },
      { property: "og:description", content: "Serviços de Informática, Tecnologia e Desenvolvimento Web." },
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
          <motion.img 
            initial={{ scale: 1.15, filter: "blur(4px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            src={heroImg} alt="" width={1920} height={1280} className="h-full w-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[image:var(--gradient-primary)] opacity-30" />
        </div>
        <div className="container-page py-24 text-primary-foreground md:py-36">
          <FadeIn direction="none" delay={0}>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide uppercase backdrop-blur">
              {t.hero.eyebrow}
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <TypewriterText text={t.hero.title} as="h1" delay={0.4} className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl" />
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <RevealText text={t.hero.subtitle} as="p" className="mt-5 max-w-2xl text-base text-white/85 md:text-lg" />
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
                <a href="https://wa.me/258872711984" target="_blank" rel="noopener noreferrer">{t.hero.ctaPrimary} <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <a href="https://wa.me/258872711984" target="_blank" rel="noopener noreferrer">{t.hero.ctaSecondary}</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {t.stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1} direction="up">
              <div>
                <div className="font-display text-3xl font-semibold text-foreground md:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <FadeIn direction="up">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold md:text-4xl">{t.services.title}</h2>
              <p className="mt-3 text-muted-foreground">{t.services.subtitle}</p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((s, i) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <PageFlipCard key={s.title} delay={i * 0.15} className="h-full">
                  <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors shadow-[var(--shadow-card)]">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </PageFlipCard>
              );
            })}
          </div>
          <FadeIn direction="up" delay={0.2}>
            <div className="mt-10">
              <Button asChild variant="outline"><Link to="/servicos">{t.nav.services} <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeIn direction="left">
              <h2 className="text-3xl font-semibold md:text-4xl">{t.why.title}</h2>
            </FadeIn>
            <ul className="mt-8 space-y-5">
              {t.why.items.map((w, i) => (
                <FadeIn key={w.title} delay={i * 0.1} direction="up">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                    <div>
                      <div className="font-semibold">{w.title}</div>
                      <div className="text-sm text-muted-foreground">{w.desc}</div>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
          <FadeIn direction="right">
            <ImageReveal src={networkImg} alt="Network infrastructure" width={1600} height={1200} className="rounded-2xl shadow-[var(--shadow-elegant)]" />
          </FadeIn>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <FadeIn direction="up">
            <h2 className="text-3xl font-semibold md:text-4xl">{t.sectors.title}</h2>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.sectors.items.map((s, i) => (
              <FadeIn key={s} delay={i * 0.1} direction="up">
                <div className="rounded-xl border border-border bg-card p-5 text-sm font-medium">{s}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <FadeIn direction="up">
          <div className="overflow-hidden rounded-3xl bg-[image:var(--gradient-primary)] p-10 text-primary-foreground shadow-[var(--shadow-elegant)] md:p-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold md:text-4xl">{t.cta.title}</h2>
              <p className="mt-3 text-white/85">{t.cta.subtitle}</p>
              <Button asChild size="lg" className="mt-6 bg-white text-accent hover:bg-white/90">
                <a href="https://wa.me/258872711984" target="_blank" rel="noopener noreferrer">{t.cta.button} <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </SiteShell>
  );
}

