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
      component: () => import("../views/CoachingView.vue"),
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
      path: "/admin-page",
      name: "admin-page",
      component: () => import("../views/FormSubmissionsView.vue"),
    },
    {
      path: "/futures-contract-specifications",
      name: "futures-contract-specifications",
      component: () => import("../views/FuturesContractSpecificationsView.vue"),
    },
  ],
});

export default router;
