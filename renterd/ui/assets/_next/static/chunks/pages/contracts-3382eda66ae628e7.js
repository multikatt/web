(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{7441:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contracts",function(){return t(9563)}])},362:function(e,n,t){"use strict";t.d(n,{J:function(){return o}});var s=t(2322),l=t(6328),a=t(3621),i=t(6391),r=t.n(i),c=t(4881);function o(e){let n=(0,a.tM)();return(0,s.jsx)(l.tU3,{appName:"renterd",connectivityRoute:c.h,walletBalance:n.data?new(r())(n.data):void 0,...e})}},5755:function(e,n,t){"use strict";t.d(n,{e:function(){return r}});var s=t(2322),l=t(6328),a=t(4881),i=t(3121);function r(){let{autopilotMode:e}=(0,i.K)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.KJW,{title:"Files",route:a._.files.index,children:(0,s.jsx)(l.ROc,{})}),"on"===e&&(0,s.jsx)(l.KJW,{title:"Autopilot",route:a._.autopilot.index,children:(0,s.jsx)(l.aFQ,{})}),(0,s.jsx)(l.KJW,{title:"Contracts",route:a._.contracts.index,children:(0,s.jsx)(l.VBo,{})}),(0,s.jsx)(l.KJW,{title:"Hosts",route:a._.hosts.index,children:(0,s.jsx)(l.VHe,{})}),(0,s.jsx)(l.KJW,{title:"Configuration",route:a._.config.index,children:(0,s.jsx)(l.wWN,{})})]})}},9563:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var s=t(2322),l=t(5755),a=t(4881),i=t(6328),r=t(650),c=t(5571),o=t(362);function u(){return(0,s.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,s.jsx)(i.xvT,{children:(0,s.jsx)(i.Hb6,{className:"scale-[200%]"})}),(0,s.jsx)(i.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No active contracts matching filters."})]})}function x(){return(0,s.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,s.jsx)(i.xvT,{children:(0,s.jsx)(i.VBo,{className:"scale-[200%]"})}),(0,s.jsx)(i.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"There are currently no active contracts. Configure autopilot or manually form contracts to get started."})]})}var d=t(9182),j=t(2784),h=t(7039);function p(){let{filters:e,removeFilter:n,removeLastFilter:t}=(0,c.G)(),[l,a]=(0,j.useState)(!1),[r,o]=(0,j.useState)(""),[u,x]=(0,j.useState)([]),p=u[u.length-1],f=(u.length,(0,j.useRef)(null)),m=(0,j.useRef)(null),v=(0,j.useCallback)(e=>{x(n=>[...n,e])},[x]),g=(0,j.useCallback)(()=>{x([])},[x]);(0,j.useEffect)(()=>{let e=e=>{f.current&&!f.current.contains(e.target)&&a(!1)};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}},[]);let b=(0,j.useCallback)(()=>{var e;null===(e=m.current)||void 0===e||e.focus()},[m]),C=(0,j.useCallback)(()=>{o(""),g()},[g]);return(0,s.jsxs)("div",{className:"flex gap-1",children:[e.map(e=>(0,s.jsxs)(i.eQh,{children:[(0,s.jsx)(i.zxk,{variant:"active",state:"waiting",children:e.label}),(0,s.jsx)(i.zxk,{variant:"active",size:"small",onClick:()=>n(e.id),children:(0,s.jsx)(i.PcV,{})})]},e.id)),(0,s.jsxs)(d.mY,{ref:f,label:"Command Menu",onFocus:()=>a(!0),onKeyDown:e=>{if(u.length>0)"Escape"!==e.key&&("Backspace"!==e.key||r)||(e.preventDefault(),x(e=>e.slice(0,-1)));else if(0===u.length&&("Backspace"!==e.key||r||t(),"Escape"===e.key&&!r)){var n;a(!1),null===(n=m.current)||void 0===n||n.blur()}},children:[(0,s.jsx)(d.mY.Input,{ref:m,value:r,onValueChange:o,className:(0,i.cEb)({variant:"ghost",focus:"none"}),placeholder:"Filter contracts"}),l&&(0,s.jsx)(i.s_4,{className:"absolute z-20 min-w-[200px] max-h-[400px] overflow-auto p-1",children:(0,s.jsxs)(i.xrM,{children:[p&&(0,s.jsx)(i.__J,{className:"px-1.5 py-1",children:p.label}),(0,s.jsx)(d.mY.List,{children:(0,s.jsx)(h.F,{currentPage:p,beforeSelect:b,afterSelect:C,pushPage:v})})]})})]})]})}function f(){let{configurableColumns:e,toggleColumnVisibility:n,resetDefaultColumnVisibility:t,setColumnsVisible:l,setColumnsHidden:a,sortOptions:r,sortColumn:o,setSortColumn:u,sortDirection:x,setSortDirection:d,enabledColumns:j}=(0,c.G)(),h=e.filter(e=>"general"===e.category).map(e=>({label:e.label,value:e.id})),p=e.filter(e=>"time"===e.category).map(e=>({label:e.label,value:e.id})),f=e.filter(e=>"financial"===e.category).map(e=>({label:e.label,value:e.id}));return(0,s.jsxs)(i.J2e,{trigger:(0,s.jsxs)(i.zxk,{size:"small",tip:"Configure view",tipAlign:"end",children:[(0,s.jsx)(i.hiv,{}),"View",(0,s.jsx)(i.EMN,{})]}),contentProps:{align:"end",className:"max-w-[300px]"},children:[(0,s.jsxs)(i.WVB,{children:[(0,s.jsx)(i.__J,{children:"Order by"}),(0,s.jsx)(i.kFS,{children:(0,s.jsx)(i.PhF,{value:o,onChange:e=>{u(e.currentTarget.value)},children:Object.entries(r).map(e=>{let[n,t]=e;return(0,s.jsx)("optgroup",{label:n,children:t.map(e=>(0,s.jsx)("option",{value:e.id,children:e.label},e.id))},n)})})})]}),(0,s.jsxs)(i.WVB,{children:[(0,s.jsx)(i.__J,{children:"Direction"}),(0,s.jsx)(i.kFS,{children:(0,s.jsxs)(i.PhF,{value:x,onClick:e=>{e.stopPropagation()},onChange:e=>{d(e.currentTarget.value)},children:[(0,s.jsx)("option",{value:"desc",children:"Descending"},"desc"),(0,s.jsx)("option",{value:"asc",children:"Ascending"},"asc")]})})]}),(0,s.jsx)(i.Clw,{}),(0,s.jsxs)(i.WVB,{children:[(0,s.jsx)(i.__J,{children:"Display properties"}),(0,s.jsx)(i.kFS,{children:(0,s.jsx)(i.zxk,{tip:"Reset all to defaults",variant:"ghost",onClick:e=>{e.stopPropagation(),t()},children:(0,s.jsx)(i.Wet,{})})})]}),(0,s.jsx)(i.FzK,{label:"General",columns:h.map(e=>e.value),enabled:j,setColumnsVisible:l,setColumnsHidden:a}),(0,s.jsx)(i.WVB,{children:(0,s.jsx)(i.j4H,{options:h,values:j,onChange:e=>n(e)})}),(0,s.jsx)(i.FzK,{label:"Time",columns:p.map(e=>e.value),enabled:j,setColumnsVisible:l,setColumnsHidden:a}),(0,s.jsx)(i.WVB,{children:(0,s.jsx)(i.j4H,{options:p,values:j,onChange:e=>n(e)})}),(0,s.jsx)(i.FzK,{label:"Financial",columns:f.map(e=>e.value),enabled:j,setColumnsVisible:l,setColumnsHidden:a}),(0,s.jsx)(i.WVB,{children:(0,s.jsx)(i.j4H,{options:f,values:j,onChange:e=>n(e)})})]})}function m(){let{dataState:e,offset:n,limit:t,datasetCount:l,pageCount:a}=(0,c.G)();return(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(i.uDJ,{isLoading:"loading"===e,offset:n,limit:t,datasetTotal:l,pageTotal:a}),(0,s.jsx)(f,{})]})}function v(){return(0,s.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,s.jsx)(i.xvT,{children:(0,s.jsx)(i.Ckx,{className:"scale-[200%]"})}),(0,s.jsx)(i.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"Error fetching contracts."})]})}function g(){let{openDialog:e}=(0,r.Rh)(),{columns:n,datasetPage:t,sortColumn:d,sortDirection:j,toggleSort:h,limit:f,dataState:g,cellContext:b}=(0,c.G)();return(0,s.jsx)(o.J,{title:"Active contracts",routes:a._,sidenav:(0,s.jsx)(l.e,{}),openSettings:()=>e("settings"),nav:(0,s.jsx)(p,{}),size:"full",actions:(0,s.jsx)(m,{}),children:(0,s.jsx)("div",{className:"p-5 min-w-fit",children:(0,s.jsx)(i.iA_,{context:b,isLoading:"loading"===g,emptyState:"noneMatchingFilters"===g?(0,s.jsx)(u,{}):"noneYet"===g?(0,s.jsx)(x,{}):"error"===g?(0,s.jsx)(v,{}):null,pageSize:f,data:t,columns:n,sortDirection:j,sortColumn:d,toggleSort:h})})})}function b(){return(0,s.jsx)(g,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7441)}),_N_E=e.O()}]);