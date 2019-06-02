import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/reset.css';
import '@/assets/js/rem.js';
import '@/mock/mock.js'
import { Button,NavBar,Icon,Tabbar,TabbarItem, Swipe, SwipeItem,Lazyload,Tab, Tabs,Field,Cell, CellGroup ,Toast} from 'vant';

Vue.use(Button).use(NavBar ).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs).use(Field).use(Cell).use(CellGroup).use(Toast);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
