'use strict'
const store = require('../store')

const createGameSuccess = function (data) {
  $('#authResponse').text('Game created. ID: ' + data.game.id)
  $('#authResponse').css('background-color', 'green')
  console.log(data)
  store.game = data.game
}

const createGameFailure = function (error) {
  $('#authResponse').text('Error creating game')
  $('#authResponse').css('background-color', 'red')
  console.error(error)
}

const updateGameSuccess = function (data) {
  $('#authResponse').text('Game updated. ID: ' + data.game.id)
  $('#authResponse').css('background-color', 'green')
  console.log(data)
  store.game = data.game
}

const updateGameFailure = function (error) {
  $('#authResponse').text('Error updating game')
  $('#authResponse').css('background-color', 'red')
  console.error(error)
}
module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}
