"use client";

import { ThemeTokens } from "@/lib/theme";

// ─── Themed background decorations ────────────────────────────────────────────

function ThemedDecorations({
  primaryHex,
  darkHex,
  lightHex,
}: {
  primaryHex: string;
  darkHex: string;
  lightHex: string;
}) {
  return (
    <>
      {/* Top right */}
      <div className="pointer-events-none absolute top-[-139px] right-[-80px] w-[438px] h-[461px] opacity-60">
        <svg viewBox="0 0 438 461" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M219 0C219 120.871 120.871 219 0 219" stroke={darkHex} strokeWidth="80" strokeLinecap="round" fill="none" />
          <path d="M219 242C338.87 242 438 341.129 438 461" stroke={primaryHex} strokeWidth="60" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      {/* Bottom right */}
      <div className="pointer-events-none absolute bottom-[-60px] right-[-40px] w-[560px] h-[560px] opacity-50">
        <svg viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="280" cy="280" r="240" stroke={darkHex} strokeWidth="80" fill="none" />
          <circle cx="280" cy="280" r="160" stroke={primaryHex} strokeWidth="40" fill="none" />
        </svg>
      </div>
      {/* Bottom left */}
      <div className="pointer-events-none absolute bottom-[-60px] left-[-109px] w-[485px] h-[542px] opacity-60">
        <svg viewBox="0 0 485 542" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 271C0 150.129 98.129 52 219 52" stroke={darkHex} strokeWidth="80" strokeLinecap="round" fill="none" />
          <path d="M0 271C0 391.871 98.129 490 219 490" stroke={primaryHex} strokeWidth="60" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      {/* Top left */}
      <div className="pointer-events-none absolute top-[209px] left-[-55px] w-[382px] h-[393px] opacity-40">
        <svg viewBox="0 0 382 393" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M191 0C191 105.693 105.693 191 0 191" stroke={lightHex} strokeWidth="80" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    </>
  );
}

// ─── Mini demos ────────────────────────────────────────────────────────────────

function ListaDemo({ primaryHex, lightHex }: { primaryHex: string; lightHex: string }) {
  const items = [
    { letter: "A", selected: false },
    { letter: "B", selected: true },
    { letter: "C", selected: false },
  ];
  return (
    <div className="flex flex-col gap-2 w-full">
      {items.map(({ letter, selected }) => (
        <div
          key={letter}
          className="flex items-center gap-3 px-3.5 py-0.5 rounded-xl border-2 h-12"
          style={
            selected
              ? { borderColor: primaryHex, backgroundColor: "#fefefe", boxShadow: `0px 2px 0px 0px ${primaryHex}` }
              : { borderColor: "#f3f1f3", backgroundColor: "white", boxShadow: "0px 2px 0px 0px #e7e4e7" }
          }
        >
          <div
            className="flex items-center justify-center shrink-0 w-6 h-6 rounded-lg border-2 text-xs font-bold font-jakarta"
            style={
              selected
                ? { borderColor: primaryHex, backgroundColor: primaryHex, color: "white" }
                : { borderColor: "#f3f1f3", color: "#a89ea9" }
            }
          >
            {letter}
          </div>
          <div
            className="flex-1 h-2 rounded-full"
            style={{ backgroundColor: selected ? lightHex : "#e7e4e7" }}
          />
        </div>
      ))}
    </div>
  );
}

