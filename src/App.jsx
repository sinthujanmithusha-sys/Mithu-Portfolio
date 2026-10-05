import { useState } from 'react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo" onClick={closeMobileMenu}>
            Mithusha Ganesalingam<span>.</span>
          </a>

          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMobileMenu}>Home</a>
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a href="#education" onClick={closeMobileMenu}>Education</a>
            <a href="#experience" onClick={closeMobileMenu}>Experience</a>
            <a href="#projects" onClick={closeMobileMenu}>Projects</a>
            <a href="#skills" onClick={closeMobileMenu}>Skills</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>

          <button
            className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero-section">
        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-status-row">
              <div className="hero-avatar-pill">
                <img src="/mithusha.jpg" alt="Mithusha Ganesalingam" className="hero-avatar-img" />
                <span className="avatar-online-dot"></span>
              </div>
              <div className="available">
                <span className="status-dot"></span>
                Available for opportunities
              </div>
            </div>

            <p className="hero-small">
              HELLO, I'M
            </p>

            <h1>
              Mithusha Ganesalingam<span></span>
            </h1>

            <h2>
              Software Engineering Undergraduate | Full-Stack Developer
            </h2>

            <p className="hero-description">
              Currently pursuing a BSc (Hons) Computer Science – Software Engineering
              with practical full-stack development experience. Dedicated to building
              modern, scalable web applications and robust REST APIs using Java, Spring
              Boot, React, TypeScript, and PostgreSQL.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                View My Work →
              </a>

              <a
                href="/Mithu-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                📄 View CV
              </a>

              <a
                href="/Mithu-CV.pdf"
                download="Mithusha_Ganesalingam_CV.pdf"
                className="secondary-button"
              >
                ↓ Download CV
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/sinthujanmithusha-sys"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/mithusha-ganesalingam-767b00352/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:mithushaganesalinkam@gmail.com"
              >
                Email ↗
              </a>

            </div>

          </div>


          {/* ================= HERO SHOWCASE (PHOTO & CODE) ================= */}

          <div className="hero-card">

            <div className="hero-showcase">

              <div className="hero-photo-frame">
                <img
                  src="/mithusha.jpg"
                  alt="Mithusha Ganesalingam - Software Engineering Undergraduate"
                  className="hero-portrait-img"
                />
                <div className="hero-photo-caption">
                  <span className="caption-dot"></span>
                  <div>
                    <strong>Mithusha Ganesalingam</strong>
                    <span>Software Engineering Undergraduate</span>
                  </div>
                </div>
              </div>

              <div className="code-window">

                <div className="window-header">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="code-content">

                  <p>
                    <span className="purple">const</span>{' '}
                    <span className="blue">developer</span> = {'{'}
                  </p>

                  <p className="indent">
                    <span className="property">name:</span>{' '}
                    <span className="green">'Mithusha Ganesalingam'</span>,
                  </p>

                  <p className="indent">
                    <span className="property">role:</span>{' '}
                    <span className="green">'Software Engineering Undergraduate'</span>,
                  </p>

                  <p className="indent">
                    <span className="property">degree:</span>{' '}
                    <span className="green">'BSc (Hons) Computer Science'</span>,
                  </p>

                  <p className="indent">
                    <span className="property">internship:</span>{' '}
                    <span className="green">'Samuel Gnanam IT Centre'</span>,
                  </p>

                  <p className="indent">
                    <span className="property">focus:</span>{' '}
                    <span className="green">'Java · Spring Boot · React · PostgreSQL'</span>
                  </p>

                  <p>{'}'}</p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <div className="section-container">

          <div className="section-heading">
            <p>ABOUT ME</p>
            <h2>
              Turning ideas into scalable software solutions.
            </h2>
          </div>

          <div className="about-grid">

            <div className="about-photo-col">
              <div className="about-photo-card">
                <img
                  src="/mithusha.jpg"
                  alt="Mithusha Ganesalingam"
                  className="about-photo-img"
                />
                <div className="about-photo-badge">
                  <strong>Mithusha Ganesalingam</strong>
                  <span>Full-Stack Developer · Jaffna, Sri Lanka</span>
                </div>
              </div>
            </div>

            <div className="about-text-col">

              <p className="about-text">
                I am a Software Engineering undergraduate currently pursuing a BSc (Hons)
                Computer Science – Software Engineering at BCAS Campus in partnership with
                Goldsmiths, University of London, having previously completed my HND in
                Computing.
              </p>

              <p className="about-text">
                I completed a 6-month Full-Stack Developer Internship at Samuel Gnanam IT Centre
                (May 1, 2026 – October 30, 2026), where I gained practical experience building
                full-stack web applications, developing and integrating REST APIs, and working
                with PostgreSQL and MySQL databases.
              </p>

              <p className="about-text">
                I am deeply interested in Software Engineering, Full-Stack Development, and
                Backend Development. My hands-on experience includes developing practical web
                applications, responsive user interfaces, and robust backend services with clean
                architecture and maintainable code.
              </p>

            </div>

            <div className="about-details">

              <div className="detail">
                <span>Education</span>
                <strong>
                  BSc (Hons) Computer Science – Software Engineering
                  <span className="detail-tag tag-progress">Currently Pursuing</span>
                </strong>
              </div>

              <div className="detail">
                <span>Qualification</span>
                <strong>
                  HND in Computing
                  <span className="detail-tag tag-done">Completed</span>
                </strong>
              </div>

              <div className="detail">
                <span>Internship</span>
                <strong>
                  Full-Stack Developer Intern · Samuel Gnanam IT Centre
                  <span className="detail-tag tag-done">6 Months | Completed</span>
                </strong>
              </div>

              <div className="detail">
                <span>Specialization</span>
                <strong>
                  Software Engineering &amp; Full-Stack Development
                </strong>
              </div>

              <div className="detail">
                <span>Location</span>
                <strong>
                  Jaffna, Sri Lanka
                </strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section id="education" className="section education-section">

        <div className="section-container">

          <div className="section-heading">
            <p>EDUCATION</p>
            <h2>
              Academic qualifications.
            </h2>
          </div>

          <div className="timeline-list">

            {/* Current Degree (FIRST) */}
            <div className="timeline-item timeline-current">

              <div className="timeline-date">
                2026 – Present
                <span className="badge-status badge-active">In Progress</span>
              </div>

              <div className="timeline-content">

                <div className="timeline-header-row">
                  <h3>BSc (Hons) Computer Science – Software Engineering</h3>
                  <span className="status-pill status-pill-active">Currently In Progress</span>
                </div>

                <p className="timeline-institution">
                  BCAS Campus / Goldsmiths University of London
                </p>

                <p className="timeline-desc">
                  Level 6 Top-Up Degree in Computer Science with a specialization in Software Engineering,
                  advancing comprehensive knowledge in software architecture, distributed systems,
                  and modern software engineering methodologies.
                </p>

              </div>

            </div>


            {/* HND in Computing */}
            <div className="timeline-item">

              <div className="timeline-date">
                2024 – 2026
                <span className="badge-status badge-completed">Completed</span>
              </div>

              <div className="timeline-content">

                <div className="timeline-header-row">
                  <h3>HND in Computing</h3>
                  <span className="status-pill status-pill-completed">Completed</span>
                </div>

                <p className="timeline-institution">
                  BCAS Campus – Jaffna
                </p>

                <p className="timeline-desc">
                  Higher National Diploma covering comprehensive computing foundations, object-oriented
                  programming, relational database management, data structures and algorithms, and full-stack
                  web application development.
                </p>

              </div>

            </div>


            {/* Diploma in English and IT */}
            <div className="timeline-item">

              <div className="timeline-date">
                2024
                <span className="badge-status badge-completed">Completed</span>
              </div>

              <div className="timeline-content">

                <div className="timeline-header-row">
                  <h3>Diploma in English and IT</h3>
                  <span className="status-pill status-pill-completed">Completed</span>
                </div>

                <p className="timeline-institution">
                  ESOFT Metro Campus, Jaffna
                </p>

                <p className="timeline-desc">
                  Professional diploma strengthening technical communication, English language proficiency,
                  and core IT fundamentals.
                </p>

              </div>

            </div>


            {/* G.C.E. Advanced Level */}
            <div className="timeline-item">

              <div className="timeline-date">
                2020
                <span className="badge-status badge-completed">Completed</span>
              </div>

              <div className="timeline-content">

                <div className="timeline-header-row">
                  <h3>G.C.E. Advanced Level (Bio Stream)</h3>
                  <span className="status-pill status-pill-completed">Completed</span>
                </div>

                <p className="timeline-institution">
                  J/Chavakachcheri Hindu College
                </p>

              </div>

            </div>


            {/* G.C.E. Ordinary Level */}
            <div className="timeline-item">

              <div className="timeline-date">
                2017
                <span className="badge-status badge-completed">Completed</span>
              </div>

              <div className="timeline-content">

                <div className="timeline-header-row">
                  <h3>G.C.E. Ordinary Level</h3>
                  <span className="status-pill status-pill-completed">Completed</span>
                </div>

                <p className="timeline-institution">
                  J/Chavakachcheri Hindu College
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="section experience-section"
      >

        <div className="section-container">

          <div className="section-heading">
            <p>EXPERIENCE</p>
            <h2>
              My professional journey.
            </h2>
          </div>


          {/* 1. Samuel Gnanam IT Centre */}
          <div className="experience-item experience-featured">

            <div className="experience-date-col">
              <span className="experience-date-text">May 1, 2026 – October 30, 2026</span>
              <span className="experience-duration-badge">6 Months | Completed</span>
            </div>

            <div className="experience-content">

              <div className="experience-header-row">
                <h3>Full-Stack Developer Intern</h3>
                <span className="status-pill status-pill-completed">6 Months · Completed</span>
              </div>

              <p className="company">
                Samuel Gnanam IT Centre
              </p>

              <p className="experience-summary">
                Gained intensive, hands-on industry experience building and deploying full-stack web
                applications and integrating RESTful microservices.
              </p>

              <ul className="experience-bullets">
                <li>Developed and maintained full-stack web applications using Java, Spring Boot, React and TypeScript/JavaScript.</li>
                <li>Developed and integrated REST APIs and worked with PostgreSQL/MySQL databases.</li>
                <li>Worked on a Defect Tracker System including defect management, filtering, validation and dashboard functionality.</li>
                <li>Used Git/GitHub and Postman for version control and API testing.</li>
                <li>Debugged application issues and worked on frontend-backend integration.</li>
              </ul>

              <div className="experience-tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>REST APIs</span>
                <span>PostgreSQL</span>
                <span>MySQL</span>
                <span>Git</span>
                <span>Postman</span>
              </div>

            </div>

          </div>


          {/* 2. Ceylinco Insurance */}
          <div className="experience-item">

            <div className="experience-date-col">
              <span className="experience-date-text">October 2021 – May 2022</span>
              <span className="experience-duration-badge badge-neutral">Completed</span>
            </div>

            <div className="experience-content">

              <div className="experience-header-row">
                <h3>Trainee / Office Assistant</h3>
                <span className="status-pill status-pill-completed">Completed</span>
              </div>

              <p className="company">
                Ceylinco Insurance
              </p>

              <ul className="experience-bullets">
                <li>Assisted with daily administrative and operational tasks within the organization.</li>
                <li>Maintained customer-related records and documentation with accuracy and diligence.</li>
                <li>Developed communication, teamwork, and professional workplace skills.</li>
                <li>Gained practical exposure to office systems, customer handling, and business operations.</li>
              </ul>

              <div className="experience-tags">
                <span>Administration</span>
                <span>Customer Records</span>
                <span>Teamwork</span>
                <span>Communication</span>
                <span>Office Systems</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section">

        <div className="section-container">

          <div className="section-heading">
            <p>MY WORK</p>
            <h2>
              Projects I've built.
            </h2>
          </div>


          {/* FEATURED PROJECT: DEFECT TRACKER SYSTEM */}
          <article className="featured-project-card">

            <div className="featured-badge-bar">
              <span className="featured-badge">⭐ FEATURED PROJECT</span>
              <span className="featured-category">Full-Stack Software Development · Industry Experience</span>
            </div>

            <div className="featured-body">

              <div className="featured-info">

                <div className="featured-icon-title">
                  <div className="project-icon featured-icon">
                    🛡️
                  </div>
                  <div>
                    <h3 className="featured-title">Defect Tracker System</h3>
                    <p className="featured-subtitle">
                      Enterprise-Grade Full-Stack Defect Management Application
                    </p>
                  </div>
                </div>

                <p className="featured-desc">
                  A comprehensive full-stack defect management application engineered to streamline the defect
                  lifecycle from initial reporting through triage, assignment, verification, and resolution.
                  Built with robust frontend-backend integration, secure RESTful APIs, and efficient database modeling.
                </p>

                <div className="featured-features-box">
                  <h4>Key Capabilities &amp; Features:</h4>
                  <ul className="features-grid">
                    <li>✓ Defect management &amp; lifecycle tracking</li>
                    <li>✓ Project and release management</li>
                    <li>✓ Module and submodule management</li>
                    <li>✓ Multi-criteria defect filtering &amp; search</li>
                    <li>✓ Robust input &amp; status validation</li>
                    <li>✓ Interactive dashboard with defect metrics</li>
                    <li>✓ Seamless frontend-backend REST API integration</li>
                  </ul>
                </div>

                <div className="tech-list featured-tech-list">
                  <span className="tech-highlight">React</span>
                  <span className="tech-highlight">TypeScript</span>
                  <span className="tech-highlight">JavaScript</span>
                  <span className="tech-highlight">Java</span>
                  <span className="tech-highlight">Spring Boot</span>
                  <span className="tech-highlight">REST APIs</span>
                  <span className="tech-highlight">PostgreSQL</span>
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Postman</span>
                </div>

                <div className="featured-actions">
                  <a
                    href="https://github.com/sinthujanmithusha-sys"
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button"
                  >
                    View on GitHub ↗
                  </a>
                  <a
                    href="#experience"
                    className="secondary-button"
                  >
                    View Internship Context →
                  </a>
                </div>

              </div>

            </div>

          </article>


          {/* OTHER PROJECTS GRID */}
          <div className="projects-grid">

            {/* PROJECT 02: Cybersecurity Research */}
            <article className="project-card project-purple">

              <div className="project-top">
                <span>02</span>
                <span>Individual Research</span>
              </div>

              <div className="project-icon">
                🔒
              </div>

              <h3>
                Cybersecurity Research Project
              </h3>

              <p className="project-subheading">
                Detection of Hidden Security Risks in Screen Sharing Based on User Experience
              </p>

              <p>
                Conducted analytical research to detect hidden security and privacy risks in
                screen sharing through user experience assessment. Used Python for analyzing
                collected security datasets, identifying vulnerability factors, and developing
                privacy recommendations.
              </p>

              <div className="tech-list">
                <span>Python</span>
                <span>Data Analysis</span>
                <span>UX Research</span>
                <span>Security Risk Analysis</span>
              </div>

              <a
                href="https://github.com/sinthujanmithusha-sys"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project ↗
              </a>

            </article>


            {/* PROJECT 03: Banking System */}
            <article className="project-card project-blue">

              <div className="project-top">
                <span>03</span>
                <span>Java Application</span>
              </div>

              <div className="project-icon">
                🏦
              </div>

              <h3>
                Banking System
              </h3>

              <p className="project-subheading">
                Console Banking Application with Core Financial Operations
              </p>

              <p>
                A console-based banking application developed in Java applying Object-Oriented
                Programming (OOP) principles and efficient Data Structures &amp; Algorithms.
                Implements account creation, deposit handling, balance inquiries, secure withdrawals,
                and fund transfers.
              </p>

              <div className="tech-list">
                <span>Java</span>
                <span>OOP</span>
                <span>Data Structures</span>
                <span>Algorithms</span>
              </div>

              <a
                href="https://github.com/sinthujanmithusha-sys"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project ↗
              </a>

            </article>


            {/* PROJECT 04: Baker Best Bakery Website */}
            <article className="project-card project-pink">

              <div className="project-top">
                <span>04</span>
                <span>Web Development</span>
              </div>

              <div className="project-icon">
                🧁
              </div>

              <h3>
                Baker Best Bakery Website
              </h3>

              <p className="project-subheading">
                Dynamic Bakery E-Commerce &amp; Ordering Platform
              </p>

              <p>
                A responsive multi-page web application integrated with a relational database.
                Features dynamic product browsing, categorized menus, interactive gallery,
                contact inquiries, and online order processing.
              </p>

              <div className="tech-list">
                <span>PHP</span>
                <span>MySQL</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Bootstrap</span>
                <span>JavaScript</span>
              </div>

              <a
                href="https://github.com/sinthujanmithusha-sys/Baker-best"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project ↗
              </a>

            </article>


            {/* PROJECT 05: Medicare Hospital Management System */}
            <article className="project-card project-cyan">

              <div className="project-top">
                <span>05</span>
                <span>System Architecture</span>
              </div>

              <div className="project-icon">
                🏥
              </div>

              <h3>
                Medicare Hospital Management System
              </h3>

              <p className="project-subheading">
                Python Application Structured with SOLID Principles &amp; Design Patterns
              </p>

              <p>
                A structured hospital management software built in Python adhering to SOLID
                principles and clean code practices. Architected with distinct layers for models,
                services, repositories, and UI components to maximize scalability and maintainability.
              </p>

              <div className="tech-list">
                <span>Python</span>
                <span>OOP</span>
                <span>SOLID Principles</span>
                <span>Design Patterns</span>
                <span>Clean Code</span>
              </div>

              <a
                href="https://github.com/sinthujanmithusha-sys/Hospital-"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project ↗
              </a>

            </article>


            {/* PROJECT 06: City Electronics POS System */}
            <article className="project-card project-orange">

              <div className="project-top">
                <span>06</span>
                <span>Desktop Application</span>
              </div>

              <div className="project-icon">
                💻
              </div>

              <h3>
                City Electronics POS System
              </h3>

              <p className="project-subheading">
                Point-of-Sale &amp; Store Management Application
              </p>

              <p>
                A Java-based electronics store management and Point-of-Sale (POS) application
                with separate customer and administrator workflows. Features billing calculation,
                product catalog management, and invoice generation using Java file handling.
              </p>

              <div className="tech-list">
                <span>Java</span>
                <span>OOP</span>
                <span>GUI</span>
                <span>File Handling</span>
                <span>NetBeans</span>
              </div>

              <a
                href="https://github.com/sinthujanmithusha-sys/City-Electronic-store"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project ↗
              </a>

            </article>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="section skills-section">

        <div className="section-container">

          <div className="section-heading">
            <p>MY SKILLS</p>
            <h2>
              Technologies I work with.
            </h2>
          </div>

          <div className="skills-grid">

            {/* 01. PROGRAMMING */}
            <div className="skill-card purple-card">

              <div className="skill-icon">
                ☕
              </div>

              <div className="skill-number">
                01
              </div>

              <h3>
                Programming
              </h3>

              <p className="skill-cat-desc">
                Core languages for enterprise application development and algorithmic problem solving.
              </p>

              <div className="skill-tags">
                <span className="skill-pill">Java</span>
                <span className="skill-pill">JavaScript</span>
                <span className="skill-pill">TypeScript</span>
                <span className="skill-pill">Python</span>
                <span className="skill-pill">PHP</span>
              </div>

            </div>


            {/* 02. FRONTEND */}
            <div className="skill-card pink-card">

              <div className="skill-icon">
                ⚛
              </div>

              <div className="skill-number">
                02
              </div>

              <h3>
                Frontend
              </h3>

              <p className="skill-cat-desc">
                Building responsive, accessible, and dynamic user interfaces for modern web applications.
              </p>

              <div className="skill-tags">
                <span className="skill-pill">HTML</span>
                <span className="skill-pill">CSS</span>
                <span className="skill-pill">React</span>
                <span className="skill-pill">Bootstrap</span>
              </div>

            </div>


            {/* 03. BACKEND */}
            <div className="skill-card blue-card">

              <div className="skill-icon">
                ⚡
              </div>

              <div className="skill-number">
                03
              </div>

              <h3>
                Backend
              </h3>

              <p className="skill-cat-desc">
                Designing scalable server-side architectures, RESTful APIs, and business logic.
              </p>

              <div className="skill-tags">
                <span className="skill-pill">Java</span>
                <span className="skill-pill">Spring Boot</span>
                <span className="skill-pill">Node.js</span>
                <span className="skill-pill">REST APIs</span>
              </div>

            </div>


            {/* 04. DATABASES */}
            <div className="skill-card cyan-card">

              <div className="skill-icon">
                🗄
              </div>

              <div className="skill-number">
                04
              </div>

              <h3>
                Databases
              </h3>

              <p className="skill-cat-desc">
                Relational and document database design, query optimization, CRUD operations, and migrations.
              </p>

              <div className="skill-tags">
                <span className="skill-pill">PostgreSQL</span>
                <span className="skill-pill">MySQL</span>
                <span className="skill-pill">MongoDB</span>
                <span className="skill-pill">MariaDB</span>
              </div>

            </div>


            {/* 05. TOOLS */}
            <div className="skill-card green-card">

              <div className="skill-icon">
                🛠
              </div>

              <div className="skill-number">
                05
              </div>

              <h3>
                Tools
              </h3>

              <p className="skill-cat-desc">
                Version control, API testing, build automation tools, and integrated development environments.
              </p>

              <div className="skill-tags">
                <span className="skill-pill">Git</span>
                <span className="skill-pill">GitHub</span>
                <span className="skill-pill">Postman</span>
                <span className="skill-pill">Maven</span>
                <span className="skill-pill">Gradle</span>
                <span className="skill-pill">VS Code</span>
                <span className="skill-pill">IntelliJ IDEA</span>
                <span className="skill-pill">MySQL Workbench</span>
              </div>

            </div>


            {/* 06. CLOUD */}
            <div className="skill-card indigo-card">

              <div className="skill-icon">
                ☁
              </div>

              <div className="skill-number">
                06
              </div>

              <h3>
                Cloud
              </h3>

              <p className="skill-cat-desc">
                Cloud services and deployment fundamentals for hosting and scalable cloud solutions.
              </p>

              <div className="skill-tags">
                <span className="skill-pill">Microsoft Azure</span>
              </div>

            </div>


            {/* 07. OTHER */}
            <div className="skill-card orange-card">

              <div className="skill-icon">
                🎨
              </div>

              <div className="skill-number">
                07
              </div>

              <h3>
                Other
              </h3>

              <p className="skill-cat-desc">
                UI/UX wireframing, graphic assets design, and professional office productivity tools.
              </p>

              <div className="skill-tags">
                <span className="skill-pill">Figma</span>
                <span className="skill-pill">Canva</span>
                <span className="skill-pill">MS Office</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-container">

          <div className="contact-content">

            <p className="contact-small">
              GET IN TOUCH
            </p>

            <h2>
              Let's build something
              <span> amazing.</span>
            </h2>

            <p>
              I am currently open to Software Engineering, Full-Stack Developer,
              and Backend Developer opportunities, collaborations, and projects.
              Feel free to connect directly via email, phone, or LinkedIn.
            </p>

          </div>


          <div className="contact-grid">

            {/* EMAIL */}
            <a
              href="mailto:mithushaganesalinkam@gmail.com"
              className="contact-card"
            >
              <div className="contact-icon contact-icon-email">
                ✉
              </div>
              <div>
                <span>Email</span>
                <strong>
                  mithushaganesalinkam@gmail.com
                </strong>
              </div>
            </a>


            {/* PHONE */}
            <a
              href="tel:0741213202"
              className="contact-card"
            >
              <div className="contact-icon contact-icon-phone">
                ☎
              </div>
              <div>
                <span>Phone</span>
                <strong>
                  0741213202
                </strong>
              </div>
            </a>


            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/mithusha-ganesalingam-767b00352/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon contact-icon-linkedin">
                in
              </div>
              <div>
                <span>LinkedIn</span>
                <strong>
                  Connect on LinkedIn ↗
                </strong>
              </div>
            </a>


            {/* GITHUB */}
            <a
              href="https://github.com/sinthujanmithusha-sys"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon contact-icon-github">
                ⌘
              </div>
              <div>
                <span>GitHub</span>
                <strong>
                  sinthujanmithusha-sys ↗
                </strong>
              </div>
            </a>


            {/* PORTFOLIO */}
            <a
              href="https://mithu-portfolio-five.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon contact-icon-web">
                🌐
              </div>
              <div>
                <span>Live Portfolio</span>
                <strong>
                  mithu-portfolio-five.vercel.app ↗
                </strong>
              </div>
            </a>

          </div>


          {/* CV BUTTONS */}
          <div className="contact-cv-buttons">

            <a
              href="/Mithu-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              📄 View My CV
            </a>

            <a
              href="/Mithu-CV.pdf"
              download="Mithusha_Ganesalingam_CV.pdf"
              className="secondary-button"
            >
              ↓ Download CV
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div>

          <a
            href="#home"
            className="footer-logo"
          >
            Mithusha Ganesalingam<span>.</span>
          </a>

          <p>
            Software Engineering Undergraduate | Full-Stack Developer · Jaffna, Sri Lanka
          </p>

        </div>


        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>

        </div>


        <div className="copyright">
          © 2026 Mithusha Ganesalingam. Built with React.
        </div>

      </footer>

    </div>
  )
}

export default App