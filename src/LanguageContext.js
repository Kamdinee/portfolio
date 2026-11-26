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
    "nav.veilles": "Tech Watch",
    "nav.epreuve": "E5 Exam",
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
    "about.p1.bold1": "third-year BUT Computer Science student — DWM track",
    "about.p1.2":
      " at IUT Nancy-Charlemagne, after a BTS SIO (SLAM option). I'm open to ",
    "about.p1.bold2": "web & mobile development opportunities",
    "about.p1.3":
      " (internship, work-study, projects) to keep sharpening my skills, contribute to real products and grow as a ",
    "about.p1.bold3": "developer.",
    "about.tech": "Technologies I have been working with:",
    "about.stack.lang": "Languages",
    "about.stack.front": "Frameworks",
    "about.stack.tools": "Tools & DevOps",
    "about.p2":
      "Outside of my studies, I have a strong interest in innovation and astronomy. I also love playing video games and watching movies.",
    "about.cv": "My Resume",

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
    "proj.featured": "Featured project",
    "proj.others": "Other projects",
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
    "proj.veilleinfo.desc":
      "Implementation of a technology watch methodology. I am also currently working on an n8n workflow to automate the task with AI.",
    "proj.tp.desc":
      "Completion of various practical exercises on Packet Tracer, bash scripting, rights management, IP addressing plans, and SSH.",
    "links.github": "Source code on GitHub",
    "links.doc": "Documentation",
    "links.open": "Open the project",

    "veille.title": "tech watch",
    "veille.q1": "What is technology watch?",
    "veille.a1":
      "Technology watch consists of continuously getting informed about innovations and technical evolutions in a sector. It allows anticipating changes (new concepts, patents, processes) and evaluating their impact on our society.",
    "veille.q2": "My watch tools",
    "veille.a2": "To carry out this watch effectively, I use weekly:",
    "veille.sub": "Subject of my watch: ",
    "veille.sub_color": "AI and its impact on our future",
    "veille.a3":
      "Artificial intelligence is profoundly transforming all areas of contemporary society. To explore this phenomenon, I have structured my watch around two major themes:",
    "veille.t1": "Theme 1: New releases in AI",
    "veille.c1": "Claude in Excel: a real productivity boost",
    "veille.cd1": "FEB 12, 2026",
    "veille.cdesc1":
      "The integration of the Claude model in Microsoft Excel allows analyzing, structuring, and modifying complex spreadsheets in real time using AI.",
    "veille.c2": "Launch of Gemini 3.1 Pro on Google Cloud",
    "veille.cd2": "FEB 20, 2026",
    "veille.cdesc2":
      "Google announces Gemini 3.1 Pro on Vertex AI, a major step forward in the Gemini 3 series offering superior reasoning optimized for complex problem solving.",
    "veille.c3": "The ultimate guide: prompting on Nano Banana 2",
    "veille.cd3": "MAR 05, 2026",
    "veille.cdesc3":
      "Based on the Gemini 3 family, Google's new image generation model aims to eliminate repetitive trial-and-error by finally precisely understanding natural language requests.",
    "veille.t2": "Theme 2: Long-term risks of AI",
    "veille.d1": "Existential risk: the urgency of defining consciousness",
    "veille.dd1": "FEB 02, 2026",
    "veille.ddesc1":
      "Researchers warn that rapid advances in AI are outpacing our understanding of consciousness, creating serious long-term ethical dilemmas.",
    "veille.d2": "ChatGPT as a therapist: serious ethical risks",
    "veille.dd2": "MAR 02, 2026",
    "veille.ddesc2":
      "As the use of chatbots for psychological support explodes, Brown University sounds the alarm on relying on systems incapable of true empathy.",
    "veille.d3": "Expertise: responsible uses of AI",
    "veille.dd3": "MAR 18, 2026",
    "veille.ddesc3":
      "Experts agree on a major point: artificial intelligence should serve as a thinking partner, but must never substitute human critical judgment.",
    "veille.auto": "Advanced automation with n8n",
    "veille.auto_desc":
      "To optimize my watch, I am currently developing an automated workflow via n8n. Eventually, this network of AI agents will daily search for key news, use ChatGPT to filter and summarize them, and save the best results on Notion before sending them via email.",
    "veille.source": "Source",

    "epreuve.title": "e5 exam",
    "epreuve.note": "Archive — completed during my BTS SIO (2024 – 2026)",
    "epreuve.p1":
      "The E5 exam is a key exam of the BTS SIO, it must be composed of at least two projects having a common context related to the chosen option (SLAM for my case).",
    "epreuve.p2":
      "The objective of this exam is to evaluate the candidate on one of the two professional situations they have completed during the 2 years of training.",
    "epreuve.p3":
      "This exam is also accompanied by a skills grid, skills which must be described and achieved during the presented projects.",
    "epreuve.btn": "Download",
    "epreuve.zoom": "Click to enlarge",

    "contact.title": "contact",
    "contact.heading": "Let's work together.",
    "contact.text":
      "An internship, a work-study position, a project or just a question? My inbox is always open — I'll get back to you quickly.",
    "contact.btn": "Say hello",
    "footer.made": "Designed & built by Kamdine",
    "footer.inspired": "Inspired by",
  },
  fr: {
    "nav.about": "Présentation",
    "nav.degrees": "Formations",
    "nav.experience": "Expériences",
    "nav.projects": "Projets",
    "nav.veilles": "Veille",
    "nav.epreuve": "Épreuve E5",
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
    "about.p1.bold1": "3ème année de BUT Informatique — parcours DWM",
    "about.p1.2":
      " à l'IUT Nancy-Charlemagne, après un BTS SIO option SLAM. Je suis ouvert aux ",
    "about.p1.bold2": "opportunités en développement web & mobile",
    "about.p1.3":
      " (stage, alternance, projets) pour continuer à perfectionner mes compétences, contribuer à de vrais produits et grandir en tant que ",
    "about.p1.bold3": "développeur.",
    "about.tech": "Les technologies avec lesquelles j'ai travaillé :",
    "about.stack.lang": "Langages",
    "about.stack.front": "Frameworks",
    "about.stack.tools": "Outils & DevOps",
    "about.p2":
      "En dehors de mes études, j'ai un fort intérêt pour l'innovation et l'astronomie. J'aime aussi jouer aux jeux vidéo et regarder des films.",
    "about.cv": "Mon CV",

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
    "proj.featured": "Projet phare",
    "proj.others": "Autres projets",
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
    "proj.veilleinfo.desc":
      "Mise en place d'une méthodologie de veille technologique. Je travaille également sur un workflow n8n pour automatiser cette tâche à l'aide de l'IA.",
    "proj.tp.desc":
      "Réalisation de différents TP sur Packet Tracer, le scripting bash, la gestion des droits, les plans d'adressage IP et SSH.",
    "links.github": "Code source sur GitHub",
    "links.doc": "Documentation",
    "links.open": "Ouvrir le projet",

    "veille.title": "veille",
    "veille.q1": "Qu'est-ce que la veille technologique ?",
    "veille.a1":
      "La veille technologique consiste à s'informer en continu sur les innovations et évolutions techniques d'un secteur. Cela permet d'anticiper les changements (nouveaux concepts, brevets, processus) et d'évaluer leur impact sur notre société.",
    "veille.q2": "Les outils de ma veille",
    "veille.a2":
      "Pour mener à bien cette veille de manière efficace, j'utilise chaque semaine :",
    "veille.sub": "Sujet de ma veille : ",
    "veille.sub_color": "L'IA et son impact sur notre avenir",
    "veille.a3":
      "L'intelligence artificielle transforme profondément tous les domaines de la société contemporaine. Afin d'explorer ce phénomène, j'ai structuré ma veille autour de deux thèmes majeurs :",
    "veille.t1": "Thème 1 : Nouveautés sur l'IA",
    "veille.c1": "Claude dans Excel : un vrai gain de productivité",
    "veille.cd1": "12 FÉVR. 2026",
    "veille.cdesc1":
      "L'intégration du modèle Claude dans Microsoft Excel permet d'analyser, de structurer et de modifier en temps réel des feuilles de calcul complexes grâce à l'IA.",
    "veille.c2": "Lancement de Gemini 3.1 Pro sur Google Cloud",
    "veille.cd2": "20 FÉVR. 2026",
    "veille.cdesc2":
      "Google annonce Gemini 3.1 Pro sur Vertex AI, une avancée majeure dans la série Gemini 3 offrant un raisonnement supérieur et optimisé pour la résolution de problèmes complexes.",
    "veille.c3": "Le guide ultime : le prompt sous Nano Banana 2",
    "veille.cd3": "05 MARS 2026",
    "veille.cdesc3":
      "Basé sur la famille Gemini 3, le nouveau modèle de génération d'images de Google vise à supprimer les essais à répétition en comprenant enfin précisément les requêtes en langage naturel.",
    "veille.t2": "Thème 2 : Les risques de l'IA à long terme",
    "veille.d1": "Risque existentiel : l'urgence de définir la conscience",
    "veille.dd1": "02 FÉVR. 2026",
    "veille.ddesc1":
      "Des chercheurs alertent sur le fait que les avancées rapides de l'IA dépassent notre compréhension de la conscience, créant de sérieux dilemmes éthiques de long terme.",
    "veille.d2": "ChatGPT en thérapeute : de graves risques éthiques",
    "veille.dd2": "02 MARS 2026",
    "veille.ddesc2":
      "Alors que l'usage de chatbots pour du soutien psychologique explose, l'Université Brown tire la sonnette d'alarme sur le recours à des systèmes incapables de réelle empathie.",
    "veille.d3": "Expertise : les usages responsables de l'IA",
    "veille.dd3": "18 MARS 2026",
    "veille.ddesc3":
      "Des experts s'entendent sur un point majeur : l'intelligence artificielle doit servir de partenaire de réflexion, mais ne doit jamais se substituer au jugement critique humain.",
    "veille.auto": "Automatisation avancée avec n8n",
    "veille.auto_desc":
      "Pour optimiser ma veille, je développe actuellement un workflow automatisé via n8n. À terme, ce réseau d'agents IA cherchera chaque jour les actualités clés, utilisera ChatGPT pour les filtrer et les résumer, puis sauvegardera les meilleurs résultats sur Notion avant de me les envoyer par e-mail.",
    "veille.source": "Source",

    "epreuve.title": "épreuve e5",
    "epreuve.note": "Archive — réalisée dans le cadre de mon BTS SIO (2024 – 2026)",
    "epreuve.p1":
      "L'épreuve E5 est une épreuve clé du BTS SIO, elle doit être composée de minimum deux projets ayant un contexte commun en rapport avec l'option choisie (SLAM pour mon cas).",
    "epreuve.p2":
      "L'objectif de cette épreuve est d'évaluer le candidat sur une des deux situations professionnelles qu'il aura réalisées sur les 2 ans de formation.",
    "epreuve.p3":
      "Cette épreuve est aussi accompagnée d'un tableau des compétences, compétences qui devront être décrites et réalisées au cours des projets présentés.",
    "epreuve.btn": "Télécharger",
    "epreuve.zoom": "Cliquer pour agrandir",

    "contact.title": "contact",
    "contact.heading": "Travaillons ensemble.",
    "contact.text":
      "Une offre de stage, d'alternance, un projet ou simplement une question ? Ma boîte mail est toujours ouverte, je vous répondrai rapidement.",
    "contact.btn": "Me contacter",
    "footer.made": "Conçu & développé par Kamdine",
    "footer.inspired": "Inspiré par",
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
