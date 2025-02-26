import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions Légales - DevSteph</title>
        <meta name="description" content="Mentions légales du site DevSteph" />
      </Head>

      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose max-w-none"
          >
            <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>
            
            <section className="mb-8">
              <h2>Éditeur du site</h2>
              <p>DevSteph<br />
              Adresse : Paris, France<br />
              Email : contact@devsteph.fr<br />
              Téléphone : 06 12 34 56 78</p>
            </section>

            <section className="mb-8">
              <h2>Hébergement</h2>
              <p>Ce site est hébergé par Vercel Inc.<br />
              Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789</p>
            </section>

            {/* Ajoutez d'autres sections selon vos besoins */}
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
} 