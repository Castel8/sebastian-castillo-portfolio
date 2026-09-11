import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  BrainCircuit,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircuitBoard,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Microscope,
  Network,
  RadioTower,
  Ruler,
  Moon,
  Sun,
  Send,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

const assets = {
  sensor: "/assets/sensor.jpeg",
  sensorPrototype: "/assets/sensor-prototype.png",
  sensorData: "/assets/data-collection.jpeg",
  sensorSetup: "/assets/sensor-setup.jpeg",
  sensorDiagram: "/assets/iot-diagram.png",
  sensorGraph: "/assets/sensor-graph.png",
  robot: "/assets/bot-pool-main.jpeg",
  robotAlt: "/assets/bot-pool-1.jpeg",
  robotThird: "/assets/bot-pool-3.jpeg",
  cansat: "/assets/cansat.jpeg",
  cansatComplete: "/assets/cansat-completo.jpeg",
  cansatElectronics: "/assets/electronica-cansat.jpeg",
  enmice: "/assets/competencia-enmice-2025.jpeg",
  pcb: "/assets/pcb-blue.jpeg",
  pcbSolded: "/assets/pcb-soldered.jpeg",
  prototypes: "/assets/prototypes.jpeg",
  workshop: "/assets/micropipette.jpeg",
  biomedical: "/assets/biomedical.jpg",
  profileVisual: "/assets/profile-instrumentation.jpg",
  model3d: "/assets/model-3d.png",
  code: "/assets/network.png",
  pcbSecond: "/assets/pcb-process.png",
  network: "/assets/network.png",
  codeVisual: "/assets/code-lab.jpg",
  coupling: "/assets/coupling.jpeg",
  aerospace: "/assets/aerospace.jpg",
};

type Language = "es" | "en";
type ProjectFilter = "all" | "instrumentation" | "electronics" | "robotics";

