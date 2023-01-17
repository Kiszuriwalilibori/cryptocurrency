"use strict";(self.webpackChunkcryptocurrency_tracker=self.webpackChunkcryptocurrency_tracker||[]).push([[473],{1605:function(n,r,e){e.d(r,{D:function(){return f}});var t=e(2791),a=e(1971),c=e(5720),o=e(9691),u=e(184),i=(0,o.Z)({root:{margin:"0 auto",display:"flex",flexDirection:"column",height:"100vh",alignItems:"center",background:"transparent",paddingTop:"10vh"}})(a.Z),s=(0,o.Z)({root:{justifyContent:"center"}})(i),f=(0,o.Z)({root:{color:"rgba(122, 194, 33, 0.8);"}})(c.Z),l=(0,t.memo)((function(){return(0,u.jsx)(s,{children:(0,u.jsx)(f,{thickness:5,size:100})})}));r.Z=l},4419:function(n,r,e){e.d(r,{El:function(){return a},aN:function(){return c.Z}});e(9703),e(2679);var t=e(184),a=function(n){var r=n.classes,e=void 0===r?"enabled":r,a=n.isEnabled,c=void 0===a||a,o=n.clickHandler,u=void 0===o?function(){}:o,i=n.label,s=void 0===i?"":i;return(0,t.jsx)("button",{className:"".concat("BlueButton"," ").concat(e),onClick:u,disabled:!c,children:s})},c=e(1605)},1253:function(n,r,e){e.d(r,{Qr:function(){return b},nK:function(){return p},UD:function(){return v}});var t=e(2982),a=e(5861),c=e(885),o=e(7757),u=e.n(o),i=e(4569),s=e.n(i),f=e(2791),l=e(9714),d=e(4150),p=function(){var n=(0,f.useState)(null),r=(0,c.Z)(n,2),e=r[0],o=r[1],i=(0,f.useState)(!1),p=(0,c.Z)(i,2),h=p[0],y=p[1],b=(0,f.useState)(!0),g=(0,c.Z)(b,2),k=g[0],w=g[1],x=v(),m=[],Z=(0,f.useCallback)((function(){y(!0),x.error("No data fetched at all for given endpoints")}),[]),C=function(){w(!1),m.length?o(m):Z()},j=function(){var n=(0,a.Z)(u().mark((function n(r,e){var a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.length?(a=r.shift(),c=(0,t.Z)(r),s().get(a,{Apikey:"feca5a4838bd3042b5340fb60de7c44aadd2d20a178514c44947c3736be3558e"}).then((function(n){if(n.hasOwnProperty("data"))n.data.hasOwnProperty(e)?m.push(n.data[e]):m.push(l.W.na),c.length?j(c,e):C();else{w(!1);var r=a||"unknown location";x.warning("Data for ".concat(r," was broken, corrupted or otherwise invalid"))}})).catch((function(n){var r=n.response?n.response.status:n;x.warning("Error ".concat(r," encountered when fetching data for ").concat(a)),c.length?j(c,e):C()}))):(y(!0),x.error("Empty array of URLs passed to useAxiosArray as argument"));case 1:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}();return{data:e,error:h,loading:k,fetchHistoricalPrices:function(n,r){j(d.pi.historical(n,r),r)}}},h=e(5025),y={404:"Not found"};y=new Proxy(y,{get:function(n,r){return r in n?n[r]:r}});e(9478);var v=function(){var n=(0,h.Ds)().enqueueSnackbar;return{info:function(r){n(r,{variant:"info"})},error:function(r){n(r,{variant:"error"})},success:function(r){n(r,{variant:"success"})},warning:function(r){n(r,{variant:"warning"})}}},b=function(){v();var n=(0,f.useRef)(!1);return n.current=!0,n.current};e(2978)},4473:function(n,r,e){e.r(r),e.d(r,{default:function(){return w}});var t=e(5861),a=e(885),c=e(7757),o=e.n(c),u=e(2791),i=e(4569),s=e.n(i),f=e(7689),l=e(1933),d=e(1253),p=e(4419),h=e(4150),y=e(9478),v=e(14),b=e(184),g=u.lazy((function(){return Promise.all([e.e(60),e.e(888),e.e(777)]).then(e.bind(e,8777))})),k=u.lazy((function(){return e.e(200).then(e.bind(e,200))})),w=function(){var n=(0,f.s0)(),r=(0,d.UD)(),e=u.useContext(v.P),c=e.currencyBase,i=e.currencyCrypto,w=y.Ed,x=h.pi.current(i.value,c),m=u.useState(null),Z=(0,a.Z)(m,2),C=Z[0],j=Z[1],P=(0,l.useQuery)("currentCrypto",(0,t.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(0,h.l4)(w)&&B(i,c),n.next=3,s().get(x,{Apikey:"feca5a4838bd3042b5340fb60de7c44aadd2d20a178514c44947c3736be3558e"});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)}))),{refetchInterval:w}),S=P.data,E=P.error,D=(0,d.nK)(),N=D.data,B=D.fetchHistoricalPrices,z=u.useCallback((function(){n("/")}),[]);return u.useEffect((function(){B(i,c)}),[]),u.useEffect((function(){if(S&&N){var n=S[c];"number"===typeof n?r.success("Zmiana"):r.info("Na serwerze nie ma danych o bie\u017c\u0105cym kursie kryptowaluty");var e=(0,h.DK)({cryptoPrice:n,historicalCryptoPrice:N,currencyBase:c});JSON.stringify(C)!==JSON.stringify(e)&&j(e)}}),[S,N]),(0,b.jsxs)(b.Fragment,{children:[(E||!C)&&(0,b.jsx)(u.Suspense,{fallback:null,children:(0,b.jsx)(k,{crypto:i.label,result:Boolean(C),error:E})}),(0,b.jsx)(p.El,{label:"Powr\xf3t do wyboru",clickHandler:z}),C&&(0,b.jsx)(u.Suspense,{fallback:null,children:(0,b.jsx)(g,{currencyCrypto:i,results:C})})]})}}}]);
//# sourceMappingURL=473.4214936c.chunk.js.map