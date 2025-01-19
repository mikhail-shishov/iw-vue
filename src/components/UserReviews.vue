<template>

  <section class="review-sect text-sect">
    <div class="container">
      <div class="h2 center">{{ $t('reviews.h1') }}</div>
      <Splide class="review-splide" :options="{ type: 'loop', rewind: true, perPage: 2, perMove: 1, gap: 40 }" aria-label="Reviews">
        <SplideSlide>
          <div class="review-stars">
            <span class="review-stars-item"></span>
            <span class="review-stars-item"></span>
            <span class="review-stars-item"></span>
            <span class="review-stars-item"></span>
            <span class="review-stars-item review-stars-item-grey"></span>
          </div>
          <div class="article-info-left">
            <div class="article-info-avatar">
              <img src="/article/avatar.svg" loading="lazy" width="60" height="60" alt="">
            </div>
            <div class="article-info-item">
              <b itemprop="author">M.H.</b>
              <i>InsiderWeek Member</i>
            </div>
          </div>
          <div class="review-quote">
            <cite class="text">{{ $t('reviews.item_1') }}</cite>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="review-stars">
            <span class="review-stars-item"></span>
            <span class="review-stars-item"></span>
            <span class="review-stars-item"></span>
            <span class="review-stars-item"></span>
            <span class="review-stars-item"></span>
          </div>
          <div class="article-info-left">
            <div class="article-info-avatar">
              <img src="/article/avatar.svg" loading="lazy" width="60" height="60" alt="">
            </div>
            <div class="article-info-item">
              <b itemprop="author">U.</b>
              <i>InsiderWeek Member</i>
            </div>
          </div>
          <div class="review-quote">
            <cite class="text">{{ $t('reviews.item_2') }}</cite>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="review-stars">
            <span class="review-stars-item"></span>
            <span class="review-stars-item"></span>
            <span class="review-stars-item"></span>
            <span class="review-stars-item"></span>
            <span class="review-stars-item"></span>
          </div>
          <div class="article-info-left">
            <div class="article-info-avatar">
              <img src="/article/avatar.svg" loading="lazy" width="60" height="60" alt="">
            </div>
            <div class="article-info-item">
              <b itemprop="author">J.P.</b>
              <i>InsiderWeek Member</i>
            </div>
          </div>
          <div class="review-quote">
            <cite class="text">{{ $t('reviews.item_3') }}</cite>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// @ts-expect-error no-ts-module
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },
});
</script>

<style>
.review-splide {
  margin-top: 60px;
}

.review-splide .h3 {
  margin: 15px 0 60px;
}

.review-splide .text {
  font-style: normal;
  display: block;
  margin: auto;
}

.review-stars {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 25px;
}

.review-stars-item {
  width: 24px;
  height: 24px;
  background-position: center;
  background-size: contain;
  background-image: url(./src/assets/img/icons/star-green.svg);
}

.review-splide .splide__arrow {
  top: 50%;
  right: -50px;
}

.review-splide .splide__arrow--prev {
  left: -50px;
  right: unset;
}

.review-splide .splide__pagination {
  display: none;
}

.splide__arrows--rtl .splide__arrow--next {
  left: 1em;
  right: auto;
}

.splide__arrow {
  align-items: center;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 2em;
  justify-content: center;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2em;
  z-index: 1;
  background: #fff0;
  background-image: url(./src/assets/img/en/icons/slider-arrow.svg);
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 0;
  outline: 0;
}

.splide__arrow:disabled {
  opacity: 0.3;
}

.splide__arrow svg {
  display: none;
}

.splide__arrow--prev {
  transform: translateY(-50%) rotate(180deg);
}

.splide__pagination__page {
  border: 0;
  width: 13px;
  height: 13px;
  background-color: var(--black);
  opacity: 0.25;
  margin: 4px 10px;
  border-radius: 50px;
  padding: 0;
}

.splide__pagination__page.is-active {
  background: var(--black);
  transform: scale(1);
  opacity: 1;
}

.splide__arrow--prev {
  left: -6px;
}

.splide__arrow--next {
  right: -6px;
}

.splide__slide,
.splide__list {
  transition: 0.3s;
}

.results-splide,
.tools-splide,
.news-splide,
.video-results-splide {
  margin: 35px 0;
}

.results-splide iframe,
.video-results-splide iframe {
  width: 100%;
}

.results-splide .splide__pagination,
.video-results-splide .splide__pagination,
.tools-splide .splide__pagination,
.news-splide .splide__pagination {
  display: none;
}

.splide__pagination {
  padding: 0;
}

.results-splide .splide__track,
.tools-splide .splide__track,
.news-splide .splide__track,
.video-results-splide .splide__track {
  max-width: 100%;
  margin: auto;
}

.results-splide .splide__arrow--next,
.tools-splide .splide__arrow--next {
  right: -40px;
  top: 120px;
}

.tools-splide .splide__arrow--next {
  top: 145px;
}

.news-splide .splide__arrow--next {
  right: -30px;
  top: 78px
}

.results-splide .splide__arrow--prev,
.tools-splide .splide__arrow--prev {
  left: -40px;
  top: 120px;
}

.tools-splide .splide__arrow--prev {
  top: 145px;
}

.news-splide .splide__arrow--prev {
  left: -30px;
  top: 78px
}

.video-results-splide .splide__arrow--prev {
  right: -40px;
  transform: translateY(-50%) rotate(0);
}

.video-results-splide .splide__arrow--next {
  left: -40px;
  transform: translateY(-50%) rotate(180deg);
}

.review-splide .splide__list {
  align-items: flex-start;
}

.basic-course-splide .splide__arrow {
  display: none;
}

.splide__track--nav .splide__slide {
  cursor: pointer;
}

.splide__track--nav .splide__slide:hover {
  opacity: 0.8;
}

.splide__list {
  align-items: flex-start;
}

.splide__slide {
  transition: .3s;
}

.review-splide .article-info-item {
  margin-left: 10px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
}

.article-info-item b {
  font-size: 26px;
  font-weight: 400;
}

.article-info-item a {
  color: inherit;
}

.article-info-left {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

@media (max-width: 1280px) {
  .slider-container {
    margin: 60px auto 40px;
    max-width: calc(100% - 40px);
  }

  .review-splide {
    max-width: calc(100% - 60px);
    margin: 40px auto 0;
  }
}

@media (max-width: 1200px) {
  .form-subscribe .cf-input-text {
    width: 100%;
  }

  .form-horizontal .form-row {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 992px) {
  .review-splide .splide__arrow {
    top: 50%;
  }

  .review-splide .splide__arrow--prev {
    left: -40px;
  }

  .review-splide .splide__arrow {
    right: -40px;
  }

  .review-stars {
    margin-bottom: 20px;
  }

  .slider-container {
    max-width: 100%;
    margin: 40px auto 20px;
  }
}

@media (max-width: 375px) {
  .review-splide .text {
    font-size: 12px;
  }

  .review-splide .h3 {
    font-size: 16px;
  }
}
</style>