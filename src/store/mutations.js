import _ from 'underscore'

const mutations = {

  initKnownSpells (state, localKnownSpells) {
    state.knownSpells = localKnownSpells
  },

  addKnownSpell (state, spell) {
    state.knownSpells.push(spell)
  },

  removeKnownSpell (state, spell) {
    state.knownSpells = _.without(spell)
  }
}

export default mutations
