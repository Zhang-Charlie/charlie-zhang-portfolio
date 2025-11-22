export interface Project {
  title: string
  description: string
  imageSrc: string
  githubUrl?: string
  liveUrl?: string
  videoSrc?: string
  highlights?: string[]
}

export interface ExperienceItem {
  title: string
  subtitle: string
  logo: string
  side: "left" | "right"
  points: string[]
}

export interface Certificate {
  title: string
  issuer: string
  date: string
  logo: string
  url: string
}

export interface LogoItem {
  name: string
  src: string
  className?: string
}

export interface EducationItem {
  school: string
  logo: string
  width: number
  height: number
  degree: string
  dates: string
  location: string
  highlights: string[]
  coursework: string[]
  grade?: string
}
