<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<style>
@font-face {
  font-family: 'Noto Serif';
  src: url(./src/assets/fonts/NotoSerif-Regular.woff2) format('woff2'),
    url(./src/assets/fonts/NotoSerif-Regular.woff) format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Noto Serif';
  src: url(./src/assets/fonts/NotoSerif-Bold.woff2) format('woff2'),
    url(./src/assets/fonts/NotoSerif-Regular.woff) format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Noto Serif';
  src: url(./src/assets/fonts/NotoSerif-Medium.woff2) format('woff2'),
    url(./src/assets/fonts/NotoSerif-Regular.woff) format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

:root {
  --black: #212529;
  --black-2: #0D1625;
  --text-lightgrey: #878787;
  --lightgrey-1: #f0f0f0;
  --lightgrey-2: #efefef;
  --lightgrey-3: #293241;
  --lightgrey-4: #6c757d;
  --lightgrey-5: #ecf1f5;
  --lightgrey-6: #f9fdff;
  --lightgrey-7: #706773;
  --lightgrey-8: #828C95;
  --grey: #3d4955;
  --lightgreen-1: #00A38F;
  --lightgreen-2: #66D3BB;
  --green: #00A38F;
  --green-2: #008B7D;
  --green-3: #006055;
  --green-4: #33BBA5;
  --green-5: #004740;
  --lightblue-1: #e0fbfc;
  --lightblue-2: #98c1d9;
  --lightblue-3: #b0e8ff;
  --lightblue-4: #e1e5f2;
  --lightblue-5: #BFDBF7;
  --darkblue-1: #21385E;
  --red-1: #d84343;
  --red-2: #c8102e;
  --red-3: #c8102e;
  --red-4: #e57373;
  --red-5: #D90429;
}

/* critical css */

.en-only,
.de-only {
  display: none;
}

.grecaptcha-badge {
  display: none !important;
}

html[lang='de'] .de-only {
  display: inline-block;
}

html[lang='en'] .en-only {
  display: inline-block;
}

.no-scroll {
  overflow: hidden;
}

picture {
  font-size: 0;
}

.transitions-on-page-load * {
  transition: none !important;
}

.container,
.container-big {
  width: 1200px;
  margin: 0 auto;
}

.container-full {
  width: 1400px;
  margin: 0 auto;
}

.container-full .text-wrap {
  max-width: 1165px;
}

* {
  box-sizing: border-box;
  font-family: "Noto Serif", "Georgia", serif;
  margin: revert;
  padding: revert;
}

.mob-only {
  display: none
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh
}

a {
  color: var(--black-2)
}

img {
  max-width: 100%;
  height: auto
}

.container {
  width: 1200px;
  margin: 0 auto
}

.container-full {
  width: 1400px;
  margin: 0 auto
}

.content {
  flex-grow: 1
}

.header {
  background-color: var(--lightblue-4);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  height: 54.5px;
}

.header-nav div {
  position: relative
}

.header-nav div a {
  text-decoration: none
}

.dropdown-btn:after {
  content: "";
  width: 8px;
  height: 8px;
  display: inline-block;
  margin-left: 8px;
  background-image: url(./src/assets/img/en/icons/dropdown.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  vertical-align: middle
}

div.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--lightgrey-2);
  top: 25px;
  left: -10px;
  flex-direction: column;
  padding: 3px 10px;
  z-index: 1;
  min-width: 150px
}

div.dropdown-content a {
  line-height: 1.3;
  margin-left: 0;
  padding: 7px 0;
  font-size: 14px;
  border-bottom: 1px solid rgba(135, 135, 135, .15);
  color: var(--grey);
  text-decoration: none
}

div.dropdown-content a:last-of-type {
  border-bottom: 0
}

.header .container {
  display: flex;
  padding: 12px 0;
  justify-content: space-between;
  align-items: center;
  position: relative
}

.header .btn {
  white-space: nowrap
}

