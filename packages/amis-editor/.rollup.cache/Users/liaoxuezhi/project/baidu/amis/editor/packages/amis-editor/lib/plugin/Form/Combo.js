import { __assign, __extends } from "tslib";
import { Button } from 'amis';
import { registerEditorPlugin } from 'amis-editor-core';
import { BasePlugin } from 'amis-editor-core';
import { defaultValue, getSchemaTpl, valuePipeOut } from 'amis-editor-core';
import React from 'react';
import { diff } from 'amis-editor-core';
import { JSONPipeOut } from 'amis-editor-core';
import { mockValue } from 'amis-editor-core';
import { setVariable } from 'amis-core';
var ComboControlPlugin = /** @class */ (function (_super) {
    __extends(ComboControlPlugin, _super);
    function ComboControlPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 关联渲染器名字
        _this.rendererName = 'combo';
        _this.$schema = '/schemas/ComboControlSchema.json';
        // 组件名称
        _this.name = '组合输入';
        _this.isBaseComponent = true;
        _this.icon = 'fa fa-group';
        _this.description = '多个表单项的组合，可配置是否增加和删除初始设定的模板';
        _this.docLink = '/amis/zh-CN/components/form/combo';
        _this.tags = ['表单项'];
        _this.scaffold = {
            type: 'combo',
            label: '组合输入',
            name: 'combo',
            multiple: true,
            items: [
                {
                    type: 'input-text',
                    name: 'input-text',
                    placeholder: '文本'
                },
                {
                    type: 'select',
                    name: 'select',
                    placeholder: '选项',
                    options: [
                        {
                            label: 'A',
                            value: 'a'
                        },
                        {
                            label: 'B',
                            value: 'b'
                        }
                    ]
                }
            ]
        };
        _this.previewSchema = {
            type: 'form',
            className: 'text-left',
            mode: 'horizontal',
            wrapWithPanel: false,
            body: [
                __assign(__assign({}, _this.scaffold), { value: [{ text: 'Row 1', select: 'a' }, {}] })
            ]
        };
        // 事件定义
        _this.events = [
            {
                eventName: 'add',
                eventLabel: '添加',
                description: '添加组合项时触发',
                dataSchema: [
                    {
                        type: 'object',
                        properties: {
                            'event.data.value': {
                                type: 'object',
                                title: '当前组合项的值'
                            }
                        }
                    }
                ]
            },
            {
                eventName: 'delete',
                eventLabel: '删除',
                description: '删除组合项',
                dataSchema: [
                    {
                        type: 'object',
                        properties: {
                            'event.data.key': {
                                type: 'string',
                                title: '删除项的索引'
                            },
                            'event.data.value': {
                                type: 'string',
                                title: '现有组合项的值'
                            }
                        }
                    }
                ]
            },
            {
                eventName: 'tabsChange',
                eventLabel: '切换tab',
                description: '当设置 tabsMode 为 true 时，切换选项卡时触发',
                dataSchema: [
                    {
                        type: 'object',
                        properties: {
                            'event.data.key': {
                                type: 'string',
                                title: '选项卡索引'
                            }
                        }
                    }
                ]
            }
        ];
        // 动作定义
        _this.actions = [
            {
                actionType: 'clear',
                actionLabel: '清空',
                description: '清除选中值'
            },
            {
                actionType: 'reset',
                actionLabel: '重置',
                description: '将值重置为resetValue，若没有配置resetValue，则清空'
            },
            {
                actionType: 'setValue',
                actionLabel: '赋值',
                description: '触发组件数据更新'
            }
        ];
        _this.panelTitle = '组合输入';
        _this.panelBodyCreator = function (context) {
            return [
                {
                    name: 'conditions',
                    type: 'button-group-select',
                    size: 'sm',
                    mode: 'inline',
                    className: 'block',
                    options: [
                        {
                            label: '固定成员类型',
                            value: '1'
                        },
                        {
                            label: '多分支',
                            value: '2'
                        }
                    ],
                    pipeIn: function (value) { return (value ? '2' : '1'); },
                    pipeOut: function (value) {
                        return value == 2
                            ? [
                                {
                                    label: '类型名称',
                                    test: '',
                                    items: [
                                        {
                                            type: 'input-text',
                                            label: '文本',
                                            name: 'text'
                                        }
                                    ],
                                    scaffold: {}
                                }
                            ]
                            : undefined;
                    }
                },
                {
                    name: 'conditions',
                    visibleOn: 'this.conditions',
                    type: 'combo',
                    label: '分支管理',
                    multiple: true,
                    multiLine: true,
                    minLength: 1,
                    items: [
                        {
                            label: '名称',
                            name: 'label',
                            type: 'input-text',
                            required: true
                        },
                        {
                            label: '命中条件',
                            name: 'test',
                            required: true,
                            type: 'input-text',
                            placeholder: '比如: this.type === "text"',
                            description: '根据成员数据判断是否使用此分支'
                        },
                        {
                            name: 'items',
                            asFormItem: true,
                            children: function (_a) {
                                var value = _a.value, onChange = _a.onChange;
                                return (React.createElement(Button, { size: "sm", level: "danger", className: "m-b", block: true, onClick: function () {
                                        return _this.manager.openSubEditor({
                                            title: '配置子表单项',
                                            value: value,
                                            slot: {
                                                type: 'form',
                                                mode: 'normal',
                                                body: '$$',
                                                wrapWithPanel: false,
                                                className: 'wrapper'
                                            },
                                            onChange: onChange
                                        });
                                    } }, "\u914D\u7F6E\u5B50\u8868\u5355\u96C6\u5408"));
                            }
                        },
                        {
                            type: 'textarea',
                            name: 'scaffold',
                            required: true,
                            label: '新增初始值',
                            pipeOut: valuePipeOut
                        }
                    ],
                    scaffold: {
                        label: '类型名称',
                        test: '',
                        items: [
                            {
                                type: 'input-text',
                                label: '文本',
                                name: 'text'
                            }
                        ],
                        scaffold: {}
                    }
                },
                getSchemaTpl('switch', {
                    name: 'typeSwitchable',
                    visibleOn: 'this.conditions',
                    label: '是否可切换类型',
                    pipeIn: defaultValue(true)
                }),
                {
                    name: 'items',
                    visibleOn: '!this.conditions',
                    asFormItem: true,
                    children: function (_a) {
                        var value = _a.value, onChange = _a.onChange;
                        return (React.createElement(Button, { size: "sm", level: "danger", className: "m-b", block: true, onClick: function () {
                                _this.manager.openSubEditor({
                                    title: '配置子表单集合',
                                    value: value,
                                    slot: {
                                        type: 'form',
                                        mode: 'normal',
                                        body: '$$',
                                        wrapWithPanel: false,
                                        className: 'wrapper'
                                    },
                                    onChange: function (value) { return onChange(value); }
                                });
                            } }, "\u914D\u7F6E\u5B50\u8868\u5355\u96C6\u5408"));
                    }
                },
                getSchemaTpl('switchDefaultValue', {
                    visibleOn: '!this.defaultCheckAll'
                }),
                {
                    type: 'textarea',
                    name: 'value',
                    label: '默认值',
                    pipeOut: valuePipeOut,
                    visibleOn: 'typeof this.value !== "undefined"'
                },
                getSchemaTpl('switch', {
                    label: '多行模式',
                    name: 'multiLine',
                    value: false,
                    description: '即是否要换行'
                }),
                getSchemaTpl('multiple'),
                getSchemaTpl('joinValues'),
                getSchemaTpl('delimiter'),
                getSchemaTpl('switch', {
                    name: 'flat',
                    label: '是否将值打平',
                    visibleOn: 'Array.isArray(data.items) && data.items.length === 1 && data.multiple',
                    description: '默认数组内的数据结构为对象，如果只有一个表单项，可以配置将值打平，那么数组内放置的就是那个表单项的值'
                }),
                getSchemaTpl('switch', {
                    label: '是否可新增',
                    name: 'addable',
                    visibleOn: 'this.multiple',
                    pipeIn: defaultValue(true)
                }),
                {
                    type: 'textarea',
                    name: 'scaffold',
                    label: '新增初始值',
                    visibleOn: 'this.multiple && this.addable !== false',
                    pipeOut: valuePipeOut,
                    pipeIn: defaultValue({})
                },
                {
                    label: '新增按钮文字',
                    name: 'addButtonText',
                    type: 'input-text',
                    visibleOn: 'data.addable',
                    pipeIn: defaultValue('新增')
                },
                getSchemaTpl('switch', {
                    label: '是否可删除',
                    name: 'removable',
                    visibleOn: 'this.multiple',
                    pipeIn: defaultValue(true)
                }),
                getSchemaTpl('api', {
                    name: 'deleteApi',
                    label: '删除前的请求',
                    hiddenOn: '!data.removable'
                }),
                {
                    label: '删除确认提示',
                    name: 'deleteConfirmText',
                    type: 'input-text',
                    visibleOn: 'data.deleteApi',
                    pipeIn: defaultValue('确认要删除')
                },
                getSchemaTpl('switch', {
                    name: 'draggable',
                    label: '是否可拖拽排序',
                    visibleOn: 'this.multiple'
                }),
                {
                    label: '拖拽排序的提示文字',
                    name: 'draggableTip',
                    type: 'input-text',
                    visibleOn: 'data.draggable',
                    pipeIn: defaultValue('可通过拖动每行中的【交换】按钮进行顺序调整')
                },
                getSchemaTpl('switch', {
                    name: 'noBorder',
                    label: '去掉边框',
                    visibleOn: 'this.multiLine'
                }),
                {
                    name: 'minLength',
                    type: 'input-number',
                    label: '限制最小数量'
                },
                {
                    name: 'maxLength',
                    type: 'input-number',
                    label: '限制最大数量'
                },
                {
                    label: '默认消息提示',
                    type: 'combo',
                    name: 'messages',
                    multiLine: true,
                    description: '',
                    items: [
                        {
                            label: '有子表单项限制失败时提示',
                            type: 'input-text',
                            name: 'validateFailed'
                        },
                        {
                            label: '最小长度验证失败时提示',
                            type: 'input-text',
                            name: 'minLengthValidateFailed'
                        },
                        {
                            label: '最大长度验证失败时提示',
                            type: 'input-text',
                            name: 'maxLengthValidateFailed'
                        }
                    ]
                },
                getSchemaTpl('switch', {
                    name: 'canAccessSuperData',
                    label: '是否自动填充父级同名变量',
                    pipeIn: defaultValue(false)
                }),
                getSchemaTpl('switch', {
                    name: 'tabsMode',
                    label: '采用 Tabs 展示方式',
                    pipeIn: defaultValue(false)
                }),
                {
                    name: 'tabsStyle',
                    label: 'Tabs 的展示模式',
                    visibleOn: 'data.tabsMode',
                    type: 'list-select',
                    options: [
                        {
                            label: '正常',
                            value: 'normal'
                        },
                        {
                            label: '水平',
                            value: 'horizontal'
                        },
                        {
                            label: '内联',
                            value: 'inline'
                        }
                    ],
                    mode: 'inline',
                    className: 'w-full'
                },
                {
                    name: 'tabsLabelTpl',
                    label: '选项卡标题的生成模板',
                    visibleOn: 'data.tabsMode',
                    type: 'input-text',
                    mode: 'inline',
                    className: 'w-full'
                },
                getSchemaTpl('switch', {
                    name: 'lazyLoad',
                    label: '懒加载',
                    pipeIn: defaultValue(false),
                    description: '如果数据比较多，比较卡顿时，可开启此配置项'
                }),
                getSchemaTpl('switch', {
                    name: 'strictMode',
                    label: '严格模式',
                    pipeIn: defaultValue(true),
                    description: '如果你希望环境变量的值实时透传到 Combo 中，请关闭此选项。'
                }),
                {
                    name: 'syncFields',
                    visibleOn: '!data.strictMode',
                    label: '配置同步字段',
                    type: 'input-text',
                    multiple: true,
                    joinValues: false,
                    extractValue: true,
                    description: '如果 Combo 层级比较深，底层的获取外层的数据可能不同步。但是给 combo 配置这个属性就能同步下来。'
                },
                getSchemaTpl('switch', {
                    name: 'nullable',
                    label: '允许为空',
                    pipeIn: defaultValue(false),
                    description: '如果子表单项里面配置验证器，且又是单条模式。可以允许用户选择清空（不填）。'
                }),
                {
                    name: 'items',
                    label: '各列 CSS 配置',
                    hiddenOn: 'this.multiLine',
                    type: 'combo',
                    addable: false,
                    removable: false,
                    multiple: true,
                    items: [
                        {
                            name: 'columnClassName',
                            placeholder: 'CSS 类名',
                            type: 'input-text'
                        }
                    ]
                },
                getSchemaTpl('subFormItemMode', {
                    visibleOn: 'this.multiLine'
                }),
                getSchemaTpl('subFormHorizontalMode'),
                getSchemaTpl('subFormHorizontal')
            ];
        };
        return _this;
    }
    ComboControlPlugin.prototype.filterProps = function (props) {
        props = JSONPipeOut(props);
        // 至少显示一个成员，否则啥都不显示。
        if (props.multiple && !props.value && !props.$ref) {
            var mockedData_1 = {};
            if (Array.isArray(props.items)) {
                props.items.forEach(function (control) {
                    control.name &&
                        setVariable(mockedData_1, control.name, mockValue(control));
                });
            }
            props.value = [mockedData_1];
        }
        return props;
    };
    ComboControlPlugin.prototype.buildEditorToolbar = function (_a, toolbars) {
        var id = _a.id, info = _a.info, schema = _a.schema;
        if (info.renderer.name === 'combo' && !Array.isArray(schema.conditions)) {
            toolbars.push({
                icon: 'fa fa-expand',
                order: 100,
                tooltip: '配置子表单项',
                onClick: this.editDetail.bind(this, id)
            });
        }
    };
    ComboControlPlugin.prototype.buildEditorContextMenu = function (_a, menus) {
        var id = _a.id, schema = _a.schema, region = _a.region, info = _a.info;
        if (info.renderer.name === 'combo' && !Array.isArray(schema.conditions)) {
            menus.push('|', {
                label: '配置成员渲染器',
                onSelect: this.editDetail.bind(this, id)
            });
        }
    };
    ComboControlPlugin.prototype.editDetail = function (id) {
        var manager = this.manager;
        var store = manager.store;
        var node = store.getNodeById(id);
        var value = store.getValueOf(id);
        node &&
            value &&
            this.manager.openSubEditor({
                title: '配置子表单项',
                value: value.items,
                slot: {
                    type: 'form',
                    mode: 'normal',
                    body: '$$',
                    wrapWithPanel: false,
                    className: 'wrapper'
                },
                onChange: function (newValue) {
                    newValue = __assign(__assign({}, value), { items: newValue });
                    manager.panelChangeValue(newValue, diff(value, newValue));
                }
            });
    };
    return ComboControlPlugin;
}(BasePlugin));
export { ComboControlPlugin };
registerEditorPlugin(ComboControlPlugin);
