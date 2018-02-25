'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function (event) {
  // prevent default action of page loading
  event.preventDefault()
  // pass the values extracted from the form fields into a new object called "data"
  // form field values are extracted using the getFormFields functions in lib
  const data = getFormFields(this)
  if (data.credentials.password !== data.credentials.password_confirmation) {
    ui.signUpFailPwdMatch()
  } else {
    // console.log('data is', data.credentials.password)

    // pass the data object into the "signUp" function that calls out to the api
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  }
}
const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  // console.log('data is ', data)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // event.target is same as "this" used above

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onLogout = function () {
  event.preventDefault()

  api.logOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onLogout)
}

const pageLoadEvents = () => {
  ui.updateAuthLayout()
}

module.exports = {
  addHandlers: addHandlers,
  pageLoadEvents: pageLoadEvents
}
