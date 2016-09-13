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
        play();
        break;
      case 'new_songs':
        play();
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

var guitarscrVC = {
  button: function(num, color) {
      var canvas = document.getElementById('mainCanvas');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var context = canvas.getContext('2d');
      i = num;
      context.beginPath()
      context.rect(0.5* i * centerX, 1.9 * centerY,0.5 * centerX, 0.1 * centerY);
      context.fillStyle = color || 'white';
      context.strokeStyle = 'grey';
      context.fill();
      context.stroke();
    },
    drawButtons: function() {
      for (i = 0 ; i < 4; ++i) {
        guitarscrVC.button(i, 'white');
      }
    }
}

pressed = 0;
selected = -1;

var play = function(){
  var canvas = document.getElementById('mainCanvas');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  guitarscrVC.drawButtons();
  var listener = function(event){
    if (event.pageY > 1.9 * centerY) {
      var butNum = Math.floor(event.pageX / (0.5 * centerX));
      var chosenSong = songs[btns[butNum]];
      if (btns[butNum] === selected){
        return;
      } else if (pressed === 0){
        selected = btns[butNum];
        pressed += 1;
        var color = (chosenSong.title === song1.title || chosenSong.title === song2.title) ? 'green' : 'red';
        guitarscrVC.button(butNum,color);
        showTitles(songs[btns[butNum]].title, butNum);
      } else if (pressed === 1) {
        pressed = 0;
        selected = -1;
        var color = (chosenSong.title === song1.title || chosenSong.title === song2.title) ? 'green' : 'red';
        guitarscrVC.button(butNum,color);
        showTitles(songs[btns[butNum]].title, butNum);
        seq1.stop();
        seq2.stop();
        setTimeout(function(){
          glob.stateMachine.statechanged('new_songs');
        }, 1000);
      }
    }
  };
  canvas.addEventListener('click', listener);
  chooseSongs();
};

var shuffle = function(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
  }
};

var showTitles = function(title, index) {
  var canvas = document.getElementById('mainCanvas');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var context = canvas.getContext('2d');
  context.font = '14px Gill Sans Extrabold fantasy';
  context.fillStyle = 'black';
  context.fillText(title , 0.5 * index * centerX + 0.05 * centerX , 1.98 * centerY, 0.4 * centerX);
}

var chooseSongs = function() {
  count = songs.length;
  var ind1 = Math.floor(Math.random() * count);
  var ind2 = ind1;
  for(; ind2 === ind1; ) {
    ind2 = Math.floor(Math.random() * count);
  }
  var ind3 = ind1, ind4 = ind1;
  for(; [ind1, ind2].indexOf(ind3) !== -1 ; ) {
    ind3 = Math.floor(Math.random() * count);
  }
  for(; [ind1, ind2, ind3].indexOf(ind4) !== -1; ) {
    ind4 = Math.floor(Math.random() * count);
  }
  song1 = songs[ind1];
  song2 = songs[ind2];
  seq1 = playNotes(song1.notes, song1.tempo);
  seq2 = playNotes(song2.notes, song2.tempo, 0.2);
  btns = [ind1, ind2, ind3, ind4];
  shuffle(btns);
  for (i = 0; i < 4; ++i) {
    showTitles(songs[btns[i]].title, i);
  }
};

welcomeScreen();
