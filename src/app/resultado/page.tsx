"use client";

import { BackgroundDecorations } from "@/components/layout/BackgroundDecorations";
import { Header } from "@/components/layout/Header";
import { PROFILE_INFO } from "@/lib/riasec";
import { ProfileInfo, RiasecProfile, RiasecResult } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function ScoreBar({ profile, score, maxScore }: { profile: RiasecProfile; score: number; maxScore: number }) {
  const info = PROFILE_INFO[profile];
  const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="text-lg w-7">{info.emoji}</span>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold text-gray-800 font-jakarta">{info.name}</span>
          <span className="text-sm font-normal text-gray-400 font-jakarta">{score} pts</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${pct}%`, backgroundColor: info.color }}
          />
        </div>
      </div>
    </div>
  );
}

function ProfileCard({ info, rank }: { info: ProfileInfo; rank: number }) {
  const rankLabel = ["Principal", "Secundário", "Terciário"][rank] ?? "";
  return (
    <div className="flex flex-col gap-4 p-6 rounded-2xl border-2 border-gray-100" style={{ backgroundColor: info.bgColor }}>
      <div className="flex items-center gap-3">
        <span className="text-3xl">{info.emoji}</span>
        <div>
          <span className="text-xs font-extrabold tracking-widest uppercase font-jakarta" style={{ color: info.color }}>
            {rankLabel}
          </span>
          <h3 className="text-xl font-bold text-gray-800 font-jakarta">{info.name}</h3>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed font-jakarta">{info.description}</p>
      <div>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 font-jakarta">Características</p>
        <ul className="flex flex-col gap-1">
          {info.traits.map((t) => (
            <li key={t} className="flex items-center gap-2 text-sm text-gray-700 font-jakarta">
              <span style={{ color: info.color }}>•</span> {t}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 font-jakarta">Carreiras sugeridas</p>
        <div className="flex flex-wrap gap-2">
          {info.careers.map((c) => (
            <span
              key={c}
              className="text-xs font-medium px-3 py-1 rounded-full font-jakarta"
              style={{ backgroundColor: info.color + "20", color: info.color }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ResultadoPage() {
  const router = useRouter();
  const [result, setResult] = useState<RiasecResult | null>(null);
  const [userName, setUserName] = useState("Usuário");

  useEffect(() => {
    const stored = localStorage.getItem("riasec_result");
    const storedUser = localStorage.getItem("riasec_user");
    if (stored) setResult(JSON.parse(stored) as RiasecResult);
    if (storedUser) setUserName(storedUser);
  }, []);

  if (!result) {
    return (
      <div className="min-h-screen bg-brand-bg-purple flex items-center justify-center">
        <div className="text-center flex flex-col gap-4">
          <p className="text-gray-600 font-jakarta">Nenhum resultado encontrado.</p>
          <button
            onClick={() => router.push("/teste")}
            className="bg-brand-purple text-white text-sm font-extrabold px-8 py-3 rounded-xl font-jakarta"
          >
            FAZER O TESTE
          </button>
        </div>
      </div>
    );
  }

  const maxScore = Math.max(...Object.values(result.scores));
  const sortedProfiles = (Object.entries(result.scores) as [RiasecProfile, number][])
    .sort((a, b) => b[1] - a[1]);

  return (
    <div className="min-h-screen bg-brand-bg-purple relative overflow-hidden">
      <BackgroundDecorations />
      <Header userName={userName} />

      <main className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-[88px] pb-12 px-4">
        <div className="w-full max-w-[900px] flex flex-col gap-8">
          {/* Hero */}
          <div className="text-center flex flex-col gap-3">
            <span className="text-xs font-extrabold tracking-widest uppercase text-brand-purple font-jakarta">
              Resultado do Teste Vocacional
            </span>
            <h1 className="text-4xl font-bold text-gray-800 font-jakarta">
              Seu Código Holland:{" "}
              <span className="text-brand-purple">{result.code}</span>
            </h1>
            <p className="text-base text-gray-400 font-jakarta max-w-lg mx-auto">
              Com base nas suas respostas, identificamos os perfis que melhor representam sua personalidade profissional.
            </p>
          </div>

          {/* Top 3 profiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {result.topProfiles.map((profile, i) => (
              <ProfileCard key={profile} info={PROFILE_INFO[profile]} rank={i} />
            ))}
          </div>

          {/* Score chart */}
          <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 flex flex-col gap-5">
            <h2 className="text-lg font-bold text-gray-800 font-jakarta">Distribuição dos Perfis RIASEC</h2>
            <div className="flex flex-col gap-4">
              {sortedProfiles.map(([profile, score]) => (
                <ScoreBar key={profile} profile={profile} score={score} maxScore={maxScore} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => router.push("/teste")}
              className="bg-brand-purple border-b border-brand-dark-purple text-white text-sm font-extrabold tracking-wider uppercase px-10 py-3 rounded-xl shadow-[0px_2px_0px_0px_#6443af] hover:bg-[#8255e8] transition-colors font-jakarta"
            >
              REFAZER O TESTE
            </button>
            <p className="text-xs text-gray-400 font-jakarta text-center">
              Baseado na Teoria de Holland (RIASEC) — modelo amplamente utilizado em orientação vocacional
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
