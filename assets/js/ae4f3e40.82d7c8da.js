"use strict";(self.webpackChunksdk_spec=self.webpackChunksdk_spec||[]).push([[5892],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="External Libraries",s={unversionedId:"Modules/Common/External Libraries/External Libraries",id:"Modules/Common/External Libraries/External Libraries",title:"External Libraries",description:"The Brambl SDK uses external libraries that are available in the implementation language. Some of these library",source:"@site/docs/Modules/Common/External Libraries/External Libraries.md",sourceDirName:"Modules/Common/External Libraries",slug:"/Modules/Common/External Libraries/",permalink:"/sdk-spec/docs/Modules/Common/External Libraries/",draft:!1,editUrl:"https://github.com/topl/sdk-spec/tree/main/packages/create-docusaurus/templates/shared/docs/Modules/Common/External Libraries/External Libraries.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/sdk-spec/docs/Modules/"},next:{title:"ByteVector",permalink:"/sdk-spec/docs/Modules/Common/External Libraries/ByteVector/"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"external-libraries"},"External Libraries"),(0,a.kt)("p",null,"The Brambl SDK uses external libraries that are available in the implementation language. Some of these library\ndependencies are not documented in this document because they are implementation details that are not relevant to the\nAPIs that are exposed by the Brambl SDK. However, some API functions/methods have parameters or return types that are\ndefined in external libraries. In these cases, the type is documented on this page; it is up to the implementor to find\na library that provides the type or provide a wrapper around a library that provides a similar type."),(0,a.kt)("p",null,"Not that neither test vectors nor testing procedures are specified for the external libraries."),(0,a.kt)("p",null,"Here are the types that are defined in external libraries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ByteVector \u2014 An immutable sequence of bytes. This type is defined for the Scala implementation in the scodec\nlibrary.",(0,a.kt)("br",null),"\nThe type is implemented in Scala as a balanced binary tree of chunks. This allows ByteVectors to be composed into\nlarger ByteVectors without copying data.")))}u.isMDXComponent=!0}}]);