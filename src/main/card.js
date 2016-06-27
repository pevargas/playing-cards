'use strict'

var Card = function (rank, suit) {
  this.rank = rank
  this.suit = suit
  this.isFaceUp = false
}

Card.prototype.toString = function () {
  return this.rank + ' of ' + this.suit
}

Card.prototype.flip = function () {
  this.isFaceUp = !this.isFaceUp
}

module.exports = Card
