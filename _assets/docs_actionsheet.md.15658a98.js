import{f as n,g as a,B as s}from"./common-03e26d29.js";const t='{"title":"ActionSheet 动作面板","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"一般用法","slug":"一般用法"},{"level":2,"title":"添加标题和底部取消按钮","slug":"添加标题和底部取消按钮"},{"level":2,"title":"添加监听事件","slug":"添加监听事件"},{"level":2,"title":"AtActionSheet 参数","slug":"atactionsheet-参数"},{"level":2,"title":"AtActionSheet 事件","slug":"atactionsheet-事件"},{"level":2,"title":"AtActionSheetItem 事件","slug":"atactionsheetitem-事件"}],"relativePath":"docs/actionsheet.md","lastUpdated":1605947374030.1504}';var p={};const e=s('<h1 id="actionsheet-动作面板"><a class="header-anchor" href="#actionsheet-动作面板" aria-hidden="true">#</a> ActionSheet 动作面板</h1><hr><p>该组件提供了一种多端统一的 <code>动作面板</code> 样式与 <code>IOS</code> 对齐，在页面上的层级为 <code>1010</code></p><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>在 Taro 文件中引入组件</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtActionSheet<span class="token punctuation">,</span> AtActionSheetItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/action-sheet.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="一般用法"><a class="header-anchor" href="#一般用法" aria-hidden="true">#</a> 一般用法</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtActionSheet</span>\n    <span class="token attr-name">:isOpened</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isOpened1<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClose<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtActionSheetItem</span>\n        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickBtn1<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>\n      按钮一\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtActionSheetItem</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtActionSheetItem</span>\n        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickBtn2<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>\n      按钮二\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtActionSheetItem</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtActionSheet</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Taro <span class="token keyword">from</span> <span class="token string">&#39;@tarojs/taro&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;AtActionSheetDemo&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      isOpened1<span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">handleClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>isOpened1 <span class="token operator">=</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">showToast</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      Taro<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        icon<span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>\n        title<span class="token operator">:</span> name\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">clickBtn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token string">&#39;点击了按钮一&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">clickBtn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token string">&#39;点击了按钮二&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="添加标题和底部取消按钮"><a class="header-anchor" href="#添加标题和底部取消按钮" aria-hidden="true">#</a> 添加标题和底部取消按钮</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtActionSheet</span>\n    <span class="token attr-name">cancelText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>取消<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:isOpened</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isOpened2<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>清除位置信息后， 别人将不能查看到你<span class="token punctuation">&#39;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtActionSheetItem</span>\n        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickBtn1<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>\n      按钮一\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtActionSheetItem</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtActionSheetItem</span>\n        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickBtn2<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>\n      按钮二\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtActionSheetItem</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtActionSheet</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="添加监听事件"><a class="header-anchor" href="#添加监听事件" aria-hidden="true">#</a> 添加监听事件</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtActionSheet</span>\n    <span class="token attr-name">cancelText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>取消<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:isOpened</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>state.isOpened3<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCancel<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClose<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>清除位置信息后， 别人将不能查看到你<span class="token punctuation">&#39;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtActionSheetItem</span>\n        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickBtn1<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>\n      按钮一\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtActionSheetItem</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtActionSheetItem</span>\n        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickBtn2<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>\n      按钮二\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtActionSheetItem</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtActionSheetItem</span>\n        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickBtn3<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>danger<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>清除位置信息并退出<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtActionSheetItem</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtActionSheet</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="atactionsheet-参数"><a class="header-anchor" href="#atactionsheet-参数" aria-hidden="true">#</a> AtActionSheet 参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>元素的标题</td><td>String</td><td>-</td><td>-</td></tr><tr><td>isOpened</td><td>是否展示元素</td><td>Boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>cancelText</td><td>取消按钮的内容</td><td>String</td><td>-</td><td>-</td></tr></tbody></table><h2 id="atactionsheet-事件"><a class="header-anchor" href="#atactionsheet-事件" aria-hidden="true">#</a> AtActionSheet 事件</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>返回参数</th></tr></thead><tbody><tr><td>onClose</td><td>元素被关闭触发的事件</td><td>-</td></tr><tr><td>onCancel</td><td>点击了底部取消按钮触发的事件</td><td>-</td></tr></tbody></table><h2 id="atactionsheetitem-事件"><a class="header-anchor" href="#atactionsheetitem-事件" aria-hidden="true">#</a> AtActionSheetItem 事件</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>返回参数</th></tr></thead><tbody><tr><td>onClick</td><td>点击 Item 触发的事件</td><td>-</td></tr></tbody></table>',20);p.render=function(s,t,p,o,c,l){return n(),a("div",null,[e])};export default p;export{t as __pageData};
