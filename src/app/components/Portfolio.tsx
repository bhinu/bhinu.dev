"use client";

import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const experience = [
  {
    role: "Software Engineering Intern",
    company: "Methix (Microsoft-backed)",
    location: "New York, NY",
    period: "May – Aug 2025",
    bullets: [
      "Reduced p95 API latency by 30% for 5,000+ weekly users via Redis caching across Python/Flask services",
      "Cut database query time by 52% (250ms → 120ms) by redesigning PostgreSQL indexes — sustained 2× peak traffic",
      "Shipped production observability: structured logging, distributed tracing, automated health checks",
    ],
  },
  {
    role: "Undergraduate Researcher",
    company: "GLUE Lab, UW–Madison",
    location: "Madison, WI",
    period: "Jan – May 2025",
    bullets: [
      "Distributed pipelines over 10TB+ multispectral data with Dask & GeoPandas — cut inference latency by 86%",
      "Improved scene classification accuracy by 20% via automated feature extraction modules",
      "Reduced false positive rate by 53% through ablation testing across geographic regions",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Diyar United Company",
    location: "Kuwait City",
    period: "Jun – Aug 2024",
    bullets: [
      "Automated Python/SQL ETL pipelines processing 500K+ records/day — 3× throughput, eliminating 15+ hrs/week",
      "Designed star-schema data warehouse + Power BI dashboards serving 10K+ clients",
    ],
  },
];

const projects = [
  {
    name: "Videre",
    badge: "🏆 Qualcomm Track Winner · MadData 2026",
    badgeColor: "#FBBF24",
    badgeBg: "rgba(251, 191, 36, 0.10)",
    desc: "Fully offline, privacy-first AI video editor running entirely on-device with zero cloud dependency. Deployed Whisper & SigLIP2 via ONNX Runtime QNN for on-chip NPU acceleration — real-time transcription with word-level timestamps on edge hardware.",
    stat: "0",
    statLabel: "cloud deps · real-time NPU inference",
    tech: ["Qualcomm NPU", "ONNX Runtime QNN", "Whisper", "SigLIP2", "FFmpeg", "React + Electron"],
    cols: "col-span-12 md:col-span-7",
  },
  {
    name: "WhismurAI",
    badge: null,
    badgeColor: "",
    badgeBg: "",
    desc: "Real-time audio translation pipeline supporting 20+ languages. Streaming STT → semantic translation → TTS under strict sub-second latency constraints, preserving speaker identity across passes.",
    stat: "20+",
    statLabel: "languages · sub-second latency",
    tech: ["React", "FastAPI", "Web Audio API", "Deepgram", "OpenAI", "Fish Audio"],
    cols: "col-span-12 md:col-span-5",
  },
  {
    name: "Gesture",
    badge: null,
    badgeColor: "",
    badgeBg: "",
    desc: "Real-time human-computer interaction via gesture recognition. 98% accuracy at 30ms latency with 12+ user-defined commands integrated with productivity tools.",
    stat: "98%",
    statLabel: "accuracy · 30ms latency",
    tech: ["TensorFlow", "MediaPipe", "OpenCV", "Electron.js"],
    cols: "col-span-12 md:col-span-6",
  },
  {
    name: "Memory Allocator",
    badge: null,
    badgeColor: "",
    badgeBg: "",
    desc: "Custom heap allocator in C with malloc/free/realloc, block splitting, coalescing, segregated free-list, and per-arena mutex locking for zero-contention concurrent allocation.",
    stat: "0",
    statLabel: "memory leaks · thread-safe",
    tech: ["C", "pthreads", "Linux"],
    cols: "col-span-12 md:col-span-6",
  },
];

const skills: Record<string, string[]> = {
  Languages:             ["Python", "C/C++", "TypeScript", "JavaScript", "Java", "SQL", "Bash"],
  "Frameworks":          ["React", "FastAPI", "Flask", "Next.js", "Electron", "TensorFlow", "PyTorch", "ONNX Runtime"],
  "Data & Processing":   ["Pandas", "NumPy", "Dask", "GeoPandas", "FFmpeg", "OpenCV"],
  Infrastructure:        ["Docker", "Redis", "PostgreSQL", "Kubernetes", "MongoDB", "MySQL", "CI/CD"],
};

const accentSkills = new Set([
  "Python", "C/C++", "TypeScript", "React", "FastAPI", "Flask", "Docker", "Redis", "PostgreSQL",
]);

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const stagger: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// ─── NAV ──────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav
      style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(8, 8, 9, 0.82)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        padding: "0 24px",
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--t1)", letterSpacing: "-0.01em" }}>
        Bhinu Puvvala
      </span>
      <div style={{ display: "flex", gap: "4px" }}>
        {[
          { label: "LinkedIn", href: "https://linkedin.com/in/bhinu-santosh", icon: <Linkedin size={14} /> },
          { label: "GitHub",   href: "https://github.com/bhinu",              icon: <Github size={14} /> },
          { label: "Email",    href: "mailto:bhinusantosh@gmail.com",          icon: <Mail size={14} /> },
        ].map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="nav-link"
          >
            {icon}
            <span className="hidden sm:inline">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={stagger}
      style={{ marginBottom: "40px", padding: "0 4px" }}
    >
      {/* Status badge */}
      <motion.div variants={fadeUp}>
        <span
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontSize: "12px", fontWeight: 500,
            color: "var(--success)",
            background: "var(--success-dim)",
            border: "1px solid rgba(74, 222, 128, 0.2)",
            padding: "4px 10px", borderRadius: "100px",
            marginBottom: "20px",
            fontFamily: "var(--font-mono), monospace",
            letterSpacing: "0.02em",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--success)", animation: "pulse-dot 2s infinite", display: "block" }} />
          Available for opportunities · Summer 2026
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        style={{
          fontSize: "clamp(40px, 6vw, 68px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          color: "var(--t1)",
          marginBottom: "16px",
        }}
      >
        Bhinu{" "}
        <span style={{ color: "var(--primary)" }}>Puvvala</span>
      </motion.h1>

      {/* Sub */}
      <motion.p
        variants={fadeUp}
        style={{
          fontSize: "17px", color: "var(--t2)", fontWeight: 400,
          maxWidth: "520px", lineHeight: 1.65, marginBottom: "28px",
        }}
      >
        Software Engineer & Data Scientist building systems that perform at scale — from distributed pipelines to on-device AI.
      </motion.p>

      {/* CTAs */}
      <motion.div variants={fadeUp} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <a href="mailto:bhinusantosh@gmail.com" className="btn-primary">
          Get in touch <ArrowUpRight size={15} />
        </a>
        <a href="https://github.com/bhinu" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <Github size={15} /> github.com/bhinu
        </a>
        <a href="https://linkedin.com/in/bhinu-santosh" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <Linkedin size={15} /> LinkedIn
        </a>
      </motion.div>
    </motion.section>
  );
}

