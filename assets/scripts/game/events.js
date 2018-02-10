'use strict'
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onCreateGame = (event) => {
  event.preventDefault()
  // pass the values extracted from the form fields into a new object called "data"
  // form field values are extracted using the getFormFields functions in lib
  // pass the data object into the "createGame" function that calls out to the api
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = (event) => {
  event.preventDefault()
  console.log(getFormFields(event.target))
  const data = getFormFields(event.target)
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onEndGame = () => {

}

const addHandlers = () => {
  $('#create-game').on('click', onCreateGame)
  $('#update-game').on('submit', onUpdateGame)
  $('#end-game').on('submit', onEndGame)
}

module.exports = {
  addHandlers: addHandlers
}
