<template>
   
</template>
<script setup lang="ts">
import { ref } from 'vue'

const step = ref(0)

const steps = [
  { label: 'Choose your product' },
  { label: 'Checkout' },
  { label: 'Review order' },
  { label: 'Confirm and pay' },
]
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