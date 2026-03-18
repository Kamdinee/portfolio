import React from "react";
import FadeInSection from "./FadeInSection";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

import "../styles/Degrees.css";

export default function Degrees() {
  return (
    <section id="degrees">
      <FadeInSection>
        <h2 className="degrees-title">
          / formations
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
              Brevet de Technicien Supérieur – En cours
            </h3>

            <p className="degree-field">
              Services Informatiques aux Organisations — Solutions Logicielles et
              Applications Métiers (SLAM).
            </p>

            <div className="degree-sub">
              <MapPin className="sub-icon" />
              Lycée Frédéric Chopin — Nancy, France
            </div>

            <div className="degree-sub">
              <Calendar className="sub-icon" />
              Du 01/09/2024 au 20/05/2026
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
              Licence – Interrompue
            </h3>

            <p className="degree-field">
              Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales (MIASHS).
            </p>

            <div className="degree-sub">
              <MapPin className="sub-icon" />
              Institut des Sciences du Digital (IDMC) — Nancy, France
            </div>

            <div className="degree-sub">
              <Calendar className="sub-icon" />
              Du 13/09/2021 au 05/01/2023
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
              Baccalauréat Général – Obtenu
            </h3>

            <p className="degree-field">
              Baccalauréat Général — Spécialités Mathématiques et Sciences de la Vie et de la Terre (SVT).
            </p>

            <div className="degree-sub">
              <MapPin className="sub-icon" />
              Lycée Jacques Callot — Nancy, France
            </div>

            <div className="degree-sub">
              <Calendar className="sub-icon" />
              Du 01/09/2018 au 07/07/2021
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
    