import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

function Syntax(props) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={xonokai}
      className="syntax_highlighter"
    >
      {props.children}
    </SyntaxHighlighter>
  );
}

export default Syntax;
