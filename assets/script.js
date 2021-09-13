/* -------------------- GAME PHRASES -------------------- */
// GAME FLOW SPEECHES
const speech = [
  {
    text: "SE VOCÊ VEIO ATÉ AQUI E É ESTUDANTE... VOLTE PARA O JOGO!",
    player: "CHEETER!",
    picture: "assets/img/snake.png",
    showPicture: false,
  },
  {
    text: "Então você quer se tornar o novo GangStar de Springfield?",
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
    // specialChoice: 0,
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
    // specialChoice: 0,
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
    text: "Nos enganaram... veja quem estava por trás de tudo...",
    picture: "assets/img/bart.png",
    showPicture: true,
    gameFlow: "endGame",
  },
];

// GAME RESULT SPEECHES
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

/* ----------------- BOARD ASSETS ----------------- */
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

/* ------------------- GAME VARIABLES ------------------- */
let gameStatus = 0; //control game position
let gameResultStatus = 0; //control winner text typping speech
let typping = 0; //typping effect increase after each caracter is inserted
let playerChoice; //save player choice
let badGuyChoice; //save badGuyChoice
const speed = 50; //control typping speed in milliseconds

const badGuySpeek = document.getElementById("badGuySpeek"); //badguy speek balloon
const playerSpeek = document.getElementById("playerSpeek"); //player speek balloon
const buttonContinue = document.getElementById("continue"); //game button

const showButton = () => {return (buttonContinue.style.display = "block");}; //show game button

const hideButton = () => {return (buttonContinue.style.display = "none");}; //hide game button

//Show game board
const showBoard = () => {
  board.style.opacity = "1";
  board.style.display = "flex";
};

//Hide game board
const hideBoard = () => {
  board.style.opacity = "0";
  board.style.display = "none";
};

const badGuyImage = document.getElementById("bad-guy-img"); //BadGuy Image
// badGuyImage.style.filter = "brightness(1)"; //When applied show image
// badGuyImage.style.filter = "brightness(0)"; //when aplied hide image

const board = document.getElementById("board"); //Board Game

/* ------------------- GAME FUNCTIONS ------------------- */
//BADGUY TYPPING EFFECT
function typeWriter() {
  if (typping < speech[gameStatus].text.length) {
    badGuySpeek.innerHTML += speech[gameStatus].text[typping];
    typping++;
    setTimeout(typeWriter, speed);
  }
  //from https://www.w3schools.com/howto/howto_js_typewriter.asp
}

//PLAYER TYPPING EFFECT
function typePlayer() {
  if (typping < speech[gameStatus].text.length) {
    playerSpeek.innerHTML += speech[gameStatus].text[typping];
    typping++;
    setTimeout(typePlayer, speed);
  }
  //from https://www.w3schools.com/howto/howto_js_typewriter.asp
}

//GAME RESULT TYPPING EFFECT
function typeGameResult() {
  if (typping < gameResultSpeech[gameResultStatus].text.length) {
    badGuySpeek.innerHTML += gameResultSpeech[gameResultStatus].text[typping];
    typping++;
    setTimeout(typeGameResult, speed);
  }
  //from https://www.w3schools.com/howto/howto_js_typewriter.asp
}

//CONTROL HO IS SPEEKING
function hoIsSpeeking() {
  if (speech[gameStatus].player === "yes") {
    typePlayer();
  } else {
    typeWriter();
  }
}

// SHOW/HIDE PLAYER PICTURE
function showPicture() {
  if (speech[gameStatus].showPicture === false) {
    return (badGuyImage.style.filter = "brightness(0)");
  }
  return (badGuyImage.style.filter = "brightness(1)");
}

// BUTTTON FUNCTIONS AND GAME FLOW
function talkMoment() {
  badGuyImage.src = speech[gameStatus].picture; //Change badGuy picture in relation of gameFlow

  showPicture();

  gameStatus++; //increase one more step to the gameFlow
  typping = 0; //set typping effect to start again

  buttonContinue.innerText = "Continue..."; //change game button from "Start" to "Continue"
  badGuySpeek.innerHTML = ""; //clean badGuy speek balloon
  playerSpeek.innerHTML = ""; //clean player speek balloon

  hoIsSpeeking();

  //Continue game in case of win
  if (speech[gameStatus].button === "show") {
    setTimeout(showButton, speech[gameStatus].text.length * 50);
  }
  //Reload game in case of loose
  if (gameResultSpeech[gameResultStatus].gameFlow === "restart") {
    location.reload();
  }
  //Call final scenes if player finish the game
  if (speech[gameStatus].gameFlow === "endGame") {
    gangStar();
  }

  hideButton();
  showGame();
}

//SHOW CONTINUE BUTTON ONLY AFTER SPEEK
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

//SHOW CONTINUE BUTTON ONLY AFTER SPECIAL SPEECH
function talkGameResult(n) {
  typping = 0;

  badGuySpeek.innerHTML = "";
  buttonContinue.innerText = "Continue...";
  typeGameResult();
  if (gameResultSpeech[n].button === "show") {
    setTimeout(showButton, gameResultSpeech[n].text.length * 50);
  }
}

//SHOW OR HIDE BOARD GAME
function showGame() {
  if (speech[gameStatus].button === "hide") {
    setTimeout(showBoard, 3000);
  }
  hideBoard();
}

//SHOW PLAYER CHOICE IN PLAYER SPEEK BALLOON
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

//SHOW BADGUY LITTLE TEXT BEFORE SHOW HIS CHOICE
function badGuyTalkChoice() {
  badGuySpeek.innerHTML = "";
  talkMomentPlaying();
}

//CHECK IF BADGUY HAVE A SPECIAL CHOICE, IF NOT, MAKE A RANDOM CHOICE (EASY GAME MODE)
function badGuyRandomChoice() {
  badGuySpeek.innerHTML = "";

  if (speech[gameStatus].specialChoice !== undefined) {
    badGuyChoice = speech[gameStatus].specialChoice;
  } else {
    badGuyChoice = Math.floor(Math.random() * 3);
  }

  let takeSrcImage = choicesImg[badGuyChoice].src;

  const badGuyChoiceImg = document.createElement("img");
  badGuyChoiceImg.src = takeSrcImage;
  badGuyChoiceImg.classList.add("speek__image");
  badGuySpeek.appendChild(badGuyChoiceImg);
  setTimeout(showWinner, 3000);
}

//CHECK GAME RESULT
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

/* -------------------- FINAL GAME SCREEN -------------------- */
let homer = document.querySelector("#homerImg");
let revelation = document.querySelector(".absolute");
let finalText = document.querySelector("#finalText");

//SHOW SURPRISE
function gangStar() {
  homer.style.filter = "brightness(1)";
  setTimeout(time1, 4000);
  setTimeout(time2, 5000);
  setTimeout(specialButton, 10000);
}

//CREATE A TIMER TO SHOW SURPRISE 1
function time1() {
  homer.classList.add("homer-exit");
}

//CREATE A TIMER 2 TO SHOW NEXT SURPRISE
function time2() {
  revelation.style.display = "block";
  const body = document.getElementsByTagName("body")[0];
  finalText.style.display = "block";
}

//SHOW BUTTON RESTART IN THE GAME END AND ASK IF WANT START AGAIN
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


/* --------------------- EVENTS -------------------- */
buttonContinue.addEventListener("click", talkMoment); //Game Button
board.addEventListener("click", identifyPlayerChoice); //Game board