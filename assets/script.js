/* -------------------- Game phrases -------------------- */
const speech = [
  {
    text: "SE VOCÊ VEIO ATÉ AQUI E É ESTUDANTE... VOLTE PARA O JOGO!",
    player: "CHEETER!",
    picture: "assets/img/snake.png",
    showPicture: false,
  },
  {
    text: "Então você quer se tornar o novo GangStar de Las Vegas?",
    button: "show",
    picture: "assets/img/snake.png",
    showPicture: false,
  },
  {
    text: "Não será fácil... Você terá que me vencer em um antigo jogo para isso...",
    button: "show",
    picture: "assets/img/snake.png",
    showPicture: false,
  },
  {
    text: "... ... ...",
    button: "show",
    player: "yes",
    picture: "assets/img/snake.png",
    showPicture: false,
  },
  {
    text: "Vejo que vc não é muito de falar... Ok, vamos jogar!!!",
    button: "show",
    picture: "assets/img/snake.png",
    showPicture: false,
  },
  {
    text: "Escolha com sabedoria, Pedra, Papel ou Tesoura...",
    button: "show",
    picture: "assets/img/snake.png",
    showPicture: false,
  },

  {
    text: "Eu gosto muito de coisas pontiagudas...",
    button: "hide",
    picture: "assets/img/snake.png",
    showPicture: false,
  },

  {
    text: " Eu escolho... ... ... ... ... ... ...",
    specialChoice: 2,
    button: "hide",
    gameFlow: "checkResults",
    picture: "assets/img/snake.png",
    showPicture: true,
  },

  {
    text: "Olha o maluco aeee... você ganhou meu chapa... Eu só queria me divertir...",
    button: "show",
    picture: "assets/img/snake.png",
    showPicture: true,
  },

  {
    text: "Boa sorte em sua jornada...",
    button: "show",
    picture: "assets/img/halph.png",
    showPicture: false,
  },

  //Halph
  {
    text: "Eu também quero jogar! preciso de um papel para limpar meu narizinho...",
    button: "show",
    picture: "assets/img/halph.png",
    showPicture: false,
  },
  {
    text: "Escolha Pedra, Papel ou Tesoura...",
    button: "hide",
    picture: "assets/img/halph.png",
    showPicture: false,
  },
  {
    text: " Eu escolho... ... ... ... ... ... ...",
    specialChoice: 0,
    button: "hide",
    gameFlow: "checkResults",
    picture: "assets/img/halph.png",
    showPicture: true,
  },

  {
    text: "Eu pensei que era um papel de verdade... Não entendi esse jogo... vou para casa...",
    button: "show",
    picture: "assets/img/halph.png",
    showPicture: true,
  },

  {
    text: "Boa sorte em sua jornada...",
    button: "show",
    picture: "assets/img/milhouse.png",
    showPicture: false,
  },

  // Milhouse
  {
    text: "Vou jogar contra você, se eu ganhar você terá que entregar esta carta para alguém da sua família que eu amo...",
    button: "show",
    picture: "assets/img/milhouse.png",
    showPicture: false,
  },
  {
    text: "Escolha Pedra, Papel ou Tesoura...",
    button: "hide",
    picture: "assets/img/milhouse.png",
    showPicture: false,
  },
  {
    text: " Eu escolho... ... ... ... ... ... ...",
    specialChoice: 1,
    button: "hide",
    gameFlow: "checkResults",
    picture: "assets/img/milhouse.png",
    showPicture: true,
  },

  {
    text: "Ah não! Você picotou toda a minha carta! Eu só queria que ela me amasse...",
    button: "show",
    picture: "assets/img/milhouse.png",
    showPicture: true,
  },

  {
    text: "Boa sorte em sua jornada...",
    button: "show",
    picture: "assets/img/nelson.png",
    showPicture: false,
  },

  // Nelson
  {
    text: "Ha Ha!!! Só vim aqui para te atrapalhar... Ha Ha! Se ganhar de mim, te atiro essa pedra!!!",
    button: "show",
    picture: "assets/img/nelson.png",
    showPicture: false,
  },
  {
    text: "Escolha Pedra, Papel ou Tesoura...",
    button: "hide",
    picture: "assets/img/nelson.png",
    showPicture: false,
  },
  {
    text: " Eu escolho... ... ... ... ... ... ...",
    specialChoice: 0,
    button: "hide",
    gameFlow: "checkResults",
    picture: "assets/img/nelson.png",
    showPicture: true,
  },

  {
    text: "Eu nem queria ganhar mesmo... e essa pedra nem era uma pedra de verdade...",
    button: "show",
    picture: "assets/img/nelson.png",
    showPicture: true,
  },

  {
    text: "Boa sorte em sua jornada...",
    button: "show",
    picture: "assets/img/Fat_Tony.png",
    showPicture: false,
  },

  // Fat Tony
  {
    text: "Eu não estou nada Feliz com o que fiquei sabendo... Você não passará por mim... Sem dicas dessa vez...",
    button: "show",
    picture: "assets/img/Fat_Tony.png",
    showPicture: false,
  },
  {
    text: "Escolha Pedra, Papel ou Tesoura...",
    button: "hide",
    picture: "assets/img/Fat_Tony.png",
    showPicture: false,
  },
  {
    text: " Eu escolho... ... ... ... ... ... ...",
    specialChoice: 0,
    button: "hide",
    gameFlow: "checkResults",
    picture: "assets/img/Fat_Tony.png",
    showPicture: true,
  },

  {
    text: "Você não é fraco como eu pensava... poderá se tornar Grande um dia...",
    button: "show",
    picture: "assets/img/Fat_Tony.png",
    showPicture: true,
  },

  {
    text: "Nada mal para um novato... Boa sorte em sua jornada...",
    button: "show",
    picture: "assets/img/bart.png",
    showPicture: false,
  },

  // Bart
  {
    text: "Você??? Como você conseguiu chegar até aqui? Isso é impossível!!! Agora vou te mandar de volta para casa...",
    button: "show",
    picture: "assets/img/bart.png",
    showPicture: false,
  },
  {
    text: "Escolha Pedra, Papel ou Tesoura...",
    button: "hide",
    picture: "assets/img/bart.png",
    showPicture: false,
  },
  {
    text: " Eu escolho... ... ... ... ... ... ...",
    specialChoice: 0,
    button: "hide",
    gameFlow: "checkResults",
    picture: "assets/img/bart.png",
    showPicture: true,
  },

  {
    text: "Não acredito que vc me venceu... você agora é o GangStar da cidade... ",
    button: "show",
    picture: "assets/img/bart.png",
    showPicture: true,
  },

  {
    text: "Mas porquê você fica se escondendo nas sombras??? Você deve mostrar a todos quem é o chefão da cidade...",
    button: "show",
    picture: "assets/img/bart.png",
    showPicture: true,
  },
  {
    text: "O grande Vencedor...",
    button: "show",
    picture: "assets/img/bart.png",
    showPicture: true,
    gameFlow: "endGame",
  },
  {
    text: "O GangStar",
    picture: "assets/img/bart.png",
    showPicture: true,
    gameFlow: "endGame",
  },
];

