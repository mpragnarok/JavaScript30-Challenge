const keys = document.querySelectorAll('.key')

// mouse click on element or keyboard pressed to playsound
function playsound(e) {
  let keyCode = e.keyCode || this.dataset.key
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${keyCode}"]`)
  if (!audio) return // stop the function from running all together
  audio.currentTime = 0 // rewind the audio
  audio.play()
  key.classList.add('playing')
}

// remove transition when it ends
function removeTransition(e) {
  if (e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition))

// bind an event listener to window for keyboard and play the audio
window.addEventListener('keydown', playsound)

// bind an event listener to keys
keys.forEach(key => key.addEventListener('click', playsound))