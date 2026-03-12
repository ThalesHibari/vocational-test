interface FormChoiceItemProps {
  index: number;
  text: string;
  selected: boolean;
  onSelect: () => void;
}

export function FormChoiceItem({ index, text, selected, onSelect }: FormChoiceItemProps) {
  return (
    <button
      onClick={onSelect}
      className={`flex items-center gap-4 px-4 py-3 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left w-full ${
        selected
          ? "border-brand-pink bg-pink-50 shadow-[0px_2px_0px_0px_#f56bd6]"
          : "border-gray-200 bg-white shadow-[0px_2px_0px_0px_#e7e4e7] hover:border-brand-pink/40"
      }`}
    >
      <div className={`flex items-center justify-center shrink-0 size-6 rounded-lg border-2 transition-colors font-bold text-xs font-jakarta ${
        selected
          ? "border-brand-pink bg-brand-pink text-white"
          : "border-gray-200 text-gray-400"
      }`}>
        {index}
      </div>
      <span className={`text-sm sm:text-base font-normal leading-tight font-jakarta transition-colors ${
        selected ? "text-gray-800 font-medium" : "text-gray-600"
      }`}>
        {text}
      </span>
    </button>
  );
}
