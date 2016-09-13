if(typeof glob === 'undefined'){
  glob = {};
}
glob.stateMachine = {
  state: '',
  statechanged: function(newState) {
    state = newState;
    switch(newState) {
      case 'welcome_loaded':
        startButton();
        break;
      case 'guitar_loaded':
        console.log('gitara');
        play();
      default:
        break;
    }
  }
}

var startButton = function(){
  var canvas = document.getElementById('mainCanvas');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var listener = function (event) {
    if (event.pageY > 1.7 * centerY &&
      event.pageY < 1.95 * centerY &&
      event.pageX > 0.4 * centerX &&
      event.pageX < 1.6 * centerX) {
        canvas.removeEventListener('click', listener);
        guitarScreen();
    }
  };
  canvas.addEventListener('click', listener);
};

var guitarscrVC = {
  button: function(num, color) {
      i = num;
      context.beginPath()
      context.rect(0.4* i * centerX, 1.9 * centerY,0.4 * centerX, 0.1 * centerY);
      context.fillStyle = color || 'white';
      context.strokeStyle = 'grey';
      context.fill();
      context.stroke();
    },
    drawButtons: function() {
      for (i = 0 ; i < 5; ++i) {
        guitarscrVC.button(i, 'white');
      }
    }
}

var play = function(){
  var canvas = document.getElementById('mainCanvas');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var listener = function(event){
    if (event.pageY > 1.9 * centerY) {
      var butNum = Math.floor(event.pageX / (0.4 * centerX));
      guitarscrVC.button(butNum,'green');
    }
  };
  canvas.addEventListener('click', listener);
  console.log('tutaj');
  chooseSongs();
};

var chooseSongs = function() {
  count = songs.length;
  var ind = Math.floor(Math.random() * count);
  var ind2 = ind;
  for(; ind2 === ind; ) {
    ind2 = Math.floor(Math.random() * count);
  }
  var song1 = songs[ind];
  var song2 = songs[ind2];
  playNotes(song1.notes, song1.tempo);
  playNotes(song2.notes, song2.tempo);
}

welcomeScreen();
