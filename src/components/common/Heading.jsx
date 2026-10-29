const Heading = ({
  start,
  subheading,
  end,
  children,
  variant = 'default',
  size = 'default',
  as: Component = 'h1',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'text-white',
    gradient: 'text-white',
    white: 'text-white',
    subtle: 'text-white/80',
    fullGradient: 'bg-linear-to-r from-wave-start to-wave-end bg-clip-text text-transparent',
  }

  const sizes = {
    default: 'text-custom-5xl',
    '5xl': 'text-custom-5xl',
    '4xl': 'text-4xl',
    '3xl': 'text-3xl',
    '2xl': 'text-2xl',
    xl: 'text-xl',
  }

  const baseClasses = `font-normal text-center mt-3.25 mb-5 ${
    sizes[size] || sizes.default
  } ${variants[variant] || variants.default} ${className}`.trim()

  if (children) {
    return (
      <Component className={baseClasses} {...props}>
        {children}
      </Component>
    )
  }

  const needsSpace =
    start &&
    subheading &&
    !start.endsWith(' ') &&
    !subheading.startsWith(' ')

  const isFullGradient = variant === 'fullGradient'

  return (
    <Component className={baseClasses} {...props}>
      {start && <span>{start}</span>}
      {needsSpace && ' '}
      {subheading && (
        <span
          className={
            isFullGradient
              ? ''
              : 'bg-linear-to-r from-wave-start to-wave-end bg-clip-text text-transparent'
          }
        >
          {subheading}
        </span>
      )}
      {end && <span className="block">{end}</span>}
    </Component>
  )
}

export default Heading
