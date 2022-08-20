const title = document.querySelector(".title");
const author = document.querySelector(".author");
const description = document.querySelector(".description");
const container = document.querySelector('.news')

var url =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2022-08-20&" +
  "sortBy=popularity&" +
  "apiKey=23bfceff9da3444bb8ccb0baa856381c";

var req = new Request(url);

function fetchNews() {
    fetch(url)
      .then(res=>res.json())
        .then(data=>container.innerHTML = data.articles.map((item) => 
       `<div class="news">
        <h2 class="title">${item.title}</h2>
        <h3 class="author">${item.author}</h3>
        <p class="description">${item.description}</p>
    </div>`))
          
       
}
fetchNews()
