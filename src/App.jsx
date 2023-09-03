const App = () => {
  return (
    <main>
      <h1>Advice #117</h1>
      <p>
        “It is easy to sit up and take notice, what’s difficult is getting up
        and taking action.”
      </p>
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="./assets/images/pattern-divider-desktop.svg"
        />
        <img
          src="./assets/images/pattern-divider-mobile.svg"
          alt="Pattern Divider"
        />
      </picture>
      <button type="button">
        <img src="./assets/images/icon-dice.svg" alt="Generate New Advice" />
      </button>
    </main>
  );
};

export default App;