// ─── EXPERIENCE CARD ──────────────────────────────────────────────────────────

function ExperienceCard() {
  return (
    <motion.div
      className="bento-card col-span-12 md:col-span-7"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="card-label">Experience</p>
      <div>
        {experience.map((exp, i) => (
          <div
            key={exp.company}
            style={{
              paddingTop:    i === 0 ? 0 : 16,
              paddingBottom: i === experience.length - 1 ? 0 : 16,
              borderBottom:  i < experience.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            {/* Role + date */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: "var(--t1)", letterSpacing: "-0.01em" }}>
                {exp.role}
              </span>
              <span style={{ fontSize: 12, color: "var(--t3)", fontFamily: "var(--font-mono), monospace", whiteSpace: "nowrap", paddingTop: 2 }}>
                {exp.period}
              </span>
            </div>

            {/* Company */}
            <p style={{ fontSize: 13, color: "var(--primary)", fontWeight: 500, marginBottom: 8 }}>
              {exp.company} · {exp.location}
            </p>

            {/* Bullets */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 5 }}>
              {exp.bullets.map((b, bi) => (
                <li key={bi} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--t2)", lineHeight: 1.55 }}>
                  <span style={{ color: "var(--t3)", flexShrink: 0, marginTop: 1 }}>—</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── EDUCATION CARD ───────────────────────────────────────────────────────────

function EducationCard() {
  return (
    <motion.div
      className="bento-card col-span-12 md:col-span-5"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
    >
      <p className="card-label">Education</p>

      <p style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--t1)", marginBottom: 4 }}>
        University of Wisconsin–Madison
      </p>
      <p style={{ fontSize: 13, color: "var(--t2)", lineHeight: 1.55, marginBottom: 6 }}>
        B.S. Computer Science & Data Science<br />Minor: Economic Analytics
      </p>
      <p style={{ fontSize: 12, color: "var(--t3)", fontFamily: "var(--font-mono), monospace", marginBottom: 16 }}>
        Expected May 2027
      </p>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
        {[
          { val: "3.74", label: "GPA · Dean's List" },
          { val: "May '27", label: "Graduating" },
        ].map(({ val, label }) => (
          <div key={label} className="stat-box">
            <div className="stat-val">{val}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      {/* Coursework */}
      <div style={{ paddingTop: 16, borderTop: "1px solid var(--border)" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--t3)", marginBottom: 10 }}>
          Coursework
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {["Operating Systems", "Algorithms & DS", "Big Data Systems", "Computer Vision", "Econometrics", "Machine Org."].map((c) => (
            <span key={c} className="pill">{c}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── SKILLS CARD ──────────────────────────────────────────────────────────────

function SkillsCard() {
  return (
    <motion.div
      className="bento-card col-span-12"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="card-label">Technical Skills</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--t3)", marginBottom: 10 }}>
              {group}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {items.map((skill) => (
                <span key={skill} className={`pill${accentSkills.has(skill) ? " accent" : ""}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────

function ProjectCard({ p, delay }: { p: typeof projects[0]; delay: number }) {
  return (
    <motion.a
      href="https://github.com/bhinu"
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card ${p.cols}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      <ArrowUpRight size={16} className="arrow" />

      {p.badge && (
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            fontSize: 11, fontWeight: 600,
            color: p.badgeColor,
            background: p.badgeBg,
            border: `1px solid ${p.badgeColor}44`,
            padding: "3px 8px", borderRadius: "100px",
            marginBottom: 12,
            fontFamily: "var(--font-mono), monospace",
          }}
        >
          {p.badge}
        </div>
      )}

      <p style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--t1)", marginBottom: 6 }}>
        {p.name}
      </p>
      <p style={{ fontSize: 13, color: "var(--t2)", lineHeight: 1.6, marginBottom: 16 }}>
        {p.desc}
      </p>

      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--primary)", lineHeight: 1, marginBottom: 4 }}>
          {p.stat}
        </div>
        <div style={{ fontSize: 11, color: "var(--t3)", fontWeight: 500 }}>{p.statLabel}</div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {p.tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </motion.a>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <motion.div
      className="bento-card"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ textAlign: "center", padding: "52px 48px", marginTop: 10, position: "relative" }}
    >
      <div className="contact-glow" />
      <p style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--t1)", marginBottom: 10 }}>
        Let&apos;s build something.
      </p>
      <p style={{ fontSize: 15, color: "var(--t2)", marginBottom: 32 }}>
        Open to SWE internships, research roles, and interesting side projects.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
        <a href="mailto:bhinusantosh@gmail.com" className="btn-primary">
          bhinusantosh@gmail.com <ArrowUpRight size={15} />
        </a>
        <a href="https://linkedin.com/in/bhinu-santosh" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <Linkedin size={15} /> LinkedIn
        </a>
        <a href="https://github.com/bhinu" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <Github size={15} /> GitHub
        </a>
      </div>
    </motion.div>
  );
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div className="dot-grid" />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav />

        <main style={{ maxWidth: 1160, margin: "0 auto", padding: "48px 24px 80px" }}>
          <Hero />

          {/* Background section */}
          <p className="section-label" style={{ marginBottom: 12, padding: "0 4px" }}>Background</p>
          <div className="grid grid-cols-12 gap-[10px] mb-[10px]">
            <ExperienceCard />
            <EducationCard />
          </div>
          <div className="grid grid-cols-12 gap-[10px]">
            <SkillsCard />
          </div>

          {/* Projects section */}
          <div style={{ margin: "40px 0 12px", padding: "0 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p className="section-label">Projects</p>
            <a
              href="https://github.com/bhinu"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 12, color: "var(--t3)", textDecoration: "none", transition: "color 0.15s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--t2)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--t3)")}
            >
              View all on GitHub →
            </a>
          </div>
          <div className="grid grid-cols-12 gap-[10px]">
            {projects.map((p, i) => (
              <ProjectCard key={p.name} p={p} delay={i * 0.05} />
            ))}
          </div>

          <Contact />
        </main>

        <footer style={{ textAlign: "center", padding: "24px", fontSize: 12, color: "var(--t3)", borderTop: "1px solid var(--border)" }}>
          Bhinu Puvvala · {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
