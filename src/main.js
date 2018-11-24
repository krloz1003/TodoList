import Vue from 'vue'
import App from './App'


import Vuex from 'vuex'
Vue.use(Vuex)

import todoModule from './modules/Todo'

const store = new Vuex.Store({
  modules: {
    todoModule
  }
})

//Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
