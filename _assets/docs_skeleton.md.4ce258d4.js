import{f as a,g as t,B as n}from"./common-03e26d29.js";const s='{"title":"Skeleton 骨架","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":3,"title":"一般用法","slug":"一般用法"},{"level":3,"title":"异步组件加载","slug":"异步组件加载"},{"level":2,"title":"AtSkeleton 参数","slug":"atskeleton-参数"},{"level":2,"title":"AtSkeleton 插槽","slug":"atskeleton-插槽"}],"relativePath":"docs/skeleton.md","lastUpdated":1605969533253.2954}';var e={};const p=n('<h1 id="skeleton-骨架"><a class="header-anchor" href="#skeleton-骨架" aria-hidden="true">#</a> Skeleton 骨架</h1><hr><p>骨架组件。</p><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>在 Taro 文件中引入组件</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtSkeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/skeleton.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="一般用法"><a class="header-anchor" href="#一般用法" aria-hidden="true">#</a> 一般用法</h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>at-skeleton</span><span class="token style-attr language-css"><span class="token attr-name">\n  <span class="token attr-name">style</span></span><span class="token punctuation">=&quot;</span><span class="token attr-value"><span class="token property">margin</span><span class="token punctuation">:</span> 10px</span><span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list-item-avatar, divider, list-item-three-line, card-heading, image, actions<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h3 id="异步组件加载"><a class="header-anchor" href="#异步组件加载" aria-hidden="true">#</a> 异步组件加载</h3><p>可结合 Vue 3.0 的 <code>suspense</code> 特性，实现异步组件的加载，或者直接使用骨架的默认 <code>slot</code> 加载组件。</p><h4 id="结合-suspense-使用"><a class="header-anchor" href="#结合-suspense-使用" aria-hidden="true">#</a> 结合 <code>suspense</code> 使用</h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>suspense</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>at-card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>skeleton demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>async-comp</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>at-card</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#fallback</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>at-skeleton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>avatar, text@3<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>suspense</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h4 id="使用骨架的默认-slot"><a class="header-anchor" href="#使用骨架的默认-slot" aria-hidden="true">#</a> 使用骨架的默认 <code>slot</code></h4><p>当 slot 插槽中存在内容时，组件加载完毕，</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>at-skeleton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isLoading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>at-card</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>asyncTitle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>async-comp</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>at-card</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>at-skeleton</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="atskeleton-参数"><a class="header-anchor" href="#atskeleton-参数" aria-hidden="true">#</a> AtSkeleton 参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>boilerplate</td><td>移除骨架加载动画。</td><td><code>Boolean</code></td><td>-</td><td><code>false</code></td></tr><tr><td>elevation</td><td>设置骨架组件的阴影高度，介于 0 至 24 之间数。</td><td><code>Number | String</code></td><td><code>0~24</code></td><td>-</td></tr><tr><td>loading</td><td>施加加载动画，当 <code>default</code> 插槽中存在内容时，<code>false</code> 值才能生效</td><td><code>Boolean</code></td><td>-</td><td><code>false</code></td></tr><tr><td>tile</td><td>移除骨架组件的 <code>border-radius</code></td><td><code>Boolean</code></td><td>-</td><td><code>false</code></td></tr><tr><td>transition</td><td>设置骨架组件的过渡效果</td><td><code>String</code></td><td>-</td><td>-</td></tr><tr><td>flat</td><td>移除阴影效果</td><td><code>Boolean</code></td><td>-</td><td><code>false</code></td></tr><tr><td>height</td><td>设置骨架组件的高度，作为 css 样式值，单位 px</td><td><code>Number | String</code></td><td>-</td><td>-</td></tr><tr><td>maxHeight</td><td>设置骨架组件的最大高度度</td><td><code>Number | String</code></td><td>-</td><td>-</td></tr><tr><td>maxWidth</td><td>设置骨架组件的最大宽度</td><td><code>Number | String</code></td><td>-</td><td>-</td></tr><tr><td>minWidth</td><td>设置骨架组件的最小宽度</td><td><code>Number | String</code></td><td>-</td><td>-</td></tr><tr><td>width</td><td>设置骨架组件的宽度</td><td><code>Number | String</code></td><td>-</td><td>-</td></tr><tr><td>types</td><td>自定义骨架类型组合，会与预设类型组合合并，示例详见<a href="#%E9%A2%84%E8%AE%BE%E9%AA%A8%E6%9E%B6%E7%B1%BB%E5%9E%8B%E7%BB%84%E5%90%88">预设类型组合</a></td><td><code>Record&lt;string, string&gt;</code></td><td>-</td><td>-</td></tr><tr><td>type</td><td>描述骨架组件构成类型的字符串，多个要素时以逗号分隔。例如：<code>type=&quot;text@3&quot;</code> 或 <code>type=&quot;card, list-item&quot;</code>。组件会根据类型或类型组合描述，以递归方式生成对应的骨架。例如： <code>article@3</code> 会生成 3 个 article 骨架，<code>card, text@3</code> 会生成 1 个 card 骨架和 3 个 text 骨架。</td><td><code>String</code></td><td>-</td><td>-</td></tr></tbody></table><h4 id="预设骨架类型组合"><a class="header-anchor" href="#预设骨架类型组合" aria-hidden="true">#</a> 预设<code>骨架类型组合</code></h4><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  actions<span class="token operator">:</span> button@<span class="token number">2</span><span class="token punctuation">,</span>\n  article<span class="token operator">:</span> heading<span class="token punctuation">,</span> paragraph<span class="token punctuation">,</span>\n  avatar<span class="token operator">:</span> avatar<span class="token punctuation">,</span>\n  button<span class="token operator">:</span> button<span class="token punctuation">,</span>\n  card<span class="token operator">:</span> image<span class="token punctuation">,</span> card-heading<span class="token punctuation">,</span>\n  card-avatar<span class="token operator">:</span> image<span class="token punctuation">,</span> list-item-avatar<span class="token punctuation">,</span>\n  card-heading<span class="token operator">:</span> heading<span class="token punctuation">,</span>\n  chip<span class="token operator">:</span> chip<span class="token punctuation">,</span>\n  date-picker<span class="token operator">:</span> list-item<span class="token punctuation">,</span> card-heading<span class="token punctuation">,</span> divider<span class="token punctuation">,</span> date-picker-options<span class="token punctuation">,</span> date-picker-days<span class="token punctuation">,</span> actions<span class="token punctuation">,</span>\n  date-picker-options<span class="token operator">:</span> text<span class="token punctuation">,</span> avatar@<span class="token number">2</span><span class="token punctuation">,</span>\n  date-picker-days<span class="token operator">:</span> avatar@<span class="token number">28</span><span class="token punctuation">,</span>\n  heading<span class="token operator">:</span> heading<span class="token punctuation">,</span>\n  image<span class="token operator">:</span> image<span class="token punctuation">,</span>\n  list-item<span class="token operator">:</span> text<span class="token punctuation">,</span>\n  list-item-avatar<span class="token operator">:</span> avatar<span class="token punctuation">,</span> text<span class="token punctuation">,</span>\n  list-item-two-line<span class="token operator">:</span> sentences<span class="token punctuation">,</span>\n  list-item-avatar-two-line<span class="token operator">:</span> avatar<span class="token punctuation">,</span> sentences<span class="token punctuation">,</span>\n  list-item-three-line<span class="token operator">:</span> paragraph<span class="token punctuation">,</span>\n  list-item-avatar-three-line<span class="token operator">:</span> avatar<span class="token punctuation">,</span> paragraph<span class="token punctuation">,</span>\n  paragraph<span class="token operator">:</span> text@<span class="token number">3</span><span class="token punctuation">,</span>\n  sentences<span class="token operator">:</span> text@<span class="token number">2</span><span class="token punctuation">,</span>\n  table<span class="token operator">:</span> table-heading<span class="token punctuation">,</span> table-thead<span class="token punctuation">,</span> table-tbody<span class="token punctuation">,</span> table-tfoot<span class="token punctuation">,</span>\n  table-heading<span class="token operator">:</span> heading<span class="token punctuation">,</span> text<span class="token punctuation">,</span>\n  table-thead<span class="token operator">:</span> heading@<span class="token number">6</span><span class="token punctuation">,</span>\n  table-tbody<span class="token operator">:</span> table-row-divider@<span class="token number">6</span><span class="token punctuation">,</span>\n  table-row-divider<span class="token operator">:</span> table-row<span class="token punctuation">,</span> divider<span class="token punctuation">,</span>\n  table-row<span class="token operator">:</span> table-cell@<span class="token number">6</span><span class="token punctuation">,</span>\n  table-cell<span class="token operator">:</span> text<span class="token punctuation">,</span>\n  table-tfoot<span class="token operator">:</span> text@<span class="token number">2</span><span class="token punctuation">,</span> avatar@<span class="token number">2</span><span class="token punctuation">,</span>\n  text<span class="token operator">:</span> text\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="atskeleton-插槽"><a class="header-anchor" href="#atskeleton-插槽" aria-hidden="true">#</a> AtSkeleton 插槽</h2><table><thead><tr><th>插槽名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>默认插槽</td><td>-</td></tr></tbody></table>',23);e.render=function(n,s,e,o,c,l){return a(),t("div",null,[p])};export default e;export{s as __pageData};
