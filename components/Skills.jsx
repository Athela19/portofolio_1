"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Layout, 
  Server, 
  Terminal,
  Wrench
} from 'lucide-react';

const Skills = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-primary" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: "/image_3.jpg"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-accent" />,
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "RESTful APIs"],
      image: "/image_4.jpg"
    },
    {
      title: "Technical Tools",
      icon: <Wrench className="w-6 h-6 text-secondary" />,
      skills: ["Git & GitHub", "Docker", "Vercel", "Postman", "VS Code"],
      image: "/image_5.jpg"
    }
  ];
// ... rest of the component

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="relative py-24 px-4 md:px-12 overflow-hidden scroll-mt-24">
      {/* Background Blobs - Consistent with Hero/About */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-4">
            <Terminal className="w-4 h-4" />
            <span>My Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Technical <span className="text-primary">Amba</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I've mastered a variety of tools and technologies to build modern, 
            scalable, and high-performance applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all shadow-xl shadow-primary/5 group overflow-hidden"
            >
              {/* Background Image Reveal on Hover */}
              <AnimatePresence>
                {hoveredIdx === idx && (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="absolute inset-0 z-0"
                  >
                    <Image 
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-4 py-2 rounded-xl bg-muted/50 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
