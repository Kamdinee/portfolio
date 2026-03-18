import React from "react";
import FadeInSection from "./FadeInSection";
import TimelineIcon from '@material-ui/icons/Timeline';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import "../styles/Veilles.css";

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
  render() {
    return (
      <div id="veilles">
        <div className="section-header ">
          <span className="section-title">/ veilles</span>
        </div>
        <FadeInSection>
          <div className="about-content" style={{ display: "block" }}>
            <div className="about-description" style={{ maxWidth: "100%", marginTop: "20px" }}>
              
              <h4 style={{ color: "var(--lightest-slate)", fontSize: "22px", marginBottom: "15px", fontWeight: "600" }}>
                Qu'est-ce que la veille technologique ?
              </h4>
              <p>
                La veille technologique consiste à s'informer en continu sur les innovations et évolutions techniques d'un secteur. Cela permet d'anticiper les changements (nouveaux concepts, brevets, processus) et d'évaluer leur impact sur notre société.
              </p>

              <h4 style={{ color: "var(--lightest-slate)", fontSize: "22px", marginTop: "50px", marginBottom: "15px", fontWeight: "600" }}>
                Les outils de ma veille
              </h4>
              <p>Pour mener à bien cette veille de manière efficace, j'utilise hebdomadairement :</p>
              
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
                Sujet de ma veille : <span style={{ color: "var(--green-bright)" }}>L'IA et son impact dans notre avenir</span>
              </h4>
              <p>
                L'intelligence artificielle transforme profondément tous les domaines de la société contemporaine. Afin d'explorer ce phénomène, j'ai structuré ma veille autour de deux thèmes majeurs :
              </p>

              <div style={{ marginTop: "60px" }}>
                <h5 style={{ color: "var(--lightest-slate)", fontSize: "22px", fontWeight: "700", textAlign: "center", marginBottom: "30px" }}>
                  Thème 1 : Nouveautés sur l'IA
                </h5>
                <div className="articles-grid">
                  <ArticleCard 
                     icon={TimelineIcon} 
                     title="Claude dans Excel : un vrai gain de productivité" 
                     date="12 FÉVR. 2026" 
                     desc="L'intégration du modèle Claude dans Microsoft Excel permet d'analyser, de structurer et de modifier en temps réel des feuilles de calcul complexes grâce à l'IA." 
                     source="Journal du Net" 
                  />
                  <ArticleCard 
                     icon={TimelineIcon} 
                     title="Lancement de Gemini 3.1 Pro sur Google Cloud" 
                     date="20 FÉVR. 2026" 
                     desc="Google annonce Gemini 3.1 Pro sur Vertex AI, une avancée majeure dans la série Gemini 3 offrant un raisonnement supérieur et optimisé pour la résolution de problèmes complexes." 
                     source="Google Cloud Blog" 
                  />
                  <ArticleCard 
                     icon={TimelineIcon} 
                     title="Le guide ultime : le prompt sous Nano Banana 2" 
                     date="05 MARS 2026" 
                     desc="Basé sur la famille Gemini 3, le nouveau modèle de génération d'images de Google vise à supprimer les essais à répétition en comprenant enfin précisément les requêtes en langage naturel." 
                     source="Google Gen Media" 
                  />
                </div>
              </div>

              <div style={{ marginTop: "80px" }}>
                <h5 style={{ color: "var(--lightest-slate)", fontSize: "22px", fontWeight: "700", textAlign: "center", marginBottom: "30px" }}>
                  Thème 2 : Les risques de l'IA à long terme
                </h5>
                <div className="articles-grid">
                  <ArticleCard 
                     icon={DeveloperBoardIcon} 
                     title="Risque existentiel : l'urgence de définir la conscience" 
                     date="02 FÉVR. 2026" 
                     desc="Des chercheurs alertent sur le fait que les avancées rapides de l'IA dépassent notre compréhension de la conscience, créant de sérieux dilemmes éthiques de long terme." 
                     source="Scientific American" 
                  />
                  <ArticleCard 
                     icon={DeveloperBoardIcon} 
                     title="ChatGPT en thérapeute : de graves risques éthiques" 
                     date="02 MARS 2026" 
                     desc="Alors que l'usage de chatbots pour du soutien psychologique explose, l'Université Brown tire la sonnette d'alarme sur le recours à des systèmes incapables de réelle empathie." 
                     source="Brown University" 
                  />
                  <ArticleCard 
                     icon={DeveloperBoardIcon} 
                     title="Expertise : les usages responsables de l'IA" 
                     date="18 MARS 2026" 
                     desc="Des experts s'entendent sur un point majeur : l'intelligence artificielle doit servir de partenaire de réflexion, mais ne doit jamais se substituer au jugement critique humain." 
                     source="The Guardian" 
                  />
                </div>
              </div>

              <div style={{ marginTop: "80px", marginBottom: "30px" }}>
                <h4 style={{ color: "var(--lightest-slate)", fontSize: "24px", fontWeight: "700", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                  Automatisation avancée avec n8n
                </h4>
                <p style={{ marginBottom: "30px" }}>
                  Pour optimiser ma veille, je développe actuellement un workflow automatisé via n8n. À terme, ce réseau d'agents IA cherchera chaque jour les actualités clés, utilisera ChatGPT pour les filtrer et les résumer, puis sauvegardera les meilleurs résultats sur Notion avant de me les envoyer par e-mail.
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
