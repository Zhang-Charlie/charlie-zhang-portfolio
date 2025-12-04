'use client'

import { useState } from "react"
import Image from "next/image"
import { Project } from "@/types"

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [open, setOpen] = useState(true)


  const handleClose = () => {
    setOpen(false)
    setTimeout(onClose, 180)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-200 ${
        open ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative w-[96%] max-w-5xl max-h-[82vh] flex flex-col rounded-3xl bg-[#111111] px-8 py-6 shadow-[0_0_60px_rgba(0,0,0,0.7)] border border-[#1f1f1f] transform transition-transform duration-200 ${
          open ? "scale-100" : "scale-95"
        }`}
        onClick={event => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-1 text-sm text-slate-300">
              A personal project exploring UI, layout, and interaction design
            </p>
          </div>

          <button
            onClick={handleClose}
            className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#1e1e1e] text-slate-300 hover:bg-[#272727] hover:text-white transition"
            aria-label="Close project details"
          >
            X
          </button>
        </div>

        <div className="mt-4 h-px w-full bg-white/5" />

        <div className="mt-4 flex-1 overflow-y-auto space-y-5 pr-1">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#0a0a0a]">
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={1200}
              height={630}
              className="w-full h-auto max-h-[420px] object-contain"
            />
          </div>

          <div className="mt-2">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              About this project
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {project.description}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-slate-300">
                {project.highlights.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {project.videoSrc && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Demo video
              </h4>

              <video
                src={project.videoSrc}
                controls
                className="mt-3 w-full max-h-[420px] rounded-xl border border-[#1f1f1f] object-cover"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-white/10 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/20"
              >
                View GitHub
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Visit live project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
