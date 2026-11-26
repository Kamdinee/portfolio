import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

const getInitialLang = () => {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") return saved;
  } catch (e) {
    /* localStorage indisponible */
  }
  return "fr";
};

const translations = {
  en: {
    "nav.about": "About",
    "nav.degrees": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.menu": "Open menu",
    "nav.close": "Close menu",

    "intro.badge": "BUT3 Computer Science · IUT Nancy-Charlemagne",
    "intro.salut": "hi, i'm ",
    "intro.et": "and i code sometimes.",
    "intro.desc":
      "Third-year Computer Science student (BUT, Web & Mobile Development track) at IUT Nancy-Charlemagne. I build clean, minimalist and carefully crafted web experiences where design serves the user.",
    "intro.cta.projects": "See my projects",
    "intro.cta.contact": "Get in touch",

    "about.title": "about",
    "about.p1.1": "I'm a ",
    "about.p1.bold1": "third-year BUT Computer Science student, DWM track",
    "about.p1.2":
      " at IUT Nancy-Charlemagne, after a BTS SIO (SLAM option). I am looking for ",
    "about.p1.bold2": "web and mobile development opportunities",
    "about.p1.3":
      " (internship, work-study) to contribute to real projects and keep growing as a ",
    "about.p1.bold3": "developer.",
    "about.tech": "Tech stack",
    "about.stack.lang": "Languages",
    "about.stack.front": "Frameworks",
    "about.stack.tools": "Tools",
    "about.p2":
      "Outside of my studies, I have a strong interest in innovation and astronomy. I also love playing video games and watching movies.",

    "degrees.title": "education",
    "deg.current": "Ongoing",
    "deg.iut.title": "Bachelor of Technology in Computer Science (BUT) — 3rd year",
    "deg.iut.status": "Ongoing",
    "deg.iut.desc": "DWM track — Web & Mobile Development.",
    "deg.iut.date": "Since September 2026",
    "deg.chopin.title": "Advanced Technician's Certificate (BTS SIO)",
    "deg.chopin.status": "Completed",
    "deg.chopin.desc":
      "Computer Services for Organizations — Software Solutions and Business Applications (SLAM).",
    "deg.chopin.date": "From 01/09/2024 to 20/05/2026",
    "deg.idmc.title": "Bachelor's Program (MIASHS)",
    "deg.idmc.status": "Discontinued",
    "deg.idmc.desc":
      "Mathematics and Computer Science Applied to Human and Social Sciences.",
    "deg.idmc.date": "From 13/09/2021 to 05/01/2023",
    "deg.bac.title": "General Baccalaureate",
    "deg.bac.status": "Completed",
    "deg.bac.desc": "Specialization in Mathematics and Life & Earth Sciences.",
    "deg.bac.date": "From 01/09/2018 to 07/07/2021",

    "exp.title": "experience",
    "exp.yab.title": "Software Developer @",
    "exp.yab.duration": "JANUARY 2026 - FEBRUARY 2026",
    "exp.yab.desc1":
      "Visual and ergonomic evolution of the site using Next.js and Tailwind.",
    "exp.yab.desc2":
      "Set up Docker infrastructure and automated production on Vercel.",
    "exp.yab.desc3":
      "Secured and improved Neon database managed via Prisma ORM.",
    "exp.yab.desc4":
      "Created admin panel, authentication system through Next.js, and email sending via Clerk.",
    "exp.yab.desc5":
      "Created several game modules coded in Python such as Pacman or Tetris.",

    "exp.mir.title": "Software Development Engineer @",
    "exp.mir.duration": "MAY 2025 - JULY 2025",
    "exp.mir.desc1":
      "Developed front-end interfaces and a SSO dashboard using modern tools such as Tailwind and Grafana.",
    "exp.mir.desc2":
      "Implemented API-driven features for dynamic visualization of spatial data captured by the SkyMonitor system.",
    "exp.mir.desc3":
      "Improved the user experience of a specialized observation platform.",
    "exp.mir.desc4":
      "Gained experience with Docker, Laravel, and agile collaboration within a team.",

    "proj.title": "projects",
    "proj.all": "View all projects",
    "proj.agora.desc":
      "Application of the AGORA youth club data administration site developed in the 2nd year of BTS.",
    "proj.mir.desc":
      "Customer Dashboard / SSO that displays summary information from their Skymonitor via API.",
    "proj.yab.desc":
      "Improvement and securing of the Yabonlapub charity site, designed to donate advertising revenue to associations.",
    "proj.omo.desc":
      "A weather widget inspired by the game Omori, with dynamic moods where characters react to the weather.",
    "proj.agomob.desc":
      "Mobile application created on mandate from MJC Agora to publish information about games, brands, platforms, genres, and PEGI ratings.",
    "proj.stage.desc":
      "Student/company matching platform dedicated to internship offers, integrating tailored interfaces for each profile.",
    "proj.wp.desc":
      "Development of a portfolio via the WordPress CMS in order to discover its features and ecosystem.",
    "proj.vr.desc":
      "Discovery of virtual reality immersion, structured around choosing an avatar and exploring an interactive world developed for this project.",
    "proj.tp.desc":
      "Completion of various practical exercises on Packet Tracer, bash scripting, rights management, IP addressing plans, and SSH.",
    "links.github": "Source code on GitHub",
    "links.doc": "Documentation",
    "links.open": "Open the project",

    "contact.title": "contact",
    "contact.text":
      "I am open to internship and work-study opportunities in web and mobile development. Feel free to reach out by email or on LinkedIn.",
    "contact.btn": "Send an email",
    "footer.inspired": "Design inspired by",
  },
  fr: {
    "nav.about": "Présentation",
    "nav.degrees": "Formations",
    "nav.experience": "Expériences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.menu": "Ouvrir le menu",
    "nav.close": "Fermer le menu",

    "intro.badge": "BUT3 Informatique · IUT Nancy-Charlemagne",
    "intro.salut": "hi, i'm ",
    "intro.et": "et je code parfois.",
    "intro.desc":
      "Étudiant en 3ème année de BUT Informatique (parcours Développement Web & Mobile) à l'IUT Nancy-Charlemagne. Je conçois des expériences web propres, minimalistes et soignées, où le design est au service de l'utilisateur.",
    "intro.cta.projects": "Voir mes projets",
    "intro.cta.contact": "Me contacter",

    "about.title": "présentation",
    "about.p1.1": "Je suis étudiant en ",
    "about.p1.bold1": "3ème année de BUT Informatique, parcours DWM",
    "about.p1.2":
      ", à l'IUT Nancy-Charlemagne, après un BTS SIO option SLAM. Je recherche des ",
    "about.p1.bold2": "opportunités en développement web et mobile",
    "about.p1.3":
      " (stage, alternance) pour contribuer à des projets concrets et progresser en tant que ",
    "about.p1.bold3": "développeur.",
    "about.tech": "Technologies",
    "about.stack.lang": "Langages",
    "about.stack.front": "Frameworks",
    "about.stack.tools": "Outils",
    "about.p2":
      "En dehors de mes études, j'ai un fort intérêt pour l'innovation et l'astronomie. J'aime aussi jouer aux jeux vidéo et regarder des films.",

    "degrees.title": "formations",
    "deg.current": "En cours",
    "deg.iut.title": "BUT Informatique — 3ème année",
    "deg.iut.status": "En cours",
    "deg.iut.desc": "Parcours DWM — Développement Web & Mobile.",
    "deg.iut.date": "Depuis septembre 2026",
    "deg.chopin.title": "BTS Services Informatiques aux Organisations",
    "deg.chopin.status": "Obtenu",
    "deg.chopin.desc":
      "Option Solutions Logicielles et Applications Métiers (SLAM).",
    "deg.chopin.date": "Du 01/09/2024 au 20/05/2026",
    "deg.idmc.title": "Licence MIASHS",
    "deg.idmc.status": "Interrompue",
    "deg.idmc.desc":
      "Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales.",
    "deg.idmc.date": "Du 13/09/2021 au 05/01/2023",
    "deg.bac.title": "Baccalauréat Général",
    "deg.bac.status": "Obtenu",
    "deg.bac.desc":
      "Spécialités Mathématiques et Sciences de la Vie et de la Terre (SVT).",
    "deg.bac.date": "Du 01/09/2018 au 07/07/2021",

    "exp.title": "expériences",
    "exp.yab.title": "Développeur informatique @",
    "exp.yab.duration": "JANVIER 2026 - FÉVRIER 2026",
    "exp.yab.desc1":
      "Évolution visuelle et ergonomique du site en Next.js et Tailwind.",
    "exp.yab.desc2":
      "Mise en place de l'infrastructure Docker et production automatisée sur Vercel.",
    "exp.yab.desc3":
      "Sécurisation et amélioration de la BDD sous Neon gérée via l'ORM Prisma.",
    "exp.yab.desc4":
      "Création d'un panel admin, d'un système d'authentification par Next.js et envoi de mails via Clerk.",
    "exp.yab.desc5":
      "Création de quelques modules de jeux codés en Python comme Pacman ou Tetris.",

    "exp.mir.title": "Ingénieur en Développement Logiciel @",
    "exp.mir.duration": "MAI 2025 - JUILLET 2025",
    "exp.mir.desc1":
      "Développement d'interfaces front-end et d'un tableau de bord SSO avec des outils modernes tels que Tailwind et Grafana.",
    "exp.mir.desc2":
      "Mise en place de fonctionnalités basées sur des API pour la visualisation dynamique de données spatiales capturées par le système SkyMonitor.",
    "exp.mir.desc3":
      "Amélioration de l'expérience utilisateur pour une plateforme d'observation spécialisée.",
    "exp.mir.desc4":
      "Acquisition d'expérience avec Docker, Laravel, et la collaboration agile en équipe.",

    "proj.title": "projets",
    "proj.all": "Voir tous mes projets",
    "proj.agora.desc":
      "Application du site d'administration des données de la MJC AGORA développée en 2ème année de BTS.",
    "proj.mir.desc":
      "Customer Dashboard / SSO qui affiche aux clients des informations récapitulatives de leur Skymonitor via API.",
    "proj.yab.desc":
      "Amélioration et sécurisation du site caritatif Yabonlapub, conçu pour reverser les revenus générés par la publicité à des associations.",
    "proj.omo.desc":
      "Un widget météo inspiré du jeu Omori, avec des humeurs dynamiques où les personnages réagissent à la météo.",
    "proj.agomob.desc":
      "Application mobile créée sur mandat de la MJC Agora pour publier des informations sur les jeux, marques, plateformes, genres et classements PEGI.",
    "proj.stage.desc":
      "Plateforme de mise en relation étudiants/entreprises dédiée aux offres de stage, intégrant des interfaces adaptées à chaque profil.",
    "proj.wp.desc":
      "Développement d'un portfolio via le CMS WordPress dans le but d'en découvrir les fonctionnalités et l'écosystème.",
    "proj.vr.desc":
      "Découverte de l'immersion en réalité virtuelle, structurée autour du choix d'un avatar et de l'exploration d'un monde interactif développé pour ce projet.",
    "proj.tp.desc":
      "Réalisation de différents TP sur Packet Tracer, le scripting bash, la gestion des droits, les plans d'adressage IP et SSH.",
    "links.github": "Code source sur GitHub",
    "links.doc": "Documentation",
    "links.open": "Ouvrir le projet",

    "contact.title": "contact",
    "contact.text":
      "Je suis à l'écoute d'opportunités de stage ou d'alternance en développement web et mobile. Vous pouvez me joindre par e-mail ou via LinkedIn.",
    "contact.btn": "Envoyer un e-mail",
    "footer.inspired": "Design inspiré de",
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      /* ignore */
    }
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "fr" : "en"));
  };

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
