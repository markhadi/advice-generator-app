import dividerMobile from "./assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import diceIcon from "./assets/images/icon-dice.svg";

const App = () => {
  return (
    <main>
      <h1>Advice #117</h1>
      <p>
        “It is easy to sit up and take notice, what’s difficult is getting up
        and taking action.”
      </p>
      <picture>
        <source media="(min-width: 768px)" srcSet={dividerDesktop} />
        <img src={dividerMobile} alt="Pattern Divider" />
      </picture>
      <button type="button">
        <img src={diceIcon} alt="Generate New Advice" />
      </button>
    </main>
  );
};

export default App;