/* ----------------- Game Result Speechs ---------------- */
const gameResultSpeech = [
  {
    gameFlow: "empate",
    text: "Deu empate! Vamos tentar novamente ...",
    button: "show",
  },
  {
    text: "Você tentou, mas é fraco...  Quem sabe em uma próxima vez...",
    button: "show",
    gameFlow: "restart",
  },
  {
    text: "Parabéns pela sua vitoria... Gostaria de jogar novamente?",
    button: "show",
    gameFlow: "restart",
  },
];

let gameResultStatus = 0; //control winner text typping speech

/* ----------------- Control Game Status ---------------- */
let gameStatus = 0; //Equals index of Game phrases
// let badGuyStatus = 0;

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

function typeGameResult() {
  if (typping < gameResultSpeech[gameResultStatus].text.length) {
    badGuySpeek.innerHTML += gameResultSpeech[gameResultStatus].text[typping];
    typping++;
    setTimeout(typeGameResult, speed);
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

/* ----------------- Show bad Guy Image ----------------- */
const badGuyImage = document.getElementById("bad-guy-img");
// badGuyImage.style.filter = "brightness(1)";
// badGuyImage.style.filter = "brightness(0)";

/* ---------------- Speeker text Control ---------------- */
function hoIsSpeeking() {
  if (speech[gameStatus].player === "yes") {
    typePlayer();
  } else {
    typeWriter();
  }
}

/* ------------------ Show/Hide Player picture ----------------- */
function showPicture() {
  if (speech[gameStatus].showPicture === false) {
    return (badGuyImage.style.filter = "brightness(0)");
  }
  return (badGuyImage.style.filter = "brightness(1)");
}

/* -------- Control Buton functions and game flow ------- */
function talkMoment() {
  badGuyImage.src = speech[gameStatus].picture;
  showPicture();
  gameStatus++;
  typping = 0;
  buttonContinue.innerText = "Continue...";
  badGuySpeek.innerHTML = "";
  playerSpeek.innerHTML = "";
  hoIsSpeeking();
  if (speech[gameStatus].button === "show") {
    setTimeout(showButton, speech[gameStatus].text.length * 50);
  }
  if (gameResultSpeech[gameResultStatus].gameFlow === "restart") {
    location.reload();
  }
  if (speech[gameStatus].gameFlow === "endGame") {
    gangStar();
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

function talkGameResult(n) {
  typping = 0;

  badGuySpeek.innerHTML = "";
  buttonContinue.innerText = "Continue...";
  /* ------------ // Colocar algum +++ aqui... ------------ */
  typeGameResult();
  if (gameResultSpeech[n].button === "show") {
    setTimeout(showButton, gameResultSpeech[n].text.length * 50);
  }
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
let playerChoice;
let badGuyChoice = "";

board.addEventListener("click", identifyPlayerChoice);

function identifyPlayerChoice(event) {
  let playerTarget = event.target.id;
  let takeSrcImage = "";

  for (let i = 0; i < choicesImg.length; i++) {
    let checkChoice = choicesImg[i].id;

    if (checkChoice === playerTarget) {
      playerChoice = i;
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

  takeSrcImage = choicesImg[badGuyChoice].src;

  const badGuyChoiceImg = document.createElement("img");
  badGuyChoiceImg.src = takeSrcImage;
  badGuyChoiceImg.classList.add("speek__image");
  badGuySpeek.appendChild(badGuyChoiceImg);
  setTimeout(showWinner, 3000);
}

/* ------------------ Check the winner ------------------ */
function showWinner() {
  //Draw
  if (playerChoice === badGuyChoice) {
    gameStatus -= 2;
    gameResultStatus = 0;
    talkGameResult(gameResultStatus);
  }

  //Player Loose
  else if (
    (playerChoice === 1 && badGuyChoice === 2) ||
    (playerChoice === 0 && badGuyChoice === 1) ||
    (playerChoice === 2 && badGuyChoice === 0)
  ) {
    gameResultStatus = 1;
    talkGameResult(gameResultStatus);
    buttonContinue.innerText = "Restart";
  }

  //Player Win
  else if (
    (playerChoice === 2 && badGuyChoice === 1) ||
    (playerChoice === 1 && badGuyChoice === 0) ||
    (playerChoice === 0 && badGuyChoice === 2)
  ) {
    badGuyImage.style.filter = "brightness(1)";
    talkMoment();
  }
}

/* -------------------- Final Screen -------------------- */
let homer = document.querySelector("#homerImg");
let revelation = document.querySelector(".absolute");
let finalText = document.querySelector("#finalText");

function gangStar() {
  //   hideButton();
  homer.style.filter = "brightness(1)";
  setTimeout(time1, 4000);
  setTimeout(time2, 5000);
  setTimeout(specialButton, 10000);
}

function time1() {
  homer.classList.add("homer-exit");
}

function time2() {
  revelation.style.display = "block";
  const body = document.getElementsByTagName("body")[0];
  finalText.style.display = "block";
}

function specialButton() {
  buttonContinue.innerText = "Restart";
  buttonContinue.style.position = "absolute";
  revelation.style.display = "none";
  finalText.style.display = "none";
  gameResultStatus = 2;
  gameStatus = 0;
  talkGameResult(gameResultStatus);
  buttonContinue.innerText = "Restart";
}
