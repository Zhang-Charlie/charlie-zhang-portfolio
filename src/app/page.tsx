'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type Project = {
  title: string
  description: string
  imageSrc: string
  githubUrl?: string
  liveUrl?: string
  videoSrc?: string
}


type ProjectModalProps = {
  project: Project
  onClose: () => void
}

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

const education = [
  {
    school: "University College Dublin",
    logo: "/logos/ucd-logo.png",
    width: 240,
    height: 240,
    degree: "BSc Computer Science with Data Science & AI",
    dates: "Sep 2023 – May 2027",
    location: "Dublin, Ireland",
    highlights: [
      "Class Representative for ~150 students (Stage 2 Rep)",
      "SU Class Representative for ~150 students (Stage 3 Students' Union Rep)",
      "Represented 1,200+ Computer Science students on the Science Taught Programmes Board (STPB)",
      "UCD NetSoc Ordinary Committee Member",
      "Peer Mentor",
      "Access Leader",
      "Career Mentoring Programme",
      "UCD Formula Student — Powertrain Department",
    ],
    coursework: [
      "Algorithms & Data Structures",
      "Operating Systems (x86, RISC-V, Linux)",
      "Computer Networking",
      "Databases & SQL",
      "Software Engineering (C & Java)",
      "Python for Data Science",
      "Introduction to AI & Information Security",
      "Discrete Mathematics & Linear Algebra",
      "Probability & Statistics with Python",
      "Functional Programming in Scheme",
      "Experience with Java, C, Python, SQL, Scheme, and x86 Assembly",


    ],
  },

  {
    school: "Blackrock Further Education Institute",
    logo: "/logos/bfei-logo.png",
    width: 240,
    height: 240,
    degree: "QQI Level 5 Certificate in Software Development (5M0529)",
    dates: "Sep 2022 – May 2023",
    location: "Dublin, Ireland",
    grade: "Distinction (Top Grade)",
    highlights: [
      "Graduated with Full Distinction (Highest Grade Awarded)",
      "Built strong foundations in software development and programming",
      "Developed strong problem-solving ability and technical reasoning skills",
    ],
    coursework: [
      "Object Oriented Programming (Java)",
      "Database Methods",
      "Software Architecture",
      "Web Authoring (HTML & CSS)",
    ],
  },
]

const pathPilotHighlights = [
  "Built using React, TypeScript, and Firebase",
  "AI path-generation using custom reasoning logic",
  "Multi-step student questionnaire with dynamic UI",
  "Created for the Google AI Student Hackathon and placed 3rd overall",
  "Developed collaboratively in a fast-paced hackathon environment",
]



const tools = [
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    src: "/logos/github.png",
  },
  {
    name: "VS Code",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
  name: "Windows",
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
},
  {
    name: "Linux / WSL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "Anaconda",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg",
  },
  {
    name: "Vercel",
    src: "/logos/vercel.svg",
  },
  {
    name: "Jupyter Notebook",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg",
  },
]


