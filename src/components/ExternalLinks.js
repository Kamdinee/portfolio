import React, { useContext } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import DescriptionIcon from "@material-ui/icons/Description";
import { LanguageContext } from "../LanguageContext";

/* Icônes de liens d'un projet : documentation, GitHub, démo. */
export default function ExternalLinks({ githubLink, openLink, docLink }) {
  const { t } = useContext(LanguageContext);

  const links = [
    docLink && { href: docLink, label: t("links.doc"), icon: <DescriptionIcon style={{ fontSize: 21 }} /> },
    githubLink && { href: githubLink, label: t("links.github"), icon: <GitHubIcon style={{ fontSize: 19 }} /> },
    openLink && { href: openLink, label: t("links.open"), icon: <OpenInBrowserIcon style={{ fontSize: 23 }} /> },
  ].filter(Boolean);

  if (!links.length) return null;

  return (
    <span className="external-links">
      {links.map((l) => (
        <a
          key={l.label}
          className="ext-link"
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          title={l.label}
        >
          {l.icon}
        </a>
      ))}
    </span>
  );
}