const copy = {
  es: {
    nav: { home: "Inicio", focus: "Enfoque", research: "Investigación", work: "Proyectos", skills: "Idiomas", contact: "Contacto" },
    hero: {
      eyebrow: "Ingeniería física · Investigación aplicada",
      titleStart: "Instrumentación que",
      titleAccent: "convierte datos en decisiones.",
      body: "Ingeniero Físico enfocado en instrumentación, electrónica, eléctrica y biomédica. Diseño sistemas de sensado, prototipos y soluciones hardware-software para observar, medir y entender fenómenos reales",
      cta: "Explorar proyectos",
      secondary: "Ver capacidades",
      available: "Disponible para proyectos de ingeniería e investigación",
      chips: ["Instrumentación eléctrica", "Sistemas biomédicos", "Investigación aplicada"],
    },
    focus: {
      eyebrow: "Áreas de competencia",
      title: "Del fenómeno físico al prototipo funcional.",
      body: "Mi perfil conecta el análisis físico y matemático con la electrónica, la programación y la documentación técnica. Trabajo con mentalidad de laboratorio: formular, medir, validar y comunicar.",
      items: [
        { icon: RadioTower, number: "01", title: "Sensado Y monitoreo", visuals: [assets.network], body: "Adquisición de variables ambientales, sistemas IoT y lectura de señales para apoyar decisiones técnicas." },
        { icon: CircuitBoard, number: "02", title: "Electrónica aplicada", visuals: [assets.coupling], body: "Prototipos, PCB, integración de sensores, actuadores, microcontroladores y pruebas de funcionamiento." },
        { icon: Microscope, number: "03", title: "Instrumentación biomédica", visuals: [assets.biomedical, assets.workshop], body: "Formación y experiencia en sistemas de medición y equipos biomédicos con foco en trazabilidad." },
        { icon: Code2, number: "04", title: "Modelado Y software", visuals: [assets.model3d, assets.codeVisual], body: "Python, C++, MATLAB, Simulink y herramientas de desarrollo para llevar una hipótesis a un sistema verificable." },
      ],
    },
    research: {
      eyebrow: "Experiencia con la Universidad del Cauca",
      title: "Investigar también es construir.",
      lead: "Durante mi formación y ejercicio profesional en la Universidad del Cauca he participado en proyectos donde la instrumentación se convierte en evidencia: desde el monitoreo de formaldehído hasta nanosatélites y robótica competitiva.",
      featured: "Proyecto destacado",
      projectTitle: "Monitoreo de formaldehído y parámetros ambientales",
      projectBody: "Sistema de sensado y monitoreo de concentración de formaldehído en el anfiteatro de la Facultad de Ciencias de la Salud. Una experiencia de investigación aplicada que integró sensores, adquisición de datos, análisis y comunicación científica.",
      role: "Investigador · Feb. 2025 — Feb. 2026",
      tags: ["Sensado ambiental", "IoT", "Adquisición de datos"],
      milestones: ["Ponencia oral en congresos nacionales e internacionales de anatomía e ingeniería física", "Trabajo desarrollado desde el rol de estudiante de pregrado y posteriormente como profesional", "Primer lugar ENMICE 2025 en Pico y Nanosatélites con un CanSat para calidad de aire"],
      link: "Ver el proyecto",
    },
    work: {
      eyebrow: "Selección de trabajo",
      title: "Prototipos con contexto.",
      body: "Una selección de sistemas, placas y experimentos que muestran cómo paso de la idea a la medición, el ensamblaje y la validación.",
      filters: { instrumentation: "Instrumentación", electronics: "Electrónica", robotics: "Robótica" },
      projects: [
        { id: "sensor", filter: "instrumentation" as ProjectFilter, index: "01", title: "Nodo de sensado ambiental", category: "Instrumentación · IoT", body: "Prototipo para medir formaldehído, CO₂, temperatura y humedad con visualización y adquisición de datos.", image: assets.sensorPrototype, gallery: [assets.sensorPrototype, assets.sensor, assets.sensorSetup], accent: "cyan" },
        { id: "robot", filter: "robotics" as ProjectFilter, index: "02", title: "Bot Pool · Robot de fútbol", category: "Robótica · Prototipado", body: "Diseño y ensamblaje de un robot competitivo, explorando estructura, electrónica y control en un sistema compacto.", image: assets.robot, gallery: [assets.robot, assets.robotAlt, assets.robotThird], galleryCaptions: ["Bot Pool en configuración de competencia", "Detalle del chasis y la electrónica del robot", "Vista del robot durante las pruebas de funcionamiento"], accent: "orange" },
        { id: "iot", filter: "instrumentation" as ProjectFilter, index: "03", title: "Arquitectura de monitoreo IoT", category: "Sistemas · Datos", body: "Arquitectura de conexión entre sensores, Arduino, interfaz web y almacenamiento remoto para monitoreo.", image: assets.sensorDiagram, gallery: [assets.sensorDiagram, assets.network, assets.code], accent: "green" },
        { id: "pcb", filter: "electronics" as ProjectFilter, index: "04", title: "PCB e integración de hardware", category: "Electrónica · PCB", body: "Diseño, soldadura e integración de componentes para convertir esquemas en hardware probado.", image: assets.pcbSecond, gallery: [assets.pcbSecond, assets.pcb, assets.pcbSolded], accent: "purple" },
        { id: "analysis", filter: "instrumentation" as ProjectFilter, index: "05", title: "Caracterización de datos", category: "Análisis · Sensado", body: "Caracterización y análisis de relaciones entre variables medidas para entender el comportamiento del sistema.", image: assets.sensorGraph, gallery: [assets.sensorGraph, assets.code, assets.sensorData], accent: "cyan" },
        { id: "lab", filter: "electronics" as ProjectFilter, index: "06", title: "Laboratorio de prototipos", category: "Laboratorio · Ingeniería", body: "Un registro visual de iteraciones, pruebas y configuraciones construidas durante el desarrollo de prototipos.", image: assets.prototypes, gallery: [assets.prototypes, assets.pcbSecond, assets.pcbSolded], accent: "orange" },
        { id: "biomedical", filter: "instrumentation" as ProjectFilter, index: "07", title: "Instrumentación biomédica", category: "Biomédica · Concepto", body: "Visual conceptual de sistemas de medición biomédica para acompañar la formación especializada del perfil.", image: assets.biomedical, gallery: [assets.biomedical, assets.workshop], accent: "green" },
        { id: "aerospace", filter: "robotics" as ProjectFilter, index: "08", title: "Cargas útiles aeroespaciales", category: "Aeroespacial · CanSat", body: "CanSat desarrollado para explorar electrónica, adquisición de datos y calidad del aire en el contexto de ENMICE 2025.", image: assets.aerospace, gallery: [assets.aerospace, assets.cansat, assets.cansatComplete, assets.cansatElectronics, assets.enmice], galleryCaptions: ["Visual conceptual de una carga útil aeroespacial", "CanSat utilizado en el proyecto", "CanSat completo con su estructura integrada", "Electrónica y sistema de adquisición del CanSat", "Participación en la competencia ENMICE 2025"], accent: "purple" },
      ],
    },
    skills: {
      eyebrow: "Idiomas",
      title: "Comunicación para colaborar.",
      body: "Fluidez para lectura técnica y comunicación profesional.",
      groups: [
        { icon: Cpu, title: "Instrumentación eléctrica & electrónica", items: ["Arduino", "EasyEDA · Diseño de PCB", "Sistemas de sensado", "Prototipado electrónico", "Integración hardware-software"] },
        { icon: BrainCircuit, title: "Programación & modelado", items: ["Python · C++", "MATLAB · Simulink", "HTML · CSS · JavaScript", "Visual Studio Code", "Análisis y visualización de datos"] },
        { icon: ShieldCheck, title: "Biomédica & sistemas", items: ["Instrumentación biomédica", "Gestión de equipos biomédicos", "Monitoreo ambiental", "Sistemas autónomos fotovoltaicos", "Documentación técnica"] },
      ],
      languages: { title: "Idiomas", spanish: "Español", native: "Nativo", english: "Inglés", level: "B2 · Aptis", note: "Fluidez para lectura técnica y comunicación profesional" },
    },
    contact: {
      eyebrow: "Hablemos de ingeniería",
      title: "¿Tienes un reto técnico?",
      body: "Estoy abierto a proyectos de investigación aplicada, instrumentación, electrónica, desarrollo de prototipos y oportunidades profesionales interdisciplinarias.",
      email: "Escríbeme",
      form: { name: "Nombre", email: "Correo electrónico", message: "Cuéntame sobre el proyecto", send: "Enviar mensaje", success: "Mensaje enviado correctamente. Gracias por escribirme; te responderé pronto." },
    },
    footer: "Ingeniero Físico · Instrumentación eléctrica, electrónica y biomédica",
  },
  en: {
    nav: { home: "Home", focus: "Focus", research: "Research", work: "Projects", skills: "Languages", contact: "Contact" },
    hero: {
      eyebrow: "Physics engineering · Applied research",
      titleStart: "Instrumentation that",
      titleAccent: "turns data into decisions.",
      body: "Physics Engineer focused on instrumentation, electronics, electrical and biomedical engineering. I design sensing systems, prototypes and hardware-software solutions to observe, measure and understand real-world phenomena.",
      cta: "Explore projects",
      secondary: "View capabilities",
      available: "Available for engineering and research projects",
      chips: ["Instrumentación eléctrica", "Sistemas biomédicos", "Investigación aplicada"],
    },
    focus: {
      eyebrow: "Areas of competence",
      title: "From physical phenomenon to functional prototype.",
      body: "My profile connects physical and mathematical analysis with electronics, programming and technical documentation. I work with a lab mindset: frame, measure, validate and communicate.",
      items: [
        { icon: RadioTower, number: "01", title: "Sensing & monitoring", visuals: [assets.network], body: "Acquisition of environmental variables, IoT systems and signal reading to support technical decisions." },
        { icon: CircuitBoard, number: "02", title: "Applied electronics", visuals: [assets.coupling], body: "Prototypes, PCBs, sensor and actuator integration, microcontrollers and functional testing." },
        { icon: Microscope, number: "03", title: "Biomedical instrumentation", visuals: [assets.biomedical, assets.workshop], body: "Training and experience with measurement systems and biomedical equipment, with a focus on traceability." },
        { icon: Code2, number: "04", title: "Modeling & software", visuals: [assets.model3d, assets.codeVisual], body: "Python, C++, MATLAB, Simulink and development tools to turn a hypothesis into a verifiable system." },
      ],
    },
    research: {
      eyebrow: "Experience at Universidad del Cauca",
      title: "Research is also about building.",
      lead: "During my academic and professional work at Universidad del Cauca, I have contributed to projects where instrumentation becomes evidence: from formaldehyde monitoring to nanosatellites and competitive robotics.",
      featured: "Featured project",
      projectTitle: "Formaldehyde & environmental parameter monitoring",
      projectBody: "Sensing and monitoring system for formaldehyde concentration in the Faculty of Health Sciences amphitheater. Applied research integrating sensors, data acquisition, analysis and scientific communication.",
      role: "Researcher · Feb. 2025 — Feb. 2026",
      tags: ["Sensado ambiental", "IoT", "Adquisición de datos"],
      milestones: ["Oral presentation at national and international anatomy and physics engineering conferences", "Project developed first as an undergraduate student and later as a professional", "1st place at ENMICE 2025 in Pico and Nanosatellites with a CanSat for air-quality measurement"],
      link: "View the project",
    },
    work: {
      eyebrow: "Selected work",
      title: "Prototypes with context.",
      body: "A selection of systems, boards and experiments showing how I move from an idea to measurement, assembly and validation.",
      filters: { instrumentation: "Instrumentation", electronics: "Electronics", robotics: "Robotics" },
      projects: [
        { id: "sensor", filter: "instrumentation" as ProjectFilter, index: "01", title: "Environmental sensing node", category: "Instrumentation · IoT", body: "Prototype measuring formaldehyde, CO₂, temperature and humidity with visualization and data acquisition.", image: assets.sensorPrototype, gallery: [assets.sensorPrototype, assets.sensor, assets.sensorSetup], accent: "cyan" },
        { id: "robot", filter: "robotics" as ProjectFilter, index: "02", title: "Bot Pool · Football robot", category: "Robotics · Prototyping", body: "Design and assembly of a competitive robot exploring structure, electronics and control in a compact system.", image: assets.robot, gallery: [assets.robot, assets.robotAlt, assets.robotThird], galleryCaptions: ["Bot Pool in competition configuration", "Robot chassis and electronics detail", "Robot view during functional testing"], accent: "orange" },
        { id: "iot", filter: "instrumentation" as ProjectFilter, index: "03", title: "IoT monitoring architecture", category: "Systems · Data", body: "Connection architecture between sensors, Arduino, web interface and remote storage for monitoring.", image: assets.sensorDiagram, gallery: [assets.sensorDiagram, assets.network, assets.code], accent: "green" },
        { id: "pcb", filter: "electronics" as ProjectFilter, index: "04", title: "PCB & hardware integration", category: "Electronics · PCB", body: "Design, soldering and component integration turning schematics into tested hardware.", image: assets.pcbSecond, gallery: [assets.pcbSecond, assets.pcb, assets.pcbSolded], accent: "purple" },
        { id: "analysis", filter: "instrumentation" as ProjectFilter, index: "05", title: "Data characterization", category: "Analysis · Sensing", body: "Characterization and analysis of relationships between measured variables to understand system behavior.", image: assets.sensorGraph, gallery: [assets.sensorGraph, assets.code, assets.sensorData], accent: "cyan" },
        { id: "lab", filter: "electronics" as ProjectFilter, index: "06", title: "Prototype lab", category: "Laboratory · Engineering", body: "A visual record of iterations, tests and configurations built during prototype development.", image: assets.prototypes, gallery: [assets.prototypes, assets.pcbSecond, assets.pcbSolded], accent: "orange" },
        { id: "biomedical", filter: "instrumentation" as ProjectFilter, index: "07", title: "Biomedical instrumentation", category: "Biomedical · Concept", body: "Concept visual of biomedical measurement systems complementing the profile’s specialized training.", image: assets.biomedical, gallery: [assets.biomedical, assets.workshop], accent: "green" },
        { id: "aerospace", filter: "robotics" as ProjectFilter, index: "08", title: "Aerospace payloads", category: "Aerospace · CanSat", body: "CanSat developed to explore electronics, data acquisition and air quality in the context of ENMICE 2025.", image: assets.aerospace, gallery: [assets.aerospace, assets.cansat, assets.cansatComplete, assets.cansatElectronics, assets.enmice], galleryCaptions: ["Concept visual of an aerospace payload", "CanSat used in the project", "Complete CanSat with its integrated structure", "CanSat electronics and data-acquisition system", "Participation in the ENMICE 2025 competition"], accent: "purple" },
      ],
    },
    skills: {
      eyebrow: "Technical stack",
      title: "Tools to measure, model and build.",
      body: "Competent across electrical, electronic and biomedical engineering contexts, with practical experience integrating hardware and software through applied research.",
      groups: [
        { icon: Cpu, title: "Electrical & electronic instrumentation", items: ["Arduino", "EasyEDA · PCB design", "Sensing systems", "Electronic prototyping", "Hardware-software integration"] },
        { icon: BrainCircuit, title: "Programming & modeling", items: ["Python · C++", "MATLAB · Simulink", "HTML · CSS · JavaScript", "Visual Studio Code", "Data analysis & visualization"] },
        { icon: ShieldCheck, title: "Biomedical & systems", items: ["Biomedical instrumentation", "Biomedical equipment management", "Environmental monitoring", "Autonomous photovoltaic systems", "Technical documentation"] },
      ],
      languages: { title: "Languages", spanish: "Spanish", native: "Native", english: "English", level: "B2 · Aptis", note: "Fluent for technical reading and professional communication" },
    },
    contact: {
      eyebrow: "Let’s talk engineering",
      title: "Have a technical challenge?",
      body: "I am open to applied research, instrumentation, electronics, prototype development and interdisciplinary professional opportunities.",
      email: "Write to me",
      form: { name: "Name", email: "Email address", message: "Tell me about the project", send: "Send message", success: "Message sent successfully. Thank you for reaching out; I will reply soon." },
    },
    footer: "Physics Engineer · Electrical, electronic & biomedical instrumentation",
  },
};

