<!--
 * @Author: BORING GHOST
 * @Date: 2022-06-28 16:17:22
 * @LastEditTime: 2022-06-29 17:16:20
 * @Description: 布局区域 主要内容
-->
<template>
    <div class="LayoutContent">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
    </div>
</template>

<script>
export default {
    name: "ContentIndex",

    data() {
        return {};
    },

    mounted() {},

    methods: {}
};
</script>

<style lang="scss" scoped>
.LayoutContent {
    background: #fff;
    padding: 24px;
}
</style>
