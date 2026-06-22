"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import CinematicLayer from "../CinematicLayer/CinematicLayer";
import styles from "./VideoIntro.module.css";

/* ─── Inline SVG icons ───────────────────────────────────────────────── */
function IconPlay() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v13.72L19.5 12 8 5.14z" />
    </svg>
  );
}

function IconPause() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="5" y="4" width="5" height="16" rx="1.5" />
      <rect x="14" y="4" width="5" height="16" rx="1.5" />
    </svg>
  );
}

function IconMuted() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.34-1.71-.71z" />
    </svg>
  );
}

function IconSound() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  );
}

/* ─── Main component ─────────────────────────────────────────────────── */
export default function VideoIntro({ videoSrc = "/hero-video.mp4" }) {
  const heroRef      = useRef(null);
  const bgVideoRef   = useRef(null);
  const fgVideoRef   = useRef(null);
  const taglineRef   = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef  = useRef(null);
  const subtitleRef  = useRef(null);
  const controlsRef  = useRef(null);
  const scrollRef    = useRef(null);
  const soundRef     = useRef(null);

  const [isMuted,   setIsMuted]   = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [soundHint, setSoundHint] = useState(true);

  /* Auto-dismiss sound hint */
  useEffect(() => {
    const t = setTimeout(() => setSoundHint(false), 4800);
    return () => clearTimeout(t);
  }, []);

  /* ── GSAP cinematic entrance ─────────────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Set initial states */
      gsap.set(taglineRef.current,  { opacity: 0, y: 18 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 22 });
      gsap.set(controlsRef.current, { opacity: 0 });
      gsap.set(scrollRef.current,   { opacity: 0, y: -12 });
      gsap.set(soundRef.current,    { opacity: 0, y: -8  });
      /* Name lines start below their clip containers */
      gsap.set([firstNameRef.current, lastNameRef.current], { yPercent: 108 });

      const tl = gsap.timeline({ delay: 0.7 });

      /* Sound hint fades in first */
      tl.to(soundRef.current, {
        opacity: 1, y: 0,
        duration: 0.9, ease: "power2.out",
      });

      /* Tagline rises */
      tl.to(taglineRef.current, {
        opacity: 1, y: 0,
        duration: 1.1, ease: "power3.out",
      }, "-=0.5");

      /* First name reveals (slide up through clip) */
      tl.to(firstNameRef.current, {
        yPercent: 0,
        duration: 1.45, ease: "power4.out",
      }, "-=0.65");

      /* Last name slightly offset from first */
      tl.to(lastNameRef.current, {
        yPercent: 0,
        duration: 1.45, ease: "power4.out",
      }, "-=1.15");

      /* Subtitle fades */
      tl.to(subtitleRef.current, {
        opacity: 1, y: 0,
        duration: 1.05, ease: "power3.out",
      }, "-=0.75");

      /* Controls and scroll indicator */
      tl.to([controlsRef.current, scrollRef.current], {
        opacity: 1, y: 0,
        duration: 0.85, ease: "power2.out",
        stagger: 0.12,
      }, "-=0.5");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  /* ── Video playback setup ───────────────────────────────────────── */
  useEffect(() => {
    const video = fgVideoRef.current;
    if (!video) return;
    video.muted = false;
    video.play().catch(() => {
      // Browser blocked unmuted autoplay — user must interact first
      video.muted = true;
      setIsMuted(true);
    });
  }, []);
  
  /* ── Playback controls ───────────────────────────────────────────── */
  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      if (fgVideoRef.current) fgVideoRef.current.muted = next;
      setSoundHint(false);
      return next;
    });
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => {
      const next = !prev;
      const action = next ? "play" : "pause";
      fgVideoRef.current?.[action]?.();
      bgVideoRef.current?.[action]?.();
      return next;
    });
  }, []);

  /* ── Scroll to next section ─────────────────────────────────────── */
  const handleScroll = useCallback(() => {
    const target = document.getElementById("next-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  }, []);

  /* ─── Render ─────────────────────────────────────────────────────── */
  return (
    <section ref={heroRef} className={styles.hero}>

      {/* ── Layer 0: Ambient blurred background video ──────────────── */}
      <video
        ref={bgVideoRef}
        className={styles.bgVideo}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* ── Layer 1: Clear foreground video ────────────────────────── */}
      <video
        ref={fgVideoRef}
        className={styles.fgVideo}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* ── Layer 2: Cinematic gradient overlays ───────────────────── */}
      <div className={styles.overlayLeft}   aria-hidden="true" />
      <div className={styles.overlayTop}    aria-hidden="true" />
      <div className={styles.overlayBottom} aria-hidden="true" />
      <div className={styles.overlayRadial} aria-hidden="true" />

      {/* ── Layer 3: Three.js bokeh particles ──────────────────────── */}
      <CinematicLayer />

      {/* ── Layer 4: Sound hint badge ───────────────────────────────── */}
      <div
        ref={soundRef}
        className={`${styles.soundHint} ${soundHint ? styles.soundHintVisible : ""}`}
        aria-live="polite"
        role="status"
      >
        <span className={styles.soundPulse} aria-hidden="true" />
        Tap for sound
      </div>

      {/* ── Layer 5: Hero text content ──────────────────────────────── */}
      <div className={styles.content}>
        <p ref={taglineRef} className={styles.tagline}>
          Software Engineer &nbsp;·&nbsp; MSc Robotics &amp; Embedded AI
        </p>

        <h1 className={styles.nameBlock} aria-label="Syed Zeenath">
          <span className={styles.nameClip}>
            <span ref={firstNameRef} className={`${styles.nameLine} ${styles.nameLight}`}>
              Syed
            </span>
          </span>
          <span className={styles.nameClip}>
            <span ref={lastNameRef} className={`${styles.nameLine} ${styles.nameBold}`}>
              Zeenath
            </span>
          </span>
        </h1>

        <p ref={subtitleRef} className={styles.subtitle}>
          Building production LLM systems, digital twins &amp; robotics<br />
          at the intersection of AI and physical computation.
        </p>
      </div>

      {/* ── Layer 6: Playback controls ──────────────────────────────── */}
      <div ref={controlsRef} className={styles.controls} role="group" aria-label="Video controls">
        <button
          className={styles.ctrlBtn}
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <IconPause /> : <IconPlay />}
        </button>
        <button
          className={styles.ctrlBtn}
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <IconMuted /> : <IconSound />}
        </button>
      </div>

      {/* ── Layer 7: Scroll indicator ───────────────────────────────── */}
      <button
        ref={scrollRef}
        className={styles.scrollIndicator}
        onClick={handleScroll}
        aria-label="Scroll to next section"
      >
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollTrack} aria-hidden="true">
          <span className={styles.scrollRunner} />
        </span>
      </button>

    </section>
  );
}
