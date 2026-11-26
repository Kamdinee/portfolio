import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import SectionHeader from "./SectionHeader";
import { LanguageContext } from "../LanguageContext";

const STACK = [
  { key: "about.stack.lang", items: ["HTML / CSS", "JavaScript", "PHP", "Python", "SQL"] },
  { key: "about.stack.front", items: ["React", "Next.js", "Laravel", "Symfony", "Tailwind"] },
  { key: "about.stack.tools", items: ["Git", "Docker", "Prisma", "Vercel", "n8n"] },
];

export const StarButton = ({ children }) => (
  <span className="star-button">
    {children}
    {[1, 2, 3, 4, 5, 6].map((starNum) => (
      <div className={`star-${starNum}`} key={starNum} aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "optimizeQuality",
            fillRule: "evenodd",
            clipRule: "evenodd",
          }}
          viewBox="0 0 784.11 815.53"
        >
          <path
            className="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </svg>
      </div>
    ))}
  </span>
);

class About extends React.Component {
  static contextType = LanguageContext;

  render() {
    const { t } = this.context;

    return (
      <section id="about">
        <FadeInSection>
          <SectionHeader title={t("about.title")} />
          <div className="about-content">
            <div className="about-description">
              <p>
                {t("about.p1.1")}
                <b>{t("about.p1.bold1")}</b>
                {t("about.p1.2")}
                <b className="accent">{t("about.p1.bold2")}</b>
                {t("about.p1.3")}
                <b className="accent">{t("about.p1.bold3")}</b>
              </p>

              <p className="about-tech-intro">{t("about.tech")}</p>
              <div className="stack-grid">
                {STACK.map((group, gi) => (
                  <FadeInSection delay={`${(gi + 1) * 120}ms`} key={group.key}>
                    <div className="stack-group">
                      <div className="stack-label">{t(group.key)}</div>
                      <ul className="chip-list">
                        {group.items.map((item) => (
                          <li className="chip" key={item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeInSection>
                ))}
              </div>

              <p>{t("about.p2")}</p>

              <div className="cv-button-container">
                <a
                  href="/assets/CV_Kamdine_HASSANZADEH.pdf"
                  download="CV_Kamdine_HASSANZADEH.pdf"
                  className="star-link"
                >
                  <StarButton>{t("about.cv")}</StarButton>
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    );
  }
}

export default About;
