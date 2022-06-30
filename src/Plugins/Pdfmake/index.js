/*
 * @Author: BORING GHOST
 * @Date: 2022-06-29 09:19:20
 * @LastEditTime: 2022-06-30 16:36:35
 * @Description:
 */
import vfs from "./vfs_fonts";
const pdfmake = require("pdfmake/build/pdfmake");

pdfmake.vfs = vfs;
pdfmake.fonts = {
    wryh: {
        normal: "微软雅黑.ttf",
        bold: "微软雅黑.ttf",
        italics: "微软雅黑.ttf",
        bolditalics: "微软雅黑.ttf"
    }
};
export default {
    install: function (Vue) {
        Vue.prototype.$pdfmake = pdfmake;
    }
};
