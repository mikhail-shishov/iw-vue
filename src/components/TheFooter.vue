<script lang="ts">
import { defineComponent } from "vue";
import NewsletterForm from "./NewsletterForm.vue";

export default defineComponent({
  name: "TheFooter",
  components: {
    NewsletterForm,
  },
  methods: {
    changeLanguage(lang: string) {
      this.$i18n.locale = lang;
    },
  },
});
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-row">
        <div class="footer-col">
          <div class="footer-address">InsiderWeek<br>
            Anthipolochagou Georgiou M. Savva 26<br>
            8201 Geroskipou<br>
            Paphos, Cyprus
          </div>
          <div class="footer-switch">
            <v-btn class="btn btn-black-fill" @click="changeLanguage('en')">EN</v-btn>
            <v-btn class="btn btn-black-fill" @click="changeLanguage('de')">DE</v-btn>
          </div>
        </div>
        <div class="footer-col">
          <div class="footer-links">
            <a href="/de/datenschutz/" class="js-modal" data-modal="#privacy">Datenschutzerklärung</a>
            <a href="/de/nutzungsbedingungen/" class="js-modal" data-modal="#terms">Nutzungsbedingungen</a>
            <a href="/de/impressum/" class="js-modal" data-modal="#legal">Impressum</a>
            <a href="/de/risikohinweis/" class="js-modal" data-modal="#risk">Risikohinweis</a>
          </div>
        </div>
        <div class="footer-col">
          <div class="footer-links">
            <a href="#" class="js-modal" data-modal="#contact">Kontakt</a>
            <div class="footer-social">
              <a href="https://youtube.com/c/InsiderWeek/" rel="noopener noreferrer" target="_blank"><img
                  src="/icons/social/yt.svg" width="42" height="42" class="footer-icon" alt="Youtube"
                  loading="lazy"></a>
              <a href="https://www.facebook.com/insiderweek.de/" rel="noopener noreferrer" target="_blank"><img
                  src="/icons/social/fb.svg" width="42" height="42" class="footer-icon" alt="Facebook"
                  loading="lazy"></a>
              <a href="https://www.instagram.com/maxschulz_trader/" rel="noopener noreferrer" target="_blank"><img
                  src="/icons/social/ig.svg" width="42" height="42" class="footer-icon" alt="Instagram"
                  loading="lazy"></a>
              <a href="https://de.tradingview.com/u/InsiderWeek_MaxSchulz/" rel="noopener noreferrer"
                target="_blank"><img src="/icons/social/tv.svg" width="42" height="42" class="footer-icon"
                  alt="TradingView" loading="lazy"></a>
              <a href="https://wa.me/17867566044" rel="noopener noreferrer" target="_blank"><img
                  src="/icons/social/wa.svg" width="42" height="42" class="footer-icon" alt="WhatsApp"
                  loading="lazy"></a>
              <a href="https://t.me/insiderweek_de" rel="noopener noreferrer" target="_blank"><img
                  src="/icons/social/tg.svg" width="42" height="42" class="footer-icon" alt="Telegram"
                  loading="lazy"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <p class="text">© 2017-2025 InsiderWeek Education LTD.<br>All Rights Reserved.</p>
        <p class="text">VAT-ID: CY10417166X</p>
      </div>
      <NewsletterForm />
    </div>
  </footer>
  <div class="risk-disclosure">
    <div class="container">
      <p class="h4">Risikohinweis</p>
      <p class="text">Risikooffenlegung: Der Handel mit Futures, Forex und CFD's birgt ein hohes Risiko und ist nicht
        für jeden Investor geeignet. Ein Investor kann möglicherweise mehr als das eingezahlte Kapital verlieren. Für
        den Handel sollte nur Risikokapital verwendet werden, bzw. Teile des Risikokapitals. Risikokapital ist Geld, bei
        dessen Verlust sich keine Änderung der Finanzsituation ergibt bzw. keinen Einfluss auf das Leben mit sich
        bringt. Eine in der Vergangenheit erzielte Performance ist keine Garantie für zukünftige Gewinne.</p>
      <p class="text">Offenlegung der hypothetischen Performance: Hypothetische Performanceergebnisse haben viele
        inhärente Einschränkungen, von denen einige im Folgenden beschrieben werden. Die dargestellten Ergebnisse des
        Kontos können in den Gewinnen und Verlusten stark abweichen. Einer der Einschränkungen der hypothetischen
        Ergebnisse ist dass Sie durch bekannte historische Daten entstanden sind. Darüber hinaus beinhaltet der
        hypothetische Handel kein finanzielles Risko – kein hypothetischer Track Record kann die finanziellen Risiken
        des tatsächlichen Handels darstellen. Beispielsweise besteht die Möglichkeit dass der Handel bei Verlusten
        ausgesetzt bzw. abgebrochen wird, dies kann die tatsächlichen Ergebnisse stark verändern. Des Weiteren gibt es
        zahlreiche weitere Faktoren die bei der Umsetzung eines Handelsprogramms nicht vollständig in der hypothetischen
        Performance berücksichtigt werden können und somit die tatsächlichen Ergebnisse beeinflussen können.</p>
      <p class="text">Testimonials, die auf dieser Website erscheinen, sind nicht repräsentativ für andere Kunden und
        sind keine Garantie für zukünftige Leistungen oder Erfolge.</p>
    </div>
  </div>
