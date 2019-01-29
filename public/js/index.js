var loadOneTine = 1;

var waypoint = new Waypoint({
  element: document.getElementById('laBestia'),
  handler: function(direction) {
    if(loadOneTine == 1){
      move("a1", 95);
      move("a2", 80);
      move("a3", 75);
      move("a4", 70);
      move("a5", 65);
      move("a6", 85);
      move("a7", 90);
      move("a8", 50);
      loadOneTine++;
    }
  }
})

  // FUNTION TO MOVE PROGESS BAR
  function move(id,porciento) {
    var elem = document.getElementById(id);
    var width = 1;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= porciento) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  }
