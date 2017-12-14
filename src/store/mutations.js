import _ from 'underscore'

const mutations = {

  initKnownSpells (state, localKnownSpells) {
    state.knownSpells = localKnownSpells
  },

  addKnownSpell (state, spell) {
    state.knownSpells.push(spell)
  },

  removeKnownSpell (state, spell) {
    state.knownSpells = _.without(state.knownSpells, spell)
  },

  setPreparedSpells (state, spells) {
    state.preparedSpells = spells
  },

  setCharacterClass (state, value) {
    state.characterClass = value
  },

  setCharacterLevel (state, value) {
    state.characterLevel = value
  },

  setCharacterAbilityModifier (state, value) {
    state.characterAbilityModifier = value
  }

}

export default mutations
