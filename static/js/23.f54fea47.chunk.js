"use strict";(self.webpackChunkcryptocurrency_tracker=self.webpackChunkcryptocurrency_tracker||[]).push([[23],{9385:function(e,t,r){var n=r(2791),a=r(9691),o=r(1971),c=r(5720),i=(0,a.Z)({root:{margin:"0 auto",display:"flex",flexDirection:"column",height:"100vh",alignItems:"center",background:"transparent",paddingTop:"10vh"}})(o.Z),l=(0,a.Z)({root:{justifyContent:"center"}})(i),u=(0,a.Z)({root:{color:"rgba(122, 194, 33, 0.8);"}})(c.Z),s=n.memo((function(){return n.createElement(l,null,n.createElement(u,{thickness:5,size:100}))}));t.Z=s},8010:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var n=r(885),a=r(2791),o=r(9271),c=r(5617),i=function(e){var t=e.currencyBase,r=e.currencyCrypto,n=(0,o.k6)(),i=a.useContext(c.P),l=i.setCurrencyBase,u=i.setCurrencyCrypto,s=!(!t||!r),p=s?"currencySettingButton enabled":"currencySettingButton",d=s?"/".concat(r.label," / ").concat(t):void 0;return a.createElement("button",{className:p,disabled:!s,onClick:function(){l(t),u(r),d&&n.push(d)}},"Poka\u017c kurs")},l=r(9691),u=r(1971),s=(0,l.Z)({root:{margin:"0 auto",display:"flex",flexDirection:"column",height:"100vh",alignItems:"center",background:"transparent",paddingTop:"10vh"}})(u.Z),p=r(9348),d=r(2475),y=r(7263),m=r(8983),f=r(304),v=(0,l.Z)({root:{borderRadius:"2px",animation:"fade_in 1s ease-in-out forwards",border:"2px solid #1E1F26",padding:"20px",width:"300px",margin:"2vh 0",boxShadow:"inset 0 0 5px #1E1F26, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)",backgroundColor:"#2C303A",color:"white","&:hover":{border:"2px solid #EE760A"},"& .MuiFormLabel-root":{color:"white",fontFamily:'"Lato", sans-serif',paddingBottom:"5px"},"& .MuiFormGroup-root":{flexDirection:"row",justifyContent:"space-around"},"& .MuiRadio-colorSecondary.Mui-checked":{color:"#EE760A"}}})(f.Z),g=function(e){var t=e.currencyBase,r=e.setCurrencyBase;return a.createElement(v,null,a.createElement(m.Z,{component:"legend"},"Waluta odniesienia"),a.createElement(d.Z,{"aria-label":"currency",name:"currency",value:t,onChange:function(e){r(e.target.value)}},a.createElement(y.Z,{value:"PLN",control:a.createElement(p.Z,null),label:"PLN"}),a.createElement(y.Z,{value:"USD",control:a.createElement(p.Z,null),label:"USD"}),a.createElement(y.Z,{value:"EUR",control:a.createElement(p.Z,null),label:"EUR"})))},h=function(e){var t=e.Data,r=[];for(var n in t)t.hasOwnProperty(n)&&r.push({value:n,label:t[n].CoinName,image:t[n].ImageUrl,description:t[n].Description});return r},E=r(9385),b=r(5025),x=(r(4133),r(4136),r(4065)),C=r(2978),Z=C.v9,w=function(e){var t=e.currencyCrypto,r=e.setCurrencyCrypto,n=Z((function(e){return e.listOfAllCryptos}),C.wU);return n&&n.length?a.createElement(x.Z,{value:t,className:"selector-item virtualized",placeholder:"Wybierz kryptowalut\u0119",onChange:function(e){r(e)},options:n}):null},k=r(1088);var S=r(9526),A=r(1076),B=function(e){var t=e.currencyCrypto;return t.description?a.createElement(A.Z,{in:!0,timeout:1e3},a.createElement(S.Z,{elevation:1},a.createElement(u.Z,{sx:{bgcolor:"#1076AB",boxShadow:1,borderRadius:1,p:2,maxWidth:300,color:"white"}},t.description))):null},R=function(){var e=a.useState(null),t=(0,n.Z)(e,2),r=t[0],o=t[1],c=a.useState(null),l=(0,n.Z)(c,2),u=l[0],p=l[1],d=a.useRef({fetchingListActive:!1,listReceived:!1}),y=(0,b.Ds)().enqueueSnackbar,m=Z((function(e){return e.listOfAllCryptos}),C.wU),f=(0,C.I0)(),v=(0,k.useLazyAxios)({url:"https://min-api.cryptocompare.com/data/all/coinlist"}),x=(0,n.Z)(v,2),S=x[0],A=x[1],R=A.data,L=A.error,D=A.loading;return(0,a.useEffect)((function(){L&&y("B\u0142\u0105d pobierania listy kryptowalut",{variant:"error"})}),[L]),(0,a.useEffect)((function(){!function(){var e=window.navigator.userAgent;/MSIE|Trident/.test(e)&&(window.location.href="https://kiszuriwalilibori.github.io/IE/")}()}),[]),(0,a.useEffect)((function(){if(R&&!d.current.listReceived){var e=h(R);f({type:"LIST_OF_ALL_CRYPTOS_SET",payload:e})}}),[R,d.current.listReceived]),D?a.createElement(E.Z,null):(m||d.current.fetchingListActive||(d.current.fetchingListActive=!0,S()),m&&!d.current.listReceived&&(d.current.listReceived=!0),a.createElement(s,null,a.createElement(i,{currencyBase:r,currencyCrypto:u}),a.createElement(g,{currencyBase:r,setCurrencyBase:o}),a.createElement(w,{currencyCrypto:u,setCurrencyCrypto:p}),u&&a.createElement(B,{currencyCrypto:u})))}}}]);
//# sourceMappingURL=23.f54fea47.chunk.js.map