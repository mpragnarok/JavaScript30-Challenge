const keys = document.querySelectorAll('.key')

function playsound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

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