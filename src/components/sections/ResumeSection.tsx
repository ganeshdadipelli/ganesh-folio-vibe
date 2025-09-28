import { motion } from 'framer-motion';
import { Download, FileText, GraduationCap, Award, Mail, Phone, MapPin } from 'lucide-react';

export function ResumeSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      items: [
        'B.Tech Computer Science - 7.91 CGPA',
        'Intermediate - 96.2%',
        'SSC - 98%'
      ]
    },
    {
      icon: Award,
      title: 'Certifications',
      items: [
        'Microsoft Azure AZ-900',
        'Full Stack Development',
        'Machine Learning Specialization'
      ]
    },
    {
      icon: Mail,
      title: 'Contact',
      items: [
        'ganeshdadipelli@gmail.com',
        '+91 9392450425',
        'Secunderabad, Telangana'
      ]
    }
  ];

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
          <h2 className="heading-section mb-6">Resume</h2>
          <p className="text-body max-w-3xl mx-auto">
            Comprehensive overview of my professional background, education, and achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Resume Viewer - Left Side (2/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="card-portfolio h-full">
              {/* Resume Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <FileText size={24} className="text-white" />
                  <h3 className="heading-card">Dadipelli Ganesh - Resume</h3>
                </div>
                <button className="btn-primary flex items-center gap-2">
                  <Download size={20} />
                  Download PDF
                </button>
              </div>

              {/* Resume Preview */}
              <div className="bg-white rounded-lg p-8 text-black min-h-[600px]">
                {/* Header */}
                <div className="text-center border-b-2 border-gray-200 pb-6 mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">DADIPELLI GANESH</h1>
                  <p className="text-lg text-gray-600 mb-3">Machine Learning Engineer | Full Stack Developer</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                    <span>📧 ganeshdadipelli@gmail.com</span>
                    <span>📱 +91 9392450425</span>
                    <span>📍 Secunderabad, Telangana</span>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                    PROFESSIONAL SUMMARY
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Innovative Machine Learning Engineer and Full Stack Developer with 2+ years of experience 
                    in developing AI-powered solutions. Proven track record in building scalable applications, 
                    implementing advanced ML algorithms, and delivering impactful results across diverse industries.
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                    TECHNICAL SKILLS
                  </h2>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Programming:</strong> Python, JavaScript, TypeScript
                    </div>
                    <div>
                      <strong>ML/AI:</strong> TensorFlow, PyTorch, Scikit-learn
                    </div>
                    <div>
                      <strong>Frontend:</strong> React.js, HTML5, CSS3, Tailwind
                    </div>
                    <div>
                      <strong>Backend:</strong> FastAPI, Node.js, Express.js
                    </div>
                    <div>
                      <strong>Databases:</strong> PostgreSQL, MongoDB, MySQL
                    </div>
                    <div>
                      <strong>Cloud:</strong> Azure, AWS, Docker, Kubernetes
                    </div>
                  </div>
                </div>

                {/* Experience Preview */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                    EXPERIENCE
                  </h2>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <strong className="text-gray-900">Machine Learning Intern</strong>
                        <span className="text-gray-600">March 2025 - Present</span>
                      </div>
                      <div className="text-gray-700 mb-2">TRiDE Innovative Technologies, Hyderabad</div>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Built Similarity Search model using Sentence Transformers</li>
                        <li>Developed RAG Chatbot with LangChain and Gemini API</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education Preview */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                    EDUCATION
                  </h2>
                  <div className="text-sm">
                    <div className="flex justify-between items-start mb-1">
                      <strong className="text-gray-900">Bachelor of Technology - Computer Science</strong>
                      <span className="text-gray-600">2021 - 2025</span>
                    </div>
                    <div className="text-gray-700">CGPA: 7.91/10</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Highlights - Right Side (1/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="card-portfolio"
              >
                <div className="flex items-center gap-3 mb-4">
                  <highlight.icon size={24} className="text-white" />
                  <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {highlight.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-text-secondary flex items-start gap-2">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Additional Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="card-portfolio text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Need More Details?</h3>
              <p className="text-text-secondary text-sm mb-6">
                Download the complete resume for detailed project descriptions and achievements.
              </p>
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                <Download size={20} />
                Download Full Resume
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}