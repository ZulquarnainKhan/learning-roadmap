function DayTaskList({ days = [] }) {
  if (!days?.length) {
    return (
      <p className="text-xs text-slate-400">
        No day-level breakdown provided for this week.
      </p>
    )
  }

  return (
    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {days.map((day, index) => (
        <li
          key={day.dayNumber ?? index}
          className="flex flex-col rounded-xl border border-slate-800/60 bg-slate-950/70 px-3 py-2 text-xs text-slate-200 shadow-sm shadow-slate-950/40"
        >
          <p className="mb-1 text-[12px] font-semibold text-slate-100">
            Day {day.dayNumber ?? index + 1}:{' '}
            <span className="font-normal">{day.focus}</span>
          </p>
          {day.tasks && (
            <ul className="mt-1 list-disc space-y-1 pl-4 text-[11px] text-slate-300">
              {day.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

export default DayTaskList
