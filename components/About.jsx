import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const skills = [
    { src: "/skill/Js.jpeg", alt: "Javascript" },
    { src: "/skill/react.png", alt: "React 18" },
    { src: "/skill/NextJs.png", alt: "Next.js 14" },
    { src: "/skill/Symfony.png", alt: "Symfony 7" },
    { src: "/skill/php.png", alt: "php 8" },
    { src: "/skill/reactNative1.png", alt: "reactNative" },
    { src: "/skill/Git.png", alt: "Git" },
    { src: "/skill/tailwind.png", alt: "tailwind CSS" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">À Propos de Moi</h2>
          <p className="text-gray-600 mb-12">
            Passionné par le développement web, je crée des solutions numériques
            innovantes qui combinent design élégant et fonctionnalités robustes.
            Mon approche est centrée sur l'utilisateur, avec un souci constant
            de la qualité et de la performance.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.alt}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="relative h-16 w-16 mx-auto">
                  <Image
                    src={skill.src}
                    alt={skill.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 text-sm font-medium">{skill.alt}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
