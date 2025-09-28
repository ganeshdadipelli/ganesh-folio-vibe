import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { HomeSection } from '@/components/sections/HomeSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ResumeSection } from '@/components/sections/ResumeSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Chatbot } from '@/components/Chatbot';

const sections = {
  home: HomeSection,
  about: AboutSection,
  projects: ProjectsSection,
  experience: ExperienceSection,
  resume: ResumeSection,
  contact: ContactSection,
};

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const ActiveComponent = sections[activeSection as keyof typeof sections];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ 
              type: "tween", 
              ease: "easeInOut", 
              duration: 0.5 
            }}
            className="w-full"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      <Chatbot />
    </div>
  );
};

export default Index;
