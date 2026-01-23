'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'Auto Healing Customer Chat Support System',
    description: 'End-to-end customer support automation using transformer models for intelligent issue resolution',
    problem: 'Manual customer support is time-consuming and inconsistent. Businesses need an intelligent system that can resolve common issues automatically while seamlessly escalating to human agents when needed.',
    solution: 'Built an AI-powered chat system using BERT for intent classification and GPT for contextual response generation, with automated ETL pipelines for continuous learning from past interactions.',
    impact: '~80% classification accuracy, automated issue resolution, intelligent escalation',
    technologies: ['BERT', 'GPT', 'FastAPI', 'ETL Pipelines', 'Python'],
    github: 'https://github.com/mitulkhemani2005/Auto-Healing-Customer-Chat-Support'
  },
  {
    title: 'E-Commerce Competitor Price & Stock Recommendation',
    description: 'Automated pricing intelligence system with daily market analysis and demand prediction',
    problem: 'E-commerce businesses struggle to stay competitive with dynamic pricing. Manual price monitoring is inefficient and lacks predictive insights.',
    solution: 'Developed an automated system that scrapes competitor data daily, feeds it to an XGBoost model for demand prediction, and provides actionable pricing recommendations.',
    impact: '82% accuracy, 60% reduction in deployment time via Docker CI/CD, real-time recommendations',
    technologies: ['XGBoost', 'Web Scraping', 'Docker', 'CI/CD', 'Streamlit'],
    github: 'https://github.com/mitulkhemani2005/E-Commerce-Competitor-Price-and-Stock-Recommendation'
  },
  {
    title: 'Real-Time Stock Price Prediction System',
    description: 'Time-series forecasting for both long-term and short-term stock price predictions',
    problem: 'Investors need reliable, real-time stock predictions with both daily and intraday forecasts for informed trading decisions.',
    solution: 'Created an LSTM-based system with separate workflows for next-day and next-minute predictions, featuring dynamic retraining and automated data ingestion.',
    impact: 'Real-time predictions across any stock ticker, automated daily retraining, live deployment on Render',
    technologies: ['LSTM', 'Time Series', 'Flask', 'YFinance', 'Python'],
    github: 'https://github.com/mitulkhemani2005/Stock-Price-Predictions'
  },
  {
    title: 'Guru Setu: AI Teacher Support System',
    description: 'Comprehensive AI assistant for educators with RAG, voice integration, and curriculum support',
    problem: 'Teachers need intelligent assistance with content generation, planning, and interactive teaching tools. Manual preparation is time-intensive.',
    solution: 'Developed an integrated platform combining Generative AI with RAG models, voice-based interaction via Whisper, and Google OAuth authentication.',
    impact: '80% response relevance on 50+ real-world queries, voice-enabled interface, hackathon finalist recognition',
    technologies: ['Generative AI', 'RAG Models', 'Whisper', 'Google Gemini', 'Google OAuth'],
    github: 'https://github.com/mitulkhemani2005/Guru-Setu-AI'
  }
]

const skills = {
  'Machine Learning & AI': ['BERT', 'GPT', 'Transformers', 'NLP', 'RAG Models', 'Deep Learning', 'Computer Vision'],
  'Data Science & Analytics': ['Time Series Analysis', 'XGBoost', 'Feature Engineering', 'Statistical Modeling', 'Data Pipelines', 'ETL'],
  'Programming & Development': ['Python', 'C++', 'SQL', 'FastAPI', 'Flask', 'JavaScript'],
  'Tools & Frameworks': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Git', 'Docker', 'AWS', 'Linux']
}

