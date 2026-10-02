import styles from "./Portfolio.module.css";
import ScrambleText from "./ScrambleText";
import face from "./images/face.jpg";
//import { useState, useEffect } from "react";
import useWindowSize from "./useWindowFile.jsx";

function Portfolio() {
  const { width } = useWindowSize();

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.grid}>
        <img
          src={face}
          className={`${styles.face} ${styles.gridItem} ${width < 601 ? "mobile" : ""}`}
        />
        <ScrambleText
          layer="layer1"
          pos="javascript"
          text="Javascript"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer1"
          pos="html"
          text="<HTML5>"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer1"
          pos="css"
          text="CSS"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer1"
          pos="react"
          text="React"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer1"
          pos="typescript"
          text="Typescript"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer2"
          pos="express"
          text="Express"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer2"
          pos="nodejs"
          text="NodeJS"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer3"
          pos="qa"
          text="Quality Analysis"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer2"
          pos="sql"
          text="SQL"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer1"
          pos="python"
          text="Python"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer3"
          pos="unix"
          text="UNIX"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer1"
          pos="nextjs"
          text="NextJS"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer3"
          pos="tailwind"
          text="TailwindCSS"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer2"
          pos="ai"
          text="AI Engineering"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem} `}
        />
        <ScrambleText
          layer="layer2"
          pos="vite"
          text="Vite"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem} `}
        />
        <ScrambleText
          layer="layer2"
          pos="webpack"
          text="Webpack"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem} `}
        />
        <ScrambleText
          layer="layer3"
          pos="fullstack"
          text="Full-stack development"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem} `}
        />
        <ScrambleText
          layer="layer2"
          pos="redux"
          text="Redux"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem} `}
        />
        <ScrambleText
          layer="layer2"
          pos="postgresql"
          text="PostgreSQL"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem} `}
        />
        <ScrambleText
          layer="layer1"
          pos="docker"
          text="Docker"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem} `}
        />
        <ScrambleText
          layer="layer2"
          pos="mongodb"
          text="MongoDB"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem} `}
        />
        <ScrambleText
          layer="layer1"
          pos="redis"
          text="Redis"
          mobile={width < 601 ? true : false}
          className={`${styles.gridItem} `}
        />
      </div>
    </div>
  );
}

export default Portfolio;
