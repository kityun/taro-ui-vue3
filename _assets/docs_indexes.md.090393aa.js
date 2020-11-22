import{f as n,g as a,B as s}from"./common-03e26d29.js";const t='{"title":"Indexes 索引选择器","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"一般用法","slug":"一般用法"},{"level":2,"title":"跳转到指定key","slug":"跳转到指定key"},{"level":2,"title":"参数","slug":"参数"},{"level":2,"title":"事件","slug":"事件"}],"relativePath":"docs/indexes.md","lastUpdated":1605947375032.3574}';var p={};const o=s('<h1 id="indexes-索引选择器"><a class="header-anchor" href="#indexes-索引选择器" aria-hidden="true">#</a> Indexes 索引选择器</h1><hr><p>索引列表组件，可以通过点击索引导航，快速定位到列表处</p><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>在 Taro 文件中引入组件</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtIndexes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/indexes.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="一般用法"><a class="header-anchor" href="#一般用法" aria-hidden="true">#</a> 一般用法</h2><p>说明:</p><ul><li>AtIndexes 需要父节点设置高度，如果想整个高度屏幕高度都铺满，设置 <code>height: 100vh</code>。</li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">=&quot;</span><span class="token attr-value"><span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- 基础用法 --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">=&quot;</span><span class="token attr-value"><span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtIndexes</span>\n        <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mockData<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">topKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Top<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClick<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">@scroll-into-view</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleScroll<span class="token punctuation">&quot;</span></span>\n      <span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-area<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n          用户自定义内容\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtSearchBar</span>\n            <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>跳转到指定Key<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">@action-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleActionClick<span class="token punctuation">&quot;</span></span>\n          <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtIndexes</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="跳转到指定key"><a class="header-anchor" href="#跳转到指定key" aria-hidden="true">#</a> 跳转到指定key</h2><h5 id="html"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h5><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtIndexes</span>\n      <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@scroll-into-view</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleScroll<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>custom-area<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n        用户自定义内容\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtSearchBar</span>  \n          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>跳转到指定Key<span class="token punctuation">&#39;</span></span> \n          <span class="token attr-name">@action-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleActionClick<span class="token punctuation">&quot;</span></span> \n        <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtIndexes</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> mockData <span class="token keyword">from</span> <span class="token string">&#39;./mock-data&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;AtIndexesDemo&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      value<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n      list<span class="token operator">:</span> mockData<span class="token punctuation">,</span>\n      scrollToView<span class="token operator">:</span> <span class="token keyword">null</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">handleActionClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>scrollToView <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">scrollToView</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleScroll</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>scrollToView <span class="token operator">=</span> fn\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>animation</td><td>是否开启跳转过渡动画</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>isVibrate</td><td>是否切换 key 的震动，只在微信小程序有效</td><td>Boolean</td><td>-</td><td>true</td></tr><tr><td>isShowToast</td><td>是否用弹框显示当前 key</td><td>Boolean</td><td>-</td><td>true</td></tr><tr><td>topKey</td><td>右侧导航第一个名称</td><td>String</td><td>-</td><td>Top</td></tr><tr><td>list</td><td><code>[ {&#39;{title:列表标题,key:右侧导航标题,items:[{name: 列表项内容}]}&#39;}]</code></td><td>Array</td><td>-</td><td>-</td></tr></tbody></table><h2 id="事件"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>返回参数</th></tr></thead><tbody><tr><td>onClick</td><td>点击列表项触发事件</td><td>(item:Object,event) =&gt; void</td></tr><tr><td>onScrollIntoView</td><td>获取跳转事件跳转到指定key</td><td>(fn:Function) =&gt; void</td></tr></tbody></table>',19);p.render=function(s,t,p,e,c,l){return n(),a("div",null,[o])};export default p;export{t as __pageData};
