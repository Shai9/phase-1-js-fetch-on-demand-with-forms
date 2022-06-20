const init = () => {
  // Your JavaScript code goes here!
let heartIcons = document.querySelectorAll(".like-glyph")
// console.log(heartIcons)
heartIcons.forEach(item => {
  item.addEventListener('click', onClick)
})
function onClick(e) {
  mimicServerCall()
  .then(data => {
    if(data && e.target.innerHTML === EMPTY_HEART){
      e.target.className = 'activated-heart'
      e.target.innerHTML = FULL_HEART
    }else if (data || e.target.innerHTML === FULL_HEART){
      e.target.className = 'like-glyph'
      e.target.innerHTML = EMPTY_HEART
    }
  })
  .catch(function(error){
    const modal = document.querySelector('div#modal')
    modal.className = ''
    const p = document.querySelector(['p#modal-message'])
    p.innerHTML = error
    setTimeout(function () {
      return modal.className = 'hidden'
    }, 3000)
  })
}
  
}

document.addEventListener('DOMContentLoaded', init);