import React from "react";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { LanguageContext } from "../LanguageContext";
import "../styles/NavBar.css";

const SECTIONS = [
  { id: "about", key: "nav.about" },
  { id: "degrees", key: "nav.degrees" },
  { id: "experience", key: "nav.experience" },
  { id: "projects", key: "nav.projects" },
  { id: "veilles", key: "nav.veilles" },
  { id: "epreuve-e5", key: "nav.epreuve" },
  { id: "contact", key: "nav.contact" },
];

const SOCIALS = [
  {
    href: "mailto:kamdine.hzd@outlook.com",
    label: "E-mail",
    icon: <EmailRoundedIcon style={{ fontSize: 20 }} />,
  },
  {
    href: "https://github.com/Kamdinee",
    label: "GitHub",
    icon: <GitHubIcon style={{ fontSize: 19 }} />,
  },
  {
    href: "https://www.linkedin.com/in/kamdine/",
    label: "LinkedIn",
    icon: <LinkedInIcon style={{ fontSize: 21 }} />,
  },
];

class NavBar extends React.Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.state = { activeLink: "", open: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    window.addEventListener("keydown", this.handleKey);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("keydown", this.handleKey);
    document.body.classList.remove("menu-open");
  }

  handleKey = (e) => {
    if (e.key === "Escape" && this.state.open) this.setOpen(false);
  };

  setOpen = (open) => {
    this.setState({ open });
    document.body.classList.toggle("menu-open", open);
  };

  handleScroll() {
    let current = "";
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        current = id;
        break;
      }
    }
    if (current !== this.state.activeLink) this.setState({ activeLink: current });
  }

  render() {
    const { activeLink, open } = this.state;
    const { t } = this.context;

    return (
      <>
        {/* Barre mobile */}
        <header className="mobile-bar">
          <a href="#intro" className="logo-text" onClick={() => this.setOpen(false)}>
            kam
          </a>
          <button
            className={`burger ${open ? "is-open" : ""}`}
            onClick={() => this.setOpen(!open)}
            aria-label={open ? t("nav.close") : t("nav.menu")}
            aria-expanded={open}
            aria-controls="sidebar"
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        <nav id="sidebar" className={`vertical-navbar ${open ? "is-open" : ""}`}>
          <div className="navbar-inner">
            <a href="#intro" className="logo-text navbar-logo" onClick={() => this.setOpen(false)}>
              kam
            </a>

            <ul className="nav-links">
              {SECTIONS.map(({ id, key }, i) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav-link ${activeLink === id ? "active-link" : ""}`}
                    aria-current={activeLink === id ? "true" : undefined}
                    onClick={() => this.setOpen(false)}
                  >
                    <span className="nav-index">{String(i + 1).padStart(2, "0")}</span>
                    <span className="nav-label">{t(key)}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="navbar-bottom">
              <div className="navbar-socials">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    title={s.label}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <div className="navbar-footer">© {new Date().getFullYear()} Kamdine</div>
            </div>
          </div>
        </nav>
        {open && <div className="nav-backdrop" onClick={() => this.setOpen(false)} />}
      </>
    );
  }
}

export default NavBar;
