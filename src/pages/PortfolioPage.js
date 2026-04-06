import React from "react";
import "../styles/PortfolioPage.css";

function PortfolioPage() {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="hero-content">
          <div className="hero-avatar">
            <div className="avatar-placeholder">VN</div>
          </div>
          <h1 className="hero-title">Vidushi Negi</h1>
          <p className="hero-subtitle">Full Stack Developer & Tech Enthusiast</p>
          
          <div className="contact-links">
            <a href="https://github.com/vidushinegi05" target="_blank" rel="noopener noreferrer" className="contact-btn github">
              <span className="icon">🔗</span> GitHub
            </a>
            <a href="https://linkedin.com/in/vidushin03" target="_blank" rel="noopener noreferrer" className="contact-btn linkedin">
              <span className="icon">💼</span> LinkedIn
            </a>
            <a href="mailto:negi.vidushi05@gmail.com" className="contact-btn email">
              <span className="icon">✉️</span> Email
            </a>
            <a href="tel:+916398310851" className="contact-btn phone">
              <span className="icon">📱</span> Call
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="portfolio-content">
        {/* Projects Section */}
        <section className="portfolio-section projects-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <article className="project-card">
              <div className="project-header">
                <h3>Meme Gen AI</h3>
                <span className="project-period">Sep 2025 – Dec 2025</span>
              </div>
              <div className="tech-stack">
                <span className="tech-badge">React</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">REST APIs</span>
              </div>
              <ul className="project-highlights">
                <li>Designed and developed the frontend interface for an AI meme generator</li>
                <li>Implemented UI components for text prompt input and meme preview</li>
                <li>Integrated frontend with backend APIs to fetch generated content</li>
                <li>Built a responsive layout for cross-device compatibility</li>
                <li>Focused on user-friendly design and smooth interaction</li>
              </ul>
            </article>

            <article className="project-card">
              <div className="project-header">
                <h3>AI-Powered DSA Learning Chatbot</h3>
                <span className="project-period">Jul 2025 – Aug 2025</span>
              </div>
              <div className="tech-stack">
                <span className="tech-badge">React</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">REST APIs</span>
              </div>
              <ul className="project-highlights">
                <li>Developed the frontend interface for an AI-based chatbot</li>
                <li>Created interactive chat UI for coding questions</li>
                <li>Implemented quiz display and result visualization</li>
                <li>Connected frontend with backend APIs for AI responses</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Education Section */}
        <section className="portfolio-section education-section">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            <article className="education-card primary">
              <div className="education-header">
                <h3>Bachelor of Technology in Computer Science</h3>
                <span className="institution">Vellore Institute of Technology</span>
              </div>
              <div className="education-details">
                <span className="period">Jul. 2024 – Jul. 2028</span>
                <span className="score">CGPA: 8.92</span>
              </div>
            </article>

            <article className="education-card">
              <div className="education-header">
                <h3>Class XII (CBSE)</h3>
                <span className="institution">Saubhagyam International Academy, Dehradun</span>
              </div>
              <div className="education-details">
                <span className="period">Jun. 2021 – Mar. 2023</span>
                <span className="score">80.6%</span>
              </div>
            </article>

            <article className="education-card">
              <div className="education-header">
                <h3>Class X (ICSE)</h3>
                <span className="institution">St. Patrick's Academy, Dehradun</span>
              </div>
              <div className="education-details">
                <span className="period">Apr. 2019 – Mar. 2021</span>
                <span className="score">95.0%</span>
              </div>
            </article>
          </div>
        </section>

        {/* Skills Section */}
        <section className="portfolio-section skills-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-group">
              <h4 className="skill-category">Languages</h4>
              <div className="skill-items">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C/C++</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML/CSS</span>
              </div>
            </div>

            <div className="skill-group">
              <h4 className="skill-category">Frameworks</h4>
              <div className="skill-items">
                <span className="skill-tag">React</span>
              </div>
            </div>

            <div className="skill-group">
              <h4 className="skill-category">Developer Tools</h4>
              <div className="skill-items">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">VS Code</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>Last updated: March 27, 2026</p>
        <p>© 2026 Vidushi Negi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PortfolioPage;
