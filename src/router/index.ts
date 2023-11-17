import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import EmployeesPage from "../pages/Employees.vue";

const routes: RouteRecordRaw[] = [
  //Public
  {
    path: "/",
    name: "Home",
    redirect: "/login",
    //component: HomePage,
    meta: {
      guest: true,
    },
  },

  //Auth
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: {
      guest: true,
    },
  },

  //Employees
  {
    path: "/empleados/:page?",
    name: "Employees",
    component: EmployeesPage,
    meta: {
      auth: true,
    },
  },

  //Default
  { path: "/:pathMatch(.*)*", redirect: () => ({ name: "Login" }) },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
