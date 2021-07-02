<template>
  <main>
    <AppHeader></AppHeader>
    <AppNavbar></AppNavbar>
    <router-view></router-view>
    <AppFooter></AppFooter>
    <a v-if="$route.name == 'home'" class="scroll-btn" @click="scrollToTop()"
      ><ion-icon name="chevron-up-circle-outline"></ion-icon
    ></a>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavbar from "./components/AppNavbar.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
});
</script>

<style lang="scss">
@import "./scss/preset.scss";
</style>
<style lang="scss" scoped>
.scroll-btn {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 10px;
  cursor: pointer;
  display: grid;
  place-items: center;
  z-index: 8;
  ion-icon {
    font-size: 2.5rem;
  }
}
</style>
