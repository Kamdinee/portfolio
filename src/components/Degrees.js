import React, { useContext } from "react";
import FadeInSection from "./FadeInSection";
import SectionHeader from "./SectionHeader";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { LanguageContext } from "../LanguageContext";

import "../styles/Degrees.css";

const DEGREES = [
  {
    id: "iut",
    logo: "/assets/logoiut.png",
    logoAlt: "IUT Nancy-Charlemagne",
    logoContain: true,
    place: "IUT Nancy-Charlemagne — Nancy, France",
    current: true,
  },
  {
    id: "chopin",
    logo: "/assets/logochopin.jpeg",
    logoAlt: "Lycée Frédéric Chopin",
    place: "Lycée Frédéric Chopin — Nancy, France",
  },
  {
    id: "idmc",
    logo: "/assets/logoidmc.jpg",
    logoAlt: "IDMC",
    place: "Institut des Sciences du Digital (IDMC) — Nancy, France",
  },
  {
    id: "bac",
    place: "Lycée Jacques Callot — Nancy, France",
  },
];

export default function Degrees() {
  const { t } = useContext(LanguageContext);

  return (
    <section id="degrees">
      <FadeInSection>
        <SectionHeader title={t("degrees.title")} />

        <ol className="degrees-list">
          {DEGREES.map((d) => (
            <FadeInSection
              as="li"
              key={d.id}
              className={`degree-row ${d.current ? "is-current" : ""}`}
            >
                <div className={`degree-icon-box ${d.logoContain ? "is-contain" : ""}`}>
                  {d.logo ? (
                    <img src={d.logo} alt={d.logoAlt} className="degree-img" loading="lazy" />
                  ) : (
                    <GraduationCap className="degree-bac-icon" aria-hidden="true" />
                  )}
                </div>

                <div className="degree-content">
                  <div className="degree-head">
                    <h3 className="degree-name">{t(`deg.${d.id}.title`)}</h3>
                    <span className={`degree-status ${d.current ? "is-current" : ""}`}>
                      {t(`deg.${d.id}.status`)}
                    </span>
                  </div>

                  <p className="degree-field">{t(`deg.${d.id}.desc`)}</p>

                  <div className="degree-meta">
                    <span className="degree-sub">
                      <MapPin className="sub-icon" aria-hidden="true" />
                      {d.place}
                    </span>
                    <span className="degree-sub">
                      <Calendar className="sub-icon" aria-hidden="true" />
                      {t(`deg.${d.id}.date`)}
                    </span>
                  </div>
                </div>
            </FadeInSection>
          ))}
        </ol>
      </FadeInSection>
    </section>
  );
}
