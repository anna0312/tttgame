'use strict'
const store = require('../store')

const createGameSuccess = function (data) {
  $('#authResponse').text('Game created. ID: ' + data.game.id)
  $('#authResponse').css('background-color', 'green')
  // console.log(data)
  store.game = data.game
  store.game.nameofgame = 'blank'
  // console.log(store.game.nameofgame)
}

const createGameFailure = function (error) {
  $('#authResponse').text('Error creating game')
  $('#authResponse').css('background-color', 'red')
  console.error(error)
}

const updateGameSuccess = function (data, player, playerStatus) {
  $('#authResponse').text('Game updated. ID: ' + data.game.id)
  $('#authResponse').css('background-color', 'light green')
  // console.log(data)
  if (playerStatus === 'winner') {
    $('#nextUp').text('woooot!!!' + player + 'wins!')
  } else {
    $('#authResponse').text('doh!' + player + 'sucks!')
    const nextPlayer = player === 'x' ? 'o' : 'x'
    $('#value').val(nextPlayer)
    $('#nextUp').text('Player ' + nextPlayer + ', your turn!')
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
  $('#authResponse').css('background-color', 'pink')
  // console.log(data)
  // console.log(store.game.nameofgame)
}

const retrieveAllGamesFailure = function (error) {
  $('#authResponse').text('Error retrieving game')
  $('#authResponse').css('background-color', 'red')
  console.error(error)
}
module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  retrieveGameSuccess,
  retrieveGameFailure,
  retrieveAllGamesSuccess,
  retrieveAllGamesFailure
}
