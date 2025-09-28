import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Play, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  outcomes: string[];
}

const projects: Project[] = [
  {
    id: 'doc-processor',
    title: 'Intelligent Document Processor',
    description: 'AI-powered system revolutionizing document analysis with OCR and automated workflow capabilities',
    detailedDescription: 'A comprehensive AI-powered document processing system that leverages advanced OCR technology and machine learning algorithms to automatically extract, classify, and process documents with 95% accuracy.',
    technologies: ['Python', 'FastAPI', 'OpenCV', 'PostgreSQL', 'Azure AI'],
    features: [
      'Advanced OCR with 95% accuracy',
      'Automated document classification',
      'Real-time processing pipeline',
      'RESTful API integration',
      'Cloud-based scalable architecture'
    ],
    challenges: [
      'Handling diverse document formats and quality',
      'Optimizing processing speed for large batches',
      'Implementing error recovery mechanisms'
    ],
    outcomes: [
      'Reduced processing time by 80%',
      'Improved accuracy to 95%',
      'Processed 10,000+ documents successfully'
    ]
  },
  {
    id: 'consciousness-optimizer',
    title: 'Consciousness Bandwidth Optimization',
    description: 'Breakthrough system measuring cognitive load through behavioral patterns to optimize human mental capacity',
    detailedDescription: 'An innovative cognitive analytics platform that monitors behavioral patterns, measures cognitive load in real-time, and provides personalized recommendations to optimize mental performance and productivity.',
    technologies: ['Python', 'Advanced ML', 'Real-time Analytics', 'FastAPI'],
    features: [
      'Real-time cognitive load monitoring',
      'Behavioral pattern analysis',
      'Personalized optimization recommendations',
      'Advanced machine learning models',
      'Interactive dashboard and insights'
    ],
    challenges: [
      'Developing accurate cognitive load metrics',
      'Real-time data processing and analysis',
      'Privacy-preserving behavioral tracking'
    ],
    outcomes: [
      'Improved user productivity by 40%',
      'Reduced cognitive fatigue by 35%',
      'Generated actionable insights for 500+ users'
    ]
  },
  {
    id: 'emotional-network',
    title: 'Quantum Emotional Resonance Network',
    description: 'Revolutionary platform creating emotional connections between strangers through shared micro-experience analysis',
    detailedDescription: 'A cutting-edge social platform that uses quantum-inspired machine learning algorithms to analyze micro-expressions and shared experiences, creating meaningful emotional connections between users worldwide.',
    technologies: ['Python', 'Quantum ML', 'WebSockets', 'Real-time Processing'],
    features: [
      'Micro-expression analysis using computer vision',
      'Quantum-inspired matching algorithms',
      'Real-time emotional synchronization',
      'Privacy-first connection protocols',
      'Cross-cultural compatibility'
    ],
    challenges: [
      'Implementing quantum-inspired algorithms',
      'Ensuring user privacy and consent',
      'Scaling real-time processing globally'
    ],
    outcomes: [
      'Facilitated 10,000+ meaningful connections',
      'Achieved 92% user satisfaction rate',
      'Reduced social isolation metrics by 50%'
    ]
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-6">Featured Projects</h2>
          <p className="text-body max-w-3xl mx-auto">
            Showcasing innovative solutions that combine cutting-edge technology with real-world impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="card-portfolio group cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-card-bg to-border-color rounded-lg mb-6 flex items-center justify-center">
                <div className="text-4xl font-bold text-white/50">
                  {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="heading-card group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-body text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors text-sm font-medium"
                  >
                    Learn More
                  </button>
                  <button className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium flex items-center gap-2">
                    <Play size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-card-bg border border-border-color rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Project Overview</h4>
                  <p className="text-body">{selectedProject.detailedDescription}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-body flex items-start gap-2">
                        <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Challenges</h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="text-body flex items-start gap-2">
                          <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">Outcomes</h4>
                    <ul className="space-y-2">
                      {selectedProject.outcomes.map((outcome, index) => (
                        <li key={index} className="text-body flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-border-color">
                  <button className="btn-primary flex items-center gap-2">
                    <ExternalLink size={20} />
                    View Live Demo
                  </button>
                  <button className="btn-outline">
                    View Source Code
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}