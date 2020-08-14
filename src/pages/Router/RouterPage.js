import React from "react";
import Syntax from "./../../components/Syntax/Syntax";
import {
  CodeImportApp,
  CodeApp,
  CodeImportContent,
  CodeContent,
  CodeImportNav,
  CodeNav,
} from "./routerSnippet";

function RouterPage() {
  return (
    <div className="page">
      <h1>Router</h1>
      <h2>Installation</h2>
      <p className="console_text monospace">yarn add react-router-dom</p>
      <h2>Explanation and usage</h2>
      <p>
        3 “pages” handled by the router: a home page, a react clock page and a
        react countdown page.
      </p>
      <Syntax>{CodeImportApp}</Syntax>
      <p>
        The <span className="code_component">BrowserRouter</span> has to wrap
        all components, which are using router (it means every component, which
        uses switch, route and links or navlinks).
      </p>
      <Syntax>{CodeApp}</Syntax>
      <p>
        A <span className="code_component">Switch</span> listens to the path
        (URL), than looks through its children -
        <span className="code_component">Routes</span> and renders whatever is
        inside a matching route, for example a whole component.
      </p>
      <Syntax>{CodeImportContent}</Syntax>
      <Syntax>{CodeContent}</Syntax>
      <p>
        As you click around on the different
        <span className="code_component">NavLinks</span> in navigation, the
        assigned path is sent to the URL address.
      </p>
      <p>
        Behind the scenes the <span className="code_component">NavLink</span>
        renders an anchor tag with a real href, so people using the keyboard for
        navigation or screen readers will still be able to use this.
      </p>
      <p>
        The difference between <span className="code_component">Link</span> and
        <span className="code_component">NavLink</span> in that
        <span className="code_component">Link</span> has no active class on
        selected element,
        <span className="code_component">NavLink</span> is highlighted because
        an active class has been added to this element.
      </p>
      <Syntax>{CodeImportNav}</Syntax>
      <Syntax>{CodeNav}</Syntax>
    </div>
  );
}

export default RouterPage;