function AppMark() {
  return (
    <a className="brand" href="#home" aria-label="Sebastian Castillo home">
      <span className="brand-mark"><span /></span>
      <span>S/CASTILLO</span>
    </a>
  );
}

function SectionIntro({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return (
    <div className={`section-intro ${light ? "section-intro-light" : ""}`}>
      <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p className="section-lead">{body}</p>}
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<ProjectFilter>("instrumentation");
  const [sent, setSent] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [galleryIndexes, setGalleryIndexes] = useState<Record<string, number>>({});
  const t = copy[language];
  const filteredProjects = t.work.projects.filter((project) => filter === "all" || project.filter === filter);

  const changeGallery = (projectId: string, total: number, direction: number) => {
    setGalleryIndexes((current) => ({ ...current, [projectId]: ((current[projectId] ?? 0) + direction + total) % total }));
  };

  const toggleLanguage = () => setLanguage((current) => current === "es" ? "en" : "es");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      const response = await fetch("https://formsubmit.co/ajax/castel8778@gmail.com", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      if (!response.ok) throw new Error("Unable to send");
      setSent(true); form.reset();
    } catch { setSent(false); }
  };

  const navItems = [
    ["#home", t.nav.home],
    ["#focus", t.nav.focus],
    ["#research", t.nav.research],
    ["#work", t.nav.work],
    ["#skills", t.nav.skills],
    ["#contact", t.nav.contact],
  ];

  return (
    <div className={`site-shell theme-${theme}`}>
      <header className="site-header">
        <div className="header-inner">
          <AppMark />
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            {navItems.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <div className="header-actions">
            <button className="language-switch" onClick={toggleLanguage} aria-label="Switch language">
              <Globe2 size={15} /> <span>{language === "es" ? "EN" : "ES"}</span>
            </button>
            <button className="theme-switch" onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}>
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-profile-lead"><div className="hero-profile-photo"><img src="/assets/profile.jpeg" alt="Sebastian Castillo" /></div><div><p className="eyebrow"><span className="eyebrow-dot" />{language === "es" ? "Perfil profesional" : "Professional profile"}</p><h2>Sebastian Castillo Castillo</h2><p>{t.hero.body}</p><div className="hero-profile-links"><a href="https://www.linkedin.com/in/sebastian-castillo-castillo-24a838367/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a><a href="https://github.com/Castel8" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a></div></div></div>
          <div className="hero-grid technical-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" />{t.hero.eyebrow}</p>
              <h1>{t.hero.titleStart}<br /><span>{t.hero.titleAccent}</span></h1>
              <p className="hero-body">{t.hero.body}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">{t.hero.cta}<ArrowDownRight size={17} /></a>
                <a className="button button-outline" href="/assets/cv.pdf" download="Sebastian-Castillo-CV.pdf"><span>{language === "es" ? "Descargar CV" : "Download CV"}</span><ArrowDownRight size={16} /></a>
                <a className="text-link" href="#skills">{t.hero.secondary}<ArrowUpRight size={16} /></a>
              </div>
              <div className="availability"><span className="pulse-dot" />{t.hero.available}</div>
            </div>
            <div className="hero-visual" aria-label="Technical instrumentation prototype collage">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-cross cross-one">+</div>
              <div className="visual-cross cross-two">+</div>
              <div className="hero-photo hero-photo-main"><img src={assets.profileVisual} alt="Electrical, electronic and biomedical instrumentation" /></div>
              <div className="hero-photo hero-photo-small"><img src={assets.pcb} alt="Blue electronic PCB with components" /></div>
              <div className="hero-signal"><span>{language === "es" ? "EN VIVO" : "LIVE"}</span><strong>04.21</strong><small>{language === "es" ? "CAMPO / DATOS" : "FIELD / DATA"}</small></div>
              <div className="hero-coordinates">02° 26′ N<br />76° 37′ W</div>
              <div className="hero-line line-one" /><div className="hero-line line-two" />
            </div>
          </div>
          <div className="hero-bottom">
            <div className="hero-scroll"><span>{language === "es" ? "DESPLÁZATE PARA EXPLORAR" : "SCROLL TO EXPLORE"}</span><ChevronDown size={15} /></div>
            <div className="hero-chips">{t.hero.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
            <div className="hero-index">01 <span>/</span> 06</div>
          </div>
        </section>

        <section id="focus" className="section focus-section">
          <div className="container">
            <SectionIntro eyebrow={t.focus.eyebrow} title={t.focus.title} body={t.focus.body} />
            <div className="focus-grid">
              {t.focus.items.map(({ icon: Icon, number, title, body, visuals }) => (
                <article className="focus-card" key={number}>
                  <div className="card-topline"><span>{number}</span><Icon size={21} strokeWidth={1.5} /></div>
                  <div className="focus-card-copy"><h3>{title}</h3><p>{body}</p></div>
                  <div className="focus-card-visuals">{visuals.map((visual) => <button key={visual} className="focus-card-media" onClick={() => setLightbox({ src: visual, alt: title })} aria-label={`${language === "es" ? "Ampliar" : "View"} ${title}`}><img src={visual} alt={title} /></button>)}</div>
                  <div className="card-arrow"><ArrowUpRight size={16} /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="section research-section">
          <div className="container">
            <SectionIntro eyebrow={t.research.eyebrow} title={t.research.title} body={t.research.lead} />
            <div className="research-feature">
              <div className="research-image-wrap">
                <img src={assets.sensorData} alt="Sebastian working on environmental data acquisition" />
                <div className="image-label"><span className="pulse-dot" />{language === "es" ? "NOTA DE CAMPO / 2025" : "FIELD NOTE / 2025"}</div>
                <div className="image-corner">UC / LAB</div>
              </div>
              <div className="research-copy">
                <p className="mini-label">{t.research.featured}</p>
                <h3>{t.research.projectTitle}</h3>
                <p>{t.research.projectBody}</p>
                <div className="tag-list">{t.research.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <p className="project-role"><span className="role-line" />{t.research.role}</p>
                <div className="distinctions-card"><div className="distinctions-head"><Award size={18} /><span>{language === "es" ? "Distinciones y divulgación" : "Distinctions and dissemination"}</span></div><p>{language === "es" ? "El proyecto de investigación fue expuesto mediante ponencia oral en congresos nacionales e internacionales de anatomía e ingeniería física." : "The research project was presented through an oral talk at national and international anatomy and physics engineering conferences."}</p><ul className="milestone-list">{t.research.milestones.map((milestone) => <li key={milestone}><Check size={15} />{milestone}</li>)}</ul></div>
                <a className="text-link" href="#work">{t.research.link}<ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="research-strip">
              <div><span>{language === "es" ? "2022—PRESENTE" : "2022—PRESENT"}</span><strong>{language === "es" ? "SIA · Club de Ingeniería Aeroespacial" : "SIA · Aerospace Engineering Club"}</strong></div>
              <div><span>2023—2025</span><strong>{language === "es" ? "Semillero de Robótica · Universidad del Cauca" : "Robotics Seedbed · Universidad del Cauca"}</strong></div>
              <div><span>{language === "es" ? "VERANO 2024" : "SUMMER 2024"}</span><strong>{language === "es" ? "Intercambio académico-cultural DAAD · Alemania" : "DAAD Academic-Cultural Exchange · Germany"}</strong></div>
            </div>

          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="container">
            <SectionIntro eyebrow={t.work.eyebrow} title={t.work.title} body={t.work.body} />
            <div className="work-toolbar">
              <div className="filter-list" role="tablist" aria-label="Project filters">
                {(Object.keys(t.work.filters) as Exclude<ProjectFilter, "all">[]).map((key) => (
                  <button key={key} className={filter === key ? "active" : ""} onClick={() => setFilter(key)} role="tab" aria-selected={filter === key}>{t.work.filters[key]}</button>
                ))}
              </div>
              <span className="project-count">0{filteredProjects.length} / 08</span>
            </div>
            <div className="projects-grid">
              {filteredProjects.map((project) => {
                const gallery = project.gallery || [project.image];
                const galleryIndex = galleryIndexes[project.id] ?? 0;
                const activeImage = gallery[galleryIndex];
                const activeCaption = project.galleryCaptions?.[galleryIndex] || `${project.title} · ${galleryIndex + 1}`;
                return (
                <article className={`project-card accent-${project.accent}`} key={project.id}>
                  <div className="project-content"><p className="mini-label">{project.category}</p><h3>{project.title}</h3><p>{project.body}</p></div>
                  <div className="project-image">
                    <button className="project-image-main" onClick={() => setLightbox({ src: activeImage, alt: activeCaption })} aria-label={`${language === "es" ? "Ampliar" : "View"} ${activeCaption}`}><img src={activeImage} alt={activeCaption} /></button>
                    <span className="project-index">{project.index}</span><span className="project-view"><ExternalLink size={15} /></span>
                    {gallery.length > 1 && <div className="project-carousel-controls"><button type="button" onClick={() => changeGallery(project.id, gallery.length, -1)} aria-label={language === "es" ? "Imagen anterior" : "Previous image"}><ChevronLeft size={16} /></button><span>{String(galleryIndex + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span><button type="button" onClick={() => changeGallery(project.id, gallery.length, 1)} aria-label={language === "es" ? "Siguiente imagen" : "Next image"}><ChevronRight size={16} /></button></div>}
                    <p className="project-image-caption">{activeCaption}</p>
                  </div>
                  <div className="project-footer"><a className="project-link" href="#contact">{language === "es" ? "Conversar sobre proyecto" : "Discuss project"} <ArrowUpRight size={15} /></a></div>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section language-only-section">
          <div className="container">
            <div className="language-only-layout"><SectionIntro eyebrow={t.skills.languages.title} title={language === "es" ? "Comunicación para colaborar." : "Communication for collaboration."} body={t.skills.languages.note} light /><aside className="language-card"><div className="language-card-orbit" /><Globe2 size={23} /><p className="mini-label">{t.skills.languages.title}</p><div className="language-row"><span>{t.skills.languages.spanish}</span><strong>{t.skills.languages.native}</strong></div><div className="language-row"><span>{t.skills.languages.english}</span><strong>{t.skills.languages.level}</strong></div><div className="language-bar"><span /></div></aside></div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy"><SectionIntro eyebrow={t.contact.eyebrow} title={t.contact.title} body={t.contact.body} /><a className="email-link" href="mailto:castel8778@gmail.com"><Mail size={18} />castel8778@gmail.com<ArrowUpRight size={16} /></a><div className="contact-meta"><span><Ruler size={15} />Pasto, Colombia</span><span><GraduationCap size={15} />Universidad del Cauca</span></div></div>
            <form className="contact-form" onSubmit={handleSubmit}><input type="hidden" name="_subject" value={language === "es" ? "Nuevo contacto desde el portafolio de Sebastian Castillo" : "New contact from Sebastian Castillo portfolio"} /><input type="hidden" name="_captcha" value="false" /><div className="form-row"><label>{t.contact.form.name}<input required name="name" placeholder={language === "es" ? "Sebastián / Tu nombre" : "Sebastian / Your name"} /></label><label>{t.contact.form.email}<input required type="email" name="email" placeholder={language === "es" ? "correo@ejemplo.com" : "hello@example.com"} /></label></div><label>{t.contact.form.message}<textarea required name="message" rows={5} placeholder={t.contact.form.message} /></label><div className="form-submit"><button className="button button-primary" type="submit">{t.contact.form.send}<Send size={16} /></button>{sent && <span className="form-success"><Check size={15} />{t.contact.form.success}</span>}</div></form>
          </div>
        </section>
      </main>

      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.alt} onClick={() => setLightbox(null)}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close image"><X size={23} /></button><img src={lightbox.src} alt={lightbox.alt} onClick={(event) => event.stopPropagation()} /><p>{lightbox.alt}</p></div>}

      <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={language === "es" ? "Volver arriba" : "Back to top"} title={language === "es" ? "Volver arriba" : "Back to top"}><ArrowUp size={18} /></button>

      <footer className="site-footer"><div className="container footer-inner"><AppMark /><p>{t.footer}</p><div className="footer-links"><a href="mailto:castel8778@gmail.com" aria-label="Email"><Mail size={15} /></a><a href="https://www.linkedin.com/in/sebastian-castillo-castillo-24a838367/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a><a href="https://github.com/Castel8" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a><a href="#home" aria-label="Back to top"><ArrowUpRight size={15} /></a></div><span className="footer-year">© 2026</span></div></footer>
    </div>
  );
}
