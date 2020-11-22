import{f as e,g as a,B as l}from"./common-03e26d29.js";const r='{"title":"更新日志","frontmatter":{},"headers":[{"level":3,"title":"v1.0.0-alpha.15 (2020-11-20)","slug":"v1-0-0-alpha-15-2020-11-20"},{"level":3,"title":"v1.0.0-alpha.14 (2020-11-14)","slug":"v1-0-0-alpha-14-2020-11-14"},{"level":3,"title":"v1.0.0-alpha.13 (2020-10-30)","slug":"v1-0-0-alpha-13-2020-10-30"},{"level":3,"title":"v1.0.0-alpha.12 (2020-10-24)","slug":"v1-0-0-alpha-12-2020-10-24"},{"level":3,"title":"v1.0.0-alpha.11 (2020-10-22)","slug":"v1-0-0-alpha-11-2020-10-22"},{"level":3,"title":"v1.0.0-alpha.10 (2020-10-21)","slug":"v1-0-0-alpha-10-2020-10-21"},{"level":3,"title":"v1.0.0-alpha.9 (2020-10-19)","slug":"v1-0-0-alpha-9-2020-10-19"},{"level":3,"title":"v1.0.0-alpha.8 (2020-10-14)","slug":"v1-0-0-alpha-8-2020-10-14"},{"level":3,"title":"v1.0.0-alpha.7 (2020-10-08)","slug":"v1-0-0-alpha-7-2020-10-08"},{"level":3,"title":"v1.0.0-alpha.6 (2020-09-25)","slug":"v1-0-0-alpha-6-2020-09-25"},{"level":3,"title":"v1.0.0-alpha.5 (2020-09-23)","slug":"v1-0-0-alpha-5-2020-09-23"},{"level":3,"title":"v1.0.0-alpha.4 (2020-09-20)","slug":"v1-0-0-alpha-4-2020-09-20"},{"level":3,"title":"v1.0.0-alpha.3 (2020-09-17)","slug":"v1-0-0-alpha-3-2020-09-17"},{"level":3,"title":"v1.0.0-alpha.2 (2020-09-16)","slug":"v1-0-0-alpha-2-2020-09-16"},{"level":3,"title":"v1.0.0-alpha.1 (2020-09-07)","slug":"v1-0-0-alpha-1-2020-09-07"}],"relativePath":"docs/changelog.md","lastUpdated":1606024231146.5613}';var o={};const t=l('<h1 id="更新日志"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h1><hr><p>项目遵循 <a href="http://semver.org/lang/zh-CN/" target="_blank" rel="noopener noreferrer">Semantic Versioning 2.0.0</a> 语义化版本规范</p><h3 id="v1-0-0-alpha-15-2020-11-20"><a class="header-anchor" href="#v1-0-0-alpha-15-2020-11-20" aria-hidden="true">#</a> v1.0.0-alpha.15 (2020-11-20)</h3><ul><li>修复 <code>AtFlex</code> 样式失效问题 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/7" target="_blank" rel="noopener noreferrer">#7</a>) (c40d5a8, a4f2185)</li><li>修复 <code>AtButton</code> <code>onGetAuthorize</code> 笔误 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/61" target="_blank" rel="noopener noreferrer">#61</a>) (1dff28f)</li><li>修复 <code>AtLoadMore</code> <code>AtButton</code> 点击事件 (45bfaed)</li></ul><h3 id="v1-0-0-alpha-14-2020-11-14"><a class="header-anchor" href="#v1-0-0-alpha-14-2020-11-14" aria-hidden="true">#</a> v1.0.0-alpha.14 (2020-11-14)</h3><ul><li>新增 <code>AtSkeleton</code> 骨架组件 (4caf076)</li><li>移除 <code>AtVirtualScroll</code> viewport 属性，并修复可视区域的计算逻辑 (d76edcd)</li><li>修复 <code>AtInput</code> <code>style</code> 属性冲突以及 <code>maxlength</code> 属性失效 (25fcb4f, 36c9b97)</li></ul><h3 id="v1-0-0-alpha-13-2020-10-30"><a class="header-anchor" href="#v1-0-0-alpha-13-2020-10-30" aria-hidden="true">#</a> v1.0.0-alpha.13 (2020-10-30)</h3><ul><li>修复 <code>AtSwipeAction</code> <code>could not find width of null</code> 的错误 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/51" target="_blank" rel="noopener noreferrer">#51</a>) (3050c68)</li><li>修复 <code>AtCurtain</code> <code>Invalid VNode type: undefined</code> 的错误 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/53" target="_blank" rel="noopener noreferrer">#53</a>) (1510079)</li><li>修复 <code>AtCalendar</code> 页面重新渲染后无法切换月份 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/55" target="_blank" rel="noopener noreferrer">#55</a>) (e4271f2)</li><li>修复 <code>AtButton</code> <code>onGetUserInfo</code> 等事件失效的问题 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/56" target="_blank" rel="noopener noreferrer">#56</a>) (fcefbbf)</li><li>优化组件依赖的样式的引入方式，按需引用时，一个组件只需引入一个样式文件即可，(<a href="https://github.com/b2nil/taro-ui-vue3/issues/54" target="_blank" rel="noopener noreferrer">#54</a>) (d8fdd9f)</li></ul><h3 id="v1-0-0-alpha-12-2020-10-24"><a class="header-anchor" href="#v1-0-0-alpha-12-2020-10-24" aria-hidden="true">#</a> v1.0.0-alpha.12 (2020-10-24)</h3><ul><li>修复 <code>pxTransform</code> 未处理 h5 样式转换的问题 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/47" target="_blank" rel="noopener noreferrer">#47</a>)</li><li>修复 <code>AtDivider</code> <code>height</code>, <code>fontSize</code> 传入 <code>string</code> 时类型校验失败 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/48" target="_blank" rel="noopener noreferrer">#48</a>)</li><li>修复 <code>AtVirtualScroll</code> 初始视图未跳转至 scrollIntoItem 对应的列表行 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/49" target="_blank" rel="noopener noreferrer">#49</a>)</li><li><code>AtVirtualScroll</code> 增加 <code>header</code> 和 <code>footer</code> 插槽</li></ul><h3 id="v1-0-0-alpha-11-2020-10-22"><a class="header-anchor" href="#v1-0-0-alpha-11-2020-10-22" aria-hidden="true">#</a> v1.0.0-alpha.11 (2020-10-22)</h3><ul><li>修复 <code>AtVirtualScroll</code> 滚动时发生抖动 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/44" target="_blank" rel="noopener noreferrer">#44</a>) (4677951)</li><li>新增 <code>AtVirtualScroll</code> <code>viewport</code> 属性 (e09a78c)</li></ul><h3 id="v1-0-0-alpha-10-2020-10-21"><a class="header-anchor" href="#v1-0-0-alpha-10-2020-10-21" aria-hidden="true">#</a> v1.0.0-alpha.10 (2020-10-21)</h3><ul><li>新增 <code>AtVirtualScroll</code> 虚拟列表组件 (2c523d)</li></ul><h3 id="v1-0-0-alpha-9-2020-10-19"><a class="header-anchor" href="#v1-0-0-alpha-9-2020-10-19" aria-hidden="true">#</a> v1.0.0-alpha.9 (2020-10-19)</h3><ul><li>修复 <code>AtListItem</code> <code>className</code> 和 <code>customStyle</code> 未定义的问题</li><li>修复 H5 中 <code>AtIndexes</code> 点击字母索引跳转失效 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/38" target="_blank" rel="noopener noreferrer">#38</a>)</li><li>修复 H5 中 <code>AtSearchBar</code> 点击搜索按钮后，不能彻底清空搜索内容 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/41" target="_blank" rel="noopener noreferrer">#41</a>)</li><li>构建配置：修复 H5 使用 <a href="http://Taro.xxx" target="_blank" rel="noopener noreferrer">Taro.xxx</a> 接口的组件报错：Taro__default.default.xxx is not a function h5 (Thanks to @ljquan ) (<a href="https://github.com/b2nil/taro-ui-vue3/issues/40" target="_blank" rel="noopener noreferrer">#40</a>)</li><li>增强: 小程序以及 H5 <code>AtSearchBar</code> 的 <code>onActionClick</code> 事件默认清空搜索内容</li></ul><h3 id="v1-0-0-alpha-8-2020-10-14"><a class="header-anchor" href="#v1-0-0-alpha-8-2020-10-14" aria-hidden="true">#</a> v1.0.0-alpha.8 (2020-10-14)</h3><ul><li>修复 <code>AtTabs</code> 不能正常显示 Slot 内容 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/35" target="_blank" rel="noopener noreferrer">#35</a>)</li><li>移除 types 与 React 相关的依赖</li></ul><h3 id="v1-0-0-alpha-7-2020-10-08"><a class="header-anchor" href="#v1-0-0-alpha-7-2020-10-08" aria-hidden="true">#</a> v1.0.0-alpha.7 (2020-10-08)</h3><ul><li>修复 <code>AtCurtain</code> <code>closeBtnPosition</code> 默认类型错误</li><li>导出 <code>AtFlex</code> 和 <code>AtFlexItem</code></li><li>更新与 H5 相关的 Readme、Config 等内容</li></ul><h3 id="v1-0-0-alpha-6-2020-09-25"><a class="header-anchor" href="#v1-0-0-alpha-6-2020-09-25" aria-hidden="true">#</a> v1.0.0-alpha.6 (2020-09-25)</h3><ul><li>采用函数式插槽（<code>function slots</code>）， 避免编译至 h5 时出现 <code>non-funtion value encountered with default slot</code> 的警告</li><li>修复 <code>AtCalendar</code> Demo 跳转示例当月不能跳转的问题</li></ul><h3 id="v1-0-0-alpha-5-2020-09-23"><a class="header-anchor" href="#v1-0-0-alpha-5-2020-09-23" aria-hidden="true">#</a> v1.0.0-alpha.5 (2020-09-23)</h3><ul><li>导出 <code>AtFlex</code> 和 <code>AtFlexItem</code></li><li>修复 <code>AtTabs</code> Alipay 小程序 Tab Item 标题换行</li><li>修复 <code>AtInput</code>， <code>AtSearchBar</code> H5 和 Alipay 端不能彻底清除 input 的值 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/30" target="_blank" rel="noopener noreferrer">#30</a>)</li><li>修复 <code>AtAccordion</code> H5 端展开和收起动画异常 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/29" target="_blank" rel="noopener noreferrer">#29</a>)</li></ul><h3 id="v1-0-0-alpha-4-2020-09-20"><a class="header-anchor" href="#v1-0-0-alpha-4-2020-09-20" aria-hidden="true">#</a> v1.0.0-alpha.4 (2020-09-20)</h3><ul><li>修复 <code>AtCalendar</code> 小程序端日期列表显示不全 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/23" target="_blank" rel="noopener noreferrer">#23</a>)</li><li>修复 <code>AtCalendar</code> Alipay 小程序滑动时不能更新月份 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/22" target="_blank" rel="noopener noreferrer">#22</a>)</li><li>修复 <code>AtInput</code> 各小程序端 <code>clear</code> 清除输入内容的逻辑</li><li>修复 <code>AtInput</code> placeholder 显示样式</li><li>修复 <code>AtSearchBar</code> 字节小程序端 input value 清除失效</li><li>修复 <code>AtActionSheetFooter</code> 的 <code>onClick</code> 属性类型</li><li>修复 Demo Pages Alipay 小程序端分包路径错误</li></ul><h3 id="v1-0-0-alpha-3-2020-09-17"><a class="header-anchor" href="#v1-0-0-alpha-3-2020-09-17" aria-hidden="true">#</a> v1.0.0-alpha.3 (2020-09-17)</h3><ul><li>修复 <code>Accordion</code> 展开和收起动画异常 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/12" target="_blank" rel="noopener noreferrer">#12</a>)</li><li>修复 <code>AtIndexes</code> 的 <code>onSrollIntoView</code> 事件不能跳转至目标区域 (<a href="https://github.com/b2nil/taro-ui-vue3/issues/8" target="_blank" rel="noopener noreferrer">#8</a>)</li><li>增加 <code>AtIndexes</code> 索引列表选中样式</li></ul><h3 id="v1-0-0-alpha-2-2020-09-16"><a class="header-anchor" href="#v1-0-0-alpha-2-2020-09-16" aria-hidden="true">#</a> v1.0.0-alpha.2 (2020-09-16)</h3><ul><li>移除 <code>classnames</code> 依赖</li><li>使用 <code>class</code> 和 <code>style</code> 替代 Taro UI 组件的 <code>className</code> 和 <code>customStyle</code> 属性</li></ul><h3 id="v1-0-0-alpha-1-2020-09-07"><a class="header-anchor" href="#v1-0-0-alpha-1-2020-09-07" aria-hidden="true">#</a> v1.0.0-alpha.1 (2020-09-07)</h3><ul><li><strong>Taro UI Vue3</strong> 发布第一个版本，包含 <strong>50+</strong> 组件</li></ul>',33);o.render=function(l,r,o,i,h,d){return e(),a("div",null,[t])};export default o;export{r as __pageData};
