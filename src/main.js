/**
 * 项目的启动入口
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 加载Element组件库
import ElementUI from 'element-ui'
// 加载Element样式
import 'element-ui/lib/theme-chalk/index.css'
// 全局注册element组件库
Vue.use(ElementUI)

// // 加载全局样式文件
// import './styles/index.less'

Vue.config.productionTip = false

// 创建vue根实例
// 把router配置到根实例中
// 通过render方法把App根组件渲染到#app入口节点
new Vue({
  router,
  render: h => h(App)
  // el: '#app' 等价于 $mount('#app')
}).$mount('#app')
