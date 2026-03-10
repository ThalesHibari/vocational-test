"use client";

import { Answer, Question } from "@/lib/types";
import { QuestionModel1 } from "./QuestionModel1";
import { QuestionModel2 } from "./QuestionModel2";
import { QuestionModel3 } from "./QuestionModel3";
import { QuestionModel4 } from "./QuestionModel4";
import { QuestionModel5 } from "./QuestionModel5";

interface QuestionRendererProps {
  question: Question;
  answer?: Answer;
  onChange: (answer: Answer) => void;
  onAutoAdvance?: () => void;
}

export function QuestionRenderer({ question, answer, onChange, onAutoAdvance }: QuestionRendererProps) {
  switch (question.type) {
    case "dicotomica":
      return (
        <QuestionModel1
          question={question}
          answer={answer?.type === "dicotomica" ? answer : undefined}
          onChange={onChange}
          onAutoAdvance={onAutoAdvance}
        />
      );
    case "likert":
      return (
        <QuestionModel2
          question={question}
          answer={answer?.type === "likert" ? answer : undefined}
          onChange={onChange}
          onAutoAdvance={onAutoAdvance}
        />
      );
    case "direta":
      return (
        <QuestionModel3
          question={question}
          answer={answer?.type === "direta" ? answer : undefined}
          onChange={onChange}
          onAutoAdvance={onAutoAdvance}
        />
      );
    case "cards":
      return (
        <QuestionModel4
          question={question}
          answer={answer?.type === "cards" ? answer : undefined}
          onChange={onChange}
        />
      );
    case "lista":
      return (
        <QuestionModel5
          question={question}
          answer={answer?.type === "lista" ? answer : undefined}
          onChange={onChange}
          onAutoAdvance={onAutoAdvance}
        />
      );
    default:
      return null;
  }
}