.header-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%
}

.header-nav {
  display: flex;
  gap: 30px;
  margin-left: auto
}

.header-nav-link {
  color: var(--grey);
  font-size: 14px;
  text-decoration: none;
  line-height: 2;
}

.header-logo {
  display: flex
}

.header-logo img {
  max-width: 130px
}

.header-right {
  margin-left: auto
}

.header-right-login {
  margin-right: 12px;
  padding-right: 12px;
  border-right: 1px solid var(--black);
  font-size: 14px;
  color: var(--black);
  text-decoration: none
}

.header-right-login svg {
  margin-right: 3px
}

.header~.content {
  margin-top: 54px
}

.hamburger {
  height: 30px;
  width: 28px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  z-index: 1;
  display: none;
  outline: none
}

.hamburger span {
  display: block;
  background-color: #3d3d3d;
  position: relative;
  width: 28px;
  height: 2px;
  margin: 6px 0
}

#toggle-menu {
  display: none;
  outline: none
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.4;
}

h2 {
  font-weight: 400;
}

.h1,
.h2 {
  font-size: 54px;
  margin: 0 0 30px
}

.h3 {
  font-size: 22px;
  margin: 0 0 20px
}

p+.h3 {
  margin-top: 30px
}

.h4 {
  font-size: 18px
}

.text {
  font-size: 18px;
  color: var(--black);
  line-height: 1.45
}

.text-big {
  font-size: 22px;
}

.btn {
  font-size: 16px;
  text-decoration: none;
  padding: 6px 11px;
  border: 1px solid var(--black);
  outline: none;
  display: inline-block;
  background-color: transparent;
  color: var(--black);
  text-align: center;
  appearance: none;
  border-radius: 0
}

.btn-big {
  font-size: 26px;
  padding: 10px 30px;
  text-transform: uppercase
}

.btn-white {
  border-color: #fff;
  color: #fff
}

.btn-black-fill {
  background-color: var(--darkblue-1);
  color: #fff
}

.owhforms input {
  outline: none
}

.form-vertical {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px
}

.form-vertical .cf-input-text,
.form-vertical .cf-textarea {
  width: 100%
}

.form-vertical .btn {
  margin-top: 15px
}

.cf-input-text,
.cf-textarea {
  background: rgba(240, 240, 240, .1);
  border: 1px solid var(--text-lightgrey);
  color: var(--black);
  padding: 7px;
  outline: none;
  font-size: 14px
}

.cf-textarea {
  min-height: 160px
}

.owhforms_loading {
  font-size: 14px;
  color: var(--black)
}

.form-input-checkbox {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0
}

.label-checkbox {
  display: block;
  position: relative;
  padding: 0 0 0 25px;
  margin-bottom: 12px
}

.checkmark {
  position: absolute;
  top: 4px;
  left: 0;
  height: 14px;
  width: 14px;
  border: 1px solid var(--text-lightgrey)
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none
}

.label-checkbox .checkmark:after {
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  transform: translate(-50%, -50%);
}

.fs-label-text {
  color: var(--text-lightgrey);
  font-size: 14px
}

.home-intro-sect {
  position: relative;
  padding: 130px 0;
  background-color: var(--darkblue-1);
  background-image: url(./src/assets/img/home-bg.webp);
  background-size: cover;
  background-position: center;
  min-height: 85vh
}

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

.text-sect {
  padding: 70px 0
}

.modal-window {
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%) scale(.9);
  width: 600px;
  max-width: 95%;
  max-height: 90vh;
  overflow: auto;
  min-height: 200px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, .2);
  background-color: #fff;
  visibility: hidden;
  opacity: 0;
  z-index: 10000;
  display: flex;
  flex-direction: column
}

.modal-window .text {
  word-wrap: break-word
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
  right: 22px
}

.modal-content {
  overflow: auto;
  max-height: calc(100% - 60px);
  margin-top: 60px
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .6);
  z-index: 9999
}

