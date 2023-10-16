(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{98292:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/autopilot",function(){return o(2375)}])},2375:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return b}});var a=o(52322),n=o(23305),s=o(70694),i=o(6391),r=o.n(i),l=o(2784),d=o(91930),c=o(71930),u=o(38200),h=o(89630),m=o(9969),g=o(96206);let w={set:"",amount:void 0,allowance:void 0,period:void 0,renewWindow:void 0,download:void 0,upload:void 0,storage:void 0,allowRedundantIPs:!1,maxDowntimeHours:void 0,defragThreshold:void 0},p={storage:{type:"number",category:"contracts",title:"Expected storage",description:(0,a.jsx)(a.Fragment,{children:"The amount of storage you would like to rent in TB."}),units:"TB",validation:{required:"required"}},upload:{type:"number",category:"contracts",title:"Expected upload",description:(0,a.jsx)(a.Fragment,{children:"The amount of upload bandwidth you plan to use each period in TB."}),units:"TB/period",validation:{required:"required"}},download:{type:"number",category:"contracts",title:"Expected download",description:(0,a.jsx)(a.Fragment,{children:"The amount of download bandwidth you plan to use each period in TB."}),units:"TB/period",validation:{required:"required"}},allowance:{type:"siacoin",category:"contracts",title:"Allowance",description:(0,a.jsx)(a.Fragment,{children:"The amount of Siacoin you would like to spend for the period."}),decimalsLimitSc:6,validation:{required:"required"}},period:{type:"number",category:"contracts",title:"Period",description:(0,a.jsx)(a.Fragment,{children:"The length of the storage contracts."}),units:"weeks",suggestion:new(r())(6),suggestionTip:"Typically 6 weeks.",validation:{required:"required"}},renewWindow:{type:"number",category:"contracts",title:"Renew window",description:(0,a.jsx)(a.Fragment,{children:"The number of weeks prior to contract expiration that Sia will attempt to renew your contracts."}),units:"weeks",decimalsLimit:6,suggestion:new(r())(2),suggestionTip:"Typically 2 weeks.",validation:{required:"required"}},amount:{type:"number",category:"contracts",title:"Hosts",description:(0,a.jsx)(a.Fragment,{children:"The number of hosts to create contracts with."}),units:"hosts",decimalsLimit:0,suggestion:new(r())(50),suggestionTip:"Typically 50 hosts.",validation:{required:"required"}},set:{type:"text",category:"contracts",title:"Contract set",description:(0,a.jsx)(a.Fragment,{children:"The contract set that autopilot should use. This should typically be the same as the default contract set."}),placeholder:"autopilot",suggestion:"autopilot",suggestionTip:(0,a.jsxs)(a.Fragment,{children:["The default contract set is ",(0,a.jsx)(n.EKh,{children:"autopilot"}),"."]}),validation:{required:"required"}},allowRedundantIPs:{type:"boolean",category:"hosts",title:"Redundant IPs",description:(0,a.jsx)(a.Fragment,{children:"Whether or not to allow forming contracts with multiple hosts in the same IP subnet. The subnets used are /16 for IPv4, and /64 for IPv6."}),suggestion:!1,suggestionTip:"Defaults to off.",validation:{}},maxDowntimeHours:{type:"number",category:"hosts",title:"Max downtime",description:(0,a.jsx)(a.Fragment,{children:"The maximum amount of host downtime that autopilot will tolerate in hours."}),units:"hours",suggestion:new(r())(1440),suggestionTip:"Defaults to 1,440 which is 60 days.",validation:{required:"required"}},defragThreshold:{type:"number",category:"wallet",title:"Defrag threshold",description:(0,a.jsx)(a.Fragment,{children:"The threshold after which autopilot will defrag outputs."}),units:"outputs",suggestion:new(r())(1e3),suggestionTip:"Defaults to 1,000.",validation:{required:"required"}}};var f=o(63955),x=o(92762),v=o(30654),y=o(80489),j=o(2850);function T(){let{openDialog:e}=(0,u.Rh)(),t=(0,m.oe)(),o=(0,m.e$)({config:{swr:{revalidateOnFocus:!1,errorRetryCount:0}}}),{shouldSyncDefaultContractSet:i,setShouldSyncDefaultContractSet:T,syncDefaultContractSet:b}=function(){let[e,t]=(0,x.Z)("v0/autopilot/syncDefaultContractSet",{defaultValue:!0}),o=(0,y.a)({config:{swr:{errorRetryCount:0}}}),s=(0,m.KJ)(),i=(0,l.useCallback)(async t=>{let i=o.data||{default:""};try{e&&t!==i.default&&(await s.put({params:{key:"contractset"},payload:(0,v.y4)({contractSet:t},o.data)}),o.mutate(),(0,n.OPV)((0,a.jsxs)(n.xvT,{children:["Default contract set has been updated to:"," ",(0,a.jsx)(n.EKh,{children:t}),"."]})))}catch(e){(0,n.OHV)(e.message),console.log(e)}},[o.data,s,e]);return{shouldSyncDefaultContractSet:e,setShouldSyncDefaultContractSet:t,syncDefaultContractSet:i}}(),k=(0,f.cI)({mode:"all",defaultValues:w}),N=(0,l.useCallback)(e=>{k.reset(function(e){let t=e.contracts.set,o=(0,g.ll)(e.contracts.allowance,6),a=new(r())(e.contracts.amount),s=new(r())((0,n.x5w)(e.contracts.period)),i=new(r())((0,n.x5w)(e.contracts.renewWindow)),l=(0,n.JWi)(new(r())(e.contracts.download)),d=(0,n.JWi)(new(r())(e.contracts.upload)),c=(0,n.JWi)(new(r())(e.contracts.storage));return{set:t,allowance:o,amount:a,period:s,renewWindow:i,download:l,upload:d,storage:c,allowRedundantIPs:e.hosts.allowRedundantIPs,maxDowntimeHours:new(r())(e.hosts.maxDowntimeHours),defragThreshold:new(r())(e.wallet.defragThreshold)}}(e))},[k]),[q,C]=(0,l.useState)(!1);(0,l.useEffect)(()=>{var e;if(o.data&&!q){N(o.data),C(!0);return}if((null===(e=o.error)||void 0===e?void 0:e.status)===404&&!q){k.reset(w),C(!0);return}},[o.data,o.error]);let O=(0,l.useCallback)(async()=>{let e=await o.mutate();e?N(e):(0,n.OHV)("Error fetching config.")},[o,N]),P=(0,j.Tu)(),E=(0,l.useCallback)(async e=>{try{var a;let s=!o.data;if(await t.put({payload:{...a=o.data,contracts:{...null==a?void 0:a.contracts,set:e.set,amount:Math.round(e.amount.toNumber()),allowance:(0,g.qN)(e.allowance).toString(),period:Math.round((0,n.mvJ)(e.period.toNumber())),renewWindow:Math.round((0,n.mvJ)(e.renewWindow.toNumber())),download:(0,n.xf5)(e.download).toNumber(),upload:(0,n.xf5)(e.upload).toNumber(),storage:(0,n.xf5)(e.storage).toNumber()},hosts:{...null==a?void 0:a.hosts,maxDowntimeHours:e.maxDowntimeHours.toNumber(),allowRedundantIPs:e.allowRedundantIPs,scoreOverrides:(null==a?void 0:a.hosts.scoreOverrides)||null},wallet:{...null==a?void 0:a.wallet,defragThreshold:e.defragThreshold.toNumber()}}}),(0,n.OPV)("Configuration has been saved."),b(e.set),s){let e=async()=>{await (0,j.gw)(5e3),P(e=>e.startsWith(m.pz)),await (0,j.gw)(5e3),P(e=>e.startsWith(m.pz))};e()}O()}catch(e){(0,n.OHV)(e.message),console.log(e)}},[o.data,t,O,b,P]),F=(0,n.WsO)(p),R=(0,l.useMemo)(()=>k.handleSubmit(E,F),[k,E,F]),S=k.watch("storage"),W=k.watch("period"),_=k.watch("allowance"),D=(0,l.useMemo)(()=>!(!S||!W||!_||S.isZero()||W.isZero()||_.isZero()),[S,W,_]),z=(0,l.useMemo)(()=>{if(!D)return new(r())(0);let e=_.div(W),t=e.div(7).times(30);return(0,g.IZ)(t,0)},[D,W,_]),I=Object.entries(k.formState.dirtyFields).filter(e=>{let[t,o]=e;return!!o}).length,{fiat:H,currency:J}=(0,n.fb0)({sc:z});return(0,a.jsx)(h.J,{title:"Autopilot",routes:c._,sidenav:(0,a.jsx)(d.e,{}),stats:D?(0,a.jsxs)("div",{className:"flex gap-3",children:[(0,a.jsx)(n.xvT,{size:"12",font:"mono",weight:"medium",children:"Estimate:"}),(0,a.jsxs)("div",{className:"flex gap-1",children:[(0,a.jsx)(n.YKL,{size:"12",value:(0,g.qN)(z),dynamicUnits:!1,fixed:0,variant:"value"}),H&&(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)(n.m2c,{size:"12",weight:"medium",value:H,color:"subtle",variant:"value",format:e=>"(".concat(J.prefix).concat(e.toFixed(J.fixed),")")})}),(0,a.jsxs)(n.xvT,{size:"12",font:"mono",weight:"medium",children:["per month to store ",(0,g.vW)((0,n.xf5)(S).toNumber())]})]})]}):(0,a.jsx)(n.xvT,{size:"12",font:"mono",weight:"medium",children:"Enter expected storage, period, and allowance values to estimate monthly spending."}),actions:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[!!I&&(0,a.jsx)(n.xvT,{size:"12",color:"subtle",children:1===I?"1 change":"".concat(I," changes")}),(0,a.jsx)(n.zxk,{tip:"Reset all changes",icon:"contrast",disabled:!I,onClick:O,children:(0,a.jsx)(s.Wet,{})}),(0,a.jsxs)(n.eQh,{children:[(0,a.jsxs)(n.zxk,{tip:"Save all changes",variant:"accent",disabled:!k.formState.isDirty||k.formState.isSubmitting,onClick:R,children:[(0,a.jsx)(s.ZEk,{}),"Save changes"]}),(0,a.jsx)(n.J2e,{contentProps:{align:"end"},trigger:(0,a.jsx)(n.zxk,{variant:"accent",icon:"hover",children:(0,a.jsx)(s.shL,{})}),children:(0,a.jsxs)("div",{className:"px-1",children:[(0,a.jsx)(n.__J,{children:"Options"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(n.rsf,{checked:i,onCheckedChange:e=>T(e),children:"sync default contract set"}),(0,a.jsx)(n.nvN,{size:"12",children:"Automatically update the default contract set to be the same as the autopilot contract set when changes are saved."})]})]})})]})]}),openSettings:()=>e("settings"),children:(0,a.jsxs)("div",{className:"px-5 py-6 flex flex-col gap-16 max-w-screen-xl",children:[(0,a.jsx)(n.vRO,{title:"Contracts",category:"contracts",fields:p,form:k}),(0,a.jsx)(n.vRO,{title:"Hosts",category:"hosts",fields:p,form:k}),(0,a.jsx)(n.vRO,{title:"Wallet",category:"wallet",fields:p,form:k})]})})}function b(){return(0,a.jsx)(T,{})}}},function(e){e.O(0,[209,774,888,179],function(){return e(e.s=98292)}),_N_E=e.O()}]);