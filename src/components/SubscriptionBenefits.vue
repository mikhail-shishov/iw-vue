<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SubscriptionBenefits",
  setup() {
    const { t } = useI18n();

    const subscriptionFeatures = [
      { icon: "/icons/home-7.svg", titleKey: "pro_benefits.item_1.h", descKey: "pro_benefits.item_1.d" },
      { icon: "/icons/home-8.svg", titleKey: "pro_benefits.item_2.h", descKey: "pro_benefits.item_2.d" },
      { icon: "/icons/home-9.svg", titleKey: "pro_benefits.item_3.h", descKey: "pro_benefits.item_3.d" },
      { icon: "/icons/home-10.svg", titleKey: "pro_benefits.item_4.h", descKey: "pro_benefits.item_4.d" },
    ];

    return { subscriptionFeatures, t };
  },
});
</script>

<template>
  <section class="text-sect">
    <div class="container">
      <h2 class="h1">{{ t("pro_benefits.h1") }}</h2>
      <p>{{ t("pro_benefits.p1") }}</p>
      <div class="feature-grid">
        <div v-for="(item, index) in subscriptionFeatures" :key="index" class="feature-item">
          <img :src="item.icon" class="feature-item-icon" loading="lazy" alt="">

          <div class="feature-item-text">
            <h4 class="h4">{{ t(item.titleKey) }}</h4>
            <p>{{ t(item.descKey) }}</p>
          </div>
        </div>
      </div>
      <div class="btn-container">
        <RouterLink :to="{ name: 'subscription' }">
          <v-btn class="btn btn-black-fill btn-big">
            {{ $t('btn.pro') }}
          </v-btn>
        </RouterLink>
      </div>
    </div>
  </section>
</template>


<style scoped>
  .feature-grid + .btn-container {
    margin-top: 40px;
  }
</style>