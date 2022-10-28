const btnNft = document.getElementById('btnnft');
const btnAi = document.getElementById('btnai');

// let image = '';

var images = [
  'images/ai/ai(1).png',

  'images/nft/nft (1).png',
  'images/nft/nft (2).png',
  'images/nft/nft (3).png',
  'images/nft/nft (4).png',
  'images/nft/nft (5).png',
  'images/nft/nft (6).png',
  'images/nft/nft (7).png',
  'images/nft/nft (8).png',
  'images/nft/nft (9).png',
  'images/nft/nft (10).png',
  'images/nft/nft (11).png',
  'images/nft/nft (12).png',
  'images/nft/nft (13).png',

  'images/nft/nft (2).jpg',
  'images/nft/nft (3).jpg',
  'images/nft/nft (4).jpg',
  'images/nft/nft (5).jpg',
  'images/nft/nft (6).jpg',
  'images/nft/nft (7).jpg',
  'images/nft/nft (8).jpg',
  'images/nft/nft (9).jpg',
  'images/nft/nft (10).jpg',
  'images/nft/nft (11).jpg',
  'images/nft/nft (12).jpg',
  'images/nft/nft (13).jpg',
  'images/nft/nft (14).jpg',
  'images/nft/nft (15).jpg',
  'images/nft/nft (16).jpg',
  'images/nft/nft (17).jpg',
  'images/nft/nft (18).jpg',
  'images/nft/nft (19).jpg',
  'images/nft/nft (20).jpg',
  'images/nft/nft (21).jpg',
  'images/nft/nft (22).jpg',
  'images/nft/nft (23).jpg',
  'images/nft/nft (24).jpg',
  'images/nft/nft (25).jpg',
  'images/nft/nft (26).jpg',
  'images/nft/nft (27).jpg',

  'images/nft/nft (1).avif',
  'images/nft/nft (2).avif',
  'images/nft/nft (3).avif',
  'images/nft/nft (4).avif',
  'images/nft/nft (5).avif',
  'images/nft/nft (6).avif',
  'images/nft/nft (7).avif',
  'images/nft/nft (8).avif',
  'images/nft/nft (9).avif',

  'images/ai/ai(2).png',
  'images/ai/ai(3).png',
  'images/ai/ai(4).png',
  'images/ai/ai(5).png',
  'images/ai/ai(6).png',
  'images/ai/ai(7).png',
  'images/ai/ai(8).png',
  'images/ai/ai(9).png',
  'images/ai/ai(10).png',
  'images/ai/ai(11).png',
  'images/ai/ai(12).png',
  'images/ai/ai(13).png',
  'images/ai/ai(14).png',
  'images/ai/ai(15).png',
  'images/ai/ai(16).png',
  'images/ai/ai(17).png',
  'images/ai/ai(18).png',
  'images/ai/ai(19).png',
  'images/ai/ai(20).png',
  'images/ai/ai(21).png',
  'images/ai/ai(22).png',
  'images/ai/ai(23).png',
  'images/ai/ai(24).png',
  'images/ai/ai(25).png',
  'images/ai/ai(26).png',
  'images/ai/ai(27).png',
  'images/ai/ai(28).png',
  'images/ai/ai(29).png',
  'images/ai/ai(30).png',
  'images/ai/ai(31).png',
  'images/ai/ai(32).png',
  'images/ai/ai(33).png',
  'images/ai/ai(34).png',
  'images/ai/ai(35).png',
  'images/ai/ai(36).png',
  'images/ai/ai(37).png',
];
let i = 0;

// console.log(images.length);

let type = document.getElementById('type');
var imgsrc = document.getElementById('img').getAttribute('src');
let score = 0;
type.textContent = 'Score:  ';

window.addEventListener('load', function () {
  i = Math.floor(Math.random() * images.length);
  img.src = images[i];
});

const modal = document.querySelector('.modal-overlay');
let modalText = document.getElementById('modaltext');

function modalSays() {
  if (score >= 1 && score <= 4) {
    modalText.textContent =
      'Good try! But try getting better next time. Hold this L';
  } else if (score >= 5 && score <= 10) {
    modalText.textContent =
      'You are getting better! But still took an L very sad :(';
  } else if (score >= 11) {
    modalText.textContent =
      'Impressive! You are good at this and still lost! Take the L and find something else to do';
  }
}

var timer = document.querySelector('.timer'); //select timer in HTML
var counter = 10;

function timerStart() {
  var interval = setInterval(() => {
    timer.innerHTML = counter + 's';
    if (counter < 1) {
      // the timer has reached zero or game Over
      timer.innerHTML = '0 seconds left';
      clearInterval(interval);
      modal.classList.add('open-modal');
    } else {
      counter--;
    }
  }, 700);
}

//starts the timer, comment out to stop timer at the beggining of game
timerStart();

btnAi.addEventListener('click', function () {
  // let type = document.getElementById('type');
  var imgsrc = document.getElementById('img').getAttribute('src');
  // type.textContent = imgsrc;

  modalSays();

  if (imgsrc.includes('ai')) {
    score++;
    type.textContent = 'Score: ' + score;
    document.body.style.backgroundColor = '#2ecc71';
    counter = 10;

    i = Math.floor(Math.random() * images.length);
    img.src = images[i];
    setTimeout(() => {
      document.body.style.backgroundColor = '#eaf0f1';
    }, 400);
  } else {
    document.body.style.backgroundColor = '#a83636';
    setTimeout(() => {
      modal.classList.add('open-modal');
    }, 300);

    setTimeout(() => {
      document.body.style.backgroundColor = '#eaf0f1';
    }, 400);
  }
});

btnNft.addEventListener('click', function () {
  // let type = document.getElementById('type');
  var imgsrc = document.getElementById('img').getAttribute('src');
  // type.textContent = imgsrc;
  modalSays();

  if (imgsrc.includes('nft')) {
    score++;
    type.textContent = 'Score: ' + score;
    document.body.style.backgroundColor = '#2ecc71';
    counter = 10;

    i = Math.floor(Math.random() * images.length);
    img.src = images[i];
    setTimeout(() => {
      document.body.style.backgroundColor = '#eaf0f1';
    }, 400);
  } else {
    document.body.style.backgroundColor = '#a83636';
    setTimeout(() => {
      modal.classList.add('open-modal');
    }, 300);

    setTimeout(() => {
      document.body.style.backgroundColor = '#eaf0f1';
    }, 400);
  }
});

// if (imgsrc.includes('ai')) {
//   document.body.style.backgroundColor = '#36a83a';
// }

// //   // get random number between 0 - 3
//   const randomNumber = getRandomNumber();
// // generate random number
// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
