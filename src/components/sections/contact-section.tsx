export function ContactSection() {
  return (
    <section className="w-full bg-[#050509] px-4 py-16 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-5xl space-y-10 text-center">
        <h3 className="text-2xl font-bold sm:text-3xl">Let&apos;s talk</h3>

        <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
          Open to software engineering, AI, and cybersecurity internships and collaborations. If my work resonates
          with you, I&apos;d love to hear from you.
        </p>

        <div className="mx-auto max-w-xl rounded-2xl bg-[var(--color-accent)] p-[1px]">
          <div
            className="rounded-2xl bg-[#111111] px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.7)]"
            style={{ animation: "contact-float-strong 4s ease-in-out infinite" }}
          >
            <div className="mb-6 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span>Open to opportunities</span>
            </div>

            <h4 className="text-xl font-semibold text-white">Build something great together</h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              The fastest way to reach me is by email, but I&apos;m also active on GitHub and LinkedIn.
            </p>

            <div className="mt-6">
              <a
                href="mailto:charliezhangbusiness@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-transform transition-shadow hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(56,189,248,0.8)]"
              >
                <span>Send me an email</span>
              </a>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm text-slate-300">
              <a
                href="https://github.com/Zhang-Charlie"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:border-[var(--color-accent)]/80 hover:bg-[var(--color-accent)]/10 hover:-translate-y-0.5"
              >
                <img src="/logos/github.png" alt="GitHub" className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/zhang-charlie/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:border-[var(--color-accent)]/80 hover:bg-[var(--color-accent)]/10 hover:-translate-y-0.5"
              >
                <img src="/logos/linkedin.svg" alt="LinkedIn" className="h-5 w-5 object-contain" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
