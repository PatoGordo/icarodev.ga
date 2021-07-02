<template>
  <section>
    <h2 class="section-title">My recent work</h2>
    <p>Here are some of my projects I've worked on recently.</p>
    <div id="projects" class="projects">
      <div class="image">
        <img
          class="image-img"
          src="https://rocketlaunches.ga/images/favicon.svg"
          alt="Rocket launches logo"
        />
        <div class="image-overlay">
          <h2 class="image-title">Rocket launches</h2>
          <p class="image-description">
            A simple webapp/pwa to you see the upcoming rocket launches and the
            newest astronomy news.
          </p>
          <a
            class="image-button"
            href="https://rocketlaunches.ga/"
            target="_blank"
            >SEE PROJECT <ion-icon name="chevron-forward-outline"></ion-icon
          ></a>
        </div>
      </div>

      <div class="image">
        <img
          class="image-img"
          src="https://devfinances.tk/Src/Images/logo.svg"
          alt="Dev finances logo"
        />
        <div class="image-overlay">
          <h2 class="image-title">Dev finances</h2>
          <p class="image-description">
            This project was done following the
            <a
              href="https://www.youtube.com/playlist?list=PLeLKux5eT3kY2mvZUi7IM5T548vfKxGq5"
              target="_blank"
              >Maratona discover</a
            >
            classes by Rocketseat and Mayk brito
          </p>
          <a
            class="image-button"
            href="https://rocketlaunches.ga/"
            target="_blank"
            >SEE PROJECT <ion-icon name="chevron-forward-outline"></ion-icon
          ></a>
        </div>
      </div>

      <div class="image">
        <img class="image-img" src="../assets/quizck.svg" alt="Quizck logo" />
        <div class="image-overlay">
          <h2 class="image-title">Quizck</h2>
          <p class="image-description">
            This a simple open source quiz system, made using Vue, Less, and
            Firebase. Try the '3369' quiz code.
          </p>
          <a class="image-button" href="https://quizck.tk/" target="_blank"
            >SEE PROJECT <ion-icon name="chevron-forward-outline"></ion-icon
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Projects",
});
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
section {
  text-align: center;
  display: grid;
  place-items: center;
}
.section-title {
  font-size: 2.1rem;
  margin: 40px 0 15px 0;
}
.projects {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  width: 100%;
}
.image {
  position: relative;
  width: min(90%, 85%);
  margin: 10px 0px;
  border-radius: 0.5rem;
}
.image-img {
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  display: block;
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: 0.5rem;
}
.image-overlay {
  padding: 10px;
  border-radius: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
  font-size: calc(14px + 0.33vw);
}
.image-overlay > * {
  transform: translateY(20px);
  transition: transform 0.25s;
}
.image-overlay:hover {
  opacity: 1;
}
.image-overlay:hover > * {
  transform: translateY(0);
}
.image-title {
  font-size: 1.8em;
  font-weight: 500;
}
.image-description {
  font-size: 1.05em;
  font-weight: 300;
  margin-top: 0.25em;
  color: #c9d1d9;
  a {
    color: $yellow;
    text-decoration: underline;
  }
}
.image-button {
  background: $yellow;
  color: #333 !important;
  padding: 8px 10px;
  border-radius: 0.75rem;
  cursor: pointer;
  margin-top: 0.25em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ion-icon {
    margin-left: 3px;
  }
}
@media screen and (max-width: 920px) {
  .projects {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 630px) {
  .projects {
    grid-template-columns: 1fr;
  }
}
</style>
