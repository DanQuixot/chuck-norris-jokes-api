

document.getElementById('hit-me-button').addEventListener('click', loadJoke);

// Load Chucky joke
function loadJoke(){
  let xhr = new XMLHttpRequest();
  xhr.open('GET','http://api.icndb.com/jokes/random', true);

  xhr.onload = function() {
    if (this.status == 200){
      let jokesObject = JSON.parse(this.responseText);

      document.getElementById('jokes-paragraph').innerHTML = jokesObject.value.joke;
    }
    
  }
  xhr.send();
}
