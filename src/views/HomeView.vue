<script setup lang="ts">
import UserReviews from "../components/UserReviews.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const featureItems = [
  { icon: "/icons/home-1.svg", titleKey: "home.section_3.features.item_1.h", descKey: "home.section_3.features.item_1.d" },
  { icon: "/icons/home-2.svg", titleKey: "home.section_3.features.item_2.h", descKey: "home.section_3.features.item_2.d" },
  { icon: "/icons/home-3.svg", titleKey: "home.section_3.features.item_3.h", descKey: "home.section_3.features.item_3.d" },
  { icon: "/icons/home-4.svg", titleKey: "home.section_3.features.item_4.h", descKey: "home.section_3.features.item_4.d" },
  { icon: "/icons/home-5.svg", titleKey: "home.section_3.features.item_5.h", descKey: "home.section_3.features.item_5.d" },
  { icon: "/icons/home-6.svg", titleKey: "home.section_3.features.item_6.h", descKey: "home.section_3.features.item_6.d" },
];
</script>

<template>
  <main class="content">
    <section class="home-intro-sect">
      <div class="container">
        <div class="home-intro-text">
          <h1 class="h1">{{ $t('home.intro_1') }}</h1>
          <h2 class="h3">{{ $t('home.intro_2') }}</h2>
          <h2 class="h3">{{ $t('home.intro_3') }}</h2>
          <div class="btn-container">
            <a href="/de/pro-trader/" class="btn btn-big btn-white-fill">{{ $t('btn.pro') }}</a>
            <a href="/de/gespraechstermin-coaching-aktiv/" class="btn btn-big btn-white">{{ $t('btn.coaching') }}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="text-sect lightgrey-bg l-space">
      <div class="container goToDiv1">
        <h2 class="h1">{{ $t('home.section_1.h1') }}</h2>
        <h3 class="h2">{{ $t('home.section_1.h2') }}</h3>
        <p>{{ $t('home.section_1.p_1') }}</p>
        <p>{{ $t('home.section_1.p_2') }}</p>
        <div class="center">
          <img src="/home-chart-de.webp" alt="Verlierer vs. Gewinner" loading="lazy" width="680" height="374">
        </div>
        <p>{{ $t('home.section_1.p_3') }}</p>
        <p>{{ $t('home.section_1.p_4') }}</p>
        <p>{{ $t('home.section_1.p_5') }}</p>
        <ul class="list">
          <li>{{ $t('home.section_1.list_1.item_1') }}</li>
          <li>{{ $t('home.section_1.list_1.item_2') }}</li>
          <li>{{ $t('home.section_1.list_1.item_3') }}</li>
        </ul>

        <div class="number-grid">
          <div class="number-item">
            <div class="number-item-left">
              <span class="number-item-left-number">2017</span>
            </div>
            <div class="number-item-right">
              {{ $t('home.section_1.features.item_1') }}
            </div>
          </div>
          <div class="number-item">
            <div class="number-item-left">
              <span class="number-item-left-number">77%</span>
            </div>
            <div class="number-item-right">
              {{ $t('home.section_1.features.item_2') }}
            </div>
          </div>
          <div class="number-item">
            <div class="number-item-left">
              <span class="number-item-left-number">&gt;10%</span>
            </div>
            <div class="number-item-right">
              {{ $t('home.section_1.features.item_3') }}
            </div>
          </div>
        </div>

        <p>{{ $t('home.section_1.p_6') }}</p>
        <h4 class="h4">{{ $t('home.section_1.h3') }}</h4>
        <ul class="list">
          <li>{{ $t('home.section_1.list_2.item_1') }}</li>
          <li>{{ $t('home.section_1.list_2.item_2') }}</li>
          <li>{{ $t('home.section_1.list_2.item_3') }}</li>
          <li>{{ $t('home.section_1.list_2.item_4') }}</li>
          <li>{{ $t('home.section_1.list_2.item_5') }}</li>
        </ul>
        <p>{{ $t('home.section_1.p_7') }}</p>
      </div>
    </section>

    <section class="border-sect champ-sect">
      <div class="container">
        <div class="champ-row">
          <div class="champ-img img-container">
            <picture>
              <source srcset="/max-award-2017.webp" type="image/webp">
              <img src="/max-award-2017.jpg" class="champ-img-max" width="258" height="292" loading="lazy" alt="">
            </picture>
            <div class="img-desc">{{ $t('home.section_2.img_desc') }}</div>
          </div>
          <div class="champ-text">
            <h2 class="h2">
              {{ $t('home.section_2.h1') }}
            </h2>
            <div class="champ-numbers">
              <div class="champ-numbers-item">
                <img src="/icons/champ.svg" class="champ-numbers-icon" width="45" height="45" loading="lazy" alt="">
                <h4 class="number-item-left-number">2017</h4>
                <p class="text">{{ $t('home.section_2.y_2017') }}</p>
              </div>
              <div class="champ-numbers-item">
                <img src="/icons/champ.svg" class="champ-numbers-icon" width="45" height="45" loading="lazy" alt="">
                <h4 class="number-item-left-number">2019</h4>
                <p class="text">{{ $t('home.section_2.y_2019') }}</p>
              </div>
              <div class="champ-numbers-item">
                <img src="/icons/champ.svg" class="champ-numbers-icon" width="45" height="45" loading="lazy" alt="">
                <h4 class="number-item-left-number">2021</h4>
                <p class="text">{{ $t('home.section_2.y_2021') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-sect">
      <div class="container">
        <h2 class="h1">{{ t('home.section_3.h1') }}</h2>
        <p>{{ t('home.section_3.p_1') }}</p>
        <p>{{ t('home.section_3.p_2') }}</p>
        <div class="feature-grid">
          <div v-for="(item, index) in featureItems" :key="index" class="feature-item">
            <img :src="item.icon" class="feature-item-icon" loading="lazy" alt="Feature Icon">

            <div class="feature-item-text">
              <h4 class="h4">{{ t(item.titleKey) }}</h4>
              <p>{{ t(item.descKey) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <UserReviews />
  </main>
</template>

<style scoped>
.home-intro-text {
  position: relative;
  z-index: 3;
  max-width: 620px;
}

.home-intro-text h1,
.home-intro-text h2,
.home-intro-text h3 {
  color: var(--lightgrey-2);
}

.home-intro-text .btn-container {
  margin-top: 40px;
}

.intro-sect .btn {
  margin-top: 35px;
}

.champ-row {
  display: flex;
  gap: 30px;
}

.champ-numbers {
  display: flex;
  gap: 30px;
  text-align: center;
}

.champ-numbers-icon {
  margin-bottom: 10px;
  width: 45px;
}

.champ-numbers-item .text {
  margin: 5px 0 0;
}

.champ-img {
  flex-grow: 1;
  min-width: 39%;
}

@media (min-width: 1921px) {
  .home-intro-sect {
    padding: 200px 0 130px;
    min-height: 70vh;
  }

  .home-intro-sect {
    background-position: 60% 0;
  }
}

@media (max-width: 1280px) {
  .home-intro-text {
    max-width: 500px;
  }
}

@media (max-width: 992px) {
  .home-intro-text {
    text-align: left;
    margin-left: 0
  }

  .home-intro-sect {
    padding: 360px 0 80px;
    background-position: 18% 0
  }

  .home-intro-sect:after {
    width: 120px
  }

  .home-intro-text .h3,
  .home-intro-text .h4 {
    margin-left: 0
  }

  .home-intro-text .h1 {
    font-size: 48px;
    margin: 0 0 25px
  }

  .home-intro-sect {
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: flex-end
  }

  .home-intro-text {
    text-align: left;
    margin-left: 0;
  }

  .home-intro-sect {
    padding: 360px 0 80px;
    background-position: 65% 0;
    min-height: calc(100vh - 60px);
    display: flex;
    align-items: flex-end;
  }

  .home-intro-text .h3,
  .home-intro-text .h4 {
    margin-left: 0;
  }

  .home-intro-text .h1 {
    font-size: 48px;
    margin: 0 0 25px;
  }

  .text-row-about {
    flex-direction: column;
  }
}

@media (max-width: 768px) {

  .text-sect,
  .logo-sect {
    padding: 60px 0;
  }

  .home-intro-text {
    max-width: 100%;
  }

  .home-intro-sect {
    padding: 0 0 80px;
    min-height: unset;
    background-image: unset;
    flex-direction: column;
  }

  .home-intro-sect:before {
    content: "";
    background-image: url(./src/assets/img/home-bg.webp);
    background-size: cover;
    background-position: 90% 0;
    height: 300px;
    width: 100%;
    display: block;
    margin-bottom: 30px;
  }

  .home-intro-sect .h1,
  .home-intro-sect .h3 {
    margin-bottom: 15px;
  }

  .home-intro-sect:before {
    background-position: 80% 0;
  }

}

@media (max-width: 420px) {


  .text-col {
    min-width: 100%;
  }

  .home-intro-text .h1 {
    font-size: 42px;
  }
}

@media (max-width: 375px) {
  .home-intro-sect {
    padding: 0 0 60px;
  }

  .home-intro-text .h1 {
    font-size: 36px;
  }
}

@media (max-width: 340px) {
  .home-intro-sect:before {
    height: 240px;
  }
}
</style>