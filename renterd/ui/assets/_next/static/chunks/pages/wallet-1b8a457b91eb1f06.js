(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[789],{9171:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wallet",function(){return n(9117)}])},362:function(t,e,n){"use strict";n.d(e,{J:function(){return l}});var i=n(2322),s=n(6328),a=n(3621),r=n(6391),o=n.n(r),c=n(4881);function l(t){let e=(0,a.tM)();return(0,i.jsx)(s.tU3,{appName:"renterd",connectivityRoute:c.h,walletBalance:e.data?new(o())(e.data):void 0,...t})}},5755:function(t,e,n){"use strict";n.d(e,{e:function(){return o}});var i=n(2322),s=n(6328),a=n(4881),r=n(3121);function o(){let{autopilotMode:t}=(0,r.K)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.KJW,{title:"Files",route:a._.files.index,children:(0,i.jsx)(s.ROc,{})}),"on"===t&&(0,i.jsx)(s.KJW,{title:"Autopilot",route:a._.autopilot.index,children:(0,i.jsx)(s.aFQ,{})}),(0,i.jsx)(s.KJW,{title:"Contracts",route:a._.contracts.index,children:(0,i.jsx)(s.VBo,{})}),(0,i.jsx)(s.KJW,{title:"Hosts",route:a._.hosts.index,children:(0,i.jsx)(s.VHe,{})}),(0,i.jsx)(s.KJW,{title:"Configuration",route:a._.config.index,children:(0,i.jsx)(s.wWN,{})})]})}},9117:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var i=n(2322),s=n(6328),a=n(3621),r=n(2784),o=n(650),c=n(4881),l=n(6391),u=n.n(l),d=n(5755),f=n(362);function x(){let t=(0,a.Qq)({params:{},config:{swr:{revalidateOnFocus:!1,refreshInterval:6e4}}}),e=(0,a.a0)(),{openDialog:n}=(0,o.Rh)(),l=(0,r.useMemo)(()=>e.data&&t.data?[...(e.data||[]).map(t=>({type:"transaction",txType:(0,s.fWj)(t),unconfirmed:!0})),...(t.data||[]).map(t=>({type:"transaction",txType:(0,s.fWj)(t.Raw),hash:t.ID,timestamp:new Date(t.Timestamp).getTime(),onClick:()=>n("transactionDetails",t.ID),sc:new(u())(t.Inflow).minus(t.Outflow)})).sort((t,e)=>t.timestamp<e.timestamp?1:-1)]:null,[e,t,n]),x=(0,a.tM)();return(0,i.jsx)(f.J,{routes:c._,sidenav:(0,i.jsx)(d.e,{}),openSettings:()=>n("settings"),title:"Wallet",actions:(0,i.jsx)(s.QUh,{sc:x.data?new(u())(x.data):void 0,receiveSiacoin:()=>n("addressDetails"),sendSiacoin:()=>n("sendSiacoin")}),children:(0,i.jsx)("div",{className:"p-5 flex flex-col gap-5",children:(0,i.jsx)(s.xUn,{title:"Transactions",entities:null==l?void 0:l.slice(0,100)})})})}function p(){return(0,i.jsx)(x,{})}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=9171)}),_N_E=t.O()}]);