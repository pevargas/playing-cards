'use strict'

function importTest (name, path) {
  describe(name, function () {
    require(path)
  })
}

describe('playing-cards', function () {
  importTest('Card', './card.test.js')
  importTest('Deck', './deck.test.js')
})
