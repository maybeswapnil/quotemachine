import React from 'react';
import './App.css';
var dataset = [];
var quote = [];
var author = [];
const request = new XMLHttpRequest();
request.open("GET", "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", true)
request.onload = () => {
    dataset = JSON.parse(request.responseText).quotes;
    quote = dataset.map((e)=>(e.quote)).filter((j)=>(j.length<90));
    author = dataset.map((e)=>(e.author));
    App();
}
request.send();

function App() {
  var f = 0; 
  f = Math.floor(Math.random()*10)
  console.log(quote[f]);
  console.log(author[f]);
  return (
    <div>
      <p>{quote[f]}</p>
      <p id="writer">~{author[f]}</p>
    </div>
  );
}

export default App;
