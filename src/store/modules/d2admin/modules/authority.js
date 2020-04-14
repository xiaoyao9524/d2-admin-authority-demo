export default {
  namespaced: true,
  state: {
    allRouters: []
  },
  actions: {
    setAllRouters ({commit}, {routers}) {
      console.log('初步处理AllRouters: ', routers);
      const allRouters = routers.map(item => item.path);
      console.log('allRouters: ', allRouters);
      commit('setRouters', allRouters);
    }
  },
  mutations: {
    setRouters (state, allRouters) {
      localStorage.setItem('allRouters', btoa(encodeURIComponent(JSON.stringify(allRouters))));
      state.allRouters = allRouters;
    }
  },
  getters: {
    allRouters: state => state.allRouters
  }
}
