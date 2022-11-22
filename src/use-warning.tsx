import { useCallback, useRef, useState } from "preact/hooks";

export function useWarning() {
  const ref = useRef(0);
  const [currentWarning, setCurrentWarning] = useState("");

  const showWarning = useCallback((warning: string) => {
    if (ref.current) {
      clearTimeout(ref.current);
    }
    setCurrentWarning(warning);
    ref.current = setTimeout(() => {
      setCurrentWarning("");
    }, 3000);
  }, []);

  return [currentWarning, showWarning] as const;
}
