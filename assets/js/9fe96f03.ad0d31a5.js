"use strict";(self.webpackChunksdk_spec=self.webpackChunksdk_spec||[]).push([[1932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},l="createOnChainTransactionIndex Tests",o={unversionedId:"Modules/Query/brambl_query_tests/createOnChainTransactionIndex_test",id:"Modules/Query/brambl_query_tests/createOnChainTransactionIndex_test",title:"createOnChainTransactionIndex Tests",description:"The following testing scenarios are required:",source:"@site/docs/Modules/Query/brambl_query_tests/createOnChainTransactionIndex_test.md",sourceDirName:"Modules/Query/brambl_query_tests",slug:"/Modules/Query/brambl_query_tests/createOnChainTransactionIndex_test",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/createOnChainTransactionIndex_test",draft:!1,editUrl:"https://github.com/topl/sdk-spec/tree/main/packages/create-docusaurus/templates/shared/docs/Modules/Query/brambl_query_tests/createOnChainTransactionIndex_test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Brambl Query Functions",permalink:"/sdk-spec/docs/Modules/Query/brambl_query"},next:{title:"dropIndex Tests",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/dropIndex_test"}},s={},p=[{value:"Happy Path for JSON and pre-population",id:"happy-path-for-json-and-pre-population",level:5},{value:"Happy Path for JSON without pre-population",id:"happy-path-for-json-without-pre-population",level:5},{value:"Happy Path for CSV",id:"happy-path-for-csv",level:5},{value:"Default Parameter Values",id:"default-parameter-values",level:5},{value:"No properly configured Genus service",id:"no-properly-configured-genus-service",level:5},{value:"Unable to send request to Genus service",id:"unable-to-send-request-to-genus-service",level:5},{value:"The genus service returned an error",id:"the-genus-service-returned-an-error",level:5},{value:"The Genus service did not return a result before the timeout happened",id:"the-genus-service-did-not-return-a-result-before-the-timeout-happened",level:5}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"createonchaintransactionindex-tests"},"createOnChainTransactionIndex Tests"),(0,r.kt)("p",null,"The following testing scenarios are required:"),(0,r.kt)("h5",{id:"happy-path-for-json-and-pre-population"},"Happy Path for JSON and pre-population"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," the Genus database does not contain any transaction indexes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"fooSpec")," is an ",(0,r.kt)("inlineCode",{parentName:"li"},"IndexSpec")," object that specifies:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"name is ",(0,r.kt)("inlineCode",{parentName:"li"},"fooIndex")),(0,r.kt)("li",{parentName:"ul"},'fooSpec specifies that the index should be based on transactions with data that is a JSON object a that the\nindex should use the value of a field named "id".'),(0,r.kt)("li",{parentName:"ul"},"indexFilter specifies that only records matching ",(0,r.kt)("inlineCode",{parentName:"li"},'"shipmentNumber"="12345"')," should be included in the index"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," there are multiple existing transactions in the database that match the filter"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"createOnChainTransactionIndex(fooSpec, true, 99999)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call returns true"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"createOnChainTransactionIndex(fooSpec, true, 99999)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call immediately returns false."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"getExistingTransactionIndexes()\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call returns a collection of one ",(0,r.kt)("inlineCode",{parentName:"li"},"IndexSpec")," object that should be equal to the object used to create\nthe ",(0,r.kt)("inlineCode",{parentName:"li"},"fooIndex")," index."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that there are transactions in the database that should not be included in the ",(0,r.kt)("inlineCode",{parentName:"li"},"fooIndex")," index, either\nbecause their data is not a JSON object or because they do not contain ",(0,r.kt)("inlineCode",{parentName:"li"},'"shipmentNumber"="12345"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'getIndexedTransactions("fooIndex")  \n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call returns all transactions that should be included in the index and none of the transaction that\nshould not be included."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"idx")," is a list that contains one ",(0,r.kt)("inlineCode",{parentName:"li"},"IndexMatchValue")," that matches the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),"\nfield in the data of exactly on of the transactions returned by the previous call"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'getIndexedTransactions("fooIndex", idx)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call should return exactly one transaction that has the correct ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," value in its data")),(0,r.kt)("h5",{id:"happy-path-for-json-without-pre-population"},"Happy Path for JSON without pre-population"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," the previous tests for ",(0,r.kt)("inlineCode",{parentName:"li"},"getIndexedTransactions")," were successful"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," there is no existing index in the database named ",(0,r.kt)("inlineCode",{parentName:"li"},"fooIndex2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"fooSpec2")," is an ",(0,r.kt)("inlineCode",{parentName:"li"},"IndexSpec")," object that specifies:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"name is ",(0,r.kt)("inlineCode",{parentName:"li"},"fooIndex2")),(0,r.kt)("li",{parentName:"ul"},'fooSpec specifies that the index should be based on transactions with data that is a JSON object and that the\nindex should use the value of a field named "id".'),(0,r.kt)("li",{parentName:"ul"},"indexFilter specifies that only records matching ",(0,r.kt)("inlineCode",{parentName:"li"},'"shipmentNumber"="12345"')," should be included in the index"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," there are multiple existing transactions in the database that match the filter"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"createOnChainTransactionIndex(fooSpec2, false, 99999)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call returns true"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"getExistingTransactionIndexes()\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call returns a collection of two ",(0,r.kt)("inlineCode",{parentName:"li"},"IndexSpec")," objects. One should be equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"fooSpec")," and the other\nequal to ",(0,r.kt)("inlineCode",{parentName:"li"},"fooSpec2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'getIndexedTransactions("fooIndex2")  \n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call returns an empty stream because the index was not pre-populated.")),(0,r.kt)("h5",{id:"happy-path-for-csv"},"Happy Path for CSV"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," the previous tests for ",(0,r.kt)("inlineCode",{parentName:"li"},"getIndexedTransactions")," were successful"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," there is no existing index in the database named ",(0,r.kt)("inlineCode",{parentName:"li"},"csvIndex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"csvSpec")," is an ",(0,r.kt)("inlineCode",{parentName:"li"},"IndexSpec")," object that specifies:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"name is ",(0,r.kt)("inlineCode",{parentName:"li"},"csvIndex")),(0,r.kt)("li",{parentName:"ul"},'csvSpec specifies that the index should be based on transactions with data that is in CSV format and that the\nindex should use the value of a field named "id".'),(0,r.kt)("li",{parentName:"ul"},"indexFilter specifies that only records matching ",(0,r.kt)("inlineCode",{parentName:"li"},'"12345"')," should be included in the index"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," there are multiple existing transactions in the database that match the filter"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"createOnChainTransactionIndex(csvSpec, false, 99999)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call returns true"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"getExistingTransactionIndexes()\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call returns a collection of three ",(0,r.kt)("inlineCode",{parentName:"li"},"IndexSpec")," objects. One should be equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"fooSpec"),", one equal\nto ",(0,r.kt)("inlineCode",{parentName:"li"},"csvSpec2")," and one equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"csvSpec"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'getIndexedTransactions("csvIndex")  \n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call returns all transactions that should be included in the index and none of the transaction that\nshould not be included."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"idx")," is a list that contains one ",(0,r.kt)("inlineCode",{parentName:"li"},"IndexMatchValue")," that matches the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," field in the\ndata of exactly on of the transactions returned by the previous call"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'getIndexedTransactions("csvIndex", idx)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call should return exactly one transaction that has the correct ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," value in its data")),(0,r.kt)("h5",{id:"default-parameter-values"},"Default Parameter Values"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"createOnChainTransactionIndex(csvSpec)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the value passed to the gRPC library for ",(0,r.kt)("inlineCode",{parentName:"li"},"populate")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"confidenceFactor")," are ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," and 0.9999999")),(0,r.kt)("h5",{id:"no-properly-configured-genus-service"},"No properly configured Genus service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that there is no properly configured genus service"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"createOnChainTransactionIndex(csvSpec, false, 99999)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating there is no properly configured genus service")),(0,r.kt)("h5",{id:"unable-to-send-request-to-genus-service"},"Unable to send request to Genus service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to return an error indicating that the request could not be\nsent"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"createOnChainTransactionIndex(csvSpec, false, 99999)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that the request could not be sent")),(0,r.kt)("h5",{id:"the-genus-service-returned-an-error"},"The genus service returned an error"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to return an error indicating that there was a problem\nprocessing the request"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"createOnChainTransactionIndex(csvSpec, false, 99999)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that there was a problem processing the request.")),(0,r.kt)("h5",{id:"the-genus-service-did-not-return-a-result-before-the-timeout-happened"},"The Genus service did not return a result before the timeout happened"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to never return"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"createOnChainTransactionIndex(csvSpec, false, 99)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that there was a timeout error.")))}u.isMDXComponent=!0}}]);