.modal-block {
  padding: 35px
}

.modal-block:first-of-type {
  padding-top: 0
}

.modal-window .form-vertical {
  flex-direction: column
}

.hidden {
  display: none
}

.cot-report-sect {
  padding-bottom: 0;
}

.cot1-intro-sect {
  padding: 40px 0 60px;
}

.pro-intro-sect,
.basic-intro-sect {
  padding-top: 10px;
}

.article {
  padding: 70px 0
}

.h1,
.h2,
.main-heading,
.section-heading {
  font-size: 54px;
  margin: 0 0 30px;
}

.article-info-data {
  margin-bottom: 35px;
  display: flex;
  align-items: center;
}

.article-info-item:not(:first-of-type) {
  margin-left: auto;
}

.article .img-container {
  background-color: #fff;
  margin: 25px 0;
  min-width: 50%;
  max-width: 920px;
}

.breadcrumbs,
.article .breadcrumbs {
  display: flex;
  list-style: none;
  gap: 8px;
  padding-left: 0;
  margin: 0 0 40px;
  flex-wrap: wrap;
}

.breadcrumbs li,
.article .breadcrumbs li {
  margin: 0;
}

.breadcrumbs a,
.breadcrumbs span {
  text-decoration: none;
  color: var(--black);
  font-style: italic;
  transition: .3s;
}

.breadcrumbs a:hover {
  color: var(--lightblue-2);
}

.breadcrumbs li:after {
  content: "";
  background-image: url(./src/assets/img/icons/breadcrumbs-caret.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 6px;
  height: 14px;
  display: inline-block;
  margin-left: 13px;
}

.breadcrumbs li:last-child:after {
  display: none
}

/* general styles */
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.4;
  color: var(--black-2);
}

.h1,
.main-heading {
  font-size: 54px;
  margin: 0 0 30px;
  font-weight: 700;
}

.h2,
.section-heading {
  font-size: 32px;
  margin: 0 0 30px;
  font-weight: 700;
}

.article .h2,
.article .section-heading,
.calendar-tip .small-heading {
  font-size: 26px;
  margin: 0 0 20px;
}

.h3,
.middle-heading {
  font-size: 26px;
  margin: 0 0 20px;
}

p+.h3 {
  margin-top: 30px;
}

.h4,
.small-heading {
  font-size: 20px;
}

.article .h2,
.article h2,
.article .section-heading,
.article .h3,
.article h3,
.article .middle-heading {
  margin: 35px 0 15px;
}

.article .h2+.h2,
.article .h2+h3,
.article .h2+.section-heading,
.article .h2+.middle-heading,
.article .section-heading+.section-heading,
.article .middle-heading+.middle-heading,
.article .section-heading+.middle-heading,
.article .middle-heading+.section-heading,
.article .h3+.h2,
.article .h3+h3,
.article .h3+.section-heading,
.article .h3+.middle-heading {
  margin-top: 20px;
}

p,
.text {
  font-size: 18px;
  color: var(--black-2);
  line-height: 1.4;
}

.center,
.text-center {
  text-align: center;
}

.text-small {
  font-size: 12px;
}

.text-medium {
  font-size: 14px;
}

.text-big {
  font-size: 24px;
}

.list {
  margin: 5px 0;
  padding-left: 28px;
}

.list-checkmark {
  list-style: none;
  padding: 0;
}

.list li {
  line-height: 1.4;
  margin: 8px 0;
  color: var(--black);
  font-size: 18px;
}

.list-checkmark li {
  margin: 12px 0;
}

.list-checkmark li:before {
  content: '✓';
  margin-right: 7px;
}

.list-small {
  padding-left: 16px;
}

.list-small li {
  margin: 5px 0;
  font-size: 12px;
}

