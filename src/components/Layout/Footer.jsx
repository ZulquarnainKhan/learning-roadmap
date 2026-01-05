function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-slate-500 sm:flex-row">
        <span>© {new Date().getFullYear()} Learning Roadmap</span>
        <span className="text-slate-500">
          Built with React, Vite, Tailwind &amp; Gemini
        </span>
      </div>
    </footer>
  )
}

export default Footer
