// ─── Perfis RIASEC ───────────────────────────────────────────────────────────
export type RiasecProfile = "R" | "I" | "A" | "S" | "E" | "C";

export type RiasecScores = Record<RiasecProfile, number>;

// ─── Modelos de Pergunta ─────────────────────────────────────────────────────

/** Modelo 1: Duas opções opostas, uma deve ser escolhida (+2 ao perfil) */
export interface QuestionDicotomica {
  type: "dicotomica";
  id: number;
  statement: string;
  options: [DicotomicaOption, DicotomicaOption];
}

export interface DicotomicaOption {
  label: string;
  description: string;
  icon: string; // nome do ícone (briefcase, microscope, etc.)
  profile: RiasecProfile;
}

/** Modelo 2: Escala Likert com emojis (-2 a +2) */
export interface QuestionLikert {
  type: "likert";
  id: number;
  statement: string;
  profile: RiasecProfile;
}

export type LikertValue = -2 | -1 | 0 | 1 | 2;

export interface LikertOption {
  value: LikertValue;
  emoji: string;
  label: string;
}

/** Modelo 3: Se aplica (+1) / Não se aplica (0) */
export interface QuestionDireta {
  type: "direta";
  id: number;
  statement: string;
  profile: RiasecProfile;
}

/** Modelo 4: Múltipla escolha com cards e ícones (+1 por seleção) */
export interface QuestionCards {
  type: "cards";
  id: number;
  statement: string;
  subtitle: string;
  options: CardOption[];
}

export interface CardOption {
  id: string;
  label: string;
  description: string;
  icon: string;
  profile: RiasecProfile;
}

/** Modelo 5: Múltipla escolha em lista A-E (+1 por seleção, selecionar 2-3) */
export interface QuestionLista {
  type: "lista";
  id: number;
  statement: string;
  subtitle: string;
  maxSelections: number;
  options: ListaOption[];
}

export interface ListaOption {
  alternative: string; // A, B, C, D, E
  text: string;
  profile: RiasecProfile;
}

export type Question =
  | QuestionDicotomica
  | QuestionLikert
  | QuestionDireta
  | QuestionCards
  | QuestionLista;

// ─── Respostas ───────────────────────────────────────────────────────────────

export type DicotomicaAnswer = { type: "dicotomica"; chosen: 0 | 1 };
export type LikertAnswer = { type: "likert"; value: LikertValue };
export type DiretaAnswer = { type: "direta"; applies: boolean };
export type CardsAnswer = { type: "cards"; selected: string[] };
export type ListaAnswer = { type: "lista"; selected: string[] };

export type Answer =
  | DicotomicaAnswer
  | LikertAnswer
  | DiretaAnswer
  | CardsAnswer
  | ListaAnswer;

export type Answers = Record<number, Answer>;

// ─── Lead Form ───────────────────────────────────────────────────────────────

export interface LeadData {
  nome: string;
  email: string;
  telefone: string;
  faixaEtaria: string;
  escolaridade: string;
  estado: string;
  cidade: string;
}

// ─── Resultado ───────────────────────────────────────────────────────────────

export interface RiasecResult {
  scores: RiasecScores;
  topProfiles: RiasecProfile[];
  code: string; // Ex: "IAE"
}

export interface ProfileInfo {
  profile: RiasecProfile;
  name: string;
  emoji: string;
  color: string;
  bgColor: string;
  description: string;
  traits: string[];
  careers: string[];
}
