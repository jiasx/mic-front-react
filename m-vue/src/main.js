/*
 * @Author: jiashuangxi
 * @Date: 2021-12-20 20:45:12
 * @LastEditors: jiashuangxi
 * @LastEditTime: 2021-12-23 16:40:06
 * @Describe: 
 */
import './public-path';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI);

let router = null;
let instance = null;

// 不能直接挂载 需要切换的时候 调用mount方法时候再去挂载
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: h => h(App), // 默认他会拿20000端口的html插入到容器中
  }).$mount(container ? container.querySelector('#app') : '#app');
}
// 乾坤在渲染前 给我提供了一个变量 window.__POWERED_BY_QIANKUN__
if (!window.__POWERED_BY_QIANKUN__) { // 独立运行自己
  render();
}

function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true,
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}

// 需要暴露接入协议
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  storeTest(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
