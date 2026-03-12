"use client";

import { LeadData } from "@/lib/types";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

// ─── Helpers ─────────────────────────────────────────────────────────────────

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 10) {
    return digits
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }
  return digits
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

// ─── State ───────────────────────────────────────────────────────────────────

export const TOTAL_FORM_STEPS = 4;

const initialLeadData: LeadData = {
  nome: "",
  email: "",
  telefone: "",
  faixaEtaria: "",
  escolaridade: "",
  estado: "",
  cidade: "",
};

// ─── Context ─────────────────────────────────────────────────────────────────

interface LeadContextValue {
  leadData: LeadData;
  currentStep: number;
  setField: (field: keyof LeadData, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  canProceed: boolean;
  isLastStep: boolean;
}

const LeadContext = createContext<LeadContextValue | null>(null);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [leadData, setLeadData] = useState<LeadData>(initialLeadData);

  function setField(field: keyof LeadData, value: string) {
    setLeadData((prev) => ({ ...prev, [field]: value }));
  }

  function nextStep() {
    setCurrentStep((s) => Math.min(s + 1, TOTAL_FORM_STEPS - 1));
  }

  function prevStep() {
    setCurrentStep((s) => Math.max(s - 1, 0));
  }

  const canProceed = (() => {
    switch (currentStep) {
      case 0:
        return (
          leadData.nome.trim() !== "" &&
          EMAIL_REGEX.test(leadData.email)
        );
      case 1:
        return leadData.faixaEtaria !== "";
      case 2:
        return leadData.escolaridade !== "";
      case 3:
        return leadData.estado !== "";
      default:
        return false;
    }
  })();

  const isLastStep = currentStep === TOTAL_FORM_STEPS - 1;

  return (
    <LeadContext.Provider
      value={{
        leadData,
        currentStep,
        setField,
        nextStep,
        prevStep,
        canProceed,
        isLastStep,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
}

export function useLead(): LeadContextValue {
  const ctx = useContext(LeadContext);
  if (!ctx) throw new Error("useLead must be used within LeadProvider");
  return ctx;
}
