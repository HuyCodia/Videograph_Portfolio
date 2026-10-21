import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  icon?: ReactNode
  className?: string
}

export function Badge({ children, icon, className = '' }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-400 ${className}`}
    >
      {icon}
      <span>{children}</span>
    </div>
  )
}

