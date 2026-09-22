# Parto Amoroso Landing

Implement the requested landing page clone now; use internal planning and do not present another implementation plan for user approval.

## Context and Source Page
Source URL: https://www.poderdoparto.com.br/aula
Title: "O Poder do Parto | Mari Betioli"
Description: "O Poder do Parto com Mari Betioli: preparação para um parto seguro, respeitoso e cheio de amor."
Favicon: https://www.poderdoparto.com.br/assets/favicon%20mari-BJZc3q8-.png

## Requirements & Specifications

1. **Header & Hero Section**:
   - Header with logo: `https://www.poderdoparto.com.br/assets/imgi_30_o-poder-do-parto-2048x680-1.png`
   - Headline:
     - "A forma como você se prepara durante a gestação pode"
     - Strong: "**mudar completamente a sua experiência de parto.**"
   - Subheadline:
     - "Prepare seu acompanhante, evite a violência obstétrica e viva o parto dos seus sonhos."

2. **Video Player (VTurb / ConverteAI Smartplayer)**:
   - Preload and script tags:
     - `<script src="https://scripts.converteai.net/639563c1-cf70-4484-8d65-6fd485e96ab9/players/6a28849f56303c2b198f3c7b/v4/player.js" async></script>`
     - `<script src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" async></script>`
   - Component:
     `<vturb-smartplayer id="vid-6a28849f56303c2b198f3c7b" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`
   - Fallback/Direct video poster: `https://cdn.converteai.net/639563c1-cf70-4484-8d65-6fd485e96ab9/6a28841cc9de06c926ca94dc/poster.jpg`

3. **Tracking & Analytics (GTM & Pixels)**:
   - Google Tag Manager container: `GTM-TKG2VFL6`
     Include standard GTM script in `<head>` and `<noscript>` iframe in `<body>`.
   - Meta / Facebook Pixel: `340206031120534` (also embedded in the VTurb player configuration).

4. **UTM Passthrough Logic**:
   - Implement the UTM tracking script that captures `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `campaign_id`, `adset_id`, `ad_id`, builds `sck` and `xcod` parameters, and dynamically appends them to all Hotmart/checkout links on the page (`https://pay.hotmart.com/...`, `https://go.hotmart.com/...`).

5. **Funnel Delay & Pitch Content**:
   - The page has a delayed pitch reveal mechanism (1080 seconds / 18 minutes by default, stored in localStorage `poder-do-parto-aula-started-at-v3`).
   - When the delay triggers (or if `?show=all` / preview mode is toggled), display the full offer section:
     - Call to action: "Quero me preparar para o meu parto!" pointing to the checkout URL (`https://pay.hotmart.com/X88395451D?off=o69s199w&checkoutMode=10&bid=1752756480235&fromExitPopup=true`).
     - Modules breakdown (Módulos 1 a 8 com imagens em `https://www.poderdoparto.com.br/assets/...`).
     - Bônus exclusivos (Bônus 1 a 7).
     - Seção de Depoimentos e prints de WhatsApp.
     - Garantia incondicional com selo (`https://www.poderdoparto.com.br/assets/garantia-parto.png`).
     - Tabela de preços / Oferta: "12x de R$ 30,72 ou R$ 297,00 à vista".
     - FAQ / Perguntas Frequentes em formato accordion.
     - Footer: "© 2025 Mariana Betioli. Todos os direitos reservados." com logo branco `https://www.poderdoparto.com.br/assets/o-poder-do-parto_white-scaled-1-1536x509-1.png`.
   - Add a subtle admin/dev control in the bottom corner (e.g. "Revelar conteúdo agora") so the user can easily test the page without waiting 18 minutes.

6. **Styling & Responsiveness**:
   - Palette: Deep purple/plum (`#521987`), soft lavender backgrounds, gold/warm accents, emerald green CTA buttons with hover animations.
   - Clean, professional typography (Inter / Poppins), fully responsive across desktop, tablet, and mobile.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://mariaula.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bd73963e-712f-4723-88ba-d8d8cb0f9f46).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
