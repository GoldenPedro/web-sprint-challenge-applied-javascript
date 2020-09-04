// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios'

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then( response => {
        console.log(response.data)
    })
    .catch( err => {
        debugger
    })

const cardsContainerDiv = document.querySelector('.cards-container')

function cardMaker(object) {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')
    cardsContainerDiv.appendChild(cardDiv)

    const headlineDiv = document.createElement('div')
    headlineDiv.classList.add('headline')
    headlineDiv.textContent = object
    cardDiv.appendChild(headlineDiv)

    const authorDiv = document.createElement('div')
    authorDiv.classList.add('author')
    cardDiv.appendChild(authorDiv)

    const imageContainerDiv = document.createElement('div')
    imageContainerDiv.classList.add('img-container')
    authorDiv.appendChild(imageContainerDiv)

    const authorImage = document.createElement('img')
    authorImage.setAttribute('src', object.authorPhoto)
    imageContainerDiv.appendChild(authorImage)

    const authorNameSpan = document.createElement('span')
    authorNameSpan.textContent = `By: ${object.authorName}`
    authorDiv.appendChild(authorNameSpan)

}


cardMaker()