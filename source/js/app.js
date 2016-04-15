import generateName from 'sillyname'
import Firebase from 'firebase'

import bus from './bus'
import parseRoute from './routing'

// Set up event bus for tracking intention, callbacks

bus.on('black-move', postBlack)
bus.on('white-move', postWhite)
bus.on('update', render)
bus.on('view:home', atHome)
bus.on('view:watching', watchingGame)
bus.on('view:playing', playingGame)
bus.on('view:404', at404)


// Where are we tho?
parseRoute()

// Set up firebase as a game server
var gameServer = new Firebase('https://joseki-party.firebaseio.com/');

// Simple button intention interpreters
var blackButton = document.querySelector('.js-black')
blackButton.addEventListener('click', blackMove)

var whiteButton = document.querySelector('.js-white')
whiteButton.addEventListener('click', whiteMove)

function blackMove (e) {
  console.log(e)
  bus.emit('black-move')
}

function whiteMove (e) {
  console.log(e)
  bus.emit('white-move')
}

// Super simple game state model sent to the gameserver
function postBlack () {
  gameServer.set(true)
}
function postWhite () {
  gameServer.set(false)
}

// Is a listerner. When game serverstate changes, emit update event with state
gameServer.on('value', function (serverState) {
  console.log(serverState)
  bus.emit('update', serverState.val())
})

// Draw the game board from the current state
function render (state) {
  if (state) {
    blackButton.setAttribute('disabled', true)
    whiteButton.removeAttribute('disabled')
  } else {
    blackButton.removeAttribute('disabled')
    whiteButton.setAttribute('disabled', true)
  }
}

function playingGame (playing) {
  console.log(`you are playing game ${playing.game} as ${playing.color}`)

}

function atHome () { console.log("home") }
function at404 () { console.log(`I don't know where you are, 404 dawg`) }
function watchingGame (watching) { console.log(`you are watching game ${watching.game}`) }

import render from './render'
import exampleGame from './example'

render(exampleGame)
console.log(generateName())

