'use strict'

var common = require('./common.js')
var expect = common.expect
var Deck = common.playingCards.Deck
var DECK_TYPES = common.playingCards.DECK_TYPES

function commonTests (DECK_TYPE) {
  it('should have a name to identify it', function () {
    expect(DECK_TYPE).to.have.property('name')
      .and.to.not.be.empty
  })

  it('should contain a ranks array', function () {
    expect(DECK_TYPE).to.have.property('ranks')
      .and.to.be.an.instanceof(Array)
  })

  it('should contain a suits array', function () {
    expect(DECK_TYPE).to.have.property('suits')
      .and.to.be.an.instanceof(Array)
  })

  it('should contain a jokers array', function () {
    expect(DECK_TYPE).to.have.property('jokers')
      .and.to.be.an.instanceof(Array)
  })

  it('should have cards', function () {
    var deck = new Deck(DECK_TYPE)
    var deckLength = DECK_TYPE.ranks.length * DECK_TYPE.suits.length + DECK_TYPE.jokers.length
    expect(deck.drawPile).to.have.length.of(deckLength)
  })
}

describe('STANDARD', function () {
  commonTests(DECK_TYPES.STANDARD)
})

describe('STANDARD_WITH_JOKERS', function () {
  commonTests(DECK_TYPES.STANDARD_WITH_JOKERS)
})

describe('EUCHRE', function () {
  commonTests(DECK_TYPES.EUCHRE)
})
