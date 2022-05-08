//程序的主入口文件,ts文件
//引入createApp函数，创建对应的应用，产生应用的实例对象
import { createApp } from 'vue'
//引入App组件（所有组件的父级组件）
import App from './App.vue'
//引入其他组件
import router from '@/router/index'
import store from '@/store/index'
//创建App应用返回对应的实例对象，调用mount方法进行挂载
createApp(App).use(router).use(store).mount('#app')
