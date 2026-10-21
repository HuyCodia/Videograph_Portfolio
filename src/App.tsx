import { useState } from 'react'
import type { Project } from '@/types/project'
import { PROJECTS_DATA } from '@/data/projectsData'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsGallery } from '@/components/sections/ProjectsGallery'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { VideoPreviewModal } from '@/components/sections/VideoPreviewModal'

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const handleOpenShowreel = () => {
    const featuredProject = PROJECTS_DATA[0] ?? null
    setActiveProject(featuredProject)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection onPlayShowreel={handleOpenShowreel} />
        <ProjectsGallery onSelectProject={setActiveProject} />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      <VideoPreviewModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  )
}
