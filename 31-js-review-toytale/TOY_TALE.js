document.addEventListener('DOMContentLoaded', () => {
  // DOM ELEMENTS
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  const toyCollection = document.getElementById('toy-collection')
  // VARIABLES
  let addToy = false
  const toysURL = 'http://localhost:3000/toys'
  // EVENT LISTENERS/FETCHES
  // ************* GIVEN TO US ****************
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
      // submit listener here
    } else {
      toyForm.style.display = 'none'
    }
  })
  // *****************************************
  // INITIAL FETCH TO GET ALL TOYS & THEN APPEND TO THE toyCollection DIV
  // THIS HAPPENS ON PAGE LOAD AND WE ARE INSIDE DOMContentLoaded
  fetch(toysURL, { method: 'GET' }) // default is get but i like to write it to be explicit
    .then(r => r.json())
    .then(arrayOfToyObjects => {
      // append the arrayOfToyObjects to the toyCollection div
      let jsonAsHTML = arrayOfToyObjects.map((toyObject) => {
        return `<div id="toy-${toyObject.id}" class="card">
                <h2>${toyObject.name}</h2>
                <img src=${toyObject.image} class="toy-avatar" />
                <p>${toyObject.likes} Likes </p>
                <button id=${toyObject.id} class="like-btn">Like <3</button>
              </div>`
      }).join('') // gets ride of commas from the map
      // now set the innerHTML of the toyCollection to the huge string returned by the map (jsonAsHTML)
      toyCollection.innerHTML = jsonAsHTML
    })
    // need a SUBMIT event for the create a toy form
    // the form is provided for us already, toyForm
    // add a submit event listener to the form NOT to the button bc children of a form will make it submit
    // send a POST request to create the new toy
    // pessimistically render the new toy to the page
    toyForm.addEventListener('submit', (e) => {
      // forms try to POST so we must PREVENT DEFAULT
      e.preventDefault()
      // must send what the user typed into the form in the post body as the information to update the server
      // capture user's input
      let newName = toyForm.querySelector('#new-name').value
      let newUrl = toyForm.querySelector('#new-url').value
      // send the above input values in the post
      fetch(toysURL, {
        method: 'POST',
        headers: { 'Content-type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          "name": newName,
          "image": newUrl,
          "likes": 0
        })
      })
      .then(r => r.json())
      .then(newToyObject => {
        // append the newToyObject data to the page
        toyCollection.innerHTML += `<div id="toy-${newToyObject.id}" class="card">
                                    <h2>${newToyObject.name}</h2>
                                    <img src=${newToyObject.image} class="toy-avatar" />
                                    <p>${newToyObject.likes} Likes </p>
                                    <button id=${newToyObject.id} class="like-btn">Like <3</button>
                                  </div>`
      })
      e.target.reset() // reset the forms to blank
    }) // END toyForm eventlistener

    toyCollection.addEventListener('click', (e) => {
      if (e.target.className === 'like-btn') {
        let likedToyId = e.target.id
        let likedToy = document.getElementById(`toy-${likedToyId}`)
        let pTagText = likedToy.querySelector('p').innerText
        let likesCount = parseInt(pTagText)
        let incrementedLikes = likesCount + 1

        fetch(`http://localhost:3000/toys/${likedToyId}`, {
          method: 'PATCH',
          headers: {'Content-type': 'application/json', Accept: 'application/json'},
          body: JSON.stringify({
            "likes": incrementedLikes
          })
        })
        .then(r => r.json())
        .then(updatedToy => {
          let toyToEdit = document.getElementById(`toy-${updatedToy.id}`)
          let pTagToEdit = toyToEdit.querySelector('p')
          pTagToEdit.innerHTML = `<p>${updatedToy.likes} Likes </p>`
        })
      }
    })







}) // END DOMContentLoaded
