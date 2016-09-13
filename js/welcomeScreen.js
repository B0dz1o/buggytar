///main screen drawn in canvas
var welcomeScreen = function() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;

  context.font = '48px Gill Sans Extrabold fantasy';
  context.fillText("Can you guess two songs...", 0.3 * centerX, 0.3 * centerY, 1.4 * centerX);
  setTimeout(function() {
    context.fillText("at once?", 0.3 * centerX, 0.6 * centerY, 1.4 * centerX);
  }, 1000);
  setTimeout(function() {
    context.fillText("My buggytar is a little... well", 0.3 * centerX, 0.8 * centerY, 1.4 * centerX);
    context.fillText("buggy. Due to design flaw and", 0.3 * centerX, 1 * centerY, 1.4 * centerX);
    context.fillText("80's technology imperfection,", 0.3 * centerX, 1.2 * centerY, 1.4 * centerX);
    context.fillText("it plays two songs simultaneously.", 0.3 * centerX, 1.4 * centerY, 1.4 * centerX);
    context.fillText("Can you guess all mixins?", 0.3 * centerX, 1.6 * centerY, 1.4 * centerX);

  }, 2000);

  setTimeout(function(){
    context.beginPath()
    context.rect(0.4 * centerX, 1.7 * centerY, 1.2 * centerX, 0.25 * centerY);
    context.fillStyle = 'beige';
    context.strokeStyle = 'grey';
    context.fill();
    context.stroke();
    context.fillStyle = 'black';
    context.fillText("START", 0.8 * centerX, 1.85 * centerY);
    glob.stateMachine.statechanged('welcome_loaded');
  }, 2500);

  ///background
  context.beginPath();
  context.rect(0, 0, 2 * centerX, 2 * centerY);
  context.strokeStyle = "grey";
  context.stroke();

};
