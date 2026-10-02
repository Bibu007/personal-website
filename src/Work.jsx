import ScrollText from "./ScrollText.jsx";
import Tile from "./Tile.jsx";
import styles from "./Work.module.css";

function Work() {
  return (
    <div className={styles.workContainer}>
      <ScrollText>
        <div className={styles.title}>MY WORK</div>
        <div className={styles.workGrid}>
          <a
            href="https://bibu007.github.io/battleship/"
            target="_blank"
            className={`${styles.battleship} ${styles.gridItem}`}
          >
            <Tile
              image="battleship"
              title="Battleship"
              text="Online version of the battleship game built using vanilla JS"
            />
          </a>

          <a
            href="https://shopping-cart-beta-tawny-82.vercel.app/"
            target="_blank"
            className={`${styles.wowmart} ${styles.gridItem}`}
          >
            <Tile
              image="wowmart"
              title="Wowmart"
              text="Wowmart is an online store built using react"
            />
          </a>

          <a
            href="https://bibu007.github.io/weather-app/"
            target="_blank"
            className={`${styles.weatherapp} ${styles.gridItem}`}
          >
            <Tile
              image="weatherapp"
              title="Weather App"
              text="Weather app delivers real-time weather data for any place on earth built using vanilla JS"
            />
          </a>

          <a
            href="https://bibu007.github.io/to-do-list/"
            target="_blank"
            className={`${styles.todo} ${styles.gridItem}`}
          >
            <Tile
              image="todo"
              title="To do list"
              text="To do list app to organize your worday built using vanilla JS"
            />
          </a>

          <a
            href="https://memory-card-xi-ten.vercel.app/"
            target="_blank"
            className={`${styles.memorycard} ${styles.gridItem}`}
          >
            <Tile
              image="memorycard"
              title="Memory card"
              text="A fun game to test your memory built using react"
            />
          </a>

          <a
            href="https://bibu007.github.io/tic-tac-toe/"
            target="_blank"
            className={`${styles.tictactoe} ${styles.gridItem}`}
          >
            <Tile
              image="tictactoe"
              title="Tic Tac Toe"
              text="An online tic tac toe built using vanilla JS"
            />
          </a>
        </div>
      </ScrollText>
    </div>
  );
}

export default Work;
