import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/buy",
    name: "Buy",
    component: () => import("../views/BuyView.vue"),
  },
  {
    path: "/sale",
    name: "sale",
    component: () => import("../views/SaleView.vue"),
  },
  {
    path: "/lease",
    name: "lease",
    component: () => import("../views/LeaseView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
