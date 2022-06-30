import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AboutList from "../views/AboutList.vue";
import AboutDetails from "../views/AboutDetails.vue";
import Posts from "../views/Posts.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
    children: [
      { path: "", component: AboutList },
      { path: ":id", component: AboutDetails },
    ],
  },
  {
    path: "/Posts",
    component: Posts,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
