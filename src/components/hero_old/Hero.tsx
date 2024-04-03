import { useState } from "react";
import { Nodown } from "react-nodown";
import "./hero.scss";

function Hero() {
  const [content, setContent] = useState(`
# Markown, but simply enhanced ~

Nodown is a **lightweight markup language** that shares a strong similarity with Markdown.
Developed in \`JavaScript();\`, it was born of the desire to enrich Markdown by integrating additional functionalities, while overcoming certain limitations inherent in standard Markdown.
  
## Here some key words :
  
======

:===:
![plant icon;64](https://cdn-icons-png.flaticon.com/128/8989/8989469.png)
Complete & modern
  
:===:
![plant icon;64](https://cdn-icons-png.flaticon.com/128/9485/9485012.png)
Continuously growth
  
:===:
![plant icon;64](https://cdn-icons-png.flaticon.com/128/14814/14814738.png)
Community-oriented
`);
  return (
    <div id="hero">
      <div id="nodown-output">
        <div className="outlines">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Nodown content={content} />
      </div>
      <div id="nodown-input">
        <div className="outlines">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <textarea
          id="nodown-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Hero;
