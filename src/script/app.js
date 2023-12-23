const btnNode = document.querySelector('.btn');
const textTime = document.querySelector('.text');
const btnReset = document.querySelector('.btn_reset');
// функция рэндом перемещения мячика
function randomPlace() {
  btnNode.style.left = Math.round(Math.random() * 85) + 'dvw';
  btnNode.style.top = Math.round(Math.random() * 95) + 'dvh';
  btnNode.style.right = Math.round(Math.random() * 95) + 'dvw';
  btnNode.style.bottom = Math.round(Math.random() * 95) + 'dvh';
}
let arrTime = [];
let middleTime = [];
// функция записи времени
function getTime() {
  const time = Date.now();
  arrTime.push(time);
  let timeClick = arrTime[arrTime.length - 1] - arrTime[arrTime.length - 2];
  if (timeClick) {
    middleTime.push(timeClick);
  }
  const midTime =
    middleTime.reduce((acc, el) => acc + el, 0) / middleTime.length;
  console.log(midTime);
  createCard(timeClick, midTime);
}
// функция записи времени в тег P
function createCard(timeClick, midTime) {
  const card = document.createElement('p');
  card.className = 'text__time';
  if (timeClick > midTime) {
    card.style.color = 'red';
  } else {
    card.style.color = 'green';
  }
  if (timeClick) {
    card.textContent = `${timeClick} ms`;
  } else {
    card.textContent = '0 ms';
  }
  btnReset.style.display = 'block';
  btnReset.addEventListener('click', () => {
    resetTime();
    textTime.textContent = '';
    randomPlace();
    btnReset.style.display = 'none';
  });
  renderCard(card);
}
// фнукция апенда в тег Див класс text
function renderCard(card) {
  textTime.append(card);
}

// функция ресета времени тег P
function resetTime() {
  arrTime = [];
  middleTime = [];
}

//  кнопка по клику мячика
btnNode.addEventListener('click', () => {
  randomPlace();
  getTime();
});
