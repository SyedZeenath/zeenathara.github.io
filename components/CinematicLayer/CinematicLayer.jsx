"use client";

import { useRef, useEffect } from "react";
import styles from "./CinematicLayer.module.css";

/**
 * CinematicLayer
 * Three.js warm-orange bokeh particle system with mouse parallax.
 * Renders onto a transparent canvas overlay — additive blending only.
 */
export default function CinematicLayer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let disposed = false;
    let frameId = null;
    let disposeFns = [];

    async function boot() {
      const THREE = await import("three");
      if (disposed || !canvasRef.current) return;

      const canvas = canvasRef.current;
      const W = window.innerWidth;
      const H = window.innerHeight;

      /* ── Scene ────────────────────────────────────────────── */
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(65, W / H, 0.1, 1000);
      camera.position.z = 55;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);

      /* ── Bokeh sprite texture (radial gradient canvas) ─────── */
      function makeBokehTex(size = 64) {
        const c = document.createElement("canvas");
        c.width = c.height = size;
        const ctx = c.getContext("2d");
        const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        g.addColorStop(0.00, "rgba(255,255,255,1.00)");
        g.addColorStop(0.25, "rgba(255,255,255,0.70)");
        g.addColorStop(0.55, "rgba(255,255,255,0.20)");
        g.addColorStop(1.00, "rgba(255,255,255,0.00)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, size, size);
        return new THREE.CanvasTexture(c);
      }

      const bokehTex = makeBokehTex(128);

      /* ── Colour palette (RGB 0-1) ──────────────────────────── */
      const PALETTE = [
        [1.00, 0.42, 0.21], // #FF6B35 ember
        [1.00, 0.70, 0.28], // #FFB347 amber
        [1.00, 0.84, 0.00], // #FFD700 gold
        [1.00, 0.55, 0.26], // #FF8D42 warm orange
        [0.98, 0.36, 0.14], // #FA5B24 deep ember
        [1.00, 1.00, 0.90], // warm white
        [1.00, 1.00, 1.00], // white
      ];

      /* ── Build two particle sets: large bokeh + small sharp ── */
      function buildParticles(count, spreadX, spreadY, spreadZ) {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        const phases = new Float32Array(count);
        const speeds = new Float32Array(count);

        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          pos[i3]     = (Math.random() - 0.5) * spreadX;
          pos[i3 + 1] = (Math.random() - 0.5) * spreadY;
          pos[i3 + 2] = (Math.random() - 0.5) * spreadZ - 5;

          const c = PALETTE[Math.floor(Math.random() * PALETTE.length)];
          col[i3] = c[0]; col[i3 + 1] = c[1]; col[i3 + 2] = c[2];

          phases[i] = Math.random() * Math.PI * 2;
          speeds[i] = 0.20 + Math.random() * 0.45;
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        geo.setAttribute("color",    new THREE.BufferAttribute(col, 3));
        return { geo, phases, speeds, original: pos.slice() };
      }

      /* Large soft bokeh — 200 particles, low opacity */
      const big  = buildParticles(200, 150, 100, 80);
      /* Small sharp sparkles — 500 particles, higher opacity */
      const small = buildParticles(500, 130,  90, 70);

      const matBig = new THREE.PointsMaterial({
        map: bokehTex,
        size: 6.5,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.38,
        depthWrite: false,
        sizeAttenuation: true,
      });

      const matSmall = new THREE.PointsMaterial({
        map: bokehTex,
        size: 2.0,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.62,
        depthWrite: false,
        sizeAttenuation: true,
      });

      scene.add(new THREE.Points(big.geo,   matBig));
      scene.add(new THREE.Points(small.geo, matSmall));

      /* ── Mouse / touch parallax ────────────────────────────── */
      const mouse  = { x: 0, y: 0 };
      const camPos = { x: 0, y: 0 };

      const onMouse = (e) => {
        mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
        mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      const onTouch = (e) => {
        const t = e.touches[0];
        mouse.x = (t.clientX / window.innerWidth  - 0.5) * 2;
        mouse.y = -(t.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("mousemove", onMouse, { passive: true });
      window.addEventListener("touchmove", onTouch, { passive: true });

      /* ── Resize ────────────────────────────────────────────── */
      const onResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      /* ── Animate ───────────────────────────────────────────── */
      function oscillate(data, t) {
        const arr = data.geo.attributes.position.array;
        const orig = data.original;
        const count = orig.length / 3;
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          const s = data.speeds[i];
          const p = data.phases[i];
          arr[i3]     = orig[i3]     + Math.sin(t * s * 0.35 + p + 1.3) * 2.2;
          arr[i3 + 1] = orig[i3 + 1] + Math.sin(t * s + p) * 3.2
                                      + Math.cos(t * s * 0.55 + p) * 1.4;
          arr[i3 + 2] = orig[i3 + 2] + Math.sin(t * s * 0.2 + p + 2.4) * 1.8;
        }
        data.geo.attributes.position.needsUpdate = true;
      }

      let time = 0;
      function animate() {
        if (disposed) return;
        frameId = requestAnimationFrame(animate);
        time += 0.0038;

        oscillate(big,   time);
        oscillate(small, time);

        /* Smooth parallax damp */
        camPos.x += (mouse.x * 5.0 - camPos.x) * 0.032;
        camPos.y += (mouse.y * 3.2 - camPos.y) * 0.032;
        camera.position.x = camPos.x;
        camera.position.y = camPos.y;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      }

      animate();

      /* Fade canvas in gently */
      canvas.style.opacity = "0";
      canvas.style.transition = "opacity 2.4s ease";
      requestAnimationFrame(() => {
        if (!disposed && canvas) canvas.style.opacity = "1";
      });

      /* Cleanup registry */
      disposeFns.push(() => {
        big.geo.dispose();
        small.geo.dispose();
        matBig.dispose();
        matSmall.dispose();
        bokehTex.dispose();
        renderer.dispose();
        window.removeEventListener("mousemove", onMouse);
        window.removeEventListener("touchmove", onTouch);
        window.removeEventListener("resize", onResize);
      });
    }

    boot();

    return () => {
      disposed = true;
      if (frameId) cancelAnimationFrame(frameId);
      disposeFns.forEach((fn) => fn());
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
