(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{805:function(t,e,l){"use strict";l.r(e);var s=l(4),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"书写高质量sql的30条建议"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#书写高质量sql的30条建议"}},[t._v("#")]),t._v(" 书写高质量SQL的30条建议")]),t._v(" "),l("h2",{attrs:{id:"_1、查询sql尽量不要使用select-而是select-具体字段"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1、查询sql尽量不要使用select-而是select-具体字段"}},[t._v("#")]),t._v(" 1、查询SQL尽量不要使用select *, 而是select 具体字段")]),t._v(" "),l("ul",[l("li",[t._v("反例")])]),t._v(" "),l("blockquote",[l("p",[t._v("select * from table")])]),t._v(" "),l("ul",[l("li",[t._v("正例")])]),t._v(" "),l("blockquote",[l("p",[t._v("select id from table")])]),t._v(" "),l("p",[t._v("理由:")]),t._v(" "),l("ul",[l("li",[t._v("只取需要的字段，节省资源、减少网络开销。")]),t._v(" "),l("li",[t._v("select * 进行查询时，很可能就不会使用到覆盖索引了，就会造成回表查询。")])]),t._v(" "),l("h2",{attrs:{id:"_2、如果知道查询结果只有一条或者只要最大-最小一条记录-建议用limit-1"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2、如果知道查询结果只有一条或者只要最大-最小一条记录-建议用limit-1"}},[t._v("#")]),t._v(" 2、如果知道查询结果只有一条或者只要最大/最小一条记录，建议用limit 1")])])}),[],!1,null,null,null);e.default=a.exports}}]);