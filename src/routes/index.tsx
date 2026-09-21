import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Check, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

import logo from "@/assets/imgi_30_o-poder-do-parto-2048x680-1.png.asset.json";
import footerLogo from "@/assets/o-poder-do-parto_white-scaled-1-1536x509-1.png.asset.json";
import guarantee from "@/assets/garantia-parto.png.asset.json";
import women from "@/assets/depoimentos_mulheres-removebg-preview.png.asset.json";
import module1 from "@/assets/imgi_6_modulo-1-parto.jpg.asset.json";
import module2 from "@/assets/imgi_7_modulo-2-parto.jpg.asset.json";
import module3 from "@/assets/imgi_8_modulo-3-mente.jpg.asset.json";
import module5 from "@/assets/imgi_10_modulo-5-parto.jpg.asset.json";
import module6 from "@/assets/imgi_3_modulo-6-parto.jpg.asset.json";
import module7 from "@/assets/imgi_4_modulo-7-parto.jpg.asset.json";
import module8 from "@/assets/imgi_5_modulo-8-parto.jpg.asset.json";
import bonus1 from "@/assets/imgi_14_bonus-1-parto.jpg.asset.json";
import bonus2 from "@/assets/imgi_13_bonus-2-parto.jpg.asset.json";
import bonus3 from "@/assets/imgi_12_bonus-3-parto.jpg.asset.json";
import bonus4 from "@/assets/imgi_11_bonus-4-parto.jpg.asset.json";
import bonus5 from "@/assets/imgi_16_bonus-5-parto.jpg.asset.json";
import bonus6 from "@/assets/imgi_18_bonus-6-parto.jpg.asset.json";
import bonus7 from "@/assets/imgi_17_bonus-7-parto.jpg.asset.json";
import proof1 from "@/assets/imgi_54_Imagem-do-WhatsApp-de-2025-10-15-as-08.17.45_d5170d8d.jpg.asset.json";
import proof2 from "@/assets/imgi_55_Imagem-do-WhatsApp-de-2025-10-15-as-08.18.45_1497838d.jpg.asset.json";
import proof3 from "@/assets/imgi_56_Imagem-do-WhatsApp-de-2025-10-15-as-08.17.59_39927bba.jpg.asset.json";
import proof4 from "@/assets/imgi_57_Imagem-do-WhatsApp-de-2025-10-15-as-08.18.51_5a13307f.jpg.asset.json";

declare module "react" { namespace JSX { interface IntrinsicElements { "vturb-smartplayer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>; } } }

const CHECKOUT = "https://pay.hotmart.com/X88395451D?off=o69s199w&checkoutMode=10&bid=1752756480235&fromExitPopup=true";
const DELAY = 1080 * 1000;
const STORAGE_KEY = "poder-do-parto-aula-started-at-v3";
const trackingKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "campaign_id", "adset_id", "ad_id"];

const modules = [
  ["Módulo 1", "Primeiros Passos", "Entenda tudo sobre a jornada que está começando.", module1.url],
  ["Módulo 2", "A Realidade do Parto", "Descubra como funciona o sistema e garanta um parto respeitoso.", module2.url],
  ["Módulo 3", "Preparo Emocional", "Trabalhe o medo, a ansiedade e fortaleça sua confiança.", module3.url],
  ["Módulo 4", "Como Funciona o Parto", "Identifique e saiba o que fazer em cada fase do trabalho de parto.", module5.url],
  ["Módulo 5", "O Corpo na Gravidez", "Cuide de si e prepare-se fisicamente para o parto.", module5.url],
  ["Módulo 6", "Indução & Cesárea", "Entenda indicações, intervenções e parto normal após cesárea.", module6.url],
  ["Módulo 7", "Técnicas de Alívio da Dor", "Respiração, massagem, acupressão e outros métodos naturais.", module7.url],
  ["Módulo 8", "Plano de Parto", "Crie um plano de parto que funciona e seja respeitado.", module8.url],
];
const bonuses = [bonus1, bonus2, bonus3, bonus4, bonus5, bonus6, bonus7];
const faqs = [
  ["O que vou receber?", "9 módulos com mais de 70 aulas, materiais de apoio e bônus exclusivos."],
  ["Por quanto tempo tenho acesso?", "Vitalício! Você pode rever as aulas sempre que precisar."],
  ["Consigo assistir mesmo com pouco tempo?", "Sim! As aulas são diretas e objetivas e você pode ver quando e onde quiser."],
  ["Quais são as formas de pagamento?", "Cartão de crédito, Pix ou boleto à vista."],
];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "O Poder do Parto | Mari Betioli" },
    { name: "description", content: "O Poder do Parto com Mari Betioli: preparação para um parto seguro, respeitoso e cheio de amor." },
    { property: "og:title", content: "O Poder do Parto | Mari Betioli" },
    { property: "og:description", content: "Preparação para um parto seguro, respeitoso e cheio de amor." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function trackedCheckout() {
  if (typeof window === "undefined") return CHECKOUT;
  const source = new URLSearchParams(window.location.search);
  const url = new URL(CHECKOUT);
  const values: string[] = [];
  trackingKeys.forEach((key) => { const value = source.get(key); if (value) { url.searchParams.set(key, value); values.push(value); } });
  if (values.length) { const code = values.join("|"); url.searchParams.set("sck", code); url.searchParams.set("xcod", code); }
  return url.toString();
}

function CTA() {
  return <Button asChild className="h-auto w-full max-w-xl whitespace-normal rounded-md bg-success px-6 py-4 text-center text-base font-extrabold uppercase text-success-foreground shadow-lg transition hover:-translate-y-1 hover:bg-success/90 sm:text-lg"><a href={CHECKOUT}>Quero me preparar para o meu parto!</a></Button>;
}

function Index() {
  const [revealed, setRevealed] = useState(false);
  const checkout = useMemo(trackedCheckout, []);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const force = query.get("show") === "all";
    const stored = Number(localStorage.getItem(STORAGE_KEY));
    const started = Number.isFinite(stored) && stored > 0 ? stored : Date.now();
    if (!stored) localStorage.setItem(STORAGE_KEY, String(started));
    const wait = Math.max(DELAY - (Date.now() - started), 0);
    if (force || wait === 0) setRevealed(true);
    const timer = window.setTimeout(() => setRevealed(true), wait);
    trackingKeys.forEach((key) => { const value = query.get(key); if (value) sessionStorage.setItem(key, value); });
    const fb = document.createElement("script");
    fb.text = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','340206031120534');fbq('track','PageView');";
    document.head.appendChild(fb);
    const smartplayer = document.createElement("script");
    smartplayer.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js";
    smartplayer.async = true;
    document.body.appendChild(smartplayer);
    const player = document.createElement("script");
    player.src = "https://scripts.converteai.net/639563c1-cf70-4484-8d65-6fd485e96ab9/players/6a28849f56303c2b198f3c7b/v4/player.js";
    player.async = true;
    document.body.appendChild(player);
    return () => { window.clearTimeout(timer); fb.remove(); smartplayer.remove(); player.remove(); };
  }, []);

