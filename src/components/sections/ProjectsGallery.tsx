import type { Project } from '@/types/project'
import { PROJECTS_DATA } from '@/data/projectsData'
import { useProjectFilter } from '@/hooks/useProjectFilter'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectCard } from '@/components/sections/ProjectCard'

interface ProjectsGalleryProps {
  onSelectProject: (project: Project) => void
}

export function ProjectsGallery({ onSelectProject }: ProjectsGalleryProps) {
  const { selectedCategory, setSelectedCategory, categories, filteredProjects } =
    useProjectFilter(PROJECTS_DATA)

  // Vertical categories have max 4 in a row (lg:grid-cols-4)
  // Horizontal categories (AI Video Creation, Cinematic Videos, VFX & Experiments) have max 3 in a row (lg:grid-cols-3)
  // The 'All' category uses a 12-column grid so vertical cards take 3/12 (max 4 per row)
  // and horizontal cards take 4/12 (max 3 per row, consistent with Cinematic Videos).
  const isVerticalCategory =
    selectedCategory === 'Football Edits' ||
    selectedCategory === 'Short-Form Content'

  const isAllCategory = selectedCategory === 'All'

  const gridContainerClass = isAllCategory
    ? 'grid-cols-1 sm:grid-cols-6 lg:grid-cols-12'
    : isVerticalCategory
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-24 border-t border-zinc-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected Projects"
          description="A showcase of my football edits, AI-generated videos, and creative video projects — from dynamic social media clips to cinematic visuals and visual experiments."
        />

        {/* Category Filter Pills */}
        <div
          className="flex flex-wrap gap-2.5"
          role="tablist"
          aria-label="Projekte nach Kategorie filtern"
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className={`grid gap-6 items-start ${gridContainerClass}`}>
        {filteredProjects.map((project) => {
          const isVertical =
            project.category === 'Football Edits' ||
            project.category === 'Short-Form Content'

          const colSpanClass = isAllCategory
            ? isVertical
              ? 'sm:col-span-3 lg:col-span-3'
              : 'sm:col-span-3 lg:col-span-4'
            : ''

          return (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              className={colSpanClass}
            />
          )
        })}
      </div>
    </section>
  )
}
