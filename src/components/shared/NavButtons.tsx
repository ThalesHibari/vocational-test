"use client";

interface NavButtonsProps {
  answeredCount: number;
  canGoNext: boolean;
  canGoPrev: boolean;
  isLastQuestion: boolean;
  onNext: () => void;
  onPrev: () => void;
  onFinish: () => void;
}

export function NavButtons({
  answeredCount,
  canGoNext,
  canGoPrev,
  isLastQuestion,
  onNext,
  onPrev,
  onFinish,
}: NavButtonsProps) {
  return (
    <div className="flex flex-col gap-3 sm:gap-0 w-full">
      {/* "X respondidas" — above on mobile, between buttons on desktop */}
      <span className="sm:hidden text-xs text-center text-gray-400 font-jakarta tracking-wide">
        {answeredCount} de 30 respondidas
      </span>

      <div className="flex items-center gap-6 sm:gap-0 sm:justify-between w-full">
        <button
          onClick={onPrev}
          disabled={!canGoPrev}
          className="bg-white border border-gray-200 text-brand-purple text-xs font-extrabold tracking-wider uppercase px-6 py-2.5 rounded-lg shadow-[0px_2px_0px_0px_#e7e4e7] hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-jakarta shrink-0"
        >
          VOLTAR
        </button>

        <span className="hidden sm:block text-sm text-gray-400 font-jakarta tracking-wide">
          {answeredCount} de 30 respondidas
        </span>

        {isLastQuestion ? (
          <button
            onClick={onFinish}
            disabled={!canGoNext}
            className="bg-brand-purple border-b border-brand-dark-purple text-white text-xs font-extrabold tracking-wider uppercase px-6 py-2.5 rounded-lg shadow-[0px_2px_0px_0px_#6443af] hover:bg-[#8255e8] transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-jakarta flex-1 sm:flex-none sm:w-auto"
          >
            VER RESULTADO
          </button>
        ) : (
          <button
            onClick={onNext}
            disabled={!canGoNext}
            className="bg-brand-purple border-b border-brand-dark-purple text-white text-xs font-extrabold tracking-wider uppercase px-6 py-2.5 rounded-lg shadow-[0px_2px_0px_0px_#6443af] hover:bg-[#8255e8] transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-jakarta flex-1 sm:flex-none sm:w-auto"
          >
            PRÓXIMO
          </button>
        )}
      </div>
    </div>
  );
}
