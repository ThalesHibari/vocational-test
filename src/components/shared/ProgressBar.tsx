import { TOTAL_QUESTIONS } from "@/data/questions";

interface ProgressBarProps {
  currentIndex: number;
  answeredCount: number;
  /** When true renders the desktop variant (with title + progress/total labels) */
  variant?: "desktop" | "mobile";
  primaryColor?: string;
  lightColor?: string;
}

export function ProgressBar({
  currentIndex,
  answeredCount,
  variant = "desktop",
  primaryColor = "#9267f4",
  lightColor = "#dabff9",
}: ProgressBarProps) {
  const progressPercent = Math.max(
    ((currentIndex + 1) / TOTAL_QUESTIONS) * 100,
    3
  );

  if (variant === "mobile") {
    return (
      <div className="relative h-3 rounded-full w-full overflow-hidden" style={{ backgroundColor: lightColor }}>
        <div
          className="absolute left-0 top-0 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%`, backgroundColor: primaryColor }}
        >
          <div className="absolute inset-[3px_6px_4px_6px] bg-white/20 rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[720px] mx-auto flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm tracking-wide">
        <span className="font-semibold text-gray-800 font-jakarta">Progresso</span>
        <span className="font-normal text-gray-400 font-jakarta">
          {currentIndex + 1} de {TOTAL_QUESTIONS}
        </span>
      </div>
      <div className="relative h-4 rounded-full w-full overflow-hidden" style={{ backgroundColor: lightColor }}>
        <div
          className="absolute left-0 top-0 h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%`, backgroundColor: primaryColor }}
        >
          <div className="absolute inset-[4px_8px_7px_8px] bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
