import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router";
import store from "./store";

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render() {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/merchant" : "/",
    mode: "history",
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("vue app bootstraped");
}

export async function mount(props) {
  // console.log("micros:", props.data.micro);
  Array.isArray(props.data.fns) &&
    props.data.fns.map((i) => {
      //绑定本项目方法
      Vue.prototype[`$${i.name}`] = i;
    });
  render();
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}
