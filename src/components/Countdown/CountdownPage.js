import React from "react";
import { Countdown } from "./Countdown";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
// import "./ReactState.css";

function CountdownPage() {
  return (
    <React.Fragment>
      <h1>Countdown</h1>
      <p>Description</p>
      <Countdown
        timeTillDate="2020-06-20 18:20"
        timeFormat="YYYY-MM-DD hh:mm"
      />
      <a href="https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/">
        Link
      </a>
      {/* <div className="syntax_highlight_react_state">
        <SyntaxHighlighter language="javascript" style={xonokai}>
          {code_home}
        </SyntaxHighlighter>
      </div> */}
    </React.Fragment>
  );
}

export default CountdownPage;
