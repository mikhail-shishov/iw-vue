<script setup lang="ts">

</script>

<template>
  <main class="content">
    <section class="home-intro-sect">
      <div class="container">
        <div class="home-intro-text">
          <h1 class="h1">Erfolgreich Rohstoffe und Futures Traden </h1>
          <h2 class="h3">Die beste Trading Ausbildung für Einsteiger und Profis: Mit klaren Strategien und echten
            Ergebnissen. Du brauchst nur 15 Minuten am Tag.</h2>
          <h2 class="h3">Jetzt kannst du von Profis traden lernen und schnelle Erfolge sehen.</h2>
          <div class="btn-container">
            <a href="/de/pro-trader/" class="btn btn-big btn-white-fill">Pro Trader Insights</a>
            <a href="/de/gespraechstermin-coaching-aktiv/" class="btn btn-big btn-white">Eine Demo buchen</a>
          </div>
        </div>
      </div>
    </section>
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
}
</style>