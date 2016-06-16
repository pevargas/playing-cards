'use strict';

var common = require('./common.js');
var expect = common.expect;
var Deck = common.playingCards.Deck;

describe('drawPile', function() {
  it('should return a list of cards ', function() {
    var testDeck = new Deck();
    expect(testDeck.drawPile).to.have.length(1);
  });
});
