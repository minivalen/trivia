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
     question: "¿Cómo se llama la aleta que sirve para que el animal mantenga el equilibrio?",
     imgSrc: "asdf/.png",
     choiceA: "Aleta caudal",
     choiceB: "Aleta dorsal",
     choiceC: "Aleta ventral",
     choiceD:"Aleta pectoral",
     correct : "Aleta dorsal"
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
 {
     question: "¿Cuál de estas frases sobre las tortugas marinas es falsa?",
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