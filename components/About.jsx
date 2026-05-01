"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Cpu, Sparkles, GraduationCap, Briefcase } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: <Code2 className="w-5 h-5 text-primary" />, desc: 'React, Next.js, Tailwind CSS' },
    { name: 'Backend', icon: <Cpu className="w-5 h-5 text-accent" />, desc: 'Node.js, Express, PostgreSQL' },
    { name: 'Design', icon: <Sparkles className="w-5 h-5 text-secondary" />, desc: 'Figma, UI/UX, Motion' },
  ];

  return (
    <section id="about" className="relative py-24 px-4 md:px-12 overflow-hidden bg-muted/30">
      {/* Decorative background elements similar to Hero */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary/20 rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary rounded-3xl -rotate-6 -z-10 opacity-60" />
              <div className="absolute inset-0 bg-accent rounded-3xl rotate-3 -z-10 opacity-40" />
              <div className="w-full h-full bg-card border-4 border-foreground rounded-3xl overflow-hidden shadow-2xl relative">
                <Image 
                  src="/image_2.jpg"
                  alt="About Me" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border-2 border-primary/20 z-10"
              >
                <div className="text-3xl font-black text-primary">3+</div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Years Old.</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
              <User className="w-4 h-4" />
              <span>Who I Am</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Driven by <span className="text-primary">Passion</span>, <br />
              Defined by <span className="text-secondary underline decoration-accent decoration-4 underline-offset-8">Results</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              I specialize in building high-performance web applications that don't just work, but feel amazing to use. My approach combines technical excellence with a keen eye for aesthetics.
            </p>

            {/* Features/Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all shadow-sm"
                >
                  <div className="p-2 w-fit rounded-lg bg-muted mb-3">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.desc}</p>
                </motion.div>
              ))}
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-5 rounded-2xl bg-primary text-primary-foreground transition-all shadow-lg shadow-primary/20 flex flex-col justify-center items-center text-center"
              >
                <GraduationCap className="w-8 h-8 mb-2" />
                <h3 className="font-bold text-lg">CS Graduate</h3>
                <p className="text-sm opacity-90 text-primary-foreground/80">Always Learning</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
