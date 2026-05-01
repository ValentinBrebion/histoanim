<template>
  <v-app class="app">
    <RouterView :animes="animes" />
  </v-app>
</template>

<script setup>
import animes from "@/data/animes.json";
</script>

<style lang="scss">
</style>
