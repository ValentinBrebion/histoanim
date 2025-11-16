<template>
<v-layout style="height: 90px;">
    <v-bottom-navigation
      color="primary"
      active
      grow
    >
      <v-btn @click="goToHome" variant="text">
        <v-icon>mdi-home</v-icon>
        <span>Accueil</span>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" variant="text">
            <img 
              :src="currentFlag" 
              alt="current language" 
              width="24" 
              height="24" 
              style="margin-right: 8px;" 
            />
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>

        </template>
        <v-list>
          <v-list-item
            v-for="lang in availableLanguages"
            :key="lang.code"
            @click="changeLanguage(lang.code)"
            class="language-item"
          >
            <img 
              :src="lang.flag" 
              alt="current language" 
              width="24" 
              height="24" 
              style="margin-right: 8px;" 
            />
            <v-list-item-title>{{ lang.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-bottom-navigation>
  </v-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const value = ref(0);
const languageNames = { fr: 'Français', gb: 'English' };
const flags = import.meta.glob('../assets/country/*.svg', { eager: true, import: 'default' });

const availableLanguages = Object.entries(flags).map(([path, url]) => {
  const codeMatch = path.match(/\/(\w+)\.svg$/);
  const code = codeMatch ? codeMatch[1] : 'unknown';
  return {
    code,
    name: languageNames[code] || code,
    flag: url
  };
});

const currentLanguage = ref('Français');
const currentFlag = ref(availableLanguages.find(lang => lang.code === 'fr')?.flag || '');


const changeLanguage = (langCode) => {
  const selectedLang = availableLanguages.find(lang => lang.code === langCode);
  if (selectedLang) {
    currentLanguage.value = selectedLang.name;
    currentFlag.value = selectedLang.flag;
  }
};
const goToHome = () => {
  router.push('/');
};
</script>