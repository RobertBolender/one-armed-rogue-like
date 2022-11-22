import { useCallback, useReducer, useState } from "preact/hooks";
import gameLogo from "/logo.png";
import "./app.css";
import type { JSXInternal } from "preact/src/jsx";

function gameStateReducer(state: any, action: any) {
  console.log("Receiving dispatch", action.type);
  switch (action.type) {
    case "DOWN":
      const newIndex =
        state.activeIndex >= state.choices.length - 1
          ? 0
          : state.activeIndex + 1;
      console.log({ state });
      return {
        ...state,
        activeIndex: newIndex,
      };
    case "BACK":
      if (state.stack.length === 0) {
        return state;
      }
      const newStack = state.stack.slice(0, -1);
      const popped = state.stack[state.stack.length - 1];
      return {
        ...state,
        activeIndex: popped.activeIndex,
        choices: calculateChoices({ ...state, screen: popped.screen }),
        stack: newStack,
        screen: popped.screen,
      };
    case "START_GAME":
      return {
        ...state,
        activeIndex: 0,
        screen: "game",
      };
    case "END_GAME":
      return {
        ...state,
        activeIndex: 0,
        screen: "end",
      };
    case "VIEW_CREDITS":
      return {
        ...state,
        activeIndex: 0,
        choices: calculateChoices({ ...state, screen: "credits" }),
        stack: [
          ...state.stack,
          { screen: state.screen, activeIndex: state.activeIndex },
        ],
        screen: "credits",
      };
    default:
      console.error("Unknown action type", action.type);
      return state;
  }
}

function calculateChoices(gameState: any = {}): Choice[] {
  switch (gameState.screen) {
    case "menu":
      return [
        {
          text: "New Game",
          action: "START_GAME",
          details: (
            <>
              <div>Play one-handed!</div>
              <div>There are only two buttons! 👇</div>
            </>
          ),
        },
        {
          text: "How to Play",
          action: "VIEW_HOW_TO_PLAY",
          details: (
            <>
              <div>Use the two buttons!</div>
            </>
          ),
        },
        {
          text: "Options",
          action: "VIEW_OPTIONS",
          details: (
            <>
              <div>There are no options!</div>
            </>
          ),
        },
        {
          text: "Achievements",
          action: "VIEW_ACHIEVEMENTS",
          details: (
            <>
              <div>There are no achievements!</div>
            </>
          ),
        },
        {
          text: "Credits",
          action: "VIEW_CREDITS",
          details: (
            <>
              <div>For those who enjoy backstory!</div>
            </>
          ),
        },
      ];
    case "credits":
      return [
        {
          text: "Back",
          action: "BACK",
        },
      ];
    default:
      return [];
  }
}

function createInitialGameState() {
  return {
    activeIndex: 0,
    screen: "menu",
    stack: [],
    choices: calculateChoices({ screen: "menu" }),
  };
}

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
  const [showWarning, setShowWarning] = useState(false);

  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    null,
    createInitialGameState
  );

  const { activeIndex, choices } = gameState;

  const Down = useCallback((event: any) => {
    event.preventDefault();
    dispatch({ type: "DOWN" });
  }, []);

  const Right = useCallback(
    (event: any) => {
      event.preventDefault();
      const choice = choices[activeIndex];
      if (["BACK", "VIEW_CREDITS"].includes(choice.action)) {
        dispatch({ type: choice.action });
        return;
      }
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
    },
    [choices, activeIndex]
  );

  return (
    <>
      {showWarning && <div class="warning">Sorry, that doesn't work yet.</div>}
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
