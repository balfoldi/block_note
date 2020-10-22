import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { MarkdownInput } from "./components/MarkdownInput";

const App = () => {

  const inputValue = (input) => {
    console.log(input);
  };

  return (
    <>
      <MarkdownInput getInput={inputValue} />
    </>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
