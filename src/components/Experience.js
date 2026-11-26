import React, { useContext } from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";
import SectionHeader from "./SectionHeader";
import { LanguageContext } from "../LanguageContext";

export default function Experience() {
  const { t } = useContext(LanguageContext);
  return (
    <section id="experience">
      <FadeInSection>
        <SectionHeader title={t("exp.title")} />
        <JobList />
      </FadeInSection>
    </section>
  );
}
