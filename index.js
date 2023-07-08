// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = '<h1>Search book</h1>';
var appTxt = document.getElementById('search');
const appRes = document.getElementById('result');

var arr = [
  { autore: 'manzoni', titolo: 'promessi sposi' },
  { autore: 'virgilio', titolo: 'eneide' },
  { autore: 'tolkien', titolo: 'the lord of the rings' },
];


function something() {
  appRes.innerHTML = '';
  
  arr.forEach((element) => {
    if (element.titolo.search(appTxt.value) != -1)
      appRes.innerHTML +=
        '<br>Autore: ' + element.autore + '  Titolo: ' + element.titolo;
  });
  if (appTxt.value.length == 0) appRes.innerHTML = '';
}

appTxt.onkeyup = something;
