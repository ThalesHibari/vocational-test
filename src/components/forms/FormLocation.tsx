"use client";

import { useLead } from "@/context/LeadContext";
import { useEffect, useRef, useState } from "react";

const ESTADOS: Record<string, string> = {
  AC: "Acre", AL: "Alagoas", AP: "Amapá", AM: "Amazonas", BA: "Bahia",
  CE: "Ceará", DF: "Distrito Federal", ES: "Espírito Santo", GO: "Goiás",
  MA: "Maranhão", MT: "Mato Grosso", MS: "Mato Grosso do Sul",
  MG: "Minas Gerais", PA: "Pará", PB: "Paraíba", PR: "Paraná",
  PE: "Pernambuco", PI: "Piauí", RJ: "Rio de Janeiro", RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul", RO: "Rondônia", RR: "Roraima",
  SC: "Santa Catarina", SP: "São Paulo", SE: "Sergipe", TO: "Tocantins",
};

interface Municipio {
  id: number;
  nome: string;
}

export function FormLocation() {
  const { leadData, setField } = useLead();

  const [municipios, setMunicipios] = useState<Municipio[]>([]);
  const [loadingMunicipios, setLoadingMunicipios] = useState(false);
  const [cidadeInput, setCidadeInput] = useState(leadData.cidade);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Busca municípios do IBGE ao mudar o estado
  useEffect(() => {
    if (!leadData.estado) {
      setMunicipios([]);
      setCidadeInput("");
      setField("cidade", "");
      return;
    }
    setLoadingMunicipios(true);
    setMunicipios([]);
    setCidadeInput("");
    setField("cidade", "");
    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${leadData.estado}/municipios?orderBy=nome`
    )
      .then((res) => res.json())
      .then((data: Municipio[]) => setMunicipios(data))
      .catch(() => setMunicipios([]))
      .finally(() => setLoadingMunicipios(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leadData.estado]);

  // Fecha sugestões ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const suggestions =
    cidadeInput.length >= 4
      ? municipios
          .filter((m) => m.nome.toLowerCase().includes(cidadeInput.toLowerCase()))
          .slice(0, 7)
      : [];

  function handleCidadeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setCidadeInput(val);
    setField("cidade", val);
    setShowSuggestions(val.length >= 4);
  }

  function selectMunicipio(nome: string) {
    setCidadeInput(nome);
    setField("cidade", nome);
    setShowSuggestions(false);
  }

  const cidadeDisabled = !leadData.estado || loadingMunicipios;

  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full">
      <div className="flex flex-col gap-2 text-center w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight font-jakarta">
          De onde você é?
        </h2>
        <p className="text-xs sm:text-sm font-medium text-[#bababa] font-jakarta">
          Assim conseguimos indicar as opções mais próximas de você.
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {/* Estado */}
        <div className="flex flex-col gap-2">
          <label className="font-jakarta font-semibold text-sm text-gray-800">
            Estado <span className="text-brand-purple">*</span>
          </label>
          <select
            value={leadData.estado}
            onChange={(e) => setField("estado", e.target.value)}
            className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 bg-white font-jakarta text-sm text-gray-800 outline-none focus:border-brand-purple transition-colors shadow-[0px_2px_0px_0px_#e7e4e7] appearance-none cursor-pointer"
          >
            <option value="" disabled>Selecione o seu estado</option>
            {Object.entries(ESTADOS).map(([uf, nome]) => (
              <option key={uf} value={uf}>{nome} ({uf})</option>
            ))}
          </select>
        </div>

        {/* Cidade */}
        <div className="flex flex-col gap-2" ref={wrapperRef}>
          <label className="font-jakarta font-semibold text-sm text-gray-800">
            Cidade{" "}
            <span className="font-normal text-brand-purple text-xs">(opcional)</span>
          </label>

          <div className="relative">
            <input
              type="text"
              value={cidadeInput}
              onChange={handleCidadeChange}
              onFocus={() => cidadeInput.length >= 4 && setShowSuggestions(true)}
              disabled={cidadeDisabled}
              placeholder={
                !leadData.estado
                  ? "Selecione um estado primeiro"
                  : loadingMunicipios
                  ? "Carregando cidades..."
                  : "Digite o nome da cidade (mín. 4 letras)"
              }
              className={`w-full h-12 px-4 rounded-xl border-2 bg-white font-jakarta text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-colors shadow-[0px_2px_0px_0px_#e7e4e7] ${
                cidadeDisabled
                  ? "opacity-50 cursor-not-allowed border-gray-200"
                  : "border-gray-200 focus:border-brand-purple"
              }`}
            />

            {/* Loading spinner */}
            {loadingMunicipios && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 border-2 border-brand-purple border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            {/* Suggestions dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute z-20 top-[calc(100%+4px)] left-0 right-0 bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden">
                {suggestions.map((m) => (
                  <li key={m.id}>
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault(); // evita blur antes do click
                        selectMunicipio(m.nome);
                      }}
                      className="w-full text-left px-4 py-2.5 font-jakarta text-sm text-gray-700 hover:bg-brand-bg-purple hover:text-gray-900 transition-colors"
                    >
                      {m.nome}
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Sem resultados */}
            {showSuggestions && cidadeInput.length >= 4 && suggestions.length === 0 && !loadingMunicipios && (
              <div className="absolute z-20 top-[calc(100%+4px)] left-0 right-0 bg-white border-2 border-gray-200 rounded-xl px-4 py-3">
                <p className="font-jakarta text-sm text-gray-400">Nenhuma cidade encontrada</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
