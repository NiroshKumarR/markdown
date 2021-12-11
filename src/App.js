import { useState } from "react";
import { marked } from "marked";
import "./App.css";

export default function App() {
  const [markdown, setMarkdown] = useState("#sup Bro");
  return (
    <div>
      <h1 className="title">Markdown Editor</h1>
      <div className="container">
        <div className="textarea">
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        ></div>
      </div>
    </div>
  );
}
