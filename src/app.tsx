import { useCallback, useState } from "preact/hooks";
import gameLogo from "/logo.png";
import "./app.css";

export function App() {
  const [index, setIndex] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const Down = useCallback((event: any) => {
    event.preventDefault();
    setIndex((index) => {
      if (index > 3) {
        return 0;
      }
      return index + 1;
    });
  }, []);
  const Right = useCallback(
    (event: any) => {
      event.preventDefault();
      console.log(`current index: ${index}`);
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
    },
    [index]
  );
  return (
    <>
      {showWarning && <div class="warning">Sorry, that doesn't work yet.</div>}
      <div class="screen">
        <img src={gameLogo} class="logo" alt="One-Armed Rogue-Like Logo" />
        <h1>
          One-Armed
          <br />
          Rogue-Like
        </h1>
      </div>
      <div class="card">
        <ul class="choices">
          <li class={index == 0 ? "active" : ""}>New Game</li>
          <li class={index == 1 ? "active" : ""}>How to Play</li>
          <li class={index == 2 ? "active" : ""}>Options</li>
          <li class={index == 3 ? "active" : ""}>Achievements</li>
          <li class={index == 4 ? "active" : ""}>Credits</li>
        </ul>
      </div>
      <div class="details">
        <div>Play one-handed!</div>
        <div>There are only two buttons! 👇</div>
      </div>
      <div class="buttons">
        <button onClick={Down}>&nbsp;</button>
        <button onClick={Right}>&nbsp;</button>
      </div>
      <div class="visible-buttons">
        <button>⬇️</button>
        <button>➡️</button>
      </div>
    </>
  );
}
