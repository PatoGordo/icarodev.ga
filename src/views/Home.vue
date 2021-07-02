<template>
  <div>
    <Skills />
    <Projects />
    <Contacts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Skills from "../components/Skills.vue";
import Projects from "../components/RecentProjects.vue";
import Contacts from "../components/Contacts.vue";

export default defineComponent({
  name: "Home",
  components: {
    Skills,
    Projects,
    Contacts,
  },
});
</script>
