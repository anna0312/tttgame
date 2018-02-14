'use strict'
const store = require('../store')

const winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]

const checkWin = function (player) {
  const cells = store.game.cells
  return winning.some((element) => element.every((item) => cells[item] === player))
}

const checkPastWins = function (player, data = null) {
  let cells = data.cells
  if (data === null) {
    cells = store.game.cells
  }
  // console.log('newcells', cells)
  return winning.some((element) => element.every((item) => cells[item] === player))
}

// console.log('final', checkWin)

const fillSquare = (element, index, array) => {
//  console.log(index + ' ' + element)
  // $('#' + value).addClass(value + '-selected')

  $('.selection-box[data-index="' + index + '"]').addClass(element + '-selected')
  $('.selection-box[data-index="' + index + '"]').text(element)
}

const readSquares = () => {
  const cells = store.game.cells
  cells.forEach(fillSquare)
}

const finishedGames = (data) => { return data.games.filter(game => game.over === true) }

const gamesWonBy = (data, player) => {
//  finishedGames(data).filter(game => checkPreviousWin(finishedGames.game, player) === true)
  // checkPreviousWin(data, player)
  return data.games.filter(data => checkPastWins(player, data)).length
}

module.exports = {
  checkWin,
  readSquares,
  gamesWonBy,
  finishedGames
}
