import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Développeur Web Créatif</title>
        <meta name="description" content="Portfolio de développeur web spécialisé dans la création d'expériences web uniques et innovantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-600">
        <div className="container">
          <p>© {new Date().getFullYear()} - Tous droits réservés</p>
        </div>
      </footer>
    </>
  );
} 