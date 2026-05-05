/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Author: Brian McCarthy
 */

import React from 'react';
import AboutUs from './AboutUs';
import { ArrowRight, Leaf } from 'lucide-react';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="landing-page relative overflow-hidden">
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-stone-900/40"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation / Brand Area */}
        <header className="p-8 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="bg-white p-3 rounded-full shadow-xl">
                    <Leaf className="text-green-800 size-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-black text-white tracking-tight drop-shadow-md">E-PlantShopping</h1>
                  <p className="text-xs uppercase tracking-[0.4em] text-green-300 font-bold drop-shadow-md">Pure Nature, Delivered</p>
                </div>
            </div>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-3xl glass-morphism p-12 rounded-[3rem] shadow-2xl animate-in zoom-in-95 fade-in duration-1000">
             <div className="bg-green-500/20 backdrop-blur w-fit mx-auto px-4 py-1 rounded-full text-green-300 text-xs font-black uppercase tracking-widest mb-6">
                Established 2026
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg">
                Welcome to <br/> E-PlantShopping
             </h2>
             <hr className="w-24 border-2 border-green-500 mx-auto mb-8 rounded-full" />
             
             <div className="bg-white/90 backdrop-blur-md p-8 rounded-[2rem] text-stone-800 shadow-xl mb-10">
                <AboutUs />
             </div>

             <button 
                onClick={onGetStarted}
                className="group relative inline-flex items-center space-x-3 bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-2xl font-black tracking-wide text-lg shadow-[0_10px_40px_-10px_rgba(34,197,94,0.5)] transition-all hover:-translate-y-1 active:scale-95 overflow-hidden cursor-pointer"
             >
                <span className="relative z-10">Get Started</span>
                <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
             </button>
          </div>
        </main>

        <footer className="p-8 text-white/60 text-sm font-medium text-center">
            &copy; 2026 E-PlantShopping. Crafted with love by Brian McCarthy.
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
