<!--
 * @Author: BORING GHOST
 * @Date: 2022-06-29 19:47:53
 * @LastEditTime: 2022-06-30 17:02:09
 * @Description: 当前待处理的bug
-->
<template>
    <div class="CurrentBug__">
        <!-- bug区 -->
        <a-empty v-if="current_bugs.length <= 0" :description="false" />
        <a-collapse v-model="activeKey" expand-icon-position="left">
            <template v-for="(item, index) in current_bugs">
                <a-collapse-panel :key="index + ''" :header="item.title || 'This is panel header'">
                    <a-alert message="Error Text" type="error">
                        <template slot="description">
                            <div>{{ item.bug }}</div>
                            <div style="text-align: end; color: red">
                                {{ $moment(item.time).format("YYYY年MM月DD日 HH时mm分ss秒上报") }}
                            </div>
                        </template>
                    </a-alert>
                    <div v-if="item.imgs.length > 0" class="img-container">
                        <template v-for="(img, img_i) in item.imgs">
                            <img v-image-preview :key="img_i" class="img-item" :src="img" />
                        </template>
                    </div>
                    <a-icon slot="extra" @click="showDrawer($event, item)" type="form" />
                </a-collapse-panel>
            </template>
        </a-collapse>
        <!-- 抽屉 -->
        <a-drawer
            title="Create a new account"
            :width="888"
            :visible="visible"
            :body-style="{ paddingBottom: '80px' }"
            @close="onClose"
        >
            <!-- 错误信息 -->
            <a-row>
                <a-alert show-icon type="error">
                    <p style="color: red" slot="message">
                        {{ form.title || "Error Text" }}
                    </p>
                    <div slot="description">
                        <span style="color: red">
                            {{ form.bug || "Error Description Error Description Error Description Error Description" }}
                        </span>
                        <br />
                        <div style="display: flex; justify-content: flex-end">
                            <a-tag color="#f50">
                                {{ form.page }}
                            </a-tag>
                            <a-tag color="#f50">
                                {{ form.id }}
                            </a-tag>
                        </div>
                    </div>
                </a-alert>
            </a-row>
            <!-- 相关图片 -->
            <a-row style="margin-top: 10px">
                <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }" :data-source="form.imgs">
                    <a-list-item slot="renderItem" slot-scope="item">
                        <img v-image-preview style="width: 100%; height: 100%" :src="item" />
                    </a-list-item>
                </a-list>
            </a-row>
            <a-row style="margin-bottom: 10px">
                <a-tag style="font-size: 20px; padding: 5px" color="blue"> 你是如何修改的? </a-tag>
            </a-row>
            <a-row>
                <a-textarea v-model="form.set" placeholder="textarea with clear icon" allow-clear />
            </a-row>
            <div
                :style="{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    borderTop: '1px solid #e9e9e9',
                    padding: '10px 16px',
                    background: '#fff',
                    textAlign: 'right',
                    zIndex: 1
                }"
            >
                <a-button :style="{ marginRight: '8px' }" @click="onClose"> Cancel </a-button>
                <a-popconfirm
                    title="Are you sure delete this task?"
                    ok-text="Yes"
                    cancel-text="No"
                    @confirm="confirm"
                    @cancel="cancel_pop"
                >
                    <a-button type="primary"> Submit </a-button>
                </a-popconfirm>
            </div>
        </a-drawer>
    </div>
</template>

<script>
export default {
    name: "CurrentBug",

    data() {
        return {
            activeKey: ["0"],
            /* 抽屉部分 */
            form: {
                id: "",
                page: "",
                bug: "",
                time: "",
                imgs: new Array(10).fill("https://picsum.photos/200/300"),
                set: ""
            },
            visible: false
        };
    },

    computed: {
        current_bugs() {
            return this.$store.state.bug.cureent_bug;
        }
    },

    methods: {
        /**
         * 确认提交
         */
        confirm() {
            this.$store.commit("bug/finishBug", this.form);
            this.onClose();
        },
        /**
         * 关闭气泡
         */
        cancel_pop(e) {
            console.log(e);
            this.$message.error("Click on No");
        },
        /**
         * 打开弹框
         */
        showDrawer(event, item) {
            Object.assign(this.form, item);
            // If you don't want click extra trigger collapse, you can prevent this:
            event.stopPropagation();
            this.visible = true;
        },
        /**
         * 关闭弹框
         */
        onClose() {
            this.visible = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.CurrentBug__ {
    ::v-deep .img-container {
        margin-top: 10px;
        border: 1px solid #ffa39e;
        display: flex;
        flex-wrap: wrap;

        .img-item {
            width: 300px;
            height: 300px;
            margin: 5px;
        }
    }
}
</style>
