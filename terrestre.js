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
/*questions.forEach((el, i) => {
    const answers = document.addEventListener(onClick);
    div.className = ' ' + (i + 1);
    div.innerHTML = `
        <h3>${el.question}</h3>
        <buttom>${el.choiceA}</buttom>
        <buttom>${el.choiceB}</buttom>
        <buttom>${el.choiceC}</buttom>
        <buttom>${el.choiceD}</buttom>`
    document.querySelector('#quiz2').appendChild(div)

})*/
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

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const index = parseInt(btn.classList[1])
        const correct = questions[index].correct
        if (btn.innerHTML === correct) {
            correctAnswers++
        }
        document.querySelector(".question.n" + (index + 1)).classList.add("hidden")
    })
})
