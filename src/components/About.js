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
            </div>
          </div>
        </FadeInSection>
      </section>
    );
  }
}

export default About;
