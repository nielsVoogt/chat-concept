import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Fragment from 'vue-fragment'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(Fragment.Plugin)
Vue.use(VueChatScroll)

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
