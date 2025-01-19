<template>
  <main class="content">
    <section class="text-sect article">
      <div class="container">
        <ul class="breadcrumbs">
          <li>
            <RouterLink to="/">Startseite</RouterLink>
          </li>
          <li><span>Umsetzung der COT-Strategie</span></li>
        </ul>
        <h1 class="h1">COT-Strategie</h1>
        <p class="text">Die COT-Strategie ist ein Swing-Trading-Ansatz. Im Gegensatz zum Intraday-Handel, auch als
          Daytrading bekannt, erfolgt der Handel auf dem Tageschart.</p>
        <p class="text">Mit der COT-Strategie werden die 35 liquidesten US-Futures-Märkte getradet. Darunter fallen
          Futures aus den Sektoren Rohstoffe, Edelmetalle, Energie, Währungen und Aktienmarktindizes. Finanzprodukte wie
          Aktien, Optionen oder Kryptowährungen werden hierbei nicht gehandelt.</p>
        <p class="text">Die Handelsdauer der Trades beträgt ca. 3 bis 20 Tagen. Es werden gleichzeitig bis zu 4
          unkorrelierte Märkte gehandelt. </p>

        <h2 class="h2">Umsetzung der COT-Strategie. </h2>
        <p class="text">Am Sonntag starte ich meine Analysearbeit und erstelle den wöchentlichen Handelsplan sowie eine
          Watchlist mit den Märkten, bei denen ich gemäß der COT-Strategie Trends für die kommende Handelswoche erwarte.
          Diesen Handelsplan teile ich anschließend mit den InsiderWeek-Mitgliedern und platziere bei Bedarf
          Bracket-Orders für die Trades am Montag.</p>
        <p class="text">Unter der Woche am Ende jedes Handelstages informiere ich meine Mitglieder zw. 20-21 Uhr MEZ
          über die geplanten Aktionen wie das Eingehen einer neuen Position oder das Beenden eines Trades sowie die
          Anpassung von Stop-Loss- oder Gewinnzielen. Da die meiste Arbeit bereits am Sonntag erledigt wurde, benötigt
          man nur etwa 15 Minuten pro Tag, um die Trades zu managen.</p>

        <h2 class="h1">Aufbau der COT Strategie</h2>
        <div class="text-block">
          <h3 class="h3">Fundamentale Analyse</h3>
          <p class="text">Die wöchentlich von der CFTC veröffentlichten COT-Daten bilden den wichtigsten Baustein der
            COT-Strategie.<br>Die Auswertung der COT-Daten ermöglicht es uns, das Verhalten der großen Marktteilnehmer
            zu analysieren und rechtzeitig aufkommende Trends zu erkennen.</p>
        </div>

        <div class="img-container">
          <a href="#" @click.prevent="openLightbox(0)">
            <img src="/2023/05/16/cftc-logo.png" width="460" height="102" loading="lazy" alt="CFTC logo">
          </a>
        </div>

        <p class="text">Mein Team und ich tragen die COT-Daten in einen wöchentlichen Chart ein und berechnen den
          COT-Index. Dieser Indikator zeigt an, wann die Big Player extreme Käufe oder Verkäufe tätigen.</p>

        <div class="img-container">
          <a href="#" @click.prevent="openLightbox(1)">
            <img src="/cot-str.webp" width="920" height="422" loading="lazy" alt="Soybeans, Pricechart and COT-Data">
          </a>
          <p class="img-desc"><a href="https://insider-week.com/de/cot/#cot">COT Tool</a></p>
        </div>

        <p class="text">Anschließend analysieren wir die saisonalen Preisbewegungen. Insbesondere Rohstoffmärkte weisen
          stabile saisonale Tendenzen auf, die in Kombination mit COT-Daten treffsichere Trendprognosen ermöglichen. Für
          die Analyse der Saisonalität verwenden wir unser eigenes entwickeltes Saisonality-Tool.</p>

        <div class="img-container">
          <a href="#" @click.prevent="openLightbox(2)">
            <img src="/season-str.webp" width="920" height="516" loading="lazy" alt="Seasonality">
          </a>
          <p class="img-desc"><a href="https://insider-week.com/de/seasonal-charts/#seasonality">Saisonalität Tool</a>
          </p>
        </div>

        <vue-easy-lightbox v-if="showLightbox" :visible="showLightbox" :imgs="fullImages" :index="currentIndex" @hide="onHide"/>

        <div class="text-block">
          <h3 class="h3 heading-icon"><img src="/icons/str-1.svg" loading="lazy" width="30" height="30"
              alt="Icon 1">Technische Analyse</h3>
          <p class="text">Nachdem die Trendmärkte anhand der COT-Daten und saisonalen Tendenzen ausgewählt wurden,
            erfolgt die Planung des Trades auf dem Tageschart. Dabei wird der optimale Einstiegspunkt, der Stop-Loss und
            das Kursziel mithilfe der technischen Analyse bestimmt.</p>
        </div>
        <div class="text-block">
          <h3 class="h3 heading-icon"><img src="/icons/str-2.svg" loading="lazy" width="30" height="30"
              alt="Icon 2">Risiko- und Geldmanagement.</h3>
          <p class="text">Das Trading erfolgt immer mit einem aktiven Stop-Loss, da der Schutz des Kapitals die höchste
            Priorität hat. Dies zeigt sich auch in der Performance der COT-Strategie, da der maximale Drawdown in den
            letzten 9 Jahren niemals über 10% lag.</p>
          <p class="text">Wenn sich ein Einstiegssignal anhand der COT-Strategie ergibt, wird der Trade mit einem
            Stop-Loss und einem Kursziel mithilfe einer Bracket-Order umgesetzt. In der Regel beträgt das Risiko pro
            Trade durchschnittlich 2% vom Handelskonto. Während eines Drawdowns wird das Risiko auf 1% reduziert, und in
            Zeiten von Allzeithochs kann das Risiko auf bis zu 4% pro Trade erhöht werden.</p>
        </div>
        <div class="text-block">
          <h3 class="h3 heading-icon"><img src="/icons/str-3.svg" loading="lazy" width="30" height="30" alt="Icon 3">Ein
            Handelsansatz, zwei Strategien.</h3>
          <p class="text">Es werden insgesamt zwei COT-Strategien gehandelt. Seit 2014 wird die COT-1 Strategie
            angewendet, wie in der Performance-Übersicht ersichtlich ist. Im Jahr 2020 wurde die COT-2 Strategie
            eingeführt, die auf meinen Erfolgen aus den Trading Weltmeisterschaften basiert.</p>
          <p class="text">Beide Strategien haben denselben Handelsansatz, wie bereits aus den Namen ersichtlich ist. Der
            Unterschied zwischen den beiden Strategien besteht darin, dass die COT-2 Strategie einen aggressiveren
            Handelsstil verfolgt als die COT-1 Strategie. Bei der COT-2 Strategie gibt es doppelt so viele
            Einstiegssignale, die einen starken Fokus auf die Märkte, fortgeschrittenes Risiko- und Positionsmanagement
            erfordern. Um das volle Potenzial dieser Strategie auszuschöpfen, ist Erfahrung im Handel nach COT-Daten
            erforderlich.</p>
          <p class="text">Die COT-2 Strategie verfolgt zwei Hauptziele: Zum einen den Wunsch nach einer Strategie für
            fortgeschrittene und ambitionierte COT-Trader und zum anderen die Diversifikation. Wie aus der Statistik
            hervorgeht, lag der Drawdown seit der Einführung der COT-2 Strategie im Gesamtportfolio stets unter 5%.
            Dadurch wurde der ursprüngliche Drawdown um 50% reduziert und gleichzeitig die Gesamtperformance um das
            2,3-fache verbessert.</p>
        </div>
        <h2 class="h1">Übersicht der Handelskonten</h2>
        <div class="text-block">
          <h3 class="h3 heading-icon"><img src="/icons/str-4.svg" loading="lazy" width="30" height="30"
              alt="Icon 4">COT-1 Handelskonto</h3>
          <p class="text">Auf dem COT-1 Handelskonto wird die COT-1 Strategie gehandelt. Das Konto hatte einen Startwert
            von 14.000 US-Dollar im Jahr 2014 und liegt stand heute Juni 2023 bei 849.000 US-Dollar. Wie aus der
            Kontoentwicklung ersichtlich ist, erzielt die COT-1 Strategie seit ihrem Start im Jahr 2014 kontinuierlich
            gute Ergebnisse. Es handelt sich um eine robuste Strategie, die besonders effektiv ist, wenn sich die Märkte
            in größeren Ranges bewegen, was bei Rohstoffmärkten etwa 80% der Zeit der Fall ist. Als Mitglied der
            InsiderWeek Community hast du Zugang zu allen Trades, die ich mit dieser Strategie auf dem COT-1 Konto
            umsetze. Die Trades werden vor ihrer Ausführundg vorgestellt, sodass du die Möglichkeit hast, der COT-1
            Strategie zu folgen und davon zu lernen.</p>
        </div>
        <div class="text-block">
          <h3 class="h3 heading-icon"><img src="/icons/str-6.svg" loading="lazy" width="30" height="30"
              alt="Icon 5">StartUp Handelskonto</h3>
          <p class="text">Das StartUp-Konto basiert auf derselben COT-1 Strategie, jedoch mit einem kleineren Kontostand
            von 30.000 Dollar. Ich habe bereits erfolgreich sechs kleine Konten aufgebaut und möchte insbesondere
            Mitgliedern mit kleinen Konten zeigen, wie man ein solches Konto aufbaut, worauf man achten sollte und wie
            man die richtigen Märkte auswählt und das Risiko managt. Es gibt eine wachsende Anzahl an liquiden Mini- und
            Mikro-Kontrakten, die sich für den Handel mit der COT-1 Strategie auf kleinen Konten eignen. Wenn du also
            ein Trader mit einem kleinen Konto bist, wirst du durch die Trades auf dem StartUp-Konto wertvolle
            Erfahrungen sammeln können.</p>
        </div>
        <div class="text-block">
          <h3 class="h3 heading-icon"><img src="/icons/str-5.svg" loading="lazy" width="30" height="30"
              alt="Icon 6">COT-2 Handelskonto</h3>
          <p class="text">Auf dem COT-2 Handelskonto wird die COT-2 Strategie umgesetzt. Das Konto startete im November
            2020 mit einem Wert von 50.000 US-Dollar und liegt momentan im Juli 2023 bei 505.950 US-Dollar. Wie bereits
            oben beschrieben, erfordert die erfolgreiche Umsetzung der Trades auf dem COT-2 Handelskonto ein gründliches
            Verständnis der COT-2 Strategie. Aus diesem Grund teile ich Trades von meinem COT-2 Handelskonto nur mit
            Tradern, die bereits Kurse oder Seminare der COT-2 Strategie absolviert haben.</p>
        </div>

        <div class="cta-block cta-block-highlight">
          <h3 class="h2">Dein Weg zum Trading-Erfolg beginnt hier</h3>
          <p>Erhalte ein Schritt-für-Schritt-Coaching, um die Märkte selbstbewusst zu meistern. Unsere bewährten
            Strategien, professionelle Unterstützung und persönliche Betreuung helfen dir, deine Ziele in konkrete
            Ergebnisse zu verwandeln.</p>
          <RouterLink :to="{ name: 'coaching' }">
            <v-btn class="btn btn-black-fill">
              Kostenlose Demo-Session buchen →
            </v-btn>
          </RouterLink>
        </div>

        <div class="cta-block">
          <h2 class="h1">Schau dir unsere nachprüfbaren Ergebnisse an</h2>
          <div class="text-block">
            <p>Wir aktualisieren unsere Erfolgsbilanz täglich und bieten dir volle Transparenz über unsere
              Trading-Performance. Erlebe mit, wie unsere Strategien konsistente Ergebnisse liefern, und triff
              informierte Entscheidungen für deinen Trading-Erfolg.</p>
          </div>
          <RouterLink :to="{ name: 'subscription' }">
            <v-btn class="btn btn-black-fill">
              Unsere Performance erkunden →
            </v-btn>
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

export default defineComponent({
  name: "ImageWithLightbox",
  components: {
    VueEasyLightbox,
  },
  setup() {
    const showLightbox = ref(false);
    const currentIndex = ref(0);

    const fullImages = ref([
      "/2023/05/16/cftc-logo.png",
      "/cot-str.webp",
      "/season-str.webp",
    ]);

    const openLightbox = (index: number) => {
      currentIndex.value = index;
      showLightbox.value = true;
    };

    const onHide = () => {
      showLightbox.value = false; // Close the lightbox
    };

    return {
      showLightbox,
      fullImages,
      currentIndex,
      openLightbox,
      onHide
    };
  },
});
</script>

<style scoped>
.cta-block {
  margin: 100px 0;
}

.cta-block .text-block {
  margin: 30px 0;
}

.cta-block-highlight {
  background-color: var(--lightblue-5);
  padding: 40px 50px;
}

.cta-block .text-block {
  margin: 30px 0 45px;
}

.cta-block-highlight>*:first-child {
  margin-top: 0;
}
</style>