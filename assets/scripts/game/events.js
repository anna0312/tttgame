'use strict'
const api = require('./api')
const ui = require('./ui')
const gamelogic = require('./gamelogic')
const store = require('../store')

const onCreateGame = (event) => {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = (event) => {
  event.preventDefault()
  if (store.game.over === true) {
    console.log('game over no more moves')
  } else {
    const player = $('#value').val()
    const data = {
      'game': {
        'cell': {
          'index': $(event.target).data('index'),
          'value': player
        },
        'over': false
      }
    }

    // assign the value of the new cell to the store
    // console.log('store cells before', store.game.cells)
    store.game.cells[data.game.cell.index] = data.game.cell.value
    // console.log('store cells after', store.game.cells)

    let playerStatus = ''
    // check game logic to see if this resulted in a winner
    if (gamelogic.checkWin(data.game.cell.value)) {
      data.game.over = true
      store.game.over = true
      playerStatus = 'winner'
    }

    // update gameboard
    gamelogic.readSquares()

    // update the api with new data
    api.updateGame(data)
      .then(ui.updateGameSuccess(data, player, playerStatus))
      .catch(ui.updateGameFailure)
  }
}

const onRetrieveGame = (id) => {
  event.preventDefault()
  api.retrieveGame()
    .then(ui.retrieveGameSuccess)
    .catch(ui.retrieveGameFailure)
}

const onRetrieveAllGames = () => {
  event.preventDefault()
  api.retrieveAllGames()
    .then(ui.retrieveAllGamesSuccess)
    .catch(ui.retrieveAllGamesFailure)
}

const addHandlers = () => {
  $('#create-game').on('click', onCreateGame)
  // $('#update-game').on('submit', onUpdateGame)
  $('#retrieve-game').on('submit', onRetrieveGame)
  $('#retrieve-all-games').on('click', onRetrieveAllGames)
  $('.selection-box').on('click', onUpdateGame)
}

const pageLoadEvents = () => {
  ui.updateGamesLayout()
}

module.exports = {
  addHandlers: addHandlers,
  pageLoadEvents: pageLoadEvents
}
