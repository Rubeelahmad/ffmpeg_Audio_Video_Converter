(this["webpackJsonpvideo-conveter"]=this["webpackJsonpvideo-conveter"]||[]).push([[8],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var a=n(89),r=n(90),c=n.n(r),s=n(91),o=n(101),i=n.n(o),l=n(88),u=n(87),d=l.a.BASE_API_URL;function b(e,t,n){return p.apply(this,arguments)}function p(){return(p=Object(a.a)(c.a.mark((function e(t,n,a){var r,o,l,b,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={headers:{"Content-Type":"application/json"}},e.prev=1,l={},"video"!=a.toLowerCase()){e.next=15;break}if(!i.a.find(u.d,(function(e){return(null===e||void 0===e?void 0:e.name.toLowerCase())===n.toLowerCase()}))){e.next=11;break}return e.next=8,s.a.post("".concat(d,"/file-info/video-converter?to=").concat(n),t,r);case 8:l=e.sent,e.next=13;break;case 11:b={code:400,message:"".concat(n," is not supported"),items:[]},l.data=b;case 13:e.next=31;break;case 15:if("audio"!=a.toLowerCase()){e.next=27;break}if(!i.a.find(u.a,(function(e){return(null===e||void 0===e?void 0:e.name.toLowerCase())===n.toLowerCase()}))){e.next=23;break}return e.next=20,s.a.post("".concat(d,"/file-info/audio-converter?to=").concat(n),t,r);case 20:l=e.sent,e.next=25;break;case 23:p={code:400,message:"".concat(n," is not supported"),items:[]},l.data=p;case 25:e.next=31;break;case 27:if("mp4-to-mp3"!=a.toLowerCase()){e.next=31;break}return e.next=30,s.a.post("".concat(d,"/file-info/audio-converter"),t,r);case 30:l=e.sent;case 31:return e.abrupt("return",null===(o=l)||void 0===o?void 0:o.data);case 34:throw e.prev=34,e.t0=e.catch(1),e.t0;case 37:case"end":return e.stop()}}),e,null,[[1,34]])})))).apply(this,arguments)}function j(e){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:({headers:{"Content-Type":"application/json"}}),e.prev=1,fetch("".concat(d,"file-info/download?file_name=").concat(t)).then((function(e){return e.blob()})).then((function(e){URL.createObjectURL(e);var n=new Blob([e]),a=document.createElement("a");a.href=window.URL.createObjectURL(n),a.download="".concat(t),a.click()})),e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(1),e.t0;case 8:case"end":return e.stop()}}),e,null,[[1,5]])})))).apply(this,arguments)}},193:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(185),c=n(89),s=n(2),o=n(6),i=n(90),l=n.n(i),u=n(103),d=n(96),b=n(93),p=n(191),j=n(187),h=n(184),v=n(1),x=function(e){var t=e.handleTargetSizeInMB,n=e.sizeInMB;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(j.a,{className:"mt-3",children:[Object(v.jsx)(h.a,{xs:4,className:"text-end",children:Object(v.jsx)(p.a.Label,{children:"Target Size (MB)"})}),Object(v.jsxs)(h.a,{xs:8,children:[Object(v.jsx)(p.a.Control,{type:"number",size:"sm",value:n,onChange:t}),Object(v.jsx)(p.a.Text,{className:"text-muted",children:"Enter desired video file size in MB (Megabytes)"})]})]})})},m=n(188),f=function(e){var t=e.handleTargetSizeInPercentage,n=e.sizeInPercentage;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(j.a,{className:"mt-3",children:[Object(v.jsx)(h.a,{xs:4,className:"text-end",children:Object(v.jsx)(p.a.Label,{children:"Select Target Size (%)"})}),Object(v.jsx)(h.a,{xs:8,children:Object(v.jsxs)(j.a,{children:[Object(v.jsx)(h.a,{xs:6,children:Object(v.jsx)(p.a.Range,{type:"text",size:"sm",min:"1",max:"100",value:n,onChange:t})}),Object(v.jsxs)(h.a,{xs:6,children:[Object(v.jsx)(p.a.Label,{htmlFor:"inlineFormInputGroup",visuallyHidden:!0}),Object(v.jsxs)(m.a,{className:"mb-2",children:[Object(v.jsx)(p.a.Control,{type:"number",min:"1",max:"100",id:"inlineFormInputGroup",placeholder:"File size percentage value",value:n,onChange:t}),Object(v.jsx)(m.a.Text,{children:"%"})]})]}),Object(v.jsx)(p.a.Text,{className:"text-muted",children:"Select a target file size as a percentage of the original. Smaller values compress more. For example, a 100Mb file would become 25Mb if you select 25%."})]})})]})})},O=n(91),g=(n(101),n(88)),y=(n(87),g.a.BASE_API_URL);function C(e){return w.apply(this,arguments)}function w(){return(w=Object(c.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,r={},e.next=5,O.a.post("".concat(y,"/file-info/video-compress"),t,n);case 5:return r=e.sent,console.log("Data::::::::::::::: resposne::::::::::: ",r.data),e.abrupt("return",null===(a=r)||void 0===a?void 0:a.data);case 10:throw e.prev=10,e.t0=e.catch(1),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}var k=n(97),S=n(94),N=n(95),L=n(100),M={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"80px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#3c3c3c",backgroundImage:"linear-gradient(45deg, rgba(0, 0, 0, .06) 25%, transparent 0), linear-gradient(-45deg, rgba(0, 0, 0, .06) 25%, transparent 0), linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, .06) 0), linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, .06) 0)",backgroundSize:"24px 24px",backgroundPosition:"0 0, 0 12px, 12px -12px, -12px 0",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},z={borderColor:"#2196f3"},A={borderColor:"#00e676"},T={borderColor:"#ff1744"},I={btnColor:{backgroundColor:"#f33",color:"white"}},B=["264","265"],F=["Target a file size (MB)","Target a file size (Percentage)"];var P=function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),i=n[0],m=n[1],O=Object(a.useState)(!1),g=Object(o.a)(O,2),y=g[0],w=g[1],P=Object(a.useState)(null),R=Object(o.a)(P,2),E=R[0],U=R[1],V=Object(a.useState)(B[0]),_=Object(o.a)(V,2),D=_[0],H=_[1],G=Object(a.useState)(F[0]),W=Object(o.a)(G,2),Y=W[0],q=W[1],J=Object(a.useState)(0),K=Object(o.a)(J,2),Q=K[0],X=K[1],Z=Object(a.useState)(1),$=Object(o.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)(60),ae=Object(o.a)(ne,2),re=ae[0],ce=ae[1],se=Object(a.useState)(!1),oe=Object(o.a)(se,2),ie=oe[0],le=oe[1],ue=Object(a.useState)(!1),de=Object(o.a)(ue,2),be=de[0],pe=de[1],je=Object(a.useState)(!1),he=Object(o.a)(je,2),ve=he[0],xe=he[1],me=Object(a.useState)(null),fe=Object(o.a)(me,2),Oe=fe[0],ge=fe[1],ye=Object(a.useState)(null),Ce=Object(o.a)(ye,2),we=Ce[0],ke=Ce[1],Se=Object(a.useState)({}),Ne=Object(o.a)(Se,2),Le=Ne[0],Me=Ne[1],ze=Object(u.a)({}),Ae=ze.getRootProps,Te=ze.getInputProps,Ie=(ze.open,ze.isDragActive),Be=ze.isDragAccept,Fe=ze.isDragReject,Pe=Object(a.useMemo)((function(){return Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({},M),Ie?z:{}),Be?A:{}),Fe?T:{})}),[Ie,Fe,Be]),Re=function(){var e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=be&&1!=ve){e.next=7;break}return e.next=3,Object(k.b)(we);case 3:1==e.sent&&(ke(null),m(null),ge(null),xe(!1),pe(!1),le(!1)),e.next=8;break;case 7:1==ie&&(ke(null),m(null),ge(null),xe(!1),pe(!1),le(!1));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(c.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!0,1!=ve&&1!=be){e.next=5;break}return e.next=4,Object(k.b)(we);case 4:n=e.sent;case 5:n&&(xe(!1),pe(!1),le(!0),a=t.target.files[0],ke(null===a||void 0===a?void 0:a.name),ge(null),m(a));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(c.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U("File Uploading..."),w(!0),t={file:i},e.prev=3,e.next=6,Object(k.a)(t);case 6:200==(null===(n=e.sent)||void 0===n?void 0:n.code)?(le(!1),pe(!0),xe(!1),ke(null===n||void 0===n||null===(a=n.items)||void 0===a?void 0:a.name),Me(null===n||void 0===n?void 0:n.items),Object(b.b)("".concat(null===n||void 0===n||null===(r=n.items)||void 0===r?void 0:r.name," uploaded successfully!"))):Object(b.a)("File dose not uploaded due to internal error!"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Error::::::::: handle convert function",e.t0),Object(b.a)();case 14:return e.prev=14,w(!1),U(null),e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[3,10,14,18]])})));return function(){return e.apply(this,arguments)}}(),Ve=function(){var e=Object(c.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U("File Compressing..."),w(!0),e.prev=2,t={id:null===Le||void 0===Le?void 0:Le.id,name:null===Le||void 0===Le?void 0:Le.name,videoCodec:D,compressionMethod:Y,sizeInMB:ee,sizeInPercentage:re},e.next=6,C(t);case 6:(null===(n=e.sent)||void 0===n?void 0:n.code)>=200||(null===n||void 0===n?void 0:n.code)<205?(m(null),xe(!0),le(!1),pe(!1),ke(null===n||void 0===n||null===(a=n.items)||void 0===a?void 0:a.name),ge(null===n||void 0===n||null===(r=n.items)||void 0===r?void 0:r.name),Object(b.b)(n.message)):Object(b.a)(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.error("Error::::::::: handle convert function",e.t0),Object(b.a)();case 14:return e.prev=14,w(!1),U(null),e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[2,10,14,18]])})));return function(){return e.apply(this,arguments)}}(),_e=function(){var e=Object(c.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(L.b)(Oe);case 3:t=e.sent,console.log("File:::::::::",t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error::::::::: handle convert function",e.t0),Object(b.a)();case 11:return e.prev=11,e.finish(11);case 13:case"end":return e.stop()}}),e,null,[[0,7,11,13]])})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"",children:ie||be||ve?Object(v.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(v.jsx)("div",{children:we}),Object(v.jsxs)("div",{className:"",children:[Object(v.jsx)("div",{children:ie?Object(v.jsx)("button",{type:"button",style:I.btnColor,disabled:y,className:"btn",onClick:Ue,children:"Upload"}):be?Object(v.jsx)("button",{type:"button",style:I.btnColor,disabled:y,className:"btn",onClick:Ve,children:"Compress"}):ve?Object(v.jsx)("button",{type:"button",disabled:y,style:I.btnColor,className:"btn",onClick:_e,children:"Download File"}):""}),Object(v.jsx)("div",{children:Object(v.jsx)(S.a,{className:"text-danger",style:{fontSize:"24px",cursor:"pointer"},title:"Remove file",icon:N.e,onClick:Re})})]})]}):""}),y?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{style:{textAlign:"center"},children:Object(v.jsx)("h5",{children:E})}),Object(v.jsx)(d.a,{isLoaded:y})]}):Object(v.jsxs)("div",Object(s.a)(Object(s.a)({},Ae({style:Pe})),{},{onChange:Ee,children:[Object(v.jsx)("input",Object(s.a)(Object(s.a)({},Te()),{},{onChange:Ee})),Object(v.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"}),Object(v.jsx)("button",{type:"button",className:"btn p-3 mt-3",style:I.btnColor,children:"Open File Dialog"})]})),Object(v.jsxs)(r.a,{className:"mt-3",style:{display:y?"none":"block"},children:[Object(v.jsx)(r.a.Header,{className:"display-6",children:"Advanced Setting"}),Object(v.jsxs)(r.a.Body,{children:[Object(v.jsx)(r.a.Title,{className:"text-center mb-2 pb-3",style:{borderBottom:"1px solid gray",fontSize:"20px"},children:"Video Quilty & Size"}),Object(v.jsxs)(p.a,{children:[Object(v.jsxs)(j.a,{className:"mt-3",children:[Object(v.jsx)(h.a,{xs:4,className:"text-end",children:Object(v.jsx)(p.a.Label,{children:"Video Codec"})}),Object(v.jsxs)(h.a,{xs:8,children:[Object(v.jsx)(p.a.Select,{size:"sm",onChange:function(e){H(B[e.target.value])},children:B.map((function(e,t){return Object(v.jsxs)("option",{value:t,children:["H",e]},t)}))}),Object(v.jsx)(p.a.Text,{className:"text-muted",children:"H265 codec can reduce video size 20-75% more compared to H264 (especially high-resolution video)"})]})]}),Object(v.jsxs)(j.a,{className:"mt-3",children:[Object(v.jsx)(h.a,{xs:4,className:"text-end",children:Object(v.jsx)(p.a.Label,{children:"Compression Method"})}),Object(v.jsxs)(h.a,{xs:8,children:[Object(v.jsx)(p.a.Select,{size:"sm",onChange:function(e){console.log("Compression Method",F[e.target.value]);var t=e.target.value;X(t),q(F[t])},children:F.map((function(e,t){return Object(v.jsx)("option",{value:t,children:e},t)}))}),Object(v.jsx)(p.a.Text,{className:"text-muted",children:'Choose "Target a file size" to get an exact output file size. Choose "Target a video quality" when quality is of importance.'})]})]}),0==Q?Object(v.jsx)(x,{sizeInMB:ee,handleTargetSizeInMB:function(e){var t=e.target.value;te(ee<1?1:t)}}):1==Q?Object(v.jsx)(f,{sizeInPercentage:re,handleTargetSizeInPercentage:function(e){var t=e.target.value;ce(re<1?1:t>100?100:t)}}):"",Object(v.jsxs)(j.a,{className:"mt-3",children:[Object(v.jsx)(h.a,{xs:4,className:"text-end",children:Object(v.jsx)(p.a.Label,{children:"Make video compatible with old devices?"})}),Object(v.jsxs)(h.a,{xs:8,children:[Object(v.jsx)(p.a.Check,{type:"checkbox"}),Object(v.jsx)(p.a.Check.Label,{className:"text-muted",children:"Only use this option if you plan to play the video on a really old device or if you are having playback issues (it compress less)"})]})]})]})]})]})]})})};t.default=function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"text-center mt-5",children:[Object(v.jsxs)("h1",{style:{color:"#f33"},children:[Object(v.jsx)("span",{className:"text-uppercase",children:"Video"})," Compressor"]}),Object(v.jsx)("h6",{className:"lead",children:"Compress your files for free"})]}),Object(v.jsx)("div",{className:"mt-4 mb-4",children:Object(v.jsx)(P,{})}),Object(v.jsxs)(r.a,{children:[Object(v.jsx)(r.a.Header,{children:"Ths is Card Header"}),Object(v.jsx)(r.a.Body,{children:"This is card body"})]})]})})}},87:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s}));var a=[{name:"MP4",path:"mp4-converter"},{name:"WEBM",path:"webm-converter"},{name:"FLV",path:"flv-converter"},{name:"MKV",path:"mkv-converter"},{name:"AVI",path:"avi-converter"},{name:"MOV",path:"mov-converter"},{name:"3GP",path:"3gp-converter"},{name:"WMV",path:"wmv-converter"}],r=[{name:"MP3",path:"mp3-converter"},{name:"WMA",path:"wma-converter"},{name:"MAV",path:"MAV-converter"},{name:"FLAC",path:"flac-converter"},{name:"MA4",path:"ma4-converter"},{name:"ALAC",path:"alac-converter"},{name:"AMR",path:"amr-converter"},{name:"OGG",path:"ogg-converter"},{name:"AIFF",path:"aiff-converter"},{name:"AAC",path:"aac-converter"}],c=[{name:"Video Compressor",path:"video-compressor"}],s=[{name:"MP4 To MP3",path:"mp4-to-mp3"}]},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={BASE_API_URL:"https://smallconverter.io/api/v1"}},91:function(e,t,n){"use strict";var a=n(104),r=n.n(a),c=n(88);t.a=r.a.create({baseURL:c.a.BASE_API_URL,responseType:"json"})},93:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var a=n(98),r=n.n(a),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Converted your media successfully!";r.a.fire("Success",e,"success")},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Internal error";r.a.fire({icon:"error",title:"Oops...",text:e})}},96:function(e,t,n){"use strict";n(0);var a=n(107),r=n(1);t.a=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"sweet-loading",style:{textAlign:"center",marginTop:"5%"},children:Object(r.jsx)(a.ScaleLoader,{color:"blue",height:100,loading:e.isLoaded})})})}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(89),r=n(90),c=n.n(r),s=n(98),o=n.n(s),i=n(93),l=n(91),u=n(88).a.BASE_API_URL;function d(e){return b.apply(this,arguments)}function b(){return(b=Object(a.a)(c.a.mark((function e(t){var n,a,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,r={},(s=new FormData).append("file",t.file),e.next=7,l.a.post("".concat(u,"/file-info/file-upload"),s,n);case 7:return r=e.sent,e.abrupt("return",null===(a=r)||void 0===a?void 0:a.data);case 11:throw e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function p(e){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,r={},e.next=5,l.a.post("".concat(u,"/file-info/remove-file"),t,n);case 5:return r=e.sent,e.abrupt("return",null===(a=r)||void 0===a?void 0:a.data);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var h=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:t},e.prev=1,e.next=4,o.a.fire({title:"Are you sure?",text:"You want to remove ".concat(t),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, remove it!"});case 4:if(!e.sent.isConfirmed){e.next=13;break}return e.next=8,p(n);case 8:return e.sent,o.a.fire("Removed!","Your file has been Removed.","success"),e.abrupt("return",!0);case 13:return e.abrupt("return",!1);case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),console.error("Error::::::::: handle remove file function",e.t0),Object(i.a)();case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=8.76c541ff.chunk.js.map