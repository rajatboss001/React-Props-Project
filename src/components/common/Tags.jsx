const Tags = ({
  text,
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const content = children || text
  if (!content) return null

  const variants = {
    default: 'bg-off-white text-white',
    outline: 'border border-white/20 text-white bg-transparent',
    gradient: 'bg-linear-to-r from-wave-start to-wave-end text-black font-medium',
    subtle: 'bg-white/10 text-white/90',
  }

  const baseClasses = `font-normal rounded-full text-base py-1.5 px-4 w-fit mx-auto inline-block ${
    variants[variant] || variants.default
  } ${className}`.trim()

  return (
    <span className={baseClasses} {...props}>
      {content}
    </span>
  )
}

export default Tags
