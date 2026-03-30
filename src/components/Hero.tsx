import { Mail, MapPin } from 'lucide-react'
import { resume } from '../data/resume'

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <h1 className="hero-name">{resume.name}</h1>
        <p className="hero-title">{resume.title}</p>
        <p className="hero-summary">{resume.summary}</p>
        <div className="hero-contact">
          <span className="hero-contact-item">
            <Mail size={12} />
            <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
          </span>
          <span className="contact-sep">·</span>
          <span className="hero-contact-item">
            <MapPin size={12} />
            {resume.contact.location}
          </span>
        </div>
      </div>
    </section>
  )
}
