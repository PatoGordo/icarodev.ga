<template>
  <header v-if="$route.name == 'home'">
    <div>
      <h1>Hello <span class="wave">👋</span></h1>
      <h2>
        My name is
        <a
          href="https://github.com/PatoGordo"
          target="_blank"
          class="yellow name-title"
          >Ícaro</a
        >
      </h2>
      <br />
      <p>
        I am 16 years old and I am a high schooler. I live in Minas Gerais
        in Brazil.
        <br /><br />
        I'm a fullstack web developer with focus on front-end, and a begginer
        mobile developer.
        <br /><br />
        I start as game developer 3 years ago, but in the last 2 years I'm
        focusing on the web development and in this time I learn several
        important things about the programming.
        <br /><br />
        Today I'm looking for a job or internship in a company.
      </p>
      <a v-scroll-to="{ el: '#skills', offset: -125 }" class="see-skills"
        >See my skills <br /><ion-icon name="chevron-down-outline"></ion-icon
      ></a>
    </div>
    <div class="me">
      <img
        src="https://avatars.githubusercontent.com/u/59514690?v=4"
        alt="Pato Avatar"
      />
      <div class="me-footer">
        <a href="https://github.com/PatoGordo" target="_blank"
          ><ion-icon name="logo-github"></ion-icon
        ></a>
        <a
          href="https://linkedin.com/in/icaro-miguel-0879521bb/"
          target="_blank"
          ><ion-icon name="logo-linkedin"></ion-icon
        ></a>
        <a href="https://t.me/PatoGordo" target="_blank"
          ><i class="fab fa-telegram-plane"></i
        ></a>
        <a href="mailto:conversecomicaro@gmail.com" target="_blank"
          ><ion-icon name="mail-outline"></ion-icon
        ></a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface DataTypes {}

export default defineComponent({
  name: "AppHeader",
  methods: {
    changePage() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/animations/bounce.scss";
@import "../scss/animations/wave.scss";
@import "../scss/variables.scss";

.me {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
  }
  .me-footer {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    a {
      display: grid;
      place-items: center;
      color: #fff;
      margin: 0 6px;
      font-size: 2rem;
    }
  }
}
.see-skills {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  ion-icon {
    margin-top: 8px;
    -webkit-animation-name: bounce;
    animation-name: bounce;
    -webkit-animation-duration: 1.2s;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
  }
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #21262d;
  padding: 25px;
  font-size: calc(14px + 0.33vw);
  z-index: 9;
  position: relative;
}
h1 {
  font-size: 3.2em;
  font-weight: 500;
  margin-bottom: 0;
  white-space: nowrap;
}
h2 {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 0;
  white-space: nowrap;
}
p,
a {
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.4;
  max-width: 28em;
}
a {
  text-decoration: none;
  color: #121314;
  position: relative;
}
span {
  font-size: 3.2rem;
}
h1,
h2 {
  color: #fff;
  width: 100%;
}
p {
  width: 100%;
  max-width: 28em;
}
.name-title {
  color: $yellow;
  text-decoration: underline;
}
.scroll-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
  cursor: pointer;
  display: grid;
  place-items: center;
  z-index: -100;
  ion-icon {
    font-size: 2.5rem;
    color: #c9d1d9;
  }
}
@media screen and (max-width: 780px) {
  .me {
    display: none;
  }
}
</style>
