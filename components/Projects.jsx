import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Cours Synapse",
      description: "Une plateforme e-commerce complète avec panier et paiement",
      image: "/project1.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Application de Gestion",
      description: "Système de gestion des tâches et des projets",
      image: "/project2.jpg",
      tags: ["Next.js", "TypeScript", "Prisma"],
      link: "#"
    },
    {
      title: "Portfolio Créatif",
      description: "Site portfolio avec animations et design moderne",
      image: "/project3.jpg",
      tags: ["React", "Framer Motion", "Tailwind"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Mes Projets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  Voir le projet →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 