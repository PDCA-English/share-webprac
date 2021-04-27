import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "../views/Todo.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "todo",
    component: Todo,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.auth
  ) {
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router;