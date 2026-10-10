import React from 'react';
import './App.css';
import Header, { AnnouncementBar } from './components/Header';
import Hero from './components/Hero';
import Gist from './components/Gist';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import ToneSwitcher from './components/ToneSwitcher';
import Features from './components/Features';
import Privacy from './components/Privacy';
import Audiences from './components/Audiences';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer, { ClosingCta } from './components/Footer';

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <Hero />
        <Gist />
        <Products />
        <HowItWorks />
        <ToneSwitcher />
        <Features />
        <Privacy />
        <Audiences />
        <Testimonials />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}

export default App;
