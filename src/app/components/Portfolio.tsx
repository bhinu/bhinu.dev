"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from "lucide-react";
const experience = [
  {
    company: "Holos",
    role: "Software Engineer · Industry Capstone",
    date: "Sep 2026 — Present",
    location: "Madison, WI",
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
    details: [
      "Automated Python/SQL ETL pipelines processing 500K+ records per day: 3× throughput and 15+ hours of manual work saved weekly.",
      "Designed the backing star-schema warehouse and Power BI dashboards serving 10K+ clients.",
    ],
    tools: "Python / SQL / Data modeling / Power BI",
  },
];

const sections = ["about", "experience", "projects"] as const;

const projects = [
  {
    name: "minicol",
    type: "Columnar storage engine",
    href: "https://github.com/bhinu/minicol",
    description:
      "Built a C++17 storage engine with adaptive compression, min/max zone maps, and batch execution. Dictionary string equality ran 19.7× faster than a naive row store on 1M synthetic rows.",
    note: "Educational prototype. Benchmark results depend on workload and machine.",
    tools: ["C++17", "Storage systems", "ASan / UBSan"],
    preview: "storage",
  },
  {
    name: "Videre",
    type: "On-device AI video editor",
    href: "https://github.com/bhinu/Videre",
    description:
      "Won the Qualcomm track at MadData 2026. Built the React/Electron front end and connected it to Whisper and SigLIP2 running locally on a Snapdragon NPU.",
    note: "Built in 36 hours. All AI inference runs on-device.",
    tools: ["TypeScript", "React", "Electron", "ONNX Runtime"],
    preview: "videre",
  },
  {
    name: "MuscleMemory",
    type: "Browser automation agent",
    href: "https://github.com/bhinu/MuscleMemory",
    description:
      "Built a browser agent that records human corrections and checks page landmarks before replaying them. Reduced manual interventions by 40% over 30 simulated days of site changes.",
    note: "Irreversible actions are excluded from automatic retries.",
    tools: ["Python", "Playwright", "FastAPI", "SQLite"],
    preview: "memory",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<string>("about");
  useEffect(() => {
    const update = () => {
      const marker = window.innerHeight * 0.28;
      let current: string = "about";
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= marker)
          current = id;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20
      )
        current = "projects";
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <div className="portfolio-shell">
        <header className="profile">
          <div>
            <a className="profile-home" href="#about">
              <h1>
                Bhinu Puvvala<span>.</span>
              </h1>
            </a>
            <p className="profile-role">Software Engineer</p>
            <p className="profile-description">
              Backend systems, data infrastructure,
              <br className="desktop-break" /> and applied machine learning.
            </p>
            <div className="profile-meta">
              <span>Madison, WI</span>
              <span>UW–Madison · Class of 2027</span>
            </div>
            <nav className="section-nav" aria-label="Section navigation">
              {sections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={active === id ? "active" : ""}
                  aria-current={active === id ? "location" : undefined}
                >
                  <span className="nav-line" />
                  {id[0].toUpperCase() + id.slice(1)}
                </a>
              ))}
            </nav>
          </div>
          <div className="profile-bottom">
            <a
              className="resume-link"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={15} />
              View resume <ArrowUpRight size={14} />
            </a>
            <div className="social-links">
              <a
                href="https://github.com/bhinu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/bhinu-puvvala"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:bhinusantosh@gmail.com" aria-label="Email Bhinu">
                <Mail size={20} />
              </a>
            </div>
            <p className="availability">
              <span />
              Open to 2027 new grad roles
            </p>
          </div>
        </header>
        <main id="content" className="content">
          <section
            id="about"
            aria-labelledby="about-title"
            className="about-section"
          >
            <h2 id="about-title">About</h2>
            <p>
              I’m a senior at the{" "}
              <strong>University of Wisconsin–Madison</strong>, studying
              Computer Science and Data Science with a certificate in Economic
              Analytics. I work on backend services, data pipelines, and machine
              learning systems.
            </p>
            <p>
              Currently, I’m working with <strong>Holos</strong> through an
              industry capstone, building a pipeline that turns Apple Vision Pro
              hand captures into robot training data. Previously, I built
              quantum simulation tooling at <strong>QubitSolve</strong> and
              production backend services at <strong>Methix</strong>.
            </p>
            <p>
              My projects include a C++ columnar storage engine, an offline AI
              video editor, and a browser agent that learns from human
              corrections.
            </p>
            <div className="education-line">
              <span>Graduating May 2027</span>
              <span>3.76 / 4.0 GPA · Dean’s List</span>
            </div>
          </section>
          <section id="experience" aria-labelledby="experience-title">
            <h2 id="experience-title">Experience</h2>
            <div className="experience-list">
              {experience.map((item) => (
                <article key={item.company} className="experience-row">
                  <div className="entry-date">{item.date}</div>
                  <div className="entry-body">
                    <h3>
                      {item.company}
                      {item.company === "Holos" && (
                        <span className="current-label">Current</span>
                      )}
                    </h3>
                    <p className="entry-role">{item.role}</p>
                    <p className="entry-location">{item.location}</p>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <ul className="tags" aria-label="Technologies">
                      {item.tools.split(" / ").map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <a
              className="inline-link full-resume"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View full resume <ArrowUpRight size={15} />
            </a>
          </section>
          <section id="projects" aria-labelledby="projects-title">
            <div className="section-title-row">
              <h2 id="projects-title">Selected projects</h2>
              <a
                href="https://github.com/bhinu"
                target="_blank"
                rel="noopener noreferrer"
              >
                All repositories <ArrowUpRight size={13} />
              </a>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-row" key={project.name}>
                  <a
                    className={`project-preview ${project.preview}`}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source code`}
                  >
                    {project.preview === "videre" ? (
                      <Image
                        src="/projects/videre.png"
                        alt="Videre video editor interface"
                        width={1920}
                        height={1440}
                        sizes="(max-width: 600px) 180px, 130px"
                      />
                    ) : project.preview === "storage" ? (
                      <div className="storage-preview" aria-hidden="true">
                        <span>minicol</span>
                        <div>
                          {Array.from({ length: 6 }, (_, i) => (
                            <i key={i} />
                          ))}
                        </div>
                        <small>C++17</small>
                      </div>
                    ) : (
                      <div className="memory-preview" aria-hidden="true">
                        <span>MuscleMemory</span>
                        <div>
                          <i />
                          <i />
                          <i />
                        </div>
                        <small>observe → recall → act</small>
                      </div>
                    )}
                  </a>
                  <div className="project-body">
                    <h3>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.name}
                        <ArrowUpRight size={17} />
                      </a>
                    </h3>
                    <p className="project-type">{project.type}</p>
                    <p className="project-description">{project.description}</p>
                    <p className="project-note">{project.note}</p>
                    <ul className="tags" aria-label="Technologies">
                      {project.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <div className="other-projects">
              <a
                href="https://github.com/bhinu/WhismurAI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  WhismurAI
                  <small>Real-time speech translation · 20+ languages</small>
                </span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href="https://github.com/bhinu/Gesture"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  Gesture<small>Gesture-based computer control</small>
                </span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </section>
          <footer className="page-footer">
            <p>Interested in working together?</p>
            <a className="email-link" href="mailto:bhinusantosh@gmail.com">
              bhinusantosh@gmail.com <ArrowUpRight size={16} />
            </a>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} Bhinu Puvvala</span>
              <a href="#about">Back to top ↑</a>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
