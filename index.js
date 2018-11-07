const list = document.querySelector('.jokes');

document.querySelector('.get-jokes').addEventListener('click', getJokes);
document.querySelector('.clear-jokes').addEventListener('click', cleartJokes);

function getJokes(e) {
  document.getElementById('spinner').style.display = 'block'
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"

  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', `${proxyUrl}https://api.chucknorris.io/jokes/random`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const joke = JSON.parse(this.responseText);
      displayJoke(joke);
    }
    document.getElementById('spinner').style.display = 'none'
  }

  xhr.send();

  e.preventDefault();
}

function displayJoke(data) {
  const item = document.createElement('li');
  item.innerHTML = `${data.value}<hr>`;
  list.appendChild(item);
}

function cleartJokes() {
  list.innerHTML = ''
}