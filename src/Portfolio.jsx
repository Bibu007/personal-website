import styles from "./Portfolio.module.css";
import ScrambleText from "./ScrambleText";
import face from "./images/face.jpg";

function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.grid}>
        <img src={face} className={`${styles.face} ${styles.gridItem}`} />
        <ScrambleText
          layer="layer1"
          pos="javascript"
          text="Javascript"
          className={styles.gridItem}
        />
        <ScrambleText
          layer="layer1"
          pos="html"
          text="<HTML5>"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer1"
          pos="css"
          text="CSS"
          className={`${styles.gridItem}`}
        />
        <ScrambleText layer="layer1" pos="react" text="React" />
        <ScrambleText
          layer="layer1"
          pos="typescript"
          text="Typescript"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer2"
          pos="express"
          text="Express"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer2"
          pos="nodejs"
          text="NodeJS"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer3"
          pos="qa"
          text="Quality Analysis"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer2"
          pos="sql"
          text="SQL"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer1"
          pos="python"
          text="Python"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer3"
          pos="unix"
          text="UNIX"
          className={`${styles.gridItem}`}
        />
        <ScrambleText layer="layer1" pos="nextjs" text="NextJS" />
        <ScrambleText
          layer="layer3"
          pos="tailwind"
          text="TailwindCSS"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer2"
          pos="ai"
          text="AI Engineering"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer2"
          pos="vite"
          text="Vite"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer2"
          pos="webpack"
          text="Webpack"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer3"
          pos="fullstack"
          text="Full-stack development"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer2"
          pos="redux"
          text="Redux"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer2"
          pos="postgresql"
          text="PostgreSQL"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer1"
          pos="docker"
          text="Docker"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer2"
          pos="mongodb"
          text="MongoDB"
          className={`${styles.gridItem}`}
        />
        <ScrambleText
          layer="layer1"
          pos="redis"
          text="Redis"
          className={`${styles.gridItem}`}
        />
      </div>
    </div>
  );
}

export default Portfolio;
