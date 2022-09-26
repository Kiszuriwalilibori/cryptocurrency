"use strict";(self.webpackChunkcryptocurrency_tracker=self.webpackChunkcryptocurrency_tracker||[]).push([[416],{1605:function(e,n,r){r.d(n,{D:function(){return l}});var t=r(2791),a=r(1971),c=r(5720),o=r(9691),i=r(184),s=(0,o.Z)({root:{margin:"0 auto",display:"flex",flexDirection:"column",height:"100vh",alignItems:"center",background:"transparent",paddingTop:"10vh"}})(a.Z),u=(0,o.Z)({root:{justifyContent:"center"}})(s),l=(0,o.Z)({root:{color:"rgba(122, 194, 33, 0.8);"}})(c.Z),d=(0,t.memo)((function(){return(0,i.jsx)(u,{children:(0,i.jsx)(l,{thickness:5,size:100})})}));n.Z=d},3461:function(e,n,r){r.d(n,{El:function(){return a},aN:function(){return c.Z}});r(6367),r(8464);var t=r(184),a=function(e){var n=e.classes,r=void 0===n?"enabled":n,a=e.isEnabled,c=void 0===a||a,o=e.clickHandler,i=void 0===o?function(){}:o,s=e.label,u=void 0===s?"":s;return(0,t.jsx)("button",{className:"".concat("BlueButton"," ").concat(r),onClick:i,disabled:!c,children:u})},c=r(1605)},426:function(e,n,r){r.d(n,{nK:function(){return h},ix:function(){return y}});var t=r(1413),a=r(2982),c=r(5861),o=r(885),i=r(7757),s=r.n(i),u=r(4569),l=r.n(u),d=r(2791),f=r(5025),p=r(9714),x=r(1458),h=function(){var e=(0,d.useState)(null),n=(0,o.Z)(e,2),r=n[0],i=n[1],u=(0,d.useState)(!1),h=(0,o.Z)(u,2),v=h[0],y=h[1],b=(0,d.useState)(!0),g=(0,o.Z)(b,2),j=g[0],C=g[1],k=(0,f.Ds)().enqueueSnackbar,m=[],Z=(0,d.useCallback)((function(){y(!0),k("No data fetched at all for given endpoints",{variant:"error"})}),[]),w=function(){C(!1),m.length?i(m):Z()},S=function(){var e=(0,c.Z)(s().mark((function e(n,r){var c,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.length?(c=n.shift(),o=(0,a.Z)(n),l().get(c,{Apikey:"feca5a4838bd3042b5340fb60de7c44aadd2d20a178514c44947c3736be3558e"}).then((function(e){var n=(0,t.Z)({},e);e.hasOwnProperty("data")?(n.data.hasOwnProperty(r)?m.push(n.data[r]):m.push(p.W.na),o.length?S(o,r):w()):(C(!1),k("Data for ".concat(c||"unknown location"," was broken, corrupted or otherwise invalid"),{variant:"warning"}))})).catch((function(e){var n=e.response?e.response.status:e;k("Error ".concat(n," encountered when fetching data for ").concat(c),{variant:"warning"}),o.length?S(o,r):w()}))):(y(!0),k("Empty array of URLs passed to useAxiosArray as argument",{variant:"error"}));case 1:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}();return{data:r,error:v,loading:j,fetchHistoricalPrices:function(e,n){S(x.pi.historical(e,n),n)}}},v={404:"Not found"};v=new Proxy(v,{get:function(e,n){return n in e?e[n]:n}});var y=r(2978).v9},5416:function(e,n,r){r.r(n),r.d(n,{default:function(){return B}});var t=r(885),a=r(2791),c=r(9348),o=r(2475),i=r(7263),s=r(8983),u=r(9691),l=r(304),d=(0,u.Z)({root:{borderRadius:"2px",animation:"fade_in 0.1s ease-in-out forwards",border:"2px solid #1E1F26",padding:"20px",width:"300px",margin:"2vh 0",boxShadow:"inset 0 0 5px #1E1F26, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)",backgroundColor:"#2C303A",color:"white",tabindex:"0","&:hover":{border:"2px solid #EE760A"},"&:focus":{border:"2px solid red"},"& .MuiFormLabel-root":{color:"white",fontFamily:'"Lato", sans-serif',paddingBottom:"5px"},"& .MuiFormGroup-root":{flexDirection:"row",justifyContent:"space-around"},"& .MuiRadio-colorSecondary.Mui-checked":{color:"#EE760A"},"& legend":{textAlign:"center"}}})(l.Z),f=r(184),p=function(e){var n=e.currencyBase,r=e.setCurrencyBase;return(0,f.jsxs)(d,{children:[(0,f.jsx)(s.Z,{component:"legend",children:"Waluta odniesienia"}),(0,f.jsxs)(o.Z,{"aria-label":"currency",name:"currency",value:n,onChange:function(e){r(e.target.value)},children:[(0,f.jsx)(i.Z,{value:"PLN",control:(0,f.jsx)(c.Z,{}),label:"PLN"}),(0,f.jsx)(i.Z,{value:"USD",control:(0,f.jsx)(c.Z,{}),label:"USD"}),(0,f.jsx)(i.Z,{value:"EUR",control:(0,f.jsx)(c.Z,{}),label:"EUR"})]})]})},x=r(4065),h=r(426),v=r(2978),y=r(1088),b=r(5025),g=r(1458),j=r(1605),C=function(e){var n=e.children,r=(0,a.useRef)({fetchingListActive:!1,listReceived:!1}),c=(0,b.Ds)().enqueueSnackbar,o=(0,h.ix)((function(e){return e.listOfAllCryptos}),v.wU),i=(0,v.I0)(),s=(0,y.useLazyAxios)({url:"https://min-api.cryptocompare.com/data/all/coinlist"}),u=(0,t.Z)(s,2),l=u[0],d=u[1],p=d.data,x=d.error,C=d.loading;return(0,a.useEffect)((function(){x&&c("B\u0142\u0105d pobierania listy kryptowalut",{variant:"error"})}),[x]),(0,a.useEffect)((function(){if(p&&!r.current.listReceived){var e=(0,g.JD)(p);i({type:"LIST_OF_ALL_CRYPTOS_SET",payload:e})}}),[p,r.current.listReceived]),o||r.current.fetchingListActive||(r.current.fetchingListActive=!0,l()),o&&!r.current.listReceived&&(r.current.listReceived=!0),(0,f.jsxs)(f.Fragment,{children:[n,C&&(0,f.jsx)(j.D,{thickness:5,size:100})]})},k=function(e){var n=e.currencyCrypto,r=e.setCurrencyCrypto,t=(0,h.ix)((function(e){return e.listOfAllCryptos}),v.wU),a=t&&t.length?"":"inactivatedSelect";return(0,f.jsx)(C,{children:(0,f.jsx)("label",{className:a,children:(0,f.jsx)(x.Z,{value:n,className:"virtualized-select",placeholder:"Wybierz kryptowalut\u0119",onChange:function(e){r(e)},options:t})})})},m=r(9271),Z=r(14),w=r(3461),S=function(e){var n=e.currencyBase,r=e.currencyCrypto,t=(0,m.k6)(),c=(0,a.useContext)(Z.P),o=c.setCurrencyBase,i=c.setCurrencyCrypto,s=!(!n||!r),u=s?"/".concat(r.label," / ").concat(n):void 0,l=(0,a.useCallback)((function(){o(n),i(r),u&&t.push(u)}),[u]);return(0,f.jsx)(w.El,{classes:s?"enabled":"",isEnabled:s,clickHandler:l,label:"Poka\u017c kurs"})},E=r(1413),A=(0,a.memo)((function(){return(0,f.jsx)("header",{className:"logo",children:(0,f.jsx)("h1",{children:"CryptoCurrency Tracker"})})}));var L=function(e){return function(n){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(A,{}),(0,f.jsx)(e,(0,E.Z)({},n))]})}},R=(0,a.lazy)((function(){return r.e(360).then(r.bind(r,4360))})),B=L((function(){var e=(0,a.useState)(null),n=(0,t.Z)(e,2),r=n[0],c=n[1],o=(0,a.useState)(void 0),i=(0,t.Z)(o,2),s=i[0],u=i[1];return(0,f.jsxs)("section",{className:"SelectionSection",children:[(0,f.jsx)(S,{currencyBase:r,currencyCrypto:s}),(0,f.jsx)(p,{currencyBase:r,setCurrencyBase:c}),(0,f.jsx)(k,{currencyCrypto:s,setCurrencyCrypto:u}),(null===s||void 0===s?void 0:s.description)&&(0,f.jsx)(a.Suspense,{fallback:null,children:(0,f.jsx)(R,{description:s.description})})]})}))}}]);
//# sourceMappingURL=416.7c4411ed.chunk.js.map