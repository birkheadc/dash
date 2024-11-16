import * as React from "react";

export type Theme = "dark" | "light" | "system";

type ThemeContextState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeContextState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeContext =
  React.createContext<ThemeContextState>(initialState);
