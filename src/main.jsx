import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin,
  Code2, Database, Smartphone, Cloud, Layers3, ExternalLink, Menu, X,
  Terminal, BriefcaseBusiness, GraduationCap, Download, Send, CheckCircle2
} from 'lucide-react';
import './style.css';
import majuPhoto from './assets/maju.jpg';

const skills = [
  { title: 'Frontend', icon: Code2, items: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Redux', 'Responsive Design'] },
  { title: 'Backend', icon: Terminal, items: ['Node.js', 'Express.js', 'REST APIs', 'PHP', 'JWT', 'Authentication & CRUD'] },
  { title: 'Mobile', icon: Smartphone, items: ['Flutter', 'Dart', 'Android', 'Mobile UI', 'REST API Integration', 'GPS / Location'] },
  { title: 'Database', icon: Database, items: ['MongoDB', 'MySQL'] },
  { title: 'DevOps & Tools', icon: Cloud, items: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'AWS', 'Vercel', 'Render', 'Postman'] }
];

const projects = [
  { n: '01', name: 'Site Tracker', type: 'MOBILE · OPERATIONS', desc: 'Employee attendance and site operations platform with GPS punch-in/punch-out, overtime tracking, site management and an admin dashboard.', stack: ['Flutter', 'PHP', 'MySQL', 'GPS'], color: 'violet', mark: 'ST' },
  { n: '02', name: 'RESTOFIX', type: 'WEB · RESTAURANT', desc: 'Restaurant management solution designed to support day-to-day operational workflows and management activities.', stack: ['React.js', 'Node.js', 'MongoDB'], color: 'blue', mark: 'RF' },
  { n: '03', name: 'Stock Management', type: 'WEB · INVENTORY', desc: 'Inventory application covering products, purchases, sales and reporting workflows for day-to-day stock control.', stack: ['React.js', 'Node.js', 'MongoDB'], color: 'green', mark: 'SM' },
  { n: '04', name: 'Workshop Management', type: 'WEB · SERVICE', desc: 'Bike workshop system for customer records, complaints, changed parts, labour charges, totals and image capture.', stack: ['React.js', 'Node.js', 'MongoDB', 'Cloudinary'], color: 'orange', mark: 'WM' },
  { n: '05', name: 'Feedback System', type: 'WEB · ANALYTICS', desc: 'Digital customer feedback platform with secure authentication, feedback collection, dashboard and reporting features.', stack: ['React.js', 'Node.js', 'MongoDB', 'JWT'], color: 'pink', mark: 'FS' },
  { n: '06', name: 'Food Ordering App', type: 'WEB · E-COMMERCE', desc: 'Responsive food ordering experience with menu browsing, cart functionality and order-management workflows.', stack: ['React.js', 'REST API', 'CSS'], color: 'yellow', mark: 'FO' },
  { n: '07', name: 'Income Expense Tracker', type: 'WEB · FINANCE', desc: 'Personal finance tracker with authentication and password-reset functionality for managing income and expenses.', stack: ['React.js', 'Node.js', 'MongoDB'], color: 'cyan', mark: 'IE' },
  { n: '08', name: 'Business & E-commerce Sites', type: 'WEB · CLIENT PROJECTS', desc: 'Responsive dynamic and static websites for business and e-commerce-style use cases.', stack: ['React.js', 'JavaScript', 'CSS'], color: 'slate', mark: 'WE' }
];

const experience = [
  { role: 'Software Developer (MERN / Full Stack)', company: 'Tenderwoods Solutions Pvt. Ltd.', date: 'July 2023 — September 2026', points: ['Developed full-stack applications using React.js, Node.js, Express.js and MongoDB.', 'Built reusable React components and responsive interfaces with Hooks and REST API integration.', 'Developed secure REST APIs with JWT authentication, authorization, CRUD, validation and error handling.', 'Integrated Flutter mobile applications with Node.js backend services and REST APIs.', 'Implemented CI/CD workflows using GitHub Actions and deployed applications using Vercel, Render and AWS.'] },
  { role: 'Application Engineer', company: 'L&T Electrical & Automation — Deepa Agencies', date: 'December 2018 — June 2023', points: ['Developed PLC, HMI and SCADA systems for industrial automation applications.', 'Commissioned VFDs and servo drives and supported system integration.', 'Performed troubleshooting, testing, commissioning and field-level technical support.'] }
];

