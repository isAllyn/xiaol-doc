/*
 * @Author: BORING GHOST
 * @Date: 2022-06-29 19:27:23
 * @LastEditTime: 2022-06-29 19:41:58
 * @Description:routes
 */

import { children } from "@/router/modules";

export default {
    namespaced: true,
    state: {
        routes: children, //所有路由
        historyRoutes: [],
        cureentRoute: ""
    },
    mutations: {
        addRoute(state, newView) {
            // Fix :子路由上的/都是去掉的
            const index = state.routes.findIndex(v => "/" + v.path === newView);
            const isHas = state.historyRoutes.findIndex(v => "/" + v.path === newView);
            if (index === -1) return;
            state.cureentRoute = state.routes[index];
            if (isHas !== -1) {
                state.historyRoutes.splice(isHas, 1);
            }
            state.historyRoutes.push(state.routes[index]);
        }
    }
};
