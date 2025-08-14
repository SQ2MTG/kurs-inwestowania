
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Modules from './components/Modules';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Modules />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
