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

<style scoped>
.header {
  background-color: var(--lightblue-4);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  transition: 0.3s;
  height: 54.5px
}

.dropdown-btn:after {
  content: '';
  width: 8px;
  height: 8px;
  display: inline-block;
  margin-left: 8px;
  background-image: url(/assets/images/en/icons/dropdown.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  vertical-align: middle;
}

div.dropdown-content {
  pointer-events: none;
  display: flex;
  height: 0;
  opacity: 0;
  transition: .5s;
  position: absolute;
  background-color: var(--lightgrey-2);
  top: 25px;
  left: -10px;
  flex-direction: column;
  padding: 0 10px;
  z-index: 1;
  min-width: 185px;
}

.dropdown-btn.visible+div.dropdown-content {
  display: flex;
  height: auto;
  opacity: 1;
  padding: 3px 10px;
  pointer-events: initial;
}

div.dropdown-content a {
  line-height: 1.3;
  margin-left: 0;
  padding: 7px 0;
  font-size: 14px;
  border-bottom: 1px solid rgb(135 135 135 / 0.15);
  color: var(--grey);
  transition: opacity 0.3s;
  text-decoration: none;
}

div.dropdown-content a:last-of-type {
  border-bottom: 0;
}

div.dropdown-content a:hover {
  color: var(--black);
}

.header div.dropdown-content a {
  font-size: 13px;
}

.dropdown-container .dropdown-content {
  top: 34px;
}

.dropdown-container {
  position: relative;
}

.dropdown-container .dropdown-content {
  max-height: 220px;
  overflow-y: auto;
  width: 100%;
  left: 0;
  background-color: var(--lightblue-4);
  border: 1px solid var(--text-lightgrey);
  border-top: 0;
}

.dropdown-container .dropdown-btn {
  width: 100%;
  background: rgb(240 240 240 / 0.1);
  border: 1px solid var(--text-lightgrey);
  color: var(--black);
  padding: 7px 10px;
  outline: 0;
  font-size: 14px;
  outline-color: var(--text-lightgrey);
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.dropdown-container .dropdown-btn:after {
  margin-left: auto;
}

.dropdown-container .dropdown-content button {
  background-color: #fff0;
  width: 100%;
  padding: 0;
  margin-bottom: 10px;
  text-align: left;
  border: 0;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
  color: var(--text-lightgrey);
}

.dropdown-container .dropdown-content button:first-of-type {
  margin-top: 6px;
}

.dropdown-container .dropdown-content button:hover {
  color: var(--black);
}

.dropdown-btn.visible+div.dropdown-content {
  display: flex;
  border-top: 0;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 12px 0;
}

.header .btn {
  white-space: nowrap;
}

.header-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
}

.header-nav {
  display: flex;
  gap: 30px;
  margin-left: auto;
}

.header-nav-link {
  color: var(--grey);
  font-size: 14px;
  text-decoration: none;
  transition: 0.3s;
  line-height: 2;
}

.header-nav-link:hover {
  color: var(--black);
}

.header-logo {
  display: flex;
}

.header-logo img {
  max-width: 130px;
}

.header-right {
  margin-left: auto;
}

.header-right-login {
  margin-right: 12px;
  padding-right: 12px;
  border-right: 1px solid var(--black);
  font-size: 14px;
  transition: 0.3s;
  color: var(--black);
  text-decoration: none;
}

.header-right-login svg {
  margin-right: 3px;
}

.header-right-login svg path {
  transition: 0.3s;
}

.header-right-login:hover {
  color: var(--lightblue-2);
}

.header-right-login:hover svg path {
  fill: var(--lightblue-2);
}

.header~.content {
  margin-top: 54px;
}

.hamburger {
  height: 30px;
  width: 28px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  z-index: 1;
  cursor: pointer;
  display: none;
  outline: 0;
}

.hamburger span {
  display: block;
  background-color: #3d3d3d;
  position: relative;
  width: 28px;
  height: 2px;
  margin: 6px 0;
  transition: 0.3s ease-in-out;
}

#toggle-menu {
  display: none;
  outline: 0;
}

#toggle-menu:checked+.hamburger .top {
  transform: rotate(-45deg);
  margin-top: 14px;
}

#toggle-menu:checked+.hamburger .meat {
  transform: rotate(45deg);
  margin-top: -2px;
}

#toggle-menu:checked+.hamburger .bottom {
  transform: scale(0);
}

#toggle-menu:checked~.menu1 {
  height: 340px;
}

#toggle-menu:checked+.hamburger span {
  margin-bottom: 0;
}

@media (min-width: 1921px) {
  .header-nav,
  .en .header-nav {
    gap: 30px;
  }

  .header-nav .dropdown-btn:after {
    margin-left: 5px;
  }

  .header-right {
    white-space: nowrap;
  }

  .header .container {
    width: 1200px;
  }
}
</style>