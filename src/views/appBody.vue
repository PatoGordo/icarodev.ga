<template>
  <main>
    <section-skills />
    <section-projects />
    <section-contacts />
  </main>
</template>

<script setup lang="ts">
import sectionSkills from "./sectionSkills.vue";
import sectionProjects from "./sectionProjects.vue";
import sectionContacts from "./sectionContacts.vue";
</script>

<style lang="scss">
main {
  padding: 32px 0;
  h2 {
    text-align: center;
    font-weight: 500;
    color: #fff;
  }
}
</style>
