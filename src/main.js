import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import store from './store'
import moment from 'moment'
// import axios from 'axios'
// Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.prototype.$moment = moment

// BEUFY
Vue.use(Buefy, {
  defaultIconPack: 'fas',
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
