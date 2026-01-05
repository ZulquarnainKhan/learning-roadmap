import Button from '../common/Button.jsx'
import Loader from '../common/Loader.jsx'
import { useRoadmapGenerator } from '../../hooks/useRoadmapGenerator.js'
import { usePlannerStore } from '../../store/usePlannerStore.js'

function ControlsBar() {
  const { loading, generate, regenerate } = useRoadmapGenerator()
  const { roadmap, settings } = usePlannerStore()

  const hasDefaults =
    settings.totalDays === 90 && settings.dailyHours === 1.5

  return (
    <div className="sticky top-[64px] z-10 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-800/50 bg-slate-950/80 px-3 py-3 shadow-lg shadow-slate-950/40 backdrop-blur sm:static sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none">
      <Button
        onClick={roadmap ? regenerate : generate}
        disabled={loading}
        className="min-w-[150px]"
      >
        {loading
          ? 'Generating...'
          : roadmap
          ? 'Update plan'
          : 'Generate plan'}
      </Button>
      {loading && <Loader label="Creating your roadmap..." />}
      {!hasDefaults && (
        <p className="text-[11px] text-slate-400">
          Tip: Try <span className="font-semibold">90 days · 1.5 hrs/day</span> for the full track.
        </p>
      )}
    </div>
  )
}

export default ControlsBar
