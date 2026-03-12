"use client";

import { LeadProvider, TOTAL_FORM_STEPS, useLead } from "@/context/LeadContext";
import { Header } from "@/components/layout/Header";
import { THEMES } from "@/lib/theme";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FormAge } from "./FormAge";
import { FormEducation } from "./FormEducation";
import { FormLocation } from "./FormLocation";
import { FormNavButtons } from "./FormNavButtons";
import { FormPersonal } from "./FormPersonal";

// ─── Step dots ────────────────────────────────────────────────────────────────

function StepDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-300 ${i === current
            ? "w-6 h-2 bg-brand-purple"
            : i < current
              ? "w-2 h-2 bg-brand-purple opacity-40"
              : "w-2 h-2 bg-gray-200"
            }`}
        />
      ))}
    </div>
  );
}

// ─── Inner content ────────────────────────────────────────────────────────────

function LeadFormContent({ onComplete }: { onComplete: () => void }) {
  const router = useRouter();
  const { leadData, currentStep, nextStep, prevStep, canProceed, isLastStep } = useLead();

  // Auto-advance ao selecionar nas etapas de escolha única
  useEffect(() => {
    if (currentStep !== 1 || leadData.faixaEtaria === "") return;
    const t = setTimeout(nextStep, 300);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leadData.faixaEtaria]);

  useEffect(() => {
    if (currentStep !== 2 || leadData.escolaridade === "") return;
    const t = setTimeout(nextStep, 300);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leadData.escolaridade]);

  function handleNext() {
    if (isLastStep) {
      if (typeof window !== "undefined") {
        localStorage.setItem("riasec_lead", JSON.stringify(leadData));
        localStorage.setItem("riasec_user", leadData.nome);
      }
      onComplete();
    } else {
      nextStep();
    }
  }

  function handlePrev() {
    prevStep();
  }

  const nextLabel = isLastStep ? "COMEÇAR TESTE" : "PRÓXIMO";

  const steps = [
    <FormPersonal key="personal" />,
    <FormAge key="age" />,
    <FormEducation key="education" />,
    <FormLocation key="location" />,
  ];

  return (
    <div className="min-h-screen bg-brand-bg-purple relative overflow-hidden">
      <Header theme={THEMES.purple} showProgress={false} />

      {/* ── MOBILE LAYOUT ── */}
      <div className="sm:hidden fixed inset-x-0 top-[57px] bottom-0 bg-white rounded-t-3xl border-2 border-gray-100 flex flex-col overflow-y-auto">
        <div className="flex flex-col gap-4 px-4 pt-6 flex-1">
          {steps[currentStep]}
        </div>
        <div className="px-4 pb-8 pt-4">
          <FormNavButtons
            onPrev={handlePrev}
            onNext={handleNext}
            onExit={() => router.push("/")}
            canPrev={currentStep > 0}
            canNext={canProceed}
            nextLabel={nextLabel}
          />
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <main className="hidden sm:flex relative z-10 flex-col items-center justify-center min-h-screen pt-[72px] pb-8 px-4">
        <div className="w-full max-w-[800px] flex flex-col items-center gap-4">

          <div className="relative w-full">
            <div className="absolute inset-x-6 top-6 h-full bg-white/90 rounded-2xl border-2 border-gray-100" />
            <div className="absolute inset-x-3 top-3 h-full bg-white/95 rounded-2xl border-2 border-gray-100" />

            <div className="relative bg-white rounded-3xl border-2 border-gray-100 p-10 flex flex-col gap-8 shadow-sm">
              {steps[currentStep]}
              <FormNavButtons
                onPrev={handlePrev}
                onNext={handleNext}
                canPrev={currentStep > 0}
                canNext={canProceed}
                nextLabel={nextLabel}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Public component ─────────────────────────────────────────────────────────

export function LeadFormFlow({ onComplete }: { onComplete: () => void }) {
  return (
    <LeadProvider>
      <LeadFormContent onComplete={onComplete} />
    </LeadProvider>
  );
}
