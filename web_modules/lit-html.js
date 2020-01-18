import{P as s,E as w,B as u,A as v,N as x,T as C,S as y}from"./common/render-10ea187d.js";export{A as AttributeCommitter,c as AttributePart,B as BooleanAttributePart,E as EventPart,N as NodePart,P as PropertyCommitter,g as PropertyPart,S as SVGTemplateResult,o as Template,k as TemplateInstance,T as TemplateResult,l as createMarker,d as directive,i as isDirective,e as isIterable,f as isPrimitive,m as isTemplatePartActive,n as noChange,b as nothing,p as parts,r as removeNodes,h as render,a as reparentNodes,t as templateCaches,j as templateFactory}from"./common/render-10ea187d.js";
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
 */class V{handleAttributeExpressions(e,t,a,r){const n=t[0];if("."===n){return new s(e,t.slice(1),a).parts}return"@"===n?[new w(e,t.slice(1),r.eventContext)]:"?"===n?[new u(e,t.slice(1),a)]:new v(e,t,a).parts}handleTextExpression(e){return new x(e)}}const H=new V;
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
 */(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const I=(e,...t)=>new C(e,t,"html",H),R=(e,...t)=>new y(e,t,"svg",H);export{V as DefaultTemplateProcessor,H as defaultTemplateProcessor,I as html,R as svg};
//# sourceMappingURL=lit-html.js.map
