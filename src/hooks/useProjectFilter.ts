import { useState, useMemo } from 'react'
import type { Project, ProjectCategory } from '@/types/project'

export type FilterCategory = 'All' | ProjectCategory

export function useProjectFilter(projects: readonly Project[]) {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All')

  const categories: readonly FilterCategory[] = [
    'All',
    'Football Edits',
    'Short-Form Content',
    'Comedy & Entertainment',
    'AI Video Creation',
    'Cinematic Videos',
    'VFX & Experiments',
  ]

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects
    }
    return projects.filter((project) => project.category === selectedCategory)
  }, [projects, selectedCategory])

  return {
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredProjects,
  }
}

