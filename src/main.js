// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/cshcss.css'//全局引用初始化css
import './assets/iconfont/iconfont.css'//全局引用阿里图标库
import animated from 'animate.css'//全局引用animate动画库
import VideoPlayer from 'vue-video-player'//视频插件
import 'video.js/dist/video-js.css'//视频样式

Vue.use(VideoPlayer)//视频
Vue.use(animated)//css动画
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
