import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";

type Theme = "dark" | "light" | "system";

export function useTheme(): {
  theme: Theme;
  setTheme: (theme: Theme) => void;
} {
  const context = React.useContext(ThemeContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
