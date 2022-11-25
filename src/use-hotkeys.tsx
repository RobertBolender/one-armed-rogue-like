import { useEffect } from "preact/hooks";

export function useHotkeys(
  keyMap: Record<string, (event: any) => void>,
  dependencies: any[] = []
) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const handler = keyMap[event.key];
      if (handler) {
        handler(event);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, dependencies);
}
