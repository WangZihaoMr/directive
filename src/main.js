import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// console.log(store.state.list);
// inserted: DOM树绘制后调用

// vue自定义指令
Vue.directive("permission", {
  inserted: function (el, binding, vnode) {
    // 获取后台所返回按钮权限列表
    const list = store.state.list;
    // 获取当前按钮所绑定的权限
    const value = binding.value;
    // 判断按钮所绑定的权限是否在后台所返回的按钮权限列表中
    console.log(value);
    if (!list.includes(value)) {
      // 如果不存在，则移除按钮
      el.style = "display:none";
      setTimeout(() => {
        el.parentNode && el.parentNode.removeChild(el);
      }, 0);
    }
  },
});

// Vue.directive("color", function (el, binding) {
//   console.log("el", el);
//   console.log("binding", binding);
//   el.style.color = binding.value;
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
