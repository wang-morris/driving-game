// data model for car direction

var $img = document.createElement('img');
$img.className = 'right';
$img.setAttribute('src', 'https://www.pinclipart.com/picdir/big/15-154414_car-transparent-background-top-view-clipart.png');
var x = 5;
$img.style.position = 'absolute';

var $carContainer = document.querySelector('.car-container');
$carContainer.append($img);

document.addEventListener('keydown', arrowClick);
function arrowClick(e) {
  var previous = document.querySelector('img');
  previous.replaceWith($img);
  if (e.keyCode === 38) {
    $img.className = 'up';
  } else if (e.keyCode === 40) {
    $img.className = 'down';
  } else if (e.keyCode === 37) {
    $img.className = 'left';
  } else if (e.keyCode === 39) {
    $img.className = 'right';
  }
}

// user can start car

document.addEventListener('keydown', startCar);
function startCar(e) {
  if (e.keyCode === 32) {
    setInterval(movingCar, 16);
  }
}

function movingCar() {
  x += 5;
  $img.style.left = x + 'px';
}
