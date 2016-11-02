'use strict'

var common = require('./common.js')
var expect = common.expect
var Deck = common.playingCards.Deck
var Card = common.playingCards.Card
var STANDARD = common.playingCards.DECK_TYPES.STANDARD

describe('drawPile', function () {
  it('should contain a drawPile array', function () {
    var deck = new Deck(STANDARD)
    expect(deck).to.have.property('drawPile')
      .and.to.be.an.instanceof(Array)
  })

  it('should contain as some cards', function () {
    var deck = new Deck(STANDARD)
    expect(deck).to.not.be.empty
  })
})

describe('discardPile', function () {
  it('should contain a discardPile array', function () {
    var deck = new Deck(STANDARD)
    expect(deck).to.have.property('discardPile')
      .and.to.be.an.instanceof(Array)
  })

  it('should be empty when intialized', function () {
    var deck = new Deck(STANDARD)
    expect(deck.discardPile).to.be.empty
  })
})

describe('draw', function () {
  it('should give a card', function () {
    var deck = new Deck(STANDARD)
    var card = deck.draw()
    expect(card).to.be.instanceof(Card)
  })

  it('should decrease the draw pile size', function () {
    var deck = new Deck(STANDARD)
    var numDraw = deck.drawPile.length
    deck.draw()
    expect(deck.drawPile).to.have.length.of(numDraw - 1)
  })
})

describe('discard', function () {
  it('should add a card to the discardPile', function () {
    var deck = new Deck(STANDARD)
    var numDiscard = deck.discardPile.length
    var card = deck.draw()
    deck.discard(card)
    expect(deck.discardPile).to.have.length.of(numDiscard + 1)
  })

  it('should have the orignal number of cards after one draw and one discard', function () {
    var deck = new Deck(STANDARD)
    var total = STANDARD.ranks.length * STANDARD.suits.length + STANDARD.jokers.length
    var card = deck.draw()
    deck.discard(card)
    var newTotal = deck.discardPile.length + deck.drawPile.length
    expect(newTotal).to.equal(total)
  })
})

describe('shuffle', function () {
  it('should combine the draw and discard piles', function () {
    var deck = new Deck(STANDARD)
    var check = new Deck(STANDARD)
    deck.shuffle()

    console.log(check.drawPile)
    console.log('==============================')
    console.log(deck.drawPile)

    expect(deck.drawPile).to.not.equal(check.drawPile)
  })
})
