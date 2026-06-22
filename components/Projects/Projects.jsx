"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import { PROJECTS } from "../../lib/data";
import styles from "./Projects.module.css";

export default function Projects() {
  const headRef = useScrollReveal({ delay: 0 });

  const featured = PROJECTS.filter((p) => p.featured);
  const rest      = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>

        <div ref={headRef} className={styles.labelRow}>
          <span className={styles.labelLine} aria-hidden="true" />
          <span className={styles.label}>Projects</span>
        </div>

        {/* Featured row — 2 equal columns */}
        <div className={styles.featuredGrid}>
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} size="large" />
          ))}
        </div>

        {/* Rest — 3-column grid */}
        <div className={styles.restGrid}>
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i + featured.length} size="small" />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index, size }) {
  const ref = useScrollReveal({ delay: (index % 3) * 80 });

  return (
    <article ref={ref} className={`${styles.card} ${size === "large" ? styles.cardLarge : styles.cardSmall}`}>

      {/* Top */}
      <div className={styles.cardTop}>
        <span className={styles.cardLabel}>{project.label}</span>
        {project.videoUrl && (
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.watchBtn}
            aria-label={`Watch demo for ${project.title}`}
          >
            <WatchIcon />
            Watch Demo
          </a>
        )}
      </div>

      {/* Body */}
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>

      {/* Tech chips */}
      <div className={styles.techRow} aria-label="Technologies used">
        {project.tech.map((t) => (
          <span key={t} className={styles.chip}>{t}</span>
        ))}
      </div>

      {/* Outcome */}
      <div className={styles.outcome}>
        <span className={styles.outcomeDot} aria-hidden="true" />
        {project.outcome}
      </div>

    </article>
  );
}

function WatchIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v13.72L19.5 12 8 5.14z" />
    </svg>
  );
}
