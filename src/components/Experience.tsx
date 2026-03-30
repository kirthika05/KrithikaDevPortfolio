import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { resume } from '../data/resume'

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <section id="experience" className="alt">
      <div className="container" ref={ref}>
        <h2 className={`section-label fade-up ${isVisible ? 'visible' : ''}`}>
          <Briefcase size={11} />
          Experience
        </h2>
        <div className="timeline">
          {resume.experience.map((job, i) => {
            const side = i % 2 === 0 ? 'right' : 'left'
            const isPresent = job.end === 'Present'
            return (
              <div
                key={i}
                className={`timeline-item ${side}${isPresent ? ' present' : ''} fade-up ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: isVisible ? `${i * 70 + 80}ms` : '0ms' }}
              >
                <span className="timeline-dot" />
                <div className="exp-header">
                  <span className="exp-role">{job.role}</span>
                  <span className="exp-sep">·</span>
                  <span className="exp-company">{job.company}</span>
                </div>
                <div className="exp-meta">
                  <span className="exp-meta-item">
                    <Calendar size={10} />
                    {job.start} —{' '}
                    {isPresent
                      ? <span className="exp-present">
                          <span className="exp-present-dot" />
                          Present
                        </span>
                      : job.end}
                  </span>
                  <span className="exp-meta-item">
                    <MapPin size={10} />
                    {job.location}
                  </span>
                  {job.type && <span className="exp-type">{job.type}</span>}
                </div>
                <ul className="exp-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
