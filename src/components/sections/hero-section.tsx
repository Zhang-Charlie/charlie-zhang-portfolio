export function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-12 text-[#e9eefc] sm:px-6 sm:py-16">
      <div className="max-w-5xl px-2 text-center">
        <h1 className="text-[clamp(2.4rem,5vw,3.5rem)] font-semibold leading-[1.15] sm:text-[clamp(2.8rem,4vw,4rem)] lg:text-[clamp(3.2rem,3vw,4.5rem)]">
          <span className="block">
            Hello! I&apos;m{" "}
            <span className="text-[clamp(2.6rem,5.2vw,3.7rem)] font-semibold text-[var(--color-accent)] sm:text-[clamp(3rem,4.5vw,4rem)]">
              Charlie Zhang
            </span>
            ,
          </span>
          <span className="mt-2 block">
            a{" "}
            <span className="text-[clamp(2.6rem,5.2vw,3.7rem)] font-semibold text-[var(--color-accent)] sm:text-[clamp(3rem,4.5vw,4rem)]">
              UCD CS Student.
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-[clamp(1rem,2.5vw,1.2rem)] font-medium leading-[1.7] text-[#d2e1ff] sm:leading-[1.8]">
          Driven by learning and a love for technology, I constantly
          <br />
          explore new technologies and challenge my limits.
        </p>
      </div>
    </section>
  )
}
