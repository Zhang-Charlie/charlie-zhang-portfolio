'use client'

import { useState } from "react"
import Image from "next/image"
import { projects } from "@/data/projects"
import { Project } from "@/types"
import { ProjectModal } from "@/components/modals/project-modal"
import { ExternalLinkIcon, GithubIcon } from "@/components/ui/icons"

type ProjectCardProps = {
  project: Project
  onSelect: (project: Project) => void
}

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      className="cursor-pointer rounded-2xl border border-[#1f1f1f] bg-[#121212] p-4 shadow-lg transition-transform duration-200 hover:-translate-y-1"
      onClick={() => onSelect(project)}
    >
      <div className="rounded-[1.6rem] bg-[#050509] p-2 shadow-[0_18px_50px_rgba(0,0,0,0.6)]">
        <div className="rounded-[1.3rem] bg-[#111827] p-2">
          <div className="aspect-video overflow-hidden rounded-[1.1rem]">
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <h4 className="text-lg font-semibold text-white">{project.title}</h4>
        <div className="flex items-center gap-2 text-slate-300">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={event => event.stopPropagation()}
              className="rounded p-1 transition-colors duration-150 hover:bg-white/10"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={event => event.stopPropagation()}
              className="rounded p-1 transition-colors duration-150 hover:bg-white/10"
            >
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <p className="mt-2 text-sm text-slate-300">{project.description}</p>
    </div>
  )
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showMore, setShowMore] = useState(false)

  const firstRow = projects.slice(0, 3)
  const moreProjects = projects.slice(3)

  return (
    <section className="w-full bg-[#0f0f0f] px-4 py-14 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <h3 className="text-lg font-semibold sm:text-xl">Recent projects</h3>

        <div className="grid gap-8 md:grid-cols-3">
          {firstRow.map(project => (
            <ProjectCard key={project.title} project={project} onSelect={setSelectedProject} />
          ))}
        </div>

        {showMore && (
          <div className="grid gap-8 md:grid-cols-3 mt-10">
            {moreProjects.map(project => (
              <ProjectCard key={project.title} project={project} onSelect={setSelectedProject} />
            ))}
          </div>
        )}

        {projects.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowMore(!showMore)}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
            >
              {showMore ? "Show less" : "Load more projects"}
            </button>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
