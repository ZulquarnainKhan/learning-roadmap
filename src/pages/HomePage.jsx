import Header from '../components/Layout/Header.jsx'
import Footer from '../components/Layout/Footer.jsx'
import SetupForm from '../components/planner/SetupForm.jsx'
import RoadmapSummary from '../components/planner/RoadmapSummary.jsx'
import WeekAccordion from '../components/planner/WeekAccordion.jsx'
import ControlsBar from '../components/planner/ControlsBar.jsx'
import { usePlannerStore } from '../store/usePlannerStore.js'

function HomePage() {
  const { roadmap } = usePlannerStore()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:py-8 lg:py-10">
          <section className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
            <div className="w-full lg:w-[42%]">
              <SetupForm />
            </div>
            <div className="w-full lg:flex-1 space-y-4">
              <ControlsBar />
              {roadmap ? (
                <>
                  <RoadmapSummary />
                </>
              ) : (
                <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-4 text-sm text-slate-300 shadow-lg shadow-slate-950/40 backdrop-blur">
                  <p className="font-semibold">
                    Personalized 90‑day roadmap in one click.
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Set your role, timebox, and current level. The planner will generate a detailed weekly and daily plan tailored to you.
                  </p>
                </div>
              )}
            </div>
          </section>

          {roadmap && (
            <section className="space-y-4">
              <WeekAccordion weeks={roadmap.weeks} />
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
