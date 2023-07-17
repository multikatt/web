"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[514],{20508:function(e,i,t){t.d(i,{Lo:function(){return o},Pg:function(){return s},Uy:function(){return l},VN:function(){return u},jG:function(){return d}});var n=t(52322),a=t(58422),r=t(6391),c=t.n(r);t(2784);let o=6,d={contractSet:""},l={includeRedundancyMaxStoragePrice:!0,includeRedundancyMaxUploadPrice:!0},s={...d,maxRpcPrice:void 0,maxStoragePrice:void 0,maxContractPrice:void 0,maxDownloadPrice:void 0,maxUploadPrice:void 0,minMaxCollateral:void 0,hostBlockHeightLeeway:void 0,minPriceTableValidity:void 0,minAccountExpiry:void 0,minMaxEphemeralAccountBalance:void 0,minShards:void 0,totalShards:void 0,...l};function u(e){let{redundancyMultiplier:i,includeRedundancyMaxStoragePrice:t,includeRedundancyMaxUploadPrice:r,storageAverage:d,uploadAverage:l,downloadAverage:s,contractAverage:u}=e;return{contractSet:{category:"contractset",type:"text",title:"Default contract set",placeholder:"autopilot",suggestion:"autopilot",suggestionTip:(0,n.jsx)(n.Fragment,{children:"Autopilot users will typically want to keep this the same as the autopilot contract set."}),description:(0,n.jsx)(n.Fragment,{children:"The default contract set is where data is uploaded to by default."}),validation:{required:"required"}},maxStoragePrice:{category:"gouging",type:"siacoin",title:"Max storage price",description:(0,n.jsx)(n.Fragment,{children:"The max allowed price to store 1 TB per month."}),units:"SC/TB/month",average:d,averageTip:m(t,i),after:function(e){let{form:r,fields:c}=e;return(0,n.jsx)(a.ua7,{align:"start",side:"bottom",content:h(t,i),children:(0,n.jsx)("div",{children:(0,n.jsx)(a.QBj,{size:"small",form:r,fields:c,name:"includeRedundancyMaxStoragePrice",group:!1,children:(0,n.jsxs)(a.xvT,{size:"12",weight:"medium",children:["Including ",i.toFixed(1),"x redundancy"]})})})})},decimalsLimitSc:o,validation:{required:"required"}},maxUploadPrice:{category:"gouging",type:"siacoin",title:"Max upload price",description:(0,n.jsx)(n.Fragment,{children:"The max allowed price to upload 1 TB."}),units:"SC/TB/month",average:l,averageTip:m(r,i),after:function(e){let{form:t,fields:c}=e;return(0,n.jsx)(a.ua7,{align:"start",side:"bottom",content:h(r,i),children:(0,n.jsx)("div",{children:(0,n.jsx)(a.QBj,{size:"small",form:t,fields:c,name:"includeRedundancyMaxUploadPrice",group:!1,children:(0,n.jsxs)(a.xvT,{size:"12",weight:"medium",children:["Including ",i.toFixed(1),"x redundancy"]})})})})},decimalsLimitSc:o,validation:{required:"required"}},maxDownloadPrice:{category:"gouging",type:"siacoin",title:"Max download price",description:(0,n.jsx)(n.Fragment,{children:"The max allowed price to download 1 TB."}),units:"SC/TB/month",average:s,averageTip:"Averages provided by Sia Central.",decimalsLimitSc:o,validation:{required:"required"}},maxContractPrice:{category:"gouging",type:"siacoin",title:"Max contract price",description:(0,n.jsx)(n.Fragment,{children:"The max allowed price to form a contract."}),average:u,decimalsLimitSc:o,tipsDecimalsLimitSc:3,validation:{required:"required"}},maxRpcPrice:{category:"gouging",type:"siacoin",title:"Max RPC price",description:(0,n.jsx)(n.Fragment,{children:"The max allowed base price for RPCs in siacoins per million calls."}),units:"SC/million",decimalsLimitSc:o,validation:{required:"required"}},minMaxCollateral:{category:"gouging",type:"siacoin",title:"Min max collateral",description:(0,n.jsx)(n.Fragment,{children:"The min value for max collateral in the host's price settings."}),decimalsLimitSc:o,validation:{required:"required"}},hostBlockHeightLeeway:{category:"gouging",type:"number",title:"Block height leeway",description:(0,n.jsx)(n.Fragment,{children:"The amount of blocks of leeway given to the host block height in the host's price table."}),units:"blocks",decimalsLimit:0,suggestion:new(c())(6),suggestionTip:"The recommended value is 6 blocks.",validation:{required:"required",validate:{min:e=>new(c())(e).gte(3)||"must be at least 3 blocks"}}},minPriceTableValidity:{category:"gouging",type:"number",title:"Min price table validity",units:"minutes",description:(0,n.jsx)(n.Fragment,{children:"The min accepted value for `Validity` in the host's price settings."}),validation:{required:"required",validate:{min:e=>new(c())(e).gte((0,a.GXN)(10))||"must be at least 10 seconds"}}},minAccountExpiry:{category:"gouging",type:"number",title:"Min account expiry",units:"days",description:(0,n.jsx)(n.Fragment,{children:"The min accepted value for `AccountExpiry` in the host's price settings."}),validation:{required:"required",validate:{min:e=>new(c())(e).gte((0,a.XAn)(1))||"must be at least 1 hour"}}},minMaxEphemeralAccountBalance:{category:"gouging",type:"siacoin",title:"Min max ephemeral account balance",description:(0,n.jsx)(n.Fragment,{children:"The min accepted value for `MaxEphemeralAccountBalance` in the host's price settings."}),decimalsLimitSc:o,validation:{required:"required",validate:{min:e=>new(c())(e).gte(1)||"must be at least 1 SC"}}},minShards:{type:"number",category:"redundancy",title:"Min shards",description:(0,n.jsx)(n.Fragment,{children:"The min amount of shards needed to reconstruct a slab."}),units:"shards",validation:{required:"required",validate:{min:e=>new(c())(e).gt(0)||"must be greater than 0"}},trigger:["totalShards"]},totalShards:{type:"number",category:"redundancy",title:"Total shards",description:(0,n.jsx)(n.Fragment,{children:"The total amount of shards for each slab."}),units:"shards",validation:{required:"required",validate:{gteMinShards:(e,i)=>new(c())(e).gte(i.minShards)||"must be at least equal to min shards",max:e=>new(c())(e).lt(256)||"must be less than 256"}}},includeRedundancyMaxStoragePrice:{type:"boolean",title:"Include redundancy",validation:{}},includeRedundancyMaxUploadPrice:{type:"boolean",title:"Include redundancy",validation:{}}}}function m(e,i){return e?"The average price is adjusted for ".concat(i.toFixed(1),"x redundancy. Averages provided by Sia Central."):"The average price is not adjusted for redundancy. Averages provided by Sia Central."}function h(e,i){return e?(0,n.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,n.jsxs)(a.xvT,{color:"subtle",children:["Specified max price includes the cost of"," ",i.toFixed(1),"x redundancy."]}),(0,n.jsxs)(a.xvT,{color:"subtle",children:["Redundancy is calculated from the ratio of data shards:"," ",(0,n.jsx)(a.EKh,{children:"min shards / total shards"}),"."]})]}):"Specified max price does not include redundancy."}},85246:function(e,i,t){t.d(i,{IP:function(){return m},MN:function(){return l},Si:function(){return x},Y$:function(){return s},aU:function(){return h},y4:function(){return d},yz:function(){return u}});var n=t(58422),a=t(2288),r=t(6391),c=t.n(r),o=t(20508);function d(e,i){return{...i,default:e.contractSet}}function l(e,i){return{...i,maxRPCPrice:(0,a.qN)(e.maxRpcPrice.div(1e6)).toString(),maxStoragePrice:(0,a.qN)(e.maxStoragePrice.div((0,n.S5V)(1)).div((0,n.xf5)(1)).div(x(e.minShards,e.totalShards,e.includeRedundancyMaxStoragePrice))).toString(),maxUploadPrice:(0,a.qN)(e.maxUploadPrice.div(x(e.minShards,e.totalShards,e.includeRedundancyMaxUploadPrice))).toString(),maxDownloadPrice:(0,a.qN)(e.maxDownloadPrice).toString(),maxContractPrice:(0,a.qN)(e.maxContractPrice).toString(),minMaxCollateral:(0,a.qN)(e.minMaxCollateral).toString(),hostBlockHeightLeeway:Math.round(e.hostBlockHeightLeeway.toNumber()),minPriceTableValidity:Math.round((0,n.ort)(e.minPriceTableValidity.toNumber())),minAccountExpiry:Math.round((0,n.k9c)(e.minAccountExpiry.toNumber())),minMaxEphemeralAccountBalance:(0,a.qN)(e.minMaxEphemeralAccountBalance).toString()}}function s(e,i){return{...i,minShards:e.minShards.toNumber(),totalShards:e.totalShards.toNumber()}}function u(e,i){return{...i,includeRedundancyMaxStoragePrice:e.includeRedundancyMaxStoragePrice,includeRedundancyMaxUploadPrice:e.includeRedundancyMaxUploadPrice}}function m(e,i,t,r){let d=r?{includeRedundancyMaxStoragePrice:r.includeRedundancyMaxStoragePrice,includeRedundancyMaxUploadPrice:r.includeRedundancyMaxUploadPrice}:o.Uy,l={minShards:new(c())(t.minShards),totalShards:new(c())(t.totalShards)};return{...e?{contractSet:e.default}:o.jG,maxStoragePrice:(0,a.ll)(new(c())(i.maxStoragePrice).times((0,n.S5V)(1)).times((0,n.xf5)(1)).times(x(l.minShards,l.totalShards,d.includeRedundancyMaxStoragePrice)),o.Lo),maxUploadPrice:(0,a.ll)(new(c())(i.maxUploadPrice).times(x(l.minShards,l.totalShards,d.includeRedundancyMaxUploadPrice)),o.Lo),maxDownloadPrice:(0,a.ll)(i.maxDownloadPrice,o.Lo),maxContractPrice:(0,a.ll)(i.maxContractPrice,o.Lo),maxRpcPrice:(0,a.ll)(i.maxRPCPrice,o.Lo).times(1e6),minMaxCollateral:(0,a.ll)(i.minMaxCollateral,o.Lo),hostBlockHeightLeeway:new(c())(i.hostBlockHeightLeeway),minPriceTableValidity:new(c())((0,n.AEA)(i.minPriceTableValidity)),minAccountExpiry:new(c())((0,n.okB)(i.minAccountExpiry)),minMaxEphemeralAccountBalance:(0,a.ll)(i.minMaxEphemeralAccountBalance,o.Lo),...l,...d}}function h(e,i){let t=new(c())(1),n=e&&i&&!e.isZero()&&!i.isZero()&&i.gte(e);return n&&(t=i.div(e)),t}function x(e,i,t){let n=h(e,i);return t?n:new(c())(1)}},16133:function(e,i,t){t.d(i,{J:function(){return m}});var n=t(52322),a=t(58422),r=t(73621),c=t(6391),o=t.n(c),d=t(74881),l=t(41491),s=t(30650);function u(){var e,i;let{openDialog:t}=(0,s.Rh)(),c=(0,r.gM)({config:{swr:{revalidateOnFocus:!1}}}),o=(0,r.GJ)({config:{swr:{revalidateOnFocus:!1}}}),d=(0,r.cQ)(),u=(0,l.n)();return(0,n.jsxs)(a.HfT,{name:"renterd",peerCount:null===(e=d.data)||void 0===e?void 0:e.length,connectPeer:()=>t("connectPeer"),isSynced:u.isSynced,percent:u.percent,nodeBlockHeight:u.nodeBlockHeight,estimatedBlockHeight:u.estimatedBlockHeight,firstTimeSyncing:u.firstTimeSyncing,moreThan100BlocksToSync:u.moreThan100BlocksToSync,children:[(0,n.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,n.jsx)(a.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,n.jsx)(a.xS1,{className:"overflow-hidden",size:"14",maxLength:50,value:o.data,type:"address"})]}),(0,n.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,n.jsx)(a.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,n.jsx)(a.xvT,{size:"14",children:null===(i=c.data)||void 0===i?void 0:i.Name})]})]})}function m(e){let i=(0,r.tM)(),{isSynced:t}=(0,l.n)();return(0,n.jsx)(a.tU3,{appName:"renterd",profile:(0,n.jsx)(u,{}),connectivityRoute:d.h,isSynced:t,walletBalance:i.data?new(o())(i.data):void 0,...e})}},15755:function(e,i,t){t.d(i,{e:function(){return o}});var n=t(52322),a=t(58422),r=t(74881),c=t(49227);function o(){let{autopilotMode:e}=(0,c.K)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.KJW,{title:"Files",route:r._.files.index,children:(0,n.jsx)(a.ROc,{})}),"on"===e&&(0,n.jsx)(a.KJW,{title:"Autopilot",route:r._.autopilot.index,children:(0,n.jsx)(a.aFQ,{})}),(0,n.jsx)(a.KJW,{title:"Configuration",route:r._.config.index,children:(0,n.jsx)(a.wWN,{})}),(0,n.jsx)(a.KJW,{title:"Contracts",route:r._.contracts.index,children:(0,n.jsx)(a.VBo,{})}),(0,n.jsx)(a.KJW,{title:"Hosts",route:r._.hosts.index,children:(0,n.jsx)(a.VHe,{})})]})}},40121:function(e,i,t){t.d(i,{a:function(){return a}});var n=t(73621);function a(e){return(0,n.yu)({...e,params:{key:"contractset"}})}},41491:function(e,i,t){t.d(i,{n:function(){return r}});var n=t(28031),a=t(73621);function r(){var e,i;let{isUnlocked:t}=(0,n.Hv)(),r=(0,a.DQ)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.synced)?6e4:1e4}}}),c=(0,a.nH)(),o=r.data?null===(e=r.data)||void 0===e?void 0:e.blockHeight:0,d=t&&o&&c?Number((100*Math.min(o/c,1)).toFixed(1)):0;return{isSynced:null===(i=r.data)||void 0===i?void 0:i.synced,nodeBlockHeight:o,estimatedBlockHeight:c,percent:d,moreThan100BlocksToSync:!!o&&!!c&&c-o>100,firstTimeSyncing:!!o&&!!c&&c-o>5e4}}}}]);