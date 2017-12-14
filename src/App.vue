<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created () {
      this.$store.dispatch('init')
    }
  }
</script>

<style lang="scss">

  @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons");
  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("default", (
    primary: md-get-palette-color(red, A400),
    accent: md-get-palette-color(pink, A200),
    theme: 'dark'
  ));

  @import "~vue-material/dist/theme/all"; // Apply the theme

  $primary-700: md-get-palette-color(purple, 700);
  $primary-800: md-get-palette-color(purple, 800);

  .primary-700 {
    background-color: $primary-700!important;
  }

  .primary-800 {
    background-color: $primary-800!important;
  }

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