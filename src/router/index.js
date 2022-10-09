import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

import GStore from "@/store";
import EventList from "../views/EventList.vue";
import EventLayout from "../views/event/EventLayout.vue";
import EventDetails from "@/views/event/EventDetails.vue";
import EventRegister from "@/views/event/EventRegister.vue";
import EventEdit from "@/views/event/EventEdit.vue";
import EventService from "@/services/EventService";
import NetworkError from "@/views/NetworkError.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "EventList",
      component: EventList,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: "/event/:id",
      name: "EventLayout",
      component: EventLayout,
      beforeEnter: (to) => {
        return EventService.getEvent(to.params.id)
          .then((response) => {
            GStore.event = response.data;
          })
          .catch((error) => {
            if (error.response && error.response.status == 404) {
              return {
                name: "404Resource",
                params: { resource: "event" },
              };
            } else {
              return { name: "NetworkError" };
            }
          });
      },
      children: [
        {
          path: "",
          name: "EventDetails",
          component: EventDetails,
        },
        {
          path: "register",
          name: "EventRegister",
          component: EventRegister,
        },
        {
          path: "edit",
          name: "EventEdit",
          component: EventEdit,
        },
      ],
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/404/:resource",
      name: "404Resource",
      component: NotFound,
      props: true,
    },
    {
      path: "/network-error",
      name: "NetworkError",
      component: NetworkError,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
