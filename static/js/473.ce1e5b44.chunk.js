"use strict";(self.webpackChunkcryptocurrency_tracker=self.webpackChunkcryptocurrency_tracker||[]).push([[473],{6628:function(n,r,e){e.d(r,{Z:function(){return a}});var t=e(184),a=function(n){var r=n.classes,e=void 0===r?"enabled":r,a=n.isEnabled,o=void 0===a||a,c=n.clickHandler,i=void 0===c?function(){}:c,u=n.label,s=void 0===u?"":u;return(0,t.jsx)("button",{className:"".concat("BlueButton"," ").concat(e),onClick:i,disabled:!o,children:s})}},9258:function(n,r,e){e.d(r,{El:function(){return t.Z},aN:function(){return l}});e(9703),e(6804);var t=e(6628),a=e(1413),o=e(4554),c=e(3239),i=e(2791),u=e(1591),s=e(184),l=(0,i.memo)((function(){return(0,s.jsx)(o.Z,{sx:(0,a.Z)({},u.VS),children:(0,s.jsx)(c.Z,{sx:(0,a.Z)({},u.id),thickness:5,size:100})})}))},661:function(n,r,e){e.d(r,{Qr:function(){return b},z4:function(){return v},nK:function(){return d},dK:function(){return k},UD:function(){return h}});var t=e(4165),a=e(3433),o=e(5861),c=e(9439),i=e(4569),u=e.n(i),s=e(2791),l=e(9714),f=e(3110),d=function(){var n=(0,s.useState)(null),r=(0,c.Z)(n,2),e=r[0],i=r[1],d=(0,s.useState)(!1),p=(0,c.Z)(d,2),b=p[0],x=p[1],g=(0,s.useState)(!0),v=(0,c.Z)(g,2),y=v[0],m=v[1],w=h(),k=[],C=(0,s.useCallback)((function(){x(!0),w.error("No data fetched at all for given endpoints")}),[]),Z=function(){m(!1),k.length?i(k):C()},N=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(r,e){var o,c;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.length?(o=r.shift(),c=(0,a.Z)(r),u().get(o,{Apikey:"feca5a4838bd3042b5340fb60de7c44aadd2d20a178514c44947c3736be3558e"}).then((function(n){if(n.hasOwnProperty("data"))n.data.hasOwnProperty(e)?k.push(n.data[e]):k.push(l.W.na),c.length?N(c,e):Z();else{m(!1);var r=o||"unknown location";w.warning("Data for ".concat(r," was broken, corrupted or otherwise invalid"))}})).catch((function(n){var r=n.response?n.response.status:n;w.warning("Error ".concat(r," encountered when fetching data for ").concat(o)),c.length?N(c,e):Z()}))):(x(!0),w.error("Empty array of URLs passed to useAxiosArray as argument"));case 1:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}();return{data:e,error:b,loading:y,fetchHistoricalPrices:function(n,r){N(f.pi.historical(n,r),r)}}},p=e(9244),h=function(){var n=(0,p.Ds)().enqueueSnackbar;return{info:function(r){n(r,{variant:"info"})},error:function(r){n(r,{variant:"error"})},success:function(r){n(r,{variant:"success"})},warning:function(r){n(r,{variant:"warning"})}}},b=function(){h();var n=(0,s.useRef)(!1);return n.current=!0,n.current},x=e(7689),g=e(3688),v=function(n){var r=n.currencyBase,e=n.currencyCrypto,t=(0,x.s0)(),a=(0,s.useContext)(g.P),o=a.setCurrencyBase,c=a.setCurrencyCrypto,i=!(!r||!e),u=i?"exchange rate for pair ".concat(e.label,":").concat(r):void 0;return{confirmChoice:(0,s.useCallback)((function(){o(r),c(e),u&&t(u,{state:{results:u}})}),[u]),isEnabled:i}},y=e(9478),m=e(1933),w=function(n){var r=n.data.Data,e=[];for(var t in r)r.hasOwnProperty(t)&&e.push({value:t,label:r[t].CoinName,image:r[t].ImageUrl,description:r[t].Description});return e},k=function(){var n=h(),r=(0,m.useQuery)([URL],(function(){return u()(y.v2.get("all"))}),{staleTime:3e5,cacheTime:3e5,select:function(n){return w(n)}}),e=r.isLoading,t=r.error,a=r.data;return(0,s.useEffect)((function(){t&&n.error("B\u0142\u0105d pobierania listy kryptowalut")}),[t]),{isLoading:e,data:a}}},4473:function(n,r,e){e.r(r),e.d(r,{default:function(){return y}});var t=e(4165),a=e(5861),o=e(9439),c=e(2791),i=e(4569),u=e.n(i),s=e(7689),l=e(1933),f=e(661),d=e(9258),p=e(3110),h=e(9478),b=e(3688),x=e(184),g=c.lazy((function(){return Promise.all([e.e(686),e.e(719),e.e(239)]).then(e.bind(e,6239))})),v=c.lazy((function(){return e.e(200).then(e.bind(e,200))})),y=function(){var n=(0,s.s0)(),r=(0,f.UD)(),e=c.useContext(b.P),i=e.currencyBase,y=e.currencyCrypto,m=h.Ed,w=p.pi.current(y.value,i),k=c.useState(null),C=(0,o.Z)(k,2),Z=C[0],N=C[1],S=(0,l.useQuery)("currentCrypto",(0,a.Z)((0,t.Z)().mark((function n(){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(0,p.l4)(m)&&D(y,i),n.next=3,u().get(w,{Apikey:"feca5a4838bd3042b5340fb60de7c44aadd2d20a178514c44947c3736be3558e"});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)}))),{refetchInterval:m}),E=S.data,P=S.error,j=(0,f.nK)(),B=j.data,D=j.fetchHistoricalPrices,L=c.useCallback((function(){n("/")}),[]);return c.useEffect((function(){D(y,i)}),[]),c.useEffect((function(){if(E&&B){var n=E[i];"number"===typeof n?r.success("Zmiana"):r.info("Na serwerze nie ma danych o bie\u017c\u0105cym kursie kryptowaluty");var e=(0,p.DK)({cryptoPrice:n,historicalCryptoPrice:B,currencyBase:i});JSON.stringify(Z)!==JSON.stringify(e)&&N(e)}}),[E,B]),(0,x.jsxs)(x.Fragment,{children:[(P||!Z)&&(0,x.jsx)(c.Suspense,{fallback:null,children:(0,x.jsx)(v,{crypto:y.label,result:Boolean(Z),error:P})}),(0,x.jsx)(d.El,{label:"Powr\xf3t do wyboru",clickHandler:L}),Z&&(0,x.jsx)(c.Suspense,{fallback:null,children:(0,x.jsx)(g,{currencyCrypto:y,results:Z})})]})}},1591:function(n,r,e){e.d(r,{VS:function(){return c},ad:function(){return s},ap:function(){return i},id:function(){return o},l8:function(){return l},nl:function(){return u}});var t="#EE760A",a="#1E1F26",o={color:"rgba(122, 194, 33, 0.8);"},c={margin:"0 auto",display:"flex",flexDirection:"column",height:"100vh",alignItems:"center",background:"transparent",paddingTop:"10vh",justifyContent:"center"},i={backgroundColor:"#F5C200",border:"1px solid ".concat(t),boxShadow:"inset 0 0 5px ".concat(t),color:"rgba(0, 0, 0, 0.87)",fontSize:11},u={width:"100%",paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",marginTop:"30vh"},s={borderRadius:"2px",animation:"fade_in 0.1s ease-in-out forwards",border:"2px solid ".concat(a),padding:"20px",width:"300px",boxShadow:"inset 0 0 5px ".concat(a,", 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)"),backgroundColor:"#2C303A",color:"white",tabindex:"0","&:hover":{border:"2px solid ".concat(t)},"&:focus":{border:"2px solid red"},"& .MuiFormLabel-root":{color:"white",fontFamily:'"Lato", sans-serif',paddingBottom:"5px"},"& .MuiFormGroup-root":{flexDirection:"row",justifyContent:"space-around"}},l={textAlign:"center",color:"white","&:focus":{color:"white"},"&.Mui-focused":{color:"white"}}},4554:function(n,r,e){e.d(r,{Z:function(){return b}});var t=e(7462),a=e(3366),o=e(2791),c=e(8182),i=e(5783),u=e(104),s=e(8519),l=e(418),f=e(184),d=["className","component"];var p=e(5902),h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.defaultTheme,e=n.defaultClassName,p=void 0===e?"MuiBox-root":e,h=n.generateClassName,b=(0,i.ZP)("div",{shouldForwardProp:function(n){return"theme"!==n&&"sx"!==n&&"as"!==n}})(u.Z);return o.forwardRef((function(n,e){var o=(0,l.Z)(r),i=(0,s.Z)(n),u=i.className,x=i.component,g=void 0===x?"div":x,v=(0,a.Z)(i,d);return(0,f.jsx)(b,(0,t.Z)({as:g,ref:e,className:(0,c.default)(u,h?h(p):p),theme:o},v))}))}({defaultTheme:(0,e(7107).Z)(),defaultClassName:"MuiBox-root",generateClassName:p.Z.generate}),b=h}}]);
//# sourceMappingURL=473.ce1e5b44.chunk.js.map