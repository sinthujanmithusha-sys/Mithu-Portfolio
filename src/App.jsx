import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            Mithusha Ganesalingam<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>

        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero-section">
        <div className="hero-container">

          <div className="hero-content">

            <div className="available">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="hero-small">
              HELLO, I'M
            </p>

            <h1>
              Mithusha Ganesalingam<span></span>
            </h1>

            <h2>
              Software Engineer
            </h2>

            <p className="hero-description">
              I build modern, scalable and user-friendly software
              applications with a focus on Java, Spring Boot,
              React, JavaScript, SQL and PostgreSQL.
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
                download
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

            </div>

          </div>


          {/* ================= CODE CARD ================= */}

          <div className="hero-card">

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
                  <span className="green">'Mithusha'</span>,
                </p>

                <p className="indent">
                  <span className="property">role:</span>{' '}
                  <span className="green">'Software Engineer'</span>,
                </p>

                <p className="indent">
                  <span className="property">backend:</span>{' '}
                  <span className="green">'Java / Spring Boot'</span>,
                </p>

                <p className="indent">
                  <span className="property">frontend:</span>{' '}
                  <span className="green">'React / JavaScript'</span>,
                </p>

                <p className="indent">
                  <span className="property">database:</span>{' '}
                  <span className="green">'SQL / PostgreSQL'</span>
                </p>

                <p>{'}'}</p>

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
              Turning ideas into software.
            </h2>
          </div>


          <div className="about-grid">

            <div>

              <p className="about-text">
                I'm a Software Engineering undergraduate and
                HND Computing graduate with a strong interest
                in software development and problem solving.
              </p>

              <p className="about-text">
                My main focus is full-stack development.
                I enjoy working with Java, Spring Boot, React,
                REST APIs, SQL and PostgreSQL to build practical
                software solutions.
              </p>

              <p className="about-text">
                I am continuously improving my programming,
                database and software engineering skills through
                academic projects and practical development work.
              </p>

            </div>


            <div className="about-details">

              <div className="detail">
                <span>Education</span>
                <strong>
                  BSc (Hons) Computer Science in Software Engineering
                </strong>
              </div>

              <div className="detail">
                <span>Qualification</span>
                <strong>
                  HND in Computing
                </strong>
              </div>

              <div className="detail">
                <span>Focus</span>
                <strong>
                  Full Stack Development
                </strong>
              </div>

              <div className="detail">
                <span>Location</span>
                <strong>jaffna,
                  Sri Lanka
                </strong>
              </div>

            </div>

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

            <div className="skill-card purple-card">

              <div className="skill-icon">
                ☕
              </div>

              <div className="skill-number">
                01
              </div>

              <h3>
                Java
              </h3>

              <p>
                Object-oriented programming, application
                development, data structures and problem solving.
              </p>

            </div>


            <div className="skill-card blue-card">

              <div className="skill-icon">
                ⚡
              </div>

              <div className="skill-number">
                02
              </div>

              <h3>
                Spring Boot
              </h3>

              <p>
                REST APIs, JPA, Hibernate, DTOs and
                backend application development.
              </p>

            </div>


            <div className="skill-card pink-card">

              <div className="skill-icon">
                ⚛
              </div>

              <div className="skill-number">
                03
              </div>

              <h3>
                React
              </h3>

              <p>
                Building responsive and interactive
                modern web interfaces.
              </p>

            </div>


            <div className="skill-card cyan-card">

              <div className="skill-icon">
                🗄
              </div>

              <div className="skill-number">
                04
              </div>

              <h3>
                SQL & PostgreSQL
              </h3>

              <p>
                Database design, queries, relationships,
                CRUD operations and data management.
              </p>

            </div>


            <div className="skill-card orange-card">

              <div className="skill-icon">
                JS
              </div>

              <div className="skill-number">
                05
              </div>

              <h3>
                JavaScript
              </h3>

              <p>
                Modern JavaScript fundamentals, APIs,
                DOM and frontend development.
              </p>

            </div>


            <div className="skill-card green-card">

              <div className="skill-icon">
                ⌘
              </div>

              <div className="skill-number">
                06
              </div>

              <h3>
                Git & GitHub
              </h3>

              <p>
                Version control, repositories, branching
                and project collaboration.
              </p>

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


          <div className="projects-grid">


            {/* PROJECT 01 */}

            <article className="project-card project-purple">

              <div className="project-top">
                <span>01</span>
                <span>Web Development</span>
              </div>

              <div className="project-icon">
                🧁
              </div>

              <h3>
                Baker Best Bakery Website
              </h3>

              <p>
                A multi-page bakery website with product
                browsing, menu, gallery, contact and online
                ordering functionality.
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
                View Project →
              </a>

            </article>


            {/* PROJECT 02 */}

            <article className="project-card project-blue">

              <div className="project-top">
                <span>02</span>
                <span>Java Application</span>
              </div>

              <div className="project-icon">
                💻
              </div>

              <h3>
                City Electronic Store
              </h3>

              <p>
                A Java-based electronics store management
                application with separate customer and
                administrator functionality.
              </p>

              <div className="tech-list">
                <span>Java</span>
                <span>NetBeans</span>
                <span>OOP</span>
                <span>GUI</span>
              </div>

              <a
                href="https://github.com/sinthujanmithusha-sys/City-Electronic-store"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project →
              </a>

            </article>


            {/* PROJECT 03 */}

            <article className="project-card project-pink">

              <div className="project-top">
                <span>03</span>
                <span>Python</span>
              </div>

              <div className="project-icon">
                🏥
              </div>

              <h3>
                Hospital Management System
              </h3>

              <p>
                A Python-based hospital management application
                organized with models, services, repositories,
                UI components and supporting modules.
              </p>

              <div className="tech-list">
                <span>Python</span>
                <span>Models</span>
                <span>Services</span>
                <span>Repositories</span>
                <span>UI</span>
              </div>

              <a
                href="https://github.com/sinthujanmithusha-sys/Hospital-"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project →
              </a>

            </article>

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


          <div className="experience-item">

            <div className="experience-date">
              2026
            </div>


            <div className="experience-content">

              <h3>
                Software Engineering Intern
              </h3>

              <p className="company">
                Software Development
              </p>

              <p>
                Gaining practical experience in software
                development, backend APIs, databases and
                frontend technologies while developing
                professional engineering skills.
              </p>


              <div className="experience-tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React</span>
                <span>SQL</span>
                <span>PostgreSQL</span>
                <span>Git</span>
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
              I'm open to software engineering opportunities,
              collaborations and interesting projects.
            </p>

          </div>


          <div className="contact-grid">


            {/* EMAIL */}

            <a
              href="mailto:mithushaganesalinkam@gmail.com"
              className="contact-card"
            >

              <div className="contact-icon">
                ✉
              </div>

              <div>
                <span>Email</span>

                <strong>
                  mithushaganesalinkam@gmail.com
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

              <div className="contact-icon">
                in
              </div>

              <div>
                <span>LinkedIn</span>

                <strong>
                  Connect with me ↗
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

              <div className="contact-icon">
                ⌘
              </div>

              <div>
                <span>GitHub</span>

                <strong>
                  View my repositories ↗
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
              download
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
            Mithusha<span>.</span>
          </a>

          <p>
            Software Engineer · Sri Lanka
          </p>

        </div>


        <div className="footer-links">

          <a href="#about">
            About
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        <div className="copyright">
          © 2026 Mithusha. Built with React.
        </div>

      </footer>

    </div>
  )
}

export default App