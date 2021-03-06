"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},n=navigator.language.split("-")[0],r=e.createContext({locale:"",setLocale:function(){return null},languages:{},defaultLanguage:""});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */exports.Talkr=function(t){var a=t.children,u=t.languages,l=t.defaultLanguage,o=t.detectBrowserLanguage,c=e.useState(o?n:l),s=c[0],i=c[1];return e.createElement(r.Provider,{value:{locale:s,setLocale:i,languages:u,defaultLanguage:l}},a)},exports.t=function(n,a){var u=e.useContext(r),l=u.locale,o=u.languages,c=u.defaultLanguage,s=o[l]?l:c,i=o[s],g=n;if(a&&Object.keys(a).includes("count")){var f=new Intl.PluralRules(s).select(a.count);g=0===a.count?n+".zero":"other"===f?n+".many":n+"."+f}if(g.split(".").forEach((function(e){if(i[e])return i=i[e]})),"string"!=typeof i)return null;var p=a&&Object.entries(a).reduce((function(e,n){var r;return t(t({},e),((r={})[n[0]]=n[1].toString(),r))}),{});return p?i.split("__").map((function(e){return p[e]?p[e]:e})).join(""):i},exports.useLocale=function(){return e.useContext(r)};
