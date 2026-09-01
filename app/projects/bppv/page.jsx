"use client";

import Link from "next/link";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import styles from "./page.module.css";

const TECH = [
  "Arduino Uno (16MHz bare-metal)", "PCA9685 PWM driver", "6× DF9GMS micro-servo",
  "MPU6050 IMU + DMP quaternion output", "Kalman Filter (per-axis scalar)",
  "Unity 3D (C#)", "SolidWorks (eye globes + spools)", "Google Cloud TTS (en-GB-Neural2-F)",
  "Google Cloud STT", "Python (evaluation scripts)", "Nylon tendon capstan actuation",
];

const CONTRIBUTIONS = [
  {
    title: "Gimbal-Lock-Free IMU Pipeline",
    body: "Standard Euler decomposition (dmpGetYawPitchRoll) collapsed during the Dix-Hallpike lie-back at pitch > 30°, producing 60–90° yaw jumps. Replaced with direct quaternion extraction using atan2/arcsin formulations that remain well-conditioned across the full maneuver range. Validated against held reference poses (1.40° mean absolute error).",
  },
  {
    title: "Six-Phase Nystagmus State Machine",
    body: "Non-blocking millis()-based state machine on Arduino: Latency → Crescendo → Nystagmus (slow/fast beat cycle with exponential envelope) → Decrescendo → Reversal. Parameterized from Liu et al.'s 3D video nystagmography data of 84 confirmed BPPV patients, not healthy-population proxies.",
  },
  {
    title: "Tendon-Driven Eye Mechanism",
    body: "3D-printed eye globes (30mm diameter, designed in SolidWorks) with six tendon attachment tabs forming three antagonist pairs. Capstan spool geometry gives kinematic transmission ratio 3.75:1. Software gains (torsion 4.0, vertical/horizontal 3.5) compensate tendon elasticity. Backlash-free by design.",
  },
  {
    title: "Patient-Specific Assessment Protocol",
    body: "Hidden JSON patient profile sets BPPV side and type invisible to the trainee. Confirmed-yaw-lock step detection (9-step protocol) triggers conjugate nystagmus only when the trainee genuinely positions to the correct side - preventing guessing. 10/10 correct side selection across all trials.",
  },
  {
    title: "Speech-Driven Diagnosis Pipeline",
    body: "Google Cloud TTS delivers procedural guidance (en-GB-Neural2-F voice) with a completion guard preventing premature step advancement. STT captures spoken diagnosis, lowercased and matched against keyword sets for 4 BPPV types. Rule-based, fully auditable - no LLM hallucination risk in a clinical training context.",
  },
  {
    title: "Unity Digital Twin at 100Hz",
    body: "Arduino broadcasts a combined IMU + motor state frame at 100Hz over wired serial (8.63ms mean latency). Unity background thread queues frames via ConcurrentQueue; main thread drains to the latest frame per render cycle. Digital twin eye model applies a VOR compensation term on top of physical motor angles.",
  },
];

const RESULTS = [
  { value: "27.9°/s", label: "Torsional SPV", sub: "within clinical IQR 15.7–38.9°/s" },
  { value: "1.40°",   label: "IMU Mean Error", sub: "against known reference poses" },
  { value: "8.63ms",  label: "System Latency", sub: "mean · 58ms margin under 100ms target" },
  { value: "10/10",   label: "Diagnostic Accuracy", sub: "side selection & STT evaluation" },
  { value: "0.57°",   label: "Positional Sync", sub: "mean error · target ≤ 2°" },
  { value: "1.27×",   label: "Mechanical Gain", sub: "physical vs commanded - found via independent video measurement" },
];

