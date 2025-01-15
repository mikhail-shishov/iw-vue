<script setup lang="ts">
import { useNewsletterFormStore } from "@/stores/newsletterFormStore";

const newsletterFormStore = useNewsletterFormStore();
console.log(newsletterFormStore.full_name); // Access the stored full name
console.log(newsletterFormStore.email);
</script>

<template>
  <main class="content">
  </main>
</template>
