import React, { useState } from "react";
import "./xspellcheck.css";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const XSpellCheck = () => {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState(null);

  const checkSpelling = (inputText) => {
    const words = inputText.split(" ");
    for (let word of words) {
      let lowerWord = word.toLowerCase();
      if (customDictionary[lowerWord]) {
        setSuggestion(
          <>
            Did you mean: <b>{customDictionary[lowerWord]}</b>?
          </>
        );
        return;
      }
    }
    setSuggestion(null);
  };

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    checkSpelling(newText);
  };

  return (
    <div className="spell-check-container">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        className="spell-check-textarea"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      {suggestion && <p className="spell-check-suggestion">{suggestion}</p>}
    </div>
  );
};

export default XSpellCheck;
