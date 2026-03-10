"use client";

import { LikertAnswer, LikertOption, LikertValue, QuestionLikert } from "@/lib/types";

const LIKERT_OPTIONS: LikertOption[] = [
  { value: -2, emoji: "😑", label: "Discordo" },
  { value: -1, emoji: "🤔", label: "Pouco" },
  { value: 0, emoji: "😊", label: "Às vezes" },
  { value: 1, emoji: "😃", label: "Bastante" },
  { value: 2, emoji: "🤩", label: "Concordo" },
];

interface QuestionModel2Props {
  question: QuestionLikert;
  answer?: LikertAnswer;
  onChange: (answer: LikertAnswer) => void;
  onAutoAdvance?: () => void;
}

export function QuestionModel2({ question, answer, onChange, onAutoAdvance }: QuestionModel2Props) {
  const selected = answer?.value;

  return (
    <div className="flex flex-col gap-8 sm:gap-[80px] w-full items-center">
      <div className="flex flex-col gap-2 text-center w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight font-jakarta">
          {question.statement}
        </h2>
        <p className="text-xs sm:text-sm font-medium text-[#bababa] font-jakarta">
          Selecione o quanto você se identifica com essa afirmação
        </p>
      </div>

      {/* Emoji scale */}
      <div className="relative flex items-start justify-between sm:justify-center gap-2 sm:gap-[60px] w-full sm:w-auto">
        {/* Connecting line */}
        <div className="absolute top-[29px] left-0 right-0 sm:left-1/2 sm:-translate-x-1/2 sm:w-[500px] h-[2px] bg-gray-100 rounded-full z-0" />

        {LIKERT_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => { onChange({ type: "likert", value: option.value as LikertValue }); onAutoAdvance?.(); }}
            className="relative z-10 flex flex-col items-center gap-2 group"
          >
            <div
              className={`flex items-center justify-center size-[48px] sm:size-[60px] rounded-full border-2 transition-all duration-200 text-[22px] sm:text-[26px]
                ${selected === option.value
                  ? "border-brand-purple bg-[#f0e5ff] shadow-[0_0_0_4px_#dabff9] scale-110"
                  : "border-gray-100 bg-white hover:border-brand-light-purple hover:scale-105"
                }`}
            >
              {option.emoji}
            </div>
            <span
              className={`text-xs font-medium whitespace-nowrap transition-colors font-jakarta
                ${selected === option.value ? "text-brand-purple" : "text-[#adbdd2]"}`}
            >
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
