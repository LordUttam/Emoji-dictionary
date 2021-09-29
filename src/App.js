import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐕": "Dog",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐈": "Cat",
  "🦁": "Lion",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🐎": "Horse",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🐂": "Ox",
  "🐄": "Cow",
  "🐷": "Pig",
  "🐗": "Boar",
  "🐏": "Ram",
  "🐑": "Ewe",
  "🐐": "Goat",
  "🐪": "Camel",
  "🦙": "Llama",
  "🦒": "Giraffe",
  "🐘": "Elephant",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐭": "Mouse Face",
  "🐁": "Mouse",
  "🐀": "Rat",
  "🐹": "Hamster",
  "🐰": "Rabbit Face",
  "🐇": "Rabbit",
  "🐿️": "Chipmunk",
  "🦔": "Hedgehog",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐨": "Koala",
  "🐼": "Panda",
  "🦥": "Sloth",
  "🦦": "Otter",
  "🦨": "Skunk",
  "🦘": "Kangaroo",
  "🦡": "Badger",
  "🦃": "Turkey",
  "🐔": "Chicken",
  "🐦": "Bird",
  "🐧": "Penguin",
  "🕊️": "Dove",
  "🦅": "Eagle",
  "🦆": "Duck",
  "🦢": "Swan",
  "🦉": "Owl",
  "🦩": "Flamingo",
  "🦚": "Peacock",
  "🦜": "Parrot",
  "🐸": "Frog",
  "🐊": "Crocodile",
  "🐢": "Turtle",
  "🦎": "Lizard",
  "🐍": "Snake",
  "🐋": "Whale",
  "🐬": "Dolphin",
  "🐟": "Fish",
  "🐠": "Tropical Fish",
  "🐡": "Blowfish",
  "🦈": "Shark",
  "🐙": "Octopus",
  "🐌": "Snail",
  "🦋": "Butterfly",
  "🐛": "Bug",
  "🐜": "Ant",
  "🐝": "Honeybee",
  "🐞": "Lady Beetle",
  "🦗": "Cricket",
  "🕷️": "Spider",
  "🦂": "Scorpion",
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
      <h1>Zoopedia</h1>
      <input
        onChange={emojiHandler}
        placeholder="paste an animal emoji to know the name"
      />
      <h2>{meaning}</h2>
      <section>
        {emojiList.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: ".5rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </section>
    </div>
  );
}
