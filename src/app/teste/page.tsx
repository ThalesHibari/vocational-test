"use client";

import { Header } from "@/components/layout/Header";
import { NavButtons } from "@/components/shared/NavButtons";
import { QuestionRenderer } from "@/components/questions/QuestionRenderer";
import { SectionTransition } from "@/components/questions/SectionTransition";
import { LeadFormFlow } from "@/components/forms/LeadFormFlow";
import { TestProvider, useTest } from "@/context/TestContext";
import { THEMES, getThemeForIndex } from "@/lib/theme";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TRANSITION_INDICES = new Set([0, 15, 23, 30, 45]);

// ─── Test content ─────────────────────────────────────────────────────────────

function TestContent() {
  const router = useRouter();
  const {
    state,
    dispatch,
    currentQuestion,
    answeredCount,
    canGoNext,
    canGoPrev,
    isLastQuestion,
  } = useTest();

  const theme = THEMES[getThemeForIndex(state.currentIndex)];

  // Transition screens between sections
  const [doneTransitions, setDoneTransitions] = useState<Set<number>>(new Set());
  const shouldShowTransition =
    TRANSITION_INDICES.has(state.currentIndex) &&
    !doneTransitions.has(state.currentIndex);

  function acknowledgeTransition() {
    setDoneTransitions((prev) => new Set([...prev, state.currentIndex]));
  }

  function handleNext() {
    dispatch({ type: "NEXT" });
  }

  function handlePrev() {
    dispatch({ type: "PREV" });
  }

  function handleFinish() {
    dispatch({ type: "FINISH" });
    router.push("/resultado");
  }

  const currentAnswer = state.answers[currentQuestion?.id];
  const autoAdvance = () =>
    setTimeout(() => (isLastQuestion ? handleFinish() : handleNext()), 300);

  if (shouldShowTransition) {
    return (
      <div
        className="min-h-screen relative overflow-hidden transition-colors duration-500"
        style={{ backgroundColor: theme.bgHex }}
      >
        <Header
          userName={state.userName}
          currentIndex={state.currentIndex}
          answeredCount={answeredCount}
          theme={theme}
          showProgress
        />
        <SectionTransition
          index={state.currentIndex}
          theme={theme}
          onContinue={acknowledgeTransition}
        />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: theme.bgHex }}
    >
      <Header
        userName={state.userName}
        currentIndex={state.currentIndex}
        answeredCount={answeredCount}
        theme={theme}
        showProgress
      />

      {/* ── MOBILE LAYOUT ── */}
      <div className="sm:hidden fixed inset-x-0 top-[79px] bottom-0 bg-white rounded-t-3xl border-2 border-gray-100 flex flex-col overflow-y-auto">
        <div className="flex flex-col gap-4 px-4 pt-6 flex-1">
          <QuestionRenderer
            question={currentQuestion}
            answer={currentAnswer}
            onChange={(answer) =>
              dispatch({ type: "ANSWER", questionId: currentQuestion.id, answer })
            }
            onAutoAdvance={autoAdvance}
          />
        </div>

        <div className="px-4 pb-8 pt-4">
          <NavButtons
            answeredCount={answeredCount}
            canGoNext={canGoNext}
            canGoPrev={canGoPrev}
            isLastQuestion={isLastQuestion}
            onNext={handleNext}
            onPrev={handlePrev}
            onFinish={handleFinish}
            primaryColor={theme.primaryHex}
            darkColor={theme.darkHex}
          />
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <main className="hidden sm:flex relative z-10 flex-col items-center justify-center min-h-screen pt-[72px] pb-8 px-4">
        <div className="w-full max-w-[800px] flex flex-col gap-6">
          <div className="relative w-full">
            <div className="absolute inset-x-6 top-6 h-full bg-white/90 rounded-2xl border-2 border-gray-100" />
            <div className="absolute inset-x-3 top-3 h-full bg-white/95 rounded-2xl border-2 border-gray-100" />

            <div className="relative bg-white rounded-3xl border-2 border-gray-100 p-10 flex flex-col gap-8 shadow-sm">
              <QuestionRenderer
                question={currentQuestion}
                answer={currentAnswer}
                onChange={(answer) =>
                  dispatch({ type: "ANSWER", questionId: currentQuestion.id, answer })
                }
                onAutoAdvance={autoAdvance}
              />

              <NavButtons
                answeredCount={answeredCount}
                canGoNext={canGoNext}
                canGoPrev={canGoPrev}
                isLastQuestion={isLastQuestion}
                onNext={handleNext}
                onPrev={handlePrev}
                onFinish={handleFinish}
                primaryColor={theme.primaryHex}
                darkColor={theme.darkHex}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Gate: exibe formulário antes do teste ────────────────────────────────────

function TestGate() {
  const [formDone, setFormDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem("riasec_lead")) {
      setFormDone(true);
    }
  }, []);

  // Evita flash de conteúdo errado antes da hidratação
  if (!mounted) return <div className="min-h-screen bg-brand-bg-purple" />;

  if (!formDone) {
    return <LeadFormFlow onComplete={() => setFormDone(true)} />;
  }

  return (
    <TestProvider>
      <TestContent />
    </TestProvider>
  );
}

export default function TestePage() {
  return <TestGate />;
}
