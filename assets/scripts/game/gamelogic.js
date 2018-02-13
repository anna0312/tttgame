'use strict'
const store = require('../store')

const winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]

const checkWin = function (player) {
  const cells = store.game.cells
  console.log('mycells', cells)
  return winning.some((element) => element.every((item) => cells[item] === player))
}
// console.log('final', checkWin)

module.exports = {
  checkWin
}
