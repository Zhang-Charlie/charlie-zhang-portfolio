import { tools } from "@/data/tools"

export function ToolsSection() {
  return (
    <section className="w-full bg-[#111111] px-4 py-12 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <h3 className="text-lg font-semibold sm:text-xl">Tools I Use</h3>

        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-5">
          {tools.map(({ name, src }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-1"
            >
              <img
                src={src}
                alt={name}
                className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
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
