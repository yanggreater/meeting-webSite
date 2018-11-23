// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import qs from 'qs'
import {Button,Dialog,Carousel,CarouselItem, Message,Table,TableColumn,Form,FormItem,Menu,MenuItem,Input} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style.css'
Vue.prototype.$qs = qs;
Vue.config.productionTip = false;
Vue.prototype.$message = Message;
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
