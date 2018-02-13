'use strict'
const store = require('../store')

const winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]

const checkWin = function (player) {
  const cells = store.game.cells
  return winning.some((element) => element.every((item) => cells[item] === player))
}

const checkPreviousWin = function (data, player) {
  const cells = data.game.cells
  console.log('game', data.games)
  console.log(player, 'did', winning.some((element) => element.every((item) => cells[item] === player)))
}
// console.log('final', checkWin)

const fillSquare = (element, index, array) => {
//  console.log(index + ' ' + element)
  // $('#' + value).addClass(value + '-selected')
  $('.selection-box[data-index="' + index + '"]').addClass(element + '-selected')
}

const readSquares = () => {
  const cells = store.game.cells
  cells.forEach(fillSquare)
}

const finishedGames = (data) => { return data.games.filter(game => game.over === true) }

const gamesWonBy = (data, player) => {
//  finishedGames(data).filter(game => checkPreviousWin(finishedGames.game, player) === true)
  checkPreviousWin(data, player)
}

module.exports = {
  checkWin,
  readSquares,
  gamesWonBy,
  finishedGames
}
