import { useEffect, useRef, useState } from "react";

export function usePortfolioMotion() {
  const root = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let disposed = false;
    let context: { revert(): void } | undefined;
    let smooth: { destroy(): void } | undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fallback = window.setTimeout(() => { setReady(true); setProgress(100); }, 4500);
    async function start() {
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        if (reduced) { setProgress(100); setReady(true); return; }
        context = gsap.context(() => {
          const counter = { value: 0 };
          const intro = gsap.timeline();
          intro.to(counter, { value: 100, duration: 1.8, ease: "power2.inOut", onUpdate: () => setProgress(Math.round(counter.value)) })
            .to(".loader-track", { opacity: 0, duration: 0.25 })
            .to(".preloader", { opacity: 0, scale: 0.96, duration: 0.65, ease: "power3.inOut", onComplete: () => { if (!disposed) setReady(true); } });
          gsap.utils.toArray<HTMLElement>(".section-reveal").forEach((el) => {
            gsap.fromTo(el, { y: 45, opacity: 0, filter: "blur(7px)" }, { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9, scrollTrigger: { trigger: el, start: "top 91%", once: true } });
          });
          gsap.fromTo(".skill-chip", { y: 15, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, duration: 0.6, scrollTrigger: { trigger: ".skills", start: "top 90%", once: true } });
          gsap.to(".ambient-light", { y: -25, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut" });
        }, root);
        const { default: LocomotiveScroll } = await import("locomotive-scroll");
        if (!disposed) smooth = new LocomotiveScroll({ lenisOptions: { lerp: 0.09, smoothWheel: true }, scrollCallback: () => ScrollTrigger.update() });
      } catch { if (!disposed) { setReady(true); setProgress(100); } }
    }
    void start();
    return () => { disposed = true; window.clearTimeout(fallback); smooth?.destroy(); context?.revert(); };
  }, []);
  useEffect(() => {
    if (!ready) return;
    let disposed = false;
    let introContext: { revert(): void } | undefined;
    void import("gsap").then(({ gsap }) => {
      if (disposed) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      introContext = gsap.context(() => {
        gsap.fromTo(".hero-reveal", { opacity: reduced ? 1 : 0, y: reduced ? 0 : 40, filter: reduced ? "blur(0px)" : "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: reduced ? 0 : 1.1, stagger: reduced ? 0 : 0.1, ease: "power3.out" });
        gsap.fromTo(".spline-stage", { opacity: 0, x: reduced ? 0 : 60 }, { opacity: 0.8, x: 0, duration: reduced ? 0 : 1.5 });
      }, root);
    });
    return () => { disposed = true; introContext?.revert(); };
  }, [ready]);
  return { root, ready, progress };
}