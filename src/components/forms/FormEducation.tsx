"use client";

import { useLead } from "@/context/LeadContext";
import { FormChoiceItem } from "./FormChoiceItem";

const EDUCATION_OPTIONS = [
  "Cursando Ensino Fundamental",
  "Cursando Ensino Médio",
  "Ensino Médio Concluído",
  "Cursando Faculdade",
  "Já tenho Graduação",
];

export function FormEducation() {
  const { leadData, setField } = useLead();

  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full">
      <div className="flex flex-col gap-2 text-center w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight font-jakarta">
          Qual é a sua situação de escolaridade?
        </h2>
        <p className="text-xs sm:text-sm font-medium text-[#bababa] font-jakarta">
          Não há resposta certa ou errada, seja honesto(a).
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {EDUCATION_OPTIONS.map((option, i) => (
          <FormChoiceItem
            key={option}
            index={i + 1}
            text={option}
            selected={leadData.escolaridade === option}
            onSelect={() => setField("escolaridade", option)}
          />
        ))}
      </div>
    </div>
  );
}
