let questions = [

    {
     question: "¿Que pajaro pone el huevo mas peque;o?",
 
     choiceA :"Turpial",
     choiceB :"Avestruz",
     choiceC :"Colibri",
     choiceD :"Gallina",
     correct :"Colibri"
 
 },
    {
     question: "¿Cual de estos animales finge estar muerto?",
     imgSrc: "asdf/.png",
     choiceA : "Zarihueya",
     choiceB : "Perro",
     choiceC : "Raton",
     choiceD : "Lagartija",
     correct : "Zarihueya"
 
 },
 {
     question: "¿Para cual de estos animales es fisicamente imposible mirar hacia arriba?",
     imgSrc: "asdf/.png",
     choiceA: "Jirafa",
     choiceB: "Cerdo",
     choiceC: "Gaviota",
     choiceD:"Vaca",
     correct : "Cerdo"
 },
 ];

questions.forEach((el, i) => {
    const div = document.createElement('div');
    div.className = 'question n' + (i + 1);
    div.innerHTML = `
        <h3>${el.question}</h3>
        <button class= "btn ${i}">${el.choiceA}</button>
        <button class= "btn ${i}">${el.choiceB}</button>
        <button class= "btn ${i}">${el.choiceC}</button>
        <button class= "btn ${i}">${el.choiceD}</button>`
    document.querySelector('#quiz2').appendChild(div)
})
let correctAnswers = 0;

let answersQuestions = 0;


const score = document.getElementById("score");

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const index = parseInt(btn.classList[1])
        const correct = questions[index].correct
        if (btn.innerHTML === correct) {
            correctAnswers++
        }
        answersQuestions++
        
        document.querySelector(".question.n" + (index + 1)).classList.add("hidden")
        score.innerHTML = `has acumulado ${answersQuestions} puntos` 

    })
})
 
console.log(questions.length);