export const experience = [
  {
    title: "SU Class Representative",
    subtitle: "UCD Students’ Union · Sep 2025 – Present",
    logo: "/logos/ucd-logo.png",
    side: "right",
    points: [
      "Represent the School of Computer Science on the Science Taught Programmes Board (STPB) for 1,200+ students",
      "Collaborate with faculty and the Students’ Union on academic policy and assessment improvements",
      "Ordinary Council Member for UCD NetSoc, attending SU Council and helping organise tech events",
      "Support communication between Stage 3 students, the School of Computer Science, and UCDSU"
    ]
  },

  {
    title: "Powertrain Software Engineer (VCU)",
    subtitle: "UCD Formula Student · Sep 2025 – Present",
    logo: "/logos/formula.png",
    side: "left",
    points: [
      "Develop embedded C and C++ software for the Vehicle Control Unit (VCU)",
      "Implement sensor integration, dashboard logic, and safety behaviour for an electric race car",
      "Perform real-hardware debugging and reliability improvements on the powertrain system"
    ]
  },

  {
    title: "Artificial Intelligence Content Trainer",
    subtitle: "Outlier · Apr 2025 – Present · Remote",
    logo: "/logos/outlier.png",
    side: "right",
    points: [
      "Write and review computer science questions and answers to train generative AI models",
      "Evaluate AI-generated responses for correctness, clarity, and depth",
      "Provide detailed technical feedback and prompt designs to improve model behaviour"
    ]
  },

  {
    title: "Class Representative",
    subtitle: "University College Dublin · Sep 2024 – Aug 2025",
    logo: "/logos/ucd-logo.png",
    side: "left",
    points: [
      "Elected to represent a class of ~150 Computer Science students",
      "Collected feedback, raised academic concerns, and negotiated deadline and assessment adjustments",
      "Organised a five-a-side football match with NetSoc funding to help classmates relax and unwind from academic pressure"
    ]
  },

  {
    title: "Sales and Warehouse Colleague",
    subtitle: "Currys plc · Jul 2023 – Aug 2024 · Part-time & Full-time",
    logo: "/logos/currys.png",
    side: "right",
    points: [
      "Worked part-time during university term and full-time during peak periods at Ireland’s No.1 Currys store",
      "Advised customers on laptops, TVs, and smart devices while building strong technical product knowledge",
      "Supported stock handling, deliveries, and inventory updates to keep sales and logistics running smoothly"
    ]
  },

  {
    title: "Warehouse Operative",
    subtitle: "Amazon · Aug 2022 – Oct 2022 · Full-time",
    logo: "/logos/amazon-new.png",
    side: "left",
    points: [
      "Supported the launch of Amazon’s first fulfilment facility in Ireland, assisting with setup and daily operations",
      "Operated scanners and pallet trucks to manage inventory efficiently in a fast-paced warehouse",
      "Completed First Aid training and served as a certified First Aider while helping onboard new team members"
    ]
  }
]