  useEffect(() => {
    document.querySelectorAll<HTMLAnchorElement>('a[href*="hotmart.com"]').forEach((link) => { link.href = checkout; });
  }, [checkout, revealed]);

  return <main className="min-h-screen overflow-hidden bg-background text-foreground">
    <section className="relative bg-plum-deep px-5 pb-16 pt-8 text-primary-foreground sm:pb-20">
      <div className="mx-auto max-w-5xl text-center">
        <img src={logo.url} alt="O Poder do Parto" className="mx-auto mb-8 w-52 sm:w-64" />
        <h1 className="mx-auto max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-5xl">A forma como você se prepara durante a gestação pode <strong className="text-gold">mudar completamente a sua experiência de parto.</strong></h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-primary-foreground/85 sm:text-xl">Prepare seu acompanhante, evite a violência obstétrica e <strong className="text-gold">viva o parto dos seus sonhos.</strong></p>
        <div className="mx-auto mt-9 max-w-[420px] overflow-hidden rounded-md bg-foreground shadow-2xl ring-4 ring-primary-foreground/10">
          <vturb-smartplayer id="vid-6a28849f56303c2b198f3c7b" style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: "400px", minHeight: "225px", backgroundImage: "url(https://cdn.converteai.net/639563c1-cf70-4484-8d65-6fd485e96ab9/6a28841cc9de06c926ca94dc/poster.jpg)", backgroundSize: "cover" }} />
        </div>
      </div>
    </section>

    {revealed ? <Offer /> : <div className="bg-primary px-5 py-6 text-center text-sm text-primary-foreground/80">Assista à aula completa para liberar uma condição especial.</div>}

    <Button onClick={() => setRevealed(true)} variant="outline" size="sm" className="fixed bottom-3 right-3 z-50 border-primary/20 bg-background/90 text-xs text-muted-foreground shadow-md backdrop-blur">Revelar conteúdo agora</Button>
  </main>;
}

