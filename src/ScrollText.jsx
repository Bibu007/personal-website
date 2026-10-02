import { useEffect, useRef, useState } from "react";
import styles from "./ScrollText.module.css";

function ScrollText({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={textRef}
      className={`${styles.text} ${isVisible ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
}

export default ScrollText;
