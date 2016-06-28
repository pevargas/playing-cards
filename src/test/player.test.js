'use strict'

var common = require('./common.js')
var expect = common.expect
var Player = common.playingCards.Player
var Deck = common.playingCards.Deck
var Card = common.playingCards.Card
var STANDARD = common.playingCards.DECK_TYPES.STANDARD

describe('hand', function () {
  it('should contain a hand array', function () {
    var player = new Player()
    expect(player).to.have.property('hand')
      .and.to.be.an.instanceof(Array)
  })

  it('should have no cards when intalized', function () {
    var player = new Player()
    expect(player.hand).to.be.empty
  })
})

describe('name', function () {
  it('should default to \'Anonymous\' if no name is given', function () {
    var player = new Player()
    expect(player.name).to.equal('Anonymous')
  })
})

describe('takeCard', function () {
  it('should go into the hand', function () {
    var player = new Player()
    var deck = new Deck(STANDARD)
    player.takeCard(deck.draw())
    expect(player.hand).to.have.length.of(1)
  })
})

describe('pickCard', function () {
  it('should return a card from the hand', function () {
    var player = new Player()
    var deck = new Deck(STANDARD)
    player.takeCard(deck.draw())
    var card = player.pickCard()
    expect(card).to.be.instanceof(Card)
  })
})
