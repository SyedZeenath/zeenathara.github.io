"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import { SKILLS } from "../../lib/data";
import styles from "./Skills.module.css";

export default function Skills() {
  const headRef = useScrollReveal({ delay: 0 });

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>

        <div ref={headRef} className={styles.labelRow}>
          <span className={styles.labelLine} aria-hidden="true" />
          <span className={styles.label}>Skills</span>
        </div>

        <div className={styles.grid}>
          {SKILLS.map((cat, i) => (
            <SkillCategory key={cat.category} category={cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function SkillCategory({ category, index }) {
  const ref = useScrollReveal({ delay: index * 70 });

  return (
    <div ref={ref} className={styles.cat}>
      <div className={styles.catHeader}>
        <span className={styles.catIcon} aria-hidden="true">{category.icon}</span>
        <h3 className={styles.catTitle}>{category.category}</h3>
      </div>
      <div className={styles.pills} role="list" aria-label={`${category.category} skills`}>
        {category.items.map((item) => (
          <span key={item} className={styles.pill} role="listitem">{item}</span>
        ))}
      </div>
    </div>
  );
}
