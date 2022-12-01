import { useReducer } from "preact/hooks";
import type { Choice } from "./choice";
import conversations from "./conversations";

export function useGameState() {
  const [gameState, dispatch] = useReducer(
    gameStatePersistenceMiddleware,
    null,
    loadOrCreateGameState
  );

  return [gameState, dispatch];
}

function gameStatePersistenceMiddleware(state: any, action: any) {
  const gameState = gameStateReducer(state, action);
  // The choices are full of React components which have circular references that can't be serialized to JSON.
  const { choices, ...persistedState } = gameState;
  localStorage.setItem("gameState", JSON.stringify(persistedState));
  return gameState;
}

function gameStateReducer(state: any, action: any) {
  switch (action.type) {
    case "DOWN":
      const newIndex =
        state.activeIndex >= state.choices.length - 1
          ? 0
          : state.activeIndex + 1;
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
        choices: calculateChoices({
          ...state,
          screen: popped.screen,
          room: popped.room,
        }),
        stack: newStack,
        screen: popped.screen,
        room: popped.room,
      };
    case "START_GAME":
      return {
        ...state,
        activeIndex: 0,
        screen: "intro",
        room: "intro0",
        choices: calculateChoices({ screen: "intro", room: "intro0" }),
      };
    case "MOVE":
      console.log("MOVE", action.payload);
      return {
        ...state,
        activeIndex: 0,
        room: action.payload,
        choices: calculateChoices({ ...state, room: action.payload }),
        stack: [
          ...state.stack,
          {
            screen: state.screen,
            room: state.room,
            activeIndex: state.activeIndex,
          },
        ],
      };
    case "USE_ITEM":
      return {
        ...state,
        activeIndex: 0,
        stack: [
          ...state.stack,
          {
            screen: state.screen,
            room: state.room,
            activeIndex: state.activeIndex,
          },
        ],
        choices: calculateChoices({
          ...state,
          screen: "useItem",
        }),
      };
    case "END_GAME":
      return {
        ...state,
        activeIndex: 0,
        screen: "end",
      };
    case "RETURN_TO_MAIN_MENU":
      return createInitialGameState();
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
    case "intro":
      if (!conversations[gameState.room]) {
        return [
          {
            text: "Back",
            action: "BACK",
          },
        ];
      }
      return conversations[gameState.room].choices;
    case "useItem":
      let itemChoices = gameState.items.map((item: any) => {
        return {
          text: item.name,
          action: "MOVE",
          payload: `${gameState.room}${item.id}`,
        };
      });
      return [
        ...itemChoices,
        {
          text: "Never mind",
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
    items: [],
    choices: calculateChoices({ screen: "menu" }),
  };
}

function loadOrCreateGameState() {
  try {
    const savedState = localStorage.getItem("gameState");
    if (savedState) {
      const restoredState = JSON.parse(savedState);
      restoredState.choices = calculateChoices(restoredState);
      return restoredState;
    }
  } catch (e) {
    console.error("Error loading saved game state", e);
  }

  return createInitialGameState();
}
