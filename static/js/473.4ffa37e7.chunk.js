"use strict";(self.webpackChunkcryptocurrency_tracker=self.webpackChunkcryptocurrency_tracker||[]).push([[473],{3043:function(r,e,n){n.d(e,{kt:function(){return k},Qr:function(){return p},z4:function(){return m},y1:function(){return C},nK:function(){return d},dK:function(){return j},UD:function(){return h.Z}});var t=n(4165),a=n(3433),c=n(5861),i=n(9439),s=n(4569),o=n.n(s),u=n(2791),l=n(9714),f=n(3110),d=function(){var r=(0,u.useState)(null),e=(0,i.Z)(r,2),n=e[0],s=e[1],d=(0,u.useState)(!1),p=(0,i.Z)(d,2),y=p[0],v=p[1],m=k(!0),x=(0,i.Z)(m,3),g=x[0],b=x[2],j=(0,h.Z)(),w=[],Z=(0,u.useCallback)((function(){v(!0),j.error("No data fetched at all for given endpoints")}),[]),C=function(){b(),w.length?s(w):Z()},N=function(){var r=(0,c.Z)((0,t.Z)().mark((function r(e,n){var c,i;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.length?(c=e.shift(),i=(0,a.Z)(e),c&&o().get(c,{Apikey:"feca5a4838bd3042b5340fb60de7c44aadd2d20a178514c44947c3736be3558e"}).then((function(r){if(r.hasOwnProperty("data"))r.data.hasOwnProperty(n)?w.push(r.data[n]):w.push(l.W.na),i.length?N(i,n):C();else{b();var e=c||"unknown crypto";j.warning("Data for ".concat(e," was broken, corrupted or otherwise invalid"))}})).catch((function(r){var e=r.response?r.response.status:r;j.warning("Error ".concat(e," encountered when fetching data for ").concat(c)),i.length?N(i,n):C()}))):(v(!0),j.error("Empty array of URLs passed to useAxiosArray as argument"));case 1:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}();return{data:n,error:y,loading:g,fetchHistoricalPrices:function(r,e){N(f.pi.historical(r,e),e)}}},h=n(6333),p=function(){(0,h.Z)();var r=(0,u.useRef)(!1);return r.current=!0,r.current},y=n(7689),v=n(3688),m=function(r){var e=r.currencyBase,n=r.currencyCrypto,t=(0,y.s0)(),a=(0,u.useContext)(v.P),c=a.setCurrencyBase,i=a.setCurrencyCrypto,s=!(!e||!n),o=s?"exchange rate for pair ".concat(n.label,":").concat(e):void 0;return{confirmChoice:(0,u.useCallback)((function(){c(e),i(n),o&&t(o,{state:{results:o}})}),[o]),isEnabled:s}},x=n(9478),g=n(1933),b=function(r){var e=r.data.Data,n=[];for(var t in e)e.hasOwnProperty(t)&&n.push({value:t,label:e[t].CoinName,image:e[t].ImageUrl,description:e[t].Description});return n},j=function(){var r=(0,h.Z)(),e=(0,g.useQuery)([URL],(function(){return o()(x._n.get("all"))}),{staleTime:3e5,cacheTime:3e5,select:function(r){return b(r)}}),n=e.isLoading,t=e.error,a=e.data;return(0,u.useEffect)((function(){t&&r.error("B\u0142\u0105d pobierania listy kryptowalut")}),[t]),{isLoading:n,data:a}};var k=function(){var r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(0,u.useState)(r),n=(0,i.Z)(e,2),t=n[0],a=n[1],c=(0,u.useCallback)((function(){a(!1)}),[]),s=(0,u.useCallback)((function(){a(!t)}),[t]);return[t,function(){a(!0)},c,s]},w=n(8573),Z=n.n(w),C=function(r,e){return(0,u.useCallback)(Z()((function(){r(e)}),200),[r])}},8819:function(r,e,n){n.r(e);var t=n(3043),a=n(5903),c=n(184);e.default=function(r){var e=r.isOK,n=r.error,i=r.crypto,s=(0,t.UD)();return n&&s.error("Podczas pobierania danych bie\u017c\u0105cych dla ".concat(i," wyst\u0105pi\u0142 b\u0142\u0105d ")),e?null:(0,c.jsx)(a.aN,{})}},6499:function(r,e,n){n.r(e),n.d(e,{default:function(){return s}});var t=n(3208),a=n(8850),c=n(4154),i=n(184),s=function(r){var e=r.currencyCrypto,n=r.results;return(0,i.jsx)(c.z,{children:(0,i.jsx)(t.Z,{in:!0,timeout:1e3,children:(0,i.jsxs)("section",{className:"DataContainer","aria-label":"query data",children:[(0,i.jsx)(a.Hc,{currencyCryptoName:e.label}),e.imageURL&&(0,i.jsx)(a.TR,{imageURL:e.imageURL}),(0,i.jsxs)("div",{className:"PricesWithButtons",children:[n.currentPrice&&(0,i.jsx)(a.Wc,{currentPrice:n.currentPrice}),n.changes&&(0,i.jsx)(a.Jk,{changesArray:n.changes}),(0,i.jsx)(a.Rr,{})]})]})})})}},8850:function(r,e,n){n.d(e,{Jk:function(){return m},Wc:function(){return c},Hc:function(){return s},Rr:function(){return d},TR:function(){return p},pA:function(){return g}});n(8819);var t=n(890),a=n(184),c=function(r){var e=r.currentPrice;return(0,a.jsxs)("div",{className:"cell",children:[(0,a.jsx)(t.Z,{variant:"purpleText",children:Object.values(e)[0]}),(0,a.jsx)(t.Z,{variant:"greyText",children:Object.keys(e)[0]})]})},i=n(2791),s=(0,i.memo)((function(r){var e=r.currencyCryptoName;return(0,a.jsxs)("div",{className:"GeneralInformation",children:[(0,a.jsx)("div",{className:"title",children:e}),(0,a.jsx)("div",{className:"foundation",children:"".concat(e," foundation")}),(0,a.jsx)("div",{className:"altcoins",children:"Altcoins - hightest growth"})]})})),o=n(6151),u=n(2150),l={backgroundColor:"#F5C200",border:'1px solid "#EE760A"',boxShadow:'inset 0 0 5px "#EE760A"',color:"rgba(0, 0, 0, 0.87)",fontSize:11},f=function(){return(0,a.jsx)("div",{className:"cell",children:(0,a.jsx)("div",{className:"InvestWrapper",children:(0,a.jsx)(u.Z,{componentsProps:{tooltip:{sx:l}},title:"Ta funkcjonalno\u015b\u0107 nie jest jeszcze zaimplementowana",placement:"top-start",children:(0,a.jsx)(o.Z,{variant:"contained",color:"error",size:"small",children:"Inwestuj"})})})})},d=(0,i.memo)(f),h=n(9478),p=function(r){var e=r.imageURL,n=h._n.get("general")+e+"?width=30";return(0,a.jsx)("img",{className:"logo",src:n,alt:"Logo"})},y=(n(6499),n(6666)),v=n.n(y),m=function(r){var e=r.changesArray;return(0,a.jsx)(a.Fragment,{children:e.map((function(r){return(0,a.jsxs)("div",{className:"cell",children:[(0,a.jsx)(t.Z,{variant:"purpleText",children:Object.values(r)[0]},v()()),(0,a.jsx)(t.Z,{variant:"greyText",children:Object.keys(r)[0]},v()())]},v()())}))})},x=(n(4154),function(r){var e=r.text;return(0,a.jsx)("h1",{role:"banner",className:"sr-only",children:e})}),g=i.memo(x)},4154:function(r,e,n){n.d(e,{z:function(){return c}});var t=n(3457),a=n(4554),c=(0,t.Z)(a.Z)((function(r){var e=r.theme;return{width:"100%",paddingRight:e.spacing(2),paddingLeft:e.spacing(2),marginRight:"auto",marginLeft:"auto",marginTop:"30vh"}}))},4473:function(r,e,n){n.r(e),n.d(e,{default:function(){return b}});var t=n(4165),a=n(5861),c=n(9439),i=n(2791),s=n(4569),o=n.n(s),u=n(7689),l=n(1933),f=n(3043),d=n(5903),h=n(3110),p=n(9478),y=n(3688),v=n(8850),m=n(184),x=i.lazy((function(){return Promise.resolve().then(n.bind(n,6499))})),g=i.lazy((function(){return Promise.resolve().then(n.bind(n,8819))})),b=function(){var r=(0,u.s0)(),e=(0,f.UD)(),n=i.useContext(y.P),s=n.currencyBase,b=n.currencyCrypto,j=p.XJ,k=h.pi.current(b.value,s),w=i.useState(null),Z=(0,c.Z)(w,2),C=Z[0],N=Z[1],P=(0,l.useQuery)("currentCrypto",(0,a.Z)((0,t.Z)().mark((function r(){var e;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(0,h.l4)(j)&&L(b,s),r.next=3,o().get(k,{Apikey:"feca5a4838bd3042b5340fb60de7c44aadd2d20a178514c44947c3736be3558e"});case 3:return e=r.sent,r.abrupt("return",e.data);case 5:case"end":return r.stop()}}),r)}))),{refetchInterval:j}),R=P.data,z=P.error,A=(0,f.nK)(),E=A.data,L=A.fetchHistoricalPrices,O=(0,f.y1)(r,"/");return i.useEffect((function(){L(b,s)}),[]),i.useEffect((function(){if(R&&E){var r=R[s];"number"===typeof r?e.success("Zmiana"):e.info("Na serwerze nie ma danych o bie\u017c\u0105cym kursie kryptowaluty");var n=(0,h.DK)({cryptoPrice:r,historicalCryptoPrice:E,currencyBase:s});JSON.stringify(C)!==JSON.stringify(n)&&N(n)}}),[R,E]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v.pA,{text:"Results of query"}),(0,m.jsxs)("main",{children:[(z||!C)&&(0,m.jsx)(i.Suspense,{fallback:null,children:(0,m.jsx)(g,{crypto:b.label,isOK:Boolean(C),error:z})}),C&&(0,m.jsx)(d.El,{label:"Powr\xf3t do wyboru",clickHandler:O}),C&&(0,m.jsx)(i.Suspense,{fallback:null,children:(0,m.jsx)(x,{currencyCrypto:b,results:C})})]})]})}}}]);
//# sourceMappingURL=473.4ffa37e7.chunk.js.map