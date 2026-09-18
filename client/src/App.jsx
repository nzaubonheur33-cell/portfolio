import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import BeyondCode from './components/BeyondCode';
import Process from './components/Process';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Modals from './components/Modals';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgressBar from './components/ui/ScrollProgressBar';

function App() {
  const { i18n } = useTranslation();

  // Sync document lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <main className="w-full pt-8 bg-background min-h-[calc(100vh-280px)]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 py-10">
          <div className="flex flex-col w-full text-on-surface">
            <Hero />
            <QuickStats />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Experience />
            <Education />
            <BeyondCode />
            <Process />
            <Learning />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
      <Modals />
    </>
  );
}

export default App;
