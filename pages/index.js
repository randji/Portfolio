import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Développeur Web Créatif</title>
        <meta
          name="description"
          content="Portfolio de développeur web spécialisé dans la création d'expériences web uniques et innovantes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
