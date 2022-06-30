<!--
 * @Author: BORING GHOST
 * @Date: 2022-06-28 16:15:40
 * @LastEditTime: 2022-06-28 21:37:32
 * @Description: 布局页面 路由记录
-->
<template>
    <a-breadcrumb :routes="historyRoutes" :style="{ margin: '16px 0' }">
        <template slot="itemRender" slot-scope="{ route }">
            <router-link :to="route.path">
                {{ (route.meta && route.meta.title) || route.name }}
            </router-link>
        </template>
    </a-breadcrumb>
</template>

<script>
export default {
    name: "BreadcrumbIndex",
    computed: {
        historyRoutes() {
            return this.$store.state.routes.historyRoutes;
        }
    }
};
</script>
