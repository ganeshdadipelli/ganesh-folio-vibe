import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 'tride',
    company: 'TRiDE Innovative Technologies',
    role: 'Machine Learning Intern',
    duration: 'March 2025 - Present',
    location: 'Hyderabad, India',
    achievements: [
      'Built Similarity Search model using Sentence Transformers achieving 95% accuracy',
      'Developed RAG Chatbot using LangChain, Hugging Face, and Gemini API',
      'Contributed to GMR MRO Project with predictive analytics implementation',
      'Improved clustering accuracy from 0.3923 to 0.5429 Silhouette Score',
      'Implemented real-time data processing pipelines for aircraft maintenance'
    ],
    technologies: ['Python', 'Machine Learning', 'LangChain', 'Transformers', 'FastAPI', 'Hugging Face']
  },
  {
    id: 'path-creators',
    company: 'Path Creators, Sri Vaikunta Technologies',
    role: 'Full Stack Developer',
    duration: 'May 2023',
    location: 'Goa, India',
    achievements: [
      'Built real-time Goa landmarks recognition web application',
      'Implemented automated recognition system with 90% accuracy',
      'Developed user-generated content management system',
      'Integrated data analytics for operational efficiency insights',
      'Optimized application performance resulting in 40% faster load times'
    ],
    technologies: ['React.js', 'Bootstrap', 'Image Recognition APIs', 'Node.js', 'MongoDB']
  }
];

export function ExperienceSection() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-6">Professional Experience</h2>
          <p className="text-body max-w-3xl mx-auto">
            My journey through innovative companies, building impactful solutions and growing expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-color transform md:-translate-x-px" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-background" />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.3 + 0.2 }}
                    className="card-portfolio"
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="heading-card text-white mb-2">{experience.role}</h3>
                      <h4 className="text-xl font-semibold text-white/90 mb-3">
                        {experience.company}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-text-secondary text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {experience.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <TrendingUp size={18} />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.3 + 0.4 + achIndex * 0.1 }}
                            className="text-body flex items-start gap-3"
                          >
                            <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-body mb-6">
            Interested in my work experience? Let's discuss how I can contribute to your team.
          </p>
          <button className="btn-primary">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}