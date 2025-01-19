import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about-us",
      name: "about-us",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/strategy",
      name: "strategy",
      component: () => import("../views/StrategyView.vue"),
    },
    {
      path: "/subscription",
      name: "subscription",
      component: () => import("../views/SubscriptionView.vue"),
    },
    {
      path: "/coaching",
      name: "coaching",
      component: () => import("../views/SubscriptionView.vue"),
    },
    {
      path: "/education",
      name: "education",
      component: () => import("../views/EducationView.vue"),
    },
    {
      path: "/tools",
      name: "tools",
      component: () => import("../views/ToolsView.vue"),
    },
    {
      path: "/futures-contract-specifications",
      name: "futures-contract-specifications",
      component: () => import("../views/FuturesContractSpecificationsView.vue"),
    },
  ],
});

export default router;
