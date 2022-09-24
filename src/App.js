import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Smiling Face",
  "🤫": "Shushing Face",
  "😴": "Sleeping Face",
  "👽": "Alien",
  "⚽": "Soccer Ball",
  "💔": "Broken Heart",
  "🚀": "Rocket",
  "🍕": "Pizza"
};

let knownEmojis = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");

  var emojiName = (event) => {
    var emoji = event.target.value;
    var mean = emojiDictionary[emoji];
    console.log(mean);
    if (mean === undefined) {
      setMeaning("NOT IN DATABASE");
    } else {
      setMeaning(mean);
    }
  };
  var nameEmoji = (item) => {
    var name2 = emojiDictionary[item];
    setMeaning(name2);
  };
  return (
    <div className="App">
      <h1>Emoji Translator</h1>
      <input style={{ fontSize: "2rem" }} onChange={emojiName}></input>
      <h3>{meaning}</h3>

      {knownEmojis.map((item) => {
        return (
          <span
            key={item}
            style={{ fontSize: "3rem" }}
            onClick={() => nameEmoji(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
