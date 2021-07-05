<template>
  <section id="skills">
    <h2 class="section-title">My Skills</h2>

    <div class="cards">
      <skills-languages-card />
      <skills-font-end-card />
      <skills-back-end-card />
    </div>
    <!-- <div class="skills" id="skills">
      <div class="skill-card">
        <ion-icon class="card-icon" name="storefront-outline"></ion-icon>
        <h2 class="title yellow">Front end</h2>
        <br />
        <div>
          <p class="yellow">Technologies</p>
          <ul>
            <li>VueJs</li>
            <li>ReactJs</li>
            <li>Less</li>
            <li>Tailwind</li>
            <li>PWA</li>
          </ul>
          <br />
          <p class="yellow">Projects</p>
          <ul>
            <li>
              <a href="https://rocketlaunches.ga/#/" target="_blank"
                >Rocket launches [Vue - Tailwind - PWA]</a
              >
            </li>
            <li>
              <a href="https://psychochat.patogordo.repl.co/#/" target="_blank"
                >PsychoCHAT [Vue - Less - PWA]</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="skill-card">
        <ion-icon class="card-icon" name="cog-outline"></ion-icon>
        <h2 class="title yellow">Back end</h2>
        <br />
        <div>
          <p class="yellow">Technologies</p>
          <ul>
            <li>NodeJs</li>
            <li>Express</li>
            <li>Python</li>
            <li>Flask</li>
          </ul>
          <br />
          <p class="yellow">Projects</p>
          <ul>
            <li>
              <a
                href="https://github.com/PatoGordo/contact-me-flask"
                target="_blank"
                >ContactMe [Python - Flask]</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="skill-card">
        <ion-icon class="card-icon" name="folder-open-outline"></ion-icon>
        <h2 class="title yellow">Database</h2>
        <br />
        <div>
          <p class="yellow">Technologies</p>
          <ul>
            <li>Firebase</li>
            <li>MongoDB</li>
          </ul>
          <br />
          <p class="yellow">Projects</p>
          <ul>
            <li>
              <a href="https://quizck.tk/" target="_blank">Quizck [Firebase]</a>
            </li>
            <li>
              <a href="https://psychochat.patogordo.repl.co/#/" target="_blank"
                >PsychoCHAT [Firebase]</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillsFontEndCard from './SkillsFontEndCard.vue'
import SkillsBackEndCard from './SkillsBackEndCard.vue'
import SkillsLanguagesCard from './SkillsLanguagesCard.vue'

export default defineComponent({
  name: "Skills",
  components: {
    SkillsFontEndCard,
    SkillsBackEndCard,
    SkillsLanguagesCard
  }
});
</script>

<style lang="scss" scoped>
#skills {
  margin-top: 32px;
}
.section-title {
  text-align: center;
  font-size: 2em;
}
.cards {
  display: grid;
  margin: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: start center;
  justify-content: start;
  align-items: stretch;
  gap: 16px;
  @media screen and (max-width: 1040px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 630px) {
    grid-template-columns: 1fr;
  }
}
</style>
