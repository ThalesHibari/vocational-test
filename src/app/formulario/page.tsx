"use client";

import { LeadFormFlow } from "@/components/forms/LeadFormFlow";
import { useRouter } from "next/navigation";

export default function FormularioPage() {
  const router = useRouter();
  return <LeadFormFlow onComplete={() => router.push("/teste")} />;
}
