/** las preguntas */

let questions = [
  {
    question: "¿Cuál de los siguientes animales marinos no es mamífero?",

    choiceA: "Ballena",
    choiceB: "Delfin",
    choiceC: "Tiburón",
    choiceD: "Foca",
    correct: "Tiburón"
  },
  {
    question: "¿Qué animal marino tiene veneno en sus tentáculos?",
    imgSrc: "asdf/.png",
    choiceA: "Medusa",
    choiceB: "Pulpo",
    choiceC: "Calamar",
    choiceD: "Estrella de mar",
    correct: "Medusa"
  },
  {
    question:
      "¿Cómo se llaman los órganos mediante los cuales respiran los peces?",
    imgSrc: "asdf/.png",
    choiceA: "Pulmones",
    choiceB: "Escamas",
    choiceC: "Aletas",
    choiceD: "Branquias",
    correct: "Branquias"
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
      </div>`;

    document.querySelector(".question.n" + (index + 1)).classList.add("hidden");
  });
});
