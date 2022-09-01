// data model for car direction

var $direction = document.createElement('img');
$direction.className = 'right';
$direction.setAttribute('src', 'https://www.pinclipart.com/picdir/big/15-154414_car-transparent-background-top-view-clipart.png');

var $carContainer = document.querySelector('.car-container');
$carContainer.append($direction);

document.addEventListener('keydown', arrowClick);
function arrowClick(e) {
  var previous = document.querySelector('img');
  previous.replaceWith($direction);
  if (e.keyCode === 38) {
    $direction.className = 'up';
  } else if (e.keyCode === 40) {
    $direction.className = 'down';
  } else if (e.keyCode === 37) {
    $direction.className = 'left';
  } else if (e.keyCode === 39) {
    $direction.className = 'right';
  }
}
