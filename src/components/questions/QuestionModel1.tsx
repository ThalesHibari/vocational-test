"use client";

import { DicotomicaAnswer, QuestionDicotomica } from "@/lib/types";
import { QuestionIcon } from "./QuestionIcon";

interface QuestionModel1Props {
  question: QuestionDicotomica;
  answer?: DicotomicaAnswer;
  onChange: (answer: DicotomicaAnswer) => void;
}

export function QuestionModel1({ question, answer, onChange }: QuestionModel1Props) {
  const chosen = answer?.chosen;

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2 text-center w-full">
        <h2 className="text-2xl font-bold text-gray-800 leading-tight font-jakarta">
          {question.statement}
        </h2>
        <p className="text-sm font-medium text-[#bababa] font-jakarta">
          Selecione a opção que se aplica mais a seu perfil
        </p>
      </div>

      <div className="flex items-stretch gap-4 w-full">
        {/* Card A */}
        <button
          onClick={() => onChange({ type: "dicotomica", chosen: 0 })}
          className={`flex-1 flex flex-col items-center gap-3 px-6 py-8 rounded-2xl border-2 transition-all duration-200 text-center cursor-pointer
            ${chosen === 0
              ? "border-brand-purple bg-[#f5edff] shadow-[0px_2px_0px_0px_#9267f4]"
              : "border-gray-100 bg-white shadow-[0px_2px_0px_0px_#f3f1f3] hover:border-brand-light-purple"
            }`}
        >
          <div className={`flex items-center justify-center size-[72px] rounded-2xl border transition-colors
            ${chosen === 0 ? "bg-[#ede0fc] border-brand-light-purple" : "bg-gray-50 border-gray-200"}`}>
            <QuestionIcon name={question.options[0].icon} size={40} />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-xl font-semibold text-gray-950 leading-tight font-jakarta">
              {question.options[0].label}
            </span>
            <span className="text-sm font-normal text-gray-800/50 leading-tight font-jakarta">
              {question.options[0].description}
            </span>
          </div>
        </button>

        {/* VS divider */}
        <div className="flex flex-col items-center justify-center px-2 gap-3 shrink-0 self-stretch">
          <div className="w-px flex-1 bg-gray-200 rounded-full" />
          <span className="text-xs font-bold text-gray-300 font-jakarta">VS</span>
          <div className="w-px flex-1 bg-gray-200 rounded-full" />
        </div>

        {/* Card B */}
        <button
          onClick={() => onChange({ type: "dicotomica", chosen: 1 })}
          className={`flex-1 flex flex-col items-center gap-3 px-6 py-8 rounded-2xl border-2 transition-all duration-200 text-center cursor-pointer
            ${chosen === 1
              ? "border-brand-purple bg-[#f5edff] shadow-[0px_2px_0px_0px_#9267f4]"
              : "border-gray-100 bg-white shadow-[0px_2px_0px_0px_#f3f1f3] hover:border-brand-light-purple"
            }`}
        >
          <div className={`flex items-center justify-center size-[72px] rounded-2xl border transition-colors
            ${chosen === 1 ? "bg-[#ede0fc] border-brand-light-purple" : "bg-gray-50 border-gray-200"}`}>
            <QuestionIcon name={question.options[1].icon} size={40} />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-xl font-semibold text-gray-950 leading-tight font-jakarta">
              {question.options[1].label}
            </span>
            <span className="text-sm font-normal text-gray-800/50 leading-tight font-jakarta">
              {question.options[1].description}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
