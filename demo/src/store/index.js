import { createStore } from "vuex";
import persistedStateVuex from "../../../dist/app";
persistedStateVuex.config({
  paths: ["exampleData"],
  storageKey: "vuex-storage",
});
export default createStore({
  state: {
    exampleData: {},
    testData: {},
  },
  getters: {},
  mutations: {
    setExampleData(state, payload) {
      state.exampleData = payload;
    },
    setTestData(state, payload) {
      state.testData = payload;
    },
  },
  actions: {},
  modules: {},
  plugins: [persistedStateVuex.init],
});
