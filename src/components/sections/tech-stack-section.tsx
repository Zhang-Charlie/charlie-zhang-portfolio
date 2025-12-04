import Image from "next/image"

import { techStack } from "@/data/tech-stack"

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="w-full bg-[#111111] px-4 pt-4 pb-12 text-slate-100 sm:px-6 sm:pt-6"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <h3 className="text-lg font-semibold sm:text-xl">Current tech stack</h3>
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-5">
          {techStack.map(({ name, src, className }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-1"
            >
              <Image
                src={src}
                alt={name}
                className={`object-contain transition-transform duration-200 group-hover:scale-105 ${
                  className ?? "h-10 w-10"
                }`}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                width={10}
                height={10}
              />
              <span className="text-sm font-medium text-gray-200 transition-colors duration-200 group-hover:text-white">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
