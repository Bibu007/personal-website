import { useEffect, useState } from "react";
import "./ScrambleText.css";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

function ScrambleText({ text, layer, pos, mobile }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return char;
            }

            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join(""),
      );

      iteration += 1 / 3;

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`${layer} ${pos} ${mobile ? "mobile" : ""} gridItem`}>
      {displayText}
    </span>
  );
}

export default ScrambleText;
