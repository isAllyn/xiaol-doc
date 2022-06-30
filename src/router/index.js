/*
 * @Author: BORING GHOST
 * @Date: 2022-06-28 11:13:23
 * @LastEditTime: 2022-06-28 20:54:01
 * @Description:
 */
import Router from "vue-router";
import Vue from "vue";
import Layout from "@/Layout/index.vue";
import { children } from "./modules.js";

Vue.use(Router);

const originalPush = Router.prototype.push;

// Fix :防止跳转到同一个路由时报错
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

const routes = [
    {
        path: "/",
        component: Layout,
        redirect: "/overall",
        children
    },
    {
        path: "*",
        redirect: "/"
    }
];

const createRouter = () =>
    new Router({
        scrollBehavior: () => ({ y: 0 }), // 浏览器前进后退滚动条位置
        routes
    });

const router = createRouter();

export const resetRouter = function () {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
};

export default router;
