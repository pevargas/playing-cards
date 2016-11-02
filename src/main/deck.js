'use strict'

var Card = require('./card.js')

var Deck = function (DECK_TYPE) {
  if (!DECK_TYPE.hasOwnProperty('ranks') && !Array.isArray(DECK_TYPE.ranks)) {
    throw new TypeError('Expected DECK_TYPE to contain a \'ranks\' array')
  }
  if (!DECK_TYPE.hasOwnProperty('suits') && !Array.isArray(DECK_TYPE.suits)) {
    throw new TypeError('Expected DECK_TYPE to contain a \'suits\' array')
  }
  if (!DECK_TYPE.hasOwnProperty('jokers') || !Array.isArray(DECK_TYPE.jokers)) {
    DECK_TYPE.jokers = []
  }

  this.drawPile = []
  this.discardPile = []
  for (var s = 0; s < DECK_TYPE.suits.length; ++s) {
    for (var r = 0; r < DECK_TYPE.ranks.length; ++r) {
      this.drawPile.push(new Card(DECK_TYPE.ranks[r], DECK_TYPE.suits[s]))
    }
  }

  for (var joker in DECK_TYPE.jokers) {
    this.drawPile.push(new Card(joker, joker))
  }
}

Deck.prototype.draw = function () {
  return this.drawPile.pop()
}

Deck.prototype.discard = function (card) {
  if (!card instanceof Card) {
    throw new TypeError('Expected \'card\' to be of type Card')
  }
  this.discardPile.push(card)
}

Deck.prototype.shuffle = function () {
  var newPile = []
  this.discardPile.concat(this.drawPile)
  while (this.discardPile.length > 0) {
    var index = Math.floor(Math.random() * (this.discardPile.length))
    newPile.push(this.discardPile[index].flip)
    this.discardPile.splice(index, 1)
  }

  this.drawPile = newPile
}

module.exports = Deck
