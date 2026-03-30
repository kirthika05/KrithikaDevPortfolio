import { Cloud, ClipboardList, Code2, TrendingUp, LucideIcon } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { resume } from '../data/resume'

const categoryIcons: Record<string, LucideIcon> = {
  'Cloud & Tools': Cloud,
  'Program Management': ClipboardList,
  'Technical': Code2,
  'Business': TrendingUp,
}

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="skills">
      <div className="container" ref={ref}>
        <p className={`section-label fade-up ${isVisible ? 'visible' : ''}`}>
          Skills
        </p>
        <div className="skills-grid">
          {Object.entries(resume.skills).map(([group, tags], i) => {
            const Icon = categoryIcons[group]
            return (
              <div
                key={group}
                className={`fade-up ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: isVisible ? `${i * 90 + 80}ms` : '0ms' }}
              >
                <p className="skill-group-label">
                  {Icon && <Icon size={13} />}
                  {group}
                </p>
                <div className="skill-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