.btn {
  font-size: 16px;
  text-decoration: none;
  padding: 3.5px 12px;
  border: 1px solid var(--black-2);
  transition: 0.3s;
  cursor: pointer;
  outline: none;
  display: inline-block;
  background-color: #fff0;
  user-select: none;
  color: var(--black-2);
  text-align: center;
  appearance: none;
  border-radius: 0;
  height: unset !important;
  letter-spacing: 0;
}

.btn-big {
  font-size: 26px;
  padding: 10px 30px;
  text-transform: uppercase;
}

.btn-white {
  border-color: #fff;
  color: #fff;
}

.btn-white-fill {
  background-color: #fff;
  border-color: #fff;
  color: var(--black);
}

.btn-black-fill,
.btn-green-fill {
  background-color: var(--darkblue-1);
  border-color: var(--darkblue-1);
  color: #fff;
}

.btn-green-fill {
  background-color: var(--green-3);
  border-color: var(--green-3);
}

.btn:hover,
.weatherBlockMapParamsWrapper3:hover,
.btn-black:hover,
.btn-white:hover,
.cot-tabs-nav .btn:hover {
  color: var(--lightblue-2);
  border-color: var(--lightblue-2);
}

.btn-black-fill:hover {
  color: var(--lightblue-3);
}

.btn-white-fill:hover {
  background-color: var(--lightblue-2);
  color: var(--black);
  border-color: var(--lightblue-2);
}

.btn-lightblue-fill {
  background-color: var(--lightblue-1);
  color: var(--lightgrey-3);
}

.btn-lightblue-fill:hover {
  color: var(--green);
  border-color: #fff0;
}

.btn-darkblue-fill {
  background-color: var(--lightgrey-3);
  color: var(--lightblue-1);
}

.btn-darkblue-fill:hover {
  color: var(--lightblue-2);
  border-color: #fff0;
}

.btn-green-fill:hover {
  background-color: var(--green-5);
  border-color: var(--green-5);
}

.btn-icon {
  max-width: 20px;
  margin-right: 15px;
  vertical-align: middle;
}

.btn-small-icon {
  max-width: 18px;
  margin-right: 7px;
  vertical-align: sub;
}

.btn-wide {
  padding: 6px 24px;
}

.btn-border {
  border: 1px solid white;
}

.btn-arrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.btn-arrow:after {
  content: "";
  background-image: url(./src/assets/img/article/arrow-next.svg);
  background-size: cover;
  background-position: center;
  display: inline-block;
  width: 14px;
  height: 6px;
}

.btn-black-fill.btn-arrow:after {
  background-image: url(./src/assets/img/article/arrow-next-white.svg);
}

.btn-white-fill.btn-border {
  border-color: var(--darkblue-1);
}

.btn-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.btn-container.center {
  align-items: center;
  justify-content: center;
}

.btn-container-column {
  flex-direction: column;
}

.btn-container-column .btn+.btn {
  margin: 10px 0 0;
}

.modal-block .text:last-of-type+.btn-container {
  margin-top: 25px;
}

