## Visão geral

Site institucional profissional, bilíngue (PT/EN), com identidade corporativa azul, para uma empresa de **gestão e exploração de equipamentos informáticos, montagem e serviços relacionados**. Quatro páginas: Home, Serviços, Sobre, Contato.

## Estrutura de rotas (TanStack)

```
src/routes/
  __root.tsx        → header + footer compartilhados, seletor PT/EN
  index.tsx         → Home
  servicos.tsx      → Serviços (rota canônica; /services redireciona)
  sobre.tsx         → Sobre
  contato.tsx       → Contato
```

Cada rota com `head()` próprio (title, description, og:title, og:description) nos dois idiomas via i18n.

## Páginas e conteúdo

**Home**
- Hero: título forte ("Infraestrutura de TI que sustenta o seu negócio"), subtítulo, 2 CTAs (Pedir orçamento / Ver serviços)
- Faixa de serviços (4 cards resumo)
- Bloco "Por que nos escolher" (4 diferenciais: equipa certificada, atendimento rápido, equipamentos de marca, contratos flexíveis)
- Setores atendidos (PME, escritórios, retalho, indústria)
- Faixa de stats (anos de experiência, clientes, equipamentos geridos, SLA)
- CTA final

**Serviços** (cada um com ícone Lucide, descrição e bullets):
1. Gestão de parque informático
2. Montagem e instalação de equipamentos
3. Infraestrutura de redes e cabling
4. Manutenção preventiva e corretiva
5. Servidores e cloud
6. Segurança e backup

**Sobre**
- Missão, visão, valores
- História breve da empresa
- Equipa / abordagem
- Certificações e parceiros (placeholders de logos)

**Contato**
- Formulário (nome, empresa, email, telefone, serviço de interesse, mensagem) — envio apenas client-side (mailto/console) nesta fase, sem backend
- Dados de contato, horário, mapa estático (imagem placeholder)

## Design system

- Tokens em `src/styles.css` (oklch), paleta corporativa azul:
  - background `#F8FAFC`, foreground `#0A2540`
  - primary `#1E40AF`, primary-glow `#3B82F6`
  - accent escuro `#0A2540`
  - gradiente `--gradient-primary`, sombra `--shadow-elegant`
- Tipografia: Inter (corpo) + Space Grotesk (títulos) via `<link>` no `__root.tsx`
- Componentes shadcn (Button, Card, Input, Textarea, Sheet para menu mobile, Select para idioma)
- Ícones Lucide
- Animações sutis: fade/slide-up no scroll, hover elevations

## Internacionalização PT/EN

- Hook leve `useI18n()` com objeto de traduções (`src/lib/i18n.ts`) e estado persistido em `localStorage`
- Seletor PT/EN no header
- `head()` lê o idioma corrente para preencher meta tags
- Sem dependência externa pesada (sem i18next) para manter simples

## Componentes compartilhados

```
src/components/
  site/Header.tsx        → logo, nav, seletor idioma, menu mobile
  site/Footer.tsx        → colunas: empresa, serviços, contato, social
  site/SectionHeading.tsx
  site/ServiceCard.tsx
  site/StatItem.tsx
  site/CTASection.tsx
  site/ContactForm.tsx
```

## Detalhes técnicos

- Sem backend nesta fase (Cloud não necessário). Formulário apenas valida e mostra toast.
- Imagens hero e seções: gerar 2–3 imagens (sala de servidores, técnico montando equipamento, escritório com infraestrutura) em `src/assets/`.
- Logo placeholder textual com ícone (substituível depois).
- SEO: `<html lang>` dinâmico via root, meta description distinto por rota.

## Fora de escopo (próximos passos sugeridos)

- Blog / cases / portfólio
- Envio real do formulário (requer Lovable Cloud + email)
- CMS para edição de conteúdo
- Área de cliente / portal de tickets
