<template>
  <div class="skill-card">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.skill-card {
  width: 100px;
  height: 100px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #444c56;
  border-radius: 10px;
  > svg {
    width: 32px;
    height: 32px;
  }
}
</style>
