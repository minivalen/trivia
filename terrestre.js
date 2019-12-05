let questions = [
  {
    question: "¿Que pájaro pone el huevo más pequeño?",

    choiceA: "Turpial",
    choiceB: "Avestruz",
    choiceC: "Colibrí",
    choiceD: "Gallina",
    correct: "Colibri"
  },
  {
    question: "¿Cuál de estos animales finge estar muerto?",
    imgSrc: "asdf/.png",
    choiceA: "Zarihueya",
    choiceB: "Perro",
    choiceC: "Raton",
    choiceD: "Lagartija",
    correct: "Zarihueya"
  },
  {
    question:
      "¿Para cuál de estos animales es físicamente imposible mirar hacia arriba?",
    imgSrc: "asdf/.png",
    choiceA: "Jirafa",
    choiceB: "Cerdo",
    choiceC: "Gaviota",
    choiceD: "Vaca",
    correct: "Cerdo"
  }
];

questions.forEach((el, i) => {
  const div = document.createElement("div");
  div.className = "question n" + (i + 1);
  div.innerHTML = `
        <h3>${el.question}</h3>
        <button class= "btn ${i}">${el.choiceA}</button>
        <button class= "btn ${i}">${el.choiceB}</button>
        <button class= "btn ${i}">${el.choiceC}</button>
        <button class= "btn ${i}">${el.choiceD}</button>`;
  document.querySelector("#quiz2").appendChild(div);
});
let correctAnswers = 0;

let answersQuestions = 0;

let seeResults = 0;

const results = document.getElementById("results");

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const index = parseInt(btn.classList[1]);
    const correct = questions[index].correct;
    answersQuestions++;

    if (btn.innerHTML === correct) {
      correctAnswers++;
    }
    if (answersQuestions == questions.length) {
      results.classList.remove("hidden");
    }

    results.innerHTML = `
    <div class="results-box"> 
    <h3>¡Felicidades! Tuviste  ${correctAnswers} respuestas correctas </h3> </br>
    <span>Respuestas correctas: </span> </br>
    <span>${questions[0].question} ${questions[0].correct}</span> </br>
    <span>${questions[1].question} ${questions[1].correct}</span> </br>
    <span>${questions[2].question} ${questions[2].correct}</span>
    </div>
    <button class="btn final">Volver a Jugar</button>
    `;
    // btn for playing again
    results.querySelector('.btn.final').addEventListener('click', () => {
        document.location.href = './index.html'
    }) 

    document.querySelector(".question.n" + (index + 1)).classList.add("hidden");
  });
});

