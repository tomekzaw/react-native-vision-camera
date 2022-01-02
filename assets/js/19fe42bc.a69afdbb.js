"use strict";(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[600],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9099:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={id:"Frame",title:"Interface: Frame",sidebar_label:"Frame",sidebar_position:0,custom_edit_url:null},s=void 0,d={unversionedId:"api/interfaces/Frame",id:"api/interfaces/Frame",title:"Interface: Frame",description:"A single frame, as seen by the camera.",source:"@site/docs/api/interfaces/Frame.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Frame",permalink:"/react-native-vision-camera/docs/api/interfaces/Frame",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Frame",title:"Interface: Frame",sidebar_label:"Frame",sidebar_position:0,custom_edit_url:null},sidebar:"visionSidebar",previous:{title:"ErrorWithCause",permalink:"/react-native-vision-camera/docs/api/interfaces/ErrorWithCause"},next:{title:"FrameProcessorPerformanceSuggestion",permalink:"/react-native-vision-camera/docs/api/interfaces/FrameProcessorPerformanceSuggestion"}},p=[{value:"Properties",id:"properties",children:[{value:"bytesPerRow",id:"bytesperrow",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"height",id:"height",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"isValid",id:"isvalid",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"planesCount",id:"planescount",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"width",id:"width",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"close",id:"close",children:[{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"toString",id:"tostring",children:[{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A single frame, as seen by the camera."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"bytesperrow"},"bytesPerRow"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"bytesPerRow"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Returns the amount of bytes per row."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/9d3665d/src/Frame.ts#L20"},"Frame.ts:20")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"height"},"height"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"height"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Returns the height of the frame, in pixels."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/9d3665d/src/Frame.ts#L16"},"Frame.ts:16")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isvalid"},"isValid"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"isValid"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Whether the underlying buffer is still valid or not. The buffer will be released after the frame processor returns, or ",(0,a.kt)("inlineCode",{parentName:"p"},"close()")," is called."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/9d3665d/src/Frame.ts#L8"},"Frame.ts:8")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"planescount"},"planesCount"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"planesCount"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Returns the number of planes this frame contains."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/9d3665d/src/Frame.ts#L24"},"Frame.ts:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"width"},"width"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"width"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Returns the width of the frame, in pixels."),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/9d3665d/src/Frame.ts#L12"},"Frame.ts:12")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"close"},"close"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"close"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Closes and disposes the Frame.\nOnly close frames that you have created yourself, e.g. by copying the frame you receive in a frame processor."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const frameProcessor = useFrameProcessor((frame) => {\n  const smallerCopy = resize(frame, 480, 270)\n  // run AI ...\n  smallerCopy.close()\n  // don't close `frame`!\n})\n")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/9d3665d/src/Frame.ts#L48"},"Frame.ts:48")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tostring"},"toString"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Returns a string representation of the frame."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'console.log(frame.toString()) // -> "3840 x 2160 Frame"\n')),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/9d3665d/src/Frame.ts#L33"},"Frame.ts:33")))}u.isMDXComponent=!0}}]);