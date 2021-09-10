<template>
  <section>
    <h2>My recent work</h2>
    <div class="projects-container">
      <div class="project-container">
        <h3>
          <img
            src="https://github.com/No-Horny/NoHorny/blob/main/public/favicon.png?raw=true"
            alt="NoHorny Logo"
          />
          NoHorny
        </h3>
        <div>
          <p>
            No Horny is a open source project to help you on NoFap, and on self
            improvement.
          </p>
          <a
            href="https://www.nohorny.ga/"
            target="_blank"
            rel="noopener noreferrer"
            >Access Project Preview</a
          >
          <a
            href="https://github.com/No-Horny/NoHorny"
            target="_blank"
            rel="noopener noreferrer"
            >Access Source Code</a
          >
        </div>
      </div>
      <div class="project-container">
        <h3>
          <img
            src="https://github.com/PatoGordo/RocketLaunches/blob/main/public/images/android-launchericon-512-512.png?raw=true"
            alt="RocketLaunches Logo"
          />
          RocketLaunches
        </h3>
        <div>
          <p>
            Rocket launches, a simple site to let you know what is the next
            rocket launch.
          </p>
          <a
            href="https://rocketlaunches.ga/"
            target="_blank"
            rel="noopener noreferrer"
            >Access Project Preview</a
          >
          <a
            href="https://github.com/PatoGordo/RocketLaunches"
            target="_blank"
            rel="noopener noreferrer"
            >Access Source Code</a
          >
        </div>
      </div>
      <div class="project-container">
        <h3>
          <img
            src="https://github.com/PatoGordo/GBreath/blob/main/public/favicon.png?raw=true"
            alt="GBreath Logo"
          />
          GBreath
        </h3>
        <div>
          <p>
            GBreath is a open source project to help you on your breathing
            practice and mindfulness.
          </p>
          <a
            href="https://gbreath.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            >Access Project Preview</a
          >
          <a
            href="https://github.com/PatoGordo/GBreath"
            target="_blank"
            rel="noopener noreferrer"
            >Access Source Code</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
section {
  margin-bottom: 16px;
  h2 {
    margin-bottom: 16px;
  }
  .projects-container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    gap: 16px;
    padding: 0 16px;
    .project-container {
      min-width: 345px;
      max-width: 345px;
      background: #2d333b;
      padding: 16px;
      border-radius: 10px;
      flex: 1;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        a {
          width: 100%;
          padding: 8px;
          background: #444c56;
          color: #fff;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }
      }
      h3 {
        text-align: center;
        margin-bottom: 16px;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        color: #fff;
        img {
          width: 64px;
          height: 64px;
          object-fit: cover;
          border-radius: 50%;
          background: #444c56;
        }
      }
    }
    @media screen and (max-width: 1080px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
}
</style>
