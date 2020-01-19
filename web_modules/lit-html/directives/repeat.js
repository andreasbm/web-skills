import{d as e,N as t,l as o,a as n,r as s}from"../../common/render-10ea187d.js";import"../../lit-html.js";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=(e,n)=>{const s=e.startNode.parentNode,r=void 0===n?e.endNode:n.startNode,l=s.insertBefore(o(),r);s.insertBefore(o(),r);const i=new t(e.options);return i.insertAfterNode(l),i},l=(e,t)=>(e.setValue(t),e.commit(),e),i=(e,t,o)=>{const s=e.startNode.parentNode,r=o?o.startNode:e.endNode,l=t.endNode.nextSibling;l!==r&&n(s,t.startNode,l,r)},d=e=>{s(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},a=(e,t,o)=>{const n=new Map;for(let s=t;s<=o;s++)n.set(e[s],s);return n},f=new WeakMap,N=new WeakMap,c=e((e,o,n)=>{let s;return void 0===n?n=o:void 0!==o&&(s=o),o=>{if(!(o instanceof t))throw new Error("repeat can only be used in text bindings");const c=f.get(o)||[],p=N.get(o)||[],u=[],g=[],m=[];let h,w,v=0;for(const t of e)m[v]=s?s(t,v):v,g[v]=n(t,v),v++;let b=0,x=c.length-1,M=0,j=g.length-1;for(;b<=x&&M<=j;)if(null===c[b])b++;else if(null===c[x])x--;else if(p[b]===m[M])u[M]=l(c[b],g[M]),b++,M++;else if(p[x]===m[j])u[j]=l(c[x],g[j]),x--,j--;else if(p[b]===m[j])u[j]=l(c[b],g[j]),i(o,c[b],u[j+1]),b++,j--;else if(p[x]===m[M])u[M]=l(c[x],g[M]),i(o,c[x],c[b]),x--,M++;else if(void 0===h&&(h=a(m,M,j),w=a(p,b,x)),h.has(p[b]))if(h.has(p[x])){const e=w.get(m[M]),t=void 0!==e?c[e]:null;if(null===t){const e=r(o,c[b]);l(e,g[M]),u[M]=e}else u[M]=l(t,g[M]),i(o,t,c[b]),c[e]=null;M++}else d(c[x]),x--;else d(c[b]),b++;for(;M<=j;){const e=r(o,u[j+1]);l(e,g[M]),u[M++]=e}for(;b<=x;){const e=c[b++];null!==e&&d(e)}f.set(o,u),N.set(o,m)}});export{c as repeat};
//# sourceMappingURL=repeat.js.map
