(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[789],{69171:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wallet",function(){return t(39117)}])},21197:function(e,n,t){"use strict";t.d(n,{q:function(){return m}});var s=t(52322),i=t(94206),a=t(13369),l=t(6391),d=t.n(l),o=t(74881),r=t(41491);function c(){let e=(0,a.On)({config:{swr:{revalidateOnFocus:!1}}});return e.data&&"Mainnet"!==e.data.network?(0,s.jsx)(i.t6k,{testnetName:e.data.network}):null}var u=t(50002);function x(){var e,n,t,l,d,o,c;let{openDialog:x}=(0,u.Rh)(),m=(0,a.On)({config:{swr:{revalidateOnFocus:!1}}}),h=(0,a.rV)({config:{swr:{revalidateOnFocus:!1}}}),f=(0,r.n)(),v=(0,a.cQ)(),p=null===(e=m.data)||void 0===e?void 0:e.version,j=(null==p?void 0:p.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/hostd/releases/".concat(p):"https://github.com/SiaFoundation/hostd/tree/".concat(p);return(0,s.jsxs)(i.HfT,{name:"hostd",peerCount:null===(n=v.data)||void 0===n?void 0:n.length,connectPeer:()=>x("connectPeer"),isSynced:f.isSynced,syncPercent:f.syncPercent,nodeBlockHeight:f.nodeBlockHeight,estimatedBlockHeight:f.estimatedBlockHeight,firstTimeSyncing:f.firstTimeSyncing,moreThan100BlocksToSync:f.moreThan100BlocksToSync,children:[(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Net address"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.XxW,{className:"overflow-hidden",size:"14",value:null===(t=h.data)||void 0===t?void 0:t.netAddress,maxLength:50,label:"network address"})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Public key"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.XxW,{className:"overflow-hidden",size:"14",value:null===(l=m.data)||void 0===l?void 0:l.publicKey,maxLength:50,label:"public key"})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.XxW,{className:"overflow-hidden",size:"14",maxLength:50,value:null===(d=m.data)||void 0===d?void 0:d.walletAddress,type:"address"})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.xvT,{size:"14",children:null===(o=m.data)||void 0===o?void 0:o.network})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.rUS,{size:"14",href:j,target:"_blank",children:null===(c=m.data)||void 0===c?void 0:c.version})})]})]})}function m(e){let n=(0,a.Os)(),{isSynced:t}=(0,r.n)();return(0,s.jsx)(i.tU3,{appName:"hostd",connectivityRoute:o.h,banner:(0,s.jsx)(c,{}),profile:(0,s.jsx)(x,{}),isSynced:t,walletBalance:n.data?new(d())(n.data.spendable).plus(n.data.unconfirmed):void 0,...e})}},39031:function(e,n,t){"use strict";t.d(n,{N:function(){return r}});var s=t(52322),i=t(94206),a=t(13369),l=t(44905),d=t(74881),o=t(50002);function r(){var e,n;let{openDialog:t}=(0,o.Rh)(),r=(0,a.Z7)(),c=!(null===(e=r.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),u=(null===(n=r.data)||void 0===n?void 0:n.length)||0;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.KJW,{title:"Dashboard",route:d._.home,children:(0,s.jsx)(i.K2o,{})}),(0,s.jsx)(i.KJW,{title:"Volumes",route:d._.volumes.index,children:(0,s.jsx)(i.zvn,{})}),(0,s.jsx)(i.KJW,{title:"Contracts",route:d._.contracts.index,children:(0,s.jsx)(i.VBo,{})}),(0,s.jsx)(i.KJW,{title:"Configuration",route:d._.config.index,children:(0,s.jsx)(i.wWN,{})}),(0,s.jsxs)("div",{className:"relative",children:[!!u&&c&&(0,s.jsx)("div",{className:(0,l.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!u&&!c&&(0,s.jsx)(i.xvT,{size:"10",className:(0,l.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:u.toLocaleString()}),(0,s.jsx)(i.KJW,{title:"Alerts",onClick:()=>t("alerts"),children:(0,s.jsx)(i.Dkj,{})})]})]})}},41491:function(e,n,t){"use strict";t.d(n,{n:function(){return a}});var s=t(48240),i=t(13369);function a(){var e,n,t,a;let{isUnlocked:l}=(0,s.Hv)(),d=(0,i.d$)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.synced)?6e4:1e4}}}),o=(0,i.nH)(),r=d.data?null===(e=d.data)||void 0===e?void 0:e.chainIndex.height:0,c=(0,i.Os)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.scanHeight)>=r?6e4:1e4}}}),u=l&&r&&o?Number((100*Math.min(r/o,1)).toFixed(1)):0,x=l&&r&&c.data?Number((100*Math.min(c.data.scanHeight/o,1)).toFixed(1)):0;return{isSynced:null===(n=d.data)||void 0===n?void 0:n.synced,isWalletSynced:(null===(t=d.data)||void 0===t?void 0:t.synced)&&(null===(a=c.data)||void 0===a?void 0:a.scanHeight)>=r-1,nodeBlockHeight:r,estimatedBlockHeight:o,syncPercent:u,walletScanPercent:x,moreThan100BlocksToSync:!!r&&!!o&&o-r>100,firstTimeSyncing:!!r&&!!o&&o-r>5e4}}},39117:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var s=t(52322),i=t(94206),a=t(13369),l=t(2784),d=t(50002),o=t(74881),r=t(6391),c=t.n(r),u=t(39031),x=t(21197),m=t(41491);function h(){let e=(0,a.Qq)({params:{limit:50,offset:0}}),n=(0,a.a0)(),{openDialog:t}=(0,d.Rh)(),r=(0,a.Os)(),h=(0,l.useMemo)(()=>[...(n.data||[]).map(e=>({type:"transaction",txType:(0,i.leQ)(e.transaction,e.source),hash:e.ID,timestamp:new Date(e.timestamp).getTime(),sc:new(c())(e.inflow).minus(e.outflow),unconfirmed:!0})),...(e.data||[]).map(e=>({type:"transaction",txType:(0,i.leQ)(e.transaction,e.source),hash:e.ID,timestamp:new Date(e.timestamp).getTime(),onClick:()=>t("transactionDetails",e.ID),sc:new(c())(e.inflow).minus(e.outflow)})).sort((e,n)=>e.timestamp<n.timestamp?1:-1)],[n,e,t]),f=(0,l.useMemo)(()=>{let e=new Date().getTime(),n=(0,i.NrH)(30);return new Date(e-n).toISOString()},[]),v=(0,a.KU)({params:{interval:"daily",start:f}}),p=(0,l.useMemo)(()=>(v.data||[]).map(e=>({sc:Number(e.balance),timestamp:new Date(e.timestamp).getTime()})).sort((e,n)=>e.timestamp>=n.timestamp?1:-1),[v.data]),{isSynced:j,isWalletSynced:w,syncPercent:g,walletScanPercent:y}=(0,m.n)();return(0,s.jsx)(x.q,{routes:o._,sidenav:(0,s.jsx)(u.N,{}),openSettings:()=>t("settings"),title:"Wallet",actions:(0,s.jsx)(i.QUh,{isSynced:j,isWalletSynced:w,syncPercent:g,walletScanPercent:y,sc:r.data?new(c())(r.data.spendable).plus(r.data.unconfirmed):void 0,receiveSiacoin:()=>t("addressDetails"),sendSiacoin:()=>t("sendSiacoin")}),stats:(0,s.jsx)(i.DmW,{isSynced:j,isWalletSynced:w,syncPercent:g,walletScanPercent:y}),children:(0,s.jsxs)("div",{className:"p-6 flex flex-col gap-5",children:[(0,s.jsx)(i.Z58,{balances:p,isLoading:v.isValidating}),(0,s.jsx)(i.xUn,{title:"Transactions",entities:h.slice(0,100)})]})})}function f(){return(0,s.jsx)(h,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=69171)}),_N_E=e.O()}]);