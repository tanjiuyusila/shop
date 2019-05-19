import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/reset.css';
import '@/assets/js/rem.js';
import { Button,NavBar,Icon,Tabbar,TabbarItem, Swipe, SwipeItem,Lazyload } from 'vant';

Vue.use(Button).use(NavBar ).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
