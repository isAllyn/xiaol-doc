<!--
 * @Author: BORING GHOST
 * @Date: 2022-06-28 16:13:28
 * @LastEditTime: 2022-06-30 10:28:10
 * @Description: 布局区域 头部菜单
-->
<template>
    <a-menu theme="dark" mode="horizontal" @click="navagoto" v-model="succrent" :style="{ lineHeight: '64px' }">
        <template v-for="item in $store.getters.routes">
            <a-menu-item :key="'/' + item.path"> <a-icon :type="item.meta.icon" /> {{ item.meta.title }} </a-menu-item>
        </template>
        <a-menu-item key="alipay">
            <!-- <a href="javascript:;" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a> -->
        </a-menu-item>
    </a-menu>
</template>

<script>
export default {
    name: "MenuIndex",

    data() {
        return {
            succrent: []
        };
    },

    mounted() {},
    watch: {
        $route: {
            handler() {
                this.succrent = [this.$route.path];
                this.$store.commit("routes/addRoute", this.$route.path);
            },
            immediate: true
        }
    },
    computed: {
        routeViews() {
            return this.$store.getters.routes.map(v => "/" + v.path);
        }
    },
    methods: {
        navagoto({ key }) {
            if (this.routeViews.includes(key)) this.$router.push(key);
        }
    }
};
</script>

<style lang="scss" scoped></style>
