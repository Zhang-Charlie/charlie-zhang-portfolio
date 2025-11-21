import Image from "next/image"

const techStack = [
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "SQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Scheme",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/racket/racket-original.svg",
  },
  {
    name: "x86 Assembly",
    src: "/icons/x86.svg",
  },

  // modern stack
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "React.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
]

const projects = [
  {
    title: "ScholaFlow",
    description:
      "Classroom dashboard concept with colorful course cards and a clean UI layout.",
    liveUrl: "https://orca-website-ten.vercel.app/",
    githubUrl: "https://github.com/trevorphilbrick/orca-website-ten",
    imageSrc: "/projects/orca-website.png",
  },
  {
    title: "Queyk Dashboard",
    description:
      "Seismic activity monitoring dashboard with charts and status cards.",
    liveUrl: "https://orca-website-ten.vercel.app/",
    githubUrl: "https://github.com/trevorphilbrick/orca-website-ten",
    imageSrc: "/projects/queyk.png",
  },
  {
    title: "Orca Website",
    description:
      "Marketing site concept exploring gradients, layout, and storytelling.",
    liveUrl: "https://orca-website-ten.vercel.app/",
    githubUrl: "https://github.com/trevorphilbrick/orca-website-ten",
    imageSrc: "/projects/orca.png",
  },
]

const certificates = [
  {
    title: "AWS AI & ML Scholars",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Aug 2025",
    logo: "/logos/aws.png",
    url: "#",
  },
  {
    title: "TryHackMe Cybersecurity Training",
    issuer: "TryHackMe",
    date: "Issued Nov 2025",
    logo: "/logos/tryhackme.png",
    url: "https://tryhackme.com/certificate/THM-ORBKATBNGZ",
  },
  {
    title: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Aug 2025",
    logo: "/logos/aws.png",
    url: "https://www.credly.com/badges/ffd9c8a6f651-4abe-9e3d-613f80ea2c3c/public_url",
  },
  {
    title: "AWS Educate Introduction to Generative AI",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Mar 2025",
    logo: "/logos/aws.png",
    url: "https://www.credly.com/badges/0f5ad8f3-9b71-4551-9f79-ee95f5bf3c04/linked_in_profile",
  },
  {
    title: "Introducing Generative AI with AWS",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Aug 2025",
    logo: "/logos/aws.png",
    url: "https://www.udacity.com/certificate/e/a653f2c2-670b-11f0-8d0a-43c02c584261",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Issued Jul 2025",
    logo: "/logos/cisco.png",
    url: "https://www.credly.com/badges/4ba8074e-e73e-42c3-a85d-2792b9fc1dbf/linked_in_profile",
  },
  {
    title: "AWS Educate Introduction to Cloud 101",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Jul 2025",
    logo: "/logos/aws.png",
    url: "https://www.credly.com/badges/21dd2938-6dfe-4806-8c7f-cb7ad6943e2d/public_url",
  },
  {
    title: "AWS Emerging Talent Community Digital Badge",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Jul 2025",
    logo: "/logos/aws.png",
    url: "#",
  },
  {
    title: "Microsoft AI Skills Fest | Festival participation",
    issuer: "Microsoft",
    date: "Issued Jul 2025",
    logo: "/logos/microsoft.png",
    url: "https://learn.microsoft.com/api/achievements/share/en-gb/CharlieZhang/YECNCC9R?sharingId=E25DB3E4400FD988",
  },
  {
    title: "Learn Git & GitHub Course",
    issuer: "Codecademy",
    date: "Issued Mar 2025",
    logo: "/logos/codecademy.png",
    url: "https://www.codecademy.com/profiles/ZhangCharlie/certificates/a8ab218d5950c29861635cc0bf12fd13",
  },
]


function GithubIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.79.61-3.38-1.34-3.38-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.95 0-1.1.39-2 .1-2.7 0 0 .84-.27 2.75 1.03a9.56 9.56 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.28.7.09 1.6.05 2.7 0 3.85-2.34 4.7-4.57 4.95.37.32.7.94.7 1.9v2.81c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function ExternalLinkIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M5 10v9h9" />
    </svg>
  )
}

