<template>
  <md-app>
    <md-app-toolbar md-elevation="1">
      <md-button @click="$router.go(-1)" class="md-icon-button">
        <md-icon>navigate_before</md-icon>
      </md-button>
     <h3 class="md-title" style="flex: 1">{{ spell.name }}<md-icon v-if="spell.ritual == 'yes'" class="md-accent">whatshot</md-icon></h3>

      <md-button @click="toggleKnownSpell(spell)" class="md-icon-button">
        <md-icon class="md-primary" v-if="!spellIsKnown(spell)">check_box_outline_blank</md-icon>
        <md-icon class="md-primary" v-if="spellIsKnown(spell)">check_box</md-icon>
      </md-button>

    </md-app-toolbar>
    <md-app-content>
      <p>
        <strong>Range</strong> {{ spell.range }}<br>
        <strong>Duration</strong> {{ spell.duration }}<br>
        <strong>Concentration</strong> {{ spell.concentration }}<br>
        <strong>Casting time</strong> {{ spell.casting_time }}<br>
        {{ spell.school }} {{ humanized[spell.level] }}
      </p>

      <div v-html="spell.desc"></div>
    </md-app-content>
  </md-app>
</template>

<script>
  import _ from 'underscore'
  import spells from '@/spells'
  import { humanized } from '@/spells-levels'

  import { mapActions, mapGetters, mapState } from 'vuex'

  export default {
    name: 'Spell',
    data () {
      return {
        spell: _.find(spells, {name: this.$route.params.name}),
        humanized
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
