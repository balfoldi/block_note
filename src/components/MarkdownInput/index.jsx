import React, { useEffect, useState } from "react";

export const MarkdownInput = (props) => {
  const [input, setInput] = useState({});

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  useEffect(() => {
    props.getInput(input);
  }, [input]);

  return (
    <>
      <form onSubmit={() => console.log("ploufe")}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" onChange={handleInputChange} />
        </div>
        <div>
          <label>Content:</label>
          <input type="text" name="content" onChange={handleInputChange} />
        </div>
        <input type="submit" />
      </form>
    </>
  );
};
