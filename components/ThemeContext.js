import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function AppWrapper({ children }) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", JSON.stringify("dark"));
      }
    } else {
      setTheme("light");
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", JSON.stringify("light"));
      }
    }
  };

  const setLocalTheme = (localTheme) => {
    setTheme(localTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setLocalTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useAppContext() {
  return useContext(ThemeContext);
}
