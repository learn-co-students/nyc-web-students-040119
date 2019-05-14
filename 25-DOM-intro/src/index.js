console.log('%c Hello, World!', 'color: green')



// WHERE DO I WANT TO ADD html (IMG)
// div with the id of container


const imgContainer = document.getElementById('container')
console.log("this is the img container", imgContainer)

// want to ADD THE images
// need to cREATE the HTML to add to the page
// added the src attribute
const newImg = document.createElement('img')
newImg.src = "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/10676315_10203656694270611_6060927043296061113_n.jpg?_nc_cat=106&_nc_ht=scontent-lga3-1.xx&oh=c973e800cd0caf352a655aef6d180264&oe=5CC2BB63"


imgContainer.appendChild(newImg)



// rugrats netflix adaptation
"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/10676315_10203656694270611_6060927043296061113_n.jpg?_nc_cat=106&_nc_ht=scontent-lga3-1.xx&oh=c973e800cd0caf352a655aef6d180264&oe=5CC2BB63"


// go to FAv site.. <3 manipulate something
