const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Button.stories-CwJ4DSUh.js","./index-zeKh63HJ.js","./Button-CdohKXTq.js","./jsx-runtime-z8MfsBtr.js","./index-C9rmetsa.js","./Button-CGkL19V-.css","./Configure-V4WBMhnD.js","./index-DOz4sCiE.js","./index-BofL8h0e.js","./index-Btaza_75.js","./index-D-OUEn-9.js","./index-NOh9rqHv.js","./index-ogSvIofg.js","./Header.stories-sD7kblDD.js","./Header-D5rGKtJW.js","./Header-Ck-SSN7O.css","./MyLabel.stories-BjiKpVgL.js","./MyLabel-DnPU7qjc.css","./Page.stories-KybHlOTQ.js","./Page-DBaC2xQA.css","./entry-preview-V3S0CjG2.js","./chunk-XP5HYGXS-DH4vAeCa.js","./entry-preview-docs-B-kICeun.js","./preview-iUmqt_lp.js","./preview-DY_pW_WS.js","./preview-BQ81rKEh.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const _ of n.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function u(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=u(e);fetch(e.href,n)}})();const R="modulepreload",L=function(t,i){return new URL(t,i).href},O={},r=function(i,u,l){let e=Promise.resolve();if(u&&u.length>0){const _=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),E=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.allSettled(u.map(s=>{if(s=L(s,l),s in O)return;O[s]=!0;const d=s.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!l)for(let a=_.length-1;a>=0;a--){const m=_[a];if(m.href===s&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":R,d||(c.as="script"),c.crossOrigin="",c.href=s,E&&c.setAttribute("nonce",E),document.head.appendChild(c),d)return new Promise((a,m)=>{c.addEventListener("load",a),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}function n(_){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=_,window.dispatchEvent(o),!o.defaultPrevented)throw _}return e.then(_=>{for(const o of _||[])o.status==="rejected"&&n(o.reason);return i().catch(n)})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,f=T({page:"preview"});P.setChannel(f);window.__STORYBOOK_ADDONS_CHANNEL__=f;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=f);const y={"./src/stories/Button.stories.ts":async()=>r(()=>import("./Button.stories-CwJ4DSUh.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./src/stories/Configure.mdx":async()=>r(()=>import("./Configure-V4WBMhnD.js"),__vite__mapDeps([6,3,4,7,8,9,10,11,12]),import.meta.url),"./src/stories/Header.stories.ts":async()=>r(()=>import("./Header.stories-sD7kblDD.js"),__vite__mapDeps([13,1,14,3,4,2,5,15]),import.meta.url),"./src/stories/MyLabel.stories.ts":async()=>r(()=>import("./MyLabel.stories-BjiKpVgL.js"),__vite__mapDeps([16,3,4,17]),import.meta.url),"./src/stories/Page.stories.ts":async()=>r(()=>import("./Page.stories-KybHlOTQ.js"),__vite__mapDeps([18,1,3,4,8,14,2,5,15,19]),import.meta.url)};async function I(t){return y[t]()}const{composeConfigs:S,PreviewWeb:V,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,D=async(t=[])=>{const i=await Promise.all([t[0]??r(()=>import("./entry-preview-V3S0CjG2.js"),__vite__mapDeps([20,21,8,4,10]),import.meta.url),t[1]??r(()=>import("./entry-preview-docs-B-kICeun.js"),__vite__mapDeps([22,21,11,8,4]),import.meta.url),t[2]??r(()=>import("./preview-C4FSUs_H.js"),[],import.meta.url),t[3]??r(()=>import("./preview-RFMnorYX.js"),[],import.meta.url),t[4]??r(()=>import("./preview-iUmqt_lp.js"),__vite__mapDeps([23,12]),import.meta.url),t[5]??r(()=>import("./preview-Zk6Lo_wo.js"),[],import.meta.url),t[6]??r(()=>import("./preview-CFgKly6U.js"),[],import.meta.url),t[7]??r(()=>import("./preview-DY_pW_WS.js"),__vite__mapDeps([24,12]),import.meta.url),t[8]??r(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),t[9]??r(()=>import("./preview-BQ81rKEh.js"),__vite__mapDeps([25,1]),import.meta.url),t[10]??r(()=>import("./preview-CIRcjyVj.js"),[],import.meta.url)]);return S(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new V(I,D);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{r as _};