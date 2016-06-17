'use strict'

var Card = require('./card.js')

var Deck = function () {
  this.drawPile = [new Card('Fuck', 'You')]
}

module.exports = Deck
