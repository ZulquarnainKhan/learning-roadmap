function Button({ children, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60'

  const variants = {
    primary: 'bg-indigo-500 hover:bg-indigo-400 text-white',
    outline:
      'border border-slate-600 bg-transparent text-slate-100 hover:bg-slate-800',
    ghost: 'text-slate-200 hover:bg-slate-800',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
