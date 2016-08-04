import bus from './lib/bus'
import classy from './lib/classy'
import route from './routing' // App Level Routing
import model from './model' // The data model for handling Firebase
import view from './view' // Routing Controls View Panels
import newGame from './game/new' // Create a new Game
import start from './game/start' // Start a new Game
import Goban from './game/goban' // The board component itself
import Player from './game/player' // The player control panel component
import Cleaner from './game/cleaner'

bus.on('view:set', model)
newGame()
start()
Goban()
Player()
Cleaner()

function log (whatever) {
  console.log(whatever)
}

function change (e) {
  e.preventDefault()
  var theme = e.target.getAttribute('data-theme')
  var body = document.querySelector('body')
  body.className = 'theme-' + theme
}

var themeButtons = document.querySelectorAll('.js-switch-theme')

themeButtons.forEach(function (button) {
  button.addEventListener('click', change)
})

route()
window.addEventListener('popstate', route)
