webpackJsonp([9,135],{716:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(61),s(60)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","\u57fa\u7840\u5206\u9875\u3002"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/pagination/demo/basic.md",id:"components-pagination-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >defaultCurrent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >50</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(o["default"],{defaultCurrent:1,total:50})}}},717:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(61),s(60)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","\u6539\u53d8\u6bcf\u9875\u663e\u793a\u6761\u76ee\u6570\u3002"]],meta:{order:2,title:"\u6539\u53d8",filename:"components/pagination/demo/changer.md",id:"components-pagination-demo-changer"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onShowSizeChange</span><span class="token punctuation" >(</span>current<span class="token punctuation" >,</span> pageSize<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>current<span class="token punctuation" >,</span> pageSize<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >showSizeChanger</span> <span class="token attr-name" >onShowSizeChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onShowSizeChange<span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultCurrent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >500</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n,a){console.log(n,a)}return c["default"].createElement(o["default"],{showSizeChanger:!0,onShowSizeChange:n,defaultCurrent:3,total:500})}}},718:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(61),s(60)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","\u53d7\u63a7\u5236\u7684\u9875\u7801\u3002"]],meta:{order:8,title:"\u53d7\u63a7",filename:"components/pagination/demo/controlled.md",id:"components-pagination-demo-controlled"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Container <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      current<span class="token punctuation" >:</span> <span class="token number" >3</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>page<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>page<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      current<span class="token punctuation" >:</span> page<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>current<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >50</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Container</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=c["default"].createClass({displayName:"Container",getInitialState:function(){return{current:3}},onChange:function(n){console.log(n),this.setState({current:n})},render:function(){return c["default"].createElement(o["default"],{current:this.state.current,onChange:this.onChange,total:50})}});return c["default"].createElement(n,null)}}},719:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(61),s(60)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","\u5feb\u901f\u8df3\u8f6c\u5230\u67d0\u4e00\u9875\u3002"]],meta:{order:3,title:"\u8df3\u8f6c",filename:"components/pagination/demo/jump.md",id:"components-pagination-demo-jump"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >showQuickJumper</span> <span class="token attr-name" >defaultCurrent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >2</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >500</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(o["default"],{showQuickJumper:!0,defaultCurrent:2,total:500})}}},720:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(61),s(60)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","\u8ff7\u4f60\u7248\u672c\u3002"]],meta:{order:4,title:"\u8ff7\u4f60",filename:"components/pagination/demo/mini.md",id:"components-pagination-demo-mini"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >showTotal</span><span class="token punctuation" >(</span>total<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token template-string" ><span class="token string" >`\u5171 </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>total<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > \u6761`</span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >50</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >50</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >showSizeChanger</span> <span class="token attr-name" >showQuickJumper</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >50</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >showTotal</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>showTotal<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){return"\u5171 "+n+" \u6761"}return c["default"].createElement("div",null,c["default"].createElement(o["default"],{size:"small",total:50}),c["default"].createElement("br",null),c["default"].createElement(o["default"],{size:"small",total:50,showSizeChanger:!0,showQuickJumper:!0}),c["default"].createElement("br",null),c["default"].createElement(o["default"],{size:"small",total:50,showTotal:n}))}}},721:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(61),s(60)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","\u66f4\u591a\u5206\u9875\u3002"]],meta:{order:1,title:"\u66f4\u591a",filename:"components/pagination/demo/more.md",id:"components-pagination-demo-more"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >defaultCurrent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >500</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(o["default"],{defaultCurrent:1,total:500})}}},722:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(61),s(60)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","\u7b80\u5355\u5730\u7ffb\u9875\u3002"]],meta:{order:6,title:"\u7b80\u6d01",filename:"components/pagination/demo/simple.md",id:"components-pagination-demo-simple"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >simple</span> <span class="token attr-name" >defaultCurrent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >2</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >50</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\nmountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(o["default"],{simple:!0,defaultCurrent:2,total:50})}}},723:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(20),s(19)),o=t(p),e=(s(61),s(60)),c=t(e),u=s(1),l=t(u),i=s(2);t(i);n.exports={content:[["p","\u901a\u8fc7\u8bbe\u7f6e ",["code","showTotal"]," \u5c55\u793a\u603b\u5171\u6709\u591a\u5c11\u6570\u636e\u3002"]],meta:{order:9,title:"\u603b\u6570",filename:"components/pagination/demo/total.md",id:"components-pagination-demo-total"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination<span class="token punctuation" >,</span> Select <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n    <span class="token attr-name" >selectComponentClass</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>Select<span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >80</span><span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >showTotal</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>total <span class="token operator" >=</span><span class="token operator" >></span> <span class="token template-string" ><span class="token string" >`\u5171 </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>total<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > \u6761`</span></span><span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >pageSize</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultCurrent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return l["default"].createElement(c["default"],{selectComponentClass:o["default"],total:80,showTotal:function(n){return"\u5171 "+n+" \u6761"},pageSize:20,defaultCurrent:1})}}},1017:function(n,a,s){n.exports={basic:s(716),changer:s(717),controlled:s(718),jump:s(719),mini:s(720),more:s(721),simple:s(722),total:s(723)}}});