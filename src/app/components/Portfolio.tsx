"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  FileText,
  Cpu,
  Sparkles,
  Send,
  Rocket,
  Stars,
  Moon,
  Satellite,
} from "lucide-react";

// -------------------- PROFILE DATA ---------------------------------------
const BHINU = {
  name: "Bhinu Santosh",
  role: "Aspiring Software Engineer • CS + DS @ UW–Madison",
  blurb:
    "I build fast, reliable software with a soft spot for AI, clean backends, and UIs that don't fight you. I’m currently focused on backend systems, data pipelines, and machine learning integrations.",
  links: {
    github: "https://www.github.com/bhinu",
    linkedin: "https://www.linkedin.com/in/bhinu-santosh",
    email: "mailto:bhinusantosh@gmail.com",
    resume: "/resume.pdf",
  },
  skills: [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "FastAPI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
    {
      name: "Flask",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    },
    {
      name: "Azure Functions",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Azure SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    },
    {
      name: "Blob Storage",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Cosmos DB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Redis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "CI/CD",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
    },
    {
      name: "JWT/Auth",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
    },
    {
      name: "PyTorch",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    },
    {
      name: "TensorFlow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
  ],
  projects: [
    {
      title: "Gesture (Accessibility Gestures)",
      tag: "CV • Accessibility • Electron",
      desc: "Cross‑platform hand‑gesture control for desktop workflows (volume, workspace switching). 95% gesture accuracy with custom CNNs + Mediapipe.",
      tech: ["Electron.js", "Mediapipe", "TensorFlow", "PyAutoGUI"],
      link: "#",
      repo: "https://github.com/bhinu",
    },
    {
      title: "HackSherpa",
      tag: "Full‑stack • Insights",
      desc: "Scraped 1,000+ DevPost projects to suggest tech stacks. Auto‑generates README + pitch, cutting planning time ~40%.",
      tech: ["Next.js", "Supabase", "Flask", "Python", "TypeScript"],
      link: "#",
      repo: "https://github.com/bhinu",
    },
    {
      title: "A Jam Records APIs",
      tag: "Backend • Cloud • Data",
      desc: "Backend APIs on Azure Functions with secured data pipelines via Blob Storage + Azure SQL. Used APIM + logging to reduce latency and improve DX.",
      tech: ["Python", "Azure Functions", "Azure SQL", "APIM"],
      link: "#",
      repo: "#",
    },
  ],
  experience: [
    {
      company: "A Jam Records",
      role: "Software Engineering Intern",
      period: "May 2025 – Present",
      points: [
        "Developed and deployed Python/Azure Functions APIs, accelerating integration for a music‑tech startup.",
        "Built secure pipelines with Blob Storage + Azure SQL to move data between services and AI models.",
        "Streamlined arch + cut latency with Azure API Management + logging tooling.",
      ],
    },
    {
      company: "Diyar United Company",
      role: "Data Analyst Intern",
      period: "Jun 2024 – Aug 2024",
      points: [
        "Drove +5% monthly revenue with interactive Power BI dashboards (churn, acquisition, revenue).",
        "Designed star schema enabling segmentation; contributed to +12% client acquisition.",
        "Automated 4 recurring ETL/reporting workflows, saving ~15 hrs/week.",
      ],
    },
    {
      company: "GLUE Lab, UW–Madison",
      role: "Undergraduate Researcher",
      period: "Jan 2025 – Present",
      points: [
        "Mapped land‑use transitions in Amazon/Cerrado; improved geospatial accuracy for partners.",
        "Analyzed 20+ years of imagery & supply chains with PyTorch; linked trends to cattle/soy expansion.",
        "Reduced error in livestock classification by ~20% with optimized detection models.",
      ],
    },
  ],
};

// -------------------- ANIMATION PRESETS ----------------------------------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

// -------------------- THEME ----------------------------------------------
function useDarkMode() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return { dark, setDark };
}

// -------------------- DECOR ----------------------------------------------
function Starfield() {
  const dot = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="1" cy="1" r="1" fill="white" opacity="0.6"/></svg>`
  );
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,${dot}")`,
          backgroundSize: "2px 2px",
        }}
      />
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/10 to-transparent blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-cyan-400/20 via-emerald-400/10 to-transparent blur-3xl" />
    </div>
  );
}

