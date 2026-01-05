function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
        <div>
          <h1 className="text-base font-semibold sm:text-lg">
            Personalized Learning Roadmap
          </h1>
          <p className="mt-0.5 text-xs text-slate-400 sm:text-[13px]">
            AI‑generated 90‑day study plan, tailored to your role.
          </p>
        </div>
        <span className="hidden rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 shadow-sm sm:inline-flex">
          90 days · 1.5 hrs/day
        </span>
      </div>
    </header>
  )
}

export default Header
