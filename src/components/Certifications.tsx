import { Award, BadgeCheck } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { resume } from '../data/resume'

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="certifications">
      <div className="container" ref={ref}>
        <p className={`section-label fade-up ${isVisible ? 'visible' : ''}`}>
          <Award size={11} />
          Certifications
        </p>
        <ul
          className={`cert-list fade-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: isVisible ? '80ms' : '0ms' }}
        >
          {resume.certifications.map((cert, i) => (
            <li key={i} className="cert-item">
              <BadgeCheck size={16} className="cert-icon" />
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
