<template>
  <nav v-if="$route.name == 'home'">
    <h2 @click="changePage()"><router-link to="/">Icaro</router-link></h2>

    <ul :class="isOpen ? 'on' : 'off'">
      <li @click="isOpen = false" v-scroll-to="{ el: '#skills', offset: -125 }">
        <a>Skills</a>
      </li>
      <li
        @click="isOpen = false"
        v-scroll-to="{ el: '#projects', offset: -125 }"
      >
        <a>Projects</a>
      </li>
      <li
        @click="isOpen = false"
        v-scroll-to="{ el: '#contacts', offset: -85 }"
      >
        <a>Contacts</a>
      </li>
    </ul>

    <a class="menu-btn" @click="isOpen = !isOpen"
      ><ion-icon :name="isOpen ? 'close-outline' : 'menu-outline'"></ion-icon
    ></a>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface DataTypes {
  isOpen: boolean;
}

export default defineComponent({
  name: "AppNavbar",
  data(): DataTypes {
    return {
      isOpen: false,
    };
  },
  methods: {
    changePage() {
      this.isOpen = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
});
</script>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #21262d;
  width: 100%;
  height: 45px;
  z-index: 9;
  a {
    color: #c9d1d9;
    transition: all ease 0.3s;
    &:hover {
      color: var(--yellow);
      transition: all ease 0.3s;
    }
  }
}
h2,
h2 a,
h2 a:hover {
  color: #fff !important;
}
h2 {
  font-size: 1.5rem;
}
ul {
  display: flex;
  flex-direction: row;
  li {
    margin: 6px 8px;
    font-size: 1.2rem;
    cursor: pointer;
  }
}
@media screen and (max-width: 630px) {
  .menu-btn {
    display: grid !important;
  }
  ul {
    top: 45px;
    width: 100%;
    height: 100vh;
    position: absolute;
    background: #1e2228;
    display: none;
    flex-direction: column;
    align-items: center;
  }
  ul {
    li {
      width: 100%;
      text-align: center;
      a {
        width: 100%;
      }
    }
    &.on {
      display: flex !important;
    }
  }
}
.menu-btn {
  place-items: center;
  cursor: pointer;
  font-size: 1.8rem;
  display: none;
  color: #fff;
  &:hover {
    color: #fff !important;
  }
}
</style>
