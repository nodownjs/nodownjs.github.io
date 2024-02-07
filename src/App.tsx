import { parser, renderToHTML } from "nodown";
import { useEffect, useState } from "react";
import "../node_modules/nodown/styles/index.css";
import "../node_modules/nodown/styles/theme-dark.css";

function App() {
  const [data, setData] = useState("");
  const [page, setPage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/nodownjs/nodown.js/main/README.md"
      );
      const data = await response.text();
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const text =
      `======
===|
[Home](./)
===|
[Specs](./specs)
===|
[Docs (WIP)](./)
------
` + data;
    const tree = parser(text);
    const html = renderToHTML(tree);
    setPage(html);
  }, [data]);

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: page }} />
    </main>
  );
}

export default App;
