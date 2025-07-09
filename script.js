const flashcards = [
  { en: "Hello", es: "Hola", fr: "Bonjour" },
  { en: "Thank you", es: "Gracias", fr: "Merci" },
  { en: "Goodbye", es: "Adiós", fr: "Au revoir" }
];

let currentCard = 0;
let showingFront = true;
let language = "en"; // Change to "es" or "fr" for other languages

const container = document.getElementById("flashcard-container");
const finishScreen = document.getElementById("finish-screen");

function showCard() {
  if (currentCard >= flashcards.length) {
    container.innerHTML = "";
    finishScreen.classList.remove("hidden");
    return;
  }

  const card = document.createElement("div");
  card.className = "flashcard";
  card.textContent = flashcards[currentCard][language];
  card.onclick = () => {
    showingFront = !showingFront;
    card.textContent = showingFront
      ? flashcards[currentCard][language]
      : flashcards[currentCard]["en"]; // Always show English on back
  };

  container.innerHTML = "";
  container.appendChild(card);
}

function restartGame() {
  currentCard = 0;
  showingFront = true;
  finishScreen.classList.add("hidden");
  showCard();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    currentCard++;
    showingFront = true;
    showCard();
  }
});

showCard();
