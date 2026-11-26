import React from "react";

/* En-tête de section façon "/ titre" + filet, avec le slash dans la couleur d'accent. */
export default function SectionHeader({ title }) {
  return (
    <div className="section-header">
      <h2 className="section-title">
        <span className="section-slash">/</span> {title}
      </h2>
    </div>
  );
}
