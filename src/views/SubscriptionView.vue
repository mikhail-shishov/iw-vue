<script lang="ts">
import { defineComponent } from "vue";
import UserReviews from "../components/UserReviews.vue";

export default defineComponent({
  name: "FAQAccordion",
  components: {
    UserReviews,
  },
  data() {
    return {
      activeIndices: [] as number[],
      featureItems: [
        { icon: "/icons/home-7.svg", title: "Wöchentliche Trading-Pläne für deine Entscheidungen", desc: "Bleib informiert mit einem wöchentlichen Trading-Plan. Jede Woche analysiere ich die Märkte mit hilfe von COT-Daten, saisonalen Trends und andere Daten, um die vielversprechendsten Chancen herauszufiltern. Die Ergebnisse dieser Analysen teile ich exklusiv mit unseren Mitgliedern." },
        { icon: "/icons/home-8.svg", title: "Lerne von unserer Transparenz", desc: "Mit dem Pro Trade Insights Subscription erhältst du Einblick in meine persönliche Watchlist sowie in alle Trades auf den Startup- und COT-1-Konten. Du wirst immer wissen, welche Positionen ich eröffnet habe und welche Märkte ich im Blick habe. So kannst du durch Beobachtung meiner Trades direkt von mir lernen und deine Trading-Fähigkeiten ausbauen." },
        { icon: "/icons/home-9.svg", title: "Erhalte Einblick in unsere Strategie", desc: "Interessiert an den Hintergründen der COT-Strategie? Du hast die Möglichkeit, die tägliche Umsetzung dieser Strategie in der Praxis zu erleben und herauszufinden, ob Swing Trading auf COT-Basis zu dir passt. Durch Beobachtung dieser Strategie in der Praxis kannst du deine Effektivität bewerten und Marktbewegungen lernen." },
        { icon: "/icons/home-10.svg", title: "Zugang zu relevanten News und zusätzlichem Content", desc: "Bleib bestens informiert: Mit Pro Trade Insights erhältst du laufend wichtige Trading-News sowie weitere Tipps zur Anwendung unserer Strategie, z.B., über die “Trading Ausbildung Deutschland”, “Technische Chartanalyse Lernen”, “Trading Lernen PDF”, und online Dokumente." },
      ],
      faqs: [
        {
          question: "Wie kann ich das Pro Trader Abo abschließen?",
          answer: [
            "Nach dem Klick auf den « Kaufen » -Button wirst du zu einer Bezahlseite von Digistore24 weitergeleitet, auf der dir verschiedene Zahlungsweisen angeboten werden.",
            "Sofort nach dem Geldeingang schalten wir dich für den Mitgliederbereich frei. Eine Rechnung mit ausgewiesener MwSt erhältst du von Digistore24.",
          ],
        },
        {
          question: "Für wen ist das Pro Trader Abo geeignet?",
          answer: [
            "Für Trader, die schon erste Erfahrungen an der Börse gesammelt haben, die ihr Trading verbessern und mehr über die COT-Strategie lernen wollen.",
            "Für Swingtrader, da unsere Haltedauer im Schnitt bei zwischen 3-20 Tagen liegt. Daytrader und Scalper werden sich im Pro Trader langweilen.",
            "Unser Handelsansatz eignet sich für Berufstätige, da er sehr Zeit schonend ist. Am Sonntag zwei Stunden für die Vorbereitung und unter der Woche zw. 20-21 Uhr 20-30 Minuten für die Order Anpassung.",
            "Für die Menschen, die das Trading als einen langfristigen Entwicklungsprozess ansehen.",
          ],
        },
        {
          question: "In welchem Format werden die Informationen geteilt?",
          answer: [
            "Die wöchentlichen Handelspläne werden per Video geteilt. Die Videos werden im Passwort geschützten Mitgliederbereich und im Telegram-Kanal veröffentlicht und können dort angesehen werden. Zusätzlich wird ein kurzer Hinweis per E-Mail verschickt.",
            "Die Trading-Signale und täglichen Handelskommentare werden als Bild und Text im Mitgliederbereich und im Telegram-Kanal veröffentlicht.",
          ],
        },
        {
          question: "Was wird wann veröffentlicht?",
          answer: [
            "Der wöchentliche Handelsplan und die Handelsergebnisse der Vorwoche werden am Sonntag um 16:00 Uhr im Mitgliederbereich und im Telegram-Kanal veröffentlicht.",
            "Unter der Woche werden die Handelssignale und täglichen Kommentare gegen 20:30 Uhr im Mitgliederbereich und im Telegram-Kanal veröffentlicht.",
          ],
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index: number) {
      const isActive = this.activeIndices.includes(index);
      if (isActive) {
        this.activeIndices = this.activeIndices.filter((i) => i !== index);
      } else {
        this.activeIndices.push(index);
      }
    },
    isAccordionActive(index: number): boolean {
      return this.activeIndices.includes(index);
    },
  },
});
</script>

<template>
  <main class="content">
    <div class="pro-trader">
      <section class="pro-intro-sect">
        <div class="container">
          <div class="intro-row">
            <div class="intro-left">
              <div class="intro-left-text">
                <h1 class="h1">Pure Trading Praxis!</h1>
                <p class="text">Mit dem Pro Trader-Abo hast du Zugang zu allen Trades der COT-1-Strategie. Du erhältst
                  Zugriff auf die Watchlist und alle geplanten Trades, einschließlich Informationen zu Einstiegspreis,
                  Stop-Loss, Preisziel und Positionsgröße. Auf diese Weise kannst du dir einen Eindruck von der
                  praktischen
                  Umsetzung der COT-1-Strategie machen und dich selbst von unserer hundertprozentigen Transparenz
                  überzeugen.</p>
              </div>
            </div>
            <div class="intro-right">
              <img src="/abo/max-pro-2.webp" class="intro-right-img" width="461" height="587" alt="Max Foto">
            </div>
          </div>
        </div>
      </section>

      <section class="text-sect">
        <div class="container">
          <ul class="breadcrumbs">
            <li><RouterLink to="/">Startseite</RouterLink></li>
            <li><span>Pro Trader Abo</span></li>
          </ul>
          <h2 class="h1">Pro Trader Subscription</h2>
          <div class="plan-desc-row">
            <div class="plan-desc-col">
              <div class="plan-item plan-item-trader">
                <div class="plan-top">
                  <div class="plan-top-text">
                    <h3 class="h4 plan-top-name">Pro Trader</h3>
                    <p class="plan-top-desc">Folge der COT-Strategie, die seit über 10 Jahren erfolgreich funktioniert.
                    </p>
                  </div>
                </div>
                <div class="plan-bottom">
                  <p class="plan-bottom-desc">Mit dem Pro Trader-Abonnement erhältst du Zugang zu allen Trades der
                    COT-1-Strategie.<br><br>Im Tarif enthaltene Leistungen:</p>
                  <ul class="plan-checkmark-list">

                    <li>Basis Trading Kurs</li>
                    <li>Rohstoff Trading Reports</li>
                    <li>Rohstoff IW Kanal</li>
                    <li>Live FAQ Webinar</li>
                    <li>COT Report Analyse</li>
                    <li>COT Signale</li>
                    <li>Wöchentliche Handelspläne</li>
                    <li>Watchlist</li>
                    <li>Tägliche Handelskommentare</li>
                    <li>Zugriff zu unseren Trades über den Mitgliederbereich &amp; Telegram</li>
                    <li>Monatliches Webinar über Trading-Möglichkeiten</li>
                  </ul>
                  <div class="plan-get-badge">Bekomme jetzt dein Zugang</div>
                  <div class="plan-get">
                    <div class="plan-get-price">
                      <span class="plan-get-price-start">Ab</span>
                      <span class="plan-get-price-current">€ 65</span>
                      <span class="plan-get-price-month">pro monat</span>
                    </div>
                    <button class="btn btn-black-fill btn-get-pro-de goToLink" attr-id="1">Kaufen</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="plan-desc-col">
              <div class="feature-grid feature-grid-column">
                <div v-for="(item, index) in featureItems" :key="index" class="feature-item">
                  <img :src="item.icon" class="feature-item-icon" loading="lazy" alt="">
                  <div class="feature-item-text">
                    <h4 class="h4">{{ item.title }}</h4>
                    <p>{{ item.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-sect">
        <div class="container">
          <h2 class="h2">FAQ - Häufige Fragen</h2>

          <div class="accordion-container">
            <div class="accordion-block" :class="{ 'is-active': isAccordionActive(index) }" v-for="(faq, index) in faqs"
              :key="index">
              <div class="accordion-heading" @click="toggleAccordion(index)">
                <p class="accordion-heading-name">{{ faq.question }}</p>
              </div>
              <div class="accordion-text" v-if="isAccordionActive(index)">
                <p class="text" v-for="(text, textIndex) in faq.answer" :key="textIndex">
                  {{ text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UserReviews />
    </div>
  </main>
</template>

<style>
.plan-item {
  border: 1px solid var(--text-lightgrey);
  padding: 15px;
  position: relative;
  width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.subscription-form-paypal+.plan-item {
  height: unset;
}

.plan-top {
  background-color: var(--darkblue-1);
  color: #fff;
  font-size: 26px;
  padding: 20px;
}

.plan-desc-col {
  flex-grow: 1;
}

.plan-body-desc {
  font-size: 18px;
  margin: 35px 0;
}

.plan-bottom {
  margin-top: 20px;
  gap: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
}

.plan-bottom-price-note p {
  margin: 0;
  text-align: right;
}

.plan-bottom-price-note {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.plan-bottom-price-start {
  margin-bottom: 5px;
}

.plan-bottom-price-current {
  font-size: 34px;
  margin: 5px 0;
}

.plan-bottom-price-month {
  font-size: 12px;
  color: var(--text-lightgrey);
  margin: 5px 0 0;
}

.plan-bottom-desc {
  margin: 0;
  color: var(--lightgrey-3);
  font-size: 16px;
}

.plan-desc-row {
  display: flex;
  gap: 35px;
}

.plan-desc-item {
  margin-bottom: 45px;
}

.plan-desc-text p {
  margin: 0;
}

.plan-desc-text {
  margin-top: 10px;
}

.plan-desc-col .subscription-form-paypal {
  margin-top: 0;
}

.plan-desc-col .subscription-col-form {
  border: 0;
}

.en .pro-intro-sect~.text-sect .plan-item {
  border: 0;
  width: 400px;
  background-color: var(--lightgrey-5);
  padding: 1px 25px 25px;
}

.en .pro-intro-sect~.text-sect .plan-top {
  display: none;
}

.pro-trader .text-sect+.text-sect {
  padding-top: 0;
}

.pro-trader .pro-intro-sect .text {
  font-size: 16px;
  color: white;
}

.pro-trader .pro-intro-sect .h1 {
  margin: 0;
  font-size: 52px;
  color: white;
}

.pro-trader .intro-left-text {
  margin-bottom: 20px;
}

.plan-get-price {
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 7px;
  align-items: center;
}

.plan-get-price-current {
  font-weight: 700;
  font-size: 18px;
}

.plan-get-price-month {
  font-size: 12px;
  flex-basis: 100%;
  color: var(--lightgrey-3);
}

.plan-offer-row {
  display: flex;
  gap: 13px;
}

.plan-offer-item {
  flex-grow: 1;
  background-color: var(--darkblue-1);
  text-align: center;
  padding: 35px 10px;
  max-width: 25%;
}

.plan-offer-time {
  font-size: 18px;
}

.plan-offer-price {
  margin: 15px 0;
}

.plan-offer-price-start,
.plan-offer-price-month {
  color: var(--lightblue-1);
}

.plan-offer-price-current {
  font-size: 25px;
  color: #fff;
}

.plan-offer-item p {
  color: #fff;
  margin: 0;
}

.plan-disclaimer {
  margin-top: 35px;
}

.plan-top-desc {
  font-size: 12px;
  margin-bottom: 0;
}

.plan-top-name {
  margin: 0 0 10px;
}

.pro-trader .plan-top-desc,
.pro-trader .plan-top-name {
  color: white;
}

.plan-checkmark-list {
  padding-left: 20px;
  color: var(--black);
  font-size: 14px;
  margin: 0;
  font-size: 16px;
}

.plan-get-badge {
  font-size: 18px;
  margin-top: auto;
}

.subscription-row {
  display: flex;
  gap: 50px;
}

.subscription-col {
  flex-grow: 1;
  flex-basis: 50%;
}

.subscription-sect #paypal-button-container-shadow {
  background: var(--lightgrey-1);
}

.subscription-sect .paypalData .fs-label-text {
  margin: 0 0 10px;
}

.subscription-form-paypal {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
}

.subscription-col-top {
  background-color: var(--black);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.subscription-col-top span {
  color: #fff;
  display: inline-block;
  padding: 10px;
}

.subscription-col-top-price {
  font-size: 20px;
  font-weight: 700;
  text-align: right;
}

.subscription-col-form {
  padding: 10px 15px;
  border: 1px solid var(--black);
}

.subscription-form-paypal-light .subscription-col-form {
  background-color: var(--lightgrey-5);
  padding: 0 25px;
}

.subscription-form-paypal-light .subscription-col-top {
  text-align: center;
}

.subscription-form-paypal-light .subscription-col-top span {
  display: block;
  width: 100%;
}

.subscription-form-paypal-light .subscription-col-top-price {
  text-align: center;
  margin: 10px 0 15px;
  font-weight: 400;
}

.subscription-form-paypal-light #paypal-button-container-shadow {
  background: var(--lightgrey-5);
}

.subscription-col-top-price .current-price,
.subscription-col-top-price .future-price {
  font-size: 17px;
  font-weight: 700;
  padding: 0;
  display: block;
}

.subscription-col-top-price .future-price {
  font-size: 14px;
  font-weight: 400;
}

.accordion-block {
  border: 1px solid #878787;
}

.accordion-text {
  display: none;
  padding: 8px 44px 0;
}

.accordion-block.is-active .accordion-text {
  display: block;
}

.accordion-block+.accordion-block {
  margin-top: 35px;
}

.accordion-heading {
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  padding: 12px 44px;
}

.accordion-heading:hover {
  opacity: 0.7;
}

.accordion-heading-name {
  font-size: 18px;
  font-weight: 700;
  user-select: none;
  margin: 0;
  max-width: 95%;
}

.accordion-heading-name:after {
  content: '';
  background-color: transparent;
  background-image: url(/2023/06/15/arrow-down.svg);
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  width: 19px;
  height: 19px;
  margin: 0 0 -4px 8px;
  transition: 0.3s;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
}

.accordion-block.is-active .accordion-heading-name:after {
  transform: rotate(180deg) translateY(50%);
}

.accordion-text .text:first-of-type,
.accordion-text p:first-of-type {
  margin-top: 0;
}

.pro-intro-sect,
.pro-acc-intro-sect {
  background-color: var(--lightgrey-3);
  background-image: url(./src/assets/img/abo/bg-pro-2.webp);
  background-position: center;
  background-size: cover;
  padding-top: 10px;
}

@media (max-width: 768px) {
  .plan-offer-row {
    flex-direction: column;
  }

  .plan-offer-item {
    max-width: unset;
  }

  .plan-desc-row {
    flex-direction: column;
    gap: 35px;
  }

  .accordion-heading,
  .accordion-text {
    padding-left: 24px;
    padding-right: 24px;
  }

  .accordion-block+.accordion-block {
    margin-top: 20px;
  }

  .accordion-heading-name:after {
    right: 14px;
  }

  .subscription-form-paypal {
    margin-top: 0;
  }
}

@media (max-width: 375px) {
  .plan-item {
    width: 100%;
  }

  .accordion-heading-name {
    font-size: 16px;
  }
}
</style>
