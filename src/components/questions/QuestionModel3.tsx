"use client";

import { DiretaAnswer, QuestionDireta } from "@/lib/types";
import { QuestionIcon } from "./QuestionIcon";

interface QuestionModel3Props {
  question: QuestionDireta;
  answer?: DiretaAnswer;
  onChange: (answer: DiretaAnswer) => void;
  onAutoAdvance?: () => void;
}

export function QuestionModel3({ question, answer, onChange, onAutoAdvance }: QuestionModel3Props) {
  const applies = answer?.applies;

  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full">
      <div className="flex flex-col gap-2 text-center w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight font-jakarta">
          {question.statement}
        </h2>
        <p className="text-xs sm:text-sm font-medium text-[#bababa] font-jakarta">
          Selecione a opção que se aplica mais a seu perfil
        </p>
      </div>

      {/* Mobile: stacked full-width; Desktop: side-by-side capped at 280px */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:justify-center w-full">
        {/* Se aplica */}
        <button
          onClick={() => { onChange({ type: "direta", applies: true }); onAutoAdvance?.(); }}
          className={`w-full sm:flex-1 sm:max-w-[280px] flex flex-col items-center gap-3 px-4 py-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer
            ${applies === true
              ? "border-brand-purple bg-[#f5edff] shadow-[0px_2px_0px_0px_#9267f4]"
              : "border-gray-100 bg-white shadow-[0px_2px_0px_0px_#f3f1f3] hover:border-brand-light-purple"
            }`}
        >
          <div className={`flex items-center justify-center p-2 rounded-xl transition-colors
            ${applies === true ? "bg-brand-purple" : "bg-gray-300"}`}>
            <QuestionIcon name="check" size={24} className="text-white" />
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <span className="text-base sm:text-xl font-semibold text-gray-950 font-jakarta">Se aplica</span>
            <span className="text-xs sm:text-sm font-normal text-gray-800/50 font-jakarta">
              Sim, isso me representa bem
            </span>
          </div>
        </button>

        {/* Não se aplica */}
        <button
          onClick={() => { onChange({ type: "direta", applies: false }); onAutoAdvance?.(); }}
          className={`w-full sm:flex-1 sm:max-w-[280px] flex flex-col items-center gap-3 px-4 py-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer
            ${applies === false
              ? "border-red-400 bg-red-50 shadow-[0px_2px_0px_0px_#f87171]"
              : "border-gray-100 bg-white shadow-[0px_2px_0px_0px_#f3f1f3] hover:border-red-200"
            }`}
        >
          <div className={`flex items-center justify-center p-2 rounded-xl transition-colors
            ${applies === false ? "bg-red-400" : "bg-gray-300"}`}>
            <QuestionIcon name="x" size={24} className="text-white" />
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <span className="text-base sm:text-xl font-semibold text-gray-950 font-jakarta">Não se aplica</span>
            <span className="text-xs sm:text-sm font-normal text-gray-800/50 font-jakarta">
              Isso não tem muito a ver comigo
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