</template>

<style>
.owhforms input {
  outline: 0;
}

.form-vertical,
.form-vertical .form-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}

.form-block {
  margin: 0 0 15px;
  width: 100%;
}

.form-vertical .cf-input-text,
.form-vertical .cf-textarea {
  width: 100%;
}

.form-subscribe .cf-input-text {
  flex-grow: 1;
}

.form-vertical .btn {
  margin-top: 10px;
}

.form-link-forgot {
  color: var(--lightgrey-4);
  font-size: 10px;
}

.form-horizontal .form-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer .owhforms {
  margin-bottom: 35px;
}

.footer .form-subscribe {
  margin: 60px 0 0;
  padding: 35px 0;
  border-top: 1px solid var(--black-2);
  border-bottom: 1px solid var(--black-2);
}

.form-subscribe .label-checkbox {
  margin-bottom: 0;
  max-width: 330px;
}

.footer .form-subscribe b {
  color: var(--black-2)
}

.cf-input-text,
.cf-textarea,
.fs-form-input,
.fs-label-select {
  background: rgb(240 240 240 / 0.1);
  border: 1px solid var(--text-lightgrey);
  color: var(--black);
  padding: 7px 10px;
  outline: 0;
  font-size: 14px;
  outline-color: var(--black);
  border-radius: 0;
}

.fs-label-select {
  width: 100%;
  appearance: none;
  border-radius: 0;
}

.cf-input-text::placeholder,
.cf-textarea::placeholder {
  color: var(--text-lightgrey);
}

.cf-textarea {
  min-height: 160px;
}

.cf-input-text-footer {
  background: rgb(240 240 240 / 0.1);
  border: 1px solid rgb(240 240 240 / 0.45);
  font-size: 14px;
  text-align: right;
  padding: 6.5px;
  color: #fff;
}

.cf-input-text-footer::placeholder {
  color: #878787;
}

.cf-label-checkbox-text {
  color: var(--text-lightgrey);
  font-size: 14px;
}

.owhforms_loading,
.owhforms_loading p {
  font-size: 14px;
  color: var(--black);
}

.owhforms_loading p:last-child {
  margin-bottom: 0;
}

.form-input-checkbox,
.cf-input-radio {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}

.label-checkbox {
  display: block;
  position: relative;
  padding: 0 0 0 25px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
}

.checkmark {
  position: absolute;
  top: 4px;
  left: 0;
  height: 15px;
  width: 15px;
  border: 1px solid var(--black);
  transition: 0.3s;
}

