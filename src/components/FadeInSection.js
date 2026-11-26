import React from "react";

/* Fait apparaître son contenu en fondu quand il entre dans l'écran (une seule fois). */
export default function FadeInSection({ as: Tag = "div", className = "", delay, children }) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const node = domRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: delay } : undefined}
      ref={domRef}
    >
      {children}
    </Tag>
  );
}
