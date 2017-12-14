<template>
  <div>
    <md-empty-state
      v-if="knownSpells.length == 0"
      md-icon="check_box"
      md-label="Ajouter des spellz"
      md-description="Ajouter des spellz à votre spellbook pour les voir apparaître ici.">
      <md-button to="/" class="md-primary md-raised">Voir la liste</md-button>
    </md-empty-state>

    <div v-else>
      <md-toolbar class="md-large md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-field>
              <label for="classe">Classe</label>
              <md-select v-model="characterClass" name="characterClass" id="classe">
                <md-option value="wizard">Wizard</md-option>
              </md-select>
            </md-field>
          </div>

          <div class="md-toolbar-section-end">
            <md-field>
              <label for="level">Level</label>
              <md-select v-model="characterLevel" name="characterLevel" id="level">
                <md-option :value="1">1</md-option>
                <md-option :value="2">2</md-option>
                <md-option :value="3">3</md-option>
                <md-option :value="4">4</md-option>
                <md-option :value="5">5</md-option>
                <md-option :value="6">6</md-option>
                <md-option :value="7">7</md-option>
                <md-option :value="8">8</md-option>
                <md-option :value="9">9</md-option>
                <md-option :value="10">10</md-option>
                <md-option :value="11">11</md-option>
                <md-option :value="12">12</md-option>
                <md-option :value="13">13</md-option>
                <md-option :value="14">14</md-option>
                <md-option :value="15">15</md-option>
                <md-option :value="16">16</md-option>
                <md-option :value="17">17</md-option>
                <md-option :value="18">18</md-option>
                <md-option :value="19">19</md-option>
                <md-option :value="20">20</md-option>
              </md-select>
            </md-field>
          </div>
        </div>

        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-field>
              <label>Casting ability modifier</label>
              <md-input v-model="characterAbilityModifier" type="number"></md-input>
            </md-field>
          </div>

          <div class="md-toolbar-section-end">
            <md-field>
              <label>Points restants:</label>
              <md-input :value="characterAvailablePoints" readonly></md-input>
            </md-field>
          </div>

        </div>
      </md-toolbar>
      <md-list>
        <div v-for="human, key in levels.humanized">
          <md-subheader>{{ human }}</md-subheader>

          <md-list-item
            v-for="spell in spellsByLevel(key)"
            :key="spell.name">
            <md-checkbox v-model="preparedSpells" :value="spell.name" />
            <router-link :to="`/spell/${spell.name}`" class="md-list-item-text">{{ spell.name }}</router-link>
          </md-list-item>

        </div>
      </md-list>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters } from 'vuex'
  import * as levels from '@/spells-levels'

  export default {
    name: 'SpellBook',
    data () {
      return { levels }
    },
    computed: {
      ...mapState(['knownSpells']),
      ...mapGetters(['spellsByLevel', 'preparedSpellsWeight', 'preparedSpellWeight']),
      characterAvailablePoints () {
        return this.characterLevel + this.characterAbilityModifier - this.preparedSpellsWeight
      },

      preparedSpells: {
        get () {
          return this.$store.state.preparedSpells
        },
        set (spells) {
          const [addedSpell] = spells.slice(-1)
          if (this.characterAvailablePoints > this.preparedSpellWeight(addedSpell)) {
            this.$store.commit('setPreparedSpells', spells)
          }
        }
      },
      characterClass: {
        get () {
          return this.$store.state.characterClass
        },
        set (value) {
          this.$store.commit('setCharacterClass', value)
        }
      },
      characterLevel: {
        get () {
          return this.$store.state.characterLevel
        },
        set (value) {
          this.$store.commit('setCharacterLevel', value)
        }
      },
      characterAbilityModifier: {
        get () {
          return this.$store.state.characterAbilityModifier
        },
        set (value) {
          if (!value) {
            value = 0
          }

          this.$store.commit('setCharacterAbilityModifier', parseInt(value))
        }
      }
    }
  }
</script>
<style lang="sass" scoped>
  .md-theme-default a:not(.md-button)
    color: #212121
</style>