<script setup lang="ts">
import SubscriptionBenefits from "../components/SubscriptionBenefits.vue";
</script>

<template>
  <main class="content">
    <section class="intro-sect materialsForm" attr-lang="2">
      <div class="container">
        <div class="intro-sect-col">
          <h1 class="h1">Kostenlose Materialien</h1>
          <p class="text">Wir haben eine Reihe nützlicher Ressourcen für dich zusammengestellt. Hier findest du Bücher,
            Webinare und andere hilfreiche Informationen, kostenlos zum Download.</p>
        </div>
      </div>
    </section>
    <SubscriptionBenefits />

    <section class="text-sect">
      <div class="container">
        <div class="product-grid">
          <div class="product-item">
            <div class="article-item-card tool-thumb article-item-card-dark">
              <div class="article-img">
                <a href="https://insider-week.com/de/cot/#cot">
                  <div class="article-item-card-badge">Tool</div>
                  <span class="article-item-card-name">COT Daten</span>
                  <picture>
                    <source srcset="@/assets/img/tools/tools-cot.webp" width="400" height="267" type="image/webp">
                    <img src="@/assets/img/tools/tools-cot.jpg" class="article-img-thumb" width="400" height="267"
                      alt="">
                  </picture>
                  <img src="@/assets/img/en/icons/tool.svg" class="article-item-card-icon" alt="">
                </a>
              </div>
            </div>
            <div class="product-item-info">
              <div class="product-item-name">COT Daten</div>
              <div class="product-item-desc">Erhalte detaillierte Informationen zu den Kontraktspezifikationen der
                Futures-Märkte und erfahre jedes Detail, bevor du einen Trade eingehst.</div>
              <a href="https://insider-week.com/de/cot/#cot" class="link link-arrow">Zugang erhalten</a>
            </div>
          </div>
          <div class="product-item">
            <div class="article-item-card tool-thumb article-item-card-dark">
              <div class="article-img">
                <a href="https://insider-week.com/de/seasonal-charts/#seasonality">
                  <div class="article-item-card-badge">Tool</div>
                  <span class="article-item-card-name">Saisonalität</span>
                  <picture>
                    <source srcset="/2023/05/22/400season-thumb.webp" width="400" height="267" type="image/webp">
                    <img src="/2023/05/22/400season-thumb.jpg" class="article-img-thumb" width="400" height="267"
                      alt="">
                  </picture>
                  <img src="@/assets/img/en/icons/tool.svg" class="article-item-card-icon" alt="">
                </a>
              </div>
            </div>
            <div class="product-item-info">
              <div class="product-item-name">Saisonalität</div>
              <div class="product-item-desc">Entdecke saisonale Trends auf den Futures-Märkten und identifiziere Muster,
                um dir im Trading einen Wettbewerbsvorteil zu sichern.</div>
              <a href="https://insider-week.com/de/seasonal-charts/#seasonality" class="link link-arrow">Zugang
                erhalten</a>
            </div>
          </div>
          <div class="product-item">
            <div class="article-item-card tool-thumb article-item-card-dark">
              <div class="article-img">
                <a href="https://insider-week.com/de/futures-rechner/">
                  <div class="article-item-card-badge">Tool</div>
                  <span class="article-item-card-name">Futures Rechner</span>
                  <picture>
                    <source srcset="@/assets/img/tools/tools-futures-calc.webp" width="400" height="267"
                      type="image/webp">
                    <img src="@/assets/img/tools/tools-futures-calc.jpg" class="article-img-thumb" width="400"
                      height="267" alt="">
                  </picture>
                  <img src="@/assets/img/en/icons/tool.svg" class="article-item-card-icon" alt="">
                </a>
              </div>
            </div>
            <div class="product-item-info">
              <div class="product-item-name">Futures Rechner</div>
              <div class="product-item-desc">Berechne potenzielle Gewinne, Risiken und Handelsparameter mühelos, um jede
                Position präzise zu planen.</div>
              <a href="https://insider-week.com/de/futures-rechner/" class="link link-arrow">Zugang erhalten</a>
            </div>
          </div>
          <div class="product-item">
            <div class="article-item-card tool-thumb article-item-card-dark">
              <div class="article-img">
                <a href="https://insider-week.com/de/futures-kalender/">
                  <div class="article-item-card-badge">Tool</div>
                  <span class="article-item-card-name">Futures Kalender</span>
                  <picture>
                    <source srcset="@/assets/img/tools/tools-calendar.webp" width="400" height="267" type="image/webp">
                    <img src="@/assets/img/tools/tools-calendar.jpg" class="article-img-thumb" width="400" height="267"
                      alt="">
                  </picture>
                  <img src="@/assets/img/en/icons/tool.svg" class="article-item-card-icon" alt="">
                </a>
              </div>
            </div>
            <div class="product-item-info">
              <div class="product-item-name">Futures Kalender</div>
              <div class="product-item-desc">Bleib über wichtige Futures-Ereignisse und Verfallsdaten informiert, um
                deine
                Trading-Strategie rechtzeitig zu planen und keine Chancen zu verpassen.</div>
              <a href="https://insider-week.com/de/futures-kalender/" class="link link-arrow">Zugang erhalten</a>
            </div>
          </div>
          <div class="product-item">
            <div class="article-item-card tool-thumb article-item-card-dark">
              <div class="article-img">
                <RouterLink to="/futures-contract-specifications">
                  <div class="article-item-card-badge">Tool</div>
                  <span class="article-item-card-name">Futures-Kontrakt-Spezifikationen</span>
                  <picture>
                    <source srcset="@/assets/img/tools/tools-contract.webp" width="400" height="267" type="image/webp">
                    <img src="@/assets/img/tools/tools-contract.jpg" class="article-img-thumb" loading="lazy"
                      width="400" height="267" alt="">
                  </picture>
                  <img src="@/assets/img/en/icons/tool.svg" class="article-item-card-icon" alt="">
                </RouterLink>
              </div>
            </div>
            <div class="product-item-info">
              <div class="product-item-name">Futures-Kontrakt-Spezifikationen</div>
              <div class="product-item-desc">Erhalte detaillierte Informationen zu den Kontraktspezifikationen der
                Futures-Märkte und erfahre jedes Detail, bevor du einen Trade eingehst.</div>
              <RouterLink to="/futures-contract-specifications" class="link link-arrow">Zugang erhalten</RouterLink>
            </div>
          </div>
          <div class="product-item">
            <div class="article-item-card tool-thumb article-item-card-dark">
              <div class="article-img">
                <a href="https://insider-week.com/de/rendite-rechner/">
                  <div class="article-item-card-badge">Tool</div>
                  <span class="article-item-card-name">Rendite-Rechner</span>
                  <img src="@/assets/img/tools/tools-new-calc.webp" class="article-img-thumb" loading="lazy" width="400"
                    height="267" alt="">
                  <img src="@/assets/img/en/icons/tool.svg" class="article-item-card-icon" alt="">
                </a>
              </div>
            </div>
            <div class="product-item-info">
              <div class="product-item-name">Rendite-Rechner</div>
              <div class="product-item-desc">Analysiere deine bisherigen Trades, setze Performance-Ziele und optimiere
                deine Trading-Strategie für bessere Ergebnisse.</div>
              <a href="https://insider-week.com/de/rendite-rechner/" class="link link-arrow">Zugang erhalten</a>
            </div>
          </div>
          <div class="product-item">
            <div class="article-item-card tool-thumb article-item-card-dark">
              <div class="article-img">
                <a href="https://insider-week.com/de/rohstoff-karte/">
                  <div class="article-item-card-badge">Tool</div>
                  <span class="article-item-card-name">Rohstoff-Karte</span>
                  <img src="@/assets/img/tools/tools-commodities.webp" class="article-img-thumb" loading="lazy"
                    width="400" height="267" alt="">
                  <img src="@/assets/img/en/icons/tool.svg" class="article-item-card-icon" alt="">
                </a>
              </div>
            </div>
            <div class="product-item-info">
              <div class="product-item-name">Rohstoff-Karte</div>
              <div class="product-item-desc">Beobachte weltweit wichtige Rohstoffe und plane deine Trades effektiv mit
                unserer interaktiven Commodities-Map.</div>
              <a href="https://insider-week.com/de/rohstoff-karte/" class="link link-arrow">Zugang erhalten</a>
            </div>
          </div>
          <div class="product-item">
            <div class="article-item-card tool-thumb article-item-card-dark">
              <div class="article-img">
                <a href="https://insider-week.com/de/zinseszins-rechner/">
                  <div class="article-item-card-badge">Tool</div>
                  <span class="article-item-card-name">Zinseszins-Rechner</span>
                  <img src="@/assets/img/tools/tools-compound.webp" class="article-img-thumb" loading="lazy" width="400"
                    height="267" alt="">
                  <img src="@/assets/img/en/icons/tool.svg" class="article-item-card-icon" alt="">
                </a>
              </div>
            </div>
            <div class="product-item-info">
              <div class="product-item-name">Zinseszins-Rechner</div>
              <div class="product-item-desc">Visualisiere die Kraft des Zinseszinses und erkenne, wie kontinuierliches
                Wachstum dein Kapital im Laufe der Zeit vervielfachen kann.</div>
              <a href="https://insider-week.com/de/zinseszins-rechner/" class="link link-arrow">Zugang erhalten</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.intro-sect {
  background-color: var(--black);
  background-image: url(/downloads/downloads-bg.webp);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 100px 0;
  position: relative;
  min-height: 480px;
}

.intro-sect-col {
  max-width: 610px;
}

.intro-sect * {
  color: white;
}
</style>
