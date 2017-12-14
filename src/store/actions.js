const actions = {
  /**
   * @function toggleKnownSpell
   * @param {*}
   * @param {*} spell
   */
  toggleKnownSpell ({ dispatch, commit, getters }, spell) {
    if (getters.spellIsKnown(spell)) {
      commit('removeKnownSpell', spell)
    } else {
      commit('addKnownSpell', spell)
    }

    dispatch('save')
  },

  init ({ commit }) {
    const localData = JSON.parse(window.localStorage.getItem('spellbook'))
    if (localData) {
      if (localData.knownSpells) {
        commit('initKnownSpells', localData.knownSpells)
      }
    }
  },

  save ({ state }) {
    window.localStorage.setItem('spellbook', JSON.stringify(state))
  }

}

export default actions
