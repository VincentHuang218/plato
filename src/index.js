import Vue from 'vue'
import I18n from 'plato-i18n'
import Validator from 'plato-validator'
import tap from 'directives/tap'
import App from 'app'
import store from 'store'
import router from 'router'

if (module.hot) {
  module.hot.accept()
}

Vue.config.debug = __DEV__

// 国际化，如果未使用，请移除
Vue.use(I18n, {
  // 翻译资源库
  data () {
    return store.getters.i18n
  }
})

// (表单)验证，如果未使用，请移除
Vue.use(Validator)

// tap
Vue.directive('tap', tap)

// /* eslint no-new: 0 */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   // template: '<div><router-view></router-view></div>',
//   render (createElement) {
//     return createElement(App)
//   }
// })

new Vue(Vue.util.extend({ router, store }, App)).$mount('#app')
