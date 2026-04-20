import React from "react";
import FadeInSection from "./FadeInSection";
import TimelineIcon from '@material-ui/icons/Timeline';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import "../styles/Veilles.css";
import { LanguageContext } from "../LanguageContext";

const ArticleCard = ({ icon: Icon, title, date, desc, source }) => (
  <div className="article-card">
    <div className="article-icon-wrapper"><Icon className="article-icon" /></div>
    <div className="article-title">{title}</div>
    <div className="article-date">{date}</div>
    <div className="article-desc">{desc}</div>
    <div className="article-source">Source : {source}</div>
  </div>
);

class Veilles extends React.Component {
  static contextType = LanguageContext;
  render() {
    const { t } = this.context;
    return (
      <div id="veilles">
        <div className="section-header ">
          <span className="section-title">{t("veille.title")}</span>
        </div>
        <FadeInSection>
          <div className="about-content" style={{ display: "block" }}>
            <div className="about-description" style={{ maxWidth: "100%", marginTop: "20px" }}>
              
              <h4 style={{ color: "var(--lightest-slate)", fontSize: "22px", marginBottom: "15px", fontWeight: "600" }}>
                {t("veille.q1")}
              </h4>
              <p>
                {t("veille.a1")}
              </p>

              <h4 style={{ color: "var(--lightest-slate)", fontSize: "22px", marginTop: "50px", marginBottom: "15px", fontWeight: "600" }}>
                {t("veille.q2")}
              </h4>
              <p>{t("veille.a2")}</p>
              
              <ul className="tools-list" style={{ marginTop: "25px", listStyle: "none", paddingLeft: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "20px" }}>
                <li style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "10px" }}>
                  <img src="/assets/feedly.png" alt="Feedly" style={{ width: "55px", height: "55px", objectFit: "contain", borderRadius: "8px" }} />
                  <b style={{ color: "var(--lightest-slate)", fontSize: "16px" }}>Feedly</b>
                </li>
                <li style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "10px" }}>
                  <img src="/assets/notion.png" alt="Notion" style={{ width: "55px", height: "55px", objectFit: "contain", borderRadius: "8px" }} />
                  <b style={{ color: "var(--lightest-slate)", fontSize: "16px" }}>Notion</b>
                </li>
                <li style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "10px" }}>
                  <img src="/assets/chatgpt.png" alt="ChatGPT" style={{ width: "55px", height: "55px", objectFit: "contain", borderRadius: "8px" }} />
                  <b style={{ color: "var(--lightest-slate)", fontSize: "16px" }}>ChatGPT</b>
                </li>
              </ul>

              <h4 style={{ color: "var(--lightest-slate)", fontSize: "24px", marginTop: "60px", marginBottom: "15px", fontWeight: "700" }}>
                {t("veille.sub")} <span style={{ color: "var(--green-bright)" }}>{t("veille.sub_color")}</span>
              </h4>
              <p>
                {t("veille.a3")}
              </p>

              <div style={{ marginTop: "60px" }}>
                <h5 style={{ color: "var(--lightest-slate)", fontSize: "22px", fontWeight: "700", textAlign: "center", marginBottom: "30px" }}>
                  {t("veille.t1")}
                </h5>
                <div className="articles-grid">
                  <ArticleCard 
                     icon={TimelineIcon} 
                     title={t("veille.c1")} 
                     date={t("veille.cd1")} 
                     desc={t("veille.cdesc1")} 
                     source="Journal du Net" 
                  />
                  <ArticleCard 
                     icon={TimelineIcon} 
                     title={t("veille.c2")} 
                     date={t("veille.cd2")} 
                     desc={t("veille.cdesc2")} 
                     source="Google Cloud Blog" 
                  />
                  <ArticleCard 
                     icon={TimelineIcon} 
                     title={t("veille.c3")} 
                     date={t("veille.cd3")} 
                     desc={t("veille.cdesc3")} 
                     source="Google Gen Media" 
                  />
                </div>
              </div>

              <div style={{ marginTop: "80px" }}>
                <h5 style={{ color: "var(--lightest-slate)", fontSize: "22px", fontWeight: "700", textAlign: "center", marginBottom: "30px" }}>
                  {t("veille.t2")}
                </h5>
                <div className="articles-grid">
                  <ArticleCard 
                     icon={DeveloperBoardIcon} 
                     title={t("veille.d1")} 
                     date={t("veille.dd1")} 
                     desc={t("veille.ddesc1")} 
                     source="Scientific American" 
                  />
                  <ArticleCard 
                     icon={DeveloperBoardIcon} 
                     title={t("veille.d2")} 
                     date={t("veille.dd2")} 
                     desc={t("veille.ddesc2")} 
                     source="Brown University" 
                  />
                  <ArticleCard 
                     icon={DeveloperBoardIcon} 
                     title={t("veille.d3")} 
                     date={t("veille.dd3")} 
                     desc={t("veille.ddesc3")} 
                     source="The Guardian" 
                  />
                </div>
              </div>

              <div style={{ marginTop: "80px", marginBottom: "30px" }}>
                <h4 style={{ color: "var(--lightest-slate)", fontSize: "24px", fontWeight: "700", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                  {t("veille.auto")}
                </h4>
                <p style={{ marginBottom: "30px" }}>
                  {t("veille.auto_desc")}
                </p>
                <div style={{ marginTop: "20px" }}>
                   <img src="/assets/automatisation.png" alt="Workflow d'automatisation n8n" style={{ width: "100%", borderRadius: "8px" }} />
                </div>
              </div>
              
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Veilles;
