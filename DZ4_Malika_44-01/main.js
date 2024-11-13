

//homework
//1
const btnPlus = document.querySelector('.increment');
const btnMinus = document.querySelector('.decrement');
const counterResult = document.querySelector('.counter');
let counter = 0;

btnPlus.addEventListener('click', (e) => {
    counter++;
    counterResult.innerHTML = counter
    counterResult.style.color = 'green'
})
btnMinus.addEventListener('click', (e) => {
    if (counter>0){
        counter--;
        counterResult.innerHTML = counter
        counterResult.style.color = 'red'
    }
})
counterResult.innerHTML = counter

//2
const parents = document.querySelector('.wrapper');
const positionChild  = document.querySelector('.cordinat');
parents.addEventListener('mousemove', (e) => {
    const x = event.offsetX;
    const y = event.offsetY;
    positionChild.textContent = `X: ${x} , Y: ${y}`;
})

//3

const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

const colorTrafficChange = (color) => {
    red.classList.remove('active');
    yellow.classList.remove('active');
    green.classList.remove('active');

    if(color.toLowerCase() === 'красный'){
        red.classList.add('active');
        alert('STOP')
    }else if(color.toLowerCase() === 'желтый'){
        yellow.classList.add('active');
        alert('WAIT')
    }else if(color.toLowerCase() === 'зеленый'){
        green.classList.add('active');
        alert('GO')
    }else{
        console.log('Не правильный цвет')
    }
}
const writeColor = prompt('Введите цвет светофора (Красный, Желтый, Зеленый)')
colorTrafficChange(writeColor)