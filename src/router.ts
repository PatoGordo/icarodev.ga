import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Page404 from "./views/404.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Page404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
