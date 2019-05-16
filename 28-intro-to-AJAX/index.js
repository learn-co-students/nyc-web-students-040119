// nothing


function sleep(n) {
  let i = 0
  while(i < (12 ** 8) * n) {
    i++
  }
}
//
// 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
//
// 'https://dog.ceo/api/breeds/image/random'
// 'https://dog.ceo/api/breeds/image/random/4'

// console.log('Starting the sleep function')
// // sleep(10)
// console.log('Wow that sleep function took forever to run. 1 Star 🌟')


const clickButton = document.querySelector('#click-button')

clickButton.addEventListener("click", function(){
  console.log('bloop')
})


console.log('BEFORE FETCH')
function doesMyFetch() {
  fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes', { method: "GET"})
    .then(function(response){
      return response.json()
    })
    .then(function(quote){
     // console.log(quote)
     const quoteContainer = document.querySelector("#quotes")
     // debugger;
     console.log(quoteContainer)
     quoteContainer.innerHTML += `
      <p> ${quote[0]} </p>
      <h1 class="some-class"> for funzies</h1>
     `
    })
}
console.log(doesMyFetch())

console.log('AFTER FETCH')









// how do we make requests in JS?






//
//
//
// const pokemonURL = "http://localhost:3000"
// fetch(pokemonURL, {
//   method: "POST",
//   headers: {
//             "Content-Type": "application/json",
//             // "Content-Type": "application/x-www-form-urlencoded",
//         },
//   body: JSON.stringify({
//           "height": 10,
//           "weight": 130,
//           "id": 2,
//           "name": "ivysaur",
//           "abilities": ["overgrow", "chlorophyll"],
//           "moves": [],
//           "stats": [
//             {
//               "value": 80,
//               "name": "special-defense"
//             },
//             {
//               "value": 80,
//               "name": "special-attack"
//             },
//             {
//               "value": 63,
//               "name": "defense"
//             },
//             {
//               "value": 62,
//               "name": "attack"
//             },
//             {
//               "value": 60,
//               "name": "speed"
//             },
//             {
//               "value": 60,
//               "name": "hp"
//             }
//           ],
//           "types": ["grass", "poison"],
//           "sprites": {
//             "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//             "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
//           }
//         })
//       })
//   .then(r = > r.json())
//   .then(// logic)
