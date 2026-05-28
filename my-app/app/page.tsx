"use client";
import { createContext, useContext, useState } from "react";

type Theme = "light" | "dard" | "system";
const ThemeContext = createContext<Theme>("system");

const useGetTheme = () => useContext(ThemeContext);

export default function MyApp() {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext value={theme}>
      <MyComponent />
    </ThemeContext>
  );
}

function MyComponent() {
  const theme = useGetTheme();

  return (
    <>
      <p>Current Theme: {theme}</p>
    </>
  );
}
