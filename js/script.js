window.addEventListener('DOMContentLoaded', function () {
  'use strict'

  let btnEvent = document.getElementById('btn__event')
  let hex = document.getElementById('hex')
  let bg = document.getElementById('color__event')

  btnEvent.addEventListener('click', randomHexColor)

  function randomHexColor() {
    var value = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'F']

    var code = ''

    for (var i = 0; i < 6; i++) {
      var random_value = Math.floor(Math.random() * value.length);

      code += value[random_value]
    }

    hex.innerHTML = code
    bg.style.backgroundColor = `#${code}`

  }
})