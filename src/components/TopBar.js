import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../LanguageContext';
import { Sun, Moon } from 'lucide-react';
import '../styles/TopBar.css';

const TopBar = () => {
  const { lang, toggleLang } = useContext(LanguageContext);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

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
      <button className="minimal-btn" onClick={toggleLang}>
        {lang === 'en' ? 'EN' : 'FR'}
      </button>
      <span className="separator">/</span>
      <button className="minimal-btn theme-btn" onClick={toggleTheme}>
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default TopBar;
