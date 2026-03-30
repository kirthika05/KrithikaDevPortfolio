import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import { resume } from './data/resume'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <p className="footer-inner">© {new Date().getFullYear()} {resume.name}</p>
        </div>
      </footer>
    </>
  )
}
