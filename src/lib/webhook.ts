import { LeadData, RiasecResult } from "./types";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL;

interface WebhookLeadCaptured {
  event: "lead_captured";
  timestamp: string;
  lead: LeadData;
}

interface WebhookTestCompleted {
  event: "test_completed";
  timestamp: string;
  lead: LeadData;
  resultado: {
    codigo: string;
    perfis: string[];
    pontuacoes: Record<string, number>;
  };
}

type WebhookPayload = WebhookLeadCaptured | WebhookTestCompleted;

async function sendWebhook(payload: WebhookPayload): Promise<void> {
  const requests: Promise<unknown>[] = [];

  // Webhook externo (Make, n8n, Zapier...)
  if (WEBHOOK_URL) {
    requests.push(
      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    );
  }

  // Supabase via API Route interna
  requests.push(
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
  );

  // Falha silenciosa — não bloquear a UX do usuário
  await Promise.allSettled(requests);
}

export function sendLeadCaptured(lead: LeadData): void {
  sendWebhook({
    event: "lead_captured",
    timestamp: new Date().toISOString(),
    lead,
  });
}

export function sendTestCompleted(lead: LeadData, result: RiasecResult): void {
  sendWebhook({
    event: "test_completed",
    timestamp: new Date().toISOString(),
    lead,
    resultado: {
      codigo: result.code,
      perfis: result.topProfiles,
      pontuacoes: result.scores,
    },
  });
}
