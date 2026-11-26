import React from "react";
import FadeInSection from "./FadeInSection";
import SectionHeader from "./SectionHeader";
import TimelineIcon from "@material-ui/icons/Timeline";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import "../styles/Veilles.css";
import { LanguageContext } from "../LanguageContext";

const ArticleCard = ({ icon: Icon, title, date, desc, source, sourceLabel }) => (
  <article className="article-card">
    <div className="article-top">
      <div className="article-icon-wrapper">
        <Icon className="article-icon" />
      </div>
      <time className="article-date">{date}</time>
    </div>
    <h6 className="article-title">{title}</h6>
    <p className="article-desc">{desc}</p>
    <div className="article-source">
      {sourceLabel} · <span>{source}</span>
    </div>
  </article>
);

const TOOLS = [
  { name: "Feedly", img: "/assets/feedly.png" },
  { name: "Notion", img: "/assets/Notion_app_logo.png" },
  { name: "ChatGPT", img: "/assets/chatgpt.png" },
];

class Veilles extends React.Component {
  static contextType = LanguageContext;
  render() {
    const { t } = this.context;
    const theme1 = [
      { n: 1, source: "Journal du Net" },
      { n: 2, source: "Google Cloud Blog" },
      { n: 3, source: "Google Gen Media" },
    ];
    const theme2 = [
      { n: 1, source: "Scientific American" },
      { n: 2, source: "Brown University" },
      { n: 3, source: "The Guardian" },
    ];

    return (
      <section id="veilles">
        <FadeInSection>
          <SectionHeader title={t("veille.title")} />
          <div className="veille-body">
            <div className="veille-intro">
              <div className="veille-block">
                <h4 className="veille-h">{t("veille.q1")}</h4>
                <p>{t("veille.a1")}</p>
              </div>
              <div className="veille-block">
                <h4 className="veille-h">{t("veille.q2")}</h4>
                <p>{t("veille.a2")}</p>
                <ul className="tools-list">
                  {TOOLS.map((tool) => (
                    <li key={tool.name}>
                      <img src={tool.img} alt="" />
                      <b>{tool.name}</b>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h4 className="veille-subject">
              {t("veille.sub")} <span>{t("veille.sub_color")}</span>
            </h4>
            <p>{t("veille.a3")}</p>

            <h5 className="veille-theme">{t("veille.t1")}</h5>
            <div className="articles-grid">
              {theme1.map(({ n, source }, i) => (
                <FadeInSection delay={`${i * 100}ms`} key={n}>
                  <ArticleCard
                    icon={TimelineIcon}
                    title={t(`veille.c${n}`)}
                    date={t(`veille.cd${n}`)}
                    desc={t(`veille.cdesc${n}`)}
                    source={source}
                    sourceLabel={t("veille.source")}
                  />
                </FadeInSection>
              ))}
            </div>

            <h5 className="veille-theme">{t("veille.t2")}</h5>
            <div className="articles-grid">
              {theme2.map(({ n, source }, i) => (
                <FadeInSection delay={`${i * 100}ms`} key={n}>
                  <ArticleCard
                    icon={DeveloperBoardIcon}
                    title={t(`veille.d${n}`)}
                    date={t(`veille.dd${n}`)}
                    desc={t(`veille.ddesc${n}`)}
                    source={source}
                    sourceLabel={t("veille.source")}
                  />
                </FadeInSection>
              ))}
            </div>

            <div className="veille-auto">
              <h4 className="veille-subject">{t("veille.auto")}</h4>
              <p>{t("veille.auto_desc")}</p>
              <img
                src="/assets/automatisation.png"
                alt="Workflow d'automatisation n8n"
                className="veille-auto-img"
                loading="lazy"
              />
            </div>
          </div>
        </FadeInSection>
      </section>
    );
  }
}

export default Veilles;
