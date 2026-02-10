import { useEffect } from "react";

export const useKey = (key, action) => {
  useEffect(() => {
    const escapeKeydownListener = (e) => {
      if (e.key.toLowerCase() == key.toLowerCase()) {
        action();
      }
    };
    document.addEventListener("keydown", escapeKeydownListener);

    return () => {
      document.removeEventListener("keydown", escapeKeydownListener);
    };
  }, [action, key]);
};
