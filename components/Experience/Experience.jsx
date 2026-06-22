"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import { EXPERIENCE } from "../../lib/data";
import styles from "./Experience.module.css";

export default function Experience() {
  const headRef = useScrollReveal({ delay: 0 });

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>

        <div ref={headRef} className={styles.labelRow}>
          <span className={styles.labelLine} aria-hidden="true" />
          <span className={styles.label}>Experience</span>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCE.map((item, i) => (
            <ExperienceItem key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ExperienceItem({ item, index }) {
  const ref = useScrollReveal({ delay: index * 120 });

  return (
    <div ref={ref} className={styles.item}>
      {/* Timeline node */}
      <div className={styles.node} aria-hidden="true">
        <span className={styles.dot} style={{ background: item.accent }} />
        <span className={styles.line} />
      </div>

      {/* Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.company}>{item.company}</h3>
            <p className={styles.role}>{item.role}</p>
          </div>
          <div className={styles.meta}>
            <span className={styles.period}>{item.period}</span>
            <span className={styles.location}>{item.location}</span>
          </div>
        </div>

        <ul className={styles.bullets} role="list">
          {item.bullets.map((b, i) => (
            <li key={i} className={styles.bullet}>
              <span className={styles.bulletDot} style={{ background: item.accent }} aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
