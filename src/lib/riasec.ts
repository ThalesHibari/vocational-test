import {
  Answer,
  Answers,
  ProfileInfo,
  Question,
  RiasecProfile,
  RiasecResult,
  RiasecScores,
} from "./types";

// ─── Pontuação ───────────────────────────────────────────────────────────────

export function calculateScores(
  questions: Question[],
  answers: Answers
): RiasecScores {
  const scores: RiasecScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

  for (const question of questions) {
    const answer = answers[question.id];
    if (!answer) continue;

    switch (question.type) {
      case "dicotomica": {
        if (answer.type !== "dicotomica") break;
        const chosen = question.options[answer.chosen];
        scores[chosen.profile] += 2;
        break;
      }

      case "likert": {
        if (answer.type !== "likert") break;
        // Discordo=-2, Pouco=-1, Às vezes=0, Bastante=+1, Concordo=+2
        const rawScore = scores[question.profile] + answer.value;
        scores[question.profile] = rawScore;
        break;
      }

      case "direta": {
        if (answer.type !== "direta") break;
        if (answer.applies) scores[question.profile] += 1;
        break;
      }

      case "cards": {
        if (answer.type !== "cards") break;
        for (const selectedId of answer.selected) {
          const option = question.options.find((o) => o.id === selectedId);
          if (option) scores[option.profile] += 1;
        }
        break;
      }

      case "lista": {
        if (answer.type !== "lista") break;
        for (const selectedAlt of answer.selected) {
          const option = question.options.find(
            (o) => o.alternative === selectedAlt
          );
          if (option) scores[option.profile] += 1;
        }
        break;
      }
    }
  }

  return scores;
}

// ─── Resultado ───────────────────────────────────────────────────────────────

export function buildResult(scores: RiasecScores): RiasecResult {
  const sorted = (Object.entries(scores) as [RiasecProfile, number][])
    .sort((a, b) => b[1] - a[1])
    .map(([p]) => p);

  const topProfiles = sorted.slice(0, 3);
  const code = topProfiles.join("");

  return { scores, topProfiles, code };
}

// ─── Informações dos Perfis ──────────────────────────────────────────────────

export const PROFILE_INFO: Record<RiasecProfile, ProfileInfo> = {
  R: {
    profile: "R",
    name: "Realístico",
    emoji: "🔧",
    color: "#E87C2C",
    bgColor: "#FFF4EC",
    description:
      "Você prefere trabalhar com objetos, máquinas, ferramentas e atividades físicas. É prático, independente e gosta de resultados concretos e tangíveis.",
    traits: [
      "Habilidade manual e técnica",
      "Gosta de trabalho físico e ao ar livre",
      "Independente e direto",
      "Foco em resultados práticos",
      "Bom com ferramentas e máquinas",
    ],
    careers: [
      "Engenheiro Civil",
      "Arquiteto",
      "Técnico em Mecânica",
      "Agrônomo",
      "Eletricista",
      "Piloto",
      "Bombeiro",
    ],
  },
  I: {
    profile: "I",
    name: "Investigativo",
    emoji: "🔬",
    color: "#3B82F6",
    bgColor: "#EFF6FF",
    description:
      "Você é analítico, curioso e orientado à pesquisa. Prefere trabalhar com ideias, dados e resolver problemas complexos através do pensamento crítico.",
    traits: [
      "Pensamento analítico e crítico",
      "Curiosidade intelectual",
      "Independência e introspecção",
      "Gosta de pesquisa e dados",
      "Resolução de problemas complexos",
    ],
    careers: [
      "Cientista",
      "Médico",
      "Engenheiro de Software",
      "Biólogo",
      "Farmacêutico",
      "Economista",
      "Psicólogo Pesquisador",
    ],
  },
  A: {
    profile: "A",
    name: "Artístico",
    emoji: "🎨",
    color: "#EC4899",
    bgColor: "#FDF2F8",
    description:
      "Você é criativo, expressivo e valoriza a liberdade. Prefere ambientes que permitem autoexpressão e trabalha bem com arte, design e comunicação.",
    traits: [
      "Alta criatividade e imaginação",
      "Expressividade e sensibilidade",
      "Independência e originalidade",
      "Gosta de arte, música e escrita",
      "Pensa fora da caixa",
    ],
    careers: [
      "Designer Gráfico",
      "Músico",
      "Escritor",
      "Ator",
      "Publicitário",
      "Arquiteto de Interiores",
      "Fotografo",
    ],
  },
  S: {
    profile: "S",
    name: "Social",
    emoji: "🤝",
    color: "#10B981",
    bgColor: "#ECFDF5",
    description:
      "Você é empático, colaborativo e se importa com o bem-estar das pessoas. Gosta de ensinar, orientar e trabalhar em equipe para fazer diferença na vida dos outros.",
    traits: [
      "Empatia e habilidade interpessoal",
      "Gosta de ensinar e ajudar",
      "Comunicação eficaz",
      "Trabalha bem em equipe",
      "Focado no bem-estar coletivo",
    ],
    careers: [
      "Professor",
      "Psicólogo",
      "Assistente Social",
      "Enfermeiro",
      "Terapeuta",
      "Coach",
      "Gestor de RH",
    ],
  },
  E: {
    profile: "E",
    name: "Empreendedor",
    emoji: "🚀",
    color: "#F59E0B",
    bgColor: "#FFFBEB",
    description:
      "Você é ambicioso, persuasivo e natural liderança. Gosta de influenciar pessoas, tomar decisões e alcançar objetivos em ambientes competitivos e dinâmicos.",
    traits: [
      "Liderança e persuasão",
      "Ambição e determinação",
      "Habilidade de comunicação",
      "Tomada de decisão ágil",
      "Focado em resultados e metas",
    ],
    careers: [
      "Empreendedor",
      "Executivo",
      "Advogado",
      "Gestor de Projetos",
      "Vendedor",
      "Político",
      "Consultor de Negócios",
    ],
  },
  C: {
    profile: "C",
    name: "Convencional",
    emoji: "📊",
    color: "#6366F1",
    bgColor: "#EEF2FF",
    description:
      "Você é organizado, metódico e confiável. Gosta de trabalhar com dados, sistemas e procedimentos bem definidos, prezando por precisão e eficiência.",
    traits: [
      "Organização e atenção a detalhes",
      "Metódico e sistemático",
      "Confiabilidade e responsabilidade",
      "Gosta de dados e números",
      "Segue regras e procedimentos",
    ],
    careers: [
      "Contador",
      "Analista Financeiro",
      "Administrador",
      "Secretário",
      "Analista de Dados",
      "Auditor",
      "Gestor de Logística",
    ],
  },
};

// ─── Utilitários ─────────────────────────────────────────────────────────────

export function getAnsweredCount(answers: Answers): number {
  return Object.keys(answers).length;
}

export function isAnswered(answer: Answer | undefined): boolean {
  if (!answer) return false;
  switch (answer.type) {
    case "dicotomica":
      return answer.chosen !== undefined;
    case "likert":
      return answer.value !== undefined;
    case "direta":
      return answer.applies !== undefined;
    case "cards":
      return answer.selected.length > 0;
    case "lista":
      return answer.selected.length > 0;
  }
}
