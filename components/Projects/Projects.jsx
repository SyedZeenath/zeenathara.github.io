"use client";

import { useRef, useCallback, useState } from "react";
import Link from "next/link";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { PROJECTS } from "../../lib/data";
import styles from "./Projects.module.css";

/* ── 3D tilt on mouse move ─────────────────────────────────── */
function handleTiltMove(e, card) {
  if (!card) return;
  const { left, top, width, height } = card.getBoundingClientRect();
  const x = (e.clientX - left) / width  - 0.5;
  const y = (e.clientY - top)  / height - 0.5;
  card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg) translateZ(4px)`;
}
function handleTiltLeave(card) {
  if (!card) return;
  card.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0)";
}

/* ── Icons ─────────────────────────────────────────────────── */
function PlayIcon()   { return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72L19.5 12z"/></svg>; }
function GitHubIcon() { return <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>; }
function ArrowIcon()  { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>; }

/* ── BPPV Full-width hero card ─────────────────────────────── */
function BppvHeroCard({ project }) {
  const revealRef   = useScrollReveal({ delay: 0 });
  const cardRef     = useRef(null);
  const [activeImg, setActiveImg] = useState(0);

  const onMove  = useCallback((e) => handleTiltMove(e, cardRef.current), []);
  const onLeave = useCallback(() => handleTiltLeave(cardRef.current), []);

  // Merge refs
  const setRef = useCallback((el) => {
    cardRef.current = el;
    revealRef.current = el;
  }, [revealRef]);

  return (
    <div className={styles.heroWrapper}>
      <article
        ref={setRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={styles.heroCard}
        style={{ willChange: "transform" }}
      >
        {/* Left: Image panel */}
        <div className={styles.heroImagePanel}>
          {project.images?.map((img, i) => (
            <div key={i} className={`${styles.heroImg} ${i === activeImg ? styles.heroImgActive : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} />
            </div>
          ))}

          {project.images?.length > 1 && (
            <div className={styles.thumbRow}>
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`${styles.thumb} ${i === activeImg ? styles.thumbActive : ""}`}
                  aria-label={img.alt}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt="" />
                </button>
              ))}
            </div>
          )}

          {project.prize && (
            <div className={styles.prizeBadge}>{project.prize}</div>
          )}
        </div>

        {/* Right: Content panel */}
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>{project.label}</span>
          <h3 className={styles.heroTitle}>{project.title}</h3>
          <p className={styles.heroTagline}>{project.tagline}</p>
          <p className={styles.heroDesc}>{project.description}</p>

          {/* Validated metrics */}
          {project.metrics && (
            <div className={styles.metricsGrid} aria-label="Validated results">
              {project.metrics.map(({ label, value, note }) => (
                <div key={label} className={styles.metric}>
                  <span className={styles.metricValue}>{value}</span>
                  <span className={styles.metricLabel}>{label}</span>
                  <span className={styles.metricNote}>{note}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech chips */}
          <div className={styles.techRow}>
            {project.tech.map(t => <span key={t} className={styles.chip}>{t}</span>)}
          </div>

          {/* Actions */}
          <div className={styles.heroActions}>
            {project.videoUrl && (
              <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                <PlayIcon /> Watch Demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                <GitHubIcon /> GitHub
              </a>
            )}
            {project.caseStudy && (
              <Link href={project.caseStudy} className={styles.btnPrimary}>
                View Case Study <ArrowIcon />
              </Link>
            )}
          </div>

          <div className={styles.outcome}>
            <span className={styles.outcomeDot} />
            {project.outcome}
          </div>
        </div>
      </article>
    </div>
  );
}

/* ── Regular card ────────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const revealRef = useScrollReveal({ delay: (index % 3) * 80 });
  const cardRef   = useRef(null);

  const setRef = useCallback((el) => {
    cardRef.current = el;
    revealRef.current = el;
  }, [revealRef]);

  const onMove  = useCallback((e) => handleTiltMove(e, cardRef.current), []);
  const onLeave = useCallback(() => handleTiltLeave(cardRef.current), []);

  return (
    <article
      ref={setRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={styles.card}
      style={{ willChange: "transform" }}
    >
      <div className={styles.cardTop}>
        <span className={styles.cardLabel}>{project.label}</span>
        {project.videoUrl && (
          <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className={styles.watchBtn}>
            <PlayIcon /> Watch Demo
          </a>
        )}
      </div>

      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>

      <div className={styles.techRow} style={{ flex: 1, alignItems: "flex-end" }}>
        {project.tech.map(t => <span key={t} className={styles.chip}>{t}</span>)}
      </div>

      <div className={styles.cardBottom}>
        <div className={styles.outcome}>
          <span className={styles.outcomeDot} />
          <span>{project.outcome}</span>
        </div>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="GitHub">
            <GitHubIcon />
          </a>
        )}
      </div>
    </article>
  );
}

/* ── Section ─────────────────────────────────────────────────── */
export default function Projects() {
  const headRef = useScrollReveal({ delay: 0 });
  const hero    = PROJECTS.find(p => p.featured === "hero");
  const rest    = PROJECTS.filter(p => p.featured !== "hero");
  const featured = rest.filter(p => p.featured === true);
  const regular  = rest.filter(p => !p.featured);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div ref={headRef} className={styles.labelRow}>
          <span className={styles.labelLine} />
          <span className={styles.label}>Projects</span>
        </div>

        {hero && <BppvHeroCard project={hero} />}

        {featured.length > 0 && (
          <div className={styles.featuredGrid}>
            {featured.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        )}

        {regular.length > 0 && (
          <div className={styles.restGrid}>
            {regular.map((p, i) => <ProjectCard key={p.id} project={p} index={i + featured.length} />)}
          </div>
        )}
      </div>
    </section>
  );
}