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
    path: "/calculator",
    name: "calculator",
    component: getView("Calculator"),
  },
  {
    path: "/crypto",
    name: "crypto",
    component: getView("Crypto"),
  },
  {
    path: "/CharacterCard",
    name: "CharacterCard",
    component: getView("CharacterCard"),
  },
  {
    path: "/MyTodo",
    name: "MyTodo",
    component: getView("MyTodo"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});



export default router;
