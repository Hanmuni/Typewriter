let textInput = "";

const textEl = document.querySelector("#text");
const textInputEl = document.querySelector("#text-input");

const keySound = new Audio("./assets/key.mp3");
const enterSound = new Audio("./assets/enter.mp3");
const backspaceSound = new Audio("./assets/backspace.mp3");

const createLetterElements = (rawText) => {
  return rawText.split("").map((char) => {
    if (char === "\n") {
      return document.createElement("br");
    }

    const letterEl = document.createElement("span");
    letterEl.textContent = char;
    letterEl.classList.add("character");
    return letterEl;
  });
};

const updateTextDisplay = () => {
  textInput = textInputEl.value;

  const letterElements = createLetterElements(textInput);

  const cursorEl = document.createElement("span");
  cursorEl.textContent = "|";
  cursorEl.classList.add("cursor");

  textEl.replaceChildren(...letterElements, cursorEl);
};

const playKeySound = (e) => {
  if (e.key === "Enter") {
    enterSound.currentTime = 0;
    enterSound.play();
  } else if (e.key === "Backspace") {
    backspaceSound.currentTime = 0;
    backspaceSound.play();
  } else {
    keySound.currentTime = 0;
    keySound.play();
  }
};

textInputEl.addEventListener("input", updateTextDisplay);
textInputEl.addEventListener("keydown", playKeySound);
