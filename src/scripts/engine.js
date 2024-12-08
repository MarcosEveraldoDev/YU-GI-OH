const state = {
  score: {
    PlayerScore: 0,
    ComputerScore: 0,
    scoreBox: document.getElementById("score_points"),
  },
  cardSprites: {
    avatar: document.getElementById("card-image"),
    name: document.getElementById("card-name"),
    type: document.getElementById("card-type"),
  },
  fieldCards: {
    player: document.getElementById("player-field-card"),
    computer: document.getElementById("computer-field-card"),
  },
  playerSides: {
    player1: "player-cards",
    player1BOX: document.querySelector("#player-cards"),
    computer: "computer-cards",
    computerBOX: document.querySelector("#computer-cards"),
  },
  actions: {
    button: document.getElementById("next-duel"),
  },
};

const cardData = [
  {
    id: 0,
    name: "Blue Eyes White Dragon",
    type: "Paper",
    img: "./src/assets/icons/dragon.png",
    winOf: [2],
    loseOf: [1],
  },
  {
    id: 1,
    name: "Dark Magician",
    type: "Scissors",
    img: "./src/assets/icons/magician.png",
    winOf: [0],
    loseOf: [2],
  },
  {
    id: 2,
    name: "Exodia",
    type: "Rock",
    img: "./src/assets/icons/exodia.png",
    winOf: [1],
    loseOf: [0],
  },
];

async function getRandomCardId() {
  const randomIndex = Math.floor(Math.random() * cardData.length);
  return cardData[randomIndex].id;
}

async function createCardImage(randomCard , fieldSide) {
  const cardImage = document.createElement("img");
  cardImage.setAttribute("height", "100px");
  cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
  cardImage.setAttribute("data-id", randomCard);
  cardImage.classList.add("card");
}



async function drawCards(cardNumbers, fieldSide) {
  for (let i = 0; i < cardNumbers; i++) {
    const randomCard = await getRandomCardId();
    const cardImage = await createCardImage(
      randomCard.id,
      randomCard.name,
      fieldSide
    );

    document.getElementById(fieldSide).appendChild(cardImage);
  }
}

function init() {
 
  drawCards(5, state.playerSides.player1);
  drawCards(5, state.playerSides.computer);

}

init();
