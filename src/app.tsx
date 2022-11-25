import { useCallback } from "preact/hooks";
import { useHotkeys } from "react-hotkeys-hook";
import gameLogo from "/logo.png";
import "./app.css";
import type { JSXInternal } from "preact/src/jsx";
import { useWarning } from "./use-warning";
import { useGameState } from "./use-game-state";

function Screen({ gameState }: { gameState: any }) {
  switch (gameState.screen) {
    case "menu":
      return (
        <div class="screen">
          <img src={gameLogo} class="logo" alt="One-Armed Rogue-Like Logo" />
          <h1>One-Armed Rogue-Like</h1>
        </div>
      );
    case "credits":
      return (
        <div class="screen align-left">
          <h1>Credits</h1>
          <p>
            This game was made by Robert Bolender, inspired by the birth of his
            son Daniel.
          </p>
          <p>
            Robert found that he was limited in the games he could play while
            holding his sleeping son, so he made this game.
          </p>
        </div>
      );
    default:
      return <div class="screen">Unknown screen: {gameState.screen}</div>;
  }
}

type Choice = {
  text: string;
  action: string;
  warning?: string;
  details?: JSXInternal.Element;
};

function Choices({
  choices,
  activeIndex,
}: {
  choices: Choice[];
  activeIndex: number;
}) {
  return (
    <ul class="choices">
      {choices.map((choice, index) => (
        <li class={activeIndex === index ? "active" : ""}>{choice.text}</li>
      ))}
    </ul>
  );
}

export function App() {
  const [gameState, dispatch] = useGameState();

  const { activeIndex, choices } = gameState;

  const Down = useCallback((event: any) => {
    event.preventDefault();
    dispatch({ type: "DOWN" });
  }, []);

  const [currentWarning, showWarning] = useWarning();

  const Right = useCallback(
    (event: any) => {
      event.preventDefault();
      const choice = choices[activeIndex];
      if (["BACK", "VIEW_CREDITS"].includes(choice.action)) {
        dispatch({ type: choice.action });
        return;
      }
      showWarning(choice.warning);
    },
    [choices, activeIndex]
  );

  useHotkeys("down, s", Down, [Down]);
  useHotkeys("right, d", Right, [Right]);

  return (
    <>
      {currentWarning && <div class="warning">{currentWarning}</div>}
      <Screen gameState={gameState} />
      <div class="card">
        <Choices choices={choices} activeIndex={activeIndex} />
      </div>
      {choices[activeIndex].details && (
        <div class="details">{choices[activeIndex].details}</div>
      )}
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
