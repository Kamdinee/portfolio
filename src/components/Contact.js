import React, { useContext } from "react";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FadeInSection from "./FadeInSection";
import SectionHeader from "./SectionHeader";
import { LanguageContext } from "../LanguageContext";
import "../styles/Contact.css";

const EMAIL = "kamdine.hzd@outlook.com";

export default function Contact() {
  const { t } = useContext(LanguageContext);

  return (
    <section id="contact">
      <FadeInSection>
        <SectionHeader title={t("contact.title")} />
        <div className="contact-card">
          <h3 className="contact-heading">{t("contact.heading")}</h3>
          <p className="contact-text">{t("contact.text")}</p>
          <div className="contact-actions">
            <a href={`mailto:${EMAIL}`} className="cta cta-primary">
              <EmailRoundedIcon style={{ fontSize: 20 }} />
              {t("contact.btn")}
            </a>
            <a
              href="https://www.linkedin.com/in/kamdine/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-ghost"
            >
              <LinkedInIcon style={{ fontSize: 20 }} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Kamdinee"
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-ghost"
            >
              <GitHubIcon style={{ fontSize: 19 }} />
              GitHub
            </a>
          </div>
          <a href={`mailto:${EMAIL}`} className="contact-email">
            {EMAIL}
          </a>
        </div>
      </FadeInSection>

      <footer className="site-footer">
        <span>{t("footer.made")}</span>
        <span className="footer-sep">·</span>
        <span>
          {t("footer.inspired")}{" "}
          <a href="https://github.com/gazijarin/Gazi" target="_blank" rel="noopener noreferrer">
            Gazi Jarin
          </a>
        </span>
      </footer>
    </section>
  );
}
