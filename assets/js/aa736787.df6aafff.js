(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),a=(n(0),n(120)),i={title:"\u5ee2\u6587\u7522\u751f\u5668",slug:"/"},c={unversionedId:"project-1",id:"project-1",isDocsHomePage:!1,title:"\u5ee2\u6587\u7522\u751f\u5668",description:"2021-03-20",source:"@site/student-four/project-1.md",slug:"/",permalink:"/student-four/",editUrl:"https://github.com/Rhodanthe1116/nuts-10303/edit/master/student-four/project-1.md",version:"current",sidebar:"someSidebar"},p=[{value:"2021-03-20",id:"2021-03-20",children:[]}],u={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"2021-03-20"},"2021-03-20"),Object(a.b)("iframe",{src:"https://trinket.io/embed/python3/3d4516a799",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:!0}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-py"},'print("\u6b61\u8fce\u4f7f\u7528\u5ee2\u6587\u7522\u751f\u5668")\nprint("\u8acb\u8f38\u5165\u4e3b\u984c")\nx=input()\ntenplate=f"""\n\u6bcf\u500b\u4eba\u90fd\u4e0d\u5f97\u4e0d\u9762\u5c0d\u9019\u4e9b\u554f\u984c\u3002\n\u5728\u9762\u5c0d\u9019\u7a2e\u554f\u984c\u6642\uff0c\u52d9\u5fc5\u8a73\u7d30\u8003\u616e{x}\u7684\u5404\u7a2e\u53ef\u80fd\u3002\n{x}\u7684\u5b58\u5728\uff0c\u4ee4\u6211\u7121\u6cd5\u505c\u6b62\u5c0d\u4ed6\u7684\u601d\u8003\u3002\u6211\u5011\u8981\u5b78\u6703\u7ad9\u5728\u5225\u4eba\u7684\u89d2\u5ea6\u601d\u8003\u3002\n\u6211\u5011\u666e\u904d\u8a8d\u70ba\uff0c\u82e5\u80fd\u7406\u89e3\u900f\u5fb9\u6838\u5fc3\u539f\u7406\uff0c\u5c0d\u5176\u5c31\u6709\u4e86\u4e00\u5b9a\u7684\u4e86\u89e3\u7a0b\u5ea6\u3002\n"""\ntemplate=f"""\n\u6bcf\u500b\u4eba\u90fd\u4e0d\u5f97\u4e0d\u9762\u5c0d\u9019\u4e9b\u554f\u984c\u3002\u5728\u9762\u5c0d\u9019\u7a2e\u554f\u984c\u6642\uff0c\u52d9\u5fc5\u8a73\u7d30\u8003\u616e{x}\u7684\u5404\u7a2e\u53ef\u80fd\u3002\n\n\u7e3d\u800c\u8a00\u4e4b\uff0c\u8001\u820a\u7684\u60f3\u6cd5\u5df2\u7d93\u904e\u6642\u4e86\u3002\n"""\n\n\nimport random\nz=random.randint(1,2)\n\nif z==1:\n    print(tenplate)\nif z==2:\n    print(template)\n')))}l.isMDXComponent=!0},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);