import _ from 'underscore'

const getters = {

  /**
   * @function spellIsKnown
   * @param {object} spell
   * @return {bool}
   */
  spellIsKnown: (state) => (spell) => {
    return _.find(state.knownSpells, {name: spell.name}) !== undefined
  }
}

export default getters
