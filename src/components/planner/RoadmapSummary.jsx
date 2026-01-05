import { usePlannerStore } from '../../store/usePlannerStore.js'

function RoadmapSummary() {
  const { settings, roadmap } = usePlannerStore()
  const totalHours = settings.totalDays * settings.dailyHours

  if (!roadmap) return null

  return (
    <section className="rounded-2xl border border-slate-800/60 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/40 backdrop-blur">
      <p className="text-sm text-slate-200 sm:text-[15px]">
        You have{' '}
        <span className="font-semibold">
          {settings.totalDays} days
        </span>{' '}
        and{' '}
        <span className="font-semibold">
          {settings.dailyHours} hrs/day
        </span>
        — about{' '}
        <span className="font-semibold">
          {totalHours.toFixed(1)} focused hours
        </span>{' '}
        to reach your goal.
      </p>
      {roadmap.summary && (
        <p className="mt-2 text-xs text-slate-400 sm:text-[13px]">
          {roadmap.summary}
        </p>
      )}
    </section>
  )
}

export default RoadmapSummary
