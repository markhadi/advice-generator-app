// Importing necessary modules and assets
import dividerMobile from "./assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import diceIcon from "./assets/images/icon-dice.svg";

import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const App = () => {
  // Setting initial states for advice, advice ID, and loading status
  const [advice, setAdvice] = useState("Press the dice to get advice");
  const [slipId, setSlipId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch advice from the API
  const fetchAdvice = async () => {
    // Indicate that data is being loaded
    setIsLoading(true);
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const { slip } = await response.json();
      // Store the received advice and ID from the API to state
      setAdvice(slip.advice);
      setSlipId(slip.id);
    } catch (error) {
      // Handle error if fetching data fails
      console.error("Error fetching advice:", error);
      setAdvice("Error fetching advice. Please try again.");
    }
    // Indicate that data loading is done
    setIsLoading(false);
  };

  // Fetch advice when the component first mounts
  useEffect(() => {
    fetchAdvice();
  }, []);

  // Scale animation to provide a transition effect when content changes
  const scaleAnimation = useSpring({
    from: { transform: "scale(0.95)" },
    to: { transform: "scale(1)" },
    reset: true,
    config: { tension: 210, friction: 50 },
  });

  // Render the component
  return (
    <animated.main style={scaleAnimation}>
      {/* If loading, display "Loading...", otherwise, show the content */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Display advice ID */}
          <animated.h1>Advice #{slipId}</animated.h1>
          {/* Display the advice */}
          <animated.p>"{advice}"</animated.p>
          {/* Responsive separator image */}
          <picture>
            <source media="(min-width: 376px)" srcSet={dividerDesktop} />
            <img src={dividerMobile} alt="Pattern Divider" />
          </picture>
          {/* Button to fetch a new advice */}
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
