'use strict'

var Card = function (rank, suit) {
  this.rank = rank
  this.suit = suit
}

Card.prototype.toString = function () {
  return this.rank + ' of ' + this.suit
}

module.exports = Card
