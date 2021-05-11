import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😄": "Grinning Face with Smiling Eyes",
  "🤣": "Rolling on the Floor Laughing",
  "🤔": "Thinking Face",
  "🤥": "Lying Face",
  "😑": "Expressionless Face",
  "👿": "Angry Face with Horns",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "": ""
};

export default function App() {
  const [meaning, setmeaning] = useState("");

  var emojiList = Object.keys(emojiDictionary);
  console.log(emojiList);

  function emojiHandler(event) {
    let userInput = event.target.value;
    if (userInput in emojiDictionary) {
      let meaning = emojiDictionary[userInput];
      setmeaning(meaning);
    } else {
      let meaning = "Sorry, that emoji is not in our dictionary.";
      setmeaning(meaning);
    }
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input
        onChange={emojiHandler}
        placeholder="put an emoji to know the meaning"
      />
      <h2>{meaning}</h2>
      {emojiList.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "larger", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
