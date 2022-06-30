<!--
 * @Author: BORING GHOST
 * @Date: 2022-06-30 10:02:54
 * @LastEditTime: 2022-06-30 19:18:33
 * @Description: 当前bug包括完成未完成的
-->
<template>
    <div class="CurrentHistory__">
        <!-- 统计图 -->
        <a-affix :offset-top="64">
            <div style="background: #ececec; padding: 30px">
                <a-row :gutter="16">
                    <a-col :span="12">
                        <a-card>
                            <a-statistic
                                title="Feedback"
                                :value="cpt_bugs.length"
                                :precision="2"
                                suffix="个"
                                :value-style="{ color: '#3f8600' }"
                                style="margin-right: 50px"
                            >
                                <template #prefix>
                                    <a-icon type="arrow-up" />
                                </template>
                            </a-statistic>
                        </a-card>
                    </a-col>
                    <a-col :span="12">
                        <a-card>
                            <a-statistic
                                title="Idle"
                                :value="surplus_bugs.length"
                                :precision="2"
                                suffix="个"
                                class="demo-class"
                                :value-style="{ color: '#cf1322' }"
                            >
                                <template #prefix>
                                    <a-icon type="arrow-down" />
                                </template>
                            </a-statistic>
                        </a-card>
                    </a-col>
                </a-row>
            </div>
        </a-affix>

        <a-divider />
        <!-- 步骤条 -->
        <a-empty v-if="cpt_bugs.length <= 0 && surplus_bugs.length <= 0" :description="false" />
        <a-steps size="small" :current="cpt_bugs.length" direction="vertical">
            <template v-for="item in cpt_bugs">
                <a-step class="success-step" :key="item.id">
                    <template slot="title">
                        <span>{{ item.title }}</span>
                    </template>
                    <template slot="description">
                        <span>{{ item.bug || "This is a description. This is a description.'" }}</span>
                    </template>
                </a-step>
            </template>
            <template v-for="item in surplus_bugs">
                <a-step @click="gotoCurrentBug" class="error-step" :key="item.id" status="error">
                    <template slot="title">
                        <span>{{ item.title || "Waiting" }}</span>
                    </template>
                    <template slot="description">
                        <span>{{ item.bug || "This is a description." }}</span>
                    </template>
                </a-step>
            </template>
        </a-steps>
        <!-- 导出按钮 -->
        <a-affix style="text-align: right" :offset-bottom="20">
            <a-popconfirm
                :title="surplus_bugs.length > 0 ? '还有未完成的bug,是否继续导出' : 'Are you sure delete this task?'"
                ok-text="Yes"
                cancel-text="No"
                @confirm="exportPdf"
                @cancel="cancel"
            >
                <a-button type="primary" icon="download"> PDF </a-button>
            </a-popconfirm>
        </a-affix>
    </div>
</template>

<script>
export default {
    name: "CurrentHistory",

    data() {
        return {};
    },
    computed: {
        /**
         * 完成的bug
         */
        cpt_bugs() {
            return this.$store.state.bug.finish_bug;
        },
        /**
         * 剩下的bug
         */
        surplus_bugs() {
            return this.$store.state.bug.cureent_bug;
        }
    },
    methods: {
        /**
         * 导出成为pdf
         */
        async exportPdf() {
            let docDefinition = {
                content: [],
                defaultStyle: {
                    font: "wryh"
                }
            };
            docDefinition.content = await this.$store.dispatch("bug/createContent");
            console.log(docDefinition.content);
            this.$pdfmake.createPdf(docDefinition).download("bugs.pdf");
        },
        /**
         * 关闭气泡
         */
        cancel(e) {
            console.log(e);
            this.$message.error("Click on No");
        },
        /**
         * 跳转至工厂部
         */
        gotoCurrentBug() {
            this.$router.push("/currentbug");
        }
    }
};
</script>

<style lang="scss" scoped>
.CurrentHistory__ {
    ::v-deep .ant-steps-vertical .ant-steps-item-content {
        text-align: start;
    }
    ::v-deep .ant-steps-vertical .success-step {
        cursor: default;
    }
    ::v-deep .ant-steps-vertical .error-step {
        cursor: pointer;
    }
}
</style>
