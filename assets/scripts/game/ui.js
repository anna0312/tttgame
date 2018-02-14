'use strict'
const store = require('../store')
const gamelogic = require('./gamelogic')
const helpers = require('../templates/helpers/helpers.js')

const createGameSuccess = function (data) {
  // console.log(data)
  store.game = data.game
  store.game.nameofgame = 'blank'
  updateGamesLayout()
  helpers.displayMessage('title', 'Come at me bro!', 'big-red')
  helpers.displayMessage('subtitle', 'Pick a square!', 'big-green animated bounce')

  // console.log(store.game.nameofgame)
}

const createGameFailure = function (error) {
  $('#authResponse').text('Error creating game')
  $('#authResponse').css('background-color', 'red')
  console.error(error)
}

const updateGameSuccess = function (data, player, playerStatus) {
  console.log('store on success', store)
  if (playerStatus === 'winner') {
    helpers.displayMessage('title', player + ' wins!!!!', 'big-red animated zoomIn')
    helpers.displayMessage('subtitle', 'OK, player <span class="player">' + player + '</span> you don\'t totally suck', 'big-green')
    $('#over').val('true')
    $('#mst').addClass('animated wobble')
  } else {
    // set some values
    const nextPlayer = player === 'x' ? 'o' : 'x'
    $('#value').val(nextPlayer)

    // set some responses
    helpers.displayMessage('title', 'Meh, we\'re not impressed... yet.', 'big-green animated bounce')
    helpers.displayMessage('subtitle', 'Player ' + nextPlayer + ', your turn!', 'big-green animated bounce')
  }
}

const updateGameFailure = function (error) {
  $('#authResponse').text('Error updating game')
  $('#authResponse').css('background-color', 'red')
  console.error(error)
}

const retrieveGameSuccess = function (data) {
  $('#games').text('your game: ' + data)
  $('#authResponse').css('background-color', 'pink')
  store.game = data.game
  // console.log(data)
  // console.log(store.game.nameofgame)
}

const retrieveGameFailure = function (error) {
  $('#authResponse').text('Error retrieving game')
  $('#authResponse').css('background-color', 'red')
  console.error(error)
}

const retrieveAllGamesSuccess = function (data) {
  console.log('all games: ', data)
  $('#games').text('All games' + data)
  //  console.log('finished', gamelogic.finishedGames(data))
  console.log('won', gamelogic.gamesWonBy(data, 'x'))

  // gamelogic.finishedGames.forEach(function (game) {
//     $('#pastgames').append('Unfinished: ' + game.id)
//   })

//  console.log('won by x', gamelogic.gamesWonBy(data, 'x'))
//  data.games.forEach(function (game) {
//    $('#pastgames').append(game.id + '<br />')
//  })
  // data.games.forEach()
  // console.log(data)
  // console.log(store.game.nameofgame)
}

const retrieveAllGamesFailure = function (error) {
  $('#authResponse').text('Error retrieving game')
  $('#authResponse').css('background-color', 'red')
  console.error(error)
}

const updateGamesLayout = function () {
  // console.log('test', store.game)
  // if a token exists, means a user is logged in. present accordingly
  if (store.game !== undefined) { // if the user is logged in...
    $('#gamebox').addClass('show')
    $('#gamebox').removeClass('hidden')
    $('#create-game').addClass('button-smaller')
    $('#display-authed').addClass('button-smaller')
  } else {
    $('#gamebox').addClass('hidden')
    $('#gamebox').removeClass('show')
    $('#create-game').addClass('button-larger')
    $('#display-authed').addClass('button-larger')
  }
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  retrieveGameSuccess,
  retrieveGameFailure,
  retrieveAllGamesSuccess,
  retrieveAllGamesFailure,
  updateGamesLayout
}
