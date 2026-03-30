import { Briefcase, Layers, GraduationCap, Mail, LucideIcon } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'
import { resume } from '../data/resume'

const links: { label: string; id: string; Icon: LucideIcon }[] = [
  { label: 'Experience', id: 'experience', Icon: Briefcase },
  { label: 'Skills',     id: 'skills',     Icon: Layers },
  { label: 'Education',  id: 'education',  Icon: GraduationCap },
  { label: 'Contact',    id: 'contact',    Icon: Mail },
]

const sectionIds = links.map((l) => l.id)

export default function Nav() {
  const activeId = useActiveSection(sectionIds)

  return (
    <nav>
      <div className="nav-inner">
        <a href="#hero" className="nav-name">{resume.name}</a>
        <ul className="nav-links">
          {links.map(({ label, id, Icon }) => (
            <li key={id}>
              <a href={`#${id}`} className={activeId === id ? 'active' : ''}>
                <Icon size={13} />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
