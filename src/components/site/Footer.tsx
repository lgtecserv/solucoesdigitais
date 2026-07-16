import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logoImg from "@/assets/logo.png";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 border-t border-border bg-accent text-accent-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <img src={logoImg} alt={t.company} className="h-10 w-auto object-contain" />
            <span className="sr-only">{t.company}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-accent-foreground/70">{t.footer.tagline}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">{t.footer.cols.services}</h4>
          <ul className="mt-3 space-y-2 text-sm text-accent-foreground/70">
            {t.services.items.slice(0, 5).map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">{t.footer.cols.company}</h4>
          <ul className="mt-3 space-y-2 text-sm text-accent-foreground/70">
            <li><Link to="/sobre" className="hover:text-accent-foreground">{t.nav.about}</Link></li>
            <li><Link to="/servicos" className="hover:text-accent-foreground">{t.nav.services}</Link></li>
            <li><Link to="/contato" className="hover:text-accent-foreground">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">{t.footer.cols.contact}</h4>
          <ul className="mt-3 space-y-2 text-sm text-accent-foreground/70">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> <span>{t.contact.info.address}</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> <span>+258 87 271 1984</span></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> <span>comercial@solucoesdigitais.co.mz</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-accent-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {t.company}. {t.footer.rights}</span>
          <span>Mocuba · Zambézia</span>
        </div>
      </div>
    </footer>
  );
}
