import type { JSXInternal } from "preact/src/jsx";

export type Choice = {
    text: string;
    action: string;
    payload?: string;
    warning?: string;
    details?: JSXInternal.Element;
  };
  