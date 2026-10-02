import styles from "./ScrollArrow.module.css";

function ScrollArrow() {
  return (
    <a
      href="#about"
      className={styles.scrollArrow}
      aria-label="Scroll to about section"
    >
      <span></span>
    </a>
  );
}

export default ScrollArrow;
