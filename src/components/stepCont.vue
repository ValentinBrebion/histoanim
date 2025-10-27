<template>
  <h1>{{ animeData.title }}</h1>
  <ul>
    <li v-for="ep in animeData.episodes" :key="ep">{{ ep }}</li>
  </ul>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Import du JSON
import animes from '@/data/animes.json';

const route = useRoute();
const animeName = ref(route.params.animeName);
const animeData = ref({ title: '', episodes: [] });

onMounted(() => {
  if (animes[animeName.value]) {
    animeData.value = animes[animeName.value];
  } else {
    animeData.value = { title: 'Animé inconnu', episodes: [] };
  }
});
</script>
<style lang="scss">
$primary-color: #42b983;

.card {
  background-color: lighten($primary-color, 30%);
  border-radius: 12px;
  padding: 20px;

  h1 {
    color: $primary-color;
  }
}
</style>