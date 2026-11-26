import React, { useContext } from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import SectionHeader from "./SectionHeader";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";
import { LanguageContext } from "../LanguageContext";

const splitStack = (stack) =>
  stack
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

export default function Projects() {
  const { t } = useContext(LanguageContext);

  const spotlightProjects = [
    {
      title: "Agora Web",
      desc: t("proj.agora.desc"),
      techStack: "Symfony, PHP, Doctrine",
      link: "https://github.com/Lavarice/Mission4/tree/sprint54",
      image: "/assets/agoraweb.png",
      doc: "/assets/agoraweb_cr.pdf",
    },
    {
      title: "Miratlas",
      desc: t("proj.mir.desc"),
      techStack: "Laravel, Tailwind, Docker",
      doc: "/assets/miratlas.pdf",
      image: "/assets/miratlas.png",
    },
    {
      title: "Yabonlapub",
      desc: t("proj.yab.desc"),
      techStack: "Next.js, Tailwind, Neon",
      link: "https://github.com/cyrille33000/site-yabonlapub",
      doc: "/assets/yabonlapub.pdf",
      image: "/assets/yabonlapub.png",
    },
  ];

  const projects = [
    {
      title: "Omori Weather",
      desc: t("proj.omo.desc"),
      techStack: "Electron, API Météo, HTML/CSS/JS",
      link: "https://github.com/Kamdinee/omori-weather",
    },
    {
      title: "Agora Mobile",
      desc: t("proj.agomob.desc"),
      techStack: "Android Studio, JS, Metro",
      link: "https://github.com/MartinLe0/AgoraMobile",
      doc: "/assets/agoramobile.pdf",
    },
    {
      title: "StageConnect",
      desc: t("proj.stage.desc"),
      techStack: "PHP, JS, MySQL",
      doc: "/assets/stageconnect.pdf",
    },
    {
      title: "Challenge VR 2025",
      desc: t("proj.vr.desc"),
      techStack: "PHP, MySQL, A-Frame",
      link: "https://github.com/flanOcaramel/Challenge2eVR",
      doc: "/assets/Rapport Final du challenge.pdf",
    },
    {
      title: "TP Réseau",
      desc: t("proj.tp.desc"),
      techStack: "Packet Tracer, Bash, SSH",
      doc: "/assets/Compétences réseau.pdf",
    },
    {
      title: "WordPress",
      desc: t("proj.wp.desc"),
      techStack: "WordPress, CMS",
    },
  ];

  return (
    <section id="projects">
      <FadeInSection>
        <SectionHeader
          title={t("proj.title")}
          action={
            <a
              className="section-action"
              href="https://github.com/Kamdinee"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("proj.all")}
              <span aria-hidden="true">→</span>
            </a>
          }
        />
        <Carousel className="spotlight" interval={6000} pause="hover">
          {spotlightProjects.map((p) => (
            <Carousel.Item key={p.title}>
              <img className="d-block w-100" src={p.image} alt={p.title} />
              <div className="spotlight-overlay" aria-hidden="true" />
              <Carousel.Caption className="spotlight-caption">
                <h3>{p.title}</h3>
                <p className="spotlight-desc">{p.desc}</p>
                <p className="spotlight-stack">{splitStack(p.techStack).join(" · ")}</p>
                <ExternalLinks githubLink={p.link} openLink={p.open} docLink={p.doc} />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </FadeInSection>

      <ul className="projects-grid">
        {projects.map((p, i) => (
          <FadeInSection as="li" delay={`${(i % 3) * 100}ms`} key={p.title}>
            <article className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon style={{ fontSize: 34 }} />
                </div>
                <ExternalLinks githubLink={p.link} openLink={p.open} docLink={p.doc} />
              </div>
              <h4 className="card-title">{p.title}</h4>
              <p className="card-desc">{p.desc}</p>
              <p className="card-tech">{splitStack(p.techStack).join(", ")}</p>
            </article>
          </FadeInSection>
        ))}
      </ul>
    </section>
  );
}
