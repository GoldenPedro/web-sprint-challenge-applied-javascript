// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container')

function Header() {
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('header')
    headerContainer.appendChild(headerDiv)

    const dateSpan = document.createElement('span')
    dateSpan.classList.add('date')
    dateSpan.textContent = 'MARCH 28, 2020'
    headerDiv.appendChild(dateSpan)

    const title = document.createElement('h1')
    title.textContent = 'Lambda Times'
    headerDiv.appendChild(title)

    const tempSpan = document.createElement('span')
    tempSpan.textContent = '98°'
    headerDiv.appendChild(tempSpan)

    return headerDiv

}

Header()