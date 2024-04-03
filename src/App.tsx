import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

export type ThemeType = "dark" | "light";

function App() {
  const [localTheme, setLocalTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme) {
      setLocalTheme(localStorageTheme as ThemeType);
      document.body.setAttribute("data-theme", localStorageTheme);
    }
  }, []);

  return (
    <>
      <Header
        theme={localTheme}
        setTheme={(theme: string) => setLocalTheme(theme as ThemeType)}
      />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
