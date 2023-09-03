import dividerMobile from "./assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import diceIcon from "./assets/images/icon-dice.svg";

import { useState, useEffect } from "react";

const App = () => {
  const [advice, setAdvice] = useState("Press the dice to get advice");
  const [slipId, setSlipId] = useState("");

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setSlipId(data.slip.id);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main>
      <h1>Advice #{slipId}</h1>
      <p>"{advice}"</p>
      <picture>
        <source media="(min-width: 376px)" srcSet={dividerDesktop} />
        <img src={dividerMobile} alt="Pattern Divider" />
      </picture>
      <button type="button" className="btn" onClick={fetchAdvice}>
        <img src={diceIcon} alt="Generate New Advice" />
      </button>
    </main>
  );
};

export default App;
