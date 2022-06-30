/*
 * @Author: BORING GHOST
 * @Date: 2022-06-29 08:44:47
 * @LastEditTime: 2022-06-30 10:30:28
 * @Description:
 */
export const children = [
    {
        path: "overall",
        name: "overall",
        component: () => import(/* webpackChunkName: "overall" */ "@/view/Overall/index.vue"),
        meta: { title: "首页", keepAlive: true, icon: "slack" }
    },
    {
        path: "details",
        name: "details",
        component: () => import(/* webpackChunkName: "details" */ "@/view/Details/index.vue"),
        meta: { title: "新录入", keepAlive: true, icon: "form" }
    },
    {
        path: "currentbug",
        name: "currentbug",
        component: () => import(/* webpackChunkName: "currentbug" */ "@/view/CurrentBug/index.vue"),
        meta: { title: "工厂部", keepAlive: false, icon: "experiment" }
    },
    {
        path: "currenthistory",
        name: "currenthistory",
        component: () => import(/* webpackChunkName: "currenthistory" */ "@/view/CurrentHistory/index.vue"),
        meta: { title: "归档", keepAlive: false, icon: "select" }
    }
];
