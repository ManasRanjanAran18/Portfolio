import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2,
  BrainCircuit, Database, BarChart3, Sparkles, BriefcaseBusiness, GraduationCap,
  Download, ExternalLink, ChevronRight
} from 'lucide-react'
import './styles.css'

const profile = {
  name: 'Manas Ranjan Aran',
  role: 'Data Science · AI · Machine Learning',
  intro: 'I turn data into insights and build intelligent solutions for real-world problems.',
  email: 'manasranjanaran18@gmail.com',
  linkedin: 'https://www.linkedin.com/in/manas-ranjan-aran',
  github: 'https://github.com/ManasRanjanAran18',
  resume: '',
}

const projects = [
  {
    number: '01',
    name: 'RetailPulse',
    type: 'Retail Intelligence & Forecasting',
    description: 'An AI-powered retail analytics platform for demand forecasting, customer segmentation, and churn-risk insights—helping retailers make smarter inventory and retention decisions.',
    tags: ['Python', 'Scikit-learn', 'Prophet', 'LSTM', 'Streamlit'],
    accent: 'purple',
    icon: BarChart3,
    github: 'https://github.com/ManasRanjanAran18/RetailPulse-AI-Powered-Analytics-Project',
    demo: 'https://retailpulse-dashboard-f5t2.onrender.com',
  },
  {
    number: '02',
    name: 'Multimodal RAG AI Assistance',
    type: 'Retrieval-Augmented Generation',
    description: 'A document question-answering workflow that retrieves relevant passages from uploaded documents and uses them as context to generate grounded answers.',
    tags: ['Python', 'Embeddings', 'FAISS', 'LLM', 'Streamlit'],
    accent: 'blue',
    icon: BrainCircuit,
    github: 'https://github.com/ManasRanjanAran18/Multimodal-RAG-Based-Question-Answering-System',
    demo: '',
  },
  {
    number: '03',
    name: 'Text-to-SQL Assistant',
    type: 'Natural Language Database Query',
    description: 'A conversational interface that translates plain-language questions into SQL queries, executes them against a database, and helps users explore data without writing SQL manually.',
    tags: ['Python', 'LangChain', 'SQL', 'MySQL', 'LLM'],
    accent: 'pink',
    icon: Database,
    github: 'https://github.com/YOUR-GITHUB',
    demo: '',
  },
  {
    number: '04',
    name: 'Movie Recommendation System',
    type: 'Personalized Recommendations',
    description: 'A content-based recommendation prototype that analyzes movie features and suggests titles with similar characteristics to a selected movie.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    accent: 'orange',
    icon: Sparkles,
    github: 'https://github.com/YOUR-GITHUB',
    demo: '',
  },
  {
    number: '05',
    name: 'House Price Prediction',
    type: 'Machine Learning · Regression',
    description: 'A regression project that learns from property features to estimate house prices and exposes predictions through a lightweight API.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'FastAPI'],
    accent: 'green',
    icon: Code2,
    github: 'https://github.com/YOUR-GITHUB',
    demo: '',
  },
  {
    number: '06',
    name: 'Emotion Detection from Text',
    type: 'Natural Language Processing',
    description: 'A text classification model that explores language features and predicts emotion labels from text using a traditional machine-learning pipeline.',
    tags: ['Python', 'TF-IDF', 'NLP', 'Scikit-learn'],
    accent: 'cyan',
    icon: BrainCircuit,
    github: 'https://github.com/YOUR-GITHUB',
    demo: '',
  },
]

