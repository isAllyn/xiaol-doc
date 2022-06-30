/*
 * @Author: BORING GHOST
 * @Date: 2022-06-28 11:23:12
 * @LastEditTime: 2022-06-30 10:47:09
 * @Description:
 */
import {
    Col,
    Select,
    Row,
    Form,
    Alert,
    Collapse,
    Popconfirm,
    Upload,
    Modal,
    Drawer,
    Input,
    Badge,
    Descriptions,
    DatePicker,
    Radio,
    Breadcrumb,
    Menu,
    Layout,
    Button,
    Icon,
    Dropdown,
    TimePicker,
    message,
    List,
    Card,
    Tag,
    Space,
    Empty,
    Steps,
    Divider,
    Statistic,
    Affix
} from "ant-design-vue";

const cms = [
    Affix,
    Statistic,
    Divider,
    Steps.Step,
    Steps,
    Empty,
    Space,
    Tag,
    Card,
    List,
    List.Item,
    Col,
    Select,
    Form.Item,
    Row,
    Form,
    Alert,
    Collapse,
    Collapse.Panel,
    Popconfirm,
    DatePicker,
    TimePicker,
    Input.TextArea,
    Upload,
    Drawer,
    Input,
    Badge,
    Descriptions,
    Descriptions.Item,
    Radio,
    Radio.Group,
    Breadcrumb,
    Breadcrumb.Item,
    Menu,
    Menu.Item,
    Menu.ItemGroup,
    Menu.SubMenu,
    Layout,
    Layout.Footer,
    Layout.Header,
    Layout.Content,
    Button,
    Button.Group,
    Icon,
    Dropdown
];

export default {
    install: function (Vue) {
        for (const iterator of cms) {
            Vue.component(iterator.name, iterator);
        }
        Vue.use(Modal);
        Vue.prototype.$message = message;
        Vue.prototype.$form = Form;
    }
};
