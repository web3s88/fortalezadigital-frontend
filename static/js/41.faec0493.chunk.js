(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[41],{1608:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));var i,o=n(8),c=n(9),r=n(0),l=n(6),u=n(2),d=n(114),a=n(13),s=n(24),b=n(504),j=n(126),O=n(129),x=n(49),f=n(303),h=n(304),p=n(343),m=n(1),v=Object(l.e)(u.A)(i||(i=Object(c.a)(["\n  background-color: ",";\n"])),(function(t){return t.theme.colors.dropdownDeep}));function k(){var t=Object(s.a)().account,e=Object(a.b)().t,n=Object(x.n)(),i=Object(r.useMemo)((function(){return n.map((function(t){return{liquidityToken:Object(x.a)(t),tokens:t}}))}),[n]),c=Object(r.useMemo)((function(){return i.map((function(t){return t.liquidityToken}))}),[i]),l=Object(j.f)(null!==t&&void 0!==t?t:void 0,c),k=Object(o.a)(l,2),y=k[0],g=k[1],q=Object(r.useMemo)((function(){return i.filter((function(t){var e,n=t.liquidityToken;return null===(e=y[n.address])||void 0===e?void 0:e.greaterThan("0")}))}),[i,y]),w=Object(O.c)(q.map((function(t){return t.tokens}))),D=g||(null===w||void 0===w?void 0:w.length)<q.length||(null===w||void 0===w?void 0:w.some((function(t){return!t}))),A=w.map((function(t){return Object(o.a)(t,2)[1]})).filter((function(t){return Boolean(t)}));return Object(m.jsx)(p.a,{children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(h.b,{title:e("Your Liquidity"),subtitle:e("Remove liquidity to receive tokens back")}),Object(m.jsxs)(v,{children:[t?D?Object(m.jsx)(u.Dc,{color:"textSubtle",textAlign:"center",children:Object(m.jsx)(f.a,{children:e("Loading")})}):(null===A||void 0===A?void 0:A.length)>0?A.map((function(t,e){return Object(m.jsx)(b.b,{pair:t,mb:e<A.length-1?"16px":0},t.liquidityToken.address)})):Object(m.jsx)(u.Dc,{color:"textSubtle",textAlign:"center",children:e("No liquidity found.")}):Object(m.jsx)(u.Dc,{color:"textSubtle",textAlign:"center",children:e("Connect to a wallet to view your liquidity.")}),t&&!D&&Object(m.jsxs)(u.bb,{flexDirection:"column",alignItems:"center",mt:"24px",children:[Object(m.jsx)(u.Dc,{color:"textSubtle",mb:"8px",children:e("Don't see a pool you joined?")}),Object(m.jsx)(u.u,{id:"import-pool-link",variant:"secondary",scale:"sm",as:d.a,to:"/find",children:e("Find other LP tokens")})]})]}),Object(m.jsx)(u.B,{style:{textAlign:"center"},children:Object(m.jsx)(u.u,{id:"join-pool-button",as:d.a,to:"/add",width:"100%",startIcon:Object(m.jsx)(u.a,{color:"white"}),children:e("Add Liquidity")})})]})})}}}]);
//# sourceMappingURL=41.faec0493.chunk.js.map