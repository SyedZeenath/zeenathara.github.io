"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import styles from "./Nav.module.css";

const LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience"  },
  { label: "Projects",   href: "#projects"    },
  { label: "Skills",     href: "#skills"      },
  { label: "Contact",    href: "#contact"     },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const linkRefs    = useRef([]);
  const pillRef     = useRef(null);
  const navListRef  = useRef(null);

  /* Show glassmorphism after scrolling past hero */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Track active section */
  useEffect(() => {
    const ids = LINKS.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  /* Slide the orange pill to match the active link */
  useEffect(() => {
    const activeIdx = LINKS.findIndex(l => l.href.slice(1) === activeId);
    const pill = pillRef.current;
    const listEl = navListRef.current;
    const activeLinkEl = linkRefs.current[activeIdx];
    if (!pill || !listEl || !activeLinkEl) return;
    const listRect = listEl.getBoundingClientRect();
    const linkRect = activeLinkEl.getBoundingClientRect();
    pill.style.left  = `${linkRect.left - listRect.left}px`;
    pill.style.width = `${linkRect.width}px`;
    pill.style.opacity = activeIdx >= 0 ? "1" : "0";
  }, [activeId]);

  const handleClick = useCallback((href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} aria-label="Primary navigation">
      <div className={styles.inner}>
        <span className={styles.wordmark} aria-hidden="true">SZ</span>

        {/* Desktop */}
        <ul className={styles.links} role="list" ref={navListRef}>
          {/* Sliding pill indicator */}
          <span ref={pillRef} className={styles.pill} aria-hidden="true" />
          {LINKS.map(({ label, href }, i) => (
            <li key={href}>
              <button
                ref={el => linkRefs.current[i] = el}
                className={`${styles.link} ${activeId === href.slice(1) ? styles.linkActive : ""}`}
                onClick={() => handleClick(href)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.line} ${menuOpen ? styles.line1Open : ""}`} />
          <span className={`${styles.line} ${menuOpen ? styles.line2Open : ""}`} />
        </button>
      </div>

      {/* Mobile drawer with slide animation */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`} role="menu">
        {LINKS.map(({ label, href }, i) => (
          <button
            key={href}
            className={styles.drawerLink}
            style={{ transitionDelay: menuOpen ? `${i * 45}ms` : "0ms" }}
            onClick={() => handleClick(href)}
            role="menuitem"
          >
            <span className={styles.drawerIdx}>0{i + 1}</span>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}