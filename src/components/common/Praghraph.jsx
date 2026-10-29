const Praghraph = ({
  line1,
  line2,
  text,
  children,
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}) => {
  const content = children || text

  const variants = {
    default: 'text-white/80',
    muted: 'text-white/60',
    bright: 'text-white',
  }

  const sizes = {
    default: 'text-base',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  }

  const baseClasses = `font-normal text-center ${
    sizes[size] || sizes.default
  } ${variants[variant] || variants.default} ${className}`.trim()

  return (
    <p className={baseClasses} {...props}>
      {content ? (
        content
      ) : (
        <>
          {line1}
          {line2 && (
            <>
              {' '}
              <span>{line2}</span>
            </>
          )}
        </>
      )}
    </p>
  )
}

export default Praghraph
