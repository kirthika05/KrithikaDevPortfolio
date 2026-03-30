import { useEffect, useRef, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState('')
  const idsRef = useRef(sectionIds)

  useEffect(() => {
    const ids = idsRef.current
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { threshold: 0.25, rootMargin: '-60px 0px -40% 0px' }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return activeId
}
