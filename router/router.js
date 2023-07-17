import { createRouter, createWebHashHistory } from 'vue-router';
import IntroPage from '/IntroPage.vue';

// this file initializes the vue router
// it maps the component of the route to the <router-view> in App.vue

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'introPage',
      component: IntroPage,
    },
  ],
});

export default router;
