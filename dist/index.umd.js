/*! For license information please see index.umd.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.aipageWidget=t():e.aipageWidget=t()}(this,(function(){return function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Framework:function(){return r},camelToKebab:function(){return l},cloneObject:function(){return g},consoleTag:function(){return o},dateFormat:function(){return oe},deepClone:function(){return a},extendObject:function(){return p},getAlignModeStyle:function(){return re},getBackgroundStyle:function(){return U},getBorderRadius:function(){return ee},getBoxPosition:function(){return G},getBoxShadow:function(){return Q},getBoxStyle:function(){return Y},getClasses:function(){return de},getFlexStyle:function(){return K},getFontStyle:function(){return V},getFramework:function(){return n},getImageSize:function(){return J},getLegacyHref:function(){return _},getThemeStyle:function(){return Z},getVideoThumbnail:function(){return te},getWeek:function(){return ne},getZIndexStyle:function(){return se},isEditorPlugin:function(){return i},isMobile:function(){return le},isNumberFormat:function(){return c},isObject:function(){return d},isString:function(){return u},isValidCSS:function(){return ue},kebabToCamel:function(){return s},makeClassnames:function(){return ae},parseThemeColor:function(){return N},registerPlugin:function(){return b},registerRenderer:function(){return M},toPx:function(){return z},toRpx:function(){return $},toWHset:function(){return X},transformComponentId:function(){return f},transformStyle:function(){return ce}});var r,o="[aipage-widget]";function n(e){var t=r.react;if(!e)return t;var o=e.toLowerCase().trim();switch(o){case"jquery":case"jq":o=r.jquery;break;case"vue":case"vue2":case"vue 2":case"vue2.0":case"vue 2.0":o=r.vue2;break;case"vue3":case"vue 3":case"vue3.0":case"vue 3.0":o=r.vue3,console.error("aipage-widget暂不支持vue3.0技术栈，请改用vue3-aipage-widget支持。");break;default:o=r.react}return o}function i(e){var t=!1;if(!e||!d(e))return!1;var r=e;return r.name?r.id?r.componentId?r.description?!r.tags||Array.isArray(r.tags)&&0===r.tags.length?console.error(o+"自定义插件注册失败，插件分类（tags）不能为空。"):(r.pluginIcon||(r.pluginIcon="cards-plugin"),r.type||(r.type="element"),t=!0):console.error(o+"自定义插件注册失败，插件描述（description）不能为空。"):console.error(o+"自定义插件注册失败，渲染器ID（componentId）不能为空。"):console.error(o+"自定义插件注册失败，插件ID（id）不能为空。"):console.error(o+"自定义插件注册失败，插件名称（name）不能为空。"),t}function a(e){var t;if("object"==typeof e)if(Array.isArray(e))for(var r in t=[],e)t.push(a(e[r]));else if(null===e)t=null;else if(e.constructor===RegExp)t=e;else for(var o in t={},e)t[o]=a(e[o]);else t=e;return t}function u(e){return"String"===Object.prototype.toString.call(e).slice(8,-1)}function d(e){var t=!1;return"Object"===Object.prototype.toString.call(e).slice(8,-1)&&(t=!0),t}function c(e){return"NaN"!==parseFloat(String(e)).toString()}function s(e){return e.replace(/-[a-z]/g,(function(e){return e[1].toUpperCase()}))}function l(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}function f(e){return("-"+e).replace(/(-[A-Za-z0-9])/g,(function(e){return e.toUpperCase().replace("-","")}))}function g(e,t){void 0===t&&(t=!0);var r=e&&e.__super?Object.create(e.__super,{__super:{value:e.__super,writable:!1,enumerable:!1}}):Object.create(Object.prototype);return t&&e&&Object.keys(e).forEach((function(t){return r[t]=e[t]})),r}function p(e,t,r){void 0===r&&(r=!0);var o=g(e,r);return t&&Object.keys(t).forEach((function(e){return o[e]=t[e]})),o}function b(e){return i(e)&&window&&window.postMessage&&(console.info(o+"触发注册自定义插件("+e.name+")事件:",e),window.postMessage({type:"aipage-editor-register-plugin-event",eventMsg:o+"注册一个自定义aipage-editor插件",editorPluginName:e.name,customEditorPlugin:e},"*")),e}!function(e){e.react="react",e.vue2="vue2",e.vue3="vue3",e.jquery="jquery"}(r||(r={}));var h=require("@babel/runtime/helpers/extends"),m=e.n(h),v=require("@babel/runtime/helpers/objectWithoutPropertiesLoose"),y=e.n(v),S=require("@babel/runtime/helpers/assertThisInitialized"),w=e.n(S),x=require("@babel/runtime/helpers/inheritsLoose"),k=e.n(x),R=require("react"),C=e.n(R),j=require("react-dom"),T=e.n(j),O=require("vue"),I=e.n(O),B=["data"];function L(e){if(e&&("function"==typeof e||"object"==typeof e))return function(t){function r(e){var r;return(r=t.call(this,e)||this).domRef=void 0,r.vm=void 0,r.domRef=C().createRef(),r.resolveAmisProps=r.resolveAmisProps.bind(w()(r)),r.renderChild=r.renderChild.bind(w()(r)),r}k()(r,t);var o=r.prototype;return o.componentDidMount=function(){var t=this,r=this.resolveAmisProps(),o=r.amisData,n=r.amisFunc,i=e="function"==typeof e?new e:e,a=i.data,u=y()(i,B);this.vm=new(I())(m()({data:p(o,"function"==typeof a?a():a)},u,{props:u.props||{}})),Object.keys(n).forEach((function(e){t.vm.$props[e]=n[e],"render"===e&&(t.vm.$props.renderChild=function(e,r,o){t.renderChild(e,r,o)})})),this.domRef.current.appendChild(this.vm.$mount().$el),this.domRef.current.setAttribute("data-component-id",this.props.id)},o.renderChild=function(e,t,r){var o=null;if(this.props.render&&t&&r){var n=this.props.render(e,t);o=T().render(n,document.getElementById(r))}return o},o.componentDidUpdate=function(){var e=this;Object.keys(this.props).forEach((function(t){return"function"!=typeof e.props[t]&&(e.vm[t]=e.props[t])})),this.vm.$forceUpdate()},o.componentWillUnmount=function(){this.vm.$destroy()},o.resolveAmisProps=function(){var e=this,t={},r={};return Object.keys(this.props).forEach((function(o){var n=e.props[o];"function"==typeof n?t[o]=n:r[o]=n})),{amisData:r,amisFunc:t}},o.render=function(){return C().createElement("div",{ref:this.domRef})},r}(C().Component)}function M(e,t){if(e){var i={type:"",framework:r.react};if(t&&u(t)?Object.assign(i,{type:t}):Object.assign(i,t),i&&!i.type)console.error(o+"自定义组件注册失败，自定义组件类型（type）不能为空。");else{i.framework=n(i.framework);var a={react:function(e){return e},vue2:L}[i.framework](e);if(window){var d=function(e,t){window&&!window.AIPageEditorCustomRenderers&&(window.AIPageEditorCustomRenderers={});var r=f(e);return window.AIPageEditorCustomRenderers[r]?(console.error(o+"自定义渲染器失败，已存在同名渲染器类型("+e+")。"),null):(window.AIPageEditorCustomRenderers[r]=t,r)}(i.type,a);d&&(console.info(o+"触发注册自定义渲染器("+i.type+")事件:",{type:i.type,component:a,framework:i.framework}),window.postMessage({type:"aipage-editor-register-renderer-event",eventMsg:o+"注册一个自定义aipage-editor渲染器",customComponentId:d},"*"))}}}}var P=require("lodash/pick"),W=e.n(P),A=require("lodash/isNumber"),q=e.n(A),E=require("lodash/cloneDeep"),D=e.n(E),H=require("classnames"),F=e.n(H),N=function(e){return e};function _(e){var t=location.pathname.split("/").slice(0,-1);return t.push(e),t.join("/")}function $(e){var t=+[e][e&&0]/375*375;return Number.isNaN(t)?void 0:Math.round(t)+"px"}function z(e){var t=+[e][e&&0]/375*375;return Number.isNaN(t)?void 0:Math.round(t)+"px"}function U(e){void 0===e&&(e={});var t=W()(D()(e)||{},"backgroundImage","backgroundRepeat","backgroundSize","backgroundPosition","backgroundColor");return e.backgroundImage&&/linear-gradient/g.test(e.backgroundImage)?t.backgroundImage=e.backgroundImage:(e.backgroundColor&&(t.backgroundColor=N(e.backgroundColor)),e.backgroundImage&&(t.backgroundImage="url('"+e.backgroundImage+"')")),t}function Z(e,t,r){void 0===e&&(e={});var o={},n=[e[t+"Color"],e.defaultColor];return"default"===t&&(n[0]=e.inverseColor,n.reverse()),r&&(o.borderColor=n[0],n.reverse()),o.backgroundColor=n[0],o.color=n[1],o}function V(e){void 0===e&&(e={});var t=W()(D()(e)||{},"color","fontFamily","lineHeight","textAlign");return e.bold&&(t.fontWeight="bold"),e.italic&&(t.fontStyle="italic"),e.underline&&(t.textDecoration="underline"),e.lines&&(t.WebkitLineClamp=""+e.lines),t.lineHeight&&(t.lineHeight=t.lineHeight>=12?parseInt(t.lineHeight,10)+"px":parseInt(t.lineHeight,10)),t.fontSize=$(+e.fontSize),t.letterSpacing=$(+e.letterSpacing),t}function Y(e){void 0===e&&(e={});var t=W()(D()(e)||{},"borderLeftStyle","borderRightStyle","borderTopStyle","borderBottomStyle","borderLeftColor","borderRightColor","borderTopColor","borderBottomColor");return+e.borderTopWidth>0?(t.borderTopWidth=$(+e.borderTopWidth),t.borderTopColor=N(e.borderTopColor)):delete t.borderTopStyle,+e.borderLeftWidth>0?(t.borderLeftWidth=$(+e.borderLeftWidth),t.borderLeftColor=N(e.borderLeftColor)):delete t.borderLeftStyle,+e.borderRightWidth>0?(t.borderRightWidth=$(+e.borderRightWidth),t.borderRightColor=N(e.borderRightColor)):delete t.borderRightStyle,+e.borderBottomWidth>0?(t.borderBottomWidth=$(+e.borderBottomWidth),t.borderBottomColor=N(e.borderBottomColor)):delete t.borderBottomStyle,t.marginTop=$(+e.marginTop),t.marginLeft=$(+e.marginLeft),t.marginRight=$(+e.marginRight),t.marginBottom=$(+e.marginBottom),t.paddingTop=$(+e.paddingTop),t.paddingLeft=$(+e.paddingLeft),t.paddingRight=$(+e.paddingRight),t.paddingBottom=$(+e.paddingBottom),t.borderTopLeftRadius=$(+e.borderTopLeftRadius),t.borderTopRightRadius=$(+e.borderTopRightRadius),t.borderBottomLeftRadius=$(+e.borderBottomLeftRadius),t.borderBottomRightRadius=$(+e.borderBottomRightRadius),t}function K(e){var t,r;void 0===e&&(e={});var o={};if(e.display&&(o.display=e.display),"flex"===o.display){var n=e.flexSetting||{};o.flexDirection=n.direction||"row",o.alignItems=n.align||"stretch",o.justifyContent=n.justify||"flex-start"}return(null==(t=e.flexSetting)?void 0:t.flexShrink)>=0&&(o.flexShrink=+e.flexSetting.flexShrink),(null==(r=e.flexSetting)?void 0:r.flex)>=0&&(o.flex=+e.flexSetting.flex),o}function X(e,t){var r=e[t+"Unit"]||"px";return"auto"===r||e[t]<=0?"auto":"px"===r?$(+e[t]):e[t]+r}function G(e){var t=(null==e?void 0:e.componentProperties)||{},r=t.style,o=void 0===r?{}:r,n=t.isFlow,i=(o.justification||"top left").split(" "),a={};return n?(a.height=X(o,"height"),a.width=X(o,"width"),a.maxWidth="100%",a.width>0&&(a.flexShrink=0)):(a[i[1]]=+o.x,a[i[0]]=+o.y,a.height=X(o,"height"),a.width=X(o,"width")),o.opacity>=0&&(a.opacity=+o.opacity/100),o.display&&(a.display=o.display),a}function J(e){return e||(e=1),{paddingTop:100/e+"%"}}function Q(e){void 0===e&&(e={});var t=e,r=t.angle,o=void 0===r?0:r,n=t.x,i=t.y,a=t.blur,u=t.size,d=t.color,c=t.distance,s=void 0!==n?n:Math.round(Math.sin(o*(Math.PI/180))*c),l=void 0!==i?i:-Math.round(Math.cos(o*(Math.PI/180))*c);return(n||i||a||u||c)&&q()(s)&&q()(l)?{boxShadow:$(s)+" "+$(l)+" "+$(a||0)+" "+$(u||0)+" "+N(d)}:{}}function ee(e){void 0===e&&(e={});var t=W()(D()(e)||{},"borderLeftStyle","borderRightStyle","borderTopStyle","borderBottomStyle","borderLeftColor","borderRightColor","borderTopColor","borderBottomColor");return t.borderTopLeftRadius=$(+e.borderTopLeftRadius),t.borderTopRightRadius=$(+e.borderTopRightRadius),t.borderBottomLeftRadius=$(+e.borderBottomLeftRadius),t.borderBottomRightRadius=$(+e.borderBottomRightRadius),t}function te(e){if(!e)return"";var t=e.split("/");return e.includes("/sites/")&&t.splice(3,0,"thumbnails"),t.join("/")+".png"}function re(e){return{top:~e.indexOf("bottom")?"auto":0,bottom:~e.indexOf("top")?"auto":0,left:~e.indexOf("right")?"auto":0,right:~e.indexOf("left")?"auto":0}}function oe(e,t){var r=function(e,r){t=t.replace(e,r)},o=function(e){return String(e).length>1?String(e):"0"+e},n=new Date(e),i=n.getFullYear(),a=n.getMonth()+1,u=n.getDate(),d=n.getHours(),c=n.getMinutes(),s=n.getSeconds();return r(/yyyy/g,String(i)),r(/yy/g,o(i.toString().slice(2))),r(/MM/g,o(a)),r(/M/g,a),r(/dd/g,o(u)),r(/d/g,u),r(/HH/g,o(d)),r(/H/g,d),r(/hh/g,o(d%12)),r(/h/g,d%12),r(/mm/g,o(c)),r(/m/g,c),r(/ss/g,o(s)),r(/s/g,s),t}function ne(e,t){void 0===t&&(t=!1);var r=864e5,o=new Date(String(e.getFullYear())+"/01/01"),n=o.getDay()>0?8-o.getDay():1;return n=t?n-1:n,Math.abs(Math.ceil((e.getTime()-o.getTime()-n*r)/r/7))}var ie={};function ae(e){if(e&&ie[e])return ie[e];var t=function(){var t=F().apply(void 0,arguments);return t&&e?t.replace(/(^|\s)([A-Z])/g,"$1"+e+"$2").replace(/(^|\s)\:/g,"$1"):t||""};return e&&(ie[e]=t),t}function ue(e,t){return CSS.supports(e,t)}function de(e){var t=e.componentProperties,r=void 0===t?{}:t,o=e.id,n=r.style||{},i="node-"+o,a={root:i,main:i+" "+(n.className||"")};return Object.keys(n).forEach((function(e){!["font","box","boxShadow","background"].includes(e)&&d(n[e])&&(a[e]=[i+"-"+l(e)])})),a}function ce(e){void 0===e&&(e={});var t={};return Object.keys(e).forEach((function(r){switch(r){case"box":t=Object.assign(t,Y(e.box));break;case"background":t=Object.assign(t,U(e.background));break;case"font":t=Object.assign(t,V(e.font));break;case"lineHeight":t.lineHeight=e[r]>=12?parseInt(e[r],10)+"px":parseInt(e[r],10);break;case"boxShadow":t=Object.assign(t,Q(e.boxShadow));break;case"opacity":t.opacity=+e[r]/100;break;case"width":t.width=e.autoWidth?"auto":X(e,"width");break;case"flexSetting":t=Object.assign(t,K(e));break;case"height":t.height=X(e,"height");break;default:var o,n=c(e[r])?+e[r]+"px":e[r];d(e[r])?t=Object.assign(t,((o={})[r]=ce(e[r]),o)):!["x","y","css","lineClamp","columns","flex","scrollX"].includes(r)&&ue(l(r),n)&&(t[r]=c(e[r])?+e[r]+"px":e[r])}})),t}function se(e){var t={};return void 0!==e&&(t.zIndex=+e),t}var le=null==window.matchMedia?void 0:window.matchMedia("(max-width: 768px)").matches;return t}()}));