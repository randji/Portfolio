import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <a
                  href="tel:+33750893547"
                  className="hover:text-primary transition-colors"
                >
                  07 50 89 35 47
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:contact@devsteph.fr"
                  className="hover:text-primary transition-colors"
                >
                  contact@devsteph.fr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>75010 Paris, France</span>
              </li>
            </ul>
          </motion.div>

          {/* Liens Rapides */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-primary transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="hover:text-primary transition-colors"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Réseaux Sociaux */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Me Suivre</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/randji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Mentions Légales */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Mentions Légales</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-primary transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="hover:text-primary transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="pt-8 mt-8 border-t border-gray-200 text-center text-gray-600"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <p>© {currentYear} DevSteph - Tous droits réservés</p>
        </motion.div>
      </div>
    </footer>
  );
}
