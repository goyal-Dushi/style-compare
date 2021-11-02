import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./codebox.module.css";

function CodeBox({ snippet }) {
  return (
    <div>
      <SyntaxHighlighter className={styles.codebox} style={githubGist}>
        {snippet}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBox;
