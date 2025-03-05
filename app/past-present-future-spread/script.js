// Tarot card dataset (name and description)
const tarotCards = [
  { name: "The Fool", description: "New beginnings, spontaneity, and potential." },
  { name: "The Magician", description: "Manifestation, resourcefulness, and power." },
  { name: "The High Priestess", description: "Intuition, mystery, and subconsciousness." },
  { name: "The Empress", description: "Abundance, nurturing, and sensuality." },
  { name: "The Emperor", description: "Authority, structure, and control." },
  { name: "The Hierophant", description: "Tradition, spirituality, and conformity." },
  { name: "The Lovers", description: "Love, harmony, and relationships." },
  { name: "The Chariot", description: "Willpower, determination, and success." },
  { name: "Strength", description: "Courage, persuasion, and influence." },
  { name: "The Hermit", description: "Introspection, wisdom, and solitude." }
];

// Function to get a random card
function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * tarotCards.length);
  return tarotCards[randomIndex];
}

// Function to update the cards on the UI
function drawCards() {
  const pastCard = document.getElementById("past-card");
  const presentCard = document.getElementById("present-card");
  const futureCard = document.getElementById("future-card");

  const past = getRandomCard();
  const present = getRandomCard();
  const future = getRandomCard();

  pastCard.querySelector(".card-description").textContent = `${past.name}: ${past.description}`;
  presentCard.querySelector(".card-description").textContent = `${present.name}: ${past.description}`,
  "past-present-future-spread/styles.css": "/* Pixel font setup */
@font-face {
  font-family: 'PixelFont';
  src: url('PressStart2P-Regular.woff') format('woff');
}

body {
  font-family: 'PixelFont', monospace;
  background-color: #2c3e50;
  color: #ecf0f1;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

header h1 {
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
}

.cards-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.card {
  background-color: #34495e;
  border: 2px solid #1abc9c;
  padding: 1rem;
  width: 200px;
  text-align: center;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(26, 188, 156, 0.7);
}

.card h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 1rem;
  margin: 0;
}

#redraw-button {
  background-color: #1abc9c;
  border: none;
  padding: 0.5rem 1rem;
  font-family: 'PixelFont', monospace;
  color: #ecf0f1;
  cursor: pointer;
  margin: 1rem 0;
}

#redraw-button:hover {
  background-color: #16a085;
}

footer {
  margin-top: 2rem;
  text-align: center;
}

footer a {
  color: #1abc9c;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}