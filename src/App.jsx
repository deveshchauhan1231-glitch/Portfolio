import { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import photo from "./assets/photo.jpeg";
import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";

import SplashCursor from './splashCursor.jsx'




// Keeping content in small data lists makes the portfolio easy to refresh later.
const skills = [
  ["01", "Frontend", "React, JavaScript, HTML & CSS"],
  ["02", "Backend", "Node.js, Express, REST APIs"],
  ["03", "Data", "MongoDB, MySQL"],
  ["04", "Machine Learning", "Python, Pandas, NumPy, Matplotlib, Seaborn, scikit-learn"],
];

const words = [
  "Java Full-Stack",
  "Deep Learning",
  "Docker",
  "System Design",
  "LLM Applications"
];

const tools = [
  ["01", "Version Control", "Git, GitHub"],
  ["02", "Editor", "VS Code, PyCharm"],
  ["03", "API Testing", "Postman"],
  ["04", "Deployment", "Vercel, Netlify, Render"],
];
const projects = [
  ["01", "GradGig", "A student freelance marketplace with real-time chat and NLP-matched gigs.", "MERN · Redis · Socket.io · Clerk"],
  ["02", "Movex", "A fitness tracker with a GitHub-style workout heatmap and a bilingual AI coach.", "MERN · Groq AI · Supabase Auth"],
  ["03", "SpotLightX", "A two-sided marketplace connecting artists with event organisers via role-based bookings.", "MERN · Tailwind"
],
  ["04", "ResuMatch", "Matches resumes to job descriptions and flags skill gaps using NLP.", "Python · spaCy · Sentence Transformers"],
  ["05", "IPL Win Predictor", "Predicts match outcomes live from historical IPL data.", "Python · Random Forest · scikit-learn"],
  ["06", "FreeFlow Billing", "A free, login-free invoice and estimate generator with browser-only data storage.", "React"],
  ["07", "Inkr", "A browser doodle tool to draw and export sketches as images.", "React · HTML5 Canvas"],
  ["08", "Lightsout", "An F1-themed reaction speed game.", "React"],
];

// Paste each deployed project URL between the quotes. Leave it empty until it is live.
const projectUrls = {
  GradGig: "https://grad-gig.vercel.app",
  Movex: "https://move-x-nu.vercel.app",
  SpotLightX: "https://github.com/deveshchauhan1231-glitch/SpotLightX",
  ResuMatch: "https://smartresumatch.streamlit.app",
  "IPL Win Predictor": "https://wincast-predictor.streamlit.app",
  "FreeFlow Billing": "https://free-flow-billing.vercel.app/",
  Inkr: "https://inkr-chi.vercel.app",
  Lightsout: "https://lightsareout.netlify.app",
};

// Edit these bullet points whenever a project gains a new feature or capability.
const projectBullets = {
  GradGig: ["Role-based student and client experiences", "Real-time messaging for project discussions","Integrated Redis caching to reduce database load and improve API response time","secure authentication via Clerk"],
  Movex: ["Workout tracking with an activity heatmap","Implemented secure authentication using Supabase Auth", "Bilingual AI fitness coach", "Personal progress insights","Food image to calories and macro breakdown via sahay+","Collection of different exercises with steps"],
  SpotLightX: ["Artist and event-organiser workflows", "Role-based booking experience", "Find Sponsors,artists and organisers with filters","Real time chat"],
  ResuMatch: ["Compares resumes against job descriptions", "Identifies missing skills sematically", "NLP-powered relevance scoring","Possible roles to transitioninto with similarity %age"],
  "IPL Win Predictor": ["Uses historical IPL match data", "Predicts live match outcomes", "Random Forest classification model"],
  "FreeFlow Billing": ["Creates invoices and estimates", "Works without an account or login", "Saves data locally in the browser"],
  Inkr: ["Draw directly in the browser", "Built with the HTML5 Canvas API", "Export sketches as images"],
  Lightsout: ["F1-inspired reaction-time challenge", "Fast, minimal game loop", "Gives your reaction time"],
};

function App() {

  
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  // One AOS setup controls every scroll entrance on the page.
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 60,
      anchorPlacement: "top-bottom",
    });

    const refreshTimer = window.setTimeout(() => AOS.refreshHard(), 100);
    return () => window.clearTimeout(refreshTimer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    
    <main className="site-shell">
      <SplashCursor
  DENSITY_DISSIPATION={3.5}
  VELOCITY_DISSIPATION={2}
  PRESSURE={0.1}
  CURL={3}
  SPLAT_RADIUS={0.2}
  SPLAT_FORCE={6000}
  COLOR_UPDATE_SPEED={10}
  SHADING
  RAINBOW_MODE={false}
  COLOR="#EAB308"
/>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Sticky navigation collapses into the button on smaller screens. */}
      <header className="nav-wrap">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-dot">D</span>Devesh<span className="gold">.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <i /><i /><i />
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[["Home", "home"], ["About", "about"], ["Work", "work"], ["Skills", "skills"], ["Contact", "contact"]].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <a className="nav-cta" href="mailto:deveshchauhan1.2.3.1@gmail.com">Let&apos;s talk <span>↗</span></a>
      </header>

      {/* Hero: edit this text and the social links below to personalise the landing view. */}
      <section className="hero" id="home">
        <div className="hero-copy" data-aos="fade-up">
          <p className="overline"><span /> Full-stack developer</p>
          <p className="intro-line">Hello, I&apos;m</p>
          <h1>Devesh<br /><em>Chauhan</em></h1>
          <p className="hero-description">I build thoughtful digital products where clean code, sharp interactions and useful ideas meet.</p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">Explore my work <span>↓</span></a>
            <a href="#contact" className="text-link">Get in touch <span>↗</span></a>
          </div>
        </div>
        <div className="hero-portrait" data-aos="fade-up" data-aos-delay="120">
          <div className="portrait-halo" />
          <div className="portrait-frame"><img src={photo} alt="Devesh Chauhan" /></div>
          <div className="portrait-note"><span>Based in</span><strong>Gurugram, IN</strong></div>
          <div className="scroll-cue"><span /> Scroll to explore</div>
        </div>
      </section>

      {/* This strip is intentionally text-based so it stays fast and needs no logo assets. */}
      <section className="marquee" aria-label="Core technologies">
  <Marquee speed={50} pauseOnHover gradient={false} autoFill>
    <span className="marquee-content">
    <b>✦</b> MONGODB <b>✦</b> JAVASCRIPT <b>✦</b> JAVA <b>✦</b> PYTHON <b>✦</b>
    REACT <b>✦</b> NODE.JS <b>✦</b> EXPRESS.JS <b>✦</b> MACHINE LEARNING
    </span>
  </Marquee>
