import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function AppWrapper({ children }) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // const color = theme === "light" ? "#333" : "#fff";
  // const backgroundCOlor = theme === "light" ? "#FFF" : "hsl(207, 26%, 17%)";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useAppContext() {
  return useContext(ThemeContext);
}
