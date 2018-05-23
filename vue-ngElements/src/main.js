import Vue from 'vue';
import App from './App.vue';

// basic vue app
// created with the vue cli
//just need to add our selector to the ignored elements
Vue.config.productionTip = false;
Vue.config.ignoredElements = ['ng-basic'];
new Vue({
  render: h => h(App),
}).$mount('#app');
