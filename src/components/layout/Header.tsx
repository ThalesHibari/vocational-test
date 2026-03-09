interface HeaderProps {
  userName?: string;
}

export function Header({ userName = "Thales Souza" }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between px-[120px] py-4 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-extrabold text-brand-purple tracking-tight font-jakarta">
          Beduka
        </span>
      </div>
      <span className="text-sm font-semibold text-brand-dark-purple tracking-wide font-jakarta">
        Seja bem vindo {userName}
      </span>
    </header>
  );
}
