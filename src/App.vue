<template>
  <app-header />
  <app-body />
  <app-footer />
</template>

<script setup lang="ts">
import AppHeader from "./views/appHeader.vue";
import AppBody from "./views/appBody.vue";
import AppFooter from "./views/appFooter.vue";
import emailjs from "emailjs-com";
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
  (function () {
    emailjs.init("user_F1zjT6pQNovfefUOkGFC1");
  })();
});
</script>
