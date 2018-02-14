'use strict'
const store = require('../store')

const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8]
]

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

const checkDraw = (data) => {
  return data.cells.every((item) => item !== '')
}

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

const finishedGames = (data) => {
  return data.games.filter(game => game.over === true)
}

const gamesPlayed = (data) => {
  return data.games.length
}
const gamesWonBy = (data, player) => {
  //  finishedGames(data).filter(game => checkPreviousWin(finishedGames.game, player) === true)
  // checkPreviousWin(data, player)
  return data.games.filter(data => checkPastWins(player, data)).length
}
const gameStatsComment = (played, won) => {
  const percentWon = (won / played * 100)
  if (percentWon >= 80) {
    return ('Look at you! You know your way around the squares!')
  } else if (percentWon >= 60) {
    return ('Well, at least it\'s not totally embarrassing.')
  } else if (percentWon >= 40) {
    return ('My pet llama plays better than you.')
  } else {
    return ('Wow. You\'re not very good at this are you?')
  }
}

module.exports = {
  checkWin,
  checkDraw,
  readSquares,
  gamesWonBy,
  finishedGames,
  gamesPlayed,
  gameStatsComment
}
