/* global $ */
// function changeColors() {
//   var firstOne = document.getElementById('first');
//   firstOne.style.color = 'red';
//   setTimeout(function() {
//     var secondOne = document.getElementById('second');
//     secondOne.style.color = 'blue';
//     setTimeout(function() {
//       var thirdOne = document.getElementById('third');
//       thirdOne.style.color = 'green';
//       setTimeout(function() {
//         var fourthOne = document.getElementById('fourth');
//         fourthOne.style.color = 'orange';
//       }, 2000)
//     }, 2000)
//   }, 2000);

//   setInterval(function() {
//     document.querySelector('body').style['background-color'] = getRandomColor();
//   }, 1000);
// }

//     function getRandomColor() {
//      var letters = '0123456789ABCDEF';
//      var color = '#';
//      for (var i = 0; i < 6; i++ ) {
//        color += letters[Math.floor(Math.random() * 16)];
//      }
//      return color;
//    }
function getData() {
  var divEmployees = document.getElementById('markets');
  divEmployees.innerHTML = 'loading...';
  $.get("https://data.cityofnewyork.us/resource/cdpt-29ur.json").done(
    function(response) {
      // console.log(response);
      var contentString = '';
      for (var i = 0; i < response.length; i++) {
        contentString += "<div onclick='changeMarket(this)'>";
        contentString += '<h5 onclick="hideData(this)">' + response[i].market_name + '</h5>';
        contentString += '<div class="info">';
        contentString += '<p>' + response[i].borough + '</p>';
        contentString += '<p>' + response[i].day_s + '</p>';
        contentString += '<p>' + response[i].hours + '</p>';
        contentString += '</div>';
        contentString += '</div>';
        contentString += '<hr>';
      }
      divEmployees.innerHTML = contentString;
    }
  );
}

function changeMarket(theMarket) {
  console.log('I changed the market');

  if (theMarket.style.color === 'lightgray') {
    theMarket.style.color = 'black';
  } else {
    theMarket.style.color = 'lightgray';
  }
}

function hideData(theHeader) {

  // theHeader.parentElement.children[1].style.display = 'none';
  console.log('hiding the data');

  if (theHeader.parentElement.children[1].style.display === 'none') {
    theHeader.parentElement.children[1].style.display = 'block';
  } else {
    theHeader.parentElement.children[1].style.display = 'none';
  }
}

