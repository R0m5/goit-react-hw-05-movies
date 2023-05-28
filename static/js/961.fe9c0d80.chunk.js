"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{3010:function(n,e,r){r.d(e,{Yn:function(){return l},kK:function(){return f},l2:function(){return d},sv:function(){return g}});var t=r(5861),i=r(7757),a=r.n(i),o=r(1243),c=r(2007),s=r.n(c);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var p="fe65ae3947785f9cceedf502c682301b";function l(){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(p));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(p,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(p,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(p,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}g.propTypes={movieId:s().number.isRequired},f.propTypes={movieId:s().number.isRequired},d.propTypes={movieId:s().number.isRequired}},7398:function(n,e,r){r.d(e,{DX:function(){return f},Dx:function(){return m},Jv:function(){return g},dI:function(){return h},ej:function(){return x},se:function(){return d}});var t,i,a,o,c,s,p=r(168),l=r(6444),u=r(1087),d=l.ZP.ul(t||(t=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),x=l.ZP.li(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  max-width: 270px;\n  justify-content: space-between;\n  &:hover {\n    transform: scale(1.06);\n  }\n"]))),f=(0,l.ZP)(u.rU)(a||(a=(0,p.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  color: black;\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-top: 10px;\n"]))),h=l.ZP.button(o||(o=(0,p.Z)(["\n  background-color: orange;\n  color: black;\n  text-align: center;\n  text-transform: uppercase;\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 8px 16px;\n  margin-top: 10px;\n  font-weight: 500;\n  line-height: 1.33;\n  font-size: 14px;\n  &:hover {\n    transform: scale(1.06);\n  }\n"]))),g=l.ZP.p(c||(c=(0,p.Z)(["\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: grey;\n"]))),m=l.ZP.p(s||(s=(0,p.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  color: black;\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-top: 10px;\n"])))},7961:function(n,e,r){r.r(e);var t,i=r(168),a=r(9439),o=r(7689),c=r(1087),s=r(6444),p=r(2791),l=r(4834),u=r(3010),d=r(5243),x=r(7398),f=r(184);e.default=function(){var n,e,r=(0,p.useState)(null),t=(0,a.Z)(r,2),i=t[0],c=t[1],s=(0,o.UO)().movieId,g=(0,o.TH)(),m=(0,p.useRef)(null!==(n=null===(e=g.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");if(console.log(m),console.log(g),(0,p.useEffect)((function(){(0,u.l2)(s).then(c)}),[s]),!i)return null;var v=i.poster_path,b=i.release_date,w=i.popularity,y=i.overview,j=i.genres,Z=i.title;return(0,f.jsxs)(l.x,{as:"main",children:[(0,f.jsx)(x.DX,{to:m.current,children:(0,f.jsx)(x.dI,{type:"button",children:"Go back"})}),(0,f.jsxs)(l.x,{as:"section",pt:15,pb:15,display:"flex",gridGap:70,borderBottom:"2px solid orange",children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(v),width:250,alt:""}),(0,f.jsxs)(l.x,{as:"div",display:"flex",flexDirection:"column",gridGap:20,width:900,children:[(0,f.jsx)("h1",{children:Z}),(0,f.jsxs)(l.x,{as:"div",display:"flex",flexDirection:"column",gridGap:10,children:[(0,f.jsxs)("p",{children:["Release date: ",new Date(b).toLocaleDateString()]}),(0,f.jsxs)("p",{children:["User score: ",Number(w).toFixed(0),"%"]})]}),(0,f.jsxs)(l.x,{as:"div",display:"flex",flexDirection:"column",gridGap:10,children:[(0,f.jsx)("h2",{children:"Overview:"}),(0,f.jsx)("p",{children:y})]}),(0,f.jsxs)(l.x,{as:"div",display:"flex",flexDirection:"column",gridGap:10,children:[(0,f.jsx)("h2",{children:"Genres:"}),(0,f.jsx)("p",{children:j.map((function(n){return n.name})).join(" ")})]})]})]}),(0,f.jsxs)(l.x,{as:"section",pt:15,pb:15,borderBottom:"2px solid orange",display:"flex",alignItems:"center",gridGap:10,children:[(0,f.jsx)("h3",{children:"Additional information:"}),(0,f.jsx)(h,{to:"cast",children:"Cast"}),(0,f.jsx)(h,{to:"reviews",children:"Reviews"})]}),(0,f.jsx)(p.Suspense,{fallback:(0,f.jsx)("div",{children:(0,f.jsx)(d.CJ,{height:"80",width:"80",color:"orange",ariaLabel:"triangle-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}),children:(0,f.jsx)(o.j3,{})})]})};var h=(0,s.ZP)(c.OL)(t||(t=(0,i.Z)(["\n  color: black;\n  font-size: 24px;\n  text-decoration: underline;\n\n  &.active {\n    color: orange;\n  }\n\n  :hover:not(.active) {\n    color: orange;\n  }\n"])))}}]);
//# sourceMappingURL=961.fe9c0d80.chunk.js.map