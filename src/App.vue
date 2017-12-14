<template>
  <div id="app">
    <div class="scrollview">
      <router-view/>
    </div>

    <md-bottom-bar class="md-primary md-elevation-1" md-mode="shift">
      <md-bottom-bar-item @click.native="navigate('/')" exact md-label="Spellz" md-icon="list"></md-bottom-bar-item>
      <md-bottom-bar-item @click.native="navigate('/book')" md-label="Spellbook" md-icon="book"></md-bottom-bar-item>
      <md-bottom-bar-item @click.native="navigate('/character')" md-label="Character" md-icon="person"></md-bottom-bar-item>
    </md-bottom-bar>

  </div>
</template>

<script>
  export default {
    name: 'app',
    created () {
      this.$store.dispatch('init')
    },
    methods: {
      navigate (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="scss">

  #app {
    display: flex;
    flex-flow: column nowrap;
  }

  .scrollview {
    height: calc(100vh - 56px);
    overflow: auto;
  }

  @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons");
  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("default", (
    primary: md-get-palette-color(red, A400),
    accent: md-get-palette-color(pink, A200),
    theme: 'light'
  ));

  @import "~vue-material/dist/theme/all"; // Apply the theme

  $schools: (
    'abjuration': md-get-palette-color(indigo, 500),
    'conjuration': md-get-palette-color(teal, 500),
    'divination': md-get-palette-color(amber, 500),
    'enchantment': md-get-palette-color(deeppurple, 500),
    'evocation': md-get-palette-color(indigo, 500),
    'illusion': md-get-palette-color(red, 500),
    'necromancy': md-get-palette-color(deeppurple, 500),
    'transmutation': md-get-palette-color(lightgreen, 500)
  );

  @each $school, $color in $schools {
    .#{$school} {
      background-color: #{$color}!important;
      color: white!important;
    }
  }
</style>