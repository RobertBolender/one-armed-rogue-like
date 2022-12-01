import { useCallback } from "preact/hooks";
import gameLogo from "/logo.png";
import "./app.css";
import { useWarning } from "./use-warning";
import { useGameState } from "./use-game-state";
import { useHotkeys } from "./use-hotkeys";
import type { Choice } from "./choice";
import conversations from "./conversations";

function Screen({ gameState }: { gameState: any }) {
  switch (gameState.screen) {
    case "menu":
      return (
        <div class="screen">
          <img src={gameLogo} class="logo" alt="One-Armed Rogue-Like Logo" />
          <h1>One-Armed Rogue-Like</h1>
        </div>
      );
    case "intro":
      if (!conversations[gameState.room]) {
        return (
          <div class="screen error">
            💥 ERROR:
            <br />
            no conversation found for {gameState.room}
          </div>
        );
      }
      const conversation = conversations[gameState.room];
      return (
        <div class="screen intro">
          <div class="enemy">{conversation.enemy}</div>
          <div class="emoji">{conversation.emoji}</div>
          <p class="text">{conversation.text}</p>
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
            holding his sleeping son, so he tried to make this game.
            But he also found that his time was as limited as his hands,
            so he never finished the game.
          </p>
        </div>
      );
    default:
      return <div class="screen">Unknown screen: {gameState.screen}</div>;
  }
}

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
      if (choice.warning) {
        showWarning(choice.warning);
        return;
      }
      dispatch({ type: choice.action, payload: choice.payload });
    },
    [choices, activeIndex]
  );

  useHotkeys(
    {
      ArrowDown: Down,
      s: Down,
      ArrowRight: Right,
      d: Right,
    },
    [choices, activeIndex]
  );

  return (
    <>
      {currentWarning && <div class="warning">{currentWarning}</div>}
      <Screen gameState={gameState} />
      <div class="card">
        <Choices choices={choices} activeIndex={activeIndex} />
      </div>
      {choices[activeIndex]?.details && (
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
