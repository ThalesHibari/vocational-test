import { TOTAL_QUESTIONS } from "@/data/questions";

interface ProgressBarProps {
  currentIndex: number;
  answeredCount: number;
}

export function ProgressBar({ currentIndex, answeredCount }: ProgressBarProps) {
  const progressPercent = Math.max(
    ((currentIndex + 1) / TOTAL_QUESTIONS) * 100,
    3
  );

  return (
    <div className="w-full max-w-[720px] mx-auto flex flex-col gap-2">
      <div className="flex items-center justify-center gap-2 mt-8">
        <span className="text-xs font-extrabold text-brand-purple tracking-widest uppercase font-jakarta">
          Teste Vocacional
        </span>
      </div>
      <div className="flex items-center justify-between text-sm tracking-wide">
        <span className="font-semibold text-gray-800 font-jakarta">Progresso</span>
        <span className="font-normal text-gray-400 font-jakarta">
          {currentIndex + 1} de {TOTAL_QUESTIONS}
        </span>
      </div>
      <div className="relative bg-brand-light-purple h-4 rounded-full w-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-4 bg-brand-purple rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        >
          <div className="absolute inset-[4px_8px_7px_8px] bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
