import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, ArrowDown, ArrowRight, ArrowLeft, GithubLogo, LinkedinLogo, Code, BracketsCurly, Atom, Lightning, Globe, PaperPlaneTilt, List, X, ArrowUp, Check, Terminal, EnvelopeSimple, Database } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { projects } from "@/lib/projects";
import { usePortfolioMotion } from "@/hooks/use-portfolio-motion";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "shakya — Full Stack Developer | React, Java & Spring Boot" },
    { name: "description", content: "Hi, I’m Shakya Sithmini, a full stack developer and Data Science undergraduate from Sri Lanka. I build web, mobile, desktop, and IoT projects. Explore my work and get in touch." },
    { property: "og:title", content: "shakya — Full Stack Developer | React, Java & Spring Boot" },
    { property: "og:description", content: "Full stack developer and Data Science undergraduate building web, mobile, and IoT solutions. See selected projects, tech stack, and contact details." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const nav = ["About", "Work", "Contact"];
const links = {
  github: "https://github.com/shakya122",
  linkedin: "https://www.linkedin.com/in/shakya-sithmini",
  email: "shakyasithmini@gmail.com",
};

const skills = [{ name: "React", icon: Atom }, { name: "Next.js", icon: Globe }, { name: "JavaScript", icon: Lightning }, { name: "Node.js & Express", icon: BracketsCurly }, { name: "HTML & CSS", icon: Code }, { name: "Java", icon: Terminal }, { name: "Spring Boot", icon: BracketsCurly }, { name: "C++ & Python", icon: Terminal }, { name: "MySQL", icon: Database }, { name: "PostgreSQL", icon: Database }, { name: "Firebase", icon: Lightning }, { name: "REST APIs", icon: Globe }, { name: "Git & GitHub", icon: GithubLogo }, { name: "Arduino & IoT", icon: Lightning }];

function Index() {
  const { root, ready, progress } = usePortfolioMotion();
  const [menu, setMenu] = useState(false);
  const [all, setAll] = useState(false);
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const [social, setSocial] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const gallery = useRef<HTMLDivElement>(null);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
    setMessage("Opening your email app to send the message…");
  };
  return (
    <div ref={root} className="portfolio" data-ready={ready}>
      {!ready && <div className="preloader" role="status" aria-label={`Loading portfolio ${progress}%`}><div className="loader-mark">s<span>.</span></div><p>SHAKYA / DIGITAL EXPERIENCES</p><div className="loader-track"><progress max={100} value={progress} /><div className="loader-count"><span>INITIALIZING</span><span>{String(progress).padStart(2, "0")}%</span></div></div></div>}
      <header className="site-header shell">
        <a href="#home" className="wordmark" aria-label="shakya home">shakya<span>.</span><span className="wordmark-slash"> / </span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</nav>
        <Button asChild variant="glass" className="header-cta"><a href="#contact">Let’s talk <ArrowUpRight weight="light" /></a></Button>
        <Button variant="iconGlass" size="icon" className="menu-toggle" aria-label="Open navigation" onClick={() => setMenu(true)}><List size={24} weight="light" /></Button>
      </header>
      {menu && <div className="mobile-menu"><div className="mobile-menu-top"><a className="wordmark" href="#home" onClick={() => setMenu(false)}>shakya<span>.</span></a><Button variant="iconGlass" size="icon" aria-label="Close navigation" onClick={() => setMenu(false)}><X size={24} /></Button></div><nav aria-label="Mobile navigation">{nav.map((item, i) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}><span>0{i + 1}</span>{item}<ArrowUpRight /></a>)}</nav><p>IDEAS INTO EXPERIENCES.</p></div>}
      <main>
        <section id="home" className="hero">
          <div className="hero-grid" aria-hidden="true" /><div className="ambient-light" aria-hidden="true" />
          <div className="spline-stage"><iframe title="Interactive 3D luminous orb" src="https://my.spline.design/orb-R2TMbBoCnywHKqUVZaHeqkkp/" loading="eager" allow="autoplay; fullscreen" /></div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content shell">
            <div className="availability hero-reveal"><span className="status-dot" /> OPEN TO INTERNSHIPS <span className="availability-divider">/</span> BASED IN SRI LANKA</div>
            <h1 className="hero-reveal">Hi, I’m <span className="name-glow">shakya<span className="name-dot">.</span></span><span className="hero-role">Full stack developer</span></h1>
            <p className="hero-subtitle hero-reveal">Data Science undergraduate and software engineer.<br />I build web, mobile, and IoT solutions that work in the real world.</p>
            <div className="hero-actions hero-reveal"><Button variant="glow" asChild><a href="#contact">Hire me <ArrowUpRight weight="light" size={20} /></a></Button><Button variant="glass" asChild><a href="#work">Explore my work <ArrowDown weight="light" /></a></Button></div>
            <div className="hero-caption hero-reveal"><span className="caption-line" /> BUILT WITH CURIOSITY. CRAFTED WITH CODE. <span className="caption-line" /></div>
          </div>
          <div className="hero-bottom shell hero-reveal"><div className="hero-social"><Button asChild variant="iconGlass" size="icon" aria-label="GitHub"><a href={links.github} target="_blank" rel="noopener noreferrer"><GithubLogo weight="light" size={21} /></a></Button><Button asChild variant="iconGlass" size="icon" aria-label="LinkedIn"><a href={links.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinLogo weight="light" size={21} /></a></Button><span>LET’S CONNECT</span></div><a href="#about" className="scroll-cue"><span>SCROLL TO DISCOVER</span><ArrowDown weight="light" /></a><span className="hero-coordinate">6.84° N · 79.97° E</span></div>
        </section>
        <div className="stack-strip"><div className="shell"><span>DESIGN MEETS DEVELOPMENT</span><span><Atom weight="light" /> React</span><span><Code weight="light" /> Next.js</span><span><Terminal weight="light" /> Java</span><span><BracketsCurly weight="light" /> Spring Boot</span><span><Lightning weight="light" /> IoT</span></div></div>
        <section id="about" className="about section-space shell">
          <div className="section-label section-reveal"><span>01 / ABOUT ME</span><span className="label-line" /></div>
          <div className="about-layout">
            <div className="identity-art section-reveal" aria-hidden="true"><div className="identity-top"><Terminal weight="light" /><span>THE PERSON BEHIND THE CODE</span><span className="status-dot" /></div><div className="identity-ring ring-one" /><div className="identity-ring ring-two" /><div className="identity-monogram">s<span>.</span></div><div className="identity-bottom"><span>&lt; developer /&gt;</span><span>ALWAYS BUILDING <ArrowUpRight /></span></div></div>
            <div className="about-copy section-reveal"><h2>A curious mind.<br />A builder at heart<span className="accent-dot">.</span></h2><p>I’m Shakya Sithmini, a Data Science undergraduate at NIBM / Coventry University and a software engineering graduate (HND) who enjoys building practical applications.</p><p>I currently work as a Software &amp; QA Developer at an early-stage startup. My projects span React and Next.js web apps, Spring Boot microservices, a native Android app, a Java desktop tool, and IoT hardware, including robots I built on my own.</p><div className="skills">{skills.map(({ name, icon: Icon }) => <div className="skill-chip" key={name}><Icon size={21} weight="light" /><span>{name}</span></div>)}</div><a href="#work" className="text-link">A little less talk, a little more code <ArrowUpRight /></a></div>
          </div>
        </section>
        <section id="work" className="work-section section-space">
          <div className="shell"><div className="section-label section-reveal"><span>02 / SELECTED WORK</span><span className="label-line" /></div><div className="section-heading section-reveal"><div><h2>Ideas made real<span className="accent-dot">.</span></h2><p>A selection of things I’ve designed, built, and brought to life.</p></div><div className="gallery-controls"><Button variant="iconGlass" size="icon" aria-label="Previous projects" onClick={() => gallery.current?.scrollBy({ left: -440, behavior: "smooth" })}><ArrowLeft /></Button><Button variant="iconGlass" size="icon" aria-label="Next projects" onClick={() => gallery.current?.scrollBy({ left: 440, behavior: "smooth" })}><ArrowRight /></Button></div></div></div>
          <div ref={gallery} className={`project-gallery ${all ? "expanded" : ""}`}>
            {(all ? projects : projects.slice(0, 6)).map(project => <article key={project.id} className="project-card section-reveal"><div className="project-image"><img src={project.image} alt={`${project.title} project presentation`} loading="lazy" /><span className="project-number">/{project.id}</span><Button variant="iconGlass" size="icon" className="project-open" aria-label={`View ${project.title}`} onClick={() => setSelected(project)}><ArrowUpRight size={24} weight="light" /></Button></div><div className="project-info"><span className="project-category">{project.category}</span><h3><a href="#work" onClick={(event) => { event.preventDefault(); setSelected(project); }}>{project.title}</a><ArrowUpRight weight="light" /></h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}
          </div>
          <div className="shell project-footer"><span>{all ? "08" : "06"} PROJECTS · ENDLESS POSSIBILITIES</span><Button variant="glass" onClick={() => setAll(!all)}>{all ? "Show selected work" : "View all projects"} <ArrowUpRight /></Button></div>
        </section>
        <section id="contact" className="contact section-space shell"><div className="section-label section-reveal"><span>03 / SAY HELLO</span><span className="label-line" /></div><div className="contact-layout"><div className="contact-copy section-reveal"><div className="availability"><span className="status-dot" /> LET’S BUILD SOMETHING GREAT</div><h2>Your next idea.<br />Our next <span className="contact-glow">great thing.</span></h2><p>Have a project in mind, an opportunity to share,<br />or just want to say hello? I’d love to hear from you.</p><div className="contact-social"><Button asChild variant="glass"><a href={links.github} target="_blank" rel="noopener noreferrer"><GithubLogo weight="light" /> GitHub <ArrowUpRight /></a></Button><Button asChild variant="glass"><a href={links.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinLogo weight="light" /> LinkedIn <ArrowUpRight /></a></Button></div></div><form className="contact-form section-reveal" onSubmit={submit}><div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="What should I call you?" required maxLength={100} /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label></div><label>Your message<textarea name="message" rows={4} placeholder="Tell me a little about your idea..." required maxLength={5000} /></label><div className="form-bottom"><span><EnvelopeSimple weight="light" /> GOOD CONVERSATIONS START HERE</span><Button variant="glow" type="submit">Send message <PaperPlaneTilt weight="light" /></Button></div>{message && <p className="form-notice" role="status">{message}</p>}</form></div></section>
      </main>
      <footer className="footer"><div className="shell footer-main section-reveal"><a className="wordmark" href="#home">shakya<span>.</span><span className="wordmark-slash"> / </span></a><nav aria-label="Footer navigation">{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav><a href="#home" className="back-top">Back to top <ArrowUp weight="light" /></a></div><div className="shell footer-bottom"><span>© 2026 shakya. All rights reserved.</span><span>MADE WITH INTENTION <span className="accent-dot">✦</span> AND A LITTLE CAFFEINE</span></div></footer>
      <Dialog open={!!selected} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="project-dialog">{selected && <><DialogHeader><DialogTitle>{selected.title}</DialogTitle><DialogDescription>{selected.description}</DialogDescription></DialogHeader><img src={selected.image} alt={`${selected.title} full project overview`} /><div className="project-tags">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div></>}</DialogContent></Dialog>
      <Dialog open={!!social} onOpenChange={open => { if (!open) setSocial(null); }}><DialogContent><DialogHeader><DialogTitle>{social}</DialogTitle><DialogDescription>This profile link hasn’t been added yet.</DialogDescription></DialogHeader><Button variant="glass" onClick={() => setSocial(null)}><Check /> Got it</Button></DialogContent></Dialog>
    </div>
  );
}