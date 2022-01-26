<template>
  <header>
    <section class="social-container">
      <div class="items">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHo0MZX-J0xEQ/profile-displayphoto-shrink_200_200/0/1631043575252?e=1645660800&v=beta&t=W6lv1UNiiwzyvEB3hlEzcb0j1GAmTaI__clpbjAu5CY"
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
          My name is Icaro also known as PatoGordo, I’m a {{ getAge() }} years
          old high schooler.
        </p>
        <br />
        <p>I’m a Fullstack Web Developer and a beginner Mobile Developer.</p>
        <br />
        <p>I live in Montes Claros, Minas Gerais, Brazil.</p>
      </div>
    </section>
    <a href="#skills" class="skills-indicator"
      >Know my Skills
      <br />
      <span>
        <icon icon="akar-icons:chevron-down" />
        <icon icon="akar-icons:chevron-down" />
        <icon icon="akar-icons:chevron-down" />
      </span>
    </a>
  </header>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

function getAge() {
  const birthdate = new Date("2005-03-22");
  const now = new Date();

  const ageMs = now - birthdate;

  return Math.floor(ageMs / 1000 / 60 / 60 / 24 / 365);
}
</script>

<style lang="scss" scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
.skills-indicator {
  position: absolute;
  bottom: 0;
  margin-bottom: 16px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  span {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: bounce 1s infinite;
  }
}
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
    h1 {
      font-size: 20px;
    }
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
  @media only screen and (max-width: 360px) {
    p,
    a {
      font-size: 12px;
    }
    h1 {
      font-size: 16px !important;
    }
  }
}
</style>
