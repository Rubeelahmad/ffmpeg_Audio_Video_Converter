(this["webpackJsonpvideo-conveter"]=this["webpackJsonpvideo-conveter"]||[]).push([[5,7],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var r=n(89),a=n(90),c=n.n(a),o=n(91),s=n(101),i=n.n(s),l=n(88),u=n(87),d=l.a.BASE_API_URL;function p(e,t,n){return b.apply(this,arguments)}function b(){return(b=Object(r.a)(c.a.mark((function e(t,n,r){var a,s,l,p,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={headers:{"Content-Type":"application/json"}},e.prev=1,l={},"video"!=r.toLowerCase()){e.next=15;break}if(!i.a.find(u.d,(function(e){return(null===e||void 0===e?void 0:e.name.toLowerCase())===n.toLowerCase()}))){e.next=11;break}return e.next=8,o.a.post("".concat(d,"/file-info/video-converter?to=").concat(n),t,a);case 8:l=e.sent,e.next=13;break;case 11:p={code:400,message:"".concat(n," is not supported"),items:[]},l.data=p;case 13:e.next=31;break;case 15:if("audio"!=r.toLowerCase()){e.next=27;break}if(!i.a.find(u.a,(function(e){return(null===e||void 0===e?void 0:e.name.toLowerCase())===n.toLowerCase()}))){e.next=23;break}return e.next=20,o.a.post("".concat(d,"/file-info/audio-converter?to=").concat(n),t,a);case 20:l=e.sent,e.next=25;break;case 23:b={code:400,message:"".concat(n," is not supported"),items:[]},l.data=b;case 25:e.next=31;break;case 27:if("mp4-to-mp3"!=r.toLowerCase()){e.next=31;break}return e.next=30,o.a.post("".concat(d,"/file-info/audio-converter"),t,a);case 30:l=e.sent;case 31:return e.abrupt("return",null===(s=l)||void 0===s?void 0:s.data);case 34:throw e.prev=34,e.t0=e.catch(1),e.t0;case 37:case"end":return e.stop()}}),e,null,[[1,34]])})))).apply(this,arguments)}function v(e){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:({headers:{"Content-Type":"application/json"}}),e.prev=1,fetch("".concat(d,"file-info/download?file_name=").concat(t)).then((function(e){return e.blob()})).then((function(e){URL.createObjectURL(e);var n=new Blob([e]),r=document.createElement("a");r.href=window.URL.createObjectURL(n),r.download="".concat(t),r.click()})),e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(1),e.t0;case 8:case"end":return e.stop()}}),e,null,[[1,5]])})))).apply(this,arguments)}},102:function(e,t,n){"use strict";var r=n(89),a=n(2),c=n(6),o=n(90),s=n.n(o),i=n(0),l=n(103),u=n(100),d=n(96),p=n(93),b=n(97),v=n(94),f=n(95),j=n(185),h=n(1),m={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"80px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#3c3c3c",backgroundImage:"linear-gradient(45deg, rgba(0, 0, 0, .06) 25%, transparent 0), linear-gradient(-45deg, rgba(0, 0, 0, .06) 25%, transparent 0), linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, .06) 0), linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, .06) 0)",backgroundSize:"24px 24px",backgroundPosition:"0 0, 0 12px, 12px -12px, -12px 0",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},x={borderColor:"#2196f3"},O={borderColor:"#00e676"},g={borderColor:"#ff1744"},w={btnColor:{backgroundColor:"#f33",color:"white"}};t.a=function(e){var t=Object(i.useState)(null),n=Object(c.a)(t,2),o=n[0],y=n[1],k=Object(i.useState)(!1),C=Object(c.a)(k,2),A=C[0],L=C[1],N=Object(i.useState)(!1),S=Object(c.a)(N,2),R=S[0],F=S[1],M=Object(i.useState)(!1),P=Object(c.a)(M,2),T=P[0],_=P[1],B=Object(i.useState)(!1),U=Object(c.a)(B,2),E=U[0],I=U[1],V=Object(i.useState)(null),D=Object(c.a)(V,2),W=D[0],G=D[1],Y=Object(i.useState)(null),z=Object(c.a)(Y,2),J=z[0],H=z[1],K=Object(i.useState)(null),q=Object(c.a)(K,2),Q=q[0],X=q[1],Z=Object(i.useState)({}),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ne=Object(l.a)({}),re=ne.getRootProps,ae=ne.getInputProps,ce=(ne.open,ne.isDragActive),oe=ne.isDragAccept,se=ne.isDragReject,ie=Object(i.useMemo)((function(){return Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({},m),ce?x:{}),oe?O:{}),se?g:{})}),[ce,se,oe]),le=function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=R&&1!=T){e.next=7;break}return e.next=3,Object(b.b)(Q);case 3:1==e.sent&&(X(null),y(null),H(null),_(!1),F(!1),L(!1)),e.next=8;break;case 7:1==A&&(X(null),y(null),H(null),_(!1),F(!1),L(!1));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(r.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!0,1!=T&&1!=R){e.next=5;break}return e.next=4,Object(b.b)(Q);case 4:n=e.sent;case 5:n&&(_(!1),F(!1),L(!0),r=t.target.files[0],X(null===r||void 0===r?void 0:r.name),H(null),y(r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(r.a)(s.a.mark((function e(){var t,n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G("File Uploading..."),I(!0),t={file:o},e.prev=3,e.next=6,Object(b.a)(t);case 6:200==(null===(n=e.sent)||void 0===n?void 0:n.code)?(L(!1),F(!0),_(!1),X(null===n||void 0===n||null===(r=n.items)||void 0===r?void 0:r.name),te(null===n||void 0===n?void 0:n.items),Object(p.b)("".concat(null===n||void 0===n||null===(a=n.items)||void 0===a?void 0:a.name," uploaded successfully!"))):Object(p.a)("File dose not uploaded due to internal error!"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Error::::::::: handle convert function",e.t0),Object(p.a)();case 14:return e.prev=14,I(!1),G(null),e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[3,10,14,18]])})));return function(){return e.apply(this,arguments)}}(),pe=function(){var t=Object(r.a)(s.a.mark((function t(){var n,r,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return G("File Converting..."),I(!0),t.prev=2,t.next=5,Object(u.a)(ee,e.converterType,e.converter);case 5:(null===(n=t.sent)||void 0===n?void 0:n.code)>=200||(null===n||void 0===n?void 0:n.code)<205?(y(null),_(!0),L(!1),F(!1),X(null===n||void 0===n||null===(r=n.items)||void 0===r?void 0:r.name),H(null===n||void 0===n||null===(a=n.items)||void 0===a?void 0:a.name),Object(p.b)(n.message)):Object(p.a)(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),console.error("Error::::::::: handle convert function",t.t0),Object(p.a)();case 13:return t.prev=13,I(!1),G(null),t.finish(13);case 17:case"end":return t.stop()}}),t,null,[[2,9,13,17]])})));return function(){return t.apply(this,arguments)}}(),be=function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(u.b)(J);case 3:t=e.sent,console.log("File:::::::::",t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error::::::::: handle convert function",e.t0),Object(p.a)();case 11:return e.prev=11,e.finish(11);case 13:case"end":return e.stop()}}),e,null,[[0,7,11,13]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"",children:A||R||T?Object(h.jsx)("table",{className:"table",children:Object(h.jsx)("tbody",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Q}),Object(h.jsx)("th",{children:A?Object(h.jsx)("button",{type:"button",style:w.btnColor,disabled:E,className:"btn",onClick:de,children:"Upload"}):R?Object(h.jsx)("button",{type:"button",style:w.btnColor,disabled:E,className:"btn",onClick:pe,children:"Convert"}):T?Object(h.jsx)("button",{type:"button",disabled:E,style:w.btnColor,className:"btn",onClick:be,children:"Download File"}):""}),Object(h.jsx)("th",{children:Object(h.jsx)(v.a,{className:"text-danger",style:{fontSize:"24px",cursor:"pointer"},title:"Remove file",icon:f.e,onClick:le})})]})})}):""}),E?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{style:{textAlign:"center"},children:Object(h.jsx)("h5",{children:W})}),Object(h.jsx)(d.a,{isLoaded:E})]}):Object(h.jsxs)("div",Object(a.a)(Object(a.a)({},re({style:ie})),{},{children:[Object(h.jsx)("input",Object(a.a)(Object(a.a)({},ae()),{},{onChange:ue})),Object(h.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"}),Object(h.jsx)("button",{type:"file",className:"btn p-3 mt-3",style:w.btnColor,children:"Open File Dialog"})]}))]}),Object(h.jsx)("div",{children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(j.a.Header,{children:"This is card header1"}),Object(h.jsx)(j.a.Body,{children:"This is card body 1"})]})})]})}},112:function(e,t,n){"use strict";n.r(t);n(0);var r=n(10),a=n(102),c=n(1);t.default=function(e){var t=Object(r.h)().video_type.split("-")[0];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"text-center mt-5",children:[Object(c.jsxs)("h1",{style:{color:"#f33"},children:[Object(c.jsx)("span",{className:"text-uppercase",children:t})," Converter"]}),Object(c.jsxs)("h2",{className:"lead",children:["Convert your Video to and from ",Object(c.jsx)("span",{className:"text-uppercase",children:t}),", for free"]})]}),Object(c.jsx)("div",{className:"mt-5",children:Object(c.jsx)(a.a,{converterType:t,converter:"video"})})]})})}},194:function(e,t,n){"use strict";n.r(t);n(0);var r=n(10),a=(n(112),n(102)),c=(n(89),n(2),n(6),n(90),n(103),n(91),n(101),n(88));n(87),c.a.BASE_API_URL;n(96),n(93),n(97);var o=n(1);t.default=function(e){var t=Object(r.h)().audio_type.split("-")[0];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"text-center mt-5",children:[Object(o.jsxs)("h1",{children:[Object(o.jsx)("span",{className:"text-uppercase",children:t})," Converter"]}),Object(o.jsxs)("h6",{className:"lead",children:["Convert your file to and from ",Object(o.jsx)("span",{className:"text-uppercase",children:t}),", for free"]})]}),Object(o.jsx)("div",{className:"mt-4 mb-4",children:Object(o.jsx)(a.a,{converterType:t,converter:"audio"})})]})})}},87:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o}));var r=[{name:"MP4",path:"mp4-converter"},{name:"WEBM",path:"webm-converter"},{name:"FLV",path:"flv-converter"},{name:"MKV",path:"mkv-converter"},{name:"AVI",path:"avi-converter"},{name:"MOV",path:"mov-converter"},{name:"3GP",path:"3gp-converter"},{name:"WMV",path:"wmv-converter"}],a=[{name:"MP3",path:"mp3-converter"},{name:"WMA",path:"wma-converter"},{name:"MAV",path:"MAV-converter"},{name:"FLAC",path:"flac-converter"},{name:"MA4",path:"ma4-converter"},{name:"ALAC",path:"alac-converter"},{name:"AMR",path:"amr-converter"},{name:"OGG",path:"ogg-converter"},{name:"AIFF",path:"aiff-converter"},{name:"AAC",path:"aac-converter"}],c=[{name:"Video Compressor",path:"video-compressor"}],o=[{name:"MP4 To MP3",path:"mp4-to-mp3"}]},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={BASE_API_URL:"https://smallconverter.io/api/v1"}},91:function(e,t,n){"use strict";var r=n(104),a=n.n(r),c=n(88);t.a=a.a.create({baseURL:c.a.BASE_API_URL,responseType:"json"})},93:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(98),a=n.n(r),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Converted your media successfully!";a.a.fire("Success",e,"success")},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Internal error";a.a.fire({icon:"error",title:"Oops...",text:e})}},96:function(e,t,n){"use strict";n(0);var r=n(107),a=n(1);t.a=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"sweet-loading",style:{textAlign:"center",marginTop:"5%"},children:Object(a.jsx)(r.ScaleLoader,{color:"blue",height:100,loading:e.isLoaded})})})}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(89),a=n(90),c=n.n(a),o=n(98),s=n.n(o),i=n(93),l=n(91),u=n(88).a.BASE_API_URL;function d(e){return p.apply(this,arguments)}function p(){return(p=Object(r.a)(c.a.mark((function e(t){var n,r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,a={},(o=new FormData).append("file",t.file),e.next=7,l.a.post("".concat(u,"/file-info/file-upload"),o,n);case 7:return a=e.sent,e.abrupt("return",null===(r=a)||void 0===r?void 0:r.data);case 11:throw e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function b(e){return v.apply(this,arguments)}function v(){return(v=Object(r.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,a={},e.next=5,l.a.post("".concat(u,"/file-info/remove-file"),t,n);case 5:return a=e.sent,e.abrupt("return",null===(r=a)||void 0===r?void 0:r.data);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var f=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:t},e.prev=1,e.next=4,s.a.fire({title:"Are you sure?",text:"You want to remove ".concat(t),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, remove it!"});case 4:if(!e.sent.isConfirmed){e.next=13;break}return e.next=8,b(n);case 8:return e.sent,s.a.fire("Removed!","Your file has been Removed.","success"),e.abrupt("return",!0);case 13:return e.abrupt("return",!1);case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),console.error("Error::::::::: handle remove file function",e.t0),Object(i.a)();case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=5.58ecb682.chunk.js.map