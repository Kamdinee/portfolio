import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../LanguageContext';
import { Sun, Moon } from 'lucide-react';
import '../styles/TopBar.css';

const TopBar = () => {
  const { lang, toggleLang } = useContext(LanguageContext);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute("data-theme") !== "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div className="topbar-container">
      <button
        className="minimal-btn"
        onClick={toggleLang}
        aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}
        title={lang === 'en' ? 'Passer en français' : 'Switch to English'}
      >
        {lang === 'en' ? 'EN' : 'FR'}
      </button>
      <span className="separator">/</span>
      <button
        className="minimal-btn theme-btn"
        onClick={toggleTheme}
        aria-label={isDark ? 'Light theme' : 'Dark theme'}
        title={isDark ? 'Light theme' : 'Dark theme'}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
};

export default TopBar;