const education = [
  { degree: 'Bachelor of Engineering', institution: 'M.E.T Engineering College, Nagercoil', date: '2015 — 2018' },
  { degree: 'Diploma in Electronics Engineering', institution: 'GPTC, Vechoochira, Pathanamthitta', date: '2012 — 2015' }
];

function Reveal({ children, delay = 0, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .55, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const close = () => setMenuOpen(false);
  return <div className="app-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    {menuOpen && <div className="mobile-overlay" onClick={close} />}
    <header className="topbar">
      <a className="brand" href="#home" onClick={close}><span className="brand-mark"><img src={majuPhoto} alt="Maju Mohan" className="brand-avatar" /></span><span>MAJU MOHAN<span className="brand-sub">FULL STACK DEVELOPER</span></span></a>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map(x => <a key={x} href={'#' + x.toLowerCase()} onClick={close}>{x}</a>)}
        <a className="nav-cta" href="/resume.pdf" download onClick={close}>Resume <Download size={14} /></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line" /></div>
          <h1>Building digital<br />experiences that<br /><span className="gradient-text">work beautifully.</span></h1>
          <p className="hero-desc">I'm <strong>Maju Mohan</strong>, a Full Stack Developer focused on building scalable web and mobile applications with React.js, Node.js, MongoDB and Flutter.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="/resume.pdf" download><Download size={16} /> Download CV</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/majumohan" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={12} /></a>
            <a href="https://www.linkedin.com/in/maju-mohan-6363462b4" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={12} /></a>
            <a href="mailto:maju.mohanofficial@gmail.com"><Mail size={17} /> Email <ArrowUpRight size={12} /></a>
          </div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
          <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
          <div className="code-window photo-card-frame">
            <div className="window-head">
              <div className="window-dots"><i /><i /><i /></div>
              <span className="window-role">FULL STACK DEVELOPER</span>
              <span className="window-lock">● AVAILABLE</span>
            </div>
            <div className="photo-view">
              <img
                src={majuPhoto}
                alt="Maju Mohan"
                className="hero-photo"
                loading="eager"
                onError={(e) => { e.currentTarget.src = '/maju.jpg'; }}
              />
              <div className="photo-gradient" />
            </div>
            <div className="photo-card-footer">
              <div className="photo-name-wrap">
                <span className="photo-name">Maju Mohan</span>
                <span className="photo-pill">ONLINE</span>
              </div>
              <div className="photo-role-text">React.js · Node.js · MongoDB · Flutter</div>
            </div>
          </div>
          <div className="float-chip chip-top"><span className="chip-icon purple"><Code2 size={16} /></span><span><b>Full Stack</b><small>Web & Mobile</small></span></div>
          <div className="hero-stamp">CRAFTED<br />WITH CODE <ArrowDownRight size={18} /></div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="stats-strip section-wrap">
        <div><strong>3+</strong><span>Years in software<br />development*</span></div>
        <div><strong>08</strong><span>Selected project<br />showcases</span></div>
        <div><strong>05</strong><span>Core technology<br />areas</span></div>
        <div><strong>Full</strong><span>Stack web & mobile<br />development</span></div>
      </section>

      <section className="content-section section-wrap" id="about">
        <Reveal><div className="section-kicker">01 / ABOUT ME</div><div className="section-heading-row"><h2>Developer by craft.<br /><span className="muted-heading">Problem solver by nature.</span></h2><div className="about-bio-wrap"><img src={majuPhoto} alt="Maju Mohan" className="about-bio-avatar" /><p className="section-intro">I enjoy turning complex requirements into reliable, intuitive digital products — from backend APIs to polished user interfaces.</p></div></div></Reveal>
        <div className="about-grid">
          <Reveal className="about-card"><div className="about-icon"><Layers3 /></div><h3>End-to-end thinking</h3><p>Comfortable working across frontend, backend, database integration and deployment to deliver complete application experiences.</p></Reveal>
          <Reveal delay={.08} className="about-card"><div className="about-icon"><Smartphone /></div><h3>Web + mobile</h3><p>Experience building responsive web applications and Flutter mobile apps connected to backend services.</p></Reveal>
          <Reveal delay={.16} className="about-card"><div className="about-icon"><Cloud /></div><h3>Delivery focused</h3><p>Hands-on with Git workflows, CI/CD and deploying applications using platforms such as AWS, Vercel and Render.</p></Reveal>
        </div>
      </section>

      <section className="content-section section-wrap" id="skills">
        <Reveal><div className="section-kicker">02 / TOOLKIT</div><div className="section-heading-row"><h2>Tools I use to<br /><span className="muted-heading">make things happen.</span></h2><p className="section-intro">A practical toolkit across modern frontend, backend, mobile development and delivery workflows.</p></div></Reveal>
        <div className="skills-grid">{skills.map((s, i) => <Reveal key={s.title} delay={i * .06} className="skill-card"><div className="skill-head"><span className="skill-icon"><s.icon size={19} /></span><h3>{s.title}</h3><span className="skill-count">0{i + 1}</span></div><div className="skill-tags">{s.items.map(t => <span key={t}>{t}</span>)}</div></Reveal>)}</div>
      </section>

      <section className="content-section section-wrap" id="experience">
        <Reveal><div className="section-kicker">03 / EXPERIENCE</div><div className="section-heading-row"><h2>Where I've<br /><span className="muted-heading">made an impact.</span></h2><p className="section-intro">My professional journey combines software development with a foundation in industrial automation.</p></div></Reveal>
        <div className="timeline">{experience.map((e, i) => <Reveal key={e.company} delay={i * .1} className="timeline-item"><div className="timeline-marker">{i === 0 ? <BriefcaseBusiness size={17} /> : <Code2 size={17} />}</div><div className="timeline-content"><div className="timeline-top"><div><h3>{e.role}</h3><div className="company">{e.company}</div></div><span className="date-pill">{e.date}</span></div><ul>{e.points.map(p => <li key={p}>{p}</li>)}</ul></div></Reveal>)}</div>
      </section>

      <section className="content-section section-wrap projects-section" id="projects">
        <Reveal><div className="section-kicker">04 / SELECTED WORK</div><div className="section-heading-row"><h2>Things I've<br /><span className="muted-heading">built & shipped.</span></h2><p className="section-intro">A selection of applications and solutions across operations, commerce, customer experience and productivity.</p></div></Reveal>
        <div className="projects-grid">{projects.map((p, i) => <Reveal key={p.n} delay={(i % 2) * .08} className="project-card"><div className={`project-art ${p.color}`}><span className="project-number">{p.n} / PROJECT</span><div className="project-monogram">{p.mark}</div><div className="art-grid" /></div><div className="project-info"><div className="project-type">{p.type}</div><div className="project-title-row"><h3>{p.name}</h3><span className="project-arrow"><ArrowUpRight size={18} /></span></div><p>{p.desc}</p><div className="project-stack">{p.stack.map(t => <span key={t}>{t}</span>)}</div></div></Reveal>)}</div>
      </section>

      <section className="content-section section-wrap education-section" id="education">
        <Reveal><div className="section-kicker">05 / EDUCATION</div></Reveal>
        <div className="education-list">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * .08} className="education-card">
              <div className="education-icon"><GraduationCap size={25} /></div>
              <div><h3>{edu.degree}</h3><p>{edu.institution}</p></div>
              <span className="date-pill">{edu.date}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <Reveal><div className="contact-panel"><div className="contact-glow" /><div className="section-kicker">06 / LET'S CONNECT</div><h2>Have a project<br />in mind? <span className="gradient-text">Let's talk.</span></h2><p>I'm open to opportunities where I can contribute, learn and build meaningful products with a great team.</p><a className="button button-primary" href="mailto:maju.mohanofficial@gmail.com">Start a conversation <Send size={16} /></a><div className="contact-details"><a href="mailto:maju.mohanofficial@gmail.com"><Mail size={16} /> maju.mohanofficial@gmail.com</a><a href="tel:+918921348708"><Phone size={16} /> +91 89213 48708</a><span><MapPin size={16} /> Kerala, India</span></div></div></Reveal>
      </section>
    </main>
    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark"><img src={majuPhoto} alt="Maju Mohan" className="brand-avatar" /></span><span>MAJU MOHAN<span className="brand-sub">FULL STACK DEVELOPER</span></span></a><span>© {new Date().getFullYear()} Maju Mohan.</span><div className="footer-social"><a href="https://github.com/majumohan" target="_blank" rel="noreferrer"><Github size={17} /></a><a href="https://www.linkedin.com/in/maju-mohan-6363462b4" target="_blank" rel="noreferrer"><Linkedin size={17} /></a></div></footer>

  </div>
}

createRoot(document.getElementById('root')).render(<App />);