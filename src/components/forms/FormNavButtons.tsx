interface FormNavButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  onExit: () => void;
  canPrev: boolean;
  canNext: boolean;
  nextLabel?: string;
}

export function FormNavButtons({
  onPrev,
  onNext,
  onExit,
  canPrev,
  canNext,
  nextLabel = "PRÓXIMO",
}: FormNavButtonsProps) {
  return (
    <div className="flex items-center justify-between w-full">
      {canPrev ? (
        <button
          onClick={onPrev}
          className="bg-white border border-gray-200 text-brand-purple text-xs font-extrabold tracking-wider uppercase px-6 py-2.5 rounded-lg shadow-[0px_2px_0px_0px_#e7e4e7] hover:bg-gray-50 transition-colors font-jakarta shrink-0"
        >
          VOLTAR
        </button>
      ) : (
        <button
          onClick={onExit}
          className="bg-white border border-gray-200 text-gray-400 text-xs font-extrabold tracking-wider uppercase px-6 py-2.5 rounded-lg shadow-[0px_2px_0px_0px_#e7e4e7] hover:bg-gray-50 transition-colors font-jakarta shrink-0"
        >
          SAIR
        </button>
      )}

      <button
        onClick={onNext}
        disabled={!canNext}
        className="bg-brand-purple border-b border-brand-dark-purple text-white text-xs font-extrabold tracking-wider uppercase px-6 py-2.5 rounded-lg shadow-[0px_2px_0px_0px_#6443af] hover:bg-[#8255e8] transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-jakarta"
      >
        {nextLabel}
      </button>
    </div>
  );
}