const projects: Project[] = [
{
  title: "PathPilot",
  description:
    "AI-powered student career guidance app built for the Google AI Student Hackathon, earning 3rd place overall. Generates personalised university and career paths using LLM reasoning, weighted scoring, and a multi-step questionnaire.",
  imageSrc: "/projects/pathpilot_end.jpg",     // main thumbnail
  videoSrc: "/projects/pathpilot_video.mp4",   // demo video
}

,

  {
    title: "HexOust",
    description:
      "Turn-based hex-grid strategy game built in Java. Implemented custom hex coordinate mapping, movement logic, and rendering. Developed collaboratively using Git and clean OOP structure.",
    liveUrl: "#",  
    githubUrl: "https://github.com/Zhang-Charlie/Hexoust",
    imageSrc: "/projects/hexoust.png",
  },

  {
    title: "Sorting Algorithms Benchmark",
    description:
      "Java implementations of Bubble Sort, Merge Sort, Quick Sort, and Counting Sort benchmarked across multiple input sizes. Includes time-complexity analysis and performance graphs.",
    liveUrl: "#",  
    githubUrl: "#",                   // add repo once uploaded
    imageSrc: "/projects/sorting-benchmark.png",
  },

  {
    title: "Used Car Market Analysis",
    description:
      "End-to-end Python data project: scraped used car listings, cleaned the dataset, loaded it into SQLite, and performed analytical SQL queries with visual insights using Pandas and Matplotlib.",
    liveUrl: "#",  
    githubUrl: "#",                   // add repo
    imageSrc: "/projects/car-analysis.png",
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

function ProjectModal({ project, onClose }: ProjectModalProps) {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
  }, [])

  const handleClose = () => {
    setOpen(false)
    setTimeout(() => {
      onClose()
    }, 180)
  }

  if (!project) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-200 ${
        open ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative w-[96%] max-w-5xl max-h-[82vh] flex flex-col rounded-3xl bg-[#111111] px-8 py-6 shadow-[0_0_60px_rgba(0,0,0,0.7)] border border-[#1f1f1f] transform transition-transform duration-200 ${
          open ? 'scale-100' : 'scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* top bar */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              A personal project exploring UI, layout, and interaction design
            </p>
          </div>

          <button
            onClick={handleClose}
            className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#1e1e1e] text-slate-300 hover:bg-[#272727] hover:text-white transition"
          >
            ×
          </button>
        </div>

        {/* subtle divider */}
        <div className="mt-4 h-px w-full bg-white/5" />
        {/* scrollable content */}
<div className="mt-4 flex-1 overflow-y-auto pr-1 space-y-5">
  {/* screenshot */}
  <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#0a0a0a]">
    <Image
      src={project.imageSrc}
      alt={project.title}
      width={1200}
      height={630}
      className="w-full h-auto max-h-[420px] object-contain"
    />
  </div>

  {/* ABOUT SECTION */}
  <div className="mt-2">
    <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
      About this project
    </h4>

    {/* main description for all projects */}
    <p className="mt-2 text-sm leading-relaxed text-slate-300">
      {project.description}
    </p>

    {/* extra bullet points just for PathPilot */}
    {project.title === "PathPilot" && (
      <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc list-inside">
        {pathPilotHighlights.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
  </div>

  {/* VIDEO PREVIEW – only for PathPilot */}
  {project.title === "PathPilot" && (
    <div className="mt-6">
      <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Demo video
      </h4>

      <video
        src="/projects/pathpilot_video.mp4"
        controls
        className="mt-3 w-full max-h-[420px] rounded-xl border border-[#1f1f1f] object-cover"
      />
    </div>
  )}

  {/* actions */}
  <div className="flex flex-wrap gap-3 pt-2">
    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg bg-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/20 transition"
      >
        View GitHub
      </a>
    )}

    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
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



export function TechStackSection() {
  return (
    <section className="w-full bg-[#111111] px-4 pt-4 pb-12 text-slate-100 sm:px-6 sm:pt-6">


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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showMore, setShowMore] = useState(false)

  // 👇 add these two lines here (NOT inside return)
  const firstRow: Project[] = projects.slice(0, 3)
  const moreProjects: Project[] = projects.slice(3)



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
              I'm a Stage 3 Computer Science with Data Science & Artificial Intelligence student at University College Dublin. 
              I’m passionate about technology, open-minded, and constantly driven by curiosity. 
              I placed 3rd in Google’s AI Hackathon, and I’m particularly interested in Artificial Intelligence, 
              Cloud Computing, Cybersecurity, Software Development, and Mathematics. 
              I enjoy learning new tools, building projects, and pushing myself to grow in every area.

            </p>
          </div>
        </div>
      </section>

      {/* tech stack */}
      <TechStackSection />

      {/* tools */}
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


{/* PROJECTS SECTION */}
<section className="w-full bg-[#0f0f0f] px-4 py-14 text-slate-100 sm:px-6">
  <div className="mx-auto max-w-6xl space-y-8">
    <h3 className="text-lg font-semibold sm:text-xl">Recent projects</h3>

    {/* FIRST ROW – always visible */}
    <div className="grid gap-8 md:grid-cols-3">
      {firstRow.map((project: Project) => (
        <div
          key={project.title}
          className="rounded-2xl border border-[#1f1f1f] bg-[#121212] p-4 shadow-lg transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
          onClick={() => setSelectedProject(project)}
        >
          {/* screenshot */}
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

          {/* title + links */}
          <div className="mt-4 flex items-center gap-3">
            <h4 className="text-lg font-semibold text-white">
              {project.title}
            </h4>
            <div className="flex items-center gap-2 text-slate-300">
  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="rounded p-1 transition-colors duration-150 hover:bg-white/10"
    >
      <GithubIcon className="h-4 w-4" />
    </a>
  )}

  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="rounded p-1 transition-colors duration-150 hover:bg-white/10"
    >
      <ExternalLinkIcon className="h-4 w-4" />
    </a>
  )}
</div>

          </div>

          <p className="mt-2 text-sm text-slate-300">
            {project.description}
          </p>
        </div>
      ))}
    </div>

    {/* SECOND ROW – ONLY SHOWS WHEN showMore = true */}
    {showMore && (
      <div className="grid gap-8 md:grid-cols-3 mt-10">
        {moreProjects.map((project: Project) => (

          <div
            key={project.title}
            className="rounded-2xl border border-[#1f1f1f] bg-[#121212] p-4 shadow-lg transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* screenshot */}
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

            {/* title + links */}
            <div className="mt-4 flex items-center gap-3">
              <h4 className="text-lg font-semibold text-white">
                {project.title}
              </h4>

              <div className="flex items-center gap-2 text-slate-300">
  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="rounded p-1 transition-colors duration-150 hover:bg-white/10"
    >
      <GithubIcon className="h-4 w-4" />
    </a>
  )}

  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="rounded p-1 transition-colors duration-150 hover:bg-white/10"
    >
      <ExternalLinkIcon className="h-4 w-4" />
    </a>
  )}
</div>

            </div>

            <p className="mt-2 text-sm text-slate-300">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    )}

    {/* LOAD MORE BUTTON */}
    {projects.length > 3 && (
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowMore(!showMore)}
          className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10 transition"
        >
          {showMore ? "Show less" : "Load more projects"}
        </button>
      </div>
    )}
  </div>
