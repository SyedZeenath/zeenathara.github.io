"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import { PERSONAL } from "../../lib/data";
import styles from "./Contact.module.css";

const CONTACT_LINKS = [
  { label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}`, icon: <MailIcon />, external: false },
  { label: "GitHub", value: "SyedZeenath", href: PERSONAL.github, icon: <GitHubIcon />, external: true },
  { label: "LinkedIn", value: "szeenathara", href: `https://${PERSONAL.linkedin.replace("https://","")}`, icon: <LinkedInIcon />, external: true },
];

export default function Contact() {
  const headRef  = useScrollReveal({ delay: 0   });
  const ctaRef   = useScrollReveal({ delay: 80  });
  const linksRef = useScrollReveal({ delay: 160 });
  const cvRef    = useScrollReveal({ delay: 240 });

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>

        <div ref={headRef} className={styles.labelRow}>
          <span className={styles.labelLine} />
          <span className={styles.label}>Contact</span>
        </div>

        <div ref={ctaRef} className={styles.cta}>
          <h2 className={styles.heading}>
            Open to founding engineering<br />
            and <em className={styles.accent}>forward deployed roles.</em>
          </h2>
          <p className={styles.sub}>
            Looking for roles where production AI meets real enterprise environments
            and robot systems - Founding Engineer, Forward Deployed Engineer, and Robotics
            AI positions across Ireland and Europe. Available now, based in Dublin.
          </p>

          {/* CV download */}
          <div ref={cvRef} className={styles.cvRow}>
            <a href={PERSONAL.cv} download className={styles.cvBtn} aria-label="Download CV">
              <DownloadIcon />
              Download CV
            </a>
            <span className={styles.cvHint}>PDF · updated 2026</span>
          </div>
        </div>

        {/* Contact links */}
        <div ref={linksRef} className={styles.links}>
          {CONTACT_LINKS.map(({ label, value, href, icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={styles.contactLink}
            >
              <span className={styles.linkIcon}>{icon}</span>
              <span className={styles.linkBody}>
                <span className={styles.linkLabel}>{label}</span>
                <span className={styles.linkValue}>{value}</span>
              </span>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

      </div>

      <footer className={styles.footer}>
        <p className={styles.footerText} suppressHydrationWarning>
          Built with Next.js · Three.js · GSAP &nbsp;·&nbsp; {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}

function MailIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>;
}
function GitHubIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>;
}
function LinkedInIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>;
}
function DownloadIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
}