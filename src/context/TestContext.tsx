"use client";

import { questions, TOTAL_QUESTIONS } from "@/data/questions";
import { buildResult, calculateScores, getAnsweredCount } from "@/lib/riasec";
import { Answer, Answers, RiasecResult } from "@/lib/types";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

// ─── State ───────────────────────────────────────────────────────────────────

interface TestState {
  currentIndex: number;
  answers: Answers;
  result: RiasecResult | null;
  userName: string;
}

const initialState: TestState = {
  currentIndex: 0,
  answers: {},
  result: null,
  userName: "Thales Souza",
};

// ─── Actions ─────────────────────────────────────────────────────────────────

type TestAction =
  | { type: "ANSWER"; questionId: number; answer: Answer }
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "FINISH" }
  | { type: "RESET" }
  | { type: "SET_USER"; name: string };

// ─── Reducer ─────────────────────────────────────────────────────────────────

function testReducer(state: TestState, action: TestAction): TestState {
  switch (action.type) {
    case "ANSWER":
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.answer },
      };

    case "NEXT":
      return {
        ...state,
        currentIndex: Math.min(state.currentIndex + 1, TOTAL_QUESTIONS - 1),
      };

    case "PREV":
      return {
        ...state,
        currentIndex: Math.max(state.currentIndex - 1, 0),
      };

    case "FINISH": {
      const scores = calculateScores(questions, state.answers);
      const result = buildResult(scores);
      if (typeof window !== "undefined") {
        localStorage.setItem("riasec_result", JSON.stringify(result));
        localStorage.setItem("riasec_user", state.userName);
      }
      return { ...state, result };
    }

    case "RESET":
      return { ...initialState };

    case "SET_USER":
      return { ...state, userName: action.name };

    default:
      return state;
  }
}

// ─── Context ─────────────────────────────────────────────────────────────────

interface TestContextValue {
  state: TestState;
  dispatch: Dispatch<TestAction>;
  currentQuestion: (typeof questions)[number];
  progress: number;
  answeredCount: number;
  canGoNext: boolean;
  canGoPrev: boolean;
  isLastQuestion: boolean;
}

const TestContext = createContext<TestContextValue | null>(null);

export function TestProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(testReducer, initialState);

  const currentQuestion = questions[state.currentIndex];
  const answeredCount = getAnsweredCount(state.answers);
  const progress = Math.round(((state.currentIndex + 1) / TOTAL_QUESTIONS) * 100);

  const currentAnswer = state.answers[currentQuestion?.id];
  const canGoNext = (() => {
    if (!currentAnswer) return false;
    switch (currentAnswer.type) {
      case "dicotomica": return currentAnswer.chosen !== undefined;
      case "likert": return currentAnswer.value !== undefined;
      case "direta": return currentAnswer.applies !== undefined;
      case "cards": return currentAnswer.selected.length > 0;
      case "lista": return currentAnswer.selected.length > 0;
      default: return false;
    }
  })();

  const canGoPrev = state.currentIndex > 0;
  const isLastQuestion = state.currentIndex === TOTAL_QUESTIONS - 1;

  return (
    <TestContext.Provider
      value={{
        state,
        dispatch,
        currentQuestion,
        progress,
        answeredCount,
        canGoNext,
        canGoPrev,
        isLastQuestion,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

export function useTest(): TestContextValue {
  const ctx = useContext(TestContext);
  if (!ctx) throw new Error("useTest must be used within TestProvider");
  return ctx;
}
