import { ThemeType } from "../../App";
import "./header.scss";

const sun = (
  <svg
    id="sun"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    fill="#F0F"
    stroke="#F00"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
      strokeWidth="0"
      fill="currentColor"
    ></path>
    <path
      d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"
      strokeWidth="0"
      fill="currentColor"
    ></path>
    <path
      d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
      strokeWidth="0"
      fill="currentColor"
    ></path>
    <path
      d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
      strokeWidth="0"
      fill="currentColor"
    ></path>
    <path
      d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
      strokeWidth="0"
      fill="currentColor"
    ></path>
    <path
      d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"
      strokeWidth="0"
      fill="currentColor"
    ></path>
    <path
      d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
      strokeWidth="0"
      fill="currentColor"
    ></path>
    <path
      d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
      strokeWidth="0"
      fill="currentColor"
    ></path>
    <path
      d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
      strokeWidth="0"
      fill="currentColor"
    ></path>
  </svg>
);

const moon = (
  <svg
    id="moon"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    fill="#fff"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
      strokeWidth="0"
      fill="currentColor"
    ></path>
  </svg>
);

function Header({
  theme,
  setTheme,
}: {
  theme: ThemeType;
  setTheme: (theme: string) => void;
}) {
  const switchTheme = () => {
    console.log("switching theme");
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("🚀 ~ theme:", theme);
    console.log("🚀 ~ newTheme:", newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <header id="header">
      <div id="logo">
        <img
          src="https://raw.githubusercontent.com/nodownjs/brand-assets/main/logo/logo.svg"
          alt="logo"
        />
        Nodown
      </div>
      <nav>
        <ul>
          <li>
            <a href="https://nodownjs.github.io/">Home</a>
          </li>
          <li>
            <a href="https://nodownjs.github.io/spec/getting-started/introduction">
              Specification
            </a>
          </li>
          <li>
            <a href="https://github.com/nodownjs/nodown.js">
              API documentation
            </a>
          </li>
        </ul>
      </nav>
      <div id="actions">
        <button onClick={switchTheme}>{theme === "light" ? sun : moon}</button>
      </div>
    </header>
  );
}

export default Header;
