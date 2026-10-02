import ScrollText from "./ScrollText.jsx";
import Tile from "./Tile.jsx";
import styles from "./Work.module.css";

function Work() {
  return (
    <div className={styles.workContainer}>
      <ScrollText>
        <h1 className={styles.title}>MY WORK</h1>
        <div className={styles.workGrid}>
          <div className={`${styles.battleship} ${styles.gridItem}`}>
            <Tile
              image="battleship"
              title="Battleship"
              text="Online version of the battleship game built using vanilla JS"
            />
          </div>

          <div className={`${styles.wowmart} ${styles.gridItem}`}>
            <Tile
              image="wowmart"
              title="Wowmart"
              text="Wowmart is an online store built using react"
            />
          </div>

          <div className={`${styles.weatherapp} ${styles.gridItem}`}>
            <Tile
              image="weatherapp"
              title="Weather App"
              text="Weather app delivers real-time weather data for any place on earth built using vanilla JS"
            />
          </div>

          <div className={`${styles.todo} ${styles.gridItem}`}>
            <Tile
              image="todo"
              title="To do list"
              text="To do list app to organize your worday built using vanilla JS"
            />
          </div>

          <div className={`${styles.memorycard} ${styles.gridItem}`}>
            <Tile
              image="memorycard"
              title="Memory card"
              text="A fun game to test your memory built using react"
            />
          </div>

          <div className={`${styles.tictactoe} ${styles.gridItem}`}>
            <Tile
              image="tictactoe"
              title="Tic tac toe"
              text="An online tic tac toe built using vanilla JS"
            />
          </div>
        </div>
      </ScrollText>
    </div>
  );
}

export default Work;
