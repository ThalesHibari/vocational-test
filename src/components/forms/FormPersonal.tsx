"use client";

import { EMAIL_REGEX, formatPhone, useLead } from "@/context/LeadContext";
import { useState } from "react";

export function FormPersonal() {
  const { leadData, setField } = useLead();
  const [emailTouched, setEmailTouched] = useState(false);

  const emailInvalid =
    emailTouched && leadData.email !== "" && !EMAIL_REGEX.test(leadData.email);

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setField("telefone", formatPhone(e.target.value));
  }

  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full">
      <div className="flex flex-col gap-2 text-center w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight font-jakarta">
          Olá! Vamos começar com seus dados de contato
        </h2>
        <p className="text-xs sm:text-sm font-medium text-[#bababa] font-jakarta">
          Prometemos não te encher de spam. Seus dados estão seguros.
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {/* Nome */}
        <div className="flex flex-col gap-2">
          <label className="font-jakarta font-semibold text-sm text-gray-800">
            Nome <span className="text-brand-pink">*</span>
          </label>
          <input
            type="text"
            value={leadData.nome}
            onChange={(e) => setField("nome", e.target.value)}
            placeholder="Como você gostaria de ser chamado?"
            className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-white font-jakarta text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-brand-pink transition-colors shadow-[0px_2px_0px_0px_#e7e4e7]"
          />
        </div>

        {/* E-mail */}
        <div className="flex flex-col gap-2">
          <label className="font-jakarta font-semibold text-sm text-gray-800">
            E-mail <span className="text-brand-pink">*</span>
          </label>
          <input
            type="email"
            value={leadData.email}
            onChange={(e) => setField("email", e.target.value)}
            onBlur={() => setEmailTouched(true)}
            placeholder="seu@email.com"
            className={`w-full h-12 px-4 rounded-xl border-2 bg-white font-jakarta text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-colors shadow-[0px_2px_0px_0px_#e7e4e7] ${
              emailInvalid
                ? "border-red-400 focus:border-red-400"
                : "border-gray-200 focus:border-brand-pink"
            }`}
          />
          {emailInvalid && (
            <p className="text-xs font-medium text-red-500 font-jakarta">
              Digite um e-mail válido (ex: nome@email.com)
            </p>
          )}
        </div>

        {/* Telefone */}
        <div className="flex flex-col gap-2">
          <label className="font-jakarta font-semibold text-sm text-gray-800">
            Whatsapp/Telefone
          </label>
          <input
            type="tel"
            inputMode="numeric"
            value={leadData.telefone}
            onChange={handlePhoneChange}
            placeholder="(00) 00000-0000"
            className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-white font-jakarta text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-brand-pink transition-colors shadow-[0px_2px_0px_0px_#e7e4e7]"
          />
        </div>
      </div>
    </div>
  );
}
