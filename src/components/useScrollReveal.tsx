import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Add animate class to enable the animation (avoids hidden content during SSR)
    el.classList.add("animate");

    // Small delay to let the browser paint the opacity:0 state
    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        // Already in viewport — reveal after a brief delay for the animation to show
        requestAnimationFrame(() => el.classList.add("visible"));
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            observer.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
  }, []);

  return ref;
}
