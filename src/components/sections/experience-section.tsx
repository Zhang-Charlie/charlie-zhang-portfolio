import Image from "next/image"
import { experience } from "@/data/experience"

export function ExperienceSection() {
  return (
    <section className="w-full bg-[#0f0f0f] px-4 py-14 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-5xl space-y-12">
        <h3 className="mb-6 text-lg font-semibold sm:text-xl">Experience</h3>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#1f1f1f]" />

          <div className="space-y-20">
            {experience.map(item => {
              const textOnRight = item.side === "right"

              return (
                <div key={item.title} className="relative flex items-center">
                  {textOnRight && (
                    <>
                      <div className="flex w-1/2 justify-end pr-6">
                        <Image
                          src={item.logo}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="h-40 w-auto"
                        />
                      </div>

                      <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#0f0f0f] bg-[var(--color-accent)]" />

                      <div className="w-1/2 pl-6">
                        <h4 className="text-xl font-semibold">{item.title}</h4>
                        <p className="text-sm text-slate-300">{item.subtitle}</p>
                        <ul className="mt-3 space-y-1 list-disc list-outside pl-5 text-sm text-slate-400">
                          {item.points.map(point => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {!textOnRight && (
                    <>
                      <div className="w-1/2 pr-6 text-left">
                        <h4 className="text-xl font-semibold">{item.title}</h4>
                        <p className="text-sm text-slate-300">{item.subtitle}</p>
                        <ul className="mt-3 space-y-1 list-disc list-outside pl-5 text-sm text-slate-400">
                          {item.points.map(point => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#0f0f0f] bg-[var(--color-accent)]" />

                      <div className="w-1/2 pl-6">
                        <Image
                          src={item.logo}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="h-40 w-auto"
                        />
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
