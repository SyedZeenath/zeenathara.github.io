"use client";

import { useEffect, useRef } from "react";

/**
 * useScrollReveal
 * Adds "is-revealed" to the returned ref element when it enters the viewport.
 * Pair with the .reveal / .reveal.is-revealed classes in globals.css.
 *
 * @param {number} threshold - 0–1, fraction visible before triggering
 * @param {string} rootMargin - IntersectionObserver rootMargin
 * @param {number} delay      - extra CSS transition-delay in ms
 */
export function useScrollReveal({
  threshold  = 0.12,
  rootMargin = "0px 0px -60px 0px",
  delay      = 0,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal");
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-revealed");
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, delay]);

  return ref;
}
