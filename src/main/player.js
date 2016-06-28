'use strict'

var Card = require('./card.js')

var Player = function (name) {
  if (name === undefined) {
    name = 'Anonymous'
  }
  this.name = name
  this.hand = []
}

Player.prototype.takeCard = function (card) {
  if (!card instanceof Card) {
    throw new TypeError('Expected \'card\' to be of type Card')
  }
  this.hand.push(card)
}

Player.prototype.pickCard = function () {
  return this.hand.pop()
}

module.exports = Player
