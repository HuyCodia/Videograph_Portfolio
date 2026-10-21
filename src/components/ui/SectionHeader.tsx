interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignmentClass} ${className}`}>
      <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-400">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-2">
        {title}
      </h2>
      {description && (
        <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
