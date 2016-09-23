var Vue = require('vue');
var VueRouter = require('vue-router');
var vueResource = require('vue-resource');
var App = require('./App');

var routerConfig = require('./router-config');

//通过require加载过来的插件要使用 vue.use注册
Vue.use(VueRouter);
Vue.use(vueResource);

var router = new VueRouter({

});

routerConfig(router);

router.start(App,"#app");

