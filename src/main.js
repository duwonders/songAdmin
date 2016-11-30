//引入核心文件
import Vue from 'vue'
// import App from './App'
import VueRouter from 'vue-router'


//引入组件文件
import leftbar from './components/static/leftbar.vue'
import upload from './components/upload/index.vue'
import manage from './components/manage/index.vue'
import rule from './components/rule/index.vue'
import data from './components/data/index.vue'
import notice from './components/notice/index.vue'
import indexf from './App.vue'
import login from './components/login/index.vue'


Vue.use(VueRouter);
//开启debug模式
Vue.config.debug = true;
var App = Vue.extend({});
// 创建一个路由器实例
var router = new VueRouter();
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({//定义路由映射
    '/index': {//访问地址
        name:'index',//定义路由的名字。方便使用。
        component:indexf,//引用的组件名称，对应上面使用`import`导入的组件
        //component:require("components/app.vue")//还可以直接使用这样的方式也是没问题的。不过会没有import集中引入那么直观
        subRoutes: {
            '/': {
                component: login
            },
            '/manage': {
                component: manage
            },
            '/upload': {
                component: upload
            },
            '/rule' : {
                component: rule
            },
            '/data' : {
                component: data
            },
            '/notice' : {
                component: notice
            }
        }
    },
});
router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
    '*':"/index"//重定向任意未匹配路径到/index
});
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');
// new Vue({
//   el: 'body',
//   components: { App }
// })