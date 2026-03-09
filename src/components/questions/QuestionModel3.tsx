"use client";

import { DiretaAnswer, QuestionDireta } from "@/lib/types";
import { QuestionIcon } from "./QuestionIcon";

interface QuestionModel3Props {
  question: QuestionDireta;
  answer?: DiretaAnswer;
  onChange: (answer: DiretaAnswer) => void;
}

export function QuestionModel3({ question, answer, onChange }: QuestionModel3Props) {
  const applies = answer?.applies;

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

      <div className="flex gap-4 items-stretch justify-center w-full">
        {/* Se aplica */}
        <button
          onClick={() => onChange({ type: "direta", applies: true })}
          className={`flex-1 flex flex-col items-center gap-3 px-6 py-8 rounded-2xl border-2 transition-all duration-200 cursor-pointer max-w-[280px]
            ${applies === true
              ? "border-brand-purple bg-[#f5edff] shadow-[0px_2px_0px_0px_#9267f4]"
              : "border-gray-100 bg-white shadow-[0px_2px_0px_0px_#f3f1f3] hover:border-brand-light-purple"
            }`}
        >
          <div className={`flex items-center justify-center p-2 rounded-xl transition-colors
            ${applies === true ? "bg-brand-purple" : "bg-gray-300"}`}>
            <QuestionIcon name="check" size={24} className={applies === true ? "text-white" : "text-white"} />
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <span className="text-xl font-semibold text-gray-950 font-jakarta">Se aplica</span>
            <span className="text-sm font-normal text-gray-800/50 font-jakarta w-[220px]">
              Sim, isso me representa bem
            </span>
          </div>
        </button>

        {/* Não se aplica */}
        <button
          onClick={() => onChange({ type: "direta", applies: false })}
          className={`flex-1 flex flex-col items-center gap-3 px-6 py-8 rounded-2xl border-2 transition-all duration-200 cursor-pointer max-w-[280px]
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
            <span className="text-xl font-semibold text-gray-950 font-jakarta">Não se aplica</span>
            <span className="text-sm font-normal text-gray-800/50 font-jakarta w-[220px]">
              Isso não tem muito a ver comigo
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
