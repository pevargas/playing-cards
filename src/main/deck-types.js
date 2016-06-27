'use strict'

var DECK_TYPES = {
  STANDARD: {
    name: 'Standard',
    suits: ['Clubs', 'Diamonds', 'Hearts', 'Spades'],
    ranks: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
    jokers: []
  },
  STANDARD_WITH_JOKERS: {
    name: 'Standard with Jokers',
    suits: ['Clubs', 'Diamonds', 'Hearts', 'Spades'],
    ranks: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
    jokers: ['Joker', 'Joker']
  },
  EUCHRE: {
    name: 'Euchre',
    suits: ['Clubs', 'Diamonds', 'Hearts', 'Spades'],
    ranks: ['7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
    jokers: []
  }
}

module.exports = DECK_TYPES
