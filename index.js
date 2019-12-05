//pedimos el nombre
const name = prompt("Introduce tu nombre");
// display topic buttons
document.querySelector("#topics").classList.remove("hidden");
// display welcome message
document.querySelector(
  "#start"
).innerHTML = `¡Bienvenid@ ${name}!, escoge un tema para comenzar a jugar :)`;
const topicA = document.querySelector("#topicA");
const topicB = document.querySelector("#topicB");
topicA.addEventListener("click", () => {
  document.location.href = "./marine.html";
});
topicB.addEventListener("click", () => {
  document.location.href = "./terrestre.html";
});
