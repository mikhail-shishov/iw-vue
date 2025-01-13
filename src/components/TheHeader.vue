<script lang="ts">
  export default {
    name: 'LangSwitch',
    methods: {
      changeLanguage(lang: string) { // Explicitly declare the type
        this.$i18n.locale = lang;
      },
    },
  };
</script>

<template>
  <!-- {{ $t('message.hello') }} -->
  <header class="header">
    <div class="container">
      <a href="/" class="header-logo" aria-label="Homepage link"><img src="/en/logo/logo.svg" width="130" height="24"
          alt=""></a>
      <input id="toggle-menu" type="checkbox">
      <label class="hamburger" for="toggle-menu">
        <span class="top"></span>
        <span class="meat"></span>
        <span class="bottom"></span>
      </label>
      <div class="header-menu">
        <nav class="header-nav">
          <a href="/de/ueber-uns/" class="header-nav-link">Arbeitsprinzipien</a>
          <a href="/de/strategie/" class="header-nav-link">Strategie</a>
          <a href="/de/pro-account/" class="header-nav-link">Erfolgsbilanz</a>
          <div><a href="/de/tools/" class="header-nav-link dropdown-btn">Tools</a>
            <div class="dropdown-content">
              <a href="/de/tools/" class="mob-only">Alle Analyse-Tools</a>
              <a href="/de/cot/">COT Daten</a>
              <a href="/de/seasonal-charts/">Saisonalität</a>
              <a href="/de/futures-rechner/">Futures Rechner</a>
              <a href="/de/futures-specifications/">Futures-Kontrakt-Spezifikationen</a>
              <a href="/de/rendite-rechner/">Rendite-Rechner</a>
              <a href="/de/rohstoff-karte/">Rohstoff-Karte</a>
              <a href="/de/zinseszins-rechner/">Zinseszins-Rechner</a>
            </div>
          </div>
          <div><a href="/de/materials/" class="header-nav-link dropdown-btn">Schulungen</a>
            <div class="dropdown-content">
              <a href="/de/materials/" class="mob-only">Ressourcen</a>
              <a href="/de/cot-1-strategie/">Coaching</a>
              <a
                href="/de/live-webinare?utm_source=website&amp;utm_medium=org&amp;utm_campaign=post&amp;utm_content=webinar&amp;utm_term=261124">Webinare</a>
              <!-- <a href="/de/seminare/">Seminare</a> -->
              <!-- <a href="/de/trading-lernen-kurs/">Kurse</a> -->
              <a href="/de/pro-trader/">Abonnement</a>
            </div>
          </div>
          <a href="/de/blog/" class="header-nav-link">Blog</a>
          <a href="/de/news/" class="header-nav-link">Nachrichten</a>
        </nav>
        <div class="header-right">
          <a href="https://my-iw.insider-week.com/" class="header-right-login">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.99967 0.333313C5.61851 0.333313 6.21201 0.579146 6.64959 1.01673C7.08717 1.45432 7.33301 2.04781 7.33301 2.66665C7.33301 3.28548 7.08717 3.87898 6.64959 4.31656C6.21201 4.75415 5.61851 4.99998 4.99967 4.99998C4.38084 4.99998 3.78734 4.75415 3.34976 4.31656C2.91217 3.87898 2.66634 3.28548 2.66634 2.66665C2.66634 2.04781 2.91217 1.45432 3.34976 1.01673C3.78734 0.579146 4.38084 0.333313 4.99967 0.333313ZM4.99967 6.16665C7.57801 6.16665 9.66634 7.21081 9.66634 8.49998V9.66665H0.333008V8.49998C0.333008 7.21081 2.42134 6.16665 4.99967 6.16665Z"
                fill="#181818"></path>
            </svg>
            Mikhail</a>
          <!-- <a href="/en/cot-trading-1/" class="btn btn-black-fill js-modal" data-modal="#trade">Trade with me</a> -->
          <a href="/de/pro-trader/" class="btn btn-black-fill utm-header-trade utm-header-trade-de">Zum Trading</a>
          <v-btn @click="changeLanguage('en')">EN</v-btn>
          <v-btn @click="changeLanguage('de')">DE</v-btn>
          <!-- <a href="/de/christmas-advent/" class="btn-header-xmas">Weihnachtskalender</a> -->
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>