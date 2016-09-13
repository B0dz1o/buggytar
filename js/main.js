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


welcomeScreen();
