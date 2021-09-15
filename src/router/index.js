import { createRouter, createWebHistory } from "vue-router";

const getView = (name) => () =>
  import(`../views/${name}.vue`);

const routes = [
  {
    path: "/",
    name: "Home",
    component: getView("Home"),
  },
  {
    path: "/weather",
    name: "weather",
    component: getView("Weather"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});



export default router;
