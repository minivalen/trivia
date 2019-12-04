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

 questions.forEach((el, index) => {
    const div = document.createElement('div');
    div.className = 'question ' + (index + 1);
    div.innerHTML = `
        <h3>${el.question}</h3>
        <button>${el.choiceA}</button>
        <button>${el.choiceB}</button>
        <button>${el.choiceC}</button>
        <button>${el.choiceD}</button>`
    document.querySelector('#quiz2').appendChild(div)
})
/*const scoreContainer (){

}*/
/*const results (questions) {
        if (answers === true) {
          return scoreContainer +1;
        }
    
      };
      
  */  

