import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headerShown: false,
  },
  mutations: {
    showHeader(context) {
      context.headerShown = true;
    },
    hideHeader(context) {
      context.headerShown = false;
    },
  },
  actions: {
    toggleHeader(context) {
      if(context.state.headerShown) {
        return context.commit("hideHeader");
      }
      return context.commit("showHeader");
    }
  },
  modules: {}
});
