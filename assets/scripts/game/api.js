'use strict'
const config = require('../config')
const store = require('../store')

const createGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const endGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      authorization: 'Token token=' + store.game.token
    },
    data
  })
}

module.exports = {
  createGame: createGame,
  updateGame: updateGame,
  endGame: endGame
}
