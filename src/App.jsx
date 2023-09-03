import dividerMobile from "./assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import diceIcon from "./assets/images/icon-dice.svg";

import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const App = () => {
  const [advice, setAdvice] = useState("Press the dice to get advice");
  const [slipId, setSlipId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchAdvice = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const { slip } = await response.json();
      setAdvice(slip.advice);
      setSlipId(slip.id);
    } catch (error) {
      console.error("Error fetching advice:", error);
      setAdvice("Error fetching advice. Please try again.");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const scaleAnimation = useSpring({
    from: { transform: "scale(0.95)" },
    to: { transform: "scale(1)" },
    reset: true,
    config: { tension: 210, friction: 50 },
  });

  return (
    <animated.main style={scaleAnimation}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <animated.h1>Advice #{slipId}</animated.h1>
          <animated.p>"{advice}"</animated.p>
          <picture>
            <source media="(min-width: 376px)" srcSet={dividerDesktop} />
            <img src={dividerMobile} alt="Pattern Divider" />
          </picture>
          <button
            type="button"
            className="btn"
            onClick={fetchAdvice}
            aria-label="Generate New Advice"
          >
            <img src={diceIcon} alt="Generate New Advice" />
          </button>
        </>
      )}
    </animated.main>
  );
};

export default App;
