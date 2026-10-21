import { SKILLS_DATA } from '@/data/skillsData'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SkillCard } from '@/components/ui/SkillCard'

/**
 * Skills section displaying post-production capabilities.
 * Cards use a physics-inspired CSS sticky deck stacking animation:
 * Each card glides in from the bottom, pins in the vertical center, and is
 * subsequently covered by the next incoming card. All stacked cards stay
 * firmly locked in place together before smoothly exiting as a cohesive deck.
 *
 * Cards are driven dynamically by SKILLS_DATA: adding or removing cards
 * in `src/data/skillsData.ts` automatically scales the animation seamlessly.
 */
export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 pt-20 sm:pt-24 pb-28 border-t border-zinc-900">
      {/* Section Header */}
      <div className="mb-8 sm:mb-10">
        <SectionHeader
          eyebrow="Expertise"
          title="Skills & Craft"
          description="Specialized post-production capabilities engineered for viral viewer retention, cinematic mood, and visual impact."
        />
      </div>

      {/* Sticky Stacking Cards Container */}
      <div className="relative">
        {SKILLS_DATA.map((skill, index) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            index={index}
            totalCards={SKILLS_DATA.length}
          />
        ))}

        {/* Scroll buffer extending the container's content box so the entire stack stays locked together before exit */}
        <div className="h-[15vh] sm:h-[18vh]" aria-hidden="true" />
      </div>
    </section>
  )
}
