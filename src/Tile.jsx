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

function Tile({ image, title, text }) {
  return (
    <div className={styles.tileContainer}>
      <img src={imageSelector(image)} alt="" className={styles.tileImage} />
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default Tile;
