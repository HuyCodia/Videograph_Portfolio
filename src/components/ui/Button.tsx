import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  children: ReactNode
  className?: string
}

type ButtonAsButton = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined
  }

type ButtonAsAnchor = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-amber-500 text-black font-semibold hover:bg-amber-400 shadow-lg shadow-amber-500/20 active:scale-[0.98]',
  secondary:
    'bg-zinc-100 text-zinc-900 font-semibold hover:bg-amber-400 hover:text-black active:scale-[0.98]',
  outline:
    'border border-zinc-700 bg-zinc-900/60 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-500 active:scale-[0.98]',
  ghost:
    'text-zinc-400 hover:text-white hover:bg-zinc-800/60 active:scale-[0.98]',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const commonClasses = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsAnchor
    return (
      <a href={href} className={commonClasses} {...anchorProps}>
        {icon}
        <span>{children}</span>
      </a>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button type={buttonProps.type ?? 'button'} className={commonClasses} {...buttonProps}>
      {icon}
      <span>{children}</span>
    </button>
  )
}

