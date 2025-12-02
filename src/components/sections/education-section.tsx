import Image from "next/image"
import { education } from "@/data/education"

export function EducationSection() {
  return (
    <section id="education" className="w-full bg-[#0f0f0f] px-4 py-14 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <h3 className="text-base font-semibold sm:text-lg">Education</h3>

        <div className="space-y-6">
          {education.map(item => (
            <div key={item.school} className="rounded-2xl border border-[#1f1f1f] bg-[#121212] p-6 shadow-lg">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                <div className="shrink-0">
                  <Image
                    src={item.logo}
                    alt={`${item.school} logo`}
                    width={item.width}
                    height={item.height}
                    className="h-40 w-auto"
                  />
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">{item.school}</h4>
                  <p className="mt-1 text-base text-slate-300">
                    <strong>{item.degree}</strong>
                  </p>
                  {item.grade && <p className="text-sm text-slate-300">{item.grade}</p>}
                  <p className="text-sm text-slate-400">{item.dates}</p>
                  <p className="text-sm text-slate-300">{item.location}</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="grid gap-6 sm:ml-[11rem] sm:grid-cols-2">
                  <div>
                    <h5 className="mb-2 text-lg font-semibold text-white">Highlights</h5>
                    <ul className="list-outside list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
                      {item.highlights.map(point => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="mb-2 text-lg font-semibold text-white">Technical Coursework</h5>
                    <ul className="list-outside list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
                      {item.coursework.map(course => (
                        <li key={course}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
