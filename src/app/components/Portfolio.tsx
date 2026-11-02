"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  Github,
  Menu,
  X,
} from "lucide-react";

const experience = [
  {
    company: "Holos",
    role: "Software Engineer · Industry Capstone",
    date: "Sep 2026 — Present",
    location: "Madison, WI",
    summary: "Turning human demonstrations into robot training data.",
    details: [
      "Building a Python ingest and labeling pipeline for Apple Vision Pro captures, with CI in Azure DevOps.",
      "Developing action segmentation and grasp classification over 52-point bimanual hand captures: reach, grasp, insert, fasten, release.",
    ],
    tools: "Python / Azure DevOps / Computer vision",
  },
  {
    company: "QubitSolve",
    role: "Software Engineering Intern",
    date: "Jun — Aug 2026",
    location: "Morgantown, WV · NSF-funded",
    summary: "From two hours in a spreadsheet to seconds in a service.",
    details: [
      "Shipped a Python feasibility engine and a FastAPI cost-estimation service spanning AWS EC2 and five quantum backends.",
      "Replaced an ineffective stability check with interval intersection. Derived circuit gate counts analytically to stay within a 500 ms latency budget.",
      "Built budget caps and memory-aware instance routing; presented the engine’s design and results to the CEO and board.",
    ],
    tools: "Python / FastAPI / AWS / Qiskit",
  },
  {
    company: "Methix",
    role: "Software Engineering Intern",
    date: "May — Aug 2025",
    location: "New York, NY · Microsoft-backed",
    summary: "Faster APIs. Faster releases. A backend ready for traffic.",
    details: [
      "Reduced p95 API latency 30% for 5,000+ weekly users with Redis caching across Flask services on Azure.",
      "Cut PostgreSQL query latency from 250 ms to 120 ms and deployment time by 80% for a four-engineer backend team.",
      "Secured 45+ endpoints with JWT, role-based access, and per-tier rate limits.",
    ],
    tools: "Flask / Redis / PostgreSQL / Azure",
  },
  {
    company: "GLUE Lab",
    role: "Undergraduate Researcher · UW–Madison",
    date: "Jan — May 2025",
    location: "Prof. Holly Gibbs",
    summary: "Making ten terabytes of satellite imagery tractable.",
    details: [
      "Cut pipeline runtime 86% by distributing tile-level PyTorch inference with Dask over 10 TB+ of Brazilian satellite imagery.",
      "Improved cattle-confinement classification accuracy 20% against expert-labeled ground truth by fine-tuning YOLOv8 and CSRNet.",
    ],
    tools: "PyTorch / Dask / GeoPandas / YOLOv8",
  },
  {
    company: "Diyar United",
    role: "Data Engineering Intern",
    date: "Jun — Aug 2024",
    location: "Kuwait City, Kuwait",
    summary: "Half a million daily records. A lot less manual work.",
    details: [
      "Automated Python/SQL ETL pipelines processing 500K+ records per day: 3× throughput and 15+ hours of manual work saved weekly.",
      "Designed the backing star-schema warehouse and Power BI dashboards serving 10K+ clients.",
    ],
    tools: "Python / SQL / Data modeling / Power BI",
  },
];

function StorageDemo() {
  const [pruning, setPruning] = useState(true);
  return (
    <div className="storage-demo">
      <div className="demo-top">
        <span>minicol / query explorer</span>
        <span className="live-mark">Interactive model</span>
      </div>
      <div className="query">
        <span>SELECT</span> count(*) <span>FROM</span> events
        <br />
        <span>WHERE</span> id <span>BETWEEN</span> 0 <span>AND</span> 65535;
      </div>
      <div className="demo-control">
        <span>Row groups read</span>
        <button
          aria-pressed={pruning}
          onClick={() => setPruning(!pruning)}
          className="toggle"
        >
          Zone maps <span>{pruning ? "ON" : "OFF"}</span>
          <i className={pruning ? "switch enabled" : "switch"} />
        </button>
      </div>
      <div className="row-groups" aria-hidden="true">
        {Array.from({ length: 16 }, (_, i) => (
          <div key={i} className={!pruning || i === 0 ? "read" : "skipped"}>
            <span>{String(i).padStart(2, "0")}</span>
            <div />
            <div />
            <div />
          </div>
        ))}
      </div>
      <div className="demo-result" aria-live="polite">
        <strong>
          {pruning ? "01" : "16"}
          <small> / 16</small>
        </strong>
        <p>
          {pruning
            ? "Read what matters. Skip the rest."
            : "Every group read. Even the irrelevant ones."}
          <span>
            {pruning
              ? "15 groups eliminated before reading column data."
              : "Turn zone maps on to prune irrelevant groups."}
          </span>
        </p>
      </div>
      <p className="demo-note">
        Illustrative sorted data · a model of the pruning mechanism, not a live
        engine benchmark.
      </p>
    </div>
  );
}

