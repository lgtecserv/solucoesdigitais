import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

type Dict = (typeof translations)["pt"];

export const translations = {
  pt: {
    nav: { home: "Início", services: "Serviços", about: "Sobre", contact: "Contactos", quote: "Solicitar Orçamento" },
    company: "SD Soluções Digitais",
    tagline: "Soluções Tecnológicas ao Seu Alcance",
    hero: {
      eyebrow: "Soluções Tecnológicas para Empresas e Particulares",
      title: "Soluções Tecnológicas ao Seu Alcance",
      subtitle:
        "Especialistas em informática, suporte técnico, manutenção de computadores e desenvolvimento de websites.",
      ctaPrimary: "Solicitar Orçamento",
      ctaSecondary: "Falar no WhatsApp",
    },
    services: {
      title: "Os Nossos Serviços",
      subtitle: "Soluções completas para particulares e empresas que precisam da tecnologia sempre a funcionar.",
      items: [
        { title: "Gestão de equipamentos", desc: "Gestão e exploração de equipamentos informáticos.", icon: "Server" },
        { title: "Montagem de computadores", desc: "Montagem e configuração de computadores.", icon: "Cpu" },
        { title: "Reparação de computadores", desc: "Reparação de computadores e equipamentos periféricos.", icon: "Wrench" },
        { title: "Instalação de sistemas", desc: "Instalação de programas e sistemas operacionais.", icon: "HardDrive" },
        { title: "Diagnóstico de avarias", desc: "Diagnóstico e correção de avarias.", icon: "Activity" },
        { title: "Backup de informação", desc: "Soluções seguras de backup e recuperação de dados.", icon: "Database" },
        { title: "Programação informática", desc: "Desenvolvimento de software e programação informática.", icon: "Code" },
        { title: "Desenvolvimento web", desc: "Desenvolvimento e gestão de websites profissionais.", icon: "Globe" },
        { title: "Redes e Wi-Fi", desc: "Configuração e resolução de problemas de Internet Wi-Fi e cabo.", icon: "Wifi" },
      ],
    },
    why: {
      title: "Os Nossos Diferenciais",
      items: [
        { title: "Atendimento rápido", desc: "Resposta célere para minimizar o tempo de inatividade." },
        { title: "Técnicos qualificados", desc: "Equipa técnica com vasta experiência no setor." },
        { title: "Soluções personalizadas", desc: "Adaptamos os nossos serviços às suas necessidades." },
        { title: "Equipamentos modernos", desc: "Utilizamos as melhores ferramentas e tecnologias." },
        { title: "Suporte especializado", desc: "Acompanhamento dedicado para resolver qualquer problema." },
        { title: "Qualidade/preço", desc: "Excelente relação qualidade e preço em todos os serviços." },
      ],
    },
    sectors: {
      title: "Como Trabalhamos",
      items: ["1. Contacto", "2. Diagnóstico", "3. Orçamento", "4. Execução", "5. Testes", "6. Entrega"],
    },
    stats: [
      { value: "Rápido", label: "Atendimento" },
      { value: "Qualificados", label: "Técnicos" },
      { value: "100%", label: "Personalizado" },
      { value: "Premium", label: "Qualidade/Preço" },
    ],
    cta: {
      title: "Precisa de apoio técnico?",
      subtitle: "Estamos prontos para ajudar na manutenção dos seus equipamentos, instalação de sistemas e desenvolvimento do seu website.",
      button: "Solicitar Orçamento",
    },
    about: {
      title: "Sobre a SD Soluções Digitais",
      lead: "A SD Soluções Digitais é especializada em soluções informáticas para empresas e particulares.",
      mission: { title: "Experiência e Profissionalismo", text: "Atuamos na instalação, manutenção e configuração de equipamentos informáticos, reparação, desenvolvimento web, programação e suporte técnico." },
      vision: { title: "Compromisso com Qualidade", text: "O nosso compromisso é oferecer serviços rápidos, confiáveis e profissionais para ajudar pessoas e empresas a obterem o máximo da tecnologia." },
      values: { title: "Atendimento Personalizado", text: "Oferecemos soluções sob medida, adaptadas à realidade e exigência de cada cliente, seja empresa ou particular." },
      historyTitle: "A Nossa Missão",
      historyText:
        "O nosso compromisso é oferecer serviços rápidos, confiáveis e profissionais para ajudar pessoas e empresas a obterem o máximo da tecnologia. Com um atendimento próximo e personalizado, resolvemos os seus problemas informáticos de forma eficiente.",
      partnersTitle: "Algumas das tecnologias que utilizamos",
    },
    contact: {
      title: "Fale Connosco",
      subtitle: "Preencha o formulário ou utilize os nossos contactos diretos para obter um orçamento.",
      form: {
        name: "Nome", company: "Empresa", email: "Email", phone: "Telefone",
        service: "Serviço", chooseService: "Selecione um serviço",
        message: "Mensagem", submit: "Enviar Pedido",
        success: "Mensagem enviada com sucesso! Entraremos em contacto brevemente.",
      },
      info: { title: "Informações de Contacto", address: "Av. de Namaacha, Bairro 25 de Setembro, Matola – Zambézia", hours: "Segunda a Sexta" },
    },
    footer: {
      tagline: "Serviços de Informática, Tecnologia, Suporte Técnico e Desenvolvimento Web.",
      rights: "Todos os direitos reservados.",
      cols: { services: "Serviços", company: "Empresa", contact: "Contactos" },
    },
    meta: {
      home: { title: "SD Soluções Digitais | Soluções Tecnológicas ao Seu Alcance", desc: "Serviços de Informática, Tecnologia, Suporte Técnico e Desenvolvimento Web em Moçambique." },
      services: { title: "Serviços | SD Soluções Digitais", desc: "Montagem, reparação de computadores, instalação de sistemas, backup, desenvolvimento de websites e mais." },
      about: { title: "Sobre Nós | SD Soluções Digitais", desc: "A SD Soluções Digitais é especializada em soluções informáticas para empresas e particulares." },
      contact: { title: "Contactos | SD Soluções Digitais", desc: "Entre em contacto connosco para suporte informático e desenvolvimento de websites." },
    },
  },
  en: {
    nav: { home: "Home", services: "Services", about: "About", contact: "Contact", quote: "Get a quote" },
    company: "SD Soluções Digitais",
    tagline: "Technological Solutions at Your Fingertips",
    hero: {
      eyebrow: "Technological Solutions for Businesses and Individuals",
      title: "Technological Solutions at Your Fingertips",
      subtitle:
        "Specialists in IT, technical support, computer maintenance and website development.",
      ctaPrimary: "Get a Quote",
      ctaSecondary: "Chat on WhatsApp",
    },
    services: {
      title: "Our Services",
      subtitle: "Complete solutions for individuals and businesses that need technology always working.",
      items: [
        { title: "Equipment Management", desc: "IT equipment management and operations.", icon: "Server" },
        { title: "Computer Assembly", desc: "Computer assembly and configuration.", icon: "Cpu" },
        { title: "Computer Repair", desc: "Repair of computers and peripheral equipment.", icon: "Wrench" },
        { title: "System Installation", desc: "Installation of software and operating systems.", icon: "HardDrive" },
        { title: "Fault Diagnosis", desc: "Diagnosis and correction of system faults.", icon: "Activity" },
        { title: "Data Backup", desc: "Secure data backup and recovery solutions.", icon: "Database" },
        { title: "Programming", desc: "Software development and programming.", icon: "Code" },
        { title: "Web Development", desc: "Development and management of professional websites.", icon: "Globe" },
        { title: "Networks & Wi-Fi", desc: "Configuration and troubleshooting of Wi-Fi and cable Internet.", icon: "Wifi" },
      ],
    },
    why: {
      title: "Our Differentials",
      items: [
        { title: "Fast Service", desc: "Quick response to minimize downtime." },
        { title: "Qualified Technicians", desc: "Technical team with extensive industry experience." },
        { title: "Custom Solutions", desc: "We tailor our services to your needs." },
        { title: "Modern Equipment", desc: "We use the best tools and technologies." },
        { title: "Specialized Support", desc: "Dedicated follow-up to solve any problem." },
        { title: "Price/Quality", desc: "Excellent price-quality ratio across all services." },
      ],
    },
    sectors: {
      title: "How We Work",
      items: ["1. Contact", "2. Diagnosis", "3. Quote", "4. Execution", "5. Testing", "6. Delivery"],
    },
    stats: [
      { value: "Fast", label: "Service" },
      { value: "Qualified", label: "Technicians" },
      { value: "100%", label: "Customized" },
      { value: "Premium", label: "Price/Quality" },
    ],
    cta: {
      title: "Need technical support?",
      subtitle: "We are ready to help with your equipment maintenance, system installation and website development.",
      button: "Get a Quote",
    },
    about: {
      title: "About SD Soluções Digitais",
      lead: "SD Soluções Digitais specializes in IT solutions for businesses and individuals.",
      mission: { title: "Experience and Professionalism", text: "We act in the installation, maintenance and configuration of IT equipment, repair, web development, programming and technical support." },
      vision: { title: "Commitment to Quality", text: "Our commitment is to offer fast, reliable and professional services to help people and businesses get the most out of technology." },
      values: { title: "Personalized Service", text: "We offer tailor-made solutions, adapted to the reality and demands of each client." },
      historyTitle: "Our Mission",
      historyText:
        "Our commitment is to offer fast, reliable and professional services to help people and businesses get the most out of technology. With close and personalized service, we solve your IT problems efficiently.",
      partnersTitle: "Some of the technologies we use",
    },
    contact: {
      title: "Talk to Us",
      subtitle: "Fill out the form or use our direct contacts to get a quote.",
      form: {
        name: "Name", company: "Company", email: "Email", phone: "Phone",
        service: "Service", chooseService: "Choose a service",
        message: "Message", submit: "Send Request",
        success: "Message sent successfully! We will contact you shortly.",
      },
      info: { title: "Contact Information", address: "Av. de Namaacha, Bairro 25 de Setembro, Matola – Zambézia", hours: "Monday to Friday" },
    },
    footer: {
      tagline: "IT Services, Technology, Technical Support and Web Development.",
      rights: "All rights reserved.",
      cols: { services: "Services", company: "Company", contact: "Contact" },
    },
    meta: {
      home: { title: "SD Soluções Digitais | Technology Solutions", desc: "IT Services, Technology, Technical Support and Web Development in Mozambique." },
      services: { title: "Services | SD Soluções Digitais", desc: "Assembly, computer repair, system installation, backup, website development and more." },
      about: { title: "About Us | SD Soluções Digitais", desc: "SD Soluções Digitais specializes in IT solutions for businesses and individuals." },
      contact: { title: "Contact | SD Soluções Digitais", desc: "Contact us for IT support and website development." },
    },
  },
};

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
