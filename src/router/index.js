import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AboutPost from "../views/AboutPost.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
    children: [
      {
        path: "AboutPost",
        component: AboutPost,
      },
    ],
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
