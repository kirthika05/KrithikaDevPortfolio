import { GraduationCap } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { resume } from '../data/resume'

export default function Education() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="education" className="alt">
      <div className="container" ref={ref}>
        <h2 className={`section-label fade-up ${isVisible ? 'visible' : ''}`}>
          <GraduationCap size={13} />
          Education
        </h2>
        <div className="edu-list">
          {resume.education.map((edu, i) => (
            <div
              key={i}
              className={`edu-item fade-up ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: isVisible ? `${i * 90 + 80}ms` : '0ms' }}
            >
              <div className="edu-item-header">
                <GraduationCap size={16} className="edu-icon" />
                <div>
                  <p className="edu-degree">{edu.degree}</p>
                  <p className="edu-meta">{edu.institution} · {edu.location} · {edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
