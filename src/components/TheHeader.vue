<script lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

export default {
  name: "HeaderDropdown",
  setup() {
    const windowWidth = ref(window.innerWidth); // Track window width
    const dropdownVisible = ref<Record<string, boolean>>({}); // Store visibility states dynamically

    // Determine if the current view is desktop or mobile
    const isDesktop = computed(() => windowWidth.value > 992);

    const updateWindowWidth = () => {
      windowWidth.value = window.innerWidth; // Update window width on resize
    };

    const handleMouseEnter = (dropdown: string) => {
      dropdownVisible.value[dropdown] = true; // Show dropdown when hovering over dropdown button or content
    };

    const handleMouseLeave = (dropdown: string) => {
      dropdownVisible.value[dropdown] = false; // Hide dropdown when leaving both button and content
    };

    const toggleDropdown = (e: MouseEvent, dropdown: string) => {
      e.preventDefault();
      if (!isDesktop.value) {
        dropdownVisible.value[dropdown] = !dropdownVisible.value[dropdown]; // Toggle visibility for mobile
      }
    };

    onMounted(() => {
      window.addEventListener("resize", updateWindowWidth);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateWindowWidth);
    });

    return {
      windowWidth,
      dropdownVisible,
      isDesktop,
      updateWindowWidth,
      handleMouseEnter,
      handleMouseLeave,
      toggleDropdown,
    };
  },
};
</script>

<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/" class="header-logo">
        <img src="/en/logo/logo.svg" width="130" height="24" alt="InsiderWeek" />
      </RouterLink>
      <input id="toggle-menu" type="checkbox" />
      <label class="hamburger" for="toggle-menu">
        <span class="top"></span>
        <span class="meat"></span>
        <span class="bottom"></span>
      </label>
      <div class="header-menu">
        <nav class="header-nav">
          <RouterLink to="/about" class="header-nav-link">{{ $t('header.nav_about') }}</RouterLink>
          <RouterLink to="/strategy" class="header-nav-link">{{ $t('header.nav_strategy') }}</RouterLink>
          <div class="header-nav-item" @mouseenter="handleMouseEnter('tools')" @mouseleave="handleMouseLeave('tools')">
            <RouterLink to="/tools" class="header-nav-link dropdown-btn" :class="{ visible: dropdownVisible.tools }"
              @click="toggleDropdown($event, 'tools')">
              {{ $t("header.nav_tools") }}
            </RouterLink>
            <div class="dropdown-content" v-if="dropdownVisible.tools || !isDesktop">
              <RouterLink to="/tools" class="mob-only">{{ $t('header.nav_tools_all') }}</RouterLink>
              <RouterLink to="/futures-contract-specifications">{{ $t('header.nav_tools_futures_spec') }}</RouterLink>
            </div>
          </div>
          
          <div class="header-nav-item" @mouseenter="handleMouseEnter('education')" @mouseleave="handleMouseLeave('education')">
            <RouterLink to="/education" class="header-nav-link dropdown-btn" :class="{ visible: dropdownVisible.education }"
              @click="toggleDropdown($event, 'education')">
              {{ $t("header.nav_education") }}
            </RouterLink>
            <div class="dropdown-content" v-if="dropdownVisible.education || !isDesktop">
              <RouterLink to="/education" class="mob-only">{{ $t("header.nav_education") }}</RouterLink>
              <RouterLink to="/coaching">{{ $t("header.nav_coaching") }}</RouterLink>
              <RouterLink to="/subscription">{{ $t("header.nav_subscription") }}</RouterLink>
            </div>
          </div>
        </nav>
        <div class="header-right">
          <RouterLink to="/subscription" class="btn btn-black-fill utm-header-trade utm-header-trade-de">{{
            $t("header.nav_subscription") }}</RouterLink>
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
  background-image: url(./src/assets/img/en/icons/dropdown.svg);
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

@media (max-width: 1280px) {
  .header-nav {
    gap: 14px;
  }
}

@media (max-width: 992px) {
  .header {
    height: 54px;
  }

  .hamburger {
    display: block;
    float: right;
    margin-left: 20px
  }

  .header-menu {
    display: none
  }

  .header-nav,
  .header-right {
    flex-direction: column;
    margin: 0 auto 0 20px;
    padding: 10px 0
  }

  .header .btn {
    position: absolute;
    top: 11px;
    right: 40px
  }

  .header-right-login {
    border-right: 0
  }

  .header-nav {
    gap: 22px;
    width: calc(100% - 40px)
  }

  div.dropdown-content {
    min-width: 100%;
    position: static;
    margin-top: 10px;
    padding: 0 10px;
    display: none
  }

  .header~.content {
    margin-top: 50px
  }

  .dropdown-btn.visible+div.dropdown-content {
    display: flex;
  }

  .nav-open~.header-menu {
    display: flex;
    flex-direction: column;
    top: 54px;
    left: -20px;
    background: #fff;
    width: 100vw;
    box-shadow: 10px 10px 10px rgb(0 0 0 / 0.1);
    position: absolute;
  }

  .dropdown-container .dropdown-btn.visible+div.dropdown-content {
    margin-top: 0;
    position: absolute;
    top: 31px;
  }
}

@media (max-width: 576px) {
  .header div.dropdown-content a {
    font-size: 14px;
  }
}

@media (max-width: 340px) {
  .header-logo img {
    max-width: 110px;
  }

  .header .btn {
    font-size: 12px;
    top: 14px;
  }

  .header-nav,
  .header-right {
    width: calc(100% - 20px);
    margin: 0 auto;
  }

  .nav-open~.header-menu {
    left: -10px;
  }
}

@media (max-width: 320px) {
  .header .btn {
    font-size: 10px;
    padding: 6px;
    top: 13px;
    right: 35px;
  }
}
</style>