function VidereVisual() {
  return (
    <div
      className="videre-visual"
      aria-label="Illustration of Videre’s transcript-driven editing workflow"
    >
      <div className="video-header">
        <span>videre</span>
        <span>
          LOCAL INFERENCE <i />
        </span>
      </div>
      <div className="video-scene">
        <svg
          viewBox="0 0 500 180"
          role="img"
          aria-label="Abstract landscape video frame"
        >
          <path
            d="M0 180V118L105 40L192 126L280 18L405 122L457 74L500 116V180Z"
            fill="#768d76"
          />
          <path d="M0 180L146 113L227 162L360 67L500 169V180Z" fill="#bdd2a4" />
          <circle cx="405" cy="38" r="17" fill="#e8e4b2" />
        </svg>
        <span>Preview illustration</span>
      </div>
      <div className="transcript">
        <span>00:12</span>
        <p>
          Edit video <mark>by editing words.</mark>
        </p>
      </div>
      <div className="timeline">
        {[
          25, 40, 65, 30, 75, 90, 40, 60, 35, 85, 55, 95, 65, 30, 80, 50, 70,
          40, 60, 85, 45, 30, 70, 90, 55, 40, 75, 35, 65, 80,
        ].map((v, i) => (
          <i key={i} style={{ height: `${v}%` }} />
        ))}
      </div>
      <div className="video-footer">
        <span>Whisper → Transcript → FFmpeg</span>
        <span>100% on device</span>
      </div>
    </div>
  );
}

function MemoryVisual() {
  const [step, setStep] = useState(0);
  const labels = [
    "Agent meets a changed page",
    "Human corrects the workflow",
    "Fix stored with page landmarks",
    "Valid fix recalled; unsafe retries blocked",
  ];
  return (
    <div className="memory-visual">
      <div className="memory-head">
        <span>MuscleMemory</span>
        <span>Workflow model</span>
      </div>
      <div className="memory-flow">
        {["Observe", "Correct", "Remember", "Replay"].map((label, i) => (
          <button
            key={label}
            onClick={() => setStep(i)}
            aria-pressed={step === i}
            className={step === i ? "active" : ""}
          >
            <span>
              {i < step ? <Check size={16} /> : String(i + 1).padStart(2, "0")}
            </span>
            {label}
          </button>
        ))}
      </div>
      <div className="memory-caption" aria-live="polite">
        <span>{String(step + 1).padStart(2, "0")} / 04</span>
        <p>{labels[step]}</p>
      </div>
      <p className="memory-note">Human corrections become reusable memory.</p>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="Bhinu Puvvala home">
          bhinu<span>.</span>
        </a>
        <nav
          id="mobile-nav"
          aria-label="Main navigation"
          className={menuOpen ? "navigation open" : "navigation"}
        >
          {[
            ["Work", "#work"],
            ["Experience", "#experience"],
            ["About", "#about"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
          >
            Resume <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main">
        <section className="intro wrap" aria-labelledby="intro-title">
          <div className="intro-top">
            <p>Bhinu Puvvala</p>
            <p>Software engineer · Madison, WI</p>
          </div>
          <h1 id="intro-title">
            Good systems.
            <br />
            Down to the <em>details.</em>
          </h1>
          <div className="intro-bottom">
            <p>
              I build across the stack, from the bytes a database reads to the
              decisions an AI agent makes. Computer Science & Data Science at
              UW–Madison, graduating May 2027.
            </p>
            <div className="intro-actions">
              <a className="button primary" href="#work">
                Explore my work <ArrowDown size={17} />
              </a>
              <a className="text-link" href="mailto:bhinusantosh@gmail.com">
                Let’s talk <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="current">
            <span className="status-dot" />
            Currently at Holos <span className="current-separator">/</span>
            <span>Teaching robots through human demonstrations.</span>
          </div>
        </section>
        <section
          id="work"
          className="work-section wrap"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <h2 id="work-title">
              Selected work<span> / </span>
            </h2>
            <span>Systems, intelligence, and everything between.</span>
          </div>
          <article className="featured-project">
            <div className="project-copy">
              <div className="project-category">C++17 · Storage systems</div>
              <h3>minicol</h3>
              <p className="project-deck">
                The fastest data is the data you never read.
              </p>
              <p>
                A columnar storage engine built from scratch. Adaptive
                compression, min/max zone maps, and batch execution turn storage
                layout into less work for every query.
              </p>
              <div className="project-proof">
                <strong>19.7×</strong>
                <span>
                  faster dictionary string equality
                  <br />
                  vs. a naive row store*
                </span>
              </div>
              <a
                className="text-link"
                href="https://github.com/bhinu/minicol"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore the engine <ArrowUpRight size={17} />
              </a>
              <p className="footnote">
                *1M synthetic rows, measured benchmark. Educational prototype;
                results depend on workload and machine.
              </p>
            </div>
            <StorageDemo />
          </article>
          <div className="project-pair">
            <article className="project-secondary">
              <VidereVisual />
              <div className="project-heading">
                <h3>Videre</h3>
                <a
                  href="https://github.com/bhinu/Videre"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Videre on GitHub"
                >
                  <ArrowUpRight />
                </a>
              </div>
              <p className="project-tagline">Your footage stays yours.</p>
              <p>
                An offline AI video editor running Whisper and SigLIP2 on a
                Snapdragon NPU. I owned the React, Electron, and TypeScript
                front end and connected it to the local inference runtime.
              </p>
              <div className="project-bottom">
                <span className="award">
                  Qualcomm track winner · MadData 2026
                </span>
                <span>Built in 36 hours</span>
              </div>
            </article>
            <article className="project-secondary">
              <MemoryVisual />
              <div className="project-heading">
                <h3>MuscleMemory</h3>
                <a
                  href="https://github.com/bhinu/MuscleMemory"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View MuscleMemory on GitHub"
                >
                  <ArrowUpRight />
                </a>
              </div>
              <p className="project-tagline">
                An agent that learns from the fix.
              </p>
              <p>
                A browser agent that remembers human corrections, validates page
                landmarks, and blocks retries of irreversible actions. Python,
                Playwright, FastAPI, and SQLite.
              </p>
              <div className="project-bottom">
                <span>40% fewer manual interventions</span>
                <span>30 simulated days of site changes</span>
              </div>
            </article>
          </div>
          <div className="more-work">
            <span>Also built</span>
            <a
              href="https://github.com/bhinu/WhismurAI"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhismurAI{" "}
              <span>Real-time speech translation · 20+ languages</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              href="https://github.com/bhinu/Gesture"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gesture <span>Gesture-based computer control</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              className="all-work"
              href="https://github.com/bhinu"
              target="_blank"
              rel="noopener noreferrer"
            >
              All repositories <Github size={17} />
            </a>
          </div>
        </section>
        <section
          id="experience"
          className="experience-section"
          aria-labelledby="experience-title"
        >
          <div className="wrap">
            <div className="section-heading">
              <h2 id="experience-title">
                Where I’ve built<span> / </span>
              </h2>
              <span>From production services to research pipelines.</span>
            </div>
            <div className="experience-list">
              {experience.map((item, i) => (
                <article className="experience" key={item.company}>
                  <div className="experience-meta">
                    <p className="date">{item.date}</p>
                    <h3>
                      {item.company}
                      {i === 0 && (
                        <span
                          className="present-dot"
                          aria-label="Current role"
                        />
                      )}
                    </h3>
                    <p>{item.role}</p>
                    <span className="location">{item.location}</span>
                  </div>
                  <div className="experience-story">
                    <h4>{item.summary}</h4>
                    <ul>
                      {item.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                    <p className="tools">{item.tools}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="about"
          className="about-section wrap"
          aria-labelledby="about-title"
        >
          <div>
            <h2 id="about-title">
              Curiosity, all the
              <br />
              way down.
            </h2>
            <p className="about-lead">
              I like finding the part of a system that doesn’t have to be slow,
              fragile, or complicated.
            </p>
            <p>
              That’s taken me from quantum simulation tooling to satellite
              imagery, from a C++ storage engine to AI that runs entirely on a
              laptop. I’m drawn to work where understanding the details changes
              what you can build.
            </p>
            <a
              className="text-link"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my resume <Download size={17} />
            </a>
          </div>
          <aside className="education">
            <h3>University of Wisconsin–Madison</h3>
            <p>B.S. Computer Science & Data Science</p>
            <p>Certificate in Economic Analytics</p>
            <div className="education-facts">
              <span>
                May 2027 <small>Expected graduation</small>
              </span>
              <span>
                3.76 / 4.0 <small>GPA · Dean’s List</small>
              </span>
            </div>
            <h4>My working toolkit</h4>
            <dl>
              <div>
                <dt>Build</dt>
                <dd>Python, C/C++, TypeScript, React, FastAPI, Flask</dd>
              </div>
              <div>
                <dt>Scale</dt>
                <dd>PostgreSQL, Redis, Docker, AWS, Azure, CI/CD</dd>
              </div>
              <div>
                <dt>Learn</dt>
                <dd>PyTorch, Dask, ONNX Runtime, Qiskit, Playwright</dd>
              </div>
            </dl>
          </aside>
        </section>
        <section className="contact wrap" aria-labelledby="contact-title">
          <div>
            <p>Looking ahead to new grad roles in 2027.</p>
            <h2 id="contact-title">
              Let’s build
              <br />
              <em>something good.</em>
            </h2>
          </div>
          <div className="contact-links">
            <a href="mailto:bhinusantosh@gmail.com">
              bhinusantosh@gmail.com <ArrowUpRight size={22} />
            </a>
            <a
              href="https://linkedin.com/in/bhinu-puvvala"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight size={22} />
            </a>
            <a
              href="https://github.com/bhinu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={22} />
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <a href="#" className="wordmark">
          bhinu<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Bhinu Puvvala</p>
        <a href="#main">
          Back to top <ArrowRight size={14} />
        </a>
      </footer>
    </>
  );
}
