// http://api.icndb.com/jokes/random

document.getElementById('hit-me-button').addEventListener('click', loadJoke);

// Load Chucky joke
function loadJoke(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET','http://api.icndb.com/jokes/random', true);

  xhr.onload = function() {
    if (this.status == 200){
      console.log(this.responseText);
    }
  }
  xhr.send();
}
