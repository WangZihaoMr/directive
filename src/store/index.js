import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: ["user:list:delete"],
  },
  getters: {},
  mutations: {
    setList(state) {
      localStorage.setItem("list", JSON.stringify(state.list));
    },
  },
  actions: {},
  modules: {},
});