const achievements = [
  'Team Leader and Hackathon Finalist at NIT Delhi for Guru Setu - selected among top teams for technical innovation',
  'Branch Topper in Electronics and Communication Engineering - consistent academic excellence',
  'Strong ML fundamentals with practical end-to-end project execution across multiple domains',
  'Demonstrated ability to bridge data science and software engineering in production environments'
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const totalScroll = documentHeight - windowHeight
      const progress = totalScroll > 0 ? scrollTop / totalScroll : 0
      setScrollProgress(progress)

      // Update active section based on scroll
      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= windowHeight / 2) {
            setActiveSection(section)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-secondary z-50">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/75 backdrop-blur-md border-b border-border/50 z-40 mt-1 hover:bg-background/95 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight hover:text-accent transition-colors duration-300 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-accent">M</span><span className="text-muted-foreground">.</span>K
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'resume', label: 'Resume' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === id ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:scale-105 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4 animate-in fade-in slide-in-from-left duration-1000">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-pretty bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-accent leading-tight">
                  Mitul Khemani
                </h1>
                <p className="text-xl lg:text-2xl text-accent font-medium animate-in fade-in duration-1000 delay-200">
                  Machine Learning & AI Developer
                </p>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed animate-in fade-in duration-1000 delay-300">
                  Building intelligent, scalable, and data-driven systems that solve real-world problems. 
                  Passionate about transformers, retrieval-augmented generation, and production ML.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-left duration-1000 delay-400">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:scale-105 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right Profile Picture */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-in fade-in zoom-in slide-in-from-right duration-1000">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl blur-2xl animate-pulse" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-accent/30 shadow-2xl hover:shadow-accent/30 transition-all duration-500 hover:border-accent">
                  <img src="/mitulkhemani.jpg" alt="Mitul Khemani" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center items-center w-full">
            <button onClick={() => scrollToSection('about')} className="animate-bounce hover:text-accent/80 transition-colors cursor-pointer bg-transparent border-none">
              <ChevronDown className="w-6 h-6 text-accent" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-t border-border bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-1000">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a pre-final year engineering student at The LNM Institute of Information Technology, 
                Jaipur, with a strong focus on machine learning, deep learning, and AI systems. 
                My journey has been driven by a passion for applying cutting-edge ML techniques to solve real-world problems.
              </p>
              <p>
                Throughout my studies, I've built end-to-end systems spanning NLP, computer vision, 
                time series analysis, and generative AI. What excites me most is the intersection 
                of data science and software engineering—taking research ideas from paper to production.
              </p>
              <p>
                I'm a continuous learner with strong fundamentals in mathematics and algorithms. 
                I thrive in environments where I can tackle complex problems, collaborate with talented teams, 
                and contribute to building intelligent systems that make an impact.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-500 group animate-in fade-in slide-in-from-left duration-700 delay-200">
              <div className="w-10 h-10 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors duration-500 mb-4 flex items-center justify-center">
                <span className="text-accent font-bold">🎓</span>
              </div>
              <h3 className="font-semibold text-lg mb-4 group-hover:text-accent transition-colors duration-500">Education</h3>
              <div>
                <p className="font-medium">B.Tech in Electronics & Communication</p>
                <p className="text-sm text-muted-foreground">The LNM Institute of Information Technology, Jaipur</p>
                <p className="text-sm text-muted-foreground">Aug 2023 - May 2027 | CGPA: 8.16</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-500 group animate-in fade-in slide-in-from-right duration-700 delay-300">
              <div className="w-10 h-10 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors duration-500 mb-4 flex items-center justify-center">
                <span className="text-accent font-bold">⭐</span>
              </div>
              <h3 className="font-semibold text-lg mb-4 group-hover:text-accent transition-colors duration-500">Recognition</h3>
              <div className="space-y-2">
                <p className="text-sm">Branch Topper - Consistent Academic Excellence</p>
                <p className="text-sm">Hackathon Finalist - NIT Delhi (Guru Setu Project)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 border-t border-border bg-gradient-to-b from-accent/5 via-transparent to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={category} className={`bg-card p-6 rounded-lg border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-500 group animate-in fade-in slide-in-from-bottom duration-700 delay-${100 * index}`}>
                <h3 className="font-semibold text-lg mb-4 text-accent group-hover:text-accent transition-colors duration-500">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 bg-secondary text-sm rounded-full border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 cursor-default animate-in fade-in delay-${50 * idx}`}
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

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-6 border-t border-border bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-card border border-border rounded-lg p-8 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-500 group animate-in fade-in slide-in-from-bottom duration-700 delay-${100 * index}`}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-accent group-hover:opacity-80 transition-opacity duration-500">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{project.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 py-6">
                    <div>
                      <h4 className="font-medium text-sm text-accent mb-2">The Problem</h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-accent mb-2">The Solution</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-accent mb-2">Impact & Results</h4>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-xs rounded border border-border text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors text-sm font-medium"
                    >
                      View on GitHub <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 border-t border-border bg-gradient-to-b from-accent/5 via-transparent to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">Achievements & Strengths</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-card p-6 rounded-lg border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-500 group animate-in fade-in slide-in-from-left duration-700 delay-${100 * index}`}
              >
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0 group-hover:scale-150 transition-transform duration-500" />
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6 border-t border-border bg-gradient-to-b from-accent/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">Resume & Details</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download my full resume to see a comprehensive overview of my experience, projects, and accomplishments.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:scale-110 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 group"
          >
            View Resume <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y--1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-t border-border bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-accent">Let's Connect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm actively looking for internships and entry-level opportunities in AI/ML and Data Science. 
              Whether you have a project in mind, a question, or just want to chat about AI and tech, I'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center py-8 animate-in fade-in slide-in-from-down duration-1000 delay-200">
            <a
              href="mailto:khemanimitul@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:scale-110 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-500" />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/mitul-khemani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/mitulkhemani2005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="text-sm text-muted-foreground animate-in fade-in duration-1000 delay-300">
            <p>📧 khemanimitul@gmail.com | 📱 +91 7470924433</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 bg-gradient-to-t from-accent/5 to-transparent">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground animate-in fade-in duration-1000">
          <p className="hover:text-foreground transition-colors duration-300">© 2026 Mitul Khemani. </p>
          <p className="hover:text-accent transition-colors duration-300">All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
