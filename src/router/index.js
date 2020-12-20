import Vue from "vue";
import Router from "vue-router";

import Public from "../views/public/public";

import { PublicRoutes } from "../views/public/router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Public,
      children: PublicRoutes,
      meta: {
        auth: false
      }
    },
  ]
});
