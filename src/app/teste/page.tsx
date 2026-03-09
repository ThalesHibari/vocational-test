"use client";

import { BackgroundDecorations } from "@/components/layout/BackgroundDecorations";
import { Header } from "@/components/layout/Header";
import { NavButtons } from "@/components/shared/NavButtons";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { QuestionRenderer } from "@/components/questions/QuestionRenderer";
import { TestProvider, useTest } from "@/context/TestContext";
import { useRouter } from "next/navigation";

function TestContent() {
  const router = useRouter();
  const {
    state,
    dispatch,
    currentQuestion,
    progress,
    answeredCount,
    canGoNext,
    canGoPrev,
    isLastQuestion,
  } = useTest();

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

  return (
    <div className="min-h-screen bg-brand-bg-purple relative overflow-hidden">
      <Header userName={state.userName} />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-[72px] pb-8 px-4">
        <div className="w-full max-w-[800px] flex flex-col gap-6">
          {/* Progress section */}
          <div className="flex flex-col items-center gap-3 w-full">
            <ProgressBar
              currentIndex={state.currentIndex}
              answeredCount={answeredCount}
            />
          </div>

          {/* Stacked card effect */}
          <div className="relative w-full">
            <div className="absolute inset-x-6 top-6 h-full bg-white/90 rounded-2xl border-2 border-gray-100" />
            <div className="absolute inset-x-3 top-3 h-full bg-white/95 rounded-2xl border-2 border-gray-100" />

            {/* Main card */}
            <div className="relative bg-white rounded-3xl border-2 border-gray-100 p-10 flex flex-col gap-8 shadow-sm">
              <QuestionRenderer
                question={currentQuestion}
                answer={currentAnswer}
                onChange={(answer) =>
                  dispatch({ type: "ANSWER", questionId: currentQuestion.id, answer })
                }
              />

              <NavButtons
                answeredCount={answeredCount}
                canGoNext={canGoNext}
                canGoPrev={canGoPrev}
                isLastQuestion={isLastQuestion}
                onNext={handleNext}
                onPrev={handlePrev}
                onFinish={handleFinish}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function TestePage() {
  return (
    <TestProvider>
      <TestContent />
    </TestProvider>
  );
}
