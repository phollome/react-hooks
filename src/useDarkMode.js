import { useEffect, useState } from "react";

function useDarkMode() {
  const selector = "body";
  const className = "dark";
  const localStorageItemKey = "darkModeEnabled";

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeEnabled =
      window &&
      window.localStorage &&
      window.localStorage.getItem(localStorageItemKey);
    if (darkModeEnabled) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(
        (window &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches) ||
          false
      );
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector(selector).classList.add(className);
      window &&
        window.localStorage &&
        window.localStorage.setItem(localStorageItemKey, true);
    } else {
      document.querySelector(selector).classList.remove(className);
      window &&
        window.localStorage &&
        window.localStorage.removeItem(localStorageItemKey);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
}

export default useDarkMode;
