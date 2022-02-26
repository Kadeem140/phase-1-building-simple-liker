// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Needed Selectors
const likeGlyph = document.querySelector('.like-glyph')
const hiddenDiv = document.querySelector('#modal')

//Eventlisteners
function clickFunc(e){
  console.log(e.target.innerHTML, "target")
  mimicServerCall()
    .then(function(){
      if(e.target.innerHTML == EMPTY_HEART){
        likeGlyph.classList.add(".activated-heart")
    }
    else{
      likeGlyph.classList.remove(".activated-heart")
    }
    }) //remove hidden class to display error modal
    .catch(function(){
       return hiddenDiv.classList.remove(".hidden")
    }) //respond to error & display error msg
}
likeGlyph.addEventListener("click", clickFunc)

console.log(likeGlyph)


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