</section>


{selectedProject && (
  <ProjectModal
    project={selectedProject}
    onClose={() => setSelectedProject(null)}
  />
)}
{/* Experience Section */}
<section className="w-full bg-[#0f0f0f] px-4 py-14 text-slate-100 sm:px-6">
  <div className="mx-auto max-w-5xl space-y-12">
    <h3 className="mb-6 text-lg font-semibold sm:text-xl">Experience</h3>

    <div className="relative">
      {/* vertical timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#1f1f1f]" />

      <div className="space-y-20">
        {experience.map((item) => {
          const textOnRight = item.side === "right"

          return (
            <div key={item.title} className="relative flex items-center">
              {/* logo left / text right */}
              {textOnRight && (
                <>
                  {/* logo */}
                  <div className="flex w-1/2 justify-end pr-6">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="h-40 w-auto"
                    />


                  </div>

                  {/* dot */}
                  <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#0f0f0f] bg-[var(--color-accent)]" />

                  {/* text */}
                  <div className="w-1/2 pl-6">
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-sm text-slate-300">{item.subtitle}</p>
                    <ul className="mt-3 space-y-1 text-sm text-slate-400 list-disc list-outside pl-5">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* text left / logo right */}
              {!textOnRight && (
                <>
                  {/* text */}
                  <div className="w-1/2 pr-6 text-left">
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-sm text-slate-300">{item.subtitle}</p>
                    <ul className="mt-3 space-y-1 text-sm text-slate-400 list-disc list-outside pl-5">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                  </div>

                  {/* dot */}
                  <div className="absolute left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#0f0f0f] bg-[var(--color-accent)]" />

                  {/* logo */}
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



      {/* CERTIFICATES */}
      <section className="w-full bg-[#0f0f0f] px-4 py-14 text-slate-100">
        <div className="mx-auto max-w-6xl space-y-10">
          <h3 className="text-xl font-semibold text-center">Certificates</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
            {certificates.map((c) => (
              <a
                key={c.title}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center cursor-pointer"
              >
                <Image
                  src={c.logo}
                  alt={c.title}
                  width={100}
                  height={100}
                  className="h-20 w-auto object-contain group-hover:scale-105 transition"
                />

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

      {/* CONTACT SECTION */}
<section className="w-full bg-[#050509] px-4 py-16 text-slate-100 sm:px-6">
  <div className="mx-auto max-w-5xl space-y-10 text-center">
    <h3 className="text-2xl font-bold sm:text-3xl">
      Let&apos;s talk
    </h3>

    <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
      Open to software engineering, AI, and cybersecurity internships
      and collaborations. If my work resonates with you, I&apos;d love
      to hear from you.
    </p>

    {/* glowing frame */}
<div className="mx-auto max-w-xl rounded-2xl bg-[var(--color-accent)] p-[1px]">
      {/* animated inner card */}
      <div
        className="rounded-2xl bg-[#111111] px-8 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.7)]"
        style={{ animation: "contact-float-strong 4s ease-in-out infinite" }}
      >
        {/* status pill */}
        <div className="mb-6 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span>Open to opportunities</span>
        </div>

        {/* main CTA */}
        <h4 className="text-xl font-semibold text-white">
          Build something great together
        </h4>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          The fastest way to reach me is by email, but I&apos;m also active
          on GitHub and LinkedIn.
        </p>

        <div className="mt-6">
          <a
            href="mailto:charliezhangbusiness@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-transform transition-shadow hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(56,189,248,0.8)]"
          >
            <span>Send me an email</span>
          </a>
        </div>

        {/* socials */}
        <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm text-slate-300">
          {/* GitHub */}
          <a
            href="https://github.com/Zhang-Charlie"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:border-[var(--color-accent)]/80 hover:bg-[var(--color-accent)]/10 hover:-translate-y-0.5"
          >
            <img
              src="/logos/github.png"
              alt="GitHub"
              className="h-4 w-4"
            />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
<a
  href="https://www.linkedin.com/in/zhang-charlie/"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:border-[var(--color-accent)]/80 hover:bg-[var(--color-accent)]/10 hover:-translate-y-0.5"
>
  <img
    src="/logos/linkedin.svg"
    alt="LinkedIn"
    className="h-5 w-5 object-contain"
  />
  <span>LinkedIn</span>
</a>

        </div>
      </div>
    </div>
  </div>
</section>


    </main>
  )
}
