import Vue from 'vue'
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
})

const getDefaultState = () => {
  return {
    userInfo:{}
  }
}

const state = getDefaultState();

// 创建一个新的 store 实例
const store = new Vuex.Store({
  state,
  mutations: {
    setUserInfo(state, paylosd) {
      state.userInfo = paylosd;
    },
    clearUserInfo(state) {
      state.userInfo = null;
    },
  },
  actions: {
  
  },
  plugins: [vuexLocal.plugin]
})

export default store
