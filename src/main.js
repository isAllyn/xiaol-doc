/*
 * @Author: BORING GHOST
 * @Date: 2022-06-28 10:50:27
 * @LastEditTime: 2022-06-30 09:36:44
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import "./styles/index.scss";

import store from "./store/index.js";

import router from "./router/index.js";

import pdfmake from "./Plugins/Pdfmake/index.js";
Vue.use(pdfmake);

import VueDirectiveImagePreviewer from "vue-directive-image-previewer";
import "vue-directive-image-previewer/dist/assets/style.css";
Vue.use(VueDirectiveImagePreviewer, { zIndex: 9999 });

import moment from "@/Plugins/Moment/index.js";
Vue.use(moment);

import AntDesgin from "./Plugins/AntDsign/index.js";
Vue.use(AntDesgin);

Vue.config.productionTip = false; // 关闭生产环境提示

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
