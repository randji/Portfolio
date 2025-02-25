import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-[url('/background1.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="container">
        <div className="grid  gap-8 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <h1 className="text-primary text-4xl md:text-8xl font-bold mb-24 text-center">
              Développeur fullstack 
            </h1>
            <p className="text-lg text-white mb-8 text-center">
              Je crée des expériences web uniques et innovantes pour donner vie
              à vos projets.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#contact" className="btn btn-primary">
                Me contacter
              </a>
              <a
                href="#projects"
                className="btn border border-primary text-primary hover:bg-primary hover:text-white"
              >
                Voir mes projets
              </a>
            </div>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px]"
          >
            <Image
              src="/background1.jpeg"
              alt="Hero Image"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
