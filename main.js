var $car = document.querySelector('.car');
var $body = document.querySelector('body');
var $carContainer = document.querySelector('.carContainer');
var movePixel = 0;

function rotate(e) {
  if (e.code === 'ArrowDown') {
    $car.className = 'car rotateDown';
  } else if (e.code === 'ArrowLeft') {
    $car.className = 'car rotateLeft';
  } else if (e.code === 'ArrowUp') {
    $car.className = 'car rotateUp';
  } else if (e.code === 'ArrowRight') {
    $car.className = 'car';
  }
}

function moveCar(e) {
  if (movePixel > 1000) return;
  movePixel += 5;
  $carContainer.style.left = `${movePixel}px`;
}

function startCar(e) {
  if (e.code === 'Space') {
    setInterval(moveCar, 16);
  }
}

$body.addEventListener('keydown', rotate);
$body.addEventListener('keydown', startCar);
