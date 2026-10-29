import { Link } from 'react-router-dom'

const Button = ({
  text,
  children,
  link,
  to,
  href,
  variant = 'default',
  size = 'default',
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  ...props
}) => {
  const content = children || text
  if (!content) return null

  const targetLink = link || to || href

  const variants = {
    default: 'bg-off-white text-white hover:bg-white/15',
    primary: 'bg-white text-black hover:bg-white/90 font-medium',
    outline: 'border border-white/20 text-white bg-transparent hover:bg-white/10',
    gradient: 'bg-linear-to-r from-wave-start to-wave-end text-black font-medium hover:opacity-90',
    ghost: 'text-white bg-transparent hover:bg-white/10',
    link: 'text-white underline-offset-4 hover:underline p-0 mt-0 rounded-none bg-transparent',
  }

  const sizes = {
    default: 'px-31.5 py-4 text-base',
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-31.5 py-4 text-base',
    lg: 'px-36 py-5 text-lg',
  }

  const baseClasses = `cursor-pointer mt-7.5 rounded-full font-normal inline-flex items-center justify-center transition-all duration-200 ${
    sizes[size] || sizes.default
  } ${variants[variant] || variants.default} ${
    disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''
  } ${className}`.trim()

  if (targetLink) {
    const isExternal =
      typeof targetLink === 'string' &&
      (targetLink.startsWith('http://') ||
        targetLink.startsWith('https://') ||
        targetLink.startsWith('//') ||
        targetLink.startsWith('mailto:') ||
        targetLink.startsWith('tel:'))

    if (isExternal) {
      return (
        <a
          href={targetLink}
          className={baseClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {content}
        </a>
      )
    }

    return (
      <Link to={targetLink} className={baseClasses} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button
