<script lang="ts">
import { defineComponent } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },
});
</script>

<template>
  <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide>
      <img src="image1.jpg" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="image2.jpg" alt="Sample 2">
    </SplideSlide>
  </Splide>
  <section class="review-sect text-sect">
    <div class="container">
      <div class="h2 center">Testimonials</div>
      <div class="splide review-splide is-overflow is-initialized splide--loop splide--ltr splide--draggable is-active"
        role="group" aria-label="Reviews slider" id="splide01" aria-roledescription="carousel">
        <div class="splide__arrows splide__arrows--ltr"><button class="splide__arrow splide__arrow--prev" type="button"
            aria-label="Go to last slide" aria-controls="splide01-track"><svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40" width="40" height="40" focusable="false">
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg></button><button class="splide__arrow splide__arrow--next" type="button" aria-label="Next slide"
            aria-controls="splide01-track"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40"
              height="40" focusable="false">
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg></button></div>
        <div class="splide__track splide__track--loop splide__track--ltr splide__track--draggable" id="splide01-track"
          style="padding-left: 0px; padding-right: 0px;" aria-live="polite" aria-atomic="true">
          <ul class="splide__list" id="splide01-list" role="presentation" style="transform: translateX(-2236px);">
            <li class="splide__slide splide__slide--clone" id="splide01-clone01" role="tabpanel"
              aria-roledescription="slide" aria-label="3 of 3" style="margin-right: 80px; width: calc(50% - 40px);"
              aria-hidden="true">
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
                <cite class="text">“The experience with InsiderWeek has been consistently positive. The coaching is of a
                  very high quality. The aim of the entire InsiderWeek team is to move the students forward. The student
                  is very well coached on the way to becoming a commodity trader. If you are interested in COT data and
                  commodity trading, you cannot miss the training at InsiderWeek.”</cite>
              </div>
            </li>
            <li class="splide__slide splide__slide--clone is-active" id="splide01-clone02" role="tabpanel"
              aria-roledescription="slide" aria-label="1 of 3" style="margin-right: 80px; width: calc(50% - 40px);"
              aria-hidden="true">
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
                <cite class="text">“I have been with Insider-Week since 2020 and have done COT-1 and WCC coaching. And
                  I’m rather successful with COT-2 strategy, in particular. I am currently an active member of the
                  weather futures trading coaching.</cite>
                <cite class="text">I can definitely recommend InsiderWeek. Max and his team publish their results, which
                  have been growing steadily since the beginning. The course content is easy to understand and the
                  weekly coaching sessions are very practical. If you have any questions, the team will answer you
                  immediately and are always very helpful. The community is also very helpful. You can always exchange
                  ideas and share trading application codes or other experiences.”</cite>
              </div>
            </li>
            <li class="splide__slide splide__slide--clone" id="splide01-clone03" role="tabpanel"
              aria-roledescription="slide" aria-label="2 of 3" style="margin-right: 80px; width: calc(50% - 40px);"
              aria-hidden="true">
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
                <cite class="text">“I would like to thank the InsiderWeek team for the excellent training program. The
                  knowledge that is imparted here can be useful to everyone, from absolute beginners to professionals,
                  and will help them to make money in the exchange market. Nothing is given to you for free. It's up to
                  you and your discipline to invest time and energy in learning. You can get necessary assistance from
                  the team at all times and all questions will be answered by email or in numerous webinars. I'm happy
                  and very satisfied.”</cite>
              </div>
            </li>
            <li class="splide__slide splide__slide--clone is-prev" id="splide01-clone04" role="tabpanel"
              aria-roledescription="slide" aria-label="3 of 3" style="margin-right: 80px; width: calc(50% - 40px);"
              aria-hidden="true">
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
                <cite class="text">“The experience with InsiderWeek has been consistently positive. The coaching is of a
                  very high quality. The aim of the entire InsiderWeek team is to move the students forward. The student
                  is very well coached on the way to becoming a commodity trader. If you are interested in COT data and
                  commodity trading, you cannot miss the training at InsiderWeek.”</cite>
              </div>
            </li>
            <li class="splide__slide is-active" id="splide01-slide01" role="tabpanel" aria-roledescription="slide"
              aria-label="1 of 3" style="margin-right: 80px; width: calc(50% - 40px);">
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
                <cite class="text">“I have been with Insider-Week since 2020 and have done COT-1 and WCC coaching. And
                  I’m rather successful with COT-2 strategy, in particular. I am currently an active member of the
                  weather futures trading coaching.</cite>
                <cite class="text">I can definitely recommend InsiderWeek. Max and his team publish their results, which
                  have been growing steadily since the beginning. The course content is easy to understand and the
                  weekly coaching sessions are very practical. If you have any questions, the team will answer you
                  immediately and are always very helpful. The community is also very helpful. You can always exchange
                  ideas and share trading application codes or other experiences.”</cite>
              </div>
            </li>
            <li class="splide__slide is-next is-visible" id="splide01-slide02" role="tabpanel"
              aria-roledescription="slide" aria-label="2 of 3" style="margin-right: 80px; width: calc(50% - 40px);">
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
                <cite class="text">“I would like to thank the InsiderWeek team for the excellent training program. The
                  knowledge that is imparted here can be useful to everyone, from absolute beginners to professionals,
                  and will help them to make money in the exchange market. Nothing is given to you for free. It's up to
                  you and your discipline to invest time and energy in learning. You can get necessary assistance from
                  the team at all times and all questions will be answered by email or in numerous webinars. I'm happy
                  and very satisfied.”</cite>
              </div>
            </li>
            <li class="splide__slide" id="splide01-slide03" role="tabpanel" aria-roledescription="slide"
              aria-label="3 of 3" style="margin-right: 80px; width: calc(50% - 40px);" aria-hidden="true">
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
                <cite class="text">“The experience with InsiderWeek has been consistently positive. The coaching is of a
                  very high quality. The aim of the entire InsiderWeek team is to move the students forward. The student
                  is very well coached on the way to becoming a commodity trader. If you are interested in COT data and
                  commodity trading, you cannot miss the training at InsiderWeek.”</cite>
              </div>
            </li>
            <li class="splide__slide splide__slide--clone is-active" id="splide01-clone05" role="tabpanel"
              aria-roledescription="slide" aria-label="1 of 3" style="margin-right: 80px; width: calc(50% - 40px);"
              aria-hidden="true">
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
                <cite class="text">“I have been with Insider-Week since 2020 and have done COT-1 and WCC coaching. And
                  I’m rather successful with COT-2 strategy, in particular. I am currently an active member of the
                  weather futures trading coaching.</cite>
                <cite class="text">I can definitely recommend InsiderWeek. Max and his team publish their results, which
                  have been growing steadily since the beginning. The course content is easy to understand and the
                  weekly coaching sessions are very practical. If you have any questions, the team will answer you
                  immediately and are always very helpful. The community is also very helpful. You can always exchange
                  ideas and share trading application codes or other experiences.”</cite>
              </div>
            </li>
            <li class="splide__slide splide__slide--clone" id="splide01-clone06" role="tabpanel"
              aria-roledescription="slide" aria-label="2 of 3" style="margin-right: 80px; width: calc(50% - 40px);"
              aria-hidden="true">
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
                <cite class="text">“I would like to thank the InsiderWeek team for the excellent training program. The
                  knowledge that is imparted here can be useful to everyone, from absolute beginners to professionals,
                  and will help them to make money in the exchange market. Nothing is given to you for free. It's up to
                  you and your discipline to invest time and energy in learning. You can get necessary assistance from
                  the team at all times and all questions will be answered by email or in numerous webinars. I'm happy
                  and very satisfied.”</cite>
              </div>
            </li>
            <li class="splide__slide splide__slide--clone" id="splide01-clone07" role="tabpanel"
              aria-roledescription="slide" aria-label="3 of 3" style="margin-right: 80px; width: calc(50% - 40px);"
              aria-hidden="true">
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
                <cite class="text">“The experience with InsiderWeek has been consistently positive. The coaching is of a
                  very high quality. The aim of the entire InsiderWeek team is to move the students forward. The student
                  is very well coached on the way to becoming a commodity trader. If you are interested in COT data and
                  commodity trading, you cannot miss the training at InsiderWeek.”</cite>
              </div>
            </li>
            <li class="splide__slide splide__slide--clone is-active" id="splide01-clone08" role="tabpanel"
              aria-roledescription="slide" aria-label="1 of 3" style="margin-right: 80px; width: calc(50% - 40px);"
              aria-hidden="true">
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
                <cite class="text">“I have been with Insider-Week since 2020 and have done COT-1 and WCC coaching. And
                  I’m rather successful with COT-2 strategy, in particular. I am currently an active member of the
                  weather futures trading coaching.</cite>
                <cite class="text">I can definitely recommend InsiderWeek. Max and his team publish their results, which
                  have been growing steadily since the beginning. The course content is easy to understand and the
                  weekly coaching sessions are very practical. If you have any questions, the team will answer you
                  immediately and are always very helpful. The community is also very helpful. You can always exchange
                  ideas and share trading application codes or other experiences.”</cite>
              </div>
            </li>
          </ul>
        </div>
        <ul class="splide__pagination splide__pagination--ltr" role="tablist" aria-label="Select a slide to show">
          <li role="presentation"><button class="splide__pagination__page is-active" type="button" role="tab"
              aria-controls="splide01-slide01 splide01-slide02" aria-label="Go to page 1" aria-selected="true"></button>
          </li>
          <li role="presentation"><button class="splide__pagination__page" type="button" role="tab"
              aria-controls="splide01-slide03 splide01-clone05" aria-label="Go to page 2" tabindex="-1"></button></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  background-image: url(/assets/images/icons/star-green.svg);
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
  background-image: url(/assets/images/en/icons/slider-arrow.svg);
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
</style>