<template>
  <section>
    <h2>Know my skills</h2>
    <div class="skills-container">
      <div class="skill-container">
        <h3>Programming Languages</h3>
        <div class="items">
          <skill-card>
            <icon icon="logos:typescript-icon" />
            <p>TypeScript</p>
          </skill-card>
          <skill-card>
            <icon icon="logos:javascript" />
            <p>JavaScript</p>
          </skill-card>
          <skill-card>
            <icon icon="logos:python" />
            <p>Python</p>
          </skill-card>
          <skill-card>
            <icon icon="logos:dart" />
            <p>Dart</p>
          </skill-card>
        </div>
      </div>
      <div class="skill-container">
        <h3>Front End (Web & Mobile)</h3>
        <div class="items">
          <skill-card>
            <icon icon="logos:vue" />
            <p>Vue</p>
          </skill-card>
          <skill-card>
            <icon icon="logos:react" />
            <p>React</p>
          </skill-card>
          <skill-card>
            <icon icon="logos:sass" />
            <p>Sass</p>
          </skill-card>
          <skill-card>
            <icon icon="logos:tailwindcss-icon" />
            <p>Tailwind</p>
          </skill-card>
          <skill-card>
            <icon icon="logos:flutter" />
            <p>Flutter</p>
          </skill-card>
          <skill-card>
            <icon icon="logos:pwa" />
            <p>PWA</p>
          </skill-card>
        </div>
      </div>
      <div class="skill-container">
        <h3>Back End & Database</h3>
        <div class="items">
          <skill-card>
            <icon icon="vscode-icons:file-type-node" />
            <p>Node</p>
          </skill-card>
          <skill-card>
            <icon icon="simple-icons:express" />
            <p>Express</p>
          </skill-card>
          <skill-card>
            <icon icon="file-icons:flask" />
            <p>Flask</p>
          </skill-card>
          <skill-card>
            <icon icon="vscode-icons:file-type-firebase" />
            <p>Firebase</p>
          </skill-card>
          <skill-card>
            <icon icon="vscode-icons:file-type-mongo" />
            <p>MongoDB</p>
          </skill-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import skillCard from "../components/skillCard.vue";
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 32px;
  h2 {
    margin-bottom: 16px;
  }
  .skills-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
    .skill-container {
      min-width: 345px;
      max-width: 345px;
      background: #2d333b;
      padding: 16px;
      border-radius: 10px;
      h3 {
        text-align: center;
        margin-bottom: 16px;
        font-weight: 400;
        color: #fff;
      }
      .items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 8px;
      }
    }
    @media screen and (max-width: 1080px) {
      flex-wrap: wrap;
    }
  }
}
</style>
