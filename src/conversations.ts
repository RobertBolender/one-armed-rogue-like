import type { Choice } from "./choice";

type Conversation = {
    enemy: string;
    emoji: string;
    text: string;
    choices: Choice[];
}

const conversations: Record<string, Conversation> = {
    "intro0": {
        enemy: "🚪🚪",
        emoji: "🟡",
        text: "You find yourself in a dark corridor with two doors. Which do you choose?",
        choices: [
            {
              text: "The Death Door",
              action: "MOVE",
              payload: "intro1",
            },
            {
              text: "The Pumpkin Door",
              action: "MOVE",
              payload: "intro2",
            },
          ]
    },
    "intro1": {
        "enemy": "☠️",
        "emoji": "",
        "text": "You died a horrible painful death. What did you expect would happen?",
        "choices": [
            {
                "text": "Return to Main Menu",
                "action": "RETURN_TO_MAIN_MENU",
            },
        ],
    },
    "intro2": {
        "enemy": "🎃",
        "emoji": "🟡",
        "text": "There is a door on the far side of the room, but it is blocked by a very large pumpkin. You can't see any way to get past it.",
        "choices": [
            {
                "text": "Kick the pumpkin",
                "action": "MOVE",
                "payload": "intro2a",
            },
            {
                "text": "Reason with the pumpkin",
                "action": "MOVE",
                "payload": "intro2b",
            },
            {
                "text": "Yell at the pumpkin",
                "action": "MOVE",
                "payload": "intro2c",
            },
            {
                "text": "Use an item",
                "action": "USE_ITEM",
                "payload": "intro2d",
            },
            {
                "text": "Return to the previous room",
                "action": "BACK",
            }
        ],
    },
    "intro2a": {
        "enemy": "🎃",
        "emoji": "🟡",
        "text": "Ouch. You hurt your foot, but the pumpkin is unaffected. It is still blocking the door.",
        "choices": [
            {
                "text": "Continue",
                "action": "BACK",
            }
        ],
    },
    "intro2b": {
        "enemy": "🎃",
        "emoji": "🟡",
        "text": "The pumpkin is being entirely unreasonable. It is still blocking the door.",
        "choices": [
            {
                "text": "Continue",
                "action": "BACK",
            }
        ],
    },
    "intro2c": {
        "enemy": "🎃",
        "emoji": "🟡",
        "text": "The pumpkin is not impressed by your yelling. It is still blocking the door.",
        "choices": [
            {
                "text": "Continue",
                "action": "BACK",
            }
        ],
    },
};

export default conversations;