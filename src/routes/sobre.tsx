import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { FadeIn } from "@/components/site/FadeIn";
import { ImageReveal } from "@/components/site/PremiumAnimations";
import { useI18n } from "@/lib/i18n";
import technicianImg from "@/assets/technician-assembly.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós | SD Soluções Digitais" },
      { name: "description", content: "A SD Soluções Digitais é especializada em soluções informáticas para empresas e particulares." },
      { property: "og:title", content: "Sobre Nós | SD Soluções Digitais" },
      { property: "og:description", content: "Soluções informáticas para empresas e particulares." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  const pillars = [t.about.mission, t.about.vision, t.about.values];

  return (
    <SiteShell>
      <section className="bg-accent text-accent-foreground">
        <div className="container-page py-20 md:py-28">
          <FadeIn direction="up">
            <span className="text-xs uppercase tracking-widest text-white/60">{t.nav.about}</span>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">{t.about.title}</h1>
            <p className="mt-4 max-w-2xl text-white/80">{t.about.lead}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn direction="left">
            <ImageReveal src={technicianImg} alt="Técnico montando equipamento" width={1600} height={1200} className="rounded-2xl shadow-[var(--shadow-elegant)]" />
          </FadeIn>
          <FadeIn direction="right">
            <div>
              <h2 className="text-3xl font-semibold">{t.about.historyTitle}</h2>
              <p className="mt-4 text-muted-foreground">{t.about.historyText}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1} direction="up" className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <FadeIn direction="up">
            <h2 className="text-2xl font-semibold md:text-3xl">{t.about.partnersTitle}</h2>
          </FadeIn>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {["Dell", "HP", "Lenovo", "Cisco", "Ubiquiti", "Microsoft"].map((b, i) => (
              <FadeIn key={b} delay={i * 0.05} direction="up">
                <div className="grid h-20 place-items-center rounded-xl border border-border bg-card font-display text-lg font-semibold text-muted-foreground">{b}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