.label-checkbox:hover .form-input-checkbox~.checkmark {
  background-color: #eee;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.label-checkbox .form-input-checkbox:checked~.checkmark:after,
.cf-input-radio:checked~.checkmark:after {
  display: block;
}

.label-checkbox .checkmark:after,
.cf-input-radio:checked~.checkmark:after {
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  transform: translate(-50%, -50%);
  background-image: url(./src/assets/img/icons/checkbox-icon.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.fs-form .btn-big {
  font-size: 24px;
}

.fs-form.form-vertical {
  width: 460px;
  max-width: 100%;
}

.fs-form.form-vertical .fs-label,
.fs-form.form-vertical .fs-form-input {
  width: 100%;
  position: relative;
}

textarea.fs-form-input {
  min-height: 100px;
}

.form-steps {
  margin: 35px 0;
  padding-left: 17px;
}

.fs-label-text {
  color: var(--text-lightgrey);
  font-size: 14px;
}

.twostepsForm_errors_1 div {
  color: var(--red-1);
  margin: 5px 0;
}

.cf-vertical {
  display: flex;
  flex-direction: column
}

.cf-vertical .twostepsForm_errors_1 {
  margin: -13px 0 20px;
}

.quiz .cf-label {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px
}

.cf-label-row {
  display: flex;
  gap: 35px;
}

.cf-label-name {
  font-size: 18px;
  margin-bottom: 10px
}

.cf-label-text {
  color: var(--black);
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 10px
}

.cf-input-text {
  background: rgba(240, 240, 240, 0.1);
  background-color: white;
  border: 1px solid var(--text-lightgrey);
  color: var(--black);
  padding: 7px;
  outline: none;
  font-size: 14px;
  appearance: none;
  outline: none
}

.cf-input-text::placeholder {
  color: #a098a3
}

.cf-input-text.error {
  border-bottom: 2px solid var(--red-1);
}

.cf-label-text.error {
  color: var(--red-1);
}

.cf-label-text-small {
  color: #9d9d9d;
  font-size: 13px;
  font-weight: 300;
  margin: -7px 0 10px;
}

.cf-label-list-item {
  margin: 8px 0;
  position: relative;
  padding-left: 22px;
  cursor: pointer;
  margin: 5px 0;
  color: var(--text-lightgrey);
}

.cf-label .error~* {
  color: var(--red-1);
  border-color: var(--red-1);
}

.footer {
  background-color: var(--lightblue-4);
  padding: 100px 0 0;
}

.footer-address a {
  text-decoration: underline;
}

.footer-address {
  font-size: 18px;
  line-height: 1.8;
  color: var(--black-2);
}

.footer-row {
  display: flex;
  margin-bottom: 44px;
}

.footer-col {
  flex-basis: 33.3333%;
  position: relative;
}

.footer-col:nth-of-type(2) {
  text-align: center;
}

.footer-col:nth-of-type(3) {
  text-align: right;
}

.footer-links {
  display: flex;
  flex-direction: column;
}

.footer-links a {
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 18px;
  display: inline-block;
  transition: 0.3s;
}

.footer-links a:hover {
  color: var(--text-lightgrey);
  text-decoration: underline;
}

.footer-links .h3 {
  color: #fff;
  margin-bottom: 20px;
}

.footer-social {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin: 10px 0 0;
}

.footer-social a {
  transition: 0.3s;
}

.footer-social img {
  min-width: 42px;
}

.footer-social a:hover {
  opacity: 0.8;
}

.scroll,
.wa-fixed {
  position: fixed;
  z-index: 999;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 10vw;
  width: 0;
  height: 0;
  bottom: 0;
  transition: 0.3s;
}

.wa-fixed {
  display: none;
  width: auto;
  height: auto;
  background-color: transparent;
  right: 20px;
  bottom: 35px;
}

.show-scroll {
  width: 42px;
  height: 42px;
  bottom: 24px;
}

.risk-disclosure {
  padding: 30px 0 50px;
  background-color: var(--lightblue-4);
}

.risk-disclosure .text {
  font-size: 12px;
  margin-bottom: 0;
  line-height: 1.3
}

.modal-window {
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%) scale(0.9);
  width: 600px;
  max-width: 95%;
  max-height: 85vh;
  overflow: auto;
  min-height: 130px;
  box-shadow: 0 10px 30px rgb(0 0 0 / 0.2);
  background-color: #fff;
  transition: 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;
  z-index: 10000;
  display: flex;
  flex-direction: column;
}

.modal-window .text {
  word-wrap: break-word;
}

.modal-close {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  background-image: url(./src/assets/img/en/icons/modal-close.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 0;
  position: absolute;
  top: 22px;
  right: 22px;
}

.modal-window.show {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  visibility: visible;
}

.modal-content {
  overflow: auto;
  max-height: calc(100% - 60px);
  margin-top: 60px;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 0.6);
  z-index: 9999;
}

.modal-block {
  padding: 35px;
}

.modal-block:first-of-type {
  padding-top: 0;
}

.modal-block-dark {
  background-color: var(--black);
  padding: 15px;
}

.modal-block-dark .h3 {
  color: #fff;
  margin: 0;
  text-align: center;
}

.modal-block-section {
  margin: 15px 0;
}

.modal-block-section .h4 {
  margin-bottom: 5px;
}

.modal-block-section p {
  margin: 0;
}

.modal-block+.modal-block {
  padding-top: 0;
}

.modal-block.is-hidden {
  display: none;
}

.modal-pay {
  text-align: center;
  padding-bottom: 35px;
}

.modal-pay-method {
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-top: 15px;
}

.modal-pay-method a {
  text-decoration: none;
}

.modal-pay-method img {
  height: 28px;
}

.modal-window-big {
  width: 920px;
}

.modal-window-medium {
  width: 700px;
}

.modal-window .form-vertical {
  flex-direction: column;
}

.modal-window-dark {
  border: 1px solid#FFF;
  background: var(--lightgrey-3);
}

.modal-window-dark h1,
.modal-window-dark h2,
.modal-window-dark h3,
.modal-window-dark h3 a,
.modal-window-dark p,
.modal-window-dark .fs-label-text,
.modal-window-dark .link {
  color: #fff;
}

.modal-window-dark .form {
  position: relative;
}

.modal-window-dark .form-link-forgot {
  color: var(--lightgrey-4);
  position: absolute;
  top: 17px;
  right: 15px;
}

.modal-window-dark .btn-container.center {
  margin-top: 28px;
}

.modal-window-dark .modal-content {
  margin-top: 30px;
}

.modal-window-dark .modal-close {
  background-image: url("data:image/svg+xml,%0A%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0.692305L0.692305 0L17.9999 17.3076L17.3076 17.9999L0 0.692305Z' fill='%23ffffff'/%3E%3Cpath d='M17.3077 7.39382e-05L18 0.692379L0.692369 18L6.37841e-05 17.3077L17.3077 7.39382e-05Z' fill='%23ffffff'/%3E%3C/svg%3E%0A");
}

.modal-window-dark .checkmark {
  border-color: #fff;
}

.modal-window-dark input~.checkmark {
  background-color: #fff0;
}

.modal-window-dark input:checked~.checkmark {
  border-color: var(--green);
}

.modal-window-dark .label-checkbox .checkmark:after,
.modal-window-dark .cf-input-radio:checked~.checkmark:after {
  background-color: var(--green);
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-size: 10px;
}

.modal-window-dark .form-input {
  background-color: #fff;
  border-color: #fff;
  color: var(--black);
}

.modal-window-dark .btn-container,
.news-note .btn-container {
  gap: 20px;
  align-items: center;
}

.modal-window-dark .fs-form-input {
  width: 100%;
  color: var(--lightgrey-4);
  background-color: #fff;
  padding: 14px 10px 14px 22px;
}

.modal-window-dark .fs-form-input {
  margin-bottom: 20px;
}

.modal-window-dark .h3.center {
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.modal-window-lightblue {
  background-color: var(--lightblue-4);
}

.modal-window-lightblue .checkmark {
  background-color: #fff;
}

.modal-window-medium .form-vertical {
  margin-top: 30px;
}

.modal-window-medium .label-checkbox {
  margin-bottom: 0;
  margin-top: 7px;
}

.modal-window-lightblue .cf-input-text {
  background-color: #fff;
  border-color: var(--black);
}

.model-content-top {
  margin-top: 0;
}

.model-content-top .modal-block:first-of-type {
  padding-top: 35px;
}

.backdrop {
  overflow: hidden;
}

.backdrop:before {
  content: '';
  display: inline-block;
  background: rgb(33 37 41 / 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
}

.backdrop .suggest-popup-open {
  display: none;
}

.hidden {
  display: none;
}

.form-subscribe div {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
}

.footer-switch {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

@media (max-width: 1280px) {
  .footer .form-subscribe {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
}

@media (max-width: 992px) {

  .cf-input-text,
  .cf-textarea {
    font-size: 12px
  }

  .footer {
    padding: 60px 0;
  }

  .footer-switch {
    position: static;
    margin-top: 20px;
    width: 100%;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .cf-label-row {
    flex-direction: column;
    gap: 0;
  }

  .footer-row {
    flex-direction: column;
  }

  .footer-col:nth-of-type(1) {
    order: 3;
  }

  .footer-col:nth-of-type(2) {
    order: 1;
    text-align: left;
  }

  .footer-col:nth-of-type(3) {
    order: 2;
    text-align: left;
  }

  .footer-social {
    justify-content: flex-start;
  }

  .footer-address {
    margin-top: 30px;
  }

  .cf-input-text-footer {
    text-align: left;
  }

  .footer-links a {
    margin-bottom: 15px;
  }
}

@media (max-width: 576px) {
  .fs-form.form-vertical {
    width: 100%;
  }

  .suggest-popup {
    width: 95vw;
    max-width: unset;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: unset;
    border: 0;
  }

  .suggest-popup-step {
    text-align: center;
  }

  .suggest-popup-open {
    flex-direction: row;
  }

  .suggest-popup-open:before {
    margin: 0 5px 0 0;
  }

  .suggest-popup-open.no-text:before {
    margin: 0;
  }


  .modal-block {
    padding: 25px 20px;
  }

  .modal-close {
    top: 16px;
    right: 16px;
    width: 15px;
    height: 15px;
  }

  .modal-window-dark .h3.center {
    max-width: 100%;
  }
}

@media (max-width: 480px) {


  .footer-links a,
  .footer-address {
    font-size: 16px;
  }

}

@media (max-width: 320px) {
  .footer-social {
    gap: 7px;
  }
}
</style>