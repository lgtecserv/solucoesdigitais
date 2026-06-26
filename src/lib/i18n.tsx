import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

type Dict = typeof translations.pt;

export const translations = {
  pt: {
    nav: { home: "Início", services: "Serviços", about: "Sobre", contact: "Contato", quote: "Pedir orçamento" },
    company: "NexusTI",
    tagline: "Gestão e exploração de equipamentos informáticos",
    hero: {
      eyebrow: "Soluções de TI profissionais",
      title: "Infraestrutura de TI que sustenta o seu negócio",
      subtitle:
        "Gestão, montagem e manutenção de equipamentos informáticos com a confiança de uma equipa certificada e atendimento próximo.",
      ctaPrimary: "Pedir orçamento",
      ctaSecondary: "Ver serviços",
    },
    services: {
      title: "O que fazemos",
      subtitle: "Serviços de TI ponta a ponta para empresas que não podem parar.",
      items: [
        { title: "Gestão de parque informático", desc: "Inventário, monitorização e ciclo de vida completo dos seus equipamentos.", icon: "Monitor" },
        { title: "Montagem e instalação", desc: "Montagem de estações, servidores e periféricos com padrão profissional.", icon: "Wrench" },
        { title: "Redes e cabling", desc: "Infraestrutura estruturada, Wi-Fi corporativo e patch panels organizados.", icon: "Network" },
        { title: "Manutenção preventiva", desc: "Planos preventivos e corretivos com SLA claro e relatórios mensais.", icon: "ShieldCheck" },
        { title: "Servidores e cloud", desc: "Implementação, migração e operação de servidores on-premise e cloud.", icon: "Server" },
        { title: "Segurança e backup", desc: "Antivírus corporativo, firewall, backup automatizado e recuperação.", icon: "Lock" },
      ],
    },
    why: {
      title: "Por que escolher-nos",
      items: [
        { title: "Equipa certificada", desc: "Técnicos com certificações reconhecidas pelo mercado." },
        { title: "Resposta rápida", desc: "Atendimento em até 4h úteis com SLA contratual." },
        { title: "Equipamentos de marca", desc: "Parceiros oficiais Dell, HP, Lenovo, Cisco e Ubiquiti." },
        { title: "Contratos flexíveis", desc: "Planos sob medida para a realidade da sua operação." },
      ],
    },
    sectors: {
      title: "Setores que atendemos",
      items: ["Pequenas e médias empresas", "Escritórios e coworking", "Retalho e franchises", "Indústria e logística"],
    },
    stats: [
      { value: "12+", label: "anos de experiência" },
      { value: "180+", label: "clientes ativos" },
      { value: "5.000+", label: "equipamentos geridos" },
      { value: "99.9%", label: "SLA cumprido" },
    ],
    cta: {
      title: "Pronto para profissionalizar a sua TI?",
      subtitle: "Fale connosco e receba um diagnóstico gratuito da sua infraestrutura.",
      button: "Falar com um especialista",
    },
    about: {
      title: "Sobre a NexusTI",
      lead: "Há mais de uma década a operar e a transformar parques informáticos de empresas que dependem de tecnologia para crescer.",
      mission: { title: "Missão", text: "Entregar infraestrutura de TI estável, segura e bem operada para que as empresas se foquem no que sabem fazer." },
      vision: { title: "Visão", text: "Ser a referência ibérica em gestão de equipamentos e operação de TI para PMEs." },
      values: { title: "Valores", text: "Responsabilidade, transparência, proximidade e excelência técnica." },
      historyTitle: "A nossa história",
      historyText:
        "Fundada por engenheiros de sistemas com passagem por integradores internacionais, a NexusTI nasceu da convicção de que TI bem gerida é a base de qualquer negócio moderno. Hoje operamos parques informáticos em todo o país, com equipa própria e parceiros homologados.",
      partnersTitle: "Parceiros e certificações",
    },
    contact: {
      title: "Vamos conversar",
      subtitle: "Conte o seu desafio e responderemos em até 1 dia útil.",
      form: {
        name: "Nome", company: "Empresa", email: "Email", phone: "Telefone",
        service: "Serviço de interesse", chooseService: "Selecione um serviço",
        message: "Mensagem", submit: "Enviar pedido",
        success: "Mensagem enviada! Entraremos em contato em breve.",
      },
      info: { title: "Informações", address: "Av. da República, 1500 — Lisboa", hours: "Seg–Sex, 09h–19h" },
    },
    footer: {
      tagline: "Gestão e exploração de equipamentos informáticos para empresas.",
      rights: "Todos os direitos reservados.",
      cols: { services: "Serviços", company: "Empresa", contact: "Contato" },
    },
    meta: {
      home: { title: "NexusTI — Gestão e infraestrutura de TI para empresas", desc: "Gestão de parque informático, montagem, redes, servidores e suporte para empresas." },
      services: { title: "Serviços de TI — NexusTI", desc: "Soluções completas em TI: gestão de equipamentos, redes, servidores, segurança e suporte." },
      about: { title: "Sobre a NexusTI", desc: "Conheça a equipa, missão e valores da NexusTI." },
      contact: { title: "Contato — NexusTI", desc: "Fale com a NexusTI e receba um diagnóstico gratuito." },
    },
  },
  en: {
    nav: { home: "Home", services: "Services", about: "About", contact: "Contact", quote: "Get a quote" },
    company: "NexusTI",
    tagline: "IT equipment management & operations",
    hero: {
      eyebrow: "Professional IT solutions",
      title: "IT infrastructure that powers your business",
      subtitle:
        "Management, assembly and maintenance of IT equipment, delivered by a certified team you can rely on.",
      ctaPrimary: "Get a quote",
      ctaSecondary: "Explore services",
    },
    services: {
      title: "What we do",
      subtitle: "End-to-end IT services for businesses that cannot afford to stop.",
      items: [
        { title: "IT asset management", desc: "Inventory, monitoring and full lifecycle of your equipment.", icon: "Monitor" },
        { title: "Assembly & installation", desc: "Workstations, servers and peripherals deployed to professional standards.", icon: "Wrench" },
        { title: "Networks & cabling", desc: "Structured cabling, enterprise Wi-Fi and tidy patch panels.", icon: "Network" },
        { title: "Preventive maintenance", desc: "Preventive and corrective plans with clear SLAs and monthly reports.", icon: "ShieldCheck" },
        { title: "Servers & cloud", desc: "Deployment, migration and operation of on-prem and cloud servers.", icon: "Server" },
        { title: "Security & backup", desc: "Endpoint security, firewall, automated backup and recovery.", icon: "Lock" },
      ],
    },
    why: {
      title: "Why choose us",
      items: [
        { title: "Certified team", desc: "Engineers with industry-recognized certifications." },
        { title: "Fast response", desc: "Response within 4 business hours under contractual SLA." },
        { title: "Trusted hardware", desc: "Official partners of Dell, HP, Lenovo, Cisco and Ubiquiti." },
        { title: "Flexible contracts", desc: "Plans tailored to the reality of your operation." },
      ],
    },
    sectors: {
      title: "Industries we serve",
      items: ["Small and medium business", "Offices & coworking", "Retail & franchises", "Industry & logistics"],
    },
    stats: [
      { value: "12+", label: "years of experience" },
      { value: "180+", label: "active clients" },
      { value: "5,000+", label: "devices managed" },
      { value: "99.9%", label: "SLA delivered" },
    ],
    cta: {
      title: "Ready to professionalize your IT?",
      subtitle: "Talk to us and get a free assessment of your infrastructure.",
      button: "Talk to a specialist",
    },
    about: {
      title: "About NexusTI",
      lead: "For over a decade we have been operating and transforming IT environments for companies that rely on technology to grow.",
      mission: { title: "Mission", text: "Deliver stable, secure and well-operated IT so our clients can focus on what they do best." },
      vision: { title: "Vision", text: "Be the Iberian reference in equipment management and IT operations for SMBs." },
      values: { title: "Values", text: "Accountability, transparency, closeness and technical excellence." },
      historyTitle: "Our story",
      historyText:
        "Founded by systems engineers with experience in international integrators, NexusTI was born from the belief that well-managed IT is the foundation of any modern business. Today we operate IT estates nationwide with our own team and certified partners.",
      partnersTitle: "Partners & certifications",
    },
    contact: {
      title: "Let's talk",
      subtitle: "Tell us your challenge and we will reply within 1 business day.",
      form: {
        name: "Name", company: "Company", email: "Email", phone: "Phone",
        service: "Service of interest", chooseService: "Choose a service",
        message: "Message", submit: "Send request",
        success: "Message sent! We will reach out shortly.",
      },
      info: { title: "Information", address: "Av. da República, 1500 — Lisbon", hours: "Mon–Fri, 9am–7pm" },
    },
    footer: {
      tagline: "IT equipment management and operations for businesses.",
      rights: "All rights reserved.",
      cols: { services: "Services", company: "Company", contact: "Contact" },
    },
    meta: {
      home: { title: "NexusTI — IT management & infrastructure for business", desc: "IT asset management, assembly, networks, servers and support for businesses." },
      services: { title: "IT Services — NexusTI", desc: "Complete IT solutions: equipment management, networks, servers, security and support." },
      about: { title: "About NexusTI", desc: "Meet the team, mission and values of NexusTI." },
      contact: { title: "Contact — NexusTI", desc: "Talk to NexusTI and get a free assessment." },
    },
  },
} as const;

type I18nCtx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");
  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "pt" || stored === "en") setLangState(stored);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    }
  };
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);
  return <Ctx.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
