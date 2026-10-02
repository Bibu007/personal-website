import styles from "./Contact.module.css";
import photo from "./images/Sundaran.jpeg";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactGrid}>
        <div className={styles.textContainer}>
          <div className={styles.title}> Contact me</div>
          <div className={styles.message}>
            Get in touch if you'd like to work together or just want to say hi!
          </div>
          <div className={styles.location}>Kerala, India</div>
          <div className={styles.email}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.emailIcon}
            >
              <title>email-outline</title>
              <path
                fill="#ffffff"
                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
              />
            </svg>
            bibinbabu218@gmail.com
          </div>
          <div className={styles.buttonContainer}>
            <a href="https://github.com/Bibu007" target="_blank">
              <i class={`devicon-github-original ${styles.icon}`}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/bibin-punnoose-988440161/"
              target="_blank"
            >
              <i class={`devicon-linkedin-plain ${styles.icon}`}></i>
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={photo} alt="" className={styles.photo} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
