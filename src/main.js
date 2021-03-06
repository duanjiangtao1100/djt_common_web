import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang' // internationalization
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' //
import VueParticles from 'vue-particles'// 背景颗粒子插件

/**
 * 如果是前后端分离开发，可以启用mock数据,不想模拟数据的，请一定注释掉下边部分！！

import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'development') {
  mockXHR()
}
 */

Vue.use(VueParticles)
Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  //render函数是渲染一个视图，然后提供给el挂载
  render: h => h(App)
})
