export default function ({ store }) {
    store.commit('SET_TITLE', '')
    store.commit('SET_RESULTS', null)
    store.commit('SET_NAVHEIGHT', 0)
    store.commit("SET_CRUMB", '')
    store.commit("SET_POSTCAT", '');
    if (store.state.menuIsActive === !false) {
      console.log('menu')
     

      store.commit('setMenuState', false)
    }

  }