</section>
<section className="about section" id="about" data-aos="fade-up">
        <div className="section-kicker">01 — About me</div>
        <div className="about-grid">
          <h2>A developer who<br />cares about the <em> details.</em></h2>
          <div className="about-copy">
            <p>I&apos;m a B.Tech Computer Science student at BML Munjal University, building robust applications with the MERN stack and a strong problem-solving mindset.</p>
            <p>From interfaces that feel intuitive to backend systems that stay dependable, I enjoy turning ideas into experiences people can actually use.</p>
            <a href="#contact" className="text-link">More about me <span>↗</span></a>
          </div>
        </div>
        <div className="stats-grid">
          <div><strong>450<span>+</span></strong><p>Problems solved</p></div>
          <div><strong>8.98</strong><p>Current CGPA</p></div>
          <div><strong>06<span>+</span></strong><p>Projects crafted</p></div>
        </div>
      </section>

      {/* Project cards use AOS for their alternating scroll entrance. */}
      <section className="section" id="work">
        <div className="section-heading"><div><div className="section-kicker">02 — Selected work</div><h2>Things I&apos;ve <em>built.</em></h2></div><p>Projects made with curiosity,<br />intent and care.</p></div>
        <div className="project-grid">
          {projects.map(([number, title, description, stack], index) => {
            const projectUrl = projectUrls[title];

            return (
            <article
              className={`project-card project-${index + 1}`}
              key={title}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-anchor-placement="top-bottom"
              role="button"
              tabIndex="0"
              onClick={() => setExpandedProject(expandedProject === title ? null : title)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setExpandedProject(expandedProject === title ? null : title);
                }
              }}
            >
              <div className={`project-card-content ${expandedProject === title ? "is-flipped" : ""}`}>
              <div className="project-card-face project-card-front">
              <div className="project-top">
                <span>{number}</span>
                {projectUrl ? (
                  <a className="project-link" href={projectUrl} target="_blank" rel="noreferrer" aria-label={`Open ${title}`}>↗</a>
                ) : (
                  <span className="arrow">↗</span>
                )}
              </div>
              <div className="project-visual"><span>{index === 0 ? "▣" : index === 1 ? "⌘" : index === 2 ? "✦" : "☁"}</span></div>
              <div className="project-info"><p>{stack}</p><h3>{title}</h3><span>{description}</span></div>
              </div>
              <div className="project-card-face project-card-back">
                <div className="project-top"><span>{number} — Details</span><span className="arrow">↩</span></div>
                <h3>{title}</h3>
                <p className="details-stack">Tech stack: {stack}</p>
                <ul>{projectBullets[title].map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                <p className="flip-hint">Click anywhere to flip back</p>
              </div>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <section className="skills-section section" id="skills" data-aos="fade-up">
        <div className="section-heading"><div><div className="section-kicker">03 — Stack</div><h2>My technical <em>foundation.</em></h2></div><p>The languages and frameworks<br />I build with day to day.</p></div>
        <div className="skill-list">
          {skills.map(([number, title, description]) => <div className="skill-row" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>↗</b></div>)}
        </div>
      </section>

      <section className="skills-section section" id="tools" data-aos="fade-up">
        <div className="section-heading"><div><div className="section-kicker">04 — Tools</div><h2>My digital <em>toolkit.</em></h2></div><p>The setup that takes ideas<br />from idea to deployed.</p></div>
        <div className="skill-list">
          {tools.map(([number, title, description]) => <div className="skill-row" key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>↗</b></div>)}
        </div>
      </section>

      <section className="section contact section" >
        <h2>Currently <em>Focusing </em> on</h2>
        <div className="typewriter-container">
        <Typewriter 
      words={words}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={45}
      delaySpeed={1800}
    />
    </div>

      </section>

      <section className="contact section" id="contact" data-aos="fade-up">
        <div className="section-kicker">05 — Contact</div>
        <p className="contact-prelude">Have an idea in mind?</p>
        <h2>Let&apos;s make something<br /><em>great together.</em></h2>
        <a className="email-link"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=deveshchauhan1.2.3.1@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  deveshchauhan1.2.3.1@gmail.com <span>↗</span></a>
        <div className="contact-footer"><span>© {new Date().getFullYear()} Devesh Chauhan</span><div><a href="https://www.linkedin.com/in/devesh-chauhan-0a486b371/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/deveshchauhan1231-glitch" target="_blank" rel="noreferrer">Github</a><a href="https://www.geeksforgeeks.org/profile/this0is0devesh" target="_blank" rel="noreferrer">GeeksforGeeks</a><a href="https://www.hackerrank.com/profile/deveshchauhan1_1" target="_blank" rel="noreferrer">HackerRank</a></div></div>
      </section>
    </main>
  );
}

export default App;
