/* -------------------- Game phrases -------------------- */
const speech = [
  {
    id: 0,
    text: "... ... ... ... ...",
  },
  {
    id: 1,
    text: "Então você quer se tornar o novo Gangster de Las Vegas?",
  },
];

/* -------------------- Speech speed -------------------- */
const speed = 50; //in milliseconds

/* ------------------- Typping effect ------------------- */
let count = 0;

function typeWriter() {
  if (count < speech[1].text.length) {
    document.getElementById("bad-guy-speek").innerHTML += speech[1].text[count];
    count++;
    setTimeout(typeWriter, speed);
  }
}
