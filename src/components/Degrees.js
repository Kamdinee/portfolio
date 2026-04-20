import React, { useContext } from "react";
import FadeInSection from "./FadeInSection";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { LanguageContext } from "../LanguageContext";

import "../styles/Degrees.css";

export default function Degrees() {
  const { t } = useContext(LanguageContext);
  
  return (
    <section id="degrees">
      <FadeInSection>
        <h2 className="degrees-title">
          {t("degrees.title")}
          <span className="degrees-line"></span>
        </h2>

        {/* ========== 1 • CHOPIN ========== */}
        <div className="degree-row">
          <div className="degree-icon-box">
            {/* tu peux garder /assets, ça marche très bien */}
            <img
              src="/assets/logochopin.jpeg"
              alt="Chopin Logo"
              className="degree-img"
            />
          </div>

          <div className="degree-content">
            <h3 className="degree-name">
              <GraduationCap className="degree-title-icon" />
              {t("deg.chopin.title")}
            </h3>

            <p className="degree-field">
              {t("deg.chopin.desc")}
            </p>

            <div className="degree-sub">
              <MapPin className="sub-icon" />
              Lycée Frédéric Chopin — Nancy, France
            </div>

            <div className="degree-sub">
              <Calendar className="sub-icon" />
              {t("deg.chopin.date")}
            </div>
          </div>
        </div>

        <div className="degree-divider" />

        {/* ========== 2 • IDMC ========== */}
        <div className="degree-row">
          <div className="degree-icon-box">
            <img
              src="/assets/logoidmc.jpg"
              alt="IDMC Logo"
              className="degree-img"
            />
          </div>

          <div className="degree-content">
            <h3 className="degree-name">
              <GraduationCap className="degree-title-icon" />
              {t("deg.idmc.title")}
            </h3>

            <p className="degree-field">
              {t("deg.idmc.desc")}
            </p>

            <div className="degree-sub">
              <MapPin className="sub-icon" />
              Institut des Sciences du Digital (IDMC) — Nancy, France
            </div>

            <div className="degree-sub">
              <Calendar className="sub-icon" />
              {t("deg.idmc.date")}
            </div>
          </div>
        </div>

        <div className="degree-divider" />

        {/* ========== 3 • BAC ========== */}
        <div className="degree-row">
          <div className="degree-icon-box">
            <GraduationCap className="degree-bac-icon" />
          </div>

          <div className="degree-content">
            <h3 className="degree-name">
              <GraduationCap className="degree-title-icon" />
              {t("deg.bac.title")}
            </h3>

            <p className="degree-field">
              {t("deg.bac.desc")}
            </p>

            <div className="degree-sub">
              <MapPin className="sub-icon" />
              Lycée Jacques Callot — Nancy, France
            </div>

            <div className="degree-sub">
              <Calendar className="sub-icon" />
              {t("deg.bac.date")}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
    