import React from "react";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Sun, Moon } from "lucide-react";
import { LanguageContext } from "../LanguageContext";
import "../styles/NavBar.css";

const SECTIONS = [
  { id: "about", key: "nav.about" },
  { id: "degrees", key: "nav.degrees" },
  { id: "experience", key: "nav.experience" },
  { id: "projects", key: "nav.projects" },
  { id: "contact", key: "nav.contact" },
];

const SOCIALS = [
  { href: "mailto:kamdine.hzd@outlook.com", label: "E-mail", icon: <EmailRoundedIcon style={{ fontSize: 20 }} /> },
  { href: "https://github.com/Kamdinee", label: "GitHub", icon: <GitHubIcon style={{ fontSize: 19 }} /> },
  { href: "https://www.linkedin.com/in/kamdine/", label: "LinkedIn", icon: <LinkedInIcon style={{ fontSize: 21 }} /> },
];

class NavBar extends React.Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.state = {
      activeLink: "",
      open: false,
      scrolled: false,
      isDark: document.documentElement.getAttribute("data-theme") !== "light",
    };
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

  toggleTheme = () => {
    const isDark = !this.state.isDark;
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* ignore */
    }
    this.setState({ isDark });
  };

  handleScroll = () => {
    const y = window.scrollY;

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

    const scrolled = y > 10;
    if (current !== this.state.activeLink || scrolled !== this.state.scrolled) {
      this.setState({ activeLink: current, scrolled });
    }
  };

  render() {
    const { activeLink, open, scrolled, isDark } = this.state;
    const { t, lang, toggleLang } = this.context;

    return (
      <header
        className={`top-nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}
      >
        <div className="top-nav-inner">
          <a href="#intro" className="nav-brand" onClick={() => this.setOpen(false)}>
            Kam
          </a>

          <nav id="nav-menu" className="nav-menu" aria-label="Navigation principale">
            <ul className="nav-links">
              {SECTIONS.map(({ id, key }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav-link ${activeLink === id ? "active-link" : ""}`}
                    aria-current={activeLink === id ? "true" : undefined}
                    onClick={() => this.setOpen(false)}
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-right">
              <div className="nav-socials">
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
              <span className="nav-divider" aria-hidden="true" />
              <div className="nav-toggles">
                <button
                  className="minimal-btn"
                  onClick={toggleLang}
                  aria-label={lang === "en" ? "Passer en français" : "Switch to English"}
                  title={lang === "en" ? "Passer en français" : "Switch to English"}
                >
                  {lang === "en" ? "EN" : "FR"}
                </button>
                <button
                  className="minimal-btn theme-btn"
                  onClick={this.toggleTheme}
                  aria-label={isDark ? "Light theme" : "Dark theme"}
                  title={isDark ? "Light theme" : "Dark theme"}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>
          </nav>

          <button
            className={`burger ${open ? "is-open" : ""}`}
            onClick={() => this.setOpen(!open)}
            aria-label={open ? t("nav.close") : t("nav.menu")}
            aria-expanded={open}
            aria-controls="nav-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    );
  }
}

export default NavBar;
