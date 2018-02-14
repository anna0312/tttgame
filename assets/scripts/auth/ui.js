'use strict'
const store = require('../store')
const helpers = require('../templates/helpers/helpers.js')
const gameUI = require('../game/ui.js')

const signUpSuccess = function (data) {
  helpers.displayMessage('title', 'You\'re one of us now')
  helpers.displayMessage('subtitle', 'Now, drink the Kool-Aid and log in to make it official')
  updateAuthLayout()
  $('#collapseTwo').removeClass('in')
}

const signUpFailure = function (error) {
//  $('#authResponse').text('Error on signing up')
//  $('#authResponse').css('background-color', 'red')
  console.error(error)
}

const signInSuccess = function (data) {
  helpers.displayMessage('title', 'You came back for more? Really?!?', 'big-red')
  helpers.displayMessage('subtitle', 'We\'ll be gentle this time', 'big-green')
  store.user = data.user
  updateAuthLayout()
}

const signInFailure = function (error) {
  helpers.displayMessage('title', 'Nope. No dice.')
  helpers.displayMessage('subtitle', 'You sure you got that password right?', 'big-green')
  console.error(error)
}

const changePasswordSuccess = function () {
  helpers.displayMessage('title', 'Done!')
  helpers.displayMessage('subtitle', 'Your secret is safe with us', 'big-green')
  $('#change-password-form').removeClass('in')
}

const changePasswordFailure = function (error) {
  helpers.displayMessage('title', 'Yikes! Problems.')
  helpers.displayMessage('subtitle', 'Don\t get your panties in a twist', 'big-green')
  console.error(error)
}

const signOutSuccess = function (data) {
  helpers.displayMessage('title', 'Umm.... Bye?')
  helpers.displayMessage('subtitle', 'Fine. We didn\'t like you anyway', 'big-green')

  store.user = data
  store.game = data
  console.log(store)
  updateAuthLayout()
  gameUI.updateGamesLayout()
  $('#collapseOne').removeClass('in')
}

const signOutFailure = function (error) {
  helpers.displayMessage('title', 'Yikes! Problems.')
  helpers.displayMessage('subtitle', 'Don\t get your panties in a twist', 'big-green')
  console.error(error)
}

const updateAuthLayout = function () {
  // console.log(store.user)
  // if a token exists, means a user is logged in. present accordingly
  if (store.user !== undefined) { // if the user is logged in...
    $('#display-not-auth').addClass('hidden')
    $('#display-not-auth').removeClass('show')
    $('#display-authed').addClass('show')
    $('#display-authed').removeClass('hidden')
    $('#game-options').addClass('show')
    $('#game-options').removeClass('hidden')
    // console.log('logged in')
  } else {
    $('#display-not-auth').addClass('show')
    $('#display-not-auth').removeClass('hidden')
    $('#display-authed').addClass('hidden')
    $('#display-authed').removeClass('show')
    $('#game-options').addClass('hidden')
    $('#game-options').removeClass('show')
    // console.log('not logged in')
  }
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  updateAuthLayout
}
