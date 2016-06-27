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

describe('flip', function () {
  it('should be upside-down when initlalized', function () {
    var card = new Card('Ace', 'Spade')
    expect(card.isFaceUp).to.be.false
  })
  it('should turn right-side-up when flipped', function () {
    var card = new Card('Ace', 'Spade')
    card.flip()
    expect(card.isFaceUp).to.be.true
  })
})