export function TechStackSection() {
  return (
    <section className="w-full bg-[#111111] px-4 py-12 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <h3 className="text-lg font-semibold sm:text-xl">Current tech stack</h3>
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-5">
          {techStack.map(({ name, src }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-1"
            >
              <img
                src={src}
                alt={name}
                className={`transition-transform duration-200 group-hover:scale-105 object-contain ${
                  name === "x86 Assembly" ? "h-14 w-14" : "h-10 w-10"
                }`}
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

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* hero */}
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

      {/* about */}
      <section className="w-full bg-white px-4 py-14 text-slate-900 sm:px-6 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:gap-10">
          <div className="mx-auto w-fit md:mx-0">
            <Image
              src="/profile-placeholder.svg"
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
              I help bring ideas to life through clean, high-performing web and
              mobile experiences. Whether you need a fast MVP, a polished
              product, or help scaling your stack, I focus on reliable, modern
              solutions using tools like React, React Native, Go, and Node.js.
              From backend architecture to frontend design, I care about speed,
              usability, and maintainability, so you get software that not only
              works, but works well in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* tech stack */}
      <TechStackSection />

      {/* projects */}
      <section className="w-full bg-[#0f0f0f] px-4 py-14 text-slate-100 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-8">
          <h3 className="text-lg font-semibold sm:text-xl">Recent projects</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-[#1f1f1f] bg-[#121212] p-4 shadow-lg transition-transform duration-200 hover:-translate-y-1"
              >
                {/* framed screenshot with background behind website */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
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
                </a>

                <div className="mt-4 flex items-center gap-3">
                  <h4 className="text-lg font-semibold text-white">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-2 text-slate-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded p-1 transition-colors duration-150 hover:bg-white/10"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded p-1 transition-colors duration-150 hover:bg-white/10"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <p className="mt-2 text-sm text-slate-300">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full bg-[#0f0f0f] px-4 py-14 text-slate-100 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-8">
          <h3 className="text-lg font-semibold sm:text-xl">Education</h3>

          {/* UCD */}
          <div className="rounded-2xl border border-[#1f1f1f] bg-[#121212] p-6 shadow-lg">
            {/* Logo left, text right */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              {/* Bigger UCD logo on the left */}
              <div className="shrink-0">
                <Image
                  src="/logos/ucd-logo.png"
                  alt="UCD logo"
                  width={240}
                  height={240}
                  className="h-40 w-auto"
                />
              </div>

              {/* Uni name and degree */}
              <div>
                <h4 className="text-2xl font-bold text-white">
                  University College Dublin
                </h4>
                <p className="mt-1 text-base text-slate-300">
                  <strong>
                    BSc Computer Science with Data Science &amp; AI
                  </strong>{" "}
                  (Sep 2023 – May 2027)
                  <br />
                  Dublin, Ireland
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {/* Highlights (pushed more to the right) */}
              <div className="sm:pl-10">
                <h5 className="mb-2 text-lg font-semibold text-white">
                  Highlights
                </h5>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
                  <li>• Class Representative for ~150 students</li>
                  <li>• Student Rep — Science Taught Programmes Board</li>
                  <li>• UCD NetSoc Ordinary Committee Member</li>
                  <li>• Peer Mentor &amp; Access Leader</li>
                </ul>
              </div>

              {/* Coursework */}
              <div>
                <h5 className="mb-2 text-lg font-semibold text-white">
                  Technical Coursework
                </h5>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
                  <li>• Data Structures &amp; Algorithms</li>
                  <li>• Operating Systems (C, RISC-V)</li>
                  <li>• Machine Learning &amp; AI</li>
                  <li>• Database Systems &amp; SQL</li>
                  <li>• Computer Networks</li>
                  <li>• Software Engineering Principles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* BFEI */}
          <div className="rounded-2xl border border-[#1f1f1f] bg-[#121212] p-6 shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              {/* BFEI logo on the left */}
              <div className="shrink-0 ml-1 sm:ml-3">
                <Image
                  src="/logos/bfei-logo.png"
                  alt="BFEI logo"
                  width={200}
                  height={200}
                  className="h-40 w-auto"
                />
              </div>

              {/* BFEI text */}
              <div>
                <h4 className="text-2xl font-bold text-white">
                  Blackrock Further Education Institute
                </h4>
                <p className="mt-1 text-base text-slate-300">
                  <strong>
                    QQI Level 5 Certificate in Software Development — Full
                    Distinctions (Top Grade)
                  </strong>
                  <br />
                  Sep 2022 – May 2023
                  <br />
                  Dublin, Ireland
                </p>
              </div>
            </div>

            <div className="mt-6 sm:pl-10">
              <h5 className="mb-2 text-lg font-semibold text-white">
                Focus Areas
              </h5>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
                <li>
                  • Built strong foundations in software development and
                  programming
                </li>
                <li>
                  • Developed problem-solving, study skills, and academic
                  discipline
                </li>
                <li>
                  • Provided the groundwork to progress into Computer Science at
                  UCD
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full bg-[#0f0f0f] px-4 py-14 text-slate-100 sm:px-6">
        <div className="mx-auto max-w-5xl space-y-12">
          <h3 className="mb-6 text-lg font-semibold sm:text-xl">Experience</h3>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#1f1f1f]"></div>

            <div className="space-y-20">
              {/* Experience 1 — UCD Leadership (Logo left, Text right) */}
              <div className="relative flex items-center">
                {/* Logo */}
                <div className="flex w-1/2 justify-end pr-6">
                  <Image
                    src="/logos/ucd-logo.png"
                    alt="UCD Logo"
                    width={120}
                    height={120}
                    className="h-24 w-auto"
                  />
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#0f0f0f] bg-[var(--color-accent)]"></div>

                {/* Text */}
                <div className="w-1/2 pl-6">
                  <h4 className="text-xl font-semibold">
                    University College Dublin
                  </h4>
                  <p className="text-sm text-slate-300">
                    Leadership &amp; Societies · 2023 – Present
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-slate-400">
                    <li>• Class Representative for ~150 students</li>
                    <li>• Student Rep — Science Taught Programmes Board</li>
                    <li>• UCD NetSoc Ordinary Committee Member</li>
                    <li>• Peer Mentor &amp; Access Leader</li>
                  </ul>
                </div>
              </div>

              {/* Experience 2 — Formula Student (Logo right, Text left) */}
              <div className="relative flex items-center">
                {/* Text */}
                <div className="w-1/2 pr-6 text-right">
                  <h4 className="text-xl font-semibold">
                    UCD Formula Student — Powertrain
                  </h4>
                  <p className="text-sm text-slate-300">
                    Vehicle Control Software · 2024 – Present
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-slate-400">
                    <li>• Working on Vehicle Control Unit (VCU) software</li>
                    <li>• Embedded C/C++ for sensors &amp; dashboard logic</li>
                    <li>• Real-hardware testing and reliability improvements</li>
                  </ul>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#0f0f0f] bg-[var(--color-accent)]"></div>

                {/* Logo */}
                <div className="w-1/2 pl-6">
                  <Image
                    src="/logos/formula.png"
                    alt="Formula Student"
                    width={120}
                    height={120}
                    className="h-24 w-auto"
                  />
                </div>
              </div>

              {/* Experience 3 — Personal Projects (Logo left, Text right) */}
              <div className="relative flex items-center">
                {/* Logo */}
                <div className="flex w-1/2 justify-end pr-6">
                  <Image
                    src="/logos/projects.png"
                    alt="Projects Logo"
                    width={120}
                    height={120}
                    className="h-24 w-auto"
                  />
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#0f0f0f] bg-[var(--color-accent)]"></div>

                {/* Text */}
                <div className="w-1/2 pl-6">
                  <h4 className="text-xl font-semibold">
                    Software &amp; Technical Projects
                  </h4>
                  <ul className="mt-3 space-y-1 text-sm text-slate-400">
                    <li>• Orca Website — HTML/CSS project</li>
                    <li>• HexOust — Java strategy game</li>
                    <li>• PathPilot — Google AI Hackathon (3rd place)</li>
                  </ul>
                </div>
              </div>

              {/* Experience 4 — Work Experience (Logo right, Text left) */}
              <div className="relative flex items-center">
                {/* Text */}
                <div className="w-1/2 pr-6 text-right">
                  <h4 className="text-xl font-semibold">
                    Work &amp; Volunteering
                  </h4>
                  <p className="text-sm text-slate-300">
                    Customer-facing &amp; Ops Roles
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-slate-400">
                    <li>• Ocean Catering &amp; Hospitality</li>
                    <li>• The Coffee Bean (Dublin)</li>
                    <li>• Warehouse Operative — Amazon &amp; Uniphar Group</li>
                    <li>• St. Mary&apos;s Hospital work experience</li>
                  </ul>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#0f0f0f] bg-[var(--color-accent)]"></div>

                {/* Logo */}
                <div className="w-1/2 pl-6">
                  <Image
                    src="/logos/work.png"
                    alt="Work Experience Logo"
                    width={120}
                    height={120}
                    className="h-24 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* CERTIFICATES */}
      <section className="w-full bg-[#0f0f0f] px-4 py-14 text-slate-100">
        <div className="mx-auto max-w-6xl space-y-10">
          <h3 className="text-xl font-semibold">Certificates</h3>
{/* <h3 className="text-lg font-semibold sm:text-xl text-center"> */}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 text-center ">
            {certificates.map(c => (
              <a key={c.title} href={c.url} target="_blank" className="group flex flex-col items-center cursor-pointer">
                <Image src={c.logo} alt={c.title} width={100} height={100}
                  className="h-20 w-auto object-contain group-hover:scale-105 transition" />

                <p className="mt-3 text-sm font-semibold group-hover:text-[var(--color-accent)] transition">
                  {c.title}
                </p>

                <p className="text-xs text-slate-400">{c.issuer}</p>
                <p className="text-[10px] text-slate-500">{c.date}</p>
              </a>
            ))}
          </div>

        </div>
      </section>
    </main>
  )
}
