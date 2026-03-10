"use client";

import { CardsAnswer, QuestionCards } from "@/lib/types";
import { QuestionIcon } from "./QuestionIcon";

interface QuestionModel4Props {
  question: QuestionCards;
  answer?: CardsAnswer;
  onChange: (answer: CardsAnswer) => void;
}

export function QuestionModel4({ question, answer, onChange }: QuestionModel4Props) {
  const selected = answer?.selected ?? [];

  function toggle(id: string) {
    const next = selected.includes(id)
      ? selected.filter((s) => s !== id)
      : [...selected, id];
    onChange({ type: "cards", selected: next });
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

      {/* Mobile: single-column horizontal cards; Desktop: 2-column vertical cards */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 w-full">
        {question.options.map((option) => {
          const isSelected = selected.includes(option.id);
          return (
            <button
              key={option.id}
              onClick={() => toggle(option.id)}
              className={`w-full rounded-2xl border-2 transition-all duration-200 cursor-pointer text-left
                ${isSelected
                  ? "border-brand-purple bg-[#f5edff] shadow-[0px_2px_0px_0px_#9267f4]"
                  : "border-gray-100 bg-white shadow-[0px_2px_0px_0px_#f3f1f3] hover:border-brand-light-purple"
                }`}
            >
              {/* Mobile layout: horizontal (icon | text | checkbox) */}
              <div className="sm:hidden flex items-center gap-4 p-4">
                <QuestionIcon name={option.icon} size={24} className="shrink-0" />
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <span className="text-sm font-semibold text-[#14161b] leading-tight font-jakarta">
                    {option.label}
                  </span>
                  <span className="text-xs font-normal text-[#afafaf] font-jakarta leading-tight">
                    {option.description}
                  </span>
                </div>
                <div className={`flex items-center justify-center shrink-0 size-5 rounded border transition-colors
                  ${isSelected ? "bg-brand-dark-purple border-brand-dark-purple" : "bg-white border-gray-200"}`}>
                  {isSelected && (
                    <svg viewBox="0 0 16 16" className="size-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="13 4 6 11 3 8"/>
                    </svg>
                  )}
                </div>
              </div>

              {/* Desktop layout: vertical (icon on top, text, checkbox inline) */}
              <div className="hidden sm:flex flex-col gap-3 items-start p-6">
                <QuestionIcon name={option.icon} size={24} />
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col gap-2">
                    <span className="text-base font-semibold text-[#14161b] leading-tight font-jakarta">
                      {option.label}
                    </span>
                    <span className="text-xs font-normal text-[#afafaf] font-jakarta">
                      {option.description}
                    </span>
                  </div>
                  <div className={`flex items-center justify-center shrink-0 size-5 rounded border transition-colors
                    ${isSelected ? "bg-brand-dark-purple border-brand-dark-purple" : "bg-white border-gray-200"}`}>
                    {isSelected && (
                      <svg viewBox="0 0 16 16" className="size-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="13 4 6 11 3 8"/>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
