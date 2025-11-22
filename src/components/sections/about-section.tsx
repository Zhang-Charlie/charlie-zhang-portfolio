import Image from "next/image"

export function AboutSection() {
  return (
    <section className="w-full bg-white px-4 py-14 text-slate-900 sm:px-6 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:gap-10">
        <div className="mx-auto w-fit md:mx-0">
          <Image
            src="/logos/selfie.png"
            alt="Charlie Zhang portrait"
            width={220}
            height={220}
            sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 220px"
            className="h-auto w-40 -rotate-2 rounded-md border-4 border-slate-900 shadow-xl sm:w-48 md:w-56"
            priority
          />
        </div>

        <div className="flex-1 space-y-4 px-1 text-left">
          <h2 className="text-2xl font-bold sm:text-3xl">About Me</h2>
          <p className="text-base leading-relaxed text-slate-800 sm:text-lg">
            I&apos;m a Stage 3 Computer Science with Data Science &amp; Artificial Intelligence student at
            University College Dublin. I&apos;m passionate about technology, open-minded, and constantly driven by
            curiosity. I placed 3rd in Google&apos;s AI Hackathon, and I&apos;m particularly interested in Artificial
            Intelligence, Cloud Computing, Cybersecurity, Software Development, and Mathematics. I enjoy learning
            new tools, building projects, and pushing myself to grow in every area.
          </p>
        </div>
      </div>
    </section>
  )
}
