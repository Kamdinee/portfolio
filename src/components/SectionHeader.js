import React from "react";

/* En-tête de section façon "/ titre" + filet, avec un lien optionnel à droite. */
export default function SectionHeader({ title, action }) {
  return (
    <div className={`section-header ${action ? "has-action" : ""}`}>
      <h2 className="section-title">
        <span className="section-slash">/</span> {title}
      </h2>
      {action}
    </div>
  );
}
