<template>
  <div>
    <h2>404 - page not found</h2>
    <router-link to="/">Return to home</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Page404",
});
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
