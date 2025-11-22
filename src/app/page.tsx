import { AboutSection } from "@/components/sections/about-section"
import { CertificatesSection } from "@/components/sections/certificates-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { ToolsSection } from "@/components/sections/tools-section"

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ToolsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <ContactSection />
    </main>
  )
}