const skillGroups = [
  { title: 'Programming & Data', icon: Code2, skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Excel'] },
  { title: 'Analytics & Tools', icon: BarChart3, skills: ['Power BI', 'Matplotlib', 'Streamlit', 'Git', 'MySQL'] },
  { title: 'Machine Learning', icon: BrainCircuit, skills: ['Scikit-learn', 'Regression', 'Classification', 'Clustering', 'Model Evaluation'] },
  { title: 'AI & NLP', icon: Sparkles, skills: ['Generative AI', 'RAG', 'Embeddings', 'LangChain', 'NLP'] },
  
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, { rootMargin: '-30% 0px -60% 0px' })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">M<span>.</span></span>
          <span>MANAS<span className="brand-muted"> / PORTFOLIO</span></span>
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navLinks.map(link => {
            const id = link.toLowerCase()
            return <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} onClick={closeMenu}>{link}</a>
          })}
        </nav>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
            <h1>Turning data<br />into <span className="gradient-text">intelligence.</span></h1>
            <p className="hero-lead">Hey, I'm <strong>{profile.name}</strong> — an aspiring Data Science and AI/ML professional who enjoys transforming complex data into useful insights and intelligent applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href={profile.resume} download>Download resume <Download size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract data visualization">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="core">
              <div className="core-inner"><BrainCircuit size={62} strokeWidth={1.15} /><span>DATA<br />× AI</span></div>
            </div>
            <div className="floating-chip chip-python"><Code2 size={16} /> Python</div>
            <div className="floating-chip chip-ml"><Sparkles size={16} /> ML models</div>
            <div className="floating-chip chip-sql"><Database size={16} /> SQL</div>
            <div className="floating-chip chip-insights"><BarChart3 size={16} /> Insights</div>
            <div className="art-caption">LEARNING · BUILDING · ITERATING</div>
          </div>
          <a className="scroll-indicator" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="section-wrap section-block" id="about">
          <div className="section-heading"><span>01 / ABOUT</span><h2>A little about <span className="gradient-text">me.</span></h2></div>
          <div className="about-grid">
            <div className="about-text">
              <p className="big-statement">Curious by nature.<br />Driven by <span className="gradient-text">data.</span></p>
              <p>I have completed my Master of Computer Applications and am focused on building my career in Data Science, Machine Learning, and AI. I enjoy learning how data can uncover patterns, support decisions, and power practical solutions.</p>
              <p>From data analysis and predictive models to AI-powered applications, I like exploring an idea, building it, testing it, and making it useful.</p>
            </div>
            <div className="about-highlights">
              <div className="highlight-card"><div className="highlight-icon"><BrainCircuit size={19} /></div><div><h3>AI & Machine Learning</h3><p>Exploring models and intelligent systems</p></div></div>
              <div className="highlight-card"><div className="highlight-icon"><BarChart3 size={19} /></div><div><h3>Data Analytics</h3><p>Finding patterns and meaningful insights</p></div></div>
              <div className="highlight-card"><div className="highlight-icon"><Code2 size={19} /></div><div><h3>Hands-on Projects</h3><p>Learning through building practical applications</p></div></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-heading"><span>02 / SKILLS</span><h2>Tools I work <span className="gradient-text">with.</span></h2><p className="section-subtitle">Technologies I've practiced and used in projects.</p></div>
          <div className="skills-grid">
            {skillGroups.map(group => {
              const Icon = group.icon
              return <article className="skill-card" key={group.title}><div className="skill-card-head"><span className="skill-icon"><Icon size={19} /></span><h3>{group.title}</h3></div><div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>
            })}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <div className="section-heading project-heading"><div><span>03 / SELECTED WORK</span><h2>Projects in <span className="gradient-text">focus.</span></h2></div><p className="section-subtitle">A selection of experiments, applications, and learning projects.</p></div>
          <div className="projects-grid">
            {projects.map(project => {
              const Icon = project.icon
              return <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-top"><span className="project-number">{project.number} / PROJECT</span><span className="project-icon"><Icon size={21} /></span></div>
                <div className="project-type">{project.type}</div><h3>{project.name}</h3><p className="project-description">{project.description}</p>
                <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={15} /></a>
                  {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></a> : <span className="coming-soon">Demo link to be added</span>}
                </div>
              </article>
            })}
          </div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-heading"><span>04 / EXPERIENCE</span><h2>Where I've <span className="gradient-text">grown.</span></h2></div>
          
          <article className="timeline-card">
            <div className="timeline-mark"><BriefcaseBusiness size={19} /></div>
            <div className="timeline-content"><div className="timeline-meta"><span>Data Science & Analytics Intern</span><span> OCT / 2026 - Present</span></div><h3>ZIDIO Development, Bengaluru</h3><p>Worked in a learning and consulting environment, supporting learners and professionals in Machine Learning, Python, and SQL through technical guidance, practice, and project-based learning.</p><div className="skill-tags"><span>Machine Learning</span><span>Python</span><span>SQL</span><span>Mentoring</span></div></div>
          </article>


          <article className="timeline-card">
            <div className="timeline-mark"><BriefcaseBusiness size={19} /></div>
            <div className="timeline-content"><div className="timeline-meta"><span>MACHINE LEARNING Intern</span><span> OCT-NOV/2026</span></div><h3>AUSPIFY Technologies</h3><p>Worked in a learning and consulting environment, supporting learners and professionals in Machine Learning, Python, and SQL through technical guidance, practice, and project-based learning.</p><div className="skill-tags"><span>Machine Learning</span><span>Python</span><span>SQL</span><span>Mentoring</span></div></div>
          </article>
          
          <article className="timeline-card">
            <div className="timeline-mark"><BriefcaseBusiness size={19} /></div>
            <div className="timeline-content"><div className="timeline-meta"><span>JUNIOR MACHINE LEARNING ENGINEER</span><span>2026</span></div><h3>JHEX Consulting, Ahmedabad</h3><p>Worked in a learning and consulting environment, supporting learners and professionals in Machine Learning, Python, and SQL through technical guidance, practice, and project-based learning.</p><div className="skill-tags"><span>Machine Learning</span><span>Python</span><span>SQL</span><span>Mentoring</span></div></div>
          </article>
          
          

        </section>

        <section className="section-wrap section-block" id="education">
          <div className="section-heading"><span>05 / EDUCATION</span><h2>My academic <span className="gradient-text">foundation.</span></h2></div>
          <div className="education-grid">
            <article className="education-card"><div className="education-icon"><GraduationCap size={21} /></div><span className="education-date">2024 — 2026</span><h3>Master of Computer Applications (MCA)</h3><p>Harcourt Butler Technical University (HBTU), Uttar Pradesh</p><span className="education-score">CGPA · 8.02</span></article>
            <article className="education-card"><div className="education-icon"><GraduationCap size={21} /></div><span className="education-date">Undergraduate</span><h3>Bachelor's in Computer Science</h3><p>Fakir Mohan University, Odisha</p><span className="education-score">CGPA · 7.8</span></article>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-glow" />
            <span className="contact-eyebrow">06 / CONTACT</span>
            <h2>Let's build something<br /><span className="gradient-text">meaningful.</span></h2>
            <p>I'm looking for opportunities to learn, contribute, and grow in Data Science and AI/ML. Have an opportunity or want to connect? My inbox is open.</p>
            <a className="button button-primary contact-button" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={17} /></a>
            <div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href={`mailto:${profile.email}`}><Mail size={17} /> Email</a></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">M<span>.</span></span><span>MANAS<span className="brand-muted"> / PORTFOLIO</span></span></a><span>Designed & built with curiosity.</span><a href="#home" className="back-top">Back to top ↑</a></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
