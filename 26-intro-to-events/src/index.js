
console.log('%c Hello lol', 'color:goldenrod')



document.addEventListener("DOMContentLoaded", function() {
 console.log(' the dom is loaded')
 // need the DOM element
 // Alert me button
//  const alertButton = document.getElementById('alert')
//
//  // actually listen for when something happens
//  // first arg is the actual event
//  // second is WHAT DO I DO? callback fn
//  alertButton.addEventListener('click', function() {
//    alert('hah! you done clicked me')
//  })
//
// const logButton = document.getElementById('loggy')
// logButton.addEventListener('click', function() {
//   console.log('sumthin')

  const buttonParent = document.querySelector("#button-parent")
  console.log(buttonParent)
  buttonParent.addEventListener('click', function(event) {

    console.log(event.target)
    // what IF the event.target ID is alert i should do something (pssst alert)
    //
    if (event.target.id === "alert") {
      alert('WOW')
    }
    if (event.target.id === "loggy") {
      console.log("got em coach!")
    }

    //
    // switch(event.target.id) {
    //   case "alert":
    //     alert('WOW')
    //     break;
    //   case y:
    //     // code block
    //     break;
    //   default:
    //     // code block
    // }

  })

// })




// I need the USER input
const input = document.querySelector("#new-comment")
// console.log(input.value)

 // i need the form
  const form = document.querySelector("#comment-form")
  form.addEventListener('submit', function(event) {
    event.preventDefault()
    // console.log(' submited the form')

    // create some HTML so i can add it to the page
    const paragraph = document.createElement('p')
    paragraph.innerText = input.value
    console.log(paragraph)
    // got the HTML now i nee to ADD IT SOMEWHERE
    const commentContainer = document.querySelector("#comments-container")
    // console.log(commentContainer)
    // slap it on the DOM :)
    commentContainer.appendChild(paragraph)
    form.reset()

  })


})
