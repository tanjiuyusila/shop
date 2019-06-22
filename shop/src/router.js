import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Category from './views/Category.vue';
import Cart from './views/Cart.vue';
import Profile from './views/Profile.vue';
import Detail from './views/Detail.vue';
import FooterBar from './components/FooterBar.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home
      components: {
        default:Home,
        'footer-bar':FooterBar  //router-view有一个起名字为footer-bar的
      }
    },
    {
      path: '/category',
      name: 'category',
      components:{
        default:Category,
        'footer-bar':FooterBar
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default:Cart,
        'footer-bar':FooterBar
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components:{
        default:Profile,
        'footer-bar':FooterBar
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
});
