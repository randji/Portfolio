import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Vérifier si le code s'exécute dans un navigateur
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Animations réutilisables
export const fadeInUp = (element, delay = 0) => {
  if (!element) return null;
  return gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay,
    ease: "power3.out",
  });
};

export const staggerFadeIn = (elements, staggerTime = 0.2) => {
  if (!elements || elements.length === 0) return null;
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    stagger: staggerTime,
    duration: 0.8,
    ease: "power2.out",
  });
};

export const scrollAnimation = (element, trigger) => {
  if (!element) return null;
  return gsap.from(element, {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: trigger || element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
};

export default gsap;

// Ces animations sont pour Framer Motion et ne sont pas utilisées
// avec GSAP, donc nous les conservons
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeInUpWithDelay = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};
