(this.webpackJsonpgato=this.webpackJsonpgato||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(6),a=n.n(s),o=n(2),i=n(7),j=(n(12),n(0));var l=function(e){for(var t=[],n=0;n<3;n++){t[n]=[];for(var r=0;r<3;r++)t[n][r]={x:n,y:r,content:0}}var s=Object(c.useState)(t),a=Object(o.a)(s,2),l=a[0],b=a[1],u=Object(c.useState)(!0),d=Object(o.a)(u,2),O=d[0],f=d[1],h=Object(c.useState)(!1),x=Object(o.a)(h,2),v=x[0],m=x[1],p=Object(c.useState)(0),y=Object(o.a)(p,2),N=y[0],g=y[1],C=function(e,t){var n=[[[0,0],[1,1],[2,2]],[[0,2],[1,1],[2,0]],[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]]];t[e.x][e.y].content=O?"X":"\u25ef";for(var c=0;c<n.length;c++){var r=Object(o.a)(n[c],3),s=r[0],a=r[1],i=r[2];t[s[0]][s[1]].content&&t[s[0]][s[1]].content===t[a[0]][a[1]].content&&t[s[0]][s[1]].content===t[i[0]][i[1]].content&&(g(O?"X":"\u25ef"),m(!0))}return t};return Object(c.useEffect)((function(){if(v)0!==N&&alert((O?"\u25ef":"X")+" Win");else{for(var e=!0,t=0;t<3;t++)for(var n=0;n<3;n++)0===l[t][n].content&&(e=!1);e&&(alert("It\xb4s a tie"),m(!0))}}),[l,v,N,O]),1===e.players?Object(j.jsx)("div",{children:"En proceso"}):2===e.players?Object(j.jsxs)("div",{className:"grid",children:[l.map((function(e,t){return Object(j.jsx)("div",{children:e.map((function(e,t){return Object(j.jsx)("div",{className:"d-inline-flex",children:Object(j.jsx)("div",{className:"border border-dark",onClick:function(){var t;0!==(t=e).content||v||(b(C(t,Object(i.a)(l))),f(!O))},children:Object(j.jsx)("p",{className:"X"===e.content?"eq text-center":"\u25ef"===e.content?"ou text-center":"text-center",children:0===e.content?"\u200e\u200e\u200f\u200f\u200e \u200e":e.content})})},t)}))},t)})),v?Object(j.jsx)("button",{className:"btn btn-primary reset",onClick:function(){return function(){for(var e=[],t=0;t<3;t++){e[t]=[];for(var n=0;n<3;n++)e[t][n]={x:t,y:n,content:0}}b(e),f(!0),m(!1),g(0)}()},children:"Reset"}):Object(j.jsxs)("h2",{className:"turn",children:["Turn of",Object(j.jsxs)("span",{className:O?"eq":"ou",children:[" ",O?"X":"\u25ef"]})]})]}):void 0},b=(n(14),function(e){return Object(j.jsxs)("div",{className:"selection container",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{className:"text-center",children:"tic-tac-toe on React"})}),Object(j.jsxs)("section",{children:[Object(j.jsx)("h3",{className:"text-center par",children:"Choose the number of players"}),Object(j.jsxs)("div",{className:"center",children:[Object(j.jsx)("button",{className:"btn btn-primary disabled",onClick:function(){return e.setPlayers(1)},children:"1"}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.setPlayers(2)},children:"2"})]})]})]})});var u=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(j.jsx)("div",{className:"container",children:0===n?Object(j.jsx)(b,{setPlayers:r}):Object(j.jsx)(l,{players:n})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(15);a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),d()}},[[16,1,2]]]);
//# sourceMappingURL=main.f93ca1da.chunk.js.map