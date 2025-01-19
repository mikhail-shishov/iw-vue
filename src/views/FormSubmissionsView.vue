<template>
  <main class="content">
    <h2>Uložene údaje</h2>
    <p><strong>Meno:</strong> {{ newsletterFormStore.full_name }}</p>
    <p><strong>Mail:</strong> {{ newsletterFormStore.email }}</p>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useNewsletterFormStore } from "@/stores/newsletterFormStore";

export default defineComponent({
  name: "DisplayStoredData",
  setup() {
    const newsletterFormStore = useNewsletterFormStore();

    return {
      newsletterFormStore,
    };
  },
});
</script>
