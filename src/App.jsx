import { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Menu, X, Code, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Bantam Shuttle",
      description: "A scalable, high-availability campus shuttle platform using Google Kubernetes Engine (GKE)-based microservices with automated GitHub Actions CI/CD and event-driven architecture for real-time tracking.",
      tech: ["Java Spring Boot", "Node.js", "Python", "Docker", "React", "TypeScript", "RabbitMQ"],
      color: "from-purple-500 to-pink-500",
      link: "https://github.com/Gabbykoms/Ctrl-Alt-Elite",
      highlights: ["AI-powered RAG chatbot", "Real-time tracking with Socket.IO", "Mapbox visualizations"]
    },
    {
      title: "Facial Emotion Recognition",
      description: "Built and trained deep learning models for facial recognition using TensorFlow, applying convolutional neural networks (CNNs) to process raw image data with 52% classification accuracy.",
      tech: ["Python", "TensorFlow", "OpenCV", "CNNs"],
      color: "from-blue-500 to-cyan-500",
      link: "https://github.com/nuwayisenga/AI4ALL-Ignite24-Group2-FacialRecognition",
      highlights: ["End-to-end computer vision pipeline", "Feature engineering", "Web deployment"]
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript", "C", "HTML", "Assembly"],
    "Frameworks & Libraries": ["Spring Boot", "Flask", "React", "TensorFlow", "OpenCV", "NumPy", "Pandas"],
    "Tools & Technologies": ["Kubernetes", "Docker", "Git/GitHub", "VS Code", "JetBrains"],
    "Concepts": ["OOP", "APIs", "CI/CD", "Machine Learning", "NLP", "Cloud Deployment"]
  };



  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Noella Uwayisenga
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Hi, I'm Noella
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Computer Science Student & Software Engineer
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Building scalable applications with AI/ML integration. Passionate about cloud-native solutions and creating impactful technology.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:noella.uwayisenga@trincoll.edu"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/nuwayisenga"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-all"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h3>
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a Computer Science student at Trinity College with a passion for building scalable, impactful technology solutions. My journey in tech has been driven by curiosity and a desire to solve real-world problems through innovative software engineering.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm particularly passionate about cloud-native applications, artificial intelligence, and machine learning. Whether it's developing microservices architectures or training deep learning models, I love exploring how technology can create meaningful change in people's lives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond coding, I'm committed to helping others succeed in tech. As a Teaching Assistant and through my involvement with organizations like ColorStack and Rewriting the Code, I work to create more inclusive pathways into the field. I'm always eager to learn, collaborate, and contribute to projects that push the boundaries of what's possible.
            </p>
            <div className="mt-8 pt-6 border-t border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="text-purple-600" size={24} />
                <h4 className="text-xl font-semibold text-gray-800">Education</h4>
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">Trinity College</span> • Bachelor of Science in Computer Science, Minor in Cognitive Science
              </p>
              <p className="text-purple-600 font-medium mt-1">Expected May 2027 • Hartford, CT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-gray-800">{project.title}</h4>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code className="text-purple-600" size={24} />
                  <h4 className="text-xl font-bold text-gray-800">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Connect
          </h3>
          <p className="text-xl text-gray-600 mb-12">
            I'm always open to discussing new projects, opportunities, or collaborations!
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:noella.uwayisenga@trincoll.edu"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://github.com/nuwayisenga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="http://www.linkedin.com/in/noellauwayisenga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 Noella Uwayisenga. Built with React & Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            (959) 599-0764 • Hartford, CT
          </p>
        </div>
      </footer>
    </div>
  );
}