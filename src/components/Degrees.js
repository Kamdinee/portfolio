import React from "react";
import FadeInSection from "./FadeInSection";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

import "../styles/Degrees.css";

export default function Degrees() {
  return (
    <section id="degrees">
      <FadeInSection>
        <h2 className="degrees-title">
          Degrees
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
              Advanced Technician’s Certificate – Ongoing
            </h3>

            <p className="degree-field">
              Computer Services for Organizations — Software Solutions and
              Business Applications.
            </p>

            <div className="degree-sub">
              <MapPin className="sub-icon" />
              High School Frederic Chopin — Nancy, France
            </div>

            <div className="degree-sub">
              <Calendar className="sub-icon" />
              From 01/09/2024 to 20/05/2026
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
              Bachelor’s Program – Incompleted
            </h3>

            <p className="degree-field">
              Computer Services for Organizations — Software Solutions and
              Business Applications.
            </p>

            <div className="degree-sub">
              <MapPin className="sub-icon" />
              Institute of Digital Sciences / MIASHS — Nancy, France
            </div>

            <div className="degree-sub">
              <Calendar className="sub-icon" />
              From 13/09/2021 to 05/01/2023
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
              General Baccalaureate – Completed
            </h3>

            <p className="degree-field">
              General Baccalaureate — Specialization in Mathematics and Life
              Sciences.
            </p>

            <div className="degree-sub">
              <MapPin className="sub-icon" />
              High School Jacques Callot — Nancy, France
            </div>

            <div className="degree-sub">
              <Calendar className="sub-icon" />
              From 01/09/2018 to 07/07/2021
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
    