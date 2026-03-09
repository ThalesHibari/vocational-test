export function BackgroundDecorations() {
  return (
    <>
      {/* Top right */}
      <div className="pointer-events-none fixed top-[-139px] right-[-80px] w-[438px] h-[461px] opacity-60">
        <svg viewBox="0 0 438 461" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M219 0C219 120.871 120.871 219 0 219" stroke="#6443af" strokeWidth="80" strokeLinecap="round" fill="none"/>
          <path d="M219 242C338.87 242 438 341.129 438 461" stroke="#9267f4" strokeWidth="60" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
      {/* Bottom right */}
      <div className="pointer-events-none fixed bottom-[-60px] right-[-40px] w-[560px] h-[560px] opacity-50">
        <svg viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="280" cy="280" r="240" stroke="#6443af" strokeWidth="80" fill="none"/>
          <circle cx="280" cy="280" r="160" stroke="#9267f4" strokeWidth="40" fill="none"/>
        </svg>
      </div>
      {/* Bottom left */}
      <div className="pointer-events-none fixed bottom-[-60px] left-[-109px] w-[485px] h-[542px] opacity-60">
        <svg viewBox="0 0 485 542" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 271C0 150.129 98.129 52 219 52" stroke="#6443af" strokeWidth="80" strokeLinecap="round" fill="none"/>
          <path d="M0 271C0 391.871 98.129 490 219 490" stroke="#9267f4" strokeWidth="60" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
      {/* Top left */}
      <div className="pointer-events-none fixed top-[209px] left-[-55px] w-[382px] h-[393px] opacity-40">
        <svg viewBox="0 0 382 393" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M191 0C191 105.693 105.693 191 0 191" stroke="#dabff9" strokeWidth="80" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
    </>
  );
}
