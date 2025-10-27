<template>
  <main class="main">
    <h1>HistoAnim</h1>

    <v-text-field
      v-model="search"
      hide-details
      label="Recherche un animé"
      append-inner-icon="mdi-magnify"
      clearable
    ></v-text-field>

    <div class="results" v-if="filteredAnimes.length > 0">
      <v-card
        v-for="anime in filteredAnimes"
        :key="anime.id"
        class="anime-card"
        @click="selectedAnime(anime)"
      >
        <v-card-title>{{ anime.title }}</v-card-title>
        <v-card-subtitle>{{ anime.year }}</v-card-subtitle>
      </v-card>
    </div>

    <p v-else-if="search" class="no-result">Aucun résultat trouvé.</p>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import router from '@/router/router'
const search = ref("");

const animes = [
  { id: 1, title: "Parasyte", year: 2002, to: 'parasyte' }
];

const selectedAnime = (anime) => {
  router.push({ name: anime.to, params: { animeName: anime.to}})
};

const filteredAnimes = computed(() => {
  if (!search.value) return [];
  return animes.filter((anime) =>
    anime.title.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<style lang="scss">
.main {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 100px;

  background: linear-gradient(-45deg, #ff6b6b, #f7d794, #1dd1a1, #54a0ff);
  background-size: 400% 400%;
  animation: gradientAnimation 12s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

h1 {
  padding-bottom: 40px;
  color: white;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

.v-input {
  max-width: 600px;
  width: 80%;
  max-height: 70px;
  color: black;
}

.results {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 80%;
  max-width: 600px;
}

.anime-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
}

.no-result {
  margin-top: 30px;
  color: white;
  font-weight: bold;
}
</style>
