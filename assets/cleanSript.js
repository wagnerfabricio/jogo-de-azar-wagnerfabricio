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
    text: "Eu gosto muito de coisas pontudas...",
    button: "hide",
    board: "yes",
  },

  {
    text: " Eu escolho... ... ... ... ... ... ...",
    specialChoice: 2,
    button: "hide",
    gameFlow: "checkResults",
  },
  {
    text: " teste de merda",
    button: "hide",
  },
];

/* --------------- Bad Guys badGuyPictures -------------- */
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

/* ----------------- Game Result Speechs ---------------- */
const gameResultSpeech = [
  {
    text: "Deu empate! Vamos tentar novamente ...",
    button: "show",
  },
  {
    text: "Você tentou, mas é fraco...  Quem sabe em uma próxima vez...",
    button: "show",
    gameFlow: "restart",
  },
  {
    text: "Olha o maluco aeee... você ganhou meu chapa... Eu só queria me divertir...",
    button: "show",
    gameFlow: "continue",
  },
];

/* ----------------- Control Game Status ---------------- */
let gameStatus = 0; //Equals index of Game phrases
let gameResultStatus = 0; //control winner control text typping speech

/* ---------------- Check button command ---------------- */
const gameButton = document.getElementById("continue");
gameButton.addEventListener("click", gameFlow);

function checkButton(list, value) {
  if (list[value].button === "show") {
    return (buttonContinue.style.display = "block");
  } else {
    return (buttonContinue.style.display = "none");
  }
}

function gameFlow() {}