export default function BppvCaseStudy() {
  const backRef    = useScrollReveal({ delay: 0 });
  const heroRef    = useScrollReveal({ delay: 80 });
  const problemRef = useScrollReveal({ delay: 0 });
  const builtRef   = useScrollReveal({ delay: 60 });
  const contribRef = useScrollReveal({ delay: 0 });
  const resultsRef = useScrollReveal({ delay: 0 });
  const techRef    = useScrollReveal({ delay: 0 });

  return (
    <main className={styles.page}>

      {/* Back link */}
      <div ref={backRef} className={styles.backRow}>
        <Link href="/#projects" className={styles.backLink}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Back to Portfolio
        </Link>
      </div>

      {/* Hero image + title */}
      <div ref={heroRef} className={styles.hero}>
        <div className={styles.heroImg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bppv/full-assembly.jpg" alt="Full assembled BPPV robotic patient model" />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroText}>
          <span className={styles.prize}>🏆 1st Prize - MSc Thesis 2026</span>
          <h1 className={styles.title}>BPPV Robotic Eye<br />Movement Simulator</h1>
          <p className={styles.subtitle}>
            A physical robotic patient model for Dix-Hallpike clinical training -
            hardware, real-time embedded control, Unity digital twin, and AI feedback pipeline.
          </p>
          <div className={styles.heroLinks}>
            <a href="https://maynoothuniversity-my.sharepoint.com/:v:/g/personal/zeenath_syed_2026_mumail_ie/IQDPDRSByFpMRoSTv1yqK15qAe3HCECjumJKIAtRr79yZZs"
               target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              ▶ Watch Demo
            </a>
            <a href="https://github.com/SyedZeenath/Robotic_Eye_Simulator"
               target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      <div className={styles.body}>

        {/* Problem + What I Built */}
        <div className={styles.twoCol}>
          <div ref={problemRef} className={styles.block}>
            <h2 className={styles.blockTitle}>The Problem</h2>
            <p className={styles.blockText}>
              BPPV accounts for 20–30% of specialist dizziness clinic cases. Diagnosis requires a Dix-Hallpike maneuver and the ability to observe and interpret torsional nystagmus - a skill learned through supervised patient contact. But access to patients is limited, repeated testing is ethically questionable, and presentation varies significantly between individuals.
            </p>
            <p className={styles.blockText}>
              Existing vestibular training tools are screen-based. They develop visual pattern recognition but not the motor coordination required to support a patient's head through a precise repositioning maneuver. A clinician who has only watched simulated nystagmus on a screen cannot perform the physical procedure.
            </p>
          </div>

          <div ref={builtRef} className={styles.block}>
            <h2 className={styles.blockTitle}>What I Built</h2>
            <p className={styles.blockText}>
              A physical robotic patient model - head, tendon-driven eyes, ball-and-socket neck joint, torso rod, and hinged base for supine lie-back - that replicates the pathological nystagmus of posterior canal BPPV when the trainee performs a genuine Dix-Hallpike maneuver.
            </p>
            <p className={styles.blockText}>
              The system uses quaternion-based IMU head tracking to detect when the trainee correctly positions the head (side + angle), then triggers conjugate nystagmus in both eyes via a six-phase state machine on Arduino. A Unity 3D digital twin mirrors the physical system at 100Hz. Google Cloud TTS/STT delivers procedural guidance and evaluates the spoken diagnosis.
            </p>
          </div>
        </div>

        {/* Eye mechanism photo */}
        <div className={styles.imageBlock}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bppv/eye-mechanism.jpg" alt="Tendon-driven dual-eye mechanism - 6 micro-servo motors with capstan spool actuation" className={styles.mechanismImg} />
          <p className={styles.caption}>Tendon-driven dual-eye mechanism - 6 DF9GMS micro-servos with 3D-printed capstan spools. Three antagonist pairs per eye globe drive torsional, vertical, and horizontal axes independently.</p>
        </div>

        {/* Technical contributions */}
        <div ref={contribRef} className={styles.section}>
          <h2 className={styles.sectionTitle}>Original Technical Contributions</h2>
          <div className={styles.contribGrid}>
            {CONTRIBUTIONS.map(({ title, body }) => (
              <div key={title} className={styles.contrib}>
                <h3 className={styles.contribTitle}>{title}</h3>
                <p className={styles.contribBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div ref={resultsRef} className={styles.section}>
          <h2 className={styles.sectionTitle}>Validated Results</h2>
          <p className={styles.sectionSub}>All 5 technical objectives independently validated - nystagmus measured by video iris-pattern cross-correlation, IMU accuracy against held reference poses, latency via direct timestamp, positional sync via photographic measurement tool.</p>
          <div className={styles.resultsGrid}>
            {RESULTS.map(({ value, label, sub }) => (
              <div key={label} className={styles.result}>
                <span className={styles.resultValue}>{value}</span>
                <span className={styles.resultLabel}>{label}</span>
                <span className={styles.resultSub}>{sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div ref={techRef} className={styles.section}>
          <h2 className={styles.sectionTitle}>Full Tech Stack</h2>
          <div className={styles.techGrid}>
            {TECH.map(t => <span key={t} className={styles.techChip}>{t}</span>)}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={styles.cta}>
          <a href="https://maynoothuniversity-my.sharepoint.com/:v:/g/personal/zeenath_syed_2026_mumail_ie/IQDPDRSByFpMRoSTv1yqK15qAe3HCECjumJKIAtRr79yZZs"
             target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            ▶ Watch the Demo
          </a>
          <a href="https://github.com/SyedZeenath/Robotic_Eye_Simulator"
             target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
            View Source on GitHub
          </a>
          <Link href="/#contact" className={styles.btnGhost}>Get in Touch</Link>
        </div>

      </div>
    </main>
  );
}
