import React, { useState } from "react";

export default function TextIn(props) {
  const [text, setText] = useState("");
  const [heading, setHeading] = useState(props.heading1);

  const handleUpClick = () => {
    console.log("Upper Case button Clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    if (text !== "") {
      setHeading(props.heading2);
    } else {
      alert("Enter some text for result.");
    }
  };

  const handleDownClick = () => {
    console.log("Lower case button Clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    if (text !== "") {
      setHeading(props.heading2);
    } else {
      alert("Enter some text for result.");
    }
  };

  const handleTrimClick = () => {
    console.log("Trim button clicked");
    let newtext = text.trim();
    setText(newtext);
    if (text !== "") {
      setHeading(props.heading2);
    } else {
      alert("Enter some text for result.");
    }
  };

  const handleClearClick = () => {
    console.log("Screen Cleared");
    setText("");
    setHeading(props.heading1);
  };

  const handleCopyClick = () => {
    let text = document.getElementById("MyBox1");
    console.log("All content copied.");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaceClick = () => {
    console.log("Extra Spaces Removed.");
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    if (text !== "") {
      setHeading(props.heading2);
    } else {
      alert("Enter some text for result.");
    }
  };
  const handleChange = (event) => {
    setText(event.target.value);
    setHeading(props.heading1);
  };

  return (
    <div>
      <div className="container my-3">
        <h2 className="mx-2">{heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="MyBox1"
            value={text}
            rows="18"
            onChange={handleChange}
            placeholder="Enter text here..."
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert To Upper Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>
          Convert To Lower Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleTrimClick}>
          Trim
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaceClick}
        >
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3">
        <h2 className="mx-2 my-2">Your Text Summary</h2>
        <p className="mx-2">
          {text.length} characters, {text.split(" ").length - 1} words and{" "}
          {text.split(".").length - 1} lines.
        </p>
        <h2 className="mx-2 my-2">Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
