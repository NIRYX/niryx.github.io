import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative font-sans text-text overflow-x-hidden">
      {/* Dynamic Background */}
      <div 
        className="fixed inset-0 z-0 bg-[linear-gradient(270deg,#0a0a0a,#1a1a1a,#121212,#0f0f0f)] bg-[length:600%_600%] animate-gradient-shift opacity-95 pointer-events-none" 
        aria-hidden="true" 
      />

      <Navbar />

      <main className="relative z-10 flex-grow pt-24 pb-12">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;