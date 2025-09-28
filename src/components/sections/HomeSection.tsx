import { motion } from 'framer-motion';
import { Brain, Code, Download, Eye } from 'lucide-react';

export function HomeSection() {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '10+', label: 'Technologies' },
  ];

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Heading with Typewriter Effect */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="heading-hero typewriter"
              >
                DADIPELLI GANESH
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl text-secondary font-medium"
              >
                Machine Learning Engineer | Full Stack Developer
              </motion.p>
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="card-portfolio text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary flex items-center justify-center gap-2">
                <Eye size={20} />
                VIEW PROJECTS
              </button>
              <button className="btn-outline flex items-center justify-center gap-2">
                <Download size={20} />
                DOWNLOAD RESUME
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo and Floating Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-full border-4 border-white/20 bg-gradient-to-br from-card-bg to-secondary-bg flex items-center justify-center overflow-hidden pulse-glow">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-6xl font-bold text-white/50">
                  DG
                </div>
              </div>
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute inset-0"
            >
              <motion.div
                className="absolute top-12 right-12 p-4 bg-card-bg rounded-full floating"
                style={{ animationDelay: '0s' }}
              >
                <Brain size={32} className="text-white" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-12 left-12 p-4 bg-card-bg rounded-full floating"
                style={{ animationDelay: '1s' }}
              >
                <Code size={32} className="text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-0 p-3 bg-card-bg rounded-full floating"
                style={{ animationDelay: '2s' }}
              >
                <div className="w-6 h-6 bg-white rounded-full" />
              </motion.div>

              <motion.div
                className="absolute top-1/4 left-0 p-3 bg-card-bg rounded-full floating"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="w-6 h-6 bg-white rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}