.btn-yes:before,
.btn-no:before {
  content: '';
  width: 11px;
  height: 11px;
  display: inline-block;
  background-image: url(./src/assets/img/icons/btn-yes.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 0 7px 0 -7px;
}

.btn-no:before {
  background-image: url(./src/assets/img/icons/btn-no.svg);
}

.heading-icon {
  font-weight: 700;
  margin-bottom: 10px;
}

.heading-icon img {
  margin: 0 20px 0 0;
  vertical-align: middle;
  width: 30px;
}

.text-sect,
.article {
  padding: 70px 0;
}

.article+.text-sect,
.article-calc {
  padding-top: 0;
}

.border-sect .container {
  border-top: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
  padding: 80px 0;
}

.border-sect+.border-sect .container {
  margin-top: 0;
  border-top: 0;
}

.border-sect:not(:first-child) {
  padding: 0;
}

.border-sect:last-child .container,
.border-sect:last-of-type .container {
  border-bottom: 0;
}

.border-sect .cta-block {
  margin: 0;
}

.container>.text-block:first-child {
  margin-top: 0;
}

.text-block {
  margin: 35px 0 60px;
}

.text-block:first-child {
  margin-top: 0;
}

.text-block .h3 {
  margin-bottom: 15px;
}

.text-block:last-child,
.text-block:last-child p {
  margin-bottom: 0;
}

.quote-sect {
  text-align: center;
}

.quote-sect cite {
  font-style: normal;
  display: block;
  max-width: 700px;
  margin: 0 auto 35px;
}

.cta-separate-sect {
  margin: 80px 0;
  padding: 100px 0;
  background-color: var(--text-lightgrey);
  background-image: url(./src/assets/img/cta-bg.webp);
  background-size: cover;
  background-position: center;
}

.cta-separate-sect .h2 {
  color: white;
  margin-bottom: 60px;
}

.img-container {
  position: relative;
  display: inline-flex;
  flex-direction: column;
}

.img-container>a {
  font-size: 0;
  cursor: pointer;
}

.img-container img {
  width: 100%;
  max-height: 85vh;
  object-fit: cover;
}

.img-desc,
p.img-desc {
  font-size: 12px;
  background-color: var(--black);
  color: #fff;
  padding: 10px;
  margin: 0;
  text-align: center;
}

.img-desc a {
  color: #fff;
}

.breadcrumbs,
.article .breadcrumbs {
  display: flex;
  list-style: none;
  gap: 8px;
  padding-left: 0;
  margin: 0 0 40px;
  flex-wrap: wrap;
}

.breadcrumbs li,
.article .breadcrumbs li {
  margin: 0;
}

.breadcrumbs a,
.breadcrumbs span {
  text-decoration: none;
  color: var(--black);
  font-style: italic;
  transition: .3s;
}

.breadcrumbs a:hover {
  color: var(--lightblue-2);
}

.breadcrumbs li:after,
.breadcrumbs li:only-child:before {
  content: "";
  background-image: url(./src/assets/img/icons/breadcrumbs-caret.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 6px;
  height: 14px;
  display: inline-block;
  margin-left: 13px;
}

.breadcrumbs li:only-child:before {
  transform: rotate(180deg);
  height: 12px;
  margin-right: 13px;
  margin-left: 0;
}

.breadcrumbs li:last-child:after {
  display: none
}

.blog-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 60px 0;
  justify-items: center;
}

.separate-sect {
  padding: 60px 0;
  margin: 60px 0;
  border-top: 1px solid var(--lightgrey-8);
  border-bottom: 1px solid var(--lightgrey-8);
}

.separate-sect+.separate-sect {
  margin-top: 0;
  padding-top: 0;
  border-top: 0;
}

.separate-sect:last-child {
  border-bottom: 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.feature-grid:not(:only-child) {
  margin-top: 60px;
}

.feature-grid-column,
.feature-grid-column:not(:only-child) {
  grid-template-columns: repeat(1, 1fr);
  margin: 0;
}

.feature-grid-offer,
.feature-grid-offer:not(:only-child) {
  margin-bottom: 60px;
}

.feature-item {
  border: 1px solid var(--black);
  padding: 25px 20px;
  display: flex;
  align-items: flex-start;
}

.feature-item-noborder {
  border: 0;
  border-bottom: 1px solid var(--black);
  padding: 25px 0 40px;
}

.feature-item .h4 {
  margin: 0;
}

.feature-item .h4+p {
  margin-top: 10px;
}

.feature-item-text {
  margin-left: 40px;
}

.feature-item p:last-child {
  margin-bottom: 0;
}

.feature-item-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  object-position: top;
}

.windows *::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

.windows *::-webkit-scrollbar-track {
  background: var(--lightgrey-1);
}

.windows *::-webkit-scrollbar-thumb {
  background-color: var(--text-lightgrey);
  border-radius: 20px;
  border: 3px solid var(--lightgrey-1);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 30px;
  margin: 8px 0;
}

.product-grid-small {
  grid-template-columns: repeat(4, 1fr);
  margin: 40px 0 30px;
  gap: 30px 20px;
}

.product-item .article-img a {
  width: 100%;
  height: 250px;
}

.product-grid-small .article-img a {
  height: 180px;
}

.product-item-info {
  text-align: center;
  margin: 15px 0;
}

.product-item-name {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
}

.product-item-desc {
  margin-bottom: 10px;
}

.article-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.article-nav a,
.link {
  text-decoration: none;
}

.article-nav-prev,
.article-nav-next,
.link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--darkblue-1);
  font-weight: 700;
  margin: 10px 0;
}

