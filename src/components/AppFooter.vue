<template>
  <footer v-if="$route.name === 'home'">
    <h3>
      Made with 🧡 by
      <a class="h3" href="https://github.com/PatoGordo" target="_blank"
        >Icaro(patogordo)</a
      >
    </h3>
    <div class="social">
      <a href="https://github.com/PatoGordo" target="_blank"
        ><ion-icon name="logo-github"></ion-icon
      ></a>
      <a href="https://linkedin.com/in/icaro-miguel-0879521bb/" target="_blank"
        ><ion-icon name="logo-linkedin"></ion-icon
      ></a>
      <a href="https://t.me/PatoGordo" target="_blank"
        ><i class="fab fa-telegram-plane"></i
      ></a>
      <a href="mailto:conversecomicaro@gmail.com" target="_blank"
        ><ion-icon name="mail-outline"></ion-icon
      ></a>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppFooter",
});
</script>

<style lang="scss">
footer {
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  text-align: center;
  padding: 25px 10px;
  background: #21262d;
}
a.h3 {
  color: var(--yellow);
  text-decoration: underline;
}
.social {
  margin-top: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-size: 1.7rem;
    color: #fff;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
