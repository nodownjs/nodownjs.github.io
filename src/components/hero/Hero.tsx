import "nodown/styles/index.css";

import "nodown/styles/theme-dark.css";
import "nodown/styles/theme-light.css";
import { useState } from "react";
import { Nodown } from "react-nodown";
import "./hero.scss";

function Hero() {
  const [content, setContent] = useState(`# Markdown, but simply enhanced ~

Nodown is a **lightweight markup language** that shares a strong similarity with Markdown.
Developed in \`JavaScript();\`, it was born of the desire to enrich Markdown by integrating additional functionalities, while overcoming certain limitations inherent in standard Markdown.

## Here some key words :

======

:===:
![plant icon;64](https://raw.githubusercontent.com/nodownjs/nodownjs.github.io/main/public/icons/sparkles.svg)
Complete & modern

:===:
![plant icon;64](https://raw.githubusercontent.com/nodownjs/nodownjs.github.io/main/public/icons/growth.svg)
Continuous growth

:===:
![plant icon;64](https://raw.githubusercontent.com/nodownjs/nodownjs.github.io/main/public/icons/community.svg)
Community-oriented`);
  return (
    <div id="hero">
      <div id="nodown-output">
        <Nodown content={content} />
        <div>
          <a
            className="start-button"
            href="https://github.com/nodownjs/nodown.js"
          >
            Get started
          </a>
          <a
            className="start-button"
            href="https://nodownjs.github.io/spec/getting-started/introduction"
          >
            Specification
          </a>
        </div>
      </div>
      <div id="nodown-input">
        <header>
          <span></span>
          <span></span>
          <span></span>
        </header>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          spellCheck="false"
        />
      </div>
    </div>
  );
}

export default Hero;
