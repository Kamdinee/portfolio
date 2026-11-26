import React, { useContext } from "react";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
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
        <p className="contact-text">{t("contact.text")}</p>
        <div className="contact-actions">
          <a href={`mailto:${EMAIL}`} className="cta cta-primary">
            <EmailRoundedIcon style={{ fontSize: 19 }} />
            {t("contact.btn")}
          </a>
          <a
            href="https://www.linkedin.com/in/kamdine/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta cta-ghost"
          >
            <LinkedInIcon style={{ fontSize: 19 }} />
            LinkedIn
          </a>
        </div>
      </FadeInSection>

      <footer className="site-footer">
        © {new Date().getFullYear()} Kamdine Hassanzadeh · {t("footer.inspired")}{" "}
        <a href="https://github.com/gazijarin/Gazi" target="_blank" rel="noopener noreferrer">
          Gazi Jarin
        </a>
      </footer>
    </section>
  );
}
