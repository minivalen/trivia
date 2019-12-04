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
 {
     question: "¿Cual es el animal (terrestre) mas grande del mundo?",
     imgSrc: "asdf/.png",
     choiceA: "Ballena Azul",
     choiceB: "Rinoceronte",
     choiceC: "Jirafa",
     choiceD: "Elefante",
     correct : "Elefante"
 
 },
 {
     question: "¿Como se llama el insecto de esta foto?",
     imgSrc :"asdf/.png",
     choiceA :"Son ovíparas, nacen de huevos",
     choiceB :"Tienen dientes",
     choiceC :"Son reptiles",
     choiceD :"Tienen caparazon",
     correct : "Tienen dientes"
 
 } 
 ];

 questions.forEach((el, i) => {
    const div = document.createElement('div');
    div.className = 'question ' + (i + 1);
    div.innerHTML = `
        <h3>${el.question}</h3>
        <span>${el.choiceA}</span>
        <span>${el.choiceB}</span>
        <span>${el.choiceC}</span>
        <span>${el.choiceD}</span>`
    document.querySelector('#quiz2').appendChild(div)
})
//<div id="results"> </div>