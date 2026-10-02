import styles from "./Tile.module.css";
import battleship from "./images/battleship.png";
import weatherapp from "./images/weatherapp.png";
import memorycard from "./images/memorycard.png";
import wowmart from "./images/wowmart.png";
import tictactoe from "./images/tictactoe.png";
import todo from "./images/todo.png";

function imageSelector(str) {
  switch (str) {
    case "battleship":
      return battleship;
    case "weatherapp":
      return weatherapp;
    case "memorycard":
      return memorycard;
    case "wowmart":
      return wowmart;
    case "tictactoe":
      return tictactoe;
    case "todo":
      return todo;
  }
}

function gitHubUrlSelector(str) {
  switch (str) {
    case "battleship":
      return "https://github.com/Bibu007/battleship";
    case "weatherapp":
      return "https://github.com/Bibu007/weather-app";
    case "memorycard":
      return "https://github.com/Bibu007/memory-card";
    case "wowmart":
      return "https://github.com/Bibu007/shopping-cart";
    case "tictactoe":
      return tictactoe;
    case "todo":
      return "https://github.com/Bibu007/to-do-list";
  }
}

function Tile({ image, title, text }) {
  return (
    <div className={styles.tileContainer}>
      <img src={imageSelector(image)} alt="" className={styles.tileImage} />
      <div className={styles.titleContainer}>
        <div className={styles.title}>{title} </div>
        <a href={gitHubUrlSelector(image)} target="_blank">
          <img
            className={styles.button}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          />
        </a>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default Tile;
