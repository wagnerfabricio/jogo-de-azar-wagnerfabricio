/* -------------------- Game phrases -------------------- */
const speech = [
  {
    text: "SE VOCÊ VEIO ATÉ AQUI E É ESTUDANTE... VOLTE PARA O JOGO!",
    player: "CHEETER!",
  },
  {
    text: "Então você quer se tornar o novo GangStar de Las Vegas?",
    button: "show",
  },
  {
    text: "Não será fácil... Você terá que me vencer em um antigo jogo para isso...",
    button: "show",
  },
  {
    text: "... ... ...",
    button: "show",
    player: "yes",
  },
  {
    text: "Vejo que vc não é muito de falar... Ok, vamos jogar!!!",
    button: "show",
  },
  {
    text: "Escolha com sabedoria, Pedra, Papel ou Tesoura...",
    button: "show",
  },

  {
    text: "Eu gosto muito de coisas pontudas",
    button: "hide",
  },

  {
    text: " Eu escolho... ... ... ... ... ... ...",
    specialChoice: 3,
    button: "hide",
    gameFlow: "checkResults",
  },
  {
    text: " teste de merda",
    specialChoice: 3,
    button: "hide",
  },
];

const badGuyPictures = [
  {
    src: "assets/img/snake.png",
  },
  {
    src: "assets/img/halph.png",
  },
  {
    src: "assets/img/milhouse.png",
  },
  {
    src: "assets/img/bart.png",
  },
  {
    src: "assets/img/nelson.png",
  },
  {
    src: "assets/img/fat-tony.png",
  },
];

/* ----------------- Control Game Status ---------------- */
let gameStatus = 0; //Equals index of Game phrases
let badGuyStatus = 0;
const playerSpeech = 0;

/* -------------------- Speech speed -------------------- */
const speed = 50; //in milliseconds

/* ------------------- Typping effect ------------------- */
let typping = 0; //Increase after each caracter is inserted
const badGuySpeek = document.getElementById("badGuySpeek");
const playerSpeek = document.getElementById("playerSpeek");

function typeWriter() {
  if (typping < speech[gameStatus].text.length) {
    badGuySpeek.innerHTML += speech[gameStatus].text[typping];
    typping++;
    setTimeout(typeWriter, speed);
  }
}

function typePlayer() {
  if (typping < speech[gameStatus].text.length) {
    playerSpeek.innerHTML += speech[gameStatus].text[typping];
    typping++;
    setTimeout(typePlayer, speed);
  }
}

/* -------------------- Control Game -------------------- */
const buttonContinue = document.getElementById("continue");
const showButton = () => {
  return (buttonContinue.style.display = "block");
};
const hideButton = () => {
  return (buttonContinue.style.display = "none");
};

// Choose speeker
function hoIsSpeeking() {
  if (speech[gameStatus].player === "yes") {
    typePlayer();
  } else {
    typeWriter();
  }
}

// function continueGame() {
//     talkMoment();
// }

function talkMoment() {
  gameStatus++;
  typping = 0;
  buttonContinue.innerText = "Continue...";
  badGuySpeek.innerHTML = "";
  playerSpeek.innerHTML = "";

  hoIsSpeeking();
  if (speech[gameStatus].button === "show") {
    setTimeout(showButton, speech[gameStatus].text.length * 50);
  }
  hideButton();
  showGame();
}

function talkMomentPlaying() {
  gameStatus++;
  typping = 0;
  buttonContinue.innerText = "Continue...";
  hoIsSpeeking();
  if (speech[gameStatus].button === "show") {
    setTimeout(showButton, speech[gameStatus].text.length * 50);
  }

  setTimeout(badGuyRandomChoice, 3000);
}

/* ------------------- Show board Game ------------------ */
const board = document.getElementById("board");

function showGame() {
  if (speech[gameStatus].button === "hide") {
    setTimeout(showBoard, 3000);
  }
  hideBoard();
}

const showBoard = () => {
  board.style.opacity = "1";
  board.style.display = "flex";
};

const hideBoard = () => {
  board.style.opacity = "0";
  board.style.display = "none";
};

/* --------------------- Game Button -------------------- */
buttonContinue.addEventListener("click", talkMoment);

/* ----------------- Board Functionality ----------------- */
// Options database
const choicesImg = [
  {
    id: "fig-rock",
    src: "assets/img/rock.png",
  },
  {
    id: "fig-paper",
    src: "assets/img/paper.png",
  },
  {
    id: "fig-scissors",
    src: "assets/img/scissors.png",
  },
];

// Check choices
let playerChoice = undefined;
let badGuyChoice = "";

board.addEventListener("click", identifyPlayerChoice);

function identifyPlayerChoice(event) {
  playerChoice = undefined;

  let playerTarget = event.target.id;
  let takeSrcImage = "";

  if (playerChoice === undefined) {
    for (let i = 0; i < choicesImg.length; i++) {
      if (choicesImg[i].id === playerTarget) {
        takeSrcImage = choicesImg[i].src;
      }
    }
    const playerChoiceImg = document.createElement("img");
    playerChoiceImg.src = takeSrcImage;
    playerChoiceImg.classList.add("speek__image");
    playerSpeek.appendChild(playerChoiceImg);
    hideBoard();
    badGuyTalkChoice();
  }
}

function badGuyTalkChoice() {
  badGuySpeek.innerHTML = "";
  talkMomentPlaying();
}

function badGuyRandomChoice() {
  badGuySpeek.innerHTML = "";

  if (speech[gameStatus].gameFlow !== undefined) {
    badGuyChoice = speech[gameStatus].specialChoice;
  } else {
    badGuyChoice = Math.floor(Math.random() * 3);
  }

  let takeSrcImage = "";

  for (let i = 0; i < choicesImg.length; i++) {
    if (Number.badGuyChoice === Number[i]) {
      takeSrcImage = choicesImg[i].src;
    }
  }
  const badGuyChoiceImg = document.createElement("img");
  badGuyChoiceImg.src = takeSrcImage;
  badGuyChoiceImg.classList.add("speek__image");
  badGuySpeek.appendChild(badGuyChoiceImg);
  setTimeout(showWinner, 3000);
}

function showWinner() {}
