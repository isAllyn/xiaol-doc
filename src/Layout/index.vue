<!--
 * @Author: BORING GHOST
 * @Date: 2022-06-28 11:13:00
 * @LastEditTime: 2022-06-28 20:32:11
 * @Description: 
-->
<template>
    <a-layout style="min-height: 100vh" id="components-layout-demo-fixed">
        <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
            <div class="logo">
                <img src="../assets/profile.png" />
                <div class="nikename"></div>
            </div>
            <Menu></Menu>
        </a-layout-header>
        <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
            <Breadcrumb></Breadcrumb>
            <Content></Content>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
    </a-layout>
</template>
<script>
import Menu from "./Menu/index.vue";
import Breadcrumb from "./Breadcrumb/index.vue";
import Content from "./Content/index.vue";

export default {
    name: "LayoutIndex",
    components: { Menu, Breadcrumb, Content },
    data() {
        return {};
    },

    mounted() {},

    methods: {}
};
</script>
<style>
#components-layout-demo-fixed .logo {
    height: 51px;
    margin: 6px 24px 6px 0;
    float: left;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
#components-layout-demo-fixed .logo img {
    width: 51px;
    height: 51px;
    background: rgba(255, 255, 255, 0.2);
}
#components-layout-demo-fixed .logo .nikename {
    height: 51px;
    line-height: 51px;
    color: white;
}
</style>
