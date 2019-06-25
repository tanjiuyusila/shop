import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
// import Category from './views/Category.vue';
// import Cart from './views/Cart.vue';
// import Profile from './views/Profile.vue';
import Detail from './views/Detail.vue';
import FooterBar from './components/FooterBar.vue';
import Error from './views/Error.vue';
//懒加载
let Home = () => import('./views/Home.vue');
let Category = () => import('./views/Category.vue');
let Cart = () => import('./views/Cart.vue');
let Profile = () => import('./views/Profile.vue');


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
      },
      meta:{ //缓存路由组件
        keepAlive:true,
      }
    },
    {
      path: '/category',
      name: 'category',
      components:{
        default:Category,
        'footer-bar':FooterBar
      },
      meta:{
        keepAlive:true,
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default:Cart,
        'footer-bar':FooterBar
      },
      meta:{
        keepAlive:true,
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components:{
        default:Profile,
        'footer-bar':FooterBar
      },
      meta:{
        keepAlive:false,
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path:'*',
      component:Error
    }
  ]
});
