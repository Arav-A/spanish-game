function resizeGame() {
  var gameArea = document.getElementById('mycanvas');
  var widthToHeight = 16 / 9;
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;
  var newWidthToHeight = newWidth / newHeight;

  if (newWidthToHeight > widthToHeight) {
      newWidth = newHeight * widthToHeight;
      gameArea.style.height = newHeight + 'px';
      gameArea.style.width = newWidth + 'px';
  } else {
      newHeight = newWidth / widthToHeight;
      gameArea.style.width = newWidth + 'px';
      gameArea.style.height = newHeight + 'px';
  }

  //gameArea.style.marginTop = (-newHeight / 2) + 'px';
  //gameArea.style.marginLeft = (-newWidth / 2) + 'px';

  /*var gameCanvas = document.getElementById('mycanvas');
  gameCanvas.width = newWidth;
  gameCanvas.height = newHeight;*/
}

window.addEventListener('resize', resizeGame, false);
window.addEventListener('orientationchange', resizeGame, false);

//document.body.addEventListener('load', resizeGame);
