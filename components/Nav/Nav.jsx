"use client";

import { useEffect, useState, useCallback } from "react";
import styles from "./Nav.module.css";

const LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience"  },
  { label: "Projects",   href: "#projects"    },
  { label: "Skills",     href: "#skills"      },
  { label: "Contact",    href: "#contact"     },
];

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeId,  setActiveId]  = useState("");

  /* Show background once user scrolls past hero */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Track active section */
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback((href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} aria-label="Primary navigation">
      <div className={styles.inner}>
        {/* Wordmark */}
        <span className={styles.wordmark} aria-hidden="true">SZ</span>

        {/* Desktop links */}
        <ul className={styles.links} role="list">
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                className={`${styles.link} ${activeId === href.slice(1) ? styles.linkActive : ""}`}
                onClick={() => handleClick(href)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ""}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={styles.drawer} role="menu">
          {LINKS.map(({ label, href }) => (
            <button
              key={href}
              className={styles.drawerLink}
              onClick={() => handleClick(href)}
              role="menuitem"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
