import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Cours Synapse",
      description:
        "Application web de soutien scolaire pour l'entreprise cours Synapse",
      image: "/projects/coursSynapse.png",
      tags: ["React", "nextJs", "firebase", "Tailwind CSS"],
      link: "https://www.courssynapse.fr/",
      preview: {
        type: "iframe",
        url: "https://www.courssynapse.fr/",
      },
      iframe: (
        <div className="iframe-wrapper">
          <iframe
            src="https://www.courssynapse.fr/"
            className="w-full h-[300px] rounded-lg"
            title="Cours Synapse Preview"
            loading="lazy"
            style={{
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      ),
    },
    {
      title: "GNB-PROTECT",
      description: "Site vitrine pour l'entreprise GNB-PROTECT",
      image: "/skill/Js.jpeg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://gnb-five.vercel.app/",
      preview: {
        type: "iframe",
        url: "https://gnb-five.vercel.app/",
      },
      iframe: (
        <div className="iframe-wrapper">
          <iframe
            src="https://gnb-five.vercel.app/"
            className="w-full h-[300px] rounded-lg"
            title="GNB-PROTECT Preview"
            loading="lazy"
            style={{border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      ),
    },
    {
      title: "loizir",
      description: "Plateforme de réservation d’activités (en production)",
      image: "/projects/loizir.jpeg",
      tags: ["React", "symfony 7", "Tailwind", "docker", "MYSQL", "Github Actions, API REST"],
      link: "https://github.com/randji/loizir",
      preview: {
        type: "IMAGE",
        url: "/projects/loizir.jpeg",
      },
      iframe: (
        <div>
          <img
            src="/projects/loizir.jpeg"
            className="object-cover rounded-lg"
            title="GNB-PROTECT Preview"
            
            style={{border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      ),
    },
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
              {/* <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover shadow-lg"
                />
              </div> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                {project.iframe && <div className="mb-4">{project.iframe}</div>}

                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
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
