<template>
  <form @submit.prevent="submitForm" class="owhforms form-horizontal form-subscribe">
    <b>{{ $t('subscribe.h1') }}</b>
    <div v-if="!isLoading && !isSuccess">
      <input type="text" class="cf-input-text required" name="full_name" :placeholder="$t('subscribe.input_name')"
        v-model="full_name" required />
      <input type="email" class="cf-input-text required" name="email" placeholder="Email *" v-model="email" required />
      <label class="cf-label cf-label-checkbox label-checkbox">
        <input type="checkbox" class="form-input-checkbox" required id="gdpr-accept" />
        <span class="checkmark"></span>
        <span class="fs-label-text">
          {{ $t('subscribe.input_gdpr') }}
        </span>
      </label>
      <input type="submit" name="owhforms_submit" class="btn btn-white-fill" :value="$t('subscribe.input_submit')" />
    </div>

    <div v-if="isLoading" class="owhforms_loading">
      <p>Loading...</p>
    </div>

    <div v-if="isSuccess" class="owhforms_success">
      <p class="text">
        <b>Vielen Dank für dein Interesse an unseren Produkten.</b>
      </p>
      <p class="text">
        Bitte beachte, dass wir dich von der Telefonnummer
        <a href="tel:+491701160882">+49&nbsp;170‑1160882</a> aus während den
        üblichen Arbeitszeiten kontaktieren werden.
      </p>
      <p class="text">
        In einem kurzen Telefonat möchten wir dich gerne über unsere Angebote
        und Werkzeuge informieren, die dir dabei helfen können, dein Trading zu
        optimieren.
      </p>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useNewsletterFormStore } from "@/stores/newsletterFormStore";

export default defineComponent({
  name: "NewsletterForm",
  setup() {
    const newsletterFormStore = useNewsletterFormStore();
    const isLoading = ref(false);
    const isSuccess = ref(false);
    const full_name = ref("");
    const email = ref("");

    const submitForm = () => {
      isLoading.value = true;
      isSuccess.value = false;

      setTimeout(() => {
        console.log("Your data:", {
          full_name: full_name.value,
          email: email.value,
        });

        newsletterFormStore.setFormData({
          full_name: full_name.value,
          email: email.value,
        });

        isLoading.value = false;
        isSuccess.value = true;
      }, 2000);
    };

    return {
      full_name,
      email,
      isLoading,
      isSuccess,
      submitForm,
    };
  },
});
</script>