function ParallaxPlanet() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 25; // stronger tilt
      const y = (e.clientY / innerHeight - 0.5) * 25;
      setTilt({ x, y });
    };
    window.addEventListener("mousemove", onMove);

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.div
      style={{
        rotateX: tilt.y,
        rotateY: tilt.x,
        transformPerspective: 800, // <-- key so rotateX/Y looks 3D
      }}
      className="mx-auto h-64 w-64 rounded-full bg-gradient-to-tr from-purple-700 via-indigo-500 to-blue-400 shadow-2xl"
      animate={{ y: [0, -4, 0] }} // subtle float so you can tell it’s alive
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_70%)]" />
    </motion.div>
  );
}

function Constellations() {
  const paths = [
    "M100 100 L200 150 L300 100 L400 200",
    "M500 300 L550 350 L600 320 L650 400",
  ];
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          initial={{ pathLength: 0, opacity: 0.2 }}
          whileInView={{ pathLength: 1, opacity: 0.7 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 2, ease: "easeInOut", delay: i * 0.2 }}
          stroke="white"
          strokeWidth={1}
          fill="none"
          className="mix-blend-screen"
        />
      ))}
    </svg>
  );
}

function Chip({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/30 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
      {Icon && <Icon className="h-3.5 w-3.5" />} {children}
    </span>
  );
}

