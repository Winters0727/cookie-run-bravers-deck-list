import { useState } from "react";

import { CARDS } from "./constant/card";
import { flattenCards, groupByValue } from "./utils/card";
import { createDeckArray, createDeckCode, parseDeckCode } from "./utils/deck";

function App() {
  const [deck, setDeck] = useState({
    "ST1-016": 4,
    "ST2-017": 3,
    "ST3-017": 2,
  });

  return (
    <div className="App">
      <div>{JSON.stringify(deck)}</div>
      <div>{createDeckCode(deck)}</div>
      <div>{JSON.stringify(parseDeckCode(createDeckCode(deck)))}</div>
      {createDeckArray(deck).map((card) => (
        <img
          alt={card}
          src={`https://cookierunbraverse.com/images/card/${
            card.split("-")[0]
          }_${card.split("-")[1].slice(1)}.png`}
        />
      ))}
    </div>
  );
}

export default App;
