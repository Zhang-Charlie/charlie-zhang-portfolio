import Image from "next/image"
import { certificates } from "@/data/certificates"

export function CertificatesSection() {
  return (
    <section className="w-full bg-[#0f0f0f] px-4 py-14 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-10">
        <h3 className="text-xl font-semibold text-center">Certificates</h3>

        <div className="grid grid-cols-2 gap-10 text-center sm:grid-cols-3 lg:grid-cols-5">
          {certificates.map(item => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group flex cursor-pointer flex-col items-center"
            >
              <Image
                src={item.logo}
                alt={item.title}
                width={100}
                height={100}
                className="h-20 w-auto object-contain transition group-hover:scale-105"
              />

              <p className="mt-3 text-sm font-semibold transition group-hover:text-[var(--color-accent)]">
                {item.title}
              </p>

              <p className="text-xs text-slate-400">{item.issuer}</p>
              <p className="text-[10px] text-slate-500">{item.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
