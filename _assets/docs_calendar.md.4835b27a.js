import{f as a,g as t,B as n}from"./common-03e26d29.js";const s='{"title":"Calendar 日历","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"一般用法","slug":"一般用法"},{"level":2,"title":"跳转到指定日期","slug":"跳转到指定日期"},{"level":2,"title":"指定最小日期和最大日期","slug":"指定最小日期和最大日期"},{"level":2,"title":"标记时间","slug":"标记时间"},{"level":2,"title":"禁止滑动","slug":"禁止滑动"},{"level":2,"title":"垂直滑动","slug":"垂直滑动"},{"level":2,"title":"范围选择","slug":"范围选择"},{"level":2,"title":"有效时间组","slug":"有效时间组"},{"level":2,"title":"AtCalendar 参数","slug":"atcalendar-参数"},{"level":2,"title":"AtCalendar 事件","slug":"atcalendar-事件"}],"relativePath":"docs/calendar.md","lastUpdated":1605947374165.8848}';var e={};const d=n('<h1 id="calendar-日历"><a class="header-anchor" href="#calendar-日历" aria-hidden="true">#</a> Calendar 日历</h1><hr><p>该组件提供日历选择功能（包括范围选择）</p><blockquote><p>注意目前 h5 和 小程序 实现的方案不一致 可能导致效果不同 和 部分 API 无法使用 具体效果请看 h5 上的展示</p></blockquote><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>在 Taro 文件中引入组件</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtCalendar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/calendar.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="一般用法"><a class="header-anchor" href="#一般用法" aria-hidden="true">#</a> 一般用法</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtCalendar</span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="跳转到指定日期"><a class="header-anchor" href="#跳转到指定日期" aria-hidden="true">#</a> 跳转到指定日期</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtCalendar</span> <span class="token attr-name">currentDate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2018/11/11<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="指定最小日期和最大日期"><a class="header-anchor" href="#指定最小日期和最大日期" aria-hidden="true">#</a> 指定最小日期和最大日期</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtCalendar</span> <span class="token attr-name">minDate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2018/1/1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">maxDate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2018/10/1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="标记时间"><a class="header-anchor" href="#标记时间" aria-hidden="true">#</a> 标记时间</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtCalendar</span> <span class="token attr-name">:marks</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[ { value: <span class="token punctuation">&#39;</span>2018/11/11<span class="token punctuation">&#39;</span> } ]<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="禁止滑动"><a class="header-anchor" href="#禁止滑动" aria-hidden="true">#</a> 禁止滑动</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtCalendar</span> <span class="token attr-name">:isSwiper</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="垂直滑动"><a class="header-anchor" href="#垂直滑动" aria-hidden="true">#</a> 垂直滑动</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtCalendar</span> <span class="token attr-name">isVertical</span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="范围选择"><a class="header-anchor" href="#范围选择" aria-hidden="true">#</a> 范围选择</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtCalendar</span> <span class="token attr-name">isMultiSelect</span> <span class="token attr-name">currentDate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{start: <span class="token punctuation">&#39;</span>2018/10/28<span class="token punctuation">&#39;</span>, end: <span class="token punctuation">&#39;</span>2018/11/11<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="有效时间组"><a class="header-anchor" href="#有效时间组" aria-hidden="true">#</a> 有效时间组</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtCalendar</span> <span class="token attr-name">:validDates</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[ { value: <span class="token punctuation">&#39;</span>2020/01/01<span class="token punctuation">&#39;</span> } ]<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="atcalendar-参数"><a class="header-anchor" href="#atcalendar-参数" aria-hidden="true">#</a> AtCalendar 参数</h2><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">DateArg</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> Date\n\n<span class="token keyword">interface</span> <span class="token class-name">SelectDate</span> <span class="token punctuation">{</span>\n  end<span class="token operator">?</span><span class="token operator">:</span> DateArg\n  start<span class="token operator">:</span> DateArg\n<span class="token punctuation">}</span>\n</code></pre></div><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>currentDate</td><td>当前的时间</td><td><code>DateArg | SelectDate</code></td><td><code>Date.now()</code></td></tr><tr><td>minDate</td><td>最小的可选时间</td><td><code>DateArg</code></td><td>-</td></tr><tr><td>maxDate</td><td>最大的可选时间</td><td><code>DateArg</code></td><td>-</td></tr><tr><td>isSwiper</td><td>是否可以滑动</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>marks</td><td>需要标记的时间</td><td><code>Array&lt;{&#39;{ value: DateArg }&#39;}&gt;</code></td><td><code>[]</code></td></tr><tr><td>validDates</td><td>需要标记的有效时间</td><td><code>Array&lt;{&#39;{ value: DateArg }&#39;}&gt;</code></td><td><code>[]</code></td></tr><tr><td>format</td><td>日期格式</td><td><code>string</code></td><td><code>YYYY-MM-DD</code></td></tr><tr><td>monthFormat</td><td>月份格式</td><td><code>string</code></td><td><code>YYYY年MM月</code></td></tr><tr><td>hideArrow</td><td>是否隐藏箭头</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>isVertical</td><td>是否垂直滑动</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>isMultiSelect</td><td>是否范围选择</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h2 id="atcalendar-事件"><a class="header-anchor" href="#atcalendar-事件" aria-hidden="true">#</a> AtCalendar 事件</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>onClickPreMonth</td><td>点击箭头去上一个月的时候触发</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>onClickNextMonth</td><td>点击箭头去下一个月的时候触发</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>onDayClick</td><td>点击日期时候触发</td><td><code>(item: {&#39;{ value: string }&#39;}) =&gt; void</code></td><td>-</td></tr><tr><td>onDayLongClick</td><td>长按日期时触发</td><td><code>(item: {&#39;{ value: string }&#39;}) =&gt; void</code></td><td>-</td></tr><tr><td>onMonthChange</td><td>月份改变时触发</td><td><code>(value: string) =&gt; void</code></td><td>-</td></tr><tr><td>onSelectDate</td><td>选中日期时候触发</td><td><code>(value: SelectDate) =&gt; void</code></td><td>-</td></tr></tbody></table>',30);e.render=function(n,s,e,o,c,p){return a(),t("div",null,[d])};export default e;export{s as __pageData};
