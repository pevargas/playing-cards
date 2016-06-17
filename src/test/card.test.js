'use strict'

var common = require('./common.js')
var expect = common.expect
var Card = common.playingCards.Card

describe('toString', function () {
  it('should return an amalgamation of it\'s members', function () {
    var testCard = new Card('Ace', 'Spade')
    expect(testCard.toString()).to.equal('Ace of Spade')
  })
})
