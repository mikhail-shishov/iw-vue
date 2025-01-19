<template>
  <section class="separate-sect text-sect">
    <h4 class="h1">Unlock Powerful Trading Tools for Your Success</h4>
    <p class="text">We’ve built a suite of tools to simplify your trading and give you an edge in the markets. Access
      essential resources like contract specifications, COT data analysis, and futures calculators – all designed to
      enhance your efficiency and results.</p>
    <div class="slider-container">
      <div class="splide tools-splide splide--slide splide--ltr splide--draggable is-active is-initialized is-overflow"
        role="group" aria-label="Tool slider" id="splide01" aria-roledescription="carousel">
        <div class="splide__arrows splide__arrows--ltr"><button class="splide__arrow splide__arrow--prev" type="button" aria-label="Previous slide" aria-controls="splide01-track"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false">
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg></button><button class="splide__arrow splide__arrow--next" type="button" aria-label="Next slide"
            aria-controls="splide01-track"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40"
              height="40" focusable="false">
              <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
            </svg></button></div>
        <div class="splide__track splide__track--slide splide__track--ltr splide__track--draggable" id="splide01-track"
          style="padding-left: 0px; padding-right: 0px;" aria-live="polite" aria-atomic="true">
          <ul class="splide__list" id="splide01-list" role="presentation" style="transform: translateX(0px);">
            <li class="splide__slide is-active is-visible" id="splide01-slide01" role="tabpanel"
              aria-roledescription="slide" aria-label="1 of 8"
              style="margin-right: 8px; width: calc(33.3333% - 5.33333px);">
              <div class="article-item-card tool-thumb article-item-card-dark">
                <div class="article-img">
                  <a href="/en/cot/#cot">
                    <div class="article-item-card-badge">Tool</div>
                    <span class="article-item-card-name">COT Data</span>
                    <picture>
                      <source srcset="./src/assets/img/tools/tools-cot.webp" width="400" height="267" type="image/webp">
                      <img src="/tools/tools-cot.jpg" class="article-img-thumb" loading="lazy" width="400"
                        height="267" alt="">
                    </picture>
                    <img src="/en/icons/tool.svg" class="article-item-card-icon" alt="">
                  </a>
                </div>
              </div>
            </li>
            <li class="splide__slide is-visible is-next" id="splide01-slide02" role="tabpanel"
              aria-roledescription="slide" aria-label="2 of 8"
              style="margin-right: 8px; width: calc(33.3333% - 5.33333px);">
              <div class="article-item-card tool-thumb article-item-card-dark">
                <div class="article-img">
                  <a href="/en/seasonal-charts/#seasonality">
                    <div class="article-item-card-badge">Tool</div>
                    <span class="article-item-card-name">Seasonality</span>
                    <picture>
                      <source srcset="/uploads/2023/05/22/400season-thumb.webp" width="400" height="267"
                        type="image/webp">
                      <img src="/uploads/2023/05/22/400season-thumb.jpg" class="article-img-thumb" loading="lazy"
                        width="400" height="267" alt="">
                    </picture>
                    <img src="/en/icons/tool.svg" class="article-item-card-icon" alt="">
                  </a>
                </div>
              </div>
            </li>
            <li class="splide__slide is-visible" id="splide01-slide03" role="tabpanel" aria-roledescription="slide"
              aria-label="3 of 8" style="margin-right: 8px; width: calc(33.3333% - 5.33333px);">
              <div class="article-item-card tool-thumb article-item-card-dark">
                <div class="article-img">
                  <a href="/en/futures-calculator/">
                    <div class="article-item-card-badge">Tool</div>
                    <span class="article-item-card-name">Futures Calculator</span>
                    <picture>
                      <source srcset="./src/assets/img/tools/tools-futures-calc.webp" width="400" height="267"
                        type="image/webp">
                      <img src="/tools/tools-futures-calc.jpg" class="article-img-thumb" loading="lazy"
                        width="400" height="267" alt="">
                    </picture>
                    <img src="/en/icons/tool.svg" class="article-item-card-icon" alt="">
                  </a>
                </div>
              </div>
            </li>
            <li class="splide__slide" id="splide01-slide04" role="tabpanel" aria-roledescription="slide"
              aria-label="4 of 8" aria-hidden="true" style="margin-right: 8px; width: calc(33.3333% - 5.33333px);">
              <div class="article-item-card tool-thumb article-item-card-dark">
                <div class="article-img">
                  <a href="/en/futures-calendar/" tabindex="-1">
                    <div class="article-item-card-badge">Tool</div>
                    <span class="article-item-card-name">Futures Calendar</span>
                    <picture>
                      <source srcset="./src/assets/img/tools/tools-calendar.webp" width="400" height="267"
                        type="image/webp">
                      <img src="/tools/tools-calendar.jpg" class="article-img-thumb" loading="lazy"
                        width="400" height="267" alt="">
                    </picture>
                    <img src="/en/icons/tool.svg" class="article-item-card-icon" alt="">
                  </a>
                </div>
              </div>
            </li>
            <li class="splide__slide" id="splide01-slide05" role="tabpanel" aria-roledescription="slide"
              aria-label="5 of 8" aria-hidden="true" style="margin-right: 8px; width: calc(33.3333% - 5.33333px);">
              <div class="article-item-card tool-thumb article-item-card-dark">
                <div class="article-img">
                  <a href="/en/futures-specifications/" tabindex="-1">
                    <div class="article-item-card-badge">Tool</div>
                    <span class="article-item-card-name">Futures Contract Specifications</span>
                    <picture>
                      <source srcset="./src/assets/img/tools/tools-contract.webp" width="400" height="267"
                        type="image/webp">
                      <img src="/tools/tools-contract.jpg" class="article-img-thumb" loading="lazy"
                        width="400" height="267" alt="">
                    </picture>
                    <img src="/en/icons/tool.svg" class="article-item-card-icon" alt="">
                  </a>
                </div>
              </div>
            </li>
            <li class="splide__slide" id="splide01-slide06" role="tabpanel" aria-roledescription="slide"
              aria-label="6 of 8" aria-hidden="true" style="margin-right: 8px; width: calc(33.3333% - 5.33333px);">
              <div class="article-item-card tool-thumb article-item-card-dark">
                <div class="article-img">
                  <a href="/en/trade-return-calculator/" tabindex="-1">
                    <div class="article-item-card-badge">Tool</div>
                    <span class="article-item-card-name">Trade Return Calculator</span>
                    <img src="/tools/tools-new-calc.webp" class="article-img-thumb" loading="lazy"
                      width="400" height="267" alt="">
                    <img src="/en/icons/tool.svg" class="article-item-card-icon" alt="">
                  </a>
                </div>
              </div>
            </li>
            <li class="splide__slide" id="splide01-slide07" role="tabpanel" aria-roledescription="slide"
              aria-label="7 of 8" aria-hidden="true" style="margin-right: 8px; width: calc(33.3333% - 5.33333px);">
              <div class="article-item-card tool-thumb article-item-card-dark">
                <div class="article-img">
                  <a href="/en/commodities-map/" tabindex="-1">
                    <div class="article-item-card-badge">Tool</div>
                    <span class="article-item-card-name">Commodities Map</span>
                    <img src="/tools/tools-commodities.webp" class="article-img-thumb" loading="lazy"
                      width="400" height="267" alt="">
                    <img src="/en/icons/tool.svg" class="article-item-card-icon" alt="">
                  </a>
                </div>
              </div>
            </li>
            <li class="splide__slide" id="splide01-slide08" role="tabpanel" aria-roledescription="slide"
              aria-label="8 of 8" aria-hidden="true" style="margin-right: 8px; width: calc(33.3333% - 5.33333px);">
              <div class="article-item-card tool-thumb article-item-card-dark">
                <div class="article-img">
                  <a href="/en/compound-calculator/" tabindex="-1">
                    <div class="article-item-card-badge">Tool</div>
                    <span class="article-item-card-name">Сompound Interest Calculator</span>
                    <img src="/tools/tools-compound.webp" class="article-img-thumb" loading="lazy"
                      width="400" height="267" alt="">
                    <img src="/en/icons/tool.svg" class="article-item-card-icon" alt="">
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <ul class="splide__pagination splide__pagination--ltr" role="tablist" aria-label="Select a slide to show">
          <li role="presentation"><button class="splide__pagination__page is-active" type="button" role="tab"
              aria-controls="splide01-slide01 splide01-slide02 splide01-slide03" aria-label="Go to page 1"
              aria-selected="true"></button></li>
          <li role="presentation"><button class="splide__pagination__page" type="button" role="tab"
              aria-controls="splide01-slide04 splide01-slide05 splide01-slide06" aria-label="Go to page 2"
              tabindex="-1"></button></li>
          <li role="presentation"><button class="splide__pagination__page" type="button" role="tab"
              aria-controls="splide01-slide06 splide01-slide07 splide01-slide08" aria-label="Go to page 3"
              tabindex="-1"></button></li>
        </ul>
      </div>
    </div>

    <div class="article-nav">
      <a href="/en/tools/" class="article-nav-next">Discover Tools</a>
    </div>
  </section>
</template>
