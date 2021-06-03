var $car = document.querySelector('.car');
var $body = document.querySelector('body');

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

$body.addEventListener('keydown', rotate);
