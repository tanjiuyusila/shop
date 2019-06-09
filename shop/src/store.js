import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      userInfo:{
        userName:'未登录',
      }
  },
  getters:{//相当于计算属性

  },
  mutations: {  //不能做异步操作
      changeLogin(state,status){
        state.userInfo = status;
      }
  },
  actions: {   //可以做异步操作
      loginAction({commit},user){
        commit('changeLogin',user)
      }
  },
});
