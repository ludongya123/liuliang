import Vue from 'vue'
import App from './App'

import Toast from "@/components/CumToast/index.vue"
Vue.component("toast",Toast)

import {ShowToast} from '@/common/js/utils.js'
Vue.prototype.toast = ShowToast

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
