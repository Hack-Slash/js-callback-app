function changeColors() {
  var firstOne = document.getElementById('first');
  firstOne.style.color = 'red';
  setTimeout(function() {
    var secondOne = document.getElementById('second');
    secondOne.style.color = 'blue';
    setTimeout(function() {
      var thirdOne = document.getElementById('third');
      thirdOne.style.color = 'green';
      setTimeout(function() {
      var fourthOne = document.getElementById('fourth');
      fourthOne.style.color = 'orange';

      }, 2000)
    }, 2000)
  }, 2000);

  setInterval(function() {
    document.querySelector('body').style['background-color'] = getRandomColor();
  }, 1000);
}

    function getRandomColor() {
     var letters = '0123456789ABCDEF';
     var color = '#';
     for (var i = 0; i < 6; i++ ) {
       color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
   }
