<template>
  <section>
    <h2 class="section-title">My Skills</h2>
    <!-- <div>
      <div>
        <ion-icon name="logo-pwa"></ion-icon>
      </div>
      <div>
        <ion-icon name="logo-react"></ion-icon>
      </div>
      <div>
        <ion-icon name="logo-vue"></ion-icon>
      </div>
      <div>
        <ion-icon name="logo-sass"></ion-icon>
      </div>
    </div>

    <div>
      <div>
        <ion-icon name="logo-nodejs"></ion-icon>
      </div>
      <div>
        <ion-icon name="logo-python"></ion-icon>
      </div>
    </div>

    <div>
      <div>
        <ion-icon name="logo-firebase"></ion-icon>
      </div>
      <div>
        {{ mongoIcon }}
      </div>
    </div> -->
    <div class="skills" id="skills">
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
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Skills",
});
</script>

<style lang="scss" scoped>
.section-title {
  text-align: center;
  font-size: 2.1rem;
  margin: 40px 0 15px 0;
}
.skills {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 25px;
  margin: 10px 15px;
  text-align: center;
  border: 1px solid #444c56;
  border-radius: 0.6rem;
}
.card-icon {
  font-size: 2.4rem;
  margin: 8px 0 18px 0;
}
.title.yellow {
  text-decoration: underline;
  font-weight: 500;
}
ul li a {
  color: #fff;
  text-decoration: underline;
  a:hover {
    color: #c9d1d9;
  }
}

@media screen and (max-width: 900px) {
  .skills {
    grid-template-columns: 1fr 1fr !important;
  }
}
@media screen and (max-width: 630px) {
  .skills {
    grid-template-columns: 1fr !important;
  }
  .skill-card .short-description {
    max-width: 60%;
  }
}
@media screen and (max-width: 420px) {
  .skill-card .short-description {
    max-width: 95%;
  }
}
</style>
