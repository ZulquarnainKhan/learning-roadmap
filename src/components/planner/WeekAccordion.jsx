import { useState } from 'react'
import DayTaskList from './DayTaskList.jsx'

function WeekAccordion({ weeks = [] }) {
  const [openIndex, setOpenIndex] = useState(0)

  if (!weeks.length) {
    return null
  }

  return (
    <section className="space-y-3">
      {weeks.map((week, index) => {
        const isOpen = index === openIndex
        return (
          <div
            key={week.weekNumber ?? index}
            className="overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/70 shadow-md shadow-slate-950/40 backdrop-blur"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between px-4 py-3 text-left sm:px-5"
            >
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-slate-100 sm:text-[15px]">
                  Week {week.weekNumber ?? index + 1}:{' '}
                  <span className="font-normal text-slate-200">
                    {week.theme}
                  </span>
                </p>
                {week.why && (
                  <p className="text-xs text-slate-400 sm:text-[13px]">
                    {week.why}
                  </p>
                )}
              </div>
              <span className="text-xs text-slate-400">
                {isOpen ? 'Hide' : 'Show'}
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-slate-800/60 px-4 py-3 sm:px-5">
                <DayTaskList days={week.days} />
              </div>
            )}
          </div>
        )
      })}
    </section>
  )
}

export default WeekAccordion