.link-arrow {
  margin: 0;
  font-weight: 400;
}

.number-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 60px 0;
}

.number-grid:last-child {
  margin-bottom: 0;
}

.number-item {
  border: 1px solid var(--black);
  display: flex;
  padding: 25px 20px;
  align-items: center;
}

.number-item-left {
  border-right: 1px solid var(--black);
  padding-right: 20px;
  margin-right: 20px;
  min-width: 115px;
  text-align: center;
}

.number-item-left-number {
  display: block;
  font-weight: 700;
  font-size: 32px;
  margin: 0;
}

.intro-row {
  display: flex;
  align-items: center;
}

.intro-left-text {
  margin-bottom: 40px;
}

.intro-right {
  flex-grow: 1;
  min-width: 50%;
  display: flex;
}

.link-arrow:after {
  content: "";
  background-image: url(./src/assets/img/article/arrow-prev.svg);
  background-size: cover;
  background-position: center;
  display: inline-block;
  width: 14px;
  height: 6px;
}

.link-arrow:after {
  background-image: url(./src/assets/img/article/arrow-next.svg);
}

/*general styles end*/

@media (max-width: 1440px) {
  .container-full {
    width: calc(100% - 40px);
  }
}

@media (max-width: 1280px) {

  .container,
  .container-big {
    width: calc(100% - 40px)
  }

  .scroll {
    right: 24px;
  }

  .product-grid,
  .product-grid-small {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 20px;
    margin: 60px 0;
  }

  .product-grid:last-child,
  .product-grid-small:last-child {
    margin-bottom: 0;
  }
}

@media (max-width: 992px) {
  img {
    width: auto
  }

  .mob-only {
    display: block
  }

  .pro-intro-sect,
  .basic-intro-sect {
    padding: 35px 0 0;
  }

  .feature-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .feature-item-text {
    margin-left: 30px;
  }

  .intro-row {
    flex-direction: column;
    gap: 35px;
  }
}

@media (max-width: 768px) {

  .h1,
  .h2,
  .main-heading,
  .section-heading {
    font-size: 48px;
  }

  .h1,
  .main-heading,
  .pro-trader .pro-intro-sect .h1 {
    font-size: 40px;
  }

  .h2,
  .section-heading {
    font-size: 32px;
  }

  .h3,
  .middle-heading {
    font-size: 24px;
  }

  .text-big {
    font-size: 18px;
  }

  .text-sect {
    padding: 60px 0
  }

  .h1,
  .h2 {
    font-size: 48px
  }

  .h3 {
    font-size: 24px
  }

  .btn-big {
    font-size: 18px
  }

  .text {
    font-size: 16px
  }

  .btn-big,
  .article .container>.btn {
    font-size: 18px;
  }

  .fs-form .btn-big {
    font-size: 18px;
  }

  .text,
  .article li,
  .article ul,
  .article p,
  .list li {
    font-size: 16px;
  }

  .text-big {
    font-size: 18px;
  }

  .text-small {
    font-size: 12px;
  }

  .text-block {
    margin-bottom: 40px;
  }

  .img-desc,
  p.img-desc {
    font-size: 12px;
  }

  .subscription-row {
    flex-direction: column;
  }

  .product-grid,
  .product-grid-small {
    grid-template-columns: repeat(1, 1fr);
    margin: 40px 0;
  }

  .cta-block {
    margin: 60px 0;
  }

  .cta-block-highlight {
    padding: 30px;
  }

  .cta-block .text-block {
    margin: 20px 0 35px;
  }

  .number-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .cta-separate-sect {
    margin: 60px 0;
    padding: 60px 0;
  }

  .cta-separate-sect .h2 {
    margin-bottom: 40px;
  }

}

