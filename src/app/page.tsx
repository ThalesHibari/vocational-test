import Link from "next/link";

// ─── Logo ─────────────────────────────────────────────────────────────────────

function BedLogo({ width = 106, primary = "#9267f4", secondary = "#6443af" }: { width?: number; primary?: string; secondary?: string }) {
  const height = Math.round(width * (80 / 374));
  return (
    <svg width={width} height={height} viewBox="0 0 374 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_lp)">
        <path d="M207.041 68.0786V78.4825C201.5 78.4825 196.134 75.5349 191.455 70.6878C186.089 75.8843 179.502 78.6572 172.401 78.6572C162.007 78.6572 154.046 73.6354 151.101 64.9672C148.156 56.4738 150.752 46.7686 157.503 41.3974C160.099 39.3231 165.814 36.0262 174.474 37.762C173.95 35.1638 173.612 32.5655 173.438 30.131C172.75 24.0611 173.612 18.8646 175.521 14.7052C177.942 9.50874 182.097 6.21179 187.813 5.34935C193.179 4.31223 198.032 6.38646 201.315 10.8952C205.121 15.7533 206.856 23.7227 206.507 33.2533C205.983 42.2707 203.736 51.452 199.93 59.083C199.232 60.2948 198.719 61.3319 198.021 62.5546C201.315 66.0262 204.423 68.1004 207.03 68.1004L207.041 68.0786ZM185.053 62.5327C182.457 58.7227 180.374 54.3886 178.476 50.0546C175.357 48.4935 172.412 47.631 169.817 47.631C167.57 47.631 165.661 48.3297 164.102 49.5415C160.808 52.1397 159.423 57.3362 160.982 61.5065C162.367 65.8406 166.523 68.2642 172.412 68.2642C177.604 68.2642 181.759 65.8406 185.053 62.5437V62.5327ZM193.015 17.1179C192.153 15.7314 191.281 15.3821 190.419 15.3821C190.07 15.3821 189.896 15.3821 189.558 15.5568C183.843 16.4192 183.155 23.5262 183.668 29.2467C184.366 36.5284 187.136 45.3712 191.292 52.8166C194.062 46.9214 195.796 39.6397 196.145 32.7074C196.32 25.7751 195.284 20.0546 193.026 17.107L193.015 17.1179Z" fill={primary} />
        <path d="M259.687 52.3144C257.953 56.6485 255.881 60.6332 253.46 64.2686C255.019 66.0044 256.917 67.7402 259.349 69.1266L253.983 78.1441C251.213 76.4083 248.792 74.5087 246.708 72.2489C246.185 72.7729 245.672 73.1114 245.323 73.4607C240.993 77.0961 236.325 78.8319 231.984 78.8319C221.939 78.8319 214.152 70.5131 212.941 60.8079C212.08 55.4367 212.941 49.8908 213.64 44.8581C214.327 40.1747 215.025 34.6288 213.64 32.893C213.116 32.0306 211.731 31.6812 210.695 31.6812L212.08 21.2773C216.41 21.976 219.704 23.7009 221.95 26.4738C225.931 31.845 224.895 39.1266 223.859 46.4083C222.474 56.8122 221.95 63.5699 228.189 67.2052C229.225 67.7293 230.436 68.417 231.995 68.417C233.904 68.417 235.976 67.7293 238.747 65.4694C239.445 64.7707 240.132 64.2576 240.655 63.559C240.306 62.6965 239.794 61.6485 239.445 60.786C237.372 54.7162 236.674 47.7838 237.536 40.6769C239.096 29.0611 244.462 21.441 251.038 21.441C256.23 21.441 260.222 24.3886 261.945 29.4105C264.028 34.9563 263.156 43.2751 259.698 52.2926L259.687 52.3144ZM252.238 32.893C251.889 32.2052 251.715 32.0306 251.54 32.0306C250.679 32.893 248.77 36.19 247.908 42.0852C247.559 44.5087 247.385 48.4934 248.083 52.8275C251.889 45.0328 253.449 36.7031 252.238 32.893Z" fill={primary} />
        <path d="M146.269 57.6856C142.975 71.5502 131.72 78.4825 117.868 78.4825C105.925 78.4825 98.3016 71.2009 95.8804 59.9345C94.8442 59.9345 93.8081 59.9345 92.5865 59.7598L92.7611 49.3559C93.7972 49.5306 94.6697 49.5306 95.7059 49.5306C97.44 33.7555 109.557 20.9279 125.841 20.9279C132.767 20.9279 140.216 24.2249 142.114 31.4956C144.186 38.952 140.205 47.4454 132.069 52.6419C126.179 56.2773 117.694 58.5371 106.438 59.3996C107.649 63.5589 110.593 68.0677 117.868 68.0677C127.739 68.0677 133.977 63.7336 136.224 55.0655L146.269 57.6638V57.6856ZM106.263 49.0175C117.17 48.155 123.234 45.8952 126.354 43.821C131.032 40.8734 132.756 36.8886 132.069 34.4651C131.371 31.6921 127.39 31.3428 125.83 31.3428C115.436 31.3428 107.998 39.3122 106.263 49.0175Z" fill={secondary} />
        <path d="M66.007 29.6397C72.7583 31.048 78.0698 33.5371 81.9308 37.107C85.7917 40.6769 88.0167 45.131 88.6056 50.4804C88.9001 53.0022 88.6274 55.8843 87.7658 59.1157C86.9042 62.3472 85.4645 65.3603 83.425 68.1441C81.3854 70.9279 78.7351 73.286 75.4631 75.2183C72.202 77.1507 68.2647 78.1114 63.6621 78.1114C60.7719 78.1114 57.7943 77.6856 54.7623 76.8341C51.7193 75.9825 48.6764 74.7707 45.6334 73.2096L50.5305 64.0721C52.6791 65.262 54.8714 66.19 57.0963 66.8559C59.3213 67.5218 61.4699 67.8603 63.5531 67.8603C66.6724 67.8603 69.2136 67.2271 71.1768 65.9607C73.14 64.6943 74.6778 63.1769 75.7903 61.3974C76.9028 59.6179 77.6444 57.8166 78.0153 55.9935C78.3861 54.1703 78.4952 52.7074 78.3534 51.5939C78.0589 48.9956 77.0882 46.8777 75.4631 45.2402C73.8271 43.6026 71.8421 42.3035 69.5081 41.3428C67.1741 40.3821 64.6655 39.6943 61.9934 39.2795C59.3213 38.8755 56.8782 38.6354 54.6423 38.559C52.4174 38.4825 49.778 38.5262 46.735 38.6681L45.6225 28.417C48.142 28.1223 50.356 27.5655 52.2429 26.7467C54.1297 25.9279 55.6894 25 56.9218 23.9629C58.1434 22.9258 59.0704 21.845 59.703 20.7314C60.3356 19.6179 60.6083 18.5808 60.5428 17.6092C60.4665 16.714 60.2047 15.8297 59.7684 14.9345C59.3322 14.0393 58.5469 13.2424 57.4344 12.5437C56.3219 11.8341 54.8168 11.2773 52.93 10.8734C51.0431 10.4694 48.6437 10.262 45.7534 10.262C44.7936 10.262 43.692 10.3603 42.4705 10.5459C41.249 10.7314 40.0383 11.0044 38.8495 11.3755C37.6607 11.7467 36.5264 12.2162 35.4575 12.7729C34.3778 13.3297 33.4725 13.9847 32.7309 14.7271C34.6613 17.5546 36.3628 20.7642 37.8461 24.3668C39.3294 27.9694 40.5946 31.6812 41.6307 35.5131C42.6668 39.345 43.463 43.1878 44.0192 47.0415C44.5755 50.9061 44.8591 54.5087 44.8591 57.8493C44.8591 59.2576 44.7064 61.2336 44.4119 63.7555C44.1174 66.2773 43.4848 68.7336 42.525 71.1135C41.5543 73.4934 40.191 75.5677 38.4023 77.3472C36.6245 79.1266 34.2469 80.0218 31.2803 80.0218C30.3859 80.0218 28.9572 79.5742 26.994 78.679C25.0308 77.7838 23.0021 76.1026 20.9299 73.6135C18.8467 71.1245 17.0362 67.5983 15.4765 63.024C13.9169 58.4607 13.1425 52.5 13.1425 45.1419C13.1425 39.7926 13.4915 35.2074 14.2005 31.3865C14.9094 27.5655 15.662 24.4432 16.4799 22.0306C17.2979 19.6179 18.0723 17.8493 18.814 16.7358C19.5556 15.6223 19.9265 15.0328 19.9265 14.9563C18.5195 13.4716 17.0689 12.3253 15.5856 11.5065C14.1023 10.6878 12.5754 10.2838 11.0266 10.2838H0V0H11.0157C16.4363 0 21.4752 2.22707 26.1541 6.68122C28.5318 4.45415 31.5529 2.78384 35.2285 1.67031C38.904 0.556769 42.4051 0 45.7425 0C50.6396 0 54.6641 0.502183 57.8162 1.50655C60.9682 2.51092 63.4985 3.81004 65.3854 5.40393C67.2722 6.99782 68.6137 8.82096 69.3881 10.8624C70.1625 12.9039 70.6315 14.9345 70.7842 16.9323C70.9369 19.3122 70.5769 21.5611 69.7262 23.6681C68.8755 25.786 67.6321 27.7729 65.9961 29.6288L66.007 29.6397ZM34.6177 57.8275C34.6177 52.3362 33.8979 46.6485 32.4473 40.7751C30.9967 34.9017 29.088 29.5961 26.7104 24.8362C25.6743 27.7293 24.8563 30.9061 24.2564 34.3668C23.6565 37.8166 23.362 41.4083 23.362 45.1201C23.362 48.8319 23.6238 52.3035 24.1364 55.3166C24.649 58.3297 25.3034 60.9061 26.0887 63.0568C26.8631 65.2074 27.7247 66.8668 28.6518 68.0131C29.5788 69.1703 30.4514 69.738 31.2694 69.738C31.9347 69.738 32.4909 69.3122 32.9381 68.4607C33.3853 67.6092 33.7125 66.5721 33.9415 65.3384C34.1596 64.1157 34.3341 62.8166 34.4432 61.441C34.5523 60.0655 34.6068 58.8646 34.6068 57.8166L34.6177 57.8275Z" fill={secondary} />
        <path d="M92.7611 49.5633L88.442 49.0721L87.0351 59.4323C88.8892 59.607 90.7434 59.7817 92.5866 59.9563" fill={primary} />
        <path d="M374 78.4825H363.704C363.704 75.9061 363.366 72.6419 362.679 69.3777C362.166 69.8908 361.479 70.4039 360.967 70.928C354.957 75.7314 347.584 78.3188 339.35 78.3188C329.741 78.3188 322.532 72.3035 321.332 62.6856C320.994 57.7074 322.706 52.7293 325.967 48.7773C329.741 44.6507 335.238 41.7358 341.749 40.5349C349.122 39.3341 355.819 40.8734 361.141 45.5131C361.654 45.8515 362.003 46.2009 362.515 46.5393C362.69 41.7358 361.316 36.583 357.029 34.1703C353.943 32.4563 350.856 31.5939 347.759 31.5939C337.288 31.5939 328.367 39.6616 328.192 39.8362L321.332 32.107C327.341 26.0917 339.175 21.4629 347.759 21.4629C352.732 21.4629 357.705 22.6638 362.166 25.2402C371.088 30.393 374.862 41.8996 371.775 53.9192C371.262 55.4694 370.75 57.0087 370.063 58.3843C372.975 65.7642 374.011 73.4935 374.011 78.4825H374ZM358.556 58.2096C355.982 53.5699 351.859 50.4804 346.548 50.4804C345.686 50.4804 344.661 50.4804 343.636 50.655C334.889 52.2052 331.279 57.3581 331.628 61.8231C331.966 64.738 334.027 68.0022 339.35 68.0022C348.62 68.0022 354.968 63.7118 358.567 58.2096H358.556Z" fill={primary} />
        <path d="M294.861 63.8974C299.573 67.762 304.732 68.7445 307.382 68.9847L306.499 78.7773C299.977 78.1769 293.629 75.5895 288.644 71.4956C285.656 69.0502 283.115 66.048 281.163 62.6965C280.192 62.893 279.243 63.0677 278.338 63.2096C277.727 68.4061 277.378 73.6354 277.302 78.8646L267.486 78.7227C267.616 70.4476 268.369 62.1834 269.743 54.0284C269.743 54.0066 269.743 53.9847 269.743 53.9738C270.409 49.9891 271.216 46.0262 272.175 42.107C275.382 29.0175 280.203 16.3428 286.496 4.4214L295.178 9.01747C289.255 20.2293 284.718 32.1397 281.708 44.4432C281.021 47.2489 280.41 50.0764 279.886 52.9258C284.74 51.7795 290.422 49.476 295.657 44.9782C303.161 38.5262 306.204 30.5349 307.36 26.3428L316.827 28.941C315.06 35.3821 311.069 44.6834 302.049 52.4345C298.373 55.5895 294.534 57.893 290.804 59.5633C291.84 61.0153 293.171 62.5109 294.85 63.8974H294.861Z" fill={primary} />
      </g>
      <defs>
        <clipPath id="clip0_lp">
          <rect width="374" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

// ─── Arrow icon ───────────────────────────────────────────────────────────────

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── RIASEC result preview card (hero visual) ─────────────────────────────────

const RIASEC_BARS = [
  { letter: "I", name: "Investigativo", color: "#9267f4", pct: 88 },
  { letter: "A", name: "Artístico",     color: "#fd7867", pct: 73 },
  { letter: "S", name: "Social",        color: "#02bc59", pct: 61 },
  { letter: "R", name: "Realista",      color: "#6443af", pct: 46 },
  { letter: "C", name: "Convencional",  color: "#f56bd6", pct: 34 },
  { letter: "E", name: "Empreendedor",  color: "#ce4938", pct: 22 },
];

function ResultPreviewCard() {
  return (
    <div className="relative w-full max-w-[400px]">
      {/* depth layers */}
      <div className="absolute inset-x-6 top-5 h-full bg-white rounded-2xl border-2 border-gray-100 shadow-sm" />
      <div className="absolute inset-x-3 top-2.5 h-full bg-white rounded-2xl border-2 border-gray-100 shadow-sm" />

      {/* main card */}
      <div className="relative bg-white rounded-3xl border-2 border-gray-100 shadow-lg p-7 flex flex-col gap-5">
        {/* header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-semibold text-[#bababa] font-jakarta uppercase tracking-wider">Seu Perfil Vocacional</span>
            <span className="text-lg font-bold text-gray-800 font-jakarta">Perfil Investigativo</span>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#fbf3fe] border-2 border-[#dabff9]">
            <span className="text-base font-bold text-[#9267f4] font-jakarta">I</span>
          </div>
        </div>

        {/* divider */}
        <div className="h-px bg-gray-100" />

        {/* bars */}
        <div className="flex flex-col gap-3">
          {RIASEC_BARS.map((r) => (
            <div key={r.letter} className="flex items-center gap-3">
              <span className="w-5 text-xs font-bold text-gray-400 font-jakarta shrink-0">{r.letter}</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${r.pct}%`, backgroundColor: r.color }}
                />
              </div>
              <span className="w-8 text-xs font-semibold text-gray-400 font-jakarta text-right shrink-0">{r.pct}%</span>
            </div>
          ))}
        </div>

        {/* footer tag */}
        <div className="flex items-center gap-2 pt-1">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fbf3fe] border border-[#dabff9]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#9267f4]" />
            <span className="text-xs font-semibold text-[#6443af] font-jakarta">Ciências & Tecnologia</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fffaf0] border border-[#f8d7d3]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#fd7867]" />
            <span className="text-xs font-semibold text-[#ce4938] font-jakarta">Artes & Design</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Steps ────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: "01",
    title: "Preencha seu perfil",
    desc: "Conte um pouco sobre você — nome, idade e escolaridade para personalizarmos sua experiência.",
    color: "#9267f4",
    bg: "#fbf3fe",
    border: "#dabff9",
  },
  {
    num: "02",
    title: "Responda as questões",
    desc: "60 questões em 4 formatos diferentes, projetadas para mapear seu perfil de forma precisa e profunda.",
    color: "#fd7867",
    bg: "#fffaf0",
    border: "#f8d7d3",
  },
  {
    num: "03",
    title: "Descubra sua vocação",
    desc: "Receba seu relatório personalizado com seu perfil RIASEC e as áreas de carreira ideais para você.",
    color: "#02bc59",
    bg: "#faffed",
    border: "#d9eba4",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-jakarta">

      {/* ══ NAVBAR ══════════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-5 sm:px-16 lg:px-24 py-4 flex items-center justify-between">
        <BedLogo width={96} />
        <Link
          href="/formulario"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-purple text-white text-sm font-bold font-jakarta shadow-[0_2px_0_0_#6443af] hover:brightness-110 transition-all active:translate-y-px active:shadow-none"
        >
          Fazer o Teste
          <ArrowRight size={14} />
        </Link>
      </nav>

      {/* ══ HERO ════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-[68px]">

        {/* Background decorations */}
        <div className="pointer-events-none absolute top-[-120px] right-[-100px] w-[600px] h-[600px] opacity-[0.07]">
          <svg viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="300" r="260" stroke="#9267f4" strokeWidth="100" />
          </svg>
        </div>
        <div className="pointer-events-none absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] opacity-[0.06]">
          <svg viewBox="0 0 400 400" fill="none">
            <path d="M200 0C200 110.457 110.457 200 0 200" stroke="#9267f4" strokeWidth="80" strokeLinecap="round" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-16 lg:px-24 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: copy */}
          <div className="flex flex-col gap-7">

            {/* badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-brand-bg-purple border border-brand-light-purple">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
              <span className="text-xs font-semibold text-brand-dark-purple font-jakarta">
                Gratuito · Baseado na Teoria RIASEC de Holland
              </span>
            </div>

            {/* headline */}
            <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] font-bold text-gray-800 leading-[1.08] tracking-tight font-jakarta">
              Descubra qual<br />
              <span className="text-brand-purple">carreira foi feita</span><br />
              para você
            </h1>

            {/* description */}
            <p className="text-base sm:text-lg text-gray-400 font-jakarta leading-relaxed max-w-[480px]">
              Responda 60 questões em cerca de 10 minutos e receba um relatório completo com seu perfil vocacional, gerado a partir da metodologia mais respeitada do mundo.
            </p>

            {/* stats */}
            <div className="flex items-center gap-6 sm:gap-8">
              {[
                { value: "60", label: "Questões" },
                { value: "~10", label: "Minutos" },
                { value: "100%", label: "Gratuito" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-6 sm:gap-8">
                  {i > 0 && <div className="w-px h-8 bg-gray-200" />}
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gray-800 font-jakarta leading-tight">{s.value}</span>
                    <span className="text-xs text-gray-400 font-jakarta">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link
                href="/formulario"
                className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-brand-purple text-white text-base font-bold font-jakarta shadow-[0_4px_0_0_#6443af] hover:brightness-110 transition-all active:translate-y-[3px] active:shadow-none"
              >
                Iniciar Teste Gratuitamente
                <ArrowRight size={18} />
              </Link>
            </div>

          </div>

          {/* Right: result preview */}
          <div className="hidden lg:flex items-center justify-center">
            <ResultPreviewCard />
          </div>

        </div>
      </section>

      {/* ══ HOW IT WORKS ════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-20 px-5 sm:px-16 lg:px-24">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">

          <div className="flex flex-col gap-2 text-center">
            <span className="text-xs font-bold text-brand-purple uppercase tracking-[0.15em] font-jakarta">
              Como funciona
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 font-jakarta">
              Simples, rápido e preciso
            </h2>
            <p className="text-sm text-gray-400 font-jakarta mt-1 max-w-[480px] mx-auto">
              Em três passos você descobre quais carreiras são ideais para o seu perfil.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="flex flex-col gap-5 bg-white rounded-2xl border-2 border-gray-100 p-7 shadow-sm"
              >
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-xl border-2 font-bold text-sm font-jakarta"
                  style={{ backgroundColor: step.bg, borderColor: step.border, color: step.color }}
                >
                  {step.num}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-gray-800 font-jakarta">{step.title}</h3>
                  <p className="text-sm text-gray-400 font-jakarta leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ CTA STRIP ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-purple py-20 px-5 sm:px-16 lg:px-24">
        {/* decorative circles */}
        <div className="pointer-events-none absolute right-[-80px] top-[-80px] w-[400px] h-[400px] opacity-10">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="160" stroke="white" strokeWidth="80" />
          </svg>
        </div>
        <div className="pointer-events-none absolute left-[-60px] bottom-[-60px] w-[300px] h-[300px] opacity-10">
          <svg viewBox="0 0 300 300" fill="none">
            <circle cx="150" cy="150" r="110" stroke="white" strokeWidth="60" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[680px] mx-auto flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-jakarta leading-tight">
            Pronto para descobrir<br />sua vocação?
          </h2>
          <p className="text-base text-white/70 font-jakarta max-w-[440px]">
            Junte-se a milhares de estudantes que já encontraram seu caminho profissional com o Teste Vocacional Beduka.
          </p>
          <Link
            href="/formulario"
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-brand-purple text-base font-bold font-jakarta shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:brightness-95 transition-all active:translate-y-[3px] active:shadow-none"
          >
            Começar Agora
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════════════════════════ */}
      <footer className="bg-white border-t border-gray-100 py-7 px-5 sm:px-16 lg:px-24 flex flex-col sm:flex-row items-center justify-between gap-3">
        <BedLogo width={80} />
        <span className="text-xs text-gray-400 font-jakarta">
          © 2025 Beduka. Todos os direitos reservados.
        </span>
      </footer>

    </div>
  );
}
