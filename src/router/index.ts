import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import EmployeesPage from "../pages/Employees.vue";
import { useToken } from "../composables/useToken";
import LoginPage from "../pages/LoginPage.vue";

const { getToken } = useToken();
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth) && !getToken()) {
    next({ name: "Login" });
  } else if (to.matched.some((record) => record.meta.guest) && getToken()) {
    next({ name: "Employees" });
  } else {
    next();
  }
});
export default router;
