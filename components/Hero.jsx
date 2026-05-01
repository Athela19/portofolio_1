"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CodeXml, Globe, Rocket, CircleCheck, Palette } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 -right-24 w-56 h-56 md:w-80 md:h-80 bg-secondary/20 rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Crafting Digital <br />
            Experiences <br />
            <span className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2">
              with Ambatukam
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0">
            Hi, I'm <span className="font-bold text-foreground underline decoration-secondary decoration-4 underline-offset-4">Amba</span>. 
            A passionate developer who blends professional engineering with cheerful, user-centric designs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/20"
            >
              View My Work <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <div className="flex items-center gap-3">
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-muted hover:bg-muted/80 transition-colors"
              >
                <CodeXml className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-muted hover:bg-muted/80 transition-colors"
              >
                <Globe className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          {/* Main Visual */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl rotate-6 -z-10" />
            <div className="absolute inset-0 bg-secondary rounded-3xl -rotate-3 -z-10" />
            <div className="w-full h-full bg-card border-4 border-foreground rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-full">
                  <Image 
                    src="/image_1.jpg" 
                    alt="Hero" 
                    fill 
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white dark:bg-slate-800 p-3 md:p-4 rounded-2xl shadow-xl border flex items-center gap-3 z-10"
            >
              <div>
                <div className="text-xs md:text-sm font-bold">Professional</div>
                <div className="text-[10px] md:text-xs text-muted-foreground">Coder</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white dark:bg-slate-800 p-3 md:p-4 rounded-2xl shadow-xl border flex items-center gap-3 z-10"
            >
              <div>
                <div className="text-xs md:text-sm font-bold">UI/UX</div>
                <div className="text-[10px] md:text-xs text-muted-foreground">Designer</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
