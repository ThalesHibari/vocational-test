interface FormNavButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  nextLabel?: string;
}

export function FormNavButtons({
  onPrev,
  onNext,
  canPrev,
  canNext,
  nextLabel = "PRÓXIMO",
}: FormNavButtonsProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <button
        onClick={onPrev}
        disabled={!canPrev}
        className="bg-white border border-gray-200 text-brand-pink text-xs font-extrabold tracking-wider uppercase px-6 py-2.5 rounded-lg shadow-[0px_2px_0px_0px_#e7e4e7] hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-jakarta shrink-0"
      >
        VOLTAR
      </button>

      <button
        onClick={onNext}
        disabled={!canNext}
        className="bg-brand-pink border-b border-brand-dark-pink text-white text-xs font-extrabold tracking-wider uppercase px-6 py-2.5 rounded-lg shadow-[0px_2px_0px_0px_#b12a93] hover:bg-[#e855c8] transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-jakarta"
      >
        {nextLabel}
      </button>
    </div>
  );
}
