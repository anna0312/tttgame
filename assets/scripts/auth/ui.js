'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#authResponse').text('Signed up successfully')
  $('#authResponse').css('background-color', 'green')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#authResponse').text('Error on signing up')
  $('#authResponse').css('background-color', 'red')
  console.error(error)
}

const signInSuccess = function (data) {
  $('#authResponse').text('Signed in successfully as ID: ' + data.user.id)
  $('#authResponse').css('background-color', '#bbffbb')
  console.log(data)
  store.user = data.user
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
}

const signOutFailure = function (error) {
  $('#message').text('Error logging out')
  $('#message').css('background-color', 'pink')
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
