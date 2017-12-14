<template>
  <div>
    <md-toolbar md-elevation="1">
      <md-field md-clearable>
        <label>Recherche</label>
        <md-input v-model="searchTerm"></md-input>
      </md-field>
    </md-toolbar>

    <md-list>
      <div v-for="spell in computedSpells" :key="spell.name">
        <md-list-item>
          <router-link :to="`/spell/${spell.name}`">
            <div class="md-list-item-text">
              <span>{{ spell.name }} <md-icon v-if="spell.ritual == 'yes'" class="md-accent">whatshot</md-icon></span>
              <span><strong>Range</strong> {{ spell.range }}</span>
              <span><strong>Duration</strong> {{ spell.duration }}</span>
            </div>
          </router-link>

        </md-list-item>
      </div>
    </md-list>
    <md-dialog :md-active.sync="showSpellDetailsDialog">
      <md-dialog-title>{{ spellDetails.name }}<md-icon v-if="spellDetails.ritual == 'yes'" class="md-accent">whatshot</md-icon></md-dialog-title>
      <md-dialog-content>
        <p><strong>Range</strong> {{spellDetails.range }}</p>
        <p><strong>Duration</strong> {{spellDetails.duration }}</p>

        <div v-html="spellDetails.desc"></div>
      </md-dialog-content>
    </md-dialog>
  </div>
</template>

<script>
  import data from '@/spells'
  import Fuse from 'fuse.js'
  import _ from 'underscore'

  import { mapState, mapGetters } from 'vuex'

  const spells = _.filter(data, function (value, key, object) {
    return value.page.includes('phb')
  })

  const fuse = new Fuse(spells, {
    keys: ['name'],
    minMatchCharLength: 3,
    threshold: 0.4
  })

  export default {
    name: 'SpellsList',
    data () {
      return {
        showSearch: false,
        showSpellDetailsDialog: false,
        searchTerm: '',
        spellDetails: {}
      }
    },
    computed: {
      ...mapState(['knownSpells']),
      ...mapGetters(['spellIsKnown']),
      computedSpells () {
        if (this.searchTerm === '') {
          return spells
        } else {
          return fuse.search(this.searchTerm)
        }
      }
    },
    methods: {
      showSpellDetails (spell) {
        this.spellDetails = spell
        this.showSpellDetailsDialog = true
      },
      schoolAvatar (school) {
        return school.charAt(0).toUpperCase()
      },
      schoolColor (school) {
        return `${school.toLowerCase()}`
      }
    }
  }
</script>
<style lang="sass" scoped>

  .md-theme-default a:not(.md-button)
    color: white
    width: 100%

    &:focus
      text-decoration: none

  .md-list-item
    margin-bottom: 10px

  .md-list .md-list-item-content
    padding-top: 15px


  .md-list-item-text span i
    width: auto

</style>
