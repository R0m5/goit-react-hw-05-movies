"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{3010:function(e,n,t){t.d(n,{Yn:function(){return p},kK:function(){return h},l2:function(){return l},sv:function(){return m}});var r=t(5861),a=t(7757),u=t.n(a),c=t(1243),i=t(2007),s=t.n(i);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="fe65ae3947785f9cceedf502c682301b";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.propTypes={movieId:s().number.isRequired},h.propTypes={movieId:s().number.isRequired},l.propTypes={movieId:s().number.isRequired}},186:function(e,n,t){t.r(n);var r=t(9439),a=t(7689),u=t(2791),c=t(4834),i=t(3010),s=t(184);n.default=function(){var e=(0,a.UO)().movieId,n=(0,u.useState)([]),t=(0,r.Z)(n,2),o=t[0],p=t[1];return(0,u.useEffect)((function(){(0,i.sv)(e).then(p)}),[e]),o?(0,s.jsx)(c.x,{as:"section",children:(0,s.jsx)(c.x,{as:"ul",display:"flex",flexDirection:"column",gridGap:15,p:0,children:0===o.length?"Sorry, we don't have reviews for this movie":o.results.map((function(e,n){var t=e.author,r=e.content;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",t]}),(0,s.jsx)("p",{children:r})]},n)}))})}):null}}}]);
//# sourceMappingURL=186.fb9d82d2.chunk.js.map