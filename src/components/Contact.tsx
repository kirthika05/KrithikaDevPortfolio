import { Mail, MapPin, MessageSquare } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { resume } from '../data/resume'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="alt">
      <div className="container" ref={ref}>
        <p className={`section-label fade-up ${isVisible ? 'visible' : ''}`}>
          <MessageSquare size={11} />
          Contact
        </p>
        <div
          className={`contact-body fade-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: isVisible ? '80ms' : '0ms' }}
        >
          <p className="contact-row">
            <Mail size={15} className="contact-icon" />
            <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
          </p>
          <p className="contact-row">
            <MapPin size={15} className="contact-icon" />
            {resume.contact.location}
          </p>
        </div>
      </div>
    </section>
  )
}
