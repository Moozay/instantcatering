import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

// Route-level code splitting — each page loads only when visited
const HomePage     = lazy(() => import('./pages/HomePage'));
const AboutPage    = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const MediaPage    = lazy(() => import('./pages/MediaPage'));
const ContactPage  = lazy(() => import('./pages/ContactPage'));

const Spinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="w-10 h-10 border-4 border-[#3B8454] border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/"        element={<HomePage />} />
              <Route path="/about"   element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/media"   element={<MediaPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
