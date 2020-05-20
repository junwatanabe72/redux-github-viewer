(this["webpackJsonpredux-github-viewer"]=this["webpackJsonpredux-github-viewer"]||[]).push([[0],{41:function(e,n,t){e.exports=t(62)},62:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(0),c=t.n(a),o=t(14),u=t.n(o),l=t(8),i=t(12),d=t(2),p=t(15),s=t(4);function b(){var e=Object(r.a)(["\n  display: inline-block;\n  width: 100%;\n  color: ",";\n  &:hover {\n    color: ",";\n    background-color: ",";\n  }\n"]);return b=function(){return e},e}var m=Object(d.b)(p.b)(b(),(function(e){return e.color}),(function(e){return e.hovercolor}),(function(e){return e.hoverbackgroundcolor}));var f=function(e){var n=e.to,t=e.color,r=e.hoverbackgroundcolor,a=e.hovercolor,o=e.value;return c.a.createElement(m,{to:n,color:t,hoverbackgroundcolor:r,hovercolor:a},o)};function v(){var e=Object(r.a)(["\n  display: inline-block;\n  font-size: 26px;\n  margin: 16px;\n"]);return v=function(){return e},e}var h=d.b.div(v());var g=function(){return c.a.createElement(h,null,c.a.createElement(f,{to:"/",color:"white",value:"Github Viewer",hovercolor:"none"}))};function E(){var e=Object(r.a)(["\n  margin: 8px;\n"]);return E=function(){return e},e}function x(){var e=Object(r.a)(["\n  display: flex;\n"]);return x=function(){return e},e}var O=d.b.ul(x()),j=d.b.li(E());var w=function(){return c.a.createElement(O,null,c.a.createElement(j,null,c.a.createElement(f,{to:"Issue",value:"Issue",color:"white"})),c.a.createElement(j,null,c.a.createElement(f,{to:"PullRequest",value:"Pull Request",color:"white"})))};function k(){var e=Object(r.a)(["\n  width: 180px;\n  height: 30px;\n  margin: 8px 4px;\n  }\n"]);return k=function(){return e},e}function y(){var e=Object(r.a)([""]);return y=function(){return e},e}var I=d.b.ul(y()),P=d.b.li(k());var A=function(){return c.a.createElement(I,null,c.a.createElement(P,null,c.a.createElement(f,{to:"/",value:"Top",hovercolor:"white",hoverbackgroundcolor:"#0066ff"})),c.a.createElement(P,null,c.a.createElement(f,{to:"profile",value:"Your Profile",hovercolor:"white",hoverbackgroundcolor:"#0066ff"})),c.a.createElement(P,null,c.a.createElement(f,{to:"Issue",value:"Issue",hovercolor:"white",hoverbackgroundcolor:"#0066ff"})),c.a.createElement(P,null,c.a.createElement(f,{to:"PullRequest",value:"Pull Request",hovercolor:"white",hoverbackgroundcolor:"#0066ff"})))},D=t(36);function F(){var e=Object(r.a)(["\n  display: inline-block;\n  margin: 0 16px 0 auto;\n  cursor: pointer;\n"]);return F=function(){return e},e}var S=d.b.div(F());var Y=function(e){e.head;var n=e.tail;return c.a.createElement(S,null,c.a.createElement(D.a,{icon:n}))};function M(){var e=Object(r.a)(["\n  position: absolute;\n  margin-top: 16px;\n  top: 40px;\n  right: 16px;\n  border-radius: 2px;\n  background-color: white;\n  box-shadow: rgba(51, 51, 51, 0.15) 1px 1px 4px 1px;\n  display: ",";\n"]);return M=function(){return e},e}function U(){var e=Object(r.a)(["\n  display: inline-block;\n  margin: 0 16px 0 auto;\n  cursor: pointer;\n"]);return U=function(){return e},e}var C=d.b.div(U()),_=d.b.div(M(),(function(e){return e.modalIsOpen?"":"none"}));var R=function(e){var n=e.modalIsOpen,t=e.workModal,r=Object(a.useRef)(null);Object(a.useEffect)((function(){return document.addEventListener("click",o),function(){document.removeEventListener("click",o)}}));var o=function(e){!1!==n&&r&&r.current&&!r.current.contains(e.target)&&t()};return c.a.createElement(C,{ref:r,onClick:t},c.a.createElement(Y,{head:"fas",tail:"bars"}),c.a.createElement(_,{modalIsOpen:n},c.a.createElement(A,null)))};function B(){var e=Object(r.a)(["\n  width: 100%;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  background-color: #333333;\n  color: white;\n"]);return B=function(){return e},e}var N=d.b.div(B());var z=function(){var e=Object(a.useState)(!1),n=Object(s.a)(e,2),t=n[0],r=n[1];return c.a.createElement(N,null,c.a.createElement(g,null),c.a.createElement(w,null),c.a.createElement(R,{workModal:function(){r(!t)},modalIsOpen:t}))},L=t(10);function W(){var e=Object(r.a)(["\n  color: #808080;\n  border-top: ",";\n  border-right: ",";\n  border-left: ",";\n  border-bottom: ",";\n"]);return W=function(){return e},e}function H(){var e=Object(r.a)(["\n  color: #808080;\n  border-top: ",";\n  border-right: ",";\n  border-left: ",";\n  border-bottom: ",";\n"]);return H=function(){return e},e}function q(){var e=Object(r.a)(["\n  width: 100%;\n  cursor: pointer;\n  padding: 20px;\n  text-align: center;\n  border-radius: 6px 6px 0 0;\n"]);return q=function(){return e},e}function T(){var e=Object(r.a)(["\n  display: flex;\n"]);return T=function(){return e},e}var V=d.b.ul(T()),X=d.b.li(q()),G=Object(d.b)(X)(H(),(function(e){return e.contentIssue?"1px solid rgb(225, 228, 232)":""}),(function(e){return e.contentIssue?"1px solid rgb(225, 228, 232)":""}),(function(e){return e.contentIssue?"1px solid rgb(225, 228, 232)":""}),(function(e){return e.contentIssue?"":"1px solid rgb(225, 228, 232)"})),J=Object(d.b)(X)(W(),(function(e){return e.contentIssue?"":"1px solid rgb(225, 228, 232)"}),(function(e){return e.contentIssue?"":"1px solid rgb(225, 228, 232)"}),(function(e){return e.contentIssue?"":"1px solid rgb(225, 228, 232)"}),(function(e){return e.contentIssue?"1px solid rgb(225, 228, 232)":""}));var $=function(e){return c.a.createElement(V,null,e.contentIssue?c.a.createElement(c.a.Fragment,null,c.a.createElement(G,{contentIssue:e.contentIssue},"Issue"),c.a.createElement(J,{contentIssue:e.contentIssue,onClick:e.changeContent},"Pull Request")):c.a.createElement(c.a.Fragment,null,c.a.createElement(G,{contentIssue:e.contentIssue,onClick:e.changeContent},"Issue"),c.a.createElement(J,{contentIssue:e.contentIssue},"Pull Request")))};function K(){var e=Object(r.a)(["\n  font-size: ","rem;\n"]);return K=function(){return e},e}var Q=d.b.h2(K(),(function(e){return e.fontsize}));var Z=function(e){var n=e.name,t=e.fontsize;return c.a.createElement(Q,{fontsize:t},n)};function ee(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 300px;\n"]);return ee=function(){return e},e}var ne=d.b.div(ee());var te=function(e){return c.a.createElement(ne,null,c.a.createElement(Z,{name:"PullRequest"}))};var re=t(6);function ae(){var e=Object(r.a)(["\n  cursor: pointer;\n  display: inline-block;\n  text-align: center;\n  padding: 4px 32px;\n  margin: 4px;\n  border-radius: 6px;\n  ","\n  &:active {\n    border-bottom: none;\n  }\n"]);return ae=function(){return e},e}var ce=d.b.a(ae(),(function(e){return oe(e)})),oe=function(e){return"primary"===e.type?"\n      color: white;\n      background-color: rgb(66, 195, 96);\n      border-bottom: 2px solid rgb(40, 167, 69);\n      &:hover {\n        background-color: rgb(40, 180, 69);\n      }\n  ":"danger"===e.type?"\n    color: white;\n      background-color: rgb(215, 58, 73);\n      border-bottom: 2px solid rgb(175, 28, 42);\n      &:hover {\n        background-color: rgb(195, 28, 42);\n      }\n  ":void 0};var ue=function(e){var n=e.type,t=e.propsFunction,r=e.ButtonName;return c.a.createElement("div",null,c.a.createElement(ce,{type:n,onClick:t},r))};function le(){var e=Object(r.a)(["\n  display: table-cell;\n  width: 98%;\n  padding: 8px;\n  border-width: inital;\n  border-style: none;\n  outline: none;\n  background: none;\n"]);return le=function(){return e},e}function ie(){var e=Object(r.a)(["\n  border-radius: 6px;\n  border-width: 1px;\n  border: 1px solid #ccc;\n"]);return ie=function(){return e},e}function de(){var e=Object(r.a)(["\n  width: 100%;\n  padding: 8px 16px;\n"]);return de=function(){return e},e}var pe=d.b.div(de()),se=d.b.div(ie()),be=d.b.input(le());var me=function(e){return c.a.createElement(pe,null,c.a.createElement(se,null,c.a.createElement(be,{placeholder:e.PlaceHolder,value:e.value,onChange:e.propsFunction})))};function fe(){var e=Object(r.a)(["\n  width: 98%;\n  border-width: inital;\n  border-style: none;\n  outline: none;\n  background: none;\n"]);return fe=function(){return e},e}function ve(){var e=Object(r.a)(["\n  border-radius: 6px;\n  border-width: 1px;\n  border: 1px solid #ccc;\n"]);return ve=function(){return e},e}function he(){var e=Object(r.a)(["\n  width: 100%;\n  padding: 8px 16px;\n"]);return he=function(){return e},e}var ge=d.b.div(he()),Ee=d.b.div(ve()),xe=d.b.textarea(fe());var Oe=function(e){return c.a.createElement(ge,null,c.a.createElement(Ee,null,c.a.createElement(xe,{placeholder:e.PlaceHolder,value:e.value,onChange:e.propsFunction})))};function je(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return je=function(){return e},e}function we(){var e=Object(r.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 8px;\n  margin: 4px;\n  border-radius: 6px;\n  color: rgb(215, 58, 73);\n  background-color: rgba(215, 58, 73, 0.35);\n"]);return we=function(){return e},e}function ke(){var e=Object(r.a)(["\n  padding: 16px;\n  min-height: 50px;\n"]);return ke=function(){return e},e}function ye(){var e=Object(r.a)(["\n  padding: 16px;\n"]);return ye=function(){return e},e}function Ie(){var e=Object(r.a)(["\n  padding: 16px;\n"]);return Ie=function(){return e},e}function Pe(){var e=Object(r.a)(["\n  padding: 32px 0px 16px;\n"]);return Pe=function(){return e},e}function Ae(){var e=Object(r.a)(["\n  padding: 16px 8px;\n"]);return Ae=function(){return e},e}function De(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 600px;\n  margin: auto;\n  padding: 8px;\n"]);return De=function(){return e},e}var Fe=d.b.div(De()),Se=d.b.div(Ae()),Ye=d.b.div(Pe()),Me=d.b.div(Ie()),Ue=d.b.div(ye()),Ce=d.b.div(ke()),_e=d.b.p(we()),Re={title:c.a.createElement(_e,null,"\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),description:c.a.createElement(_e,null,"\u8aac\u660e\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")},Be=d.b.div(je()),Ne="open",ze=function(e,n){return n=(n=(n=n.replace(/YYYY/,e.getFullYear())).replace(/MM/,e.getMonth()+1)).replace(/DD/,e.getDate())}(new Date,"MM-DD-YYYY").toString();var Le=function(e){var n=e.createIssue,t=e.modalPop,r=Object(a.useState)(""),o=Object(s.a)(r,2),u=o[0],l=o[1],i=Object(a.useState)(""),d=Object(s.a)(i,2),p=d[0],b=d[1],m=Object(a.useState)(""),f=Object(s.a)(m,2),v=f[0],h=f[1];return c.a.createElement(Fe,null,c.a.createElement(Se,null,c.a.createElement(Z,{name:"Issue\u3092\u8ffd\u52a0",fontsize:"1.2"})),c.a.createElement(Ye,null,c.a.createElement(Me,null,c.a.createElement("label",null,"\u30bf\u30a4\u30c8\u30eb"),c.a.createElement(me,{PlaceHolder:"\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",value:u,propsFunction:function(e){l(e.target.value)}})),c.a.createElement(Ue,null,c.a.createElement("label",null,"\u8aac\u660e"),c.a.createElement(Oe,{PlaceHolder:"\u8aac\u660e\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",value:p,propsFunction:function(e){b(e.target.value)}}))),c.a.createElement(Ce,null,v),c.a.createElement(Be,null,c.a.createElement(ue,{ButtonName:"\u4f5c\u6210",type:"primary",propsFunction:function(){var e={title:u,description:p,status:Ne,createBy:"junwatanabe",createAt:ze,updateAt:ze};e.title?e.description?(n(e),l(""),b(""),t()):h(Re.description):h(Re.title)}}),c.a.createElement(ue,{ButtonName:"\u9589\u3058\u308b",propsFunction:t})))};function We(){var e=Object(r.a)(["\n  display: flex;\n"]);return We=function(){return e},e}var He=d.b.div(We());var qe=function(e){var n=e.data,t=e.modalPush,r=e.modalPop,a=e.createIssue,o=e.deleteIssue,u=e.checkedObject,l=!0===e.checkedAll?function(){return o(n)}:function(){return o(u)};return c.a.createElement(He,null,c.a.createElement(ue,{ButtonName:"New",type:"primary",propsFunction:function(){return t(c.a.createElement(Le,{createIssue:a,modalPop:r}))}}),c.a.createElement(ue,{ButtonName:"Delete",type:"danger",propsFunction:l}))};function Te(){var e=Object(r.a)(["\n  display: flex;\n  padding: 16px;\n  align-items: center;\n"]);return Te=function(){return e},e}var Ve=d.b.div(Te());var Xe=function(e){var n=e.checkedObject,t=e.propsFunction,r=e.checkedAll,a=e.createIssue,o=e.deleteIssue,u=e.data,l=e.modalPush,i=e.modalPop;return c.a.createElement(Ve,null,c.a.createElement(Z,{name:"Issue",fontsize:"1.5"}),c.a.createElement(me,{PlaceHolder:"issue\u540d\u3067\u691c\u7d22",propsFunction:t}),c.a.createElement(qe,{checkedObject:n,checkedAll:r,createIssue:a,deleteIssue:o,data:u,modalPush:l,modalPop:i}))};function Ge(){var e=Object(r.a)(["\n  font-size: 14px;\n  min-width: 140px;\n  border-bottom: solid 1px #ccc;\n  border-right: solid 1px white;\n"]);return Ge=function(){return e},e}var Je=d.b.th(Ge());var $e=function(e){return c.a.createElement(Je,null,e.value)};function Ke(){var e=Object(r.a)(["\n  min-width: 10px;\n  padding: 8px;\n  cursor: pointer;\n  border-bottom: solid 1px #ccc;\n  border-right: solid 1px white;\n"]);return Ke=function(){return e},e}var Qe=d.b.th(Ke());var Ze=function(e){var n=e.propsFunction;return c.a.createElement(Qe,null,c.a.createElement("input",{type:"checkbox",onChange:n}))};function en(){var e=Object(r.a)(["\n  border-left: solid 1px #ccc;\n  border-bottom: solid 1px #ccc;\n  text-align: left;\n"]);return en=function(){return e},e}var nn=d.b.tr(en());var tn=function(e){var n=e.propsFunction;return c.a.createElement("thead",null,c.a.createElement(nn,null,c.a.createElement(Ze,{propsFunction:n}),c.a.createElement($e,{value:""}),c.a.createElement($e,{value:"\u30b9\u30c6\u30fc\u30bf\u30b9"}),c.a.createElement($e,{value:"\u4f5c\u6210\u8005"}),c.a.createElement($e,{value:"\u4f5c\u6210\u65e5\u4ed8"}),c.a.createElement($e,{value:"\u66f4\u65b0\u65e5\u4ed8"})))};function rn(){var e=Object(r.a)(["\n  margin: 16px;\n  display: block;\n  width: 64px;\n"]);return rn=function(){return e},e}function an(){var e=Object(r.a)(["\n  padding: 16px;\n"]);return an=function(){return e},e}function cn(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return cn=function(){return e},e}function on(){var e=Object(r.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 8px;\n  margin: 4px;\n  border-radius: 6px;\n  color: rgb(215, 58, 73);\n  background-color: rgba(215, 58, 73, 0.35);\n"]);return on=function(){return e},e}function un(){var e=Object(r.a)(["\n  padding: 16px;\n  min-height: 50px;\n"]);return un=function(){return e},e}function ln(){var e=Object(r.a)(["\n  padding: 16px;\n"]);return ln=function(){return e},e}function dn(){var e=Object(r.a)(["\n  padding: 16px;\n"]);return dn=function(){return e},e}function pn(){var e=Object(r.a)(["\n  padding: 32px 0px 16px;\n"]);return pn=function(){return e},e}function sn(){var e=Object(r.a)(["\n  padding: 16px 8px;\n"]);return sn=function(){return e},e}function bn(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 600px;\n  margin: auto;\n  padding: 8px;\n"]);return bn=function(){return e},e}var mn=d.b.div(bn()),fn=d.b.div(sn()),vn=d.b.div(pn()),hn=d.b.div(dn()),gn=d.b.div(ln()),En=d.b.div(un()),xn=d.b.p(on()),On={title:c.a.createElement(xn,null,"\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),description:c.a.createElement(xn,null,"\u8aac\u660e\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")},jn=d.b.div(cn()),wn=d.b.div(an()),kn=d.b.select(rn()),yn=function(e,n){return n=(n=(n=n.replace(/YYYY/,e.getFullYear())).replace(/MM/,e.getMonth()+1)).replace(/DD/,e.getDate())}(new Date,"MM-DD-YYYY").toString(),In="open",Pn="close";var An=function(e){var n=e.changeIssue,t=e.modalPop,r=e.Value,o=Object(a.useState)(r.title),u=Object(s.a)(o,2),l=u[0],i=u[1],d=Object(a.useState)(r.description),p=Object(s.a)(d,2),b=p[0],m=p[1],f=Object(a.useState)(r.status),v=Object(s.a)(f,2),h=v[0],g=v[1],E=Object(a.useState)(""),x=Object(s.a)(E,2),O=x[0],j=x[1],w="open"===r.status?Pn:In;return c.a.createElement(mn,null,c.a.createElement(fn,null,c.a.createElement(Z,{name:"Issue\u3092\u66f4\u65b0",fontsize:"1.2"})),c.a.createElement(vn,null,c.a.createElement(hn,null,c.a.createElement("label",null,"\u30bf\u30a4\u30c8\u30eb"),c.a.createElement(me,{PlaceHolder:r.title,value:l,propsFunction:function(e){i(e.target.value)}})),c.a.createElement(gn,null,c.a.createElement("label",null,"\u8aac\u660e"),c.a.createElement(Oe,{PlaceHolder:r.description,value:b,propsFunction:function(e){m(e.target.value)}}))),c.a.createElement(wn,null,c.a.createElement("label",null,"\u30b9\u30c6\u30fc\u30bf\u30b9"),c.a.createElement(kn,{onChange:function(e){g(e.target.value)}},c.a.createElement("option",null,r.status),c.a.createElement("option",null,w))),c.a.createElement(En,null,O),c.a.createElement(jn,null,c.a.createElement(ue,{ButtonName:"\u66f4\u65b0",type:"primary",propsFunction:function(){var e={title:l,description:b,status:h,id:r.id,createBy:r.createBy,createAt:r.createAt,updateAt:yn};e.title?e.description?(n(e),i(""),m(""),t()):j(On.description):j(On.title)}}),c.a.createElement(ue,{ButtonName:"\u9589\u3058\u308b",propsFunction:t})))};function Dn(){var e=Object(r.a)(["\n  max-width: 200px;\n  font-size: 14px;\n  cursor: pointer;\n  border-bottom: solid 1px #ccc;\n  border-right: solid 1px white;\n"]);return Dn=function(){return e},e}var Fn=d.b.td(Dn());var Sn=function(e){var n=e.propsFunction,t=e.value;return c.a.createElement(Fn,{onClick:n},t)};function Yn(){var e=Object(r.a)(["\n  padding: 8px;\n  cursor: pointer;\n  border-bottom: solid 1px #ccc;\n  border-right: solid 1px white;\n"]);return Yn=function(){return e},e}var Mn=d.b.th(Yn());var Un=function(e){var n=e.value,t=e.propsFunction,r=e.checkedAll,o=Object(a.useState)(!1),u=Object(s.a)(o,2),l=u[0],i=u[1],d=function(){i(!l)},p=!0===r?c.a.createElement("input",{type:"checkbox",checked:r,onChange:function(){t(n,r),d()}}):c.a.createElement("input",{type:"checkbox",checked:l,onChange:function(){t(n,l),d()}});return c.a.createElement(Mn,null,p)};function Cn(){var e=Object(r.a)(["\n  border-top: solid 1px #ccc;\n  text-align: left;\n  &:hover {\n    background-color: #f5f5f5;\n  }\n"]);return Cn=function(){return e},e}var _n=d.b.tr(Cn());var Rn=function(e){var n=e.value,t=e.modalPush,r=e.modalPop,a=e.propsFunction,o=e.checkedAll,u=e.changeIssue,l=function(){return t(c.a.createElement(An,{modalPop:r,Value:n,changeIssue:u}))};return c.a.createElement(_n,null,c.a.createElement(Un,{value:n,propsFunction:a,checkedAll:o}),c.a.createElement(Sn,{value:n.title,propsFunction:l}),c.a.createElement(Sn,{value:n.status,propsFunction:l}),c.a.createElement(Sn,{value:n.createBy,propsFunction:l}),c.a.createElement(Sn,{value:n.createAt,propsFunction:l}),c.a.createElement(Sn,{value:n.updateAt,propsFunction:l}))};function Bn(){var e=Object(r.a)(["\n  padding: 8px;\n  margin: 8px;\n"]);return Bn=function(){return e},e}var Nn=d.b.td(Bn());var zn=function(e){var n=e.data,t=e.propsFunction,r=e.serachWord,a=e.checkedAll,o=e.modalPush,u=e.modalPop,l=e.changeIssue,i=Object.values(n).filter((function(e){return e.title.includes(r)}));return c.a.createElement("tbody",null,i.length>0?i.map((function(e){return c.a.createElement(Rn,{key:e.id,value:e,propsFunction:t,checkedAll:a,modalPush:o,modalPop:u,changeIssue:l})})):c.a.createElement("tr",null,c.a.createElement(Nn,{colSpan:"6"},"\u30c7\u30fc\u30bf\u304c\u3042\u308a\u307e\u305b\u3093\u3002")))};function Ln(){var e=Object(r.a)(["\n  min-width: 240px;\n  margin: 10px 0px 50px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n"]);return Ln=function(){return e},e}var Wn=d.b.table(Ln());var Hn=function(e){var n=e.propsFunction,t=e.serachWord,r=e.CheckedOrCanceledAll,a=e.checkedAll,o=e.data,u=e.modalPush,l=e.modalPop,i=e.changeIssue;return c.a.createElement(Wn,null,c.a.createElement(tn,{propsFunction:r}),c.a.createElement(zn,{propsFunction:n,serachWord:t,checkedAll:a,data:o,modalPush:u,modalPop:l,changeIssue:i}))};function qn(){var e=Object(r.a)(["\n  max-width: 896px;\n  margin: 8px;\n  overflow-x: auto;\n"]);return qn=function(){return e},e}var Tn=d.b.div(qn());var Vn=function(e){var n=e.propsFunction,t=e.serachWord,r=e.CheckedOrCanceledAll,a=e.checkedAll,o=e.data,u=e.modalPush,l=e.modalPop,i=e.changeIssue;return c.a.createElement(Tn,null,c.a.createElement(Hn,{propsFunction:n,serachWord:t,CheckedOrCanceledAll:r,checkedAll:a,data:o,modalPush:u,modalPop:l,changeIssue:i}))};function Xn(){var e=Object(r.a)(["\n  margin-top: 16px;\n  padding: 16px;\n"]);return Xn=function(){return e},e}var Gn=d.b.div(Xn());var Jn=function(e){var n=e.data,t=e.modalPush,r=e.modalPop,o=e.createIssue,u=e.changeIssue,l=e.deleteIssue,i=Object(a.useState)({}),d=Object(s.a)(i,2),p=d[0],b=d[1],m=Object(a.useState)(""),f=Object(s.a)(m,2),v=f[0],h=f[1],g=Object(a.useState)(!1),E=Object(s.a)(g,2),x=E[0],O=E[1];return c.a.createElement(Gn,null,c.a.createElement(Xe,{checkedObject:p,propsFunction:function(e){h(e.target.value)},checkedAll:x,data:n,modalPush:t,modalPop:r,deleteIssue:l,createIssue:o}),c.a.createElement(Vn,{propsFunction:function(e,n){if(n){var t=Object(re.a)({},p);delete t[e.id],b(t)}else{var r=Object(re.a)({},p);r[e.id]=e,b(r)}},serachWord:v,CheckedOrCanceledAll:function(){O(!x)},checkedAll:x,data:n,modalPush:t,modalPop:r,changeIssue:u}))};var $n=Object(l.b)((function(e){return{data:e.IssueR.data}}),(function(e){return{modalPush:function(n){return e({type:"MODAL_PUSH",payload:{argComponent:n}})},modalPop:function(n){return e({type:"MODAL_POP",payload:{}})},deleteIssue:function(n){return e({type:"REMOVE_ISSUE",payload:{issue:n}})},createIssue:function(n){return e({type:"ADD_ISSUE",payload:{issue:n}})},changeIssue:function(n){return e({type:"UPDATE_ISSUE",payload:{issue:n}})}}}))(Jn);function Kn(){var e=Object(r.a)(["\n  padding: 16px;\n"]);return Kn=function(){return e},e}var Qn=d.b.div(Kn());var Zn=function(e){var n=Object(a.useState)(!0),t=Object(s.a)(n,2),r=t[0],o=t[1];return c.a.createElement(Qn,null,c.a.createElement($,{contentIssue:r,changeContent:function(){o(!r)}}),r?c.a.createElement($n,null):c.a.createElement(te,null))};function et(){var e=Object(r.a)(["\n  width: ",";\n"]);return et=function(){return e},e}var nt=d.b.img(et(),(function(e){return e.width}));var tt=function(e){return c.a.createElement(nt,{width:e.width,src:e.image})};function rt(){var e=Object(r.a)(["\n  width: 50%;\n  height: 200px;\n  color: #808080;\n  margin: 8px 16px;\n  text-align: left;\n"]);return rt=function(){return e},e}var at=d.b.div(rt());var ct=function(e){var n=e.UserData;return c.a.createElement(at,null,c.a.createElement("p",null,"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb"),c.a.createElement("p",null,c.a.createElement(tt,{width:"64px",image:n.profileUrl})))};function ot(){var e=Object(r.a)(["\n  color: black;\n"]);return ot=function(){return e},e}function ut(){var e=Object(r.a)(["\n  width: 50%;\n  height: 200px;\n  color: #808080;\n  margin: 8px 16px;\n  text-align: left;\n"]);return ut=function(){return e},e}var lt=d.b.div(ut()),it=d.b.p(ot());var dt=function(e){var n=e.UserData;return c.a.createElement(lt,null,c.a.createElement("p",null,"\u30e6\u30fc\u30b6\u540d"),c.a.createElement(it,null,n.name),c.a.createElement("p",null,"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"),c.a.createElement(it,null,n.email))};function pt(){var e=Object(r.a)(["\n  display: flex;\n  margin-top: 48px;\n  border-radius: 6px;\n  border: 1px solid #c0c0c0;\n"]);return pt=function(){return e},e}var st=d.b.div(pt());var bt=function(e){var n=e.UserData;return c.a.createElement(st,null,c.a.createElement(ct,{UserData:n}),c.a.createElement(dt,{UserData:n}))};function mt(){var e=Object(r.a)(["\n  margin: 24px;\n  font-size: 16px;\n"]);return mt=function(){return e},e}var ft=d.b.div(mt());var vt=function(e){var n=e.UserData;return c.a.createElement(ft,null,c.a.createElement(Z,{name:"Profile"}),c.a.createElement(bt,{UserData:n}))},ht=Object(l.b)((function(e){return{UserData:e.UserR}}))(vt);function gt(){var e=Object(r.a)(["\n  max-width: 896px;\n  margin: 0 auto;\n  padding: 32px 16px;\n"]);return gt=function(){return e},e}var Et=d.b.div(gt());var xt=function(){return c.a.createElement(Et,null,c.a.createElement(L.a,{exact:!0,path:"/",component:Zn}),c.a.createElement(L.a,{path:"/issue",component:$n}),c.a.createElement(L.a,{path:"/profile",component:ht}),c.a.createElement(L.a,{path:"/pullrequest",component:te}))},Ot=t(24),jt=t.n(Ot),wt={content:{position:"absolute",maxWidth:"800px",minWidth:"50px",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"",borderRadius:"4px",outline:"none",margin:"0 auto"}};jt.a.setAppElement("#root");var kt=function(e){var n=e.show,t=e.component;return c.a.createElement(jt.a,{isOpen:n,style:wt},t)},yt=Object(l.b)((function(e){return{show:e.ModalR.show,component:e.ModalR.component}}),(function(e){return{}}))(kt),It=t(17),Pt=t(37),At=t(38),Dt=t(39);It.b.add(Pt.a,At.a,Dt.a);var Ft=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p.a,{basename:"/redux-github-viewer"},c.a.createElement(z,null),c.a.createElement(xt,null),c.a.createElement(yt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var St=function(e,n){return n=(n=(n=n.replace(/YYYY/,e.getFullYear())).replace(/MM/,e.getMonth()+1)).replace(/DD/,e.getDate())}(new Date,"MM-DD-YYYY").toString(),Yt="Open",Mt={1:{id:1,title:"title1",status:Yt,description:"",createBy:"",createAt:St,updateAt:St},2:{id:2,title:"title2",status:Yt,description:"",createBy:"",createAt:St,updateAt:St},3:{id:3,title:"title3",status:Yt,description:"",createBy:"",createAt:St,updateAt:St}},Ut={index:Object.values(Mt).length,data:Mt};var Ct=t(40),_t={show:!1,component:[]};var Rt={name:"junwatanabe",email:"junwatanabe72@gmail.com",profileUrl:"https://avatars1.githubusercontent.com/u/50585862?s=460&u=64c7812edd7b65bdbe3e3fc57e6ac8a383a418af&v=4"};var Bt=Object(i.b)({IssueR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,n=arguments.length>1?arguments[1]:void 0,t=e.index,r=e.data,a=n.payload||{},c=a.issue,o=Object(re.a)({},r),u=t+1;switch(n.type){case"ADD_ISSUE":return o[u]=Object(re.a)({},c,{id:u}),Object(re.a)({},e,{index:u,data:o});case"REMOVE_ISSUE":for(var l in c)delete o[l];return Object(re.a)({},e,{data:o});case"UPDATE_ISSUE":return o[c.id]=Object(re.a)({},c),Object(re.a)({},e,{data:o});default:return e}},ModalR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"MODAL_PUSH":return Object(re.a)({},e,{component:[].concat(Object(Ct.a)(e.component),[n.payload.argComponent]),show:!0});case"MODAL_POP":return Object(re.a)({},e,{component:e.component.slice(0,-1),show:!1});default:return e}},UserR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt;return arguments.length>1&&arguments[1],e}});function Nt(){var e=Object(r.a)(["\n  html {\n    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;\n    line-height: 1.5;\n    font-size: 15px;\n    font-weight: 400; \n  }\n  body {\n    padding: 0;\n    margin: 0; \n  }\n  h2{\n    padding: 0;\n    margin: 0; \n  }\n  ul {\n    padding: 0;\n    margin: 0; \n  }\n  li {\n    list-style-type: none;\n  }\n  a {\n    text-decoration: none;\n    color: black;\n  }\n  textarea{\n    min-height: 150px;\n  }\n  a:visited {\n    color: none;\n  }\n"]);return Nt=function(){return e},e}var zt=Object(d.a)(Nt()),Lt=Object(i.c)(Bt,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(zt,null),c.a.createElement(l.a,{store:Lt},c.a.createElement(Ft,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.b5e67e97.chunk.js.map