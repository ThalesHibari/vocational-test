"use client";

import { ListaAnswer, QuestionLista } from "@/lib/types";

interface QuestionModel5Props {
  question: QuestionLista;
  answer?: ListaAnswer;
  onChange: (answer: ListaAnswer) => void;
  onAutoAdvance?: () => void;
}

export function QuestionModel5({ question, answer, onChange, onAutoAdvance }: QuestionModel5Props) {
  const selected = answer?.selected ?? [];

  function toggle(alt: string) {
    if (selected.includes(alt)) {
      onChange({ type: "lista", selected: selected.filter((s) => s !== alt) });
    } else if (selected.length < question.maxSelections) {
      const next = [...selected, alt];
      onChange({ type: "lista", selected: next });
      if (next.length === question.maxSelections) onAutoAdvance?.();
    }
  }

  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full">
      <div className="flex flex-col gap-2 text-center w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight font-jakarta">
          {question.statement}
        </h2>
        <p className="text-xs sm:text-sm font-medium text-[#bababa] font-jakarta">
          {question.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {question.options.map((option) => {
          const isSelected = selected.includes(option.alternative);
          const isDisabled = !isSelected && selected.length >= question.maxSelections;

          return (
            <button
              key={option.alternative}
              onClick={() => toggle(option.alternative)}
              disabled={isDisabled}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left w-full
                ${isSelected
                  ? "border-brand-purple bg-[#f5edff] shadow-[0px_2px_0px_0px_#9267f4]"
                  : isDisabled
                    ? "border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed"
                    : "border-gray-200 bg-white shadow-[0px_2px_0px_0px_#e7e4e7] hover:border-brand-light-purple"
                }`}
            >
              {/* Letter badge */}
              <div className={`flex items-center justify-center shrink-0 size-6 rounded-lg border-2 transition-colors font-bold text-xs font-jakarta
                ${isSelected
                  ? "border-brand-purple bg-brand-purple text-white"
                  : "border-gray-200 text-gray-400"
                }`}>
                {option.alternative}
              </div>
              <span className={`text-sm sm:text-base font-normal leading-tight font-jakarta transition-colors
                ${isSelected ? "text-gray-800 font-medium" : "text-gray-600"}`}>
                {option.text}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}
