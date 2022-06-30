/*
 * @Author: BORING GHOST
 * @Date: 2022-06-28 16:31:11
 * @LastEditTime: 2022-06-29 15:27:18
 * @Description:
 */
import Vue from "vue";
import Vuex from "vuex";
import routes from "./modules/routes/index.js";
import getters from "./getters.js";
import bug from "./modules/bug/index.js";

Vue.use(Vuex);

const store = new Vuex.Store({
    getters,
    modules: {
        routes,
        bug
    }
});

export default store;
