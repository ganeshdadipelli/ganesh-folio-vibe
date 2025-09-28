import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function AboutSection() {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([]);

  const skills = [
    { name: 'Python', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'Machine Learning', percentage: 88 },
    { name: 'FastAPI', percentage: 80 },
    { name: 'PostgreSQL', percentage: 75 },
    { name: 'Azure', percentage: 70 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(new Array(skills.length).fill(true));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-full max-w-md mx-auto"
            >
              <div className="aspect-[3/4] rounded-2xl border-2 border-white/20 bg-gradient-to-br from-card-bg to-secondary-bg flex items-center justify-center overflow-hidden shadow-glow">
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-8xl font-bold text-white/50">
                  DG
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="heading-section mb-6">About Me</h2>
            </motion.div>

            {/* Content Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-body">
                I'm a passionate Machine Learning Engineer and Full Stack Developer with over 2 years of experience 
                building innovative solutions that bridge the gap between artificial intelligence and practical applications. 
                My journey in technology began with a fascination for how machines can learn and adapt.
              </p>
              
              <p className="text-body">
                Throughout my career, I've specialized in developing intelligent systems using cutting-edge ML algorithms, 
                robust backend architectures with FastAPI and PostgreSQL, and intuitive frontend experiences with React.js. 
                I thrive on solving complex problems and transforming ideas into scalable, real-world solutions.
              </p>
              
              <p className="text-body">
                When I'm not coding, I'm exploring the latest advancements in AI research, contributing to open-source 
                projects, or mentoring aspiring developers. I believe in the power of technology to create positive 
                impact and am always eager to take on new challenges that push the boundaries of what's possible.
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-text-secondary text-sm">{skill.percentage}%</span>
                    </div>
                    
                    <div className="w-full bg-card-bg rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ 
                          width: visibleSkills[index] ? `${skill.percentage}%` : 0 
                        }}
                        transition={{ 
                          delay: 1.2 + index * 0.1, 
                          duration: 1, 
                          ease: "easeOut" 
                        }}
                        className="h-2 bg-gradient-to-r from-white to-white/80 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}