import React, { useContext, useRef, useState } from "react";
import { LanguageContext } from "../LanguageContext";

/* Onglets d'expériences (verticaux sur desktop, horizontaux sur mobile). */
const JobList = () => {
  const [active, setActive] = useState(0);
  const tabsRef = useRef([]);
  const { t } = useContext(LanguageContext);

  const jobs = [
    {
      company: "Yabonlapub",
      jobTitle: t("exp.yab.title"),
      duration: t("exp.yab.duration"),
      desc: [1, 2, 3, 4, 5].map((n) => t(`exp.yab.desc${n}`)),
      stack: ["Next.js", "Tailwind", "Docker", "Prisma", "Neon", "Vercel", "Clerk"],
    },
    {
      company: "Miratlas",
      logo: "/assets/logomiratlas.png",
      jobTitle: t("exp.mir.title"),
      duration: t("exp.mir.duration"),
      desc: [1, 2, 3, 4].map((n) => t(`exp.mir.desc${n}`)),
      stack: ["Laravel", "Tailwind", "Grafana", "Docker", "API REST"],
    },
  ];

  // Navigation clavier entre les onglets (flèches)
  const onKeyDown = (e) => {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const next = (active + dir + jobs.length) % jobs.length;
    setActive(next);
    if (tabsRef.current[next]) tabsRef.current[next].focus();
  };

  const job = jobs[active];

  return (
    <div className="joblist" style={{ "--active": active, "--count": jobs.length }}>
      <div className="joblist-tabs" role="tablist" aria-orientation="vertical" onKeyDown={onKeyDown}>
        {jobs.map((j, i) => (
          <button
            key={j.company}
            ref={(el) => (tabsRef.current[i] = el)}
            role="tab"
            id={`job-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`job-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            className={`joblist-tab ${active === i ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {j.company}
          </button>
        ))}
        <span className="joblist-indicator" aria-hidden="true" />
      </div>

      <div
        className="joblist-panel"
        role="tabpanel"
        id={`job-panel-${active}`}
        aria-labelledby={`job-tab-${active}`}
        key={active}
      >
        {job.logo && <img className="joblist-logo" src={job.logo} alt={job.company} />}
        <h3 className="joblist-heading">
          <span className="joblist-job-title">{job.jobTitle} </span>
          <span className="joblist-job-company">{job.company}</span>
        </h3>
        <div className="joblist-duration">{job.duration}</div>
        <ul className="job-description">
          {job.desc.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <ul className="chip-list job-stack">
          {job.stack.map((s) => (
            <li className="chip" key={s}>
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobList;
