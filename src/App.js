import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "ð": "Monkey",
  "ðĶ": "Gorilla",
  "ðĶ§": "Orangutan",
  "ð": "Dog",
  "ðš": "Wolf",
  "ðĶ": "Fox",
  "ðĶ": "Raccoon",
  "ð": "Cat",
  "ðĶ": "Lion",
  "ð": "Tiger",
  "ð": "Leopard",
  "ð": "Horse",
  "ðĶ": "Zebra",
  "ðĶ": "Deer",
  "ð": "Ox",
  "ð": "Cow",
  "ð·": "Pig",
  "ð": "Boar",
  "ð": "Ram",
  "ð": "Ewe",
  "ð": "Goat",
  "ðŠ": "Camel",
  "ðĶ": "Llama",
  "ðĶ": "Giraffe",
  "ð": "Elephant",
  "ðĶ": "Rhinoceros",
  "ðĶ": "Hippopotamus",
  "ð­": "Mouse Face",
  "ð": "Mouse",
  "ð": "Rat",
  "ðđ": "Hamster",
  "ð°": "Rabbit Face",
  "ð": "Rabbit",
  "ðŋïļ": "Chipmunk",
  "ðĶ": "Hedgehog",
  "ðĶ": "Bat",
  "ðŧ": "Bear",
  "ðĻ": "Koala",
  "ðž": "Panda",
  "ðĶĨ": "Sloth",
  "ðĶĶ": "Otter",
  "ðĶĻ": "Skunk",
  "ðĶ": "Kangaroo",
  "ðĶĄ": "Badger",
  "ðĶ": "Turkey",
  "ð": "Chicken",
  "ðĶ": "Bird",
  "ð§": "Penguin",
  "ðïļ": "Dove",
  "ðĶ": "Eagle",
  "ðĶ": "Duck",
  "ðĶĒ": "Swan",
  "ðĶ": "Owl",
  "ðĶĐ": "Flamingo",
  "ðĶ": "Peacock",
  "ðĶ": "Parrot",
  "ðļ": "Frog",
  "ð": "Crocodile",
  "ðĒ": "Turtle",
  "ðĶ": "Lizard",
  "ð": "Snake",
  "ð": "Whale",
  "ðŽ": "Dolphin",
  "ð": "Fish",
  "ð ": "Tropical Fish",
  "ðĄ": "Blowfish",
  "ðĶ": "Shark",
  "ð": "Octopus",
  "ð": "Snail",
  "ðĶ": "Butterfly",
  "ð": "Bug",
  "ð": "Ant",
  "ð": "Honeybee",
  "ð": "Lady Beetle",
  "ðĶ": "Cricket",
  "ð·ïļ": "Spider",
  "ðĶ": "Scorpion",
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
