(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{57344:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config",function(){return t(5160)}])},10689:function(e,a,t){"use strict";t.d(a,{x:function(){return n}});var i=t(52322),r=t(41630);function n(e){let{title:a,children:t}=e;return(0,i.jsxs)("div",{className:"flex flex-col gap-6",children:[a&&(0,i.jsx)(r.X6q,{size:"24",children:a}),(0,i.jsx)(r.s_4,{className:"p-6",children:(0,i.jsx)("div",{className:"flex flex-col gap-6",children:t})})]})}},30362:function(e,a,t){"use strict";t.d(a,{J:function(){return l}});var i=t(52322),r=t(41630),n=t(73621),o=t(6391),c=t.n(o),s=t(74881);function l(e){let a=(0,n.tM)();return(0,i.jsx)(r.tU3,{appName:"renterd",connectivityRoute:s.h,walletBalance:a.data?new(c())(a.data):void 0,...e})}},15755:function(e,a,t){"use strict";t.d(a,{e:function(){return c}});var i=t(52322),r=t(41630),n=t(74881),o=t(13121);function c(){let{autopilotMode:e}=(0,o.K)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.KJW,{title:"Files",route:n._.files.index,children:(0,i.jsx)(r.ROc,{})}),"on"===e&&(0,i.jsx)(r.KJW,{title:"Autopilot",route:n._.autopilot.index,children:(0,i.jsx)(r.aFQ,{})}),(0,i.jsx)(r.KJW,{title:"Contracts",route:n._.contracts.index,children:(0,i.jsx)(r.VBo,{})}),(0,i.jsx)(r.KJW,{title:"Hosts",route:n._.hosts.index,children:(0,i.jsx)(r.VHe,{})}),(0,i.jsx)(r.KJW,{title:"Configuration",route:n._.config.index,children:(0,i.jsx)(r.wWN,{})})]})}},34434:function(e,a,t){"use strict";t.d(a,{p:function(){return n}});var i=t(52322),r=t(41630);function n(e){let{title:a,description:t,suggestion:n,control:o}=e;return(0,i.jsxs)("div",{className:"flex gap-10 justify-between",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-2 max-w-[600px]",children:[(0,i.jsx)(r.X6q,{size:"20",children:a}),(0,i.jsx)(r.nvN,{size:"14",children:t}),n&&(0,i.jsxs)(r.xvT,{color:"accent",children:["Suggestion: ",n]})]}),(0,i.jsx)("div",{className:"",children:o})]})}},5160:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return k}});var i=t(52322),r=t(41630),n=t(6391),o=t.n(n),c=t(2784),s=t(15755),l=t(74881),d=t(30650),m=t(30362),x=t(73621),u=t(63397),h=t(34434),g=t(10689),p=t(2288),f=t(24511);let j=f.Ry().shape({maxStoragePrice:f.nK().required("required"),maxDownloadPrice:f.nK().required("required"),maxUploadPrice:f.nK().required("required"),maxContractPrice:f.nK().required("required"),maxRpcPrice:f.nK().required("required"),minMaxCollateral:f.nK().required("required"),hostBlockHeightLeeway:f.Rx().required("required"),minShards:f.nK().required("required"),totalShards:f.nK().required("required")}),w={maxRpcPrice:void 0,maxStoragePrice:void 0,maxContractPrice:void 0,maxDownloadPrice:void 0,maxUploadPrice:void 0,minMaxCollateral:void 0,hostBlockHeightLeeway:void 0,minShards:void 0,totalShards:void 0};function P(){let{openDialog:e}=(0,d.Rh)(),a=(0,x.yu)({params:{key:"gouging"},config:{swr:{revalidateOnFocus:!1}}}),t=(0,x.yu)({params:{key:"redundancy"},config:{swr:{revalidateOnFocus:!1}}}),n=(0,x.KJ)(),f=(0,u.TA)({validationSchema:j,initialValues:w,onSubmit:async e=>{if(a.data&&t.data)try{let i=await n.put({params:{key:"gouging"},payload:{maxRPCPrice:(0,p.qN)(e.maxRpcPrice).toString(),maxStoragePrice:(0,p.qN)(e.maxStoragePrice.div((0,r.S5V)(1)).div((0,r.qAV)(1))).toString(),maxContractPrice:(0,p.qN)(e.maxContractPrice).toString(),maxDownloadPrice:(0,p.qN)(e.maxDownloadPrice).toString(),maxUploadPrice:(0,p.qN)(e.maxUploadPrice).toString(),minMaxCollateral:(0,p.qN)(e.minMaxCollateral).toString(),hostBlockHeightLeeway:e.hostBlockHeightLeeway.toNumber()}}),o=await n.put({params:{key:"redundancy"},payload:{minShards:e.minShards.toNumber(),totalShards:e.totalShards.toNumber()}});if(i.error)throw Error(i.error);if(o.error)throw Error(o.error);(0,r.OPV)("Configuration has been saved.")}catch(c){(0,r.OHV)(c.message)}}}),P=(0,c.useCallback)(()=>{f.resetForm(),a.mutate(),t.mutate()},[f,a,t]);(0,c.useEffect)(()=>{let e=async()=>{if(a.data&&t.data)try{let e=a.data,i=t.data;await f.resetForm({values:{maxStoragePrice:(0,p.ll)(new(o())(e.maxStoragePrice).times((0,r.S5V)(1)).times((0,r.qAV)(1)),6),maxDownloadPrice:(0,p.ll)(e.maxDownloadPrice,6),maxUploadPrice:(0,p.ll)(e.maxUploadPrice,6),maxContractPrice:(0,p.ll)(e.maxContractPrice,6),maxRpcPrice:(0,p.ll)(e.maxRPCPrice,6),minMaxCollateral:(0,p.ll)(e.minMaxCollateral,6),hostBlockHeightLeeway:new(o())(e.hostBlockHeightLeeway),minShards:new(o())(i.minShards),totalShards:new(o())(i.totalShards)}})}catch(n){console.log(n)}};e()},[a.data,t.data]);let{changed:k,changeCount:S}=(0,r.VyY)(f);return(0,i.jsx)(m.J,{title:"Configuration",routes:l._,sidenav:(0,i.jsx)(s.e,{}),actions:(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[!!S&&(0,i.jsx)(r.xvT,{size:"12",color:"subtle",children:1===S?"1 change":"".concat(S," changes")}),(0,i.jsx)(r.zxk,{tip:"Reset all changes",icon:"contrast",disabled:!S,onClick:()=>P(),children:(0,i.jsx)(r.Wet,{})}),(0,i.jsx)(r.zxk,{tip:"Save all changes",variant:"accent",disabled:!S,onClick:()=>f.submitForm(),children:"Save changes"})]}),openSettings:()=>e("settings"),children:(0,i.jsxs)("div",{className:"p-5 flex flex-col gap-16 max-w-screen-xl",children:[(0,i.jsxs)(g.x,{title:"Gouging",children:[(0,i.jsx)(h.p,{title:"Max storage price",description:(0,i.jsx)(i.Fragment,{children:"The max allowed price to store 1 TiB per month."}),control:(0,i.jsx)(r.ckm,{formik:f,changed:k,name:"maxStoragePrice",decimalsLimitSc:6})}),(0,i.jsx)(r.Z0O,{className:"w-full my-3"}),(0,i.jsx)(h.p,{title:"Max download price",description:(0,i.jsx)(i.Fragment,{children:"The max allowed price to download 1 TiB."}),control:(0,i.jsx)(r.ckm,{formik:f,changed:k,name:"maxDownloadPrice",decimalsLimitSc:6})}),(0,i.jsx)(r.Z0O,{className:"w-full my-3"}),(0,i.jsx)(h.p,{title:"Max upload price",description:(0,i.jsx)(i.Fragment,{children:"The max allowed price to upload 1 TiB."}),control:(0,i.jsx)(r.ckm,{formik:f,changed:k,name:"maxUploadPrice",decimalsLimitSc:6})}),(0,i.jsx)(r.Z0O,{className:"w-full my-3"}),(0,i.jsx)(h.p,{title:"Max contract price",description:(0,i.jsx)(i.Fragment,{children:"The max allowed price to form a contract."}),control:(0,i.jsx)(r.ckm,{formik:f,changed:k,name:"maxContractPrice",decimalsLimitSc:6})}),(0,i.jsx)(r.Z0O,{className:"w-full my-3"}),(0,i.jsx)(h.p,{title:"Max RPC price",description:(0,i.jsx)(i.Fragment,{children:"The max allowed base price for RPCs."}),control:(0,i.jsx)(r.ckm,{formik:f,changed:k,name:"maxRpcPrice",decimalsLimitSc:6})}),(0,i.jsx)(r.Z0O,{className:"w-full my-3"}),(0,i.jsx)(h.p,{title:"Min max collateral",description:(0,i.jsx)(i.Fragment,{children:"The minimum value for max collateral in the host's price settings."}),control:(0,i.jsx)(r.ckm,{formik:f,changed:k,name:"minMaxCollateral",decimalsLimitSc:6})}),(0,i.jsx)(r.Z0O,{className:"w-full my-3"}),(0,i.jsx)(h.p,{title:"Block height leeway",description:(0,i.jsx)(i.Fragment,{children:"The amount of blocks of leeway given to the host block height in the host's price table."}),control:(0,i.jsx)(r.wmY,{formik:f,changed:k,name:"hostBlockHeightLeeway",units:"blocks",suggestion:new(o())(6),suggestionTip:"The recommended value is 6 blocks."})})]}),(0,i.jsxs)(g.x,{title:"Redundancy",children:[(0,i.jsx)(h.p,{title:"Min shards",description:(0,i.jsx)(i.Fragment,{children:"The minimum amount of shards needed to reconstruct a slab."}),control:(0,i.jsx)(r.wmY,{formik:f,changed:k,name:"minShards",units:"shards"})}),(0,i.jsx)(r.Z0O,{className:"w-full my-3"}),(0,i.jsx)(h.p,{title:"Total shards",description:(0,i.jsx)(i.Fragment,{children:"The total amount of shards for each slab."}),control:(0,i.jsx)(r.wmY,{formik:f,changed:k,name:"totalShards",units:"shards"})})]})]})})}function k(){return(0,i.jsx)(P,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=57344)}),_N_E=e.O()}]);