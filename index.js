const name = prompt('Introduce tu nombre');
document.querySelector('#start').innerHTML = `Bienvenid@ ${name}, escoge un tema para comenzar a jugar`;
console.log(name);
const topicA = document.querySelector('#topicA');
const topicB = document.querySelector('#topicB');
topicA.addEventListener('click', () => {
    document.location.href = './marine.html'
});
topicB.addEventListener('click', () => {
    console.log('clickEvent de B')
    document.location.href = './terrestre.html'
})
//mostrar resultados 1 de 5
