function Select({ label, id, children, className = '', ...props }) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label && (
        <span className="text-slate-200">
          {label}
        </span>
      )}
      <select
        id={id}
        className={`rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-400 ${className}`}
        {...props}
      >
        {children}
      </select>
    </label>
  )
}

export default Select
