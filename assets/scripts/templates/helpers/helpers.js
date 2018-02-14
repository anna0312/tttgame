'use strict'

const displayMessage = (id, message, css) => {
  $('#' + id).html(message)
  $('#' + id).addClass(css)
}

module.exports = {
  displayMessage
}
