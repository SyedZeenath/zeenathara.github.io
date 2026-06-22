"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import { ABOUT } from "../../lib/data";
import styles from "./About.module.css";

export default function About() {
  const headRef  = useScrollReveal({ delay: 0   });
  const bioRef   = useScrollReveal({ delay: 100 });
  const statsRef = useScrollReveal({ delay: 200 });

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>

        {/* Section label */}
        <div ref={headRef} className={styles.labelRow}>
          <span className={styles.labelLine} aria-hidden="true" />
          <span className={styles.label}>About</span>
        </div>

        <div className={styles.grid}>

          {/* Bio */}
          <div ref={bioRef} className={styles.bioCol}>
            <h2 className={styles.heading}>
              Engineer at the edge of<br />
              <em className={styles.headingAccent}>AI and the physical world.</em>
            </h2>
            <div className={styles.bioParagraphs}>
              {ABOUT.bio.map((p, i) => (
                <p key={i} className={styles.para}>{p}</p>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className={styles.statsCol}>
            {ABOUT.stats.map(({ value, label }) => (
              <div key={label} className={styles.statCard}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
