<template>
  <md-app>
    <md-app-toolbar md-elevation="1">
      <md-button @click="$router.go(-1)" class="md-icon-button">
        <md-icon>navigate_before</md-icon>
      </md-button>
     <h3 class="md-title" style="flex: 1">{{ spell.name }}<md-icon v-if="spell.ritual == 'yes'" class="md-accent">whatshot</md-icon></h3>

      <md-button @click="toggleKnownSpell(spell)" class="md-icon-button">
        <md-icon v-if="!spellIsKnown(spell)">check_box_outline_blank</md-icon>
        <md-icon v-if="spellIsKnown(spell)">check_box</md-icon>
      </md-button>

    </md-app-toolbar>
    <md-app-content>
      <p><strong>Range</strong> {{ spell.range }}</p>
      <p><strong>Duration</strong> {{ spell.duration }}</p>

      <div v-html="spell.desc"></div>
    </md-app-content>
  </md-app>
</template>

<script>
  import _ from 'underscore'
  import spells from '@/spells'

  import { mapActions, mapGetters, mapState } from 'vuex'

  export default {
    name: 'Spell',
    created () {
      console.log('hai', this.knownSpells)
    },
    data () {
      return {
        spell: _.find(spells, {name: this.$route.params.name})
      }
    },
    methods: {
      ...mapActions(['toggleKnownSpell'])
    },
    computed: {
      ...mapState(['knownSpells']),
      ...mapGetters(['spellIsKnown'])
    }
  }
</script>

<style lang="sass" scoped>
  .md-title
    display: flex
    align-items: center

    .md-icon
      margin-left: 5px
</style>
