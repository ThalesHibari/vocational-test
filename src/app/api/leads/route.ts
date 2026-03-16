import { supabaseAdmin } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { event, lead, resultado } = body;

  const { error } = await supabaseAdmin.from("leads").upsert(
    {
      email: lead.email,
      nome: lead.nome,
      telefone: lead.telefone || null,
      faixa_etaria: lead.faixaEtaria || null,
      escolaridade: lead.escolaridade || null,
      estado: lead.estado || null,
      cidade: lead.cidade || null,
      codigo_holland: resultado?.codigo || null,
      perfis: resultado?.perfis || null,
      pontuacoes: resultado?.pontuacoes || null,
      evento: event,
    },
    { onConflict: "email" }
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
