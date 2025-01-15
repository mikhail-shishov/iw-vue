<template>
  <div class="subscription">
    <h1>This is an subscription page</h1>
  </div>
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

.en.pro-trader .plan-desc-row {
  gap: 40px;
}

.en.pro-trader .plan-item .text-small:last-of-type {
  font-size: 10px;
  margin: 5px 0 0;
}

.en.pro-trader h4.plan-bottom-desc {
  font-weight: 700;
  font-size: 20px;
}

.en.pro-trader .plan-checkmark-list {
  font-size: 14px;
}

.en.pro-trader .plan-bottom {
  gap: 12px;
  margin-top: 0;
}

.en.pro-trader .plan-get-price {
  margin-bottom: 10px;
  gap: 0 5px;
}

.en.pro-trader .plan-desc-col .text-block p {
  font-size: 18px;
}

.pro-trader .text-sect+.text-sect {
  padding-top: 0;
}

.de.pro-trader .pro-intro-sect .text {
  font-size: 16px;
}

.de.pro-trader .pro-intro-sect .h1 {
  margin: 0;
  font-size: 52px;
}

.de.pro-trader .intro-left-text {
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
  background-image: url(/uploads/2023/06/15/arrow-down.svg);
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
  background-image: url(/assets/images/abo/bg-pro-2.webp);
  background-position: center;
  background-size: cover;
  padding-top: 10px;
}
</style>
