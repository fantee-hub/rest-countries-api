import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function AppWrapper({ children }) {
  const [loading, setLoading] = useState(false);
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
    // setTheme(theme === "light" ? "dark" : "light");
  };

  const setLocalTheme = (localTheme) => {
    setTheme(localTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, loading, setLoading, setLocalTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export function useAppContext() {
  return useContext(ThemeContext);
}
