<template>
  <main>
    <h1>{{ $t('title') }}</h1>
    <v-text-field
      v-model="search"
      hide-details
      :label="$t('search')"
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
        <v-card-title class="v-card-title">{{ anime.title }}</v-card-title>
        <v-card-subtitle class="v-card-subtitle">{{ anime.year }}</v-card-subtitle>
      </v-card>
    </div>

    <p v-else-if="search" class="no-result">{{ $t('noResult') }}</p>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import router from '@/router/router';

const { t } = useI18n();

const props = defineProps({
  animes: {
    type: Object,
    required: true
  }
});

const search = ref("");
const browserLanguage = ref(navigator.language);


const selectedAnime = (anime) => {
  router.push({ name: anime.to, params: { animeName: anime.to}})
};

const filteredAnimes = computed(() => {
  if (!search.value) return [];
  return props.animes.filter((anime) =>
    anime.title.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<style lang="scss">
main {
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
.v-text-field .v-field--no-label input, .v-text-field .v-field--active input {
 background-color: transparent;
 border-color: transparent;
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
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  color: #2c3e50;
  padding: 15px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.9);
    color: white;
  }
}

.no-result {
  margin-top: 30px;
  color: white;
  font-weight: bold;
}
</style>
