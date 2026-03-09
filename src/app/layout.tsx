import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teste Vocacional | Beduka",
  description: "Descubra seu perfil profissional com o teste vocacional baseado na Teoria de Holland (RIASEC)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-jakarta antialiased">{children}</body>
    </html>
  );
}
