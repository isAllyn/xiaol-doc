/*
 * @Author: BORING GHOST
 * @Date: 2022-06-30 09:34:13
 * @LastEditTime: 2022-06-30 09:35:51
 * @Description:
 */
import moment from "moment";
import "moment/locale/zh-cn.js";
moment.locale("zh-cn");

export default {
    install: function (Vue) {
        Vue.prototype.$moment = moment;
    }
};
