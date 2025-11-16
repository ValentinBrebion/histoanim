<template>
  <h1 style="text-align: center;">{{ animeData.title }}</h1>
  <div class="anime-stepper">

    <v-stepper v-if="currentEpisodes.length" v-model="currentStep" style="width: 100%">
      <!-- Stepper Header -->
      <v-stepper-header>
        <template v-for="(episode, index) in currentEpisodes" :key="index">
          <v-stepper-item
            :complete="currentStep > index + 1"
            :value="index + 1"
            :title="`Épisode ${pageStart + index + 1}`"
          />
          <v-divider v-if="index < currentEpisodes.length - 1" />
        </template>
      </v-stepper-header>

      <v-stepper-window>
        <v-stepper-window-item
          v-for="(episode, index) in currentEpisodes"
          :key="index"
          :value="index + 1"
        >
          <v-card class="pa-4" outlined>
            <v-card-title>Épisode {{ pageStart + index + 1 }} — {{ episode.title }}</v-card-title>
            <v-card-text>
              {{ episode.description || "Description non disponible." }}
            </v-card-text>

            <v-card-actions>
              <v-btn
                v-if="index > 0"
                @click="currentStep = index"
                variant="text"
              >
                Précédent
              </v-btn>
              <v-spacer />
              <v-btn
                v-if="index < currentEpisodes.length - 1"
                @click="currentStep = index + 2"
                color="primary"
              >
                Suivant
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-window-item>
      </v-stepper-window>
    </v-stepper>

    <div class="pagination-buttons" style="margin-top: 1rem; display: flex; gap: 1rem;">
      <v-btn v-if="currentPage > 0" @click="prevPage" variant="outlined">Page précédente</v-btn>
      <v-btn v-if="hasNextPage" @click="nextPage" color="primary">Page suivante</v-btn>
    </div>
  </div>
  <!--<bottomNav></bottomNav>-->
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import animes from "@/data/animes.json";
import bottomNav from "./bottomNav.vue";

const route = useRoute();
const animeName = ref(route.params.animeName);
const animeData = ref({ title: "", episodes: [] });
const currentStep = ref(1);

const pageSize = 5;
const currentPage = ref(0);

const pageStart = computed(() => currentPage.value * pageSize);
const currentEpisodes = computed(() =>
  animeData.value.episodes.slice(pageStart.value, pageStart.value + pageSize)
);
const hasNextPage = computed(() =>
  pageStart.value + pageSize < animeData.value.episodes.length
);

function nextPage() {
  if (hasNextPage.value) {
    currentPage.value++;
    currentStep.value = 1;
  }
}

function prevPage() {
  if (currentPage.value > 0) {
    currentPage.value--;
    currentStep.value = 1;
  }
}

onMounted(() => {
  if (animes[animeName.value]) {
    animeData.value = animes[animeName.value];
  } else {
    animeData.value = { title: "Animé inconnu", episodes: [] };
  }
});
</script>

<style lang="scss">
.anime-stepper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
</style>
