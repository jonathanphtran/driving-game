var $car = document.querySelector('.car');
var $body = document.querySelector('body');
var $carContainer = document.querySelector('.carContainer');
var carStarted = false;
var intervalId;
var movePixelR = 0;
var movePixelD = 0;

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
  if ($car.className === 'car' && movePixelR < window.innerWidth - 160) {
    movePixelR += 5;
    $carContainer.style.left = `${movePixelR}px`;
  } else if ($car.className === 'car rotateDown' && movePixelD < window.innerHeight - 160) {
    movePixelD += 5;
    $carContainer.style.top = `${movePixelD}px`;
  } else if ($car.className === 'car rotateLeft' && movePixelR > 0) {
    movePixelR -= 5;
    $carContainer.style.left = `${movePixelR}px`;
  } else if ($car.className === 'car rotateUp' && movePixelD > 0) {
    movePixelD -= 5;
    $carContainer.style.top = `${movePixelD}px`;
  }
  if (movePixelR < 0 || movePixelD < 0 || movePixelR > window.innerWidth - 160 || movePixelD > window.innerHeight - 160) {
    clearInterval(intervalId);
    carStarted = false;
  }
}

function startOrStopCar(e) {
  if (e.code === 'Space' && carStarted === false) {
    intervalId = setInterval(moveCar, 16);
    carStarted = true;
  } else if (e.code === 'Space' && carStarted === true) {
    clearInterval(intervalId);
    carStarted = false;
  }
}

$body.addEventListener('keydown', rotate);
$body.addEventListener('keydown', startOrStopCar);
