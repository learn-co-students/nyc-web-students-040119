const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

const allToys = "http://localhost:3000/toys"

const toyColl = document.querySelector('#toy-collection')

// YOUR CODE HERE

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
    const realForm = document.querySelector('.add-toy-form')
    realForm.addEventListener('submit', function(e) {
      e.preventDefault()

      const toyName = document.querySelector('#toy-name')
      const toyImage = document.querySelector('#toy-image')

      fetch(allToys, { method: "POST",
        headers:
        {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(
          {
            "name": toyName.value,
            "image": toyImage.value,
            "likes": 0
          }
        )
      })
        .then(r => r.json())
        .then(newToy => {
          toyColl.innerHTML += `
            <div class="card">
              <h2>${newToy.name}</h2>
              <img src="${newToy.image}" class="toy-avatar" />
              <p>${newToy.likes} Likes </p>
              <button id="${newToy.id}" class="like-btn">Like <3</button>
            </div>
          `
        })
    })

  } else {
    toyForm.style.display = 'none'
  }
})

// fetch to get all the data for toys
fetch(allToys, { method: "GET"
})
  .then(response => response.json())
  .then(toys => {
    toys.forEach(function(toy) {
      // console.log(toy);
      toyColl.innerHTML += `<div class="card">
                            <h2>${toy.name}</h2>
                            <img src="${toy.image}" class="toy-avatar" />
                            <p>${toy.likes} Likes </p>
                            <button id="${toy.id}" class="like-btn">Like <3</button>
                          </div>`
    })
  })

  toyColl.addEventListener('click', function(e) {
    // console.log(e.target);
    let clickedToyId = e.target.id
    let pTag = e.target.previousElementSibling
    let likeNum = parseInt(pTag.innerText)
    // pTag.innerText = `${likeNum + 1} Likes`

    fetch(`http://localhost:3000/toys/${clickedToyId}`, { method: "PATCH",
      headers:
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(
        {
          "likes": ++likeNum
        }
      )
    })
      .then(pTag.innerText = `${likeNum} Likes`)
      // .then(updatedToy => console.log(updatedToy))

  })


// OR HERE!
