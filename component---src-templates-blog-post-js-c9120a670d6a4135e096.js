(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+g+W":function(e,t,r){var n=r("q0Rj"),o=r("s9h0");function a(t,r,c){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},"4TKZ":function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},IDKB:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},VjHQ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},X8hv:function(e,t,r){var n=r("+g+W"),o=r("ZGFM"),a=r("0j+7"),c=r("u0WH");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r("q1tI"),i=r("7ljp").mdx,u=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=c(e,["scope","children"]),p=u(t),f=l.useMemo((function(){if(!r)return null;var e=s({React:l,mdx:i},p),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return l.createElement(f,s({},a))}},Z5Ud:function(e,t,r){var n=r("IDKB");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},ZGFM:function(e,t,r){var n=r("Z5Ud"),o=r("4TKZ"),a=r("o/O1"),c=r("VjHQ");e.exports=function(e){return n(e)||o(e)||a(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},"o/O1":function(e,t,r){var n=r("IDKB");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},s9h0:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},yZlL:function(e,t,r){"use strict";r.r(t);var n=r("rePB"),o=r("dI71"),a=r("q1tI"),c=r.n(a),p=r("Wbzz"),s=r("A2+M"),l=r("SbOt"),i=r("7oih"),u=r("vrFN"),f=r("p3AD");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props.data.mdx,t=this.props.data.site.siteMetadata.title,r=this.props.pageContext,n=r.previous,o=r.next;return console.log(this.props.pageContext),c.a.createElement(i.a,{location:this.props.location,title:t},c.a.createElement(u.a,{title:e.frontmatter.title,description:e.excerpt}),c.a.createElement("h1",null,e.frontmatter.title),c.a.createElement("p",{style:y(y({},Object(f.b)(-.2)),{},{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-1)})},e.frontmatter.date),c.a.createElement(s.MDXRenderer,null,e.body),c.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),c.a.createElement(l.a,null),c.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},c.a.createElement("li",null,n&&c.a.createElement(p.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),c.a.createElement("li",null,o&&c.a.createElement(p.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))))},t}(c.a.Component);t.default=b}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-c9120a670d6a4135e096.js.map