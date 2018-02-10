'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#authResponse').text('Signed up successfully')
  $('#authResponse').css('background-color', 'green')
  console.log(data)
  updateAuthLayout()
}

const signUpFailure = function (error) {
  $('#authResponse').text('Error on signing up')
  $('#authResponse').css('background-color', 'red')
  console.error(error)
}

const signInSuccess = function (data) {
  $('#authResponse').text('Signed in successfully as ID: ' + data.user.id)
  $('#authResponse').css('background-color', '#bbffbb')
  store.user = data.user
  updateAuthLayout()
}

const signInFailure = function (error) {
  $('#authResponse').text('Error on signing in')
  $('#authResponse').css('background-color', 'pink')
  console.error(error)
}

const changePasswordSuccess = function () {
  $('#authResponse').text('Changed password successfully')
  $('#authResponse').css('background-color', '#bbffbb')
}

const changePasswordFailure = function (error) {
  $('#authResponse').text('Error on changing password')
  $('#authResponse').css('background-color', 'pink')
  console.error(error)
}

const signOutSuccess = function () {
  $('#message').text('Logged out successfully')
  $('#message').css('background-color', '#bbffbb')
  updateAuthLayout()
}

const signOutFailure = function (error) {
  $('#message').text('Error logging out')
  $('#message').css('background-color', 'pink')
  console.error(error)
}

const updateAuthLayout = function () {
  // if a token exists, means a user is logged in. present accordingly
  if (store.user !== undefined) { // if the user is logged in...
    $('#sign-up-button').addClass('invisible')
    $('#sign-in-button').addClass('invisible')
    $('#change-password-button').addClass('visible')
    $('#sign-out-button').addClass('visible')
  } else {
    $('#sign-up-button').addClass('visible')
    $('#sign-in-button').addClass('visible')
    $('#change-password-button').addClass('invisible')
    $('#sign-out-button').addClass('invisible')
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