function Offer() {
  return <div className="animate-in fade-in duration-700">
    <section className="bg-lavender px-5 py-16 text-center">
      <p className="font-semibold uppercase tracking-widest text-primary">Sua preparação começa agora</p>
      <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold text-primary sm:text-4xl">Tudo que você precisa para viver um parto seguro e respeitoso</h2>
      <div className="mx-auto mt-8"><CTA /></div>
    </section>

    <section className="px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl"><SectionTitle eyebrow="Por dentro do curso" title="Uma preparação completa, passo a passo" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{modules.map(([number,title,description,image]) => <article key={number} className="overflow-hidden rounded-md border border-border bg-card shadow-sm"><img src={image} alt={`${number} — ${title}`} className="aspect-[4/3] w-full object-cover" /><div className="p-5"><span className="text-xs font-bold uppercase text-primary">{number}</span><h3 className="mt-1 font-display text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p></div></article>)}</div>
      </div>
    </section>

    <section className="bg-plum-deep px-5 py-16 text-primary-foreground sm:py-24"><div className="mx-auto max-w-6xl"><SectionTitle light eyebrow="Bônus incríveis" title="Recursos extras para você se sentir ainda mais segura" /><div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">{bonuses.map((image,i)=><article key={image.asset_id} className="overflow-hidden rounded-md bg-primary-foreground/10"><img src={image.url} alt={`Bônus ${i+1}`} className="aspect-[3/4] w-full object-cover" /><div className="p-3 text-center text-sm font-bold">Bônus {i+1}</div></article>)}</div></div></section>

    <section className="bg-background px-5 py-16 sm:py-24"><div className="mx-auto max-w-6xl"><SectionTitle eyebrow="Depoimentos reais" title="Mais de 1.700 mulheres transformadas" /><img src={women.url} alt="Mulheres que participaram do Poder do Parto" className="mx-auto mt-8 max-h-72 max-w-full object-contain" /><div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">{[proof1,proof2,proof3,proof4].map((image,i)=><img key={image.asset_id} src={image.url} alt={`Depoimento de aluna ${i+1}`} className="w-full rounded-md border border-border shadow-sm" />)}</div></div></section>

    <section className="bg-secondary px-5 py-16 sm:py-20"><div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[260px_1fr]"><img src={guarantee.url} alt="Garantia incondicional de 7 dias" className="mx-auto w-56" /><div><div className="flex items-center gap-2 text-primary"><ShieldCheck /><span className="font-bold uppercase">Seu risco é zero</span></div><h2 className="mt-3 font-display text-3xl font-bold text-primary">7 dias de garantia incondicional</h2><p className="mt-4 leading-relaxed text-muted-foreground">Teste o curso completo. Se não amar o conteúdo ou sentir que ele não é para você, devolvemos 100% do valor pago — sem burocracia e sem questionamentos.</p></div></div></section>

    <section className="bg-plum-deep px-5 py-16 text-center text-primary-foreground sm:py-24"><div className="mx-auto max-w-3xl"><Sparkles className="mx-auto size-9 text-gold" /><p className="mt-4 text-sm font-semibold uppercase tracking-widest text-gold">Oferta especial</p><h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Comece hoje sua preparação</h2><ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left">{["Um parto seguro e respeitoso","Preparação emocional e física","Proteção contra a violência obstétrica","Plano de parto completo e consciente","Acesso vitalício + garantia de 7 dias"].map(item=><li key={item} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-gold" />{item}</li>)}</ul><div className="my-9"><p className="text-primary-foreground/60 line-through">De R$ 697</p><p className="mt-2 text-lg">12x de</p><p className="font-display text-5xl font-extrabold text-gold">R$ 30,72</p><p className="mt-2">ou R$ 297,00 à vista</p></div><CTA /><p className="mt-4 flex items-center justify-center gap-2 text-xs text-primary-foreground/70"><ShieldCheck className="size-4" /> Compra segura • Acesso imediato</p></div></section>

    <section className="px-5 py-16 sm:py-24"><div className="mx-auto max-w-3xl"><SectionTitle eyebrow="FAQ" title="Perguntas Frequentes" /><div className="mt-9 divide-y divide-border border-y border-border">{faqs.map(([q,a])=><details key={q} className="group py-1"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-primary">{q}<ChevronDown className="size-5 shrink-0 transition group-open:rotate-180" /></summary><p className="pb-5 leading-relaxed text-muted-foreground">{a}</p></details>)}</div></div></section>

    <footer className="bg-plum-deep px-5 py-12 text-center text-primary-foreground"><img src={footerLogo.url} alt="O Poder do Parto" className="mx-auto w-48" /><p className="mt-6 text-xs text-primary-foreground/60">© 2025 Mariana Betioli. Todos os direitos reservados.</p><div className="mt-4 flex justify-center gap-2 text-gold"><Heart className="size-4" /></div></footer>
  </div>;
}

function SectionTitle({ eyebrow, title, light=false }: { eyebrow:string; title:string; light?:boolean }) {
  return <div className="text-center"><p className={`text-sm font-bold uppercase tracking-widest ${light ? "text-gold" : "text-primary"}`}>{eyebrow}</p><h2 className={`mx-auto mt-3 max-w-3xl font-display text-3xl font-bold sm:text-4xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2></div>;
}