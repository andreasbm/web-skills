import{d as e,N as t,c as o,e as n,b as s}from"../../common/lit-html-6bb77aec.js";
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
const r=(e,n)=>{const s=e.startNode.parentNode,r=void 0===n?e.endNode:n.startNode,l=s.insertBefore(o(),r);s.insertBefore(o(),r);const i=new t(e.options);return i.insertAfterNode(l),i},l=(e,t)=>(e.setValue(t),e.commit(),e),i=(e,t,o)=>{const s=e.startNode.parentNode,r=o?o.startNode:e.endNode,l=t.endNode.nextSibling;l!==r&&n(s,t.startNode,l,r)},a=e=>{s(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},d=(e,t,o)=>{const n=new Map;for(let s=t;s<=o;s++)n.set(e[s],s);return n},f=new WeakMap,c=new WeakMap,N=e((e,o,n)=>{let s;return void 0===n?n=o:void 0!==o&&(s=o),o=>{if(!(o instanceof t))throw new Error("repeat can only be used in text bindings");const N=f.get(o)||[],u=c.get(o)||[],p=[],g=[],b=[];let m,h,w=0;for(const t of e)b[w]=s?s(t,w):w,g[w]=n(t,w),w++;let v=0,x=N.length-1,M=0,k=g.length-1;for(;v<=x&&M<=k;)if(null===N[v])v++;else if(null===N[x])x--;else if(u[v]===b[M])p[M]=l(N[v],g[M]),v++,M++;else if(u[x]===b[k])p[k]=l(N[x],g[k]),x--,k--;else if(u[v]===b[k])p[k]=l(N[v],g[k]),i(o,N[v],p[k+1]),v++,k--;else if(u[x]===b[M])p[M]=l(N[x],g[M]),i(o,N[x],N[v]),x--,M++;else if(void 0===m&&(m=d(b,M,k),h=d(u,v,x)),m.has(u[v]))if(m.has(u[x])){const e=h.get(b[M]),t=void 0!==e?N[e]:null;if(null===t){const e=r(o,N[v]);l(e,g[M]),p[M]=e}else p[M]=l(t,g[M]),i(o,t,N[v]),N[e]=null;M++}else a(N[x]),x--;else a(N[v]),v++;for(;M<=k;){const e=r(o,p[k+1]);l(e,g[M]),p[M++]=e}for(;v<=x;){const e=N[v++];null!==e&&a(e)}f.set(o,p),c.set(o,b)}});export{N as repeat};
//# sourceMappingURL=repeat.js.map
