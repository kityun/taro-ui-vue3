import{f as n,g as a,B as t}from"./common-03e26d29.js";const s='{"title":"Grid 栅格布局","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"一般用法","slug":"一般用法"},{"level":2,"title":"矩形用法","slug":"矩形用法"},{"level":2,"title":"是否有边框","slug":"是否有边框"},{"level":2,"title":"AtGrid 参数","slug":"atgrid-参数"},{"level":2,"title":"AtGrid 事件","slug":"atgrid-事件"}],"relativePath":"docs/grid.md","lastUpdated":1605947374811.3462}';var p={};const o=t('<h1 id="grid-栅格布局"><a class="header-anchor" href="#grid-栅格布局" aria-hidden="true">#</a> Grid 栅格布局</h1><hr><p>提供在移动端常见的 <code>宫格</code> 布局，帮助快速实现宫格效果</p><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>在 Taro 文件中引入组件</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtGrid <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/grid.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="一般用法"><a class="header-anchor" href="#一般用法" aria-hidden="true">#</a> 一般用法</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtGrid</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\n  [\n    {\n      image: <span class="token punctuation">&#39;</span>https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>领取中心<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>找折扣<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>领会员<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>新品首发<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>领京豆<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>手机馆<span class="token punctuation">&#39;</span>\n    }\n  ]<span class="token punctuation">&quot;</span></span>\n <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="矩形用法"><a class="header-anchor" href="#矩形用法" aria-hidden="true">#</a> 矩形用法</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtGrid</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>rect<span class="token punctuation">&#39;</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\n [\n    {\n      image: <span class="token punctuation">&#39;</span>https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>领取中心<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>找折扣<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>领会员<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>新品首发<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>领京豆<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>手机馆<span class="token punctuation">&#39;</span>\n    }\n  ]<span class="token punctuation">&quot;</span></span>\n <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="是否有边框"><a class="header-anchor" href="#是否有边框" aria-hidden="true">#</a> 是否有边框</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtGrid</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>rect<span class="token punctuation">&#39;</span></span> <span class="token attr-name">:hasBorder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\n [\n    {\n      image: <span class="token punctuation">&#39;</span>https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>领取中心<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>找折扣<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>领会员<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>新品首发<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>领京豆<span class="token punctuation">&#39;</span>\n    },\n    {\n      image: <span class="token punctuation">&#39;</span>https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png<span class="token punctuation">&#39;</span>,\n      value: <span class="token punctuation">&#39;</span>手机馆<span class="token punctuation">&#39;</span>\n    }\n  ]<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="atgrid-参数"><a class="header-anchor" href="#atgrid-参数" aria-hidden="true">#</a> AtGrid 参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>宫格布局数据源</td><td>[{&#39;{ iconInfo? , value? , image? }&#39;}]</td><td>-</td><td>-</td></tr><tr><td>mode</td><td>布局模式</td><td>String</td><td><code>square</code>，<code>rect</code></td><td><code>square</code></td></tr><tr><td>hasBorder</td><td>是否有边框</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>columnNum</td><td>每一列有多少个</td><td>Number</td><td>-</td><td>-</td></tr></tbody></table><h2 id="atgrid-事件"><a class="header-anchor" href="#atgrid-事件" aria-hidden="true">#</a> AtGrid 事件</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>返回参数</th></tr></thead><tbody><tr><td>onClick</td><td>点击宫格触发的事件</td><td>(item: object, index: number)</td></tr></tbody></table>',18);p.render=function(t,s,p,e,c,u){return n(),a("div",null,[o])};export default p;export{s as __pageData};
