import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import HomePost from "../views/HomePost.vue";

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/:id",
        component: HomePost,
      },
    ],
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
