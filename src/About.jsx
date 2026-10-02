import styles from "./About.module.css";
import arrow from "./images/arrow.png";
import ScrollText from "./ScrollText.jsx";
import useWindowSize from "./useWindowFile.jsx";

function About() {
  const { width } = useWindowSize();
  return (
    <ScrollText>
      <div className={styles.aboutContainer}>
        <div
          className={`${styles.about} ${styles.aboutItem} ${width < 601 ? "mobile" : ""}`}
        >
          <div
            className={`${styles.title} ${styles.aboutItem} ${width < 601 ? "mobile" : ""}`}
          >
            About me
          </div>
          <div
            className={`${styles.arrow} ${styles.aboutItem} ${width < 601 ? "mobile" : ""}`}
          >
            <img src={arrow} alt="arrow" />
          </div>
          <div
            className={`${styles.text} ${styles.aboutItem} ${width < 601 ? "mobile" : ""}`}
          >
            Hi, I'm Bibin. I started my career as a software quality analyst
            just after college. I had done my bachelors in physics then. While
            working, I got the opportunity to pursue a masters program in
            software engineering from BITS Pilani, designed for gradutes with
            background in mathematics. Through this course I learnt more about
            computers and got interested in coding. Since, then I've always
            wanted to build software that'd make people's lives easier. Though I
            knew a bit of theory from my course, I lacked the practical
            knowledge to turn what I knew into something useful. To close this
            gap, I completed The Odin Project, an open source curriculum that
            teaches web development. Infact this website was built as part of
            one of the projects in the course. I can now build websites from
            scratch using the tools displayed above. Some of my recent projects
            are shown below.
          </div>
        </div>
      </div>
    </ScrollText>
  );
}

export default About;
