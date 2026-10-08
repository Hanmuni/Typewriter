const textEl = document.querySelector("#text");
const textInputEl = document.querySelector("#text-input");
const cursorEl = document.querySelector("#cursor");

const keySound = new Audio("./assets/key.mp3");
const enterSound = new Audio("./assets/enter.mp3");
const backspaceSound = new Audio("./assets/backspace.mp3");

const ignoredKeys = [
  "Shift",
  "Meta",
  "Control",
  "Alt",
  "Tab",
  "CapsLock",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Escape",
];

const playKeySound = (e) => {
  if (ignoredKeys.includes(e.key)) {
    return;
  }

  if (e.key === "Enter") {
    enterSound.currentTime = 0;
    enterSound.play();
    return;
  }

  if (e.key === "Backspace") {
    backspaceSound.currentTime = 0;
    backspaceSound.play();
    return;
  }

  keySound.currentTime = 0;
  keySound.play();
};

const updateTextDisplay = () => {
  const currentText = textInputEl.value;

  while (currentText.length > document.querySelectorAll(".character").length) {
    const currentSpanCount = document.querySelectorAll(".character").length;
    const addedCharacter = currentText[currentSpanCount];

    let newSpanEl;

    if (addedCharacter === "\n") {
      newSpanEl = document.createElement("br");
      newSpanEl.classList.add("character");
    } else {
      newSpanEl = document.createElement("span");
      newSpanEl.textContent = addedCharacter;
      newSpanEl.classList.add("character");
    }
    cursorEl.before(newSpanEl);
  }

  while (currentText.length < document.querySelectorAll(".character").length) {
    if (cursorEl.previousElementSibling) {
      cursorEl.previousElementSibling.remove();
    }
  }
};

textInputEl.addEventListener("keydown", playKeySound);
textInputEl.addEventListener("input", updateTextDisplay);