// -------------------- NAVBAR --------------------------------------------
function Navbar({
  onToggleTheme,
  dark,
}: {
  onToggleTheme: () => void;
  dark: boolean;
}) {
  const items = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 z-40 w-full"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-zinc-200/60 bg-white/70 p-3 backdrop-blur dark:border-white/10 dark:bg-zinc-900/60">
          <a
            href="#home"
            className="group flex items-center gap-2 font-semibold"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:-rotate-12" />
            <span>Bhinu.dev</span>
          </a>
          <nav className="hidden gap-1 md:flex">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="rounded-xl px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-black dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {it.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={BHINU.links.resume}
              className="group hidden items-center gap-2 rounded-xl border border-transparent bg-black px-3 py-2 text-xs font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black md:flex"
            >
              <FileText className="h-4 w-4" /> Resume
            </a>
            <button
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="rounded-xl border border-zinc-200/60 bg-white/70 p-2 text-zinc-700 transition hover:bg-zinc-100 active:scale-95 dark:border-white/10 dark:bg-zinc-800/60 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              {dark ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Stars className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

// -------------------- HERO ----------------------------------------------
function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[88vh] items-center overflow-hidden pt-32"
    >
      <Starfield />
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid items-center gap-8 md:grid-cols-2"
        >
          <motion.div variants={fadeUp}>
            <Chip icon={Satellite}>Open to 2025–26 SWE internships</Chip>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-6xl">
              {BHINU.name}
            </h1>
            <p className="mt-2 text-xl text-zinc-700 dark:text-zinc-300">
              {BHINU.role}
            </p>
            <p className="mt-6 max-w-xl text-zinc-600 dark:text-zinc-400">
              {BHINU.blurb} (Yes, I commit code before coffee. Questionable life
              choice; great throughput.)
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
              >
                View Projects{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={BHINU.links.github}
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200/60 bg-white/70 px-4 py-3 text-sm text-zinc-700 backdrop-blur transition hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-800/60 dark:text-zinc-200"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={BHINU.links.linkedin}
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200/60 bg-white/70 px-4 py-3 text-sm text-zinc-700 backdrop-blur transition hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-800/60 dark:text-zinc-200"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={BHINU.links.email}
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200/60 bg-white/70 px-4 py-3 text-sm text-zinc-700 backdrop-blur transition hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-800/60 dark:text-zinc-200"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </motion.div>
          <motion.div variants={scaleIn} className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-200/60 bg-gradient-to-br from-zinc-50 to-white p-1 shadow-2xl dark:border-white/10 dark:from-zinc-900 dark:to-zinc-950">
              <div className="h-full w-full rounded-2xl bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.18),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.18),transparent_40%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ParallaxPlanet />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// -------------------- SECTIONS ------------------------------------------
function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={fadeUp}
            className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl"
          >
            <Cpu className="h-6 w-6" /> About
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400"
          >
            I like turning ambiguous problems into shipped products. Recent
            work: authentication, rate‑limiting, and data/AI plumbing on Azure.
            I aim for thoughtful UX, clean architecture, and feedback loops
            faster than a comet on espresso.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl"
        >
          <Stars className="h-6 w-6" /> Skills
        </motion.h2>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {BHINU.skills.map(({ name, icon }) => (
            <motion.li
              key={name}
              variants={fadeUp}
              className="flex items-center gap-3 rounded-xl border border-zinc-200/60 bg-white/70 px-4 py-3 text-sm text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-zinc-800/60 dark:text-zinc-200"
            >
              <img
                src={icon}
                alt={name}
                className="h-5 w-5 object-contain"
                loading="lazy"
              />
              <span>{name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: any }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-2xl border border-zinc-200/60 bg-white/70 p-5 backdrop-blur transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-zinc-900/50"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/30 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
          <Rocket className="h-3.5 w-3.5" /> {p.tag}
        </span>
        <div className="flex items-center gap-2 opacity-0 transition group-hover:opacity-100">
          {p.repo && (
            <a
              href={p.repo}
              aria-label="Repo"
              className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-white/5"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {p.link && (
            <a
              href={p.link}
              aria-label="Live"
              className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-white/5"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-white">
        {p.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t: string) => (
          <span
            key={t}
            className="rounded-lg bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-white/5 dark:text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl"
        >
          <Rocket className="h-6 w-6" /> Projects
        </motion.h2>
        {/* Constellations behind this section */}
        <Constellations />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BHINU.projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl"
        >
          <Satellite className="h-6 w-6" /> Experience
        </motion.h2>
        {/* Constellations behind this section as well */}
        <Constellations />
        <div className="mt-8 space-y-6">
          {BHINU.experience.map((e) => (
            <motion.div
              key={e.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-zinc-200/60 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-zinc-900/50"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {e.role}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {e.company}
                  </p>
                </div>
                <span className="text-xs text-zinc-500">{e.period}</span>
              </div>
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                {e.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  }
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl"
        >
          <Moon className="h-6 w-6" /> Contact
        </motion.h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-zinc-200/60 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-zinc-900/50"
          >
            <div className="grid gap-4">
              <input
                required
                placeholder="Your name"
                className="rounded-xl border border-zinc-300/70 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-zinc-600 dark:border-white/10 dark:bg-zinc-800/70"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="rounded-xl border border-zinc-300/70 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-zinc-600 dark:border-white/10 dark:bg-zinc-800/70"
              />
              <textarea
                required
                placeholder="Message"
                rows={5}
                className="resize-none rounded-xl border border-zinc-300/70 bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-zinc-600 dark:border-white/10 dark:bg-zinc-800/70"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 active:scale-95 dark:bg-white dark:text-black"
              >
                <Send className="h-4 w-4" /> {sent ? "Sent!" : "Send Message"}
              </button>
            </div>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-zinc-200/60 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-zinc-900/50"
          >
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Prefer email? Reach me at{" "}
              <a
                href={BHINU.links.email}
                className="underline underline-offset-4"
              >
                bhinusantosh@gmail.com
              </a>
              . I’m always up for backend chats, ML rabbit holes, or debating
              tabs vs spaces (we all know the correct answer is tabs, right?).
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={BHINU.links.github}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/60 bg-white/70 px-4 py-2 text-sm text-zinc-700 backdrop-blur transition hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-800/60 dark:text-zinc-200"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={BHINU.links.linkedin}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/60 bg-white/70 px-4 py-2 text-sm text-zinc-700 backdrop-blur transition hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-800/60 dark:text-zinc-200"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={BHINU.links.resume}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/60 bg-white/70 px-4 py-2 text-sm text-zinc-700 backdrop-blur transition hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-800/60 dark:text-zinc-200"
              >
                <FileText className="h-4 w-4" /> Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-zinc-200/60 bg-white/70 p-4 text-sm text-zinc-500 backdrop-blur dark:border-white/10 dark:bg-zinc-900/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} {BHINU.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={BHINU.links.github}
              aria-label="GitHub"
              className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-white/5"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={BHINU.links.linkedin}
              aria-label="LinkedIn"
              className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-white/5"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={BHINU.links.email}
              aria-label="Email"
              className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-white/5"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-2xl border border-zinc-200/60 bg-white/80 px-3 py-2 text-xs text-zinc-700 shadow-lg backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-200"
        >
          Top <ArrowRight className="h-3 w-3 rotate-[-90deg]" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

// -------------------- ROOT ----------------------------------------------
export default function Portfolio() {
  const { dark, setDark } = useDarkMode();
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900 antialiased dark:from-zinc-950 dark:to-black dark:text-zinc-100">
      <Navbar onToggleTheme={() => setDark(!dark)} dark={dark} />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <ScrollTop />
      </main>
      <Footer />
    </div>
  );
}