function LikertDemo({ primaryHex }: { primaryHex: string }) {
  const labels = ["Nunca", "Raramente", "Às vezes", "Quase\nsempre", "Sempre"];
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between text-[10px] text-[#a89ea9] font-jakarta px-0.5">
        <span>Discordo totalmente</span>
        <span>Concordo totalmente</span>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className="flex-1 h-12 rounded-xl border-2 flex items-center justify-center font-bold text-sm font-jakarta"
            style={
              n === 4
                ? { borderColor: primaryHex, color: primaryHex, backgroundColor: "white", boxShadow: `0px 2px 0px 0px ${primaryHex}` }
                : { borderColor: "#e7e4e7", color: "#a89ea9", backgroundColor: "white" }
            }
          >
            {n}
          </div>
        ))}
      </div>
      <div className="flex">
        {labels.map((label, i) => (
          <div
            key={i}
            className="flex-1 text-center text-[9px] leading-tight text-[#a89ea9] font-jakarta whitespace-pre-line"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function DiretaDemo({ primaryHex, bgHex }: { primaryHex: string; bgHex: string }) {
  return (
    <div className="flex gap-4 w-full">
      {/* Selected */}
      <div
        className="flex-1 flex flex-col items-center gap-2.5 px-0.5 py-[22px] rounded-2xl border-2"
        style={{ borderColor: primaryHex, backgroundColor: bgHex, boxShadow: `0px 2px 0px 0px ${primaryHex}` }}
      >
        <div
          className="flex items-center justify-center w-9 h-9 rounded-xl"
          style={{ backgroundColor: primaryHex }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-[#2a212c] font-jakarta">Se aplica</span>
        <span className="text-[10px] text-[#a89ea9] font-jakarta text-center leading-snug">Isso me representa</span>
      </div>
      {/* Non-selected */}
      <div
        className="flex-1 flex flex-col items-center gap-2.5 px-0.5 py-[22px] rounded-2xl border-2"
        style={{ borderColor: "#e7e4e7", backgroundColor: "white", boxShadow: "0px 2px 0px 0px #e7e4e7" }}
      >
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#d7d0d7]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M5 5l8 8M13 5l-8 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-[#594c5b] font-jakarta">Não se aplica</span>
        <span className="text-[10px] text-[#a89ea9] font-jakarta text-center leading-snug">Não me representa</span>
      </div>
    </div>
  );
}

function CardsDemo({
  primaryHex,
  darkHex,
  bgHex,
  lightHex,
}: {
  primaryHex: string;
  darkHex: string;
  bgHex: string;
  lightHex: string;
}) {
  const cards = [
    { label: "Construir", checked: true },
    { label: "Analisar", checked: false },
    { label: "Criar", checked: true },
  ];
  return (
    <div className="flex gap-2.5 w-full">
      {cards.map(({ label, checked }) => (
        <div
          key={label}
          className="flex-1 flex flex-col items-center gap-2 px-0.5 py-[18px] rounded-xl border-2"
          style={
            checked
              ? { borderColor: darkHex, backgroundColor: bgHex, boxShadow: `0px 2px 0px 0px ${darkHex}` }
              : { borderColor: "#e7e4e7", backgroundColor: "white", boxShadow: "0px 2px 0px 0px #e7e4e7" }
          }
        >
          <div
            className="w-9 flex-1 rounded-xl min-h-0"
            style={{ backgroundColor: checked ? lightHex : "#e7e4e7" }}
          />
          <span
            className="text-[10px] font-semibold font-jakarta text-center"
            style={{ color: checked ? primaryHex : "#a89ea9" }}
          >
            {label}
          </span>
          {checked ? (
            <div
              className="flex items-center justify-center w-4 h-4 rounded px-1"
              style={{ backgroundColor: primaryHex }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ) : (
            <div className="w-4 h-4 rounded border-2 border-[#e7e4e7]" />
          )}
        </div>
      ))}
    </div>
  );
}

function DilemaDemo({ primaryHex, bgHex, lightHex }: { primaryHex: string; bgHex: string; lightHex: string }) {
  return (
    <div className="flex items-center gap-3 w-full">
      {/* Selected */}
      <div
        className="flex-1 flex flex-col items-center gap-3 px-0.5 py-[22px] rounded-2xl border-2"
        style={{ borderColor: primaryHex, backgroundColor: bgHex, boxShadow: `0px 2px 0px 0px ${primaryHex}` }}
      >
        <div className="w-10 flex-1 rounded-xl min-h-0" style={{ backgroundColor: lightHex }} />
        <div className="h-2 w-16 rounded-full shrink-0" style={{ backgroundColor: lightHex }} />
        <div className="h-1.5 w-10 rounded-full shrink-0" style={{ backgroundColor: lightHex }} />
      </div>
      {/* VS */}
      <div className="flex flex-col items-center gap-1 shrink-0">
        <div className="w-px h-8 bg-[#e7e4e7]" />
        <span className="text-xs font-bold text-[#d7d0d7] font-jakarta">VS</span>
        <div className="w-px h-8 bg-[#e7e4e7]" />
      </div>
      {/* Non-selected */}
      <div
        className="flex-1 flex flex-col items-center gap-3 px-0.5 py-[22px] rounded-2xl border-2"
        style={{ borderColor: "#e7e4e7", backgroundColor: "white", boxShadow: "0px 2px 0px 0px #e7e4e7" }}
      >
        <div className="w-10 flex-1 rounded-xl min-h-0 bg-[#f3f1f3]" />
        <div className="h-2 w-16 rounded-full shrink-0 bg-[#f3f1f3]" />
        <div className="h-1.5 w-10 rounded-full shrink-0 bg-[#f3f1f3]" />
      </div>
    </div>
  );
}

// ─── Config ────────────────────────────────────────────────────────────────────

interface SectionConfig {
  section: string;
  title: string;
  subtitle: string;
  description: string;
  demo: (theme: ThemeTokens) => React.ReactNode;
}

const CONFIGS: Record<number, SectionConfig> = {
  0: {
    section: "Seção 1 de 5",
    title: "Múltipla Escolha",
    subtitle: "Selecione a alternativa que mais representa você",
    description:
      "Cada questão apresenta 4 alternativas (A, B, C, D). Escolha apenas uma, a que melhor descreve seu interesse ou característica.",
    demo: (t) => <ListaDemo primaryHex={t.primaryHex} lightHex={t.lightHex} />,
  },
  15: {
    section: "Seção 2 de 5",
    title: "Escala de Concordância",
    subtitle: "Diga o quanto cada afirmação representa você",
    description:
      "Para cada frase, indique seu nível de concordância em uma escala de 1 a 5. Quanto mais a afirmação descreve você, maior o número que deve escolher.",
    demo: (t) => <LikertDemo primaryHex={t.primaryHex} />,
  },
  23: {
    section: "Seção 3 de 5",
    title: "Se aplica ou Não se aplica",
    subtitle: "Responda se a situação se aplica ao seu perfil",
    description:
      "Para cada afirmação, escolha simplesmente se ela se aplica ou não a você. Responda pelo que realmente sente, não existe certo ou errado aqui.",
    demo: (t) => <DiretaDemo primaryHex={t.primaryHex} bgHex={t.bgHex} />,
  },
  30: {
    section: "Seção 4 de 5",
    title: "Atividades & Interesses",
    subtitle: "Marque todas as atividades que te interessam",
    description:
      "Você verá um conjunto de atividades representadas por cards com ícones. Selecione todas as que despertam seu interesse ou parecem atraentes, pode marcar mais de uma!",
    demo: (t) => <CardsDemo primaryHex={t.primaryHex} darkHex={t.darkHex} bgHex={t.bgHex} lightHex={t.lightHex} />,
  },
  45: {
    section: "Seção 5 de 5",
    title: "Cenários de interesse",
    subtitle: "Escolha entre dois cenários",
    description:
      "Você verá dois cenários lado a lado. Mesmo que os dois pareçam interessantes, ou nenhum seja ideal, você deve escolher apenas um. Confie no seu instinto.",
    demo: (t) => <DilemaDemo primaryHex={t.primaryHex} bgHex={t.bgHex} lightHex={t.lightHex} />,
  },
};

// ─── Main component ────────────────────────────────────────────────────────────

interface SectionTransitionProps {
  index: number;
  theme: ThemeTokens;
  onContinue: () => void;
}

export function SectionTransition({ index, theme, onContinue }: SectionTransitionProps) {
  const config = CONFIGS[index];
  if (!config) return null;

  const { primaryHex, darkHex, bgHex, lightHex } = theme;

  return (
    <>
      {/* ── MOBILE ── */}
      <div className="sm:hidden fixed inset-x-0 top-[79px] bottom-0 bg-white rounded-t-3xl border-2 border-gray-100 flex flex-col overflow-y-auto">
        <div className="flex flex-col gap-6 px-4 pt-6 pb-8 flex-1">
          <MobileContent config={config} theme={theme} onContinue={onContinue} />
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <main className="hidden sm:flex relative z-10 flex-col items-center justify-center min-h-screen pt-[72px] pb-8 px-4">
        <ThemedDecorations primaryHex={primaryHex} darkHex={darkHex} lightHex={lightHex} />
        <div className="relative w-full max-w-[800px]">
          {/* Stacked shadow cards */}
          <div className="absolute inset-x-[52px] top-6 bottom-0 bg-white/90 rounded-2xl border-2 border-[#f3f1f3]" />
          <div className="absolute inset-x-6 top-3 bottom-0 bg-white/95 rounded-2xl border-2 border-[#f3f1f3]" />
          {/* Main card */}
          <div className="relative bg-white rounded-[24px] border-2 border-[#f3f1f3] p-10 flex flex-col gap-8 items-center overflow-hidden">
            {/* Badge + Heading + Description */}
            <div className="flex flex-col gap-4 items-center w-full">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 self-center px-[15px] py-px rounded-full border h-[30px]"
                style={{ backgroundColor: "white", borderColor: lightHex }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: primaryHex }} />
                <span className="text-xs font-bold font-jakarta whitespace-nowrap" style={{ color: darkHex }}>
                  {config.section}
                </span>
              </div>

              {/* Heading */}
              <div className="flex flex-col gap-1 items-center text-center w-full">
                <h2 className="text-2xl font-bold text-[#0c090c] font-jakarta leading-8 w-full text-center">
                  {config.title}
                </h2>
                <p className="text-sm font-semibold font-jakarta" style={{ color: primaryHex }}>
                  {config.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-[#a89ea9] font-jakarta leading-[22.75px] text-center max-w-[520px]">
                {config.description}
              </p>
            </div>

            {/* Demo */}
            <div
              className="rounded-2xl border-2 px-[80px] py-6 w-4/5 self-center"
              style={{ backgroundColor: bgHex, borderColor: lightHex }}
            >
              {config.demo(theme)}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-center w-full">
              <button
                onClick={onContinue}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm font-jakarta text-white uppercase transition-all hover:brightness-110 active:translate-y-px h-10"
                style={{
                  backgroundColor: primaryHex,
                  boxShadow: `0px 2px 0px 0px ${darkHex}`,
                }}
              >
                Entendi, vamos lá!
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// ─── Mobile inner content ──────────────────────────────────────────────────────

function MobileContent({
  config,
  theme,
  onContinue,
}: {
  config: SectionConfig;
  theme: ThemeTokens;
  onContinue: () => void;
}) {
  const { primaryHex, darkHex, bgHex, lightHex } = theme;
  return (
    <div className="flex flex-col gap-6 w-full items-center text-center">
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 self-center px-[15px] py-px rounded-full border h-[30px]"
        style={{ backgroundColor: "white", borderColor: lightHex }}
      >
        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: primaryHex }} />
        <span className="text-xs font-bold font-jakarta whitespace-nowrap" style={{ color: darkHex }}>
          {config.section}
        </span>
      </div>

      {/* Heading */}
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-[#0c090c] font-jakarta leading-8">{config.title}</h2>
        <p className="text-sm font-semibold font-jakarta" style={{ color: primaryHex }}>
          {config.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-[#a89ea9] font-jakarta leading-relaxed">{config.description}</p>

      {/* Demo */}
      <div
        className="w-full rounded-2xl border-2 px-5 py-5"
        style={{ backgroundColor: bgHex, borderColor: lightHex }}
      >
        {config.demo(theme)}
      </div>

      {/* CTA */}
      <button
        onClick={onContinue}
        className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm font-jakarta text-white uppercase transition-all hover:brightness-110 active:translate-y-px"
        style={{
          backgroundColor: primaryHex,
          boxShadow: `0px 2px 0px 0px ${darkHex}`,
        }}
      >
        Entendi, vamos lá!
      </button>
    </div>
  );
}
