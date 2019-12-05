/** las preguntas */

let questions = [

    {
     question: "¿Cuál de los siguientes animales marinos no es mamífero?",
 
     choiceA :"Ballena",
     choiceB :"Delfin",
     choiceC :"Tiburón",
     choiceD :"Foca",
     correct :"Tiburón"
 
 },
    {
     question: "¿Qué animal marino tiene veneno en sus tentáculos?",
     imgSrc: "asdf/.png",
     choiceA : "Medusa",
     choiceB : "Pulpo",
     choiceC : "Calamar",
     choiceD : "Estrella de mar",
     correct : "Medusa"
 
 },
 {
     question: "¿Cómo se llaman los órganos mediante los cuales respiran los peces?",
     imgSrc: "asdf/.png",
     choiceA: "Pulmones",
     choiceB: "Escamas",
     choiceC: "Aletas",
     choiceD: "Branquias",
     correct : "Branquias"
 
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

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const index = parseInt(btn.classList[1])
        const correct = questions[index].correct
        if (btn.innerHTML === correct) {
            correctAnswers++
        }
        console.log(document.querySelector(".question.n" + (index + 1)))
        document.querySelector(".question.n" + (index + 1)).classList.add("hidden")
    })
})


