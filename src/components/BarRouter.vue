<template>
  <md-bottom-bar class="md-accent" md-sync-route>
    <md-bottom-bar-item to="/spells" md-label="Home" md-icon="home"></md-bottom-bar-item>
    <md-bottom-bar-item to="/components/bottom-bar/posts" md-label="Posts" md-icon="/assets/icon-whatshot.svg"></md-bottom-bar-item>
    <md-bottom-bar-item to="/components/bottom-bar/favorites" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
  </md-bottom-bar>
</template>

<script>
  export default {
    name: 'BarRouter'
  }
</script>

<style lang="scss" scoped>
</style>
