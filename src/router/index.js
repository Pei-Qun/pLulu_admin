import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue'),
    children: [
      {
        path: '/product/add',
        name: 'Add',
        component: () => import('../views/pages/ProductAdd.vue'),
      },
      {
        path: '/product/:id',
        name: 'Detail',
        component: () => import('../views/pages/ProductDetail.vue'),
      },
      {
        path: '/product/edit/:id',
        name: 'Edit',
        component: () => import('../views/pages/ProductEdit.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
