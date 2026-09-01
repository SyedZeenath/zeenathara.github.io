"use client";

import { useRef, useEffect, useCallback } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { ABOUT } from "../../lib/data";
import styles from "./About.module.css";

/* Count-up animation for stat numbers */
function animateCount(el, value, suffix, duration = 1400) {
  const numeric = parseFloat(value);
  if (isNaN(numeric)) { el.textContent = value + suffix; return; }
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * numeric) + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = value + suffix;
  };
  requestAnimationFrame(tick);
}

export default function About() {
  const headRef   = useScrollReveal({ delay: 0   });
  const bioRef    = useScrollReveal({ delay: 100 });
  const awardsRef = useScrollReveal({ delay: 180 });
  const statsRef  = useRef(null);
  const statRefs  = useRef([]);
  const triggered = useRef(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    el.classList.add("reveal");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          el.classList.add("is-revealed");
          statRefs.current.forEach((ref, i) => {
            if (!ref) return;
            const { value, suffix, noCount } = ABOUT.stats[i];
            if (noCount) { ref.textContent = value + suffix; return; }
            setTimeout(() => animateCount(ref, value, suffix), i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>

        <div ref={headRef} className={styles.labelRow}>
          <span className={styles.labelLine} aria-hidden="true" />
          <span className={styles.label}>About</span>
        </div>

        <div className={styles.grid}>

          {/* Bio column */}
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

            {/* Awards strip */}
            <div ref={awardsRef} className={styles.awards}>
              {ABOUT.awards.map(({ icon, text }) => (
                <div key={text} className={styles.award}>
                  <span className={styles.awardIcon}>{icon}</span>
                  <span className={styles.awardText}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats column */}
          <div ref={statsRef} className={styles.statsCol}>
            {ABOUT.stats.map(({ value, suffix, label }, i) => (
              <div key={label} className={styles.statCard}>
                <span
                  className={styles.statValue}
                  ref={el => statRefs.current[i] = el}
                >
                  {value}{suffix}
                </span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}