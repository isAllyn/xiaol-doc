<!--
 * @Author: BORING GHOST
 * @Date: 2022-06-28 20:34:14
 * @LastEditTime: 2022-06-30 11:20:39
 * @Description: 新录入
-->
<template>
    <div>
        <!-- 按钮区 -->
        <a-button-group style="margin-bottom: 30px">
            <a-button type="primary"> <a-icon type="left" />Backward </a-button>
            <a-button type="primary"> Forward<a-icon type="right" /> </a-button>
        </a-button-group>
        <!-- 提交按钮 -->
        <a-popconfirm
            title="Are you sure submit this task?"
            ok-text="Yes"
            cancel-text="No"
            @confirm="confirm"
            @cancel="cancel"
        >
            <a-button style="margin-left: 130px" type="primary" icon="check" />
        </a-popconfirm>
        <!-- bug填写表单 -->
        <a-descriptions title="BUG" bordered>
            <a-descriptions-item>
                <template #label>
                    <a-icon theme="twoTone" type="rocket" /><span style="padding-left: 10px">标题简述</span>
                </template>
                <a-input v-model="form.title" placeholder="Basic usage" />
            </a-descriptions-item>
            <a-descriptions-item>
                <template #label>
                    <a-icon theme="twoTone" type="meh" /><span style="padding-left: 10px">相关页面</span>
                </template>
                <a-textarea
                    v-model="form.page"
                    placeholder="Autosize height with minimum and maximum number of lines"
                    :auto-size="{ minRows: 2, maxRows: 6 }"
                />
            </a-descriptions-item>
            <a-descriptions-item>
                <template #label>
                    <a-icon theme="twoTone" type="bug" /> <span style="padding-left: 10px">详细阐述</span>
                </template>
                <a-textarea
                    v-model="form.bug"
                    placeholder="Autosize height with minimum and maximum number of lines"
                    :auto-size="{ minRows: 2, maxRows: 6 }"
                />
            </a-descriptions-item>
            <a-descriptions-item>
                <template #label>
                    <a-icon theme="twoTone" type="hourglass" /><span style="padding-left: 10px">时间</span>
                </template>
                <a-date-picker
                    :disabled="true"
                    v-model="pick_time"
                    show-time
                    placeholder="Select Time"
                    format="YYYY-MM-DD HH:mm:ss"
                    :defaultValue="$moment(new Date(), 'YYYY-MM-DD HH:mm:ss')"
                />
            </a-descriptions-item>
            <!-- 图片预览区域 -->
            <a-descriptions-item>
                <template #label>
                    <a-icon theme="twoTone" type="file-image" /><span style="padding-left: 10px">相关图片</span>
                </template>
                <!-- beforeUpload返回false,则会阻止上传 -->
                <a-upload
                    list-type="picture-card"
                    :file-list="fileList"
                    :beforeUpload="() => false"
                    @preview="handlePreview"
                    @change="handleChange"
                >
                    <div v-if="fileList.length < 8">
                        <a-icon type="plus" />
                        <div class="ant-upload-text">Upload</div>
                    </div>
                </a-upload>
                <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                    <img alt="example" v-image-preview style="width: 100%" :src="previewImage" />
                </a-modal>
            </a-descriptions-item>
        </a-descriptions>
    </div>
</template>

<script>
import { getBase64 } from "@/utils/auth.js";
export default {
    name: "DetailsIndex",
    data() {
        return {
            size: "default",
            previewVisible: false,
            previewImage: "",
            fileList: [],
            pick_time: null,
            form: {
                title: "",
                page: "",
                bug: "",
                time: null,
                imgs: []
            }
        };
    },

    methods: {
        /**
         * 提交确认
         */
        confirm() {
            try {
                this.pick_time = this.$moment(new Date(), "YYYY-MM-DD HH:mm:ss");
                this.form.time = this.$moment().format("YYYY-MM-DD HH:mm:ss");
                this.form.imgs = this.fileList.map(v => v.thumbUrl);
                // TODO :添加一个id
                this.form.id = this.$moment().format("YYYYMMDDHHmmss");
                this.$store.commit("bug/addBug", this.form);
            } catch (e) {
                console.log(e);
            }
        },
        /**
         * 提交取消
         */
        cancel() {
            this.$message.error("Click on No");
        },
        /**
         * 关闭图片预览
         */
        handleCancel() {
            this.previewVisible = false;
        },
        /**
         * 单个图片点击预览前
         */
        async handlePreview(file) {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj);
            }
            this.previewImage = file.url || file.preview;
            this.previewVisible = true;
        },
        /**
         * 图片区change
         */
        handleChange({ fileList }) {
            this.fileList = fileList;
        }
    }
};
</script>

<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
}
</style>
