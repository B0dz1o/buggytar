///main screen drawn in canvas
guitarScreen = function() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 70;

  ///background
  context.beginPath();
  context.rect(0, 0, 2 * centerX, 2* centerY);
  context.fillStyle = "grey";
  context.fill();

  ///guitar body (small)
  context.beginPath();
  context.arc(centerX, centerY, 1.3* radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'saddlebrown';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = '#003300';
  context.stroke();

  ///guitar body (big)
  context.beginPath();
  context.arc( 0.6 * centerX, 1.4 * centerY, 2*radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'saddlebrown';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = '#003300';
  context.stroke();

  ///guitar body (hollow)
  context.beginPath();
  context.arc( 0.6 * centerX, 1.4 * centerY, 0.6*radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'black';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = 'brown';
  context.stroke();

  ///guitar neck
  context.save();
  context.translate(canvas.width / 2, canvas.height / 2);
  context.rotate(Math.PI / 4);
  context.fillStyle = 'black';
  context.fillRect(-20, -300, 40, 500);
  for (i = 0 ; i < 35 ; ++i ) {
    context.fillStyle = i%3? 'white' : 'navy';
    context.fillRect(-18 , -300 + 10 * i, 35, 8);
  }
  context.restore();

  glob.stateMachine.statechanged('guitar_loaded');

};
