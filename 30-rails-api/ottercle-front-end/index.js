console.log('did it load?')

const otterForm = document.querySelector('#make-otter-form')
const otterName = document.querySelector('#otter-name')

otterForm.addEventListener('submit', function(e) {
 e.preventDefault()

 fetch('http://localhost:3000/otters', {
   method: 'POST',
   headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json'
         },
   body: JSON.stringify({
     otter: {
       name: otterName.value,
       age: 1,
       cuteness_level: 9001
     }
   })
 })
 .then(function(res){
   return res.json()
 })
 .then(function(whatCameBack){
   console.log(whatCameBack)
 })




})
