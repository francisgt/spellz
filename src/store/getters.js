import _ from 'underscore'
import { spellsLevelWeight } from '@/spells-levels'

const getters = {

  /**
   * @function spellIsKnown
   * @param {object} spell
   * @return {bool}
   */
  spellIsKnown: (state) => (spell) => {
    return _.find(state.knownSpells, {name: spell.name}) !== undefined
  },

  /**
   *
   */
  spellsByLevel: (state) => (level) => {
    return _.filter(state.knownSpells, { level })
  },

  /**
   *
   */
  preparedSpellsWeight: (state, getters) => {
    let weight = 0
    for (const name of state.preparedSpells) {
      weight = weight + getters.preparedSpellWeight(name)
    }
    return weight
  },

  /**
   *
   */
  preparedSpellWeight: (state) => (name) => {
    return spellsLevelWeight.indexOf(_.find(state.knownSpells, { name }).level)
  }
}

export default getters
