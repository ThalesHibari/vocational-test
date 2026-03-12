"use client";

import { useLead } from "@/context/LeadContext";
import { FormChoiceItem } from "./FormChoiceItem";

const AGE_OPTIONS = [
  "15 a 17 anos",
  "18 a 24 anos",
  "25 a 30 anos",
  "31 a 40 anos",
  "41 anos ou mais",
];

export function FormAge() {
  const { leadData, setField } = useLead();

  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full">
      <div className="flex flex-col gap-2 text-center w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight font-jakarta">
          Qual é a sua faixa etária?
        </h2>
        <p className="text-xs sm:text-sm font-medium text-[#bababa] font-jakarta">
          Isso nos ajuda a entender melhor o seu momento de vida.
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {AGE_OPTIONS.map((option, i) => (
          <FormChoiceItem
            key={option}
            index={i + 1}
            text={option}
            selected={leadData.faixaEtaria === option}
            onSelect={() => setField("faixaEtaria", option)}
          />
        ))}
      </div>
    </div>
  );
}