@media (max-width: 576px) {

  .text-sect,
  .article,
  .border-sect .container {
    padding: 50px 0;
  }

  .breadcrumbs li:after {
    display: none
  }

  .breadcrumbs li:before {
    content: "";
    background-image: url(./src/assets/img/icons/breadcrumbs-caret.svg);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 6px;
    height: 11px;
    display: inline-block;
    margin-right: 11px;
    transform: rotate(180deg);
  }

  .breadcrumbs li:not(:last-of-type),
  .article .breadcrumbs li:not(:last-of-type) {
    display: none;
  }

  .breadcrumbs a {
    font-size: 14px;
  }

  .btn-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-container .btn:not(:only-child) {
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.3;
  }
}

@media (max-width: 480px) {

  .h1,
  .h2,
  .main-heading,
  .section-heading,
  .pro-trader .pro-intro-sect .h1 {
    font-size: 36px;
  }

  .h2,
  .section-heading {
    font-size: 30px;
  }

  .h3,
  .middle-heading {
    font-size: 22px;
  }

  .home-intro-sect {
    padding: 360px 0 80px;
    background-position: 14% -30px
  }

  .home-intro-sect:after {
    width: 100%;
    height: 380px;
    bottom: 0;
    top: unset;
    opacity: 1;
    background-position: top;
    background-image: url(./src/assets/img/en/intro-bg-numbers-bottom.webp)
  }

  .home-intro-sect .h1,
  .home-intro-sect .h3 {
    margin-bottom: 15px
  }

  h1,
  h2,
  h3,
  .text {
    word-wrap: break-word
  }

  .article .img-container {
    margin: 15px 0;
  }

  h1,
  h2,
  h3,
  h4,
  .text {
    word-wrap: break-word;
  }
}

@media (max-width: 420px) {

  .home-intro-sect .h1,
  .home-intro-sect .h3 {
    margin-bottom: 10px
  }

  .home-intro-text .h4 {
    margin: 0 0 20px;
    font-size: 16px
  }

  .home-intro-sect {
    padding: 350px 0 80px
  }

  .home-intro-sect:after {
    height: 290px;
    opacity: .7
  }

  .home-intro-sect {
    background-position: 18% 0
  }

  .home-intro-text .h1 {
    font-size: 42px
  }








  .fs-form .btn-big {
    font-size: 16px;
    padding: 10px 20px;
  }

  .home-intro-sect .h1,
  .home-intro-sect .h3 {
    margin-bottom: 10px;
  }

  .home-intro-text .h4 {
    margin: 0 0 20px;
    font-size: 16px;
  }

  .plan-bottom {
    justify-content: flex-start;
  }

  .article-rate-button {
    flex-direction: column;
  }

  .article-rate-button .btn {
    width: 90%;
  }


  .risk-disclosure {
    padding: 20px 0 40px;
  }


}

@media (max-width: 375px) {

  .h1,
  .h2,
  .main-heading,
  .section-heading,
  .pro-trader .pro-intro-sect .h1 {
    font-size: 30px;
  }

  .h3,
  .middle-heading {
    font-size: 20px;
  }

}

@media (max-width: 340px) {

  .article-img a {
    width: 240px;
    height: 160px;
  }

  .btn-big,
  .article .container>.btn {
    font-size: 16px;
    padding: 10px 20px;
  }

  .container,
  .container-big,
  .container-full {
    width: calc(100% - 20px);
  }
}
</style>