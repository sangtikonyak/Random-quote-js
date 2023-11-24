const api = 'https://api.quotable.io/random'
const content = document.getElementById('quote-content');
const author = document.getElementById('author');

async function getQuote(url){
    const response = await fetch(url)
    const data = await response.json()
    content.innerHTML = data.content;
    author.innerHTML =  data.author;
}

// getQuote(api)

window.addEventListener('load',()=>{
    getQuote(api)
})

document.getElementById('getQuoteBtn').addEventListener('click',()=>{
    getQuote(api)
})

