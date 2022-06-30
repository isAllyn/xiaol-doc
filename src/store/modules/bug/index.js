/*
 * @Author: BORING GHOST
 * @Date: 2022-06-29 15:26:19
 * @LastEditTime: 2022-06-30 17:03:44
 * @Description: bug vuex
 */
import { message } from "ant-design-vue";
export default {
    namespaced: true,
    state: {
        cureent_bug: [],
        finish_bug: []
    },
    mutations: {
        /**
         * 添加一个bug
         */
        addBug(state, new_bug) {
            const index = state.cureent_bug.findIndex(v => v.id === new_bug.id);
            if (index !== -1) return message.success("已有此id");
            state.cureent_bug.push(JSON.parse(JSON.stringify(new_bug)));
            message.success("添加成功");
        },
        /**
         * 完成了一个bug
         */
        finishBug(state, new_bug) {
            try {
                const index = state.cureent_bug.findIndex(v => v.id === new_bug.id);
                if (index === -1) return message.warning("没有此bug的id");
                state.cureent_bug.splice(index, 1);
                state.finish_bug.push(new_bug);
                message.success("操作成功");
            } catch (error) {
                console.log(error);
            }
        }
    },
    actions: {
        /**
         * 创建pdf内容
         */
        createContent(ctx) {
            try {
                let content = [];
                const bugs = [
                    ...JSON.parse(JSON.stringify(ctx.state.cureent_bug)),
                    ...JSON.parse(JSON.stringify(ctx.state.finish_bug))
                ];
                content.push({ toc: { title: { text: "目录" } } });
                for (const iterator of bugs) {
                    content.push({
                        text: iterator.title,
                        tocItem: true,
                        tocStyle: { blold: true },
                        pageBreak: "before"
                    });
                    content.push({ text: iterator.time });
                    if (iterator.set) {
                        content.push({ text: iterator.bug });
                        content.push({ text: "以修改,修改方式:" });
                        content.push({ text: iterator.set, bold: true, fontSize: 20 });
                    } else {
                        content.push({ text: iterator.bug, color: "#e4484c" });
                        content.push({ text: "尚未修改", color: "#e4484c", bold: true, fontSize: 25 });
                    }
                    if (iterator.imgs.length > 0) {
                        content.push({ text: "相关图片:", bold: true, fontSize: 25 });
                        for (const item of iterator.imgs) {
                            content.push({ image: item });
                        }
                    } else {
                        content.push({ text: "未上传相关图片资料:", bold: true, fontSize: 25 });
                    }
                }
                return content;
            } catch (error) {
                console.log(error);
                return [];
            }
        }
    }
};
