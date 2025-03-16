"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  // Utilisation de useGSAP pour les animations
  useGSAP(
    () => {
      // Animation du titre avec un effet de montée
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animation du texte avec délai
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      // Animation des boutons - commencer avec opacity: 0 mais forcer opacity: 1 à la fin
      const buttons = buttonsRef.current.querySelectorAll("a");
      gsap.set(buttons, { opacity: 0, y: 30 }); // État initial explicite
      gsap.to(buttons, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.6,
        ease: "power2.out",
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center pt-16 bg-[url('/background1.jpeg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="container">
        <div className="grid gap-8 items-center">
          <div>
            <h1
              ref={titleRef}
              className="text-primary text-4xl md:text-8xl font-bold mb-24 text-center"
            >
              Développeur fullstack
            </h1>
            <p ref={textRef} className="text-lg text-white mb-8 text-center">
              Je crée des expériences web uniques et innovantes pour donner vie
              à vos projets.
            </p>
            <div ref={buttonsRef} className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="btn btn-primary font-medium py-3 px-6 rounded-lg shadow-md hover:bg-white hover:text-primary"
                style={{ opacity: 1 }} // Force l'opacité initiale
              >
                Me contacter
              </a>
              <a
                href="#projects"
                className="btn bg-white text-primary hover:bg-primary hover:text-white border border-primary font-medium py-3 px-6 rounded-lg shadow-md"
                style={{ opacity: 1 }} // Force l'opacité initiale
              >
                Voir mes projets
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
