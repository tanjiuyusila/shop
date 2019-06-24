import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/reset.css';
import '@/assets/js/rem.js';
import '@/mock/mock.js'
import { SubmitBar,Card,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn,PullRefresh,List,Row,Col,Button,NavBar,Icon,Tabbar,TabbarItem, Swipe, SwipeItem,Lazyload,Tab, Tabs,Field,Cell, CellGroup ,Toast} from 'vant';

Vue.use(SubmitBar).use(Card).use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn).use(PullRefresh).use(List).use(Row).use(Col).use(Button).use(NavBar ).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs).use(Field).use(Cell).use(CellGroup).use(Toast);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
