import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Objectives } from './components/Objectives';
import { WorkAxes } from './components/WorkAxes';
import { Institutions } from './components/Institutions';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Objectives />
        <WorkAxes />
        <Institutions />
      </main>
      <Footer />
    </div>
  );
}
