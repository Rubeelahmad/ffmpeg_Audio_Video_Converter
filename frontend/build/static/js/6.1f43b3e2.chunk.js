(this["webpackJsonpvideo-conveter"]=this["webpackJsonpvideo-conveter"]||[]).push([[6],{100:function(e,t,n){"use strict";n(0);var r=n(109),a=n(1);t.a=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"sweet-loading",style:{textAlign:"center",marginTop:"5%"},children:Object(a.jsx)(r.ScaleLoader,{color:"blue",height:100,loading:e.isLoaded})})})}},101:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(93),a=n.n(r),c=n(94),o=n(102),s=n.n(o),i=n(97),u=n(95),l=n(92).a.BASE_API_URL;function d(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(a.a.mark((function e(t){var n,r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,c={},(o=new FormData).append("file",t.file),e.next=7,u.a.post("".concat(l,"file-info/file-upload"),o,n);case 7:return c=e.sent,e.abrupt("return",null===(r=c)||void 0===r?void 0:r.data);case 11:throw e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function b(e){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,c={},e.next=5,u.a.post("".concat(l,"file-info/remove-file"),t,n);case 5:return c=e.sent,e.abrupt("return",null===(r=c)||void 0===r?void 0:r.data);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var f=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:t},e.prev=1,e.next=4,s.a.fire({title:"Are you sure?",text:"You want to remove ".concat(t),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, remove it!"});case 4:if(!e.sent.isConfirmed){e.next=13;break}return e.next=8,b(n);case 8:return e.sent,s.a.fire("Removed!","Your file has been Removed.","success"),e.abrupt("return",!0);case 13:return e.abrupt("return",!1);case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),console.error("Error::::::::: handle remove file function",e.t0),Object(i.a)();case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}()},105:function(e,t,n){"use strict";var r=n(93),a=n.n(r),c=n(94),o=n(2),s=n(6),i=n(0),u=n(104),l=n(95),d=n(103),p=n.n(d),b=n(92),v=n(91),f=b.a.BASE_API_URL;function j(e,t,n){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(a.a.mark((function e(t,n,r){var c,o,s,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c={headers:{"Content-Type":"application/json"}},e.prev=1,s={},"video"!=r.toLowerCase()){e.next=15;break}if(!p.a.find(v.d,(function(e){return(null===e||void 0===e?void 0:e.name.toLowerCase())===n.toLowerCase()}))){e.next=11;break}return e.next=8,l.a.post("".concat(f,"file-info/video-converter?to=").concat(n),t,c);case 8:s=e.sent,e.next=13;break;case 11:i={code:400,message:"".concat(n," is not supported"),items:[]},s.data=i;case 13:e.next=31;break;case 15:if("audio"!=r.toLowerCase()){e.next=27;break}if(!p.a.find(v.a,(function(e){return(null===e||void 0===e?void 0:e.name.toLowerCase())===n.toLowerCase()}))){e.next=23;break}return e.next=20,l.a.post("".concat(f,"file-info/audio-converter?to=").concat(n),t,c);case 20:s=e.sent,e.next=25;break;case 23:u={code:400,message:"".concat(n," is not supported"),items:[]},s.data=u;case 25:e.next=31;break;case 27:if("mp4-to-mp3"!=r.toLowerCase()){e.next=31;break}return e.next=30,l.a.post("".concat(f,"file-info/audio-converter"),t,c);case 30:s=e.sent;case 31:return e.abrupt("return",null===(o=s)||void 0===o?void 0:o.data);case 34:throw e.prev=34,e.t0=e.catch(1),e.t0;case 37:case"end":return e.stop()}}),e,null,[[1,34]])})))).apply(this,arguments)}var m=n(100),x=n(97),O=n(101),g=n(98),k=n(99),C=n(191),w=n(1),y={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"80px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#3c3c3c",backgroundImage:"linear-gradient(45deg, rgba(0, 0, 0, .06) 25%, transparent 0), linear-gradient(-45deg, rgba(0, 0, 0, .06) 25%, transparent 0), linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, .06) 0), linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, .06) 0)",backgroundSize:"24px 24px",backgroundPosition:"0 0, 0 12px, 12px -12px, -12px 0",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},A={borderColor:"#2196f3"},L={borderColor:"#00e676"},S={borderColor:"#ff1744"},M={btnColor:{backgroundColor:"#f33",color:"white"}};t.a=function(e){var t=Object(i.useState)(null),n=Object(s.a)(t,2),r=n[0],l=n[1],d=Object(i.useState)(!1),p=Object(s.a)(d,2),b=p[0],v=p[1],f=Object(i.useState)(!1),h=Object(s.a)(f,2),P=h[0],F=h[1],N=Object(i.useState)(!1),R=Object(s.a)(N,2),B=R[0],I=R[1],T=Object(i.useState)(!1),_=Object(s.a)(T,2),E=_[0],D=_[1],U=Object(i.useState)(null),V=Object(s.a)(U,2),W=V[0],G=V[1],Y=Object(i.useState)(null),z=Object(s.a)(Y,2),J=(z[0],z[1]),H=Object(i.useState)(null),K=Object(s.a)(H,2),q=K[0],Q=K[1],X=Object(i.useState)({}),Z=Object(s.a)(X,2),$=Z[0],ee=Z[1],te=Object(u.a)({}),ne=te.getRootProps,re=te.getInputProps,ae=te.open,ce=te.isDragActive,oe=te.isDragAccept,se=te.isDragReject,ie=Object(i.useMemo)((function(){return Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({},y),ce?A:{}),oe?L:{}),se?S:{})}),[ce,se,oe]),ue=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=P&&1!=B){e.next=7;break}return e.next=3,Object(O.b)(q);case 3:1==e.sent&&(Q(null),l(null),J(null),I(!1),F(!1),v(!1)),e.next=8;break;case 7:1==b&&(Q(null),l(null),J(null),I(!1),F(!1),v(!1));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!0,1!=B&&1!=P){e.next=5;break}return e.next=4,Object(O.b)(q);case 4:n=e.sent;case 5:n&&(I(!1),F(!1),v(!0),r=t.target.files[0],Q(null===r||void 0===r?void 0:r.name),J(null),l(r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G("File Uploading..."),D(!0),t={file:r},e.prev=3,e.next=6,Object(O.a)(t);case 6:200==(null===(n=e.sent)||void 0===n?void 0:n.code)?(v(!1),F(!0),I(!1),Q(null===n||void 0===n||null===(c=n.items)||void 0===c?void 0:c.name),ee(null===n||void 0===n?void 0:n.items),Object(x.b)("".concat(null===n||void 0===n||null===(o=n.items)||void 0===o?void 0:o.name," uploaded successfully!"))):Object(x.a)("File dose not uploaded due to internal error!"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Error::::::::: handle convert function",e.t0),Object(x.a)();case 14:return e.prev=14,D(!1),G(null),e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[3,10,14,18]])})));return function(){return e.apply(this,arguments)}}(),pe=function(){var t=Object(c.a)(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return G("File Converting..."),D(!0),t.prev=2,t.next=5,j($,e.converterType,e.converter);case 5:(null===(n=t.sent)||void 0===n?void 0:n.code)>=200||(null===n||void 0===n?void 0:n.code)<205?(l(null),I(!0),v(!1),F(!1),Q(null===n||void 0===n||null===(r=n.items)||void 0===r?void 0:r.name),J("Link from backend"),Object(x.b)(n.message)):Object(x.a)(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),console.error("Error::::::::: handle convert function",t.t0),Object(x.a)();case 13:return t.prev=13,D(!1),G(null),t.finish(13);case 17:case"end":return t.stop()}}),t,null,[[2,9,13,17]])})));return function(){return t.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("div",{className:"",children:b||P||B?Object(w.jsx)("table",{className:"table",children:Object(w.jsx)("tbody",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:q}),Object(w.jsx)("th",{children:b?Object(w.jsx)("button",{type:"button",style:M.btnColor,disabled:E,className:"btn",onClick:de,children:"Upload"}):P?Object(w.jsx)("button",{type:"button",style:M.btnColor,disabled:E,className:"btn",onClick:pe,children:"Convert"}):B?Object(w.jsx)("button",{type:"button",disabled:E,style:M.btnColor,className:"btn",children:"Download File"}):""}),Object(w.jsx)("th",{children:Object(w.jsx)(g.a,{className:"text-danger",style:{fontSize:"24px",cursor:"pointer"},title:"Remove file",icon:k.e,onClick:ue})})]})})}):""}),E?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{style:{textAlign:"center"},children:Object(w.jsx)("h5",{children:W})}),Object(w.jsx)(m.a,{isLoaded:E})]}):Object(w.jsxs)("div",Object(o.a)(Object(o.a)({},ne({style:ie})),{},{children:[Object(w.jsx)("input",Object(o.a)(Object(o.a)({},re()),{},{onChange:le})),Object(w.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"}),Object(w.jsx)("button",{type:"button",className:"btn p-3 mt-3",style:M.btnColor,onClick:ae,children:"Open File Dialog"})]}))]}),Object(w.jsx)("div",{children:Object(w.jsxs)(C.a,{children:[Object(w.jsx)(C.a.Header,{children:"This is card header1"}),Object(w.jsx)(C.a.Body,{children:"This is card body 1"})]})})]})}},192:function(e,t,n){"use strict";n.r(t);n(0);var r=n(105),a=(n(93),n(94),n(2),n(6),n(104),n(95),n(103),n(92));n(91),a.a.BASE_API_URL;n(100),n(97),n(101);var c=n(1);t.default=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"text-center mt-5",children:[Object(c.jsxs)("h1",{children:[Object(c.jsx)("span",{className:"text-uppercase",children:"MP4 TO MP3"})," Converter"]}),Object(c.jsx)("h6",{className:"lead",children:"Convert your MP4 file to MP3, for free"})]}),Object(c.jsx)("div",{className:"mt-4 mb-4",children:Object(c.jsx)(r.a,{converter:"mp4-to-mp3"})})]})})}},91:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o}));var r=[{name:"MP4",path:"mp4-converter"},{name:"WEBM",path:"webm-converter"},{name:"FLV",path:"flv-converter"},{name:"MKV",path:"mkv-converter"},{name:"AVI",path:"avi-converter"},{name:"MOV",path:"mov-converter"},{name:"3GP",path:"3gp-converter"},{name:"WMV",path:"wmv-converter"}],a=[{name:"MP3",path:"mp3-converter"},{name:"WMA",path:"wma-converter"},{name:"MAV",path:"MAV-converter"},{name:"FLAC",path:"flac-converter"},{name:"MA4",path:"ma4-converter"},{name:"ALAC",path:"alac-converter"},{name:"AMR",path:"amr-converter"},{name:"OGG",path:"ogg-converter"},{name:"AIFF",path:"aiff-converter"},{name:"AAC",path:"aac-converter"}],c=[{name:"Video Compressor",path:"video-compressor"}],o=[{name:"MP4 To MP3",path:"mp4-to-mp3"}]},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={BASE_API_URL:"https://coverter-rubeel.herokuapp.com/api/v1/"}},95:function(e,t,n){"use strict";var r=n(106),a=n.n(r),c=n(92);t.a=a.a.create({baseURL:c.a.BASE_API_URL,responseType:"json"})},97:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(102),a=n.n(r),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Converted your media successfully!";a.a.fire("Success",e,"success")},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Internal error";a.a.fire({icon:"error",title:"Oops...",text:e})}}}]);
//# sourceMappingURL=6.1f43b3e2.chunk.js.map