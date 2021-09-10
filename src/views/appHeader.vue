<template>
  <header>
    <section class="social-container">
      <div class="items">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHo0MZX-J0xEQ/profile-displayphoto-shrink_800_800/0/1631043575252?e=1636588800&v=beta&t=3TcKM5AT5K3D5zYdg3-iRJqDYWSURd30QJzlhhmqkYo"
          alt="Icaro Image"
        />
        <div class="links">
          <a
            href="http://github.com/patogordo"
            target="_blank"
            rel="noopener noreferrer"
            ><icon icon="akar-icons:github-fill"
          /></a>
          <a
            href="https://www.linkedin.com/in/icaro-miguel-0879521bb/"
            target="_blank"
            rel="noopener noreferrer"
            ><icon icon="akar-icons:linkedin-fill"
          /></a>
          <a
            href="mailto:conversecomicaro@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            ><icon icon="akar-icons:envelope"
          /></a>
        </div>
      </div>
    </section>
    <section class="about-container">
      <div>
        <h1>Hi there! 👋</h1>
        <br />
        <p>
          My name is Icaro also known as PatoGordo, I’m a 16 years old high
          schooler.
        </p>
        <br />
        <p>I’m a Fullstack Web Developer and a beginner Mobile Developer.</p>
        <br />
        <p>I live in Montes Claros, Minas Gerais, Brazil.</p>
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
header {
  background: #22272e;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 124px;
  section {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    flex: 1;
    &.about-container {
      align-items: start;
      div {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        width: min(360px, 100% - 32px);
        h1 {
          color: #fff;
          font-size: 28px;
        }
      }
    }
    &.social-container {
      .items {
        gap: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
      }
      .links {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        a {
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    gap: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    section {
      flex: none;
      justify-content: center !important;
      align-items: center !important;
      &.social-container {
        img {
          width: 200px;
          height: 200px;
        }
      }
    }
  }
}
</style>
