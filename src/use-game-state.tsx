import { useReducer } from "preact/hooks";

export function useGameState() {
  const [gameState, dispatch] = useReducer(
    gameStatePersistenceMiddleware,
    null,
    createInitialGameState
  );

  return [gameState, dispatch];
}

function gameStatePersistenceMiddleware(state: any, action: any) {
  const gameState = gameStateReducer(state, action);
  const { choices, ...persistedState } = gameState;
  console.log("Persisting state", persistedState);
  localStorage.setItem("gameState", JSON.stringify(persistedState));
  return gameState;
}

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
          warning: "Sorry, the game isn't ready yet.",
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
          warning: "You'll figure it out!",
          details: (
            <>
              <div>Use the two buttons!</div>
            </>
          ),
        },
        {
          text: "Options",
          action: "VIEW_OPTIONS",
          warning: "Sorry, there are no options.",
          details: (
            <>
              <div>There are no options!</div>
            </>
          ),
        },
        {
          text: "Achievements",
          action: "VIEW_ACHIEVEMENTS",
          warning: "Achievement unlocked: Disappointment",
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
  try {
    const savedState = localStorage.getItem("gameState");
    if (savedState) {
      const restoredState = JSON.parse(savedState);
      restoredState.choices = calculateChoices(restoredState);
      console.log("Restored state from localstorage", restoredState);
      return restoredState;
    }
  } catch (e) {
    console.error("Error loading saved game state", e);
  }

  return {
    activeIndex: 0,
    screen: "menu",
    stack: [],
    choices: calculateChoices({ screen: "menu" }),
  };
}
