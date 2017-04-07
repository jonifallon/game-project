'use strict'

const config = require('../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET'
  })
}

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  // console.log('not here?')
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = (data) => {
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// getting ready to add this kind of thing for the game using the code they gave us on
// https://github.com/jonifallon/game-project-api

const show = function (id) {
  return $.ajax({
    url: config.production + '/games/' + id,
    method: 'GET'
  })
}

const add = function (data) {
  return $.ajax({
    url: config.production + '/games',
    method: 'POST',
    data: data
  })
}

const update = function (id) {
  return $.ajax({
    url: config.production + '/games/' + id,
    method: 'PATCH'
    // data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  show,
  index,
  add,
  update

}
