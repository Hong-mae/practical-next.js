import React, { createContext } from "react";

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<Props>({
  theme: "light",
  toggleTheme: () => {},
});

export default ThemeContext;
