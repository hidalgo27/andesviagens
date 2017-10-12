/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:window.document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var f=a.commonAncestorContainer;if(e!==f&&t!==f||i.contains(n))return p(f)?f:r(f);var l=s(e);return l.host?d(l.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function l(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function m(e,t,o,i){return _(t['offset'+e],o['client'+e],o['offset'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=window.document.body,t=window.document.documentElement,o=ie()&&window.getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,f=e.offsetWidth-s,m=e.offsetHeight-d;if(f||m){var g=t(e);f-=l(g,'x'),m-=l(g,'y'),r.width-=f,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),l=+a.borderTopWidth.split('px')[0],m=+a.borderLeftWidth.split('px')[0],h=c({top:p.top-s.top-l,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=+a.marginTop.split('px')[0],b=+a.marginLeft.split('px')[0];h.top-=l-u,h.bottom-=l-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=f(h,o)),h}function b(e){var t=window.document.documentElement,o=u(e,t),i=_(t.clientWidth,window.innerWidth||0),n=_(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function y(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||y(o(e))}function w(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(e)),'BODY'===a.nodeName&&(a=window.document.documentElement)):'window'===r?a=window.document.documentElement:a=r;var f=u(a,s);if('HTML'===a.nodeName&&!y(s)){var l=h(),m=l.height,c=l.width;p.top+=f.top-f.marginTop,p.bottom=m+f.top,p.left+=f.left-f.marginLeft,p.right=c+f.left}else p=f}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function v(e){var t=e.width,o=e.height;return t*o}function E(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=w(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:v(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),f=0<a.length?a[0].key:d[0].key,l=e.split('-')[1];return f+(l?'-'+l:'')}function x(e,t,o){var i=d(t,o);return u(o,i)}function O(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=O(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[L(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function N(t,o,i){var n=void 0===i?t:t.slice(0,C(t,'name',i));return n.forEach(function(t){t.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t.function||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=E(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function D(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?window:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function P(e,t,o,i){o.updateBound=i,window.addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function A(){this.state.eventsEnabled||(this.state=P(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function R(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&R(t[o])&&(i='px'),e.style[o]=t[o]+i})}function Y(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function j(e){return'end'===e?'start':'start'===e?'end':e}function K(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function q(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?_(document.documentElement.clientHeight,window.innerHeight||0):_(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return q(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){R(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}for(var z=Math.min,V=Math.floor,_=Math.max,X=['native code','[object MutationObserverConstructor]'],Q=function(e){return X.some(function(t){return-1<(e||'').toString().indexOf(t)})},J='undefined'!=typeof window,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(J&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=J&&Q(window.MutationObserver),oe=te?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},le=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o.jquery?o[0]:o,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return D.call(this)}},{key:'enableEventListeners',value:function(){return A.call(this)}},{key:'disableEventListeners',value:function(){return I.call(this)}}]),t}();return le.Utils=('undefined'==typeof window?global:window).PopperUtils,le.placements=de,le.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',f={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,f[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=R(+i)?[+i,0]:G(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=_(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=z(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=V,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var o=t.element;if('string'==typeof o){if(o=e.instance.popper.querySelector(o),!o)return e;}else if(!e.instance.popper.contains(o))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var i=e.placement.split('-')[0],n=e.offsets,r=n.popper,p=n.reference,s=-1!==['left','right'].indexOf(i),d=s?'height':'width',a=s?'top':'left',f=s?'left':'top',l=s?'bottom':'right',m=O(o)[d];p[l]-m<r[a]&&(e.offsets.popper[a]-=r[a]-(p[l]-m)),p[a]+m>r[l]&&(e.offsets.popper[a]+=p[a]+m-r[l]);var h=p[a]+p[d]/2-m/2,g=h-c(e.offsets.popper)[a];return g=_(z(r[d]-m,g),0),e.arrowElement=o,e.offsets.arrow={},e.offsets.arrow[a]=Math.round(g),e.offsets.arrow[f]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[i,n];break;case fe.CLOCKWISE:p=K(i);break;case fe.COUNTERCLOCKWISE:p=K(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,f=e.offsets.reference,l=V,m='left'===i&&l(a.right)>l(f.left)||'right'===i&&l(a.left)<l(f.right)||'top'===i&&l(a.bottom)>l(f.top)||'bottom'===i&&l(a.top)<l(f.bottom),h=l(a.left)<l(o.left),c=l(a.right)>l(o.right),g=l(a.top)<l(o.top),u=l(a.bottom)>l(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=j(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[t]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,f=r(e.instance.popper),l=g(f),m={position:n.position},h={left:V(n.left),top:V(n.top),bottom:V(n.bottom),right:V(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=B('transform');if(d='bottom'==c?-l.height+h.bottom:h.top,s='right'==u?-l.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==u?-1:1;m[c]=d*y,m[u]=s*w,m.willChange=c+', '+u}var v={"x-placement":e.placement};return e.attributes=se({},v,e.attributes),e.styles=se({},m,e.styles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.offsets.arrow&&U(e.arrowElement,e.offsets.arrow),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=E(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),U(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},le});
//# sourceMappingURL=popper.min.js.map
/*!
 * Bootstrap v4.0.0-beta (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*!
 * Bootstrap v4.0.0-beta (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.')
}

(function ($) {
    var version = $.fn.jquery.split(' ')[0].split('.')
    if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
    }
})(jQuery);

(function () {
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): util.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Util = function ($) {

        /**
         * ------------------------------------------------------------------------
         * Private TransitionEnd Helpers
         * ------------------------------------------------------------------------
         */

        var transition = false;

        var MAX_UID = 1000000;

        var TransitionEndEvent = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'

            // shoutout AngusCroll (https://goo.gl/pxwQGp)
        };function toType(obj) {
            return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        }

        function isElement(obj) {
            return (obj[0] || obj).nodeType;
        }

        function getSpecialTransitionEndEvent() {
            return {
                bindType: transition.end,
                delegateType: transition.end,
                handle: function handle(event) {
                    if ($(event.target).is(this)) {
                        return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
                    }
                    return undefined;
                }
            };
        }

        function transitionEndTest() {
            if (window.QUnit) {
                return false;
            }

            var el = document.createElement('bootstrap');

            for (var name in TransitionEndEvent) {
                if (el.style[name] !== undefined) {
                    return {
                        end: TransitionEndEvent[name]
                    };
                }
            }

            return false;
        }

        function transitionEndEmulator(duration) {
            var _this = this;

            var called = false;

            $(this).one(Util.TRANSITION_END, function () {
                called = true;
            });

            setTimeout(function () {
                if (!called) {
                    Util.triggerTransitionEnd(_this);
                }
            }, duration);

            return this;
        }

        function setTransitionEndSupport() {
            transition = transitionEndTest();

            $.fn.emulateTransitionEnd = transitionEndEmulator;

            if (Util.supportsTransitionEnd()) {
                $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
            }
        }

        /**
         * --------------------------------------------------------------------------
         * Public Util Api
         * --------------------------------------------------------------------------
         */

        var Util = {

            TRANSITION_END: 'bsTransitionEnd',

            getUID: function getUID(prefix) {
                do {
                    // eslint-disable-next-line no-bitwise
                    prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
                } while (document.getElementById(prefix));
                return prefix;
            },
            getSelectorFromElement: function getSelectorFromElement(element) {
                var selector = element.getAttribute('data-target');
                if (!selector || selector === '#') {
                    selector = element.getAttribute('href') || '';
                }

                try {
                    var $selector = $(selector);
                    return $selector.length > 0 ? selector : null;
                } catch (error) {
                    return null;
                }
            },
            reflow: function reflow(element) {
                return element.offsetHeight;
            },
            triggerTransitionEnd: function triggerTransitionEnd(element) {
                $(element).trigger(transition.end);
            },
            supportsTransitionEnd: function supportsTransitionEnd() {
                return Boolean(transition);
            },
            typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
                for (var property in configTypes) {
                    if (configTypes.hasOwnProperty(property)) {
                        var expectedTypes = configTypes[property];
                        var value = config[property];
                        var valueType = value && isElement(value) ? 'element' : toType(value);

                        if (!new RegExp(expectedTypes).test(valueType)) {
                            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
                        }
                    }
                }
            }
        };

        setTransitionEndSupport();

        return Util;
    }(jQuery);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): alert.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Alert = function ($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'alert';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.alert';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 150;

        var Selector = {
            DISMISS: '[data-dismiss="alert"]'
        };

        var Event = {
            CLOSE: 'close' + EVENT_KEY,
            CLOSED: 'closed' + EVENT_KEY,
            CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };

        var ClassName = {
            ALERT: 'alert',
            FADE: 'fade',
            SHOW: 'show'

            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };
        var Alert = function () {
            function Alert(element) {
                _classCallCheck(this, Alert);

                this._element = element;
            }

            // getters

            // public

            Alert.prototype.close = function close(element) {
                element = element || this._element;

                var rootElement = this._getRootElement(element);
                var customEvent = this._triggerCloseEvent(rootElement);

                if (customEvent.isDefaultPrevented()) {
                    return;
                }

                this._removeElement(rootElement);
            };

            Alert.prototype.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                this._element = null;
            };

            // private

            Alert.prototype._getRootElement = function _getRootElement(element) {
                var selector = Util.getSelectorFromElement(element);
                var parent = false;

                if (selector) {
                    parent = $(selector)[0];
                }

                if (!parent) {
                    parent = $(element).closest('.' + ClassName.ALERT)[0];
                }

                return parent;
            };

            Alert.prototype._triggerCloseEvent = function _triggerCloseEvent(element) {
                var closeEvent = $.Event(Event.CLOSE);

                $(element).trigger(closeEvent);
                return closeEvent;
            };

            Alert.prototype._removeElement = function _removeElement(element) {
                var _this2 = this;

                $(element).removeClass(ClassName.SHOW);

                if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
                    this._destroyElement(element);
                    return;
                }

                $(element).one(Util.TRANSITION_END, function (event) {
                    return _this2._destroyElement(element, event);
                }).emulateTransitionEnd(TRANSITION_DURATION);
            };

            Alert.prototype._destroyElement = function _destroyElement(element) {
                $(element).detach().trigger(Event.CLOSED).remove();
            };

            // static

            Alert._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var $element = $(this);
                    var data = $element.data(DATA_KEY);

                    if (!data) {
                        data = new Alert(this);
                        $element.data(DATA_KEY, data);
                    }

                    if (config === 'close') {
                        data[config](this);
                    }
                });
            };

            Alert._handleDismiss = function _handleDismiss(alertInstance) {
                return function (event) {
                    if (event) {
                        event.preventDefault();
                    }

                    alertInstance.close(this);
                };
            };

            _createClass(Alert, null, [{
                key: 'VERSION',
                get: function get() {
                    return VERSION;
                }
            }]);

            return Alert;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Alert._jQueryInterface;
        $.fn[NAME].Constructor = Alert;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Alert._jQueryInterface;
        };

        return Alert;
    }(jQuery);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): button.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Button = function ($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'button';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.button';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];

        var ClassName = {
            ACTIVE: 'active',
            BUTTON: 'btn',
            FOCUS: 'focus'
        };

        var Selector = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: 'input',
            ACTIVE: '.active',
            BUTTON: '.btn'
        };

        var Event = {
            CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
            FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)

            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };
        var Button = function () {
            function Button(element) {
                _classCallCheck(this, Button);

                this._element = element;
            }

            // getters

            // public

            Button.prototype.toggle = function toggle() {
                var triggerChangeEvent = true;
                var addAriaPressed = true;
                var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

                if (rootElement) {
                    var input = $(this._element).find(Selector.INPUT)[0];

                    if (input) {
                        if (input.type === 'radio') {
                            if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
                                triggerChangeEvent = false;
                            } else {
                                var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

                                if (activeElement) {
                                    $(activeElement).removeClass(ClassName.ACTIVE);
                                }
                            }
                        }

                        if (triggerChangeEvent) {
                            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
                                return;
                            }
                            input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
                            $(input).trigger('change');
                        }

                        input.focus();
                        addAriaPressed = false;
                    }
                }

                if (addAriaPressed) {
                    this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
                }

                if (triggerChangeEvent) {
                    $(this._element).toggleClass(ClassName.ACTIVE);
                }
            };

            Button.prototype.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                this._element = null;
            };

            // static

            Button._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);

                    if (!data) {
                        data = new Button(this);
                        $(this).data(DATA_KEY, data);
                    }

                    if (config === 'toggle') {
                        data[config]();
                    }
                });
            };

            _createClass(Button, null, [{
                key: 'VERSION',
                get: function get() {
                    return VERSION;
                }
            }]);

            return Button;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
            event.preventDefault();

            var button = event.target;

            if (!$(button).hasClass(ClassName.BUTTON)) {
                button = $(button).closest(Selector.BUTTON);
            }

            Button._jQueryInterface.call($(button), 'toggle');
        }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
            var button = $(event.target).closest(Selector.BUTTON)[0];
            $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
        });

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Button._jQueryInterface;
        $.fn[NAME].Constructor = Button;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Button._jQueryInterface;
        };

        return Button;
    }(jQuery);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): carousel.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Carousel = function ($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'carousel';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.carousel';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 600;
        var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
        var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key
        var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

        var Default = {
            interval: 5000,
            keyboard: true,
            slide: false,
            pause: 'hover',
            wrap: true
        };

        var DefaultType = {
            interval: '(number|boolean)',
            keyboard: 'boolean',
            slide: '(boolean|string)',
            pause: '(string|boolean)',
            wrap: 'boolean'
        };

        var Direction = {
            NEXT: 'next',
            PREV: 'prev',
            LEFT: 'left',
            RIGHT: 'right'
        };

        var Event = {
            SLIDE: 'slide' + EVENT_KEY,
            SLID: 'slid' + EVENT_KEY,
            KEYDOWN: 'keydown' + EVENT_KEY,
            MOUSEENTER: 'mouseenter' + EVENT_KEY,
            MOUSELEAVE: 'mouseleave' + EVENT_KEY,
            TOUCHEND: 'touchend' + EVENT_KEY,
            LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
            CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };

        var ClassName = {
            CAROUSEL: 'carousel',
            ACTIVE: 'active',
            SLIDE: 'slide',
            RIGHT: 'carousel-item-right',
            LEFT: 'carousel-item-left',
            NEXT: 'carousel-item-next',
            PREV: 'carousel-item-prev',
            ITEM: 'carousel-item'
        };

        var Selector = {
            ACTIVE: '.active',
            ACTIVE_ITEM: '.active.carousel-item',
            ITEM: '.carousel-item',
            NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
            INDICATORS: '.carousel-indicators',
            DATA_SLIDE: '[data-slide], [data-slide-to]',
            DATA_RIDE: '[data-ride="carousel"]'

            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };
        var Carousel = function () {
            function Carousel(element, config) {
                _classCallCheck(this, Carousel);

                this._items = null;
                this._interval = null;
                this._activeElement = null;

                this._isPaused = false;
                this._isSliding = false;

                this.touchTimeout = null;

                this._config = this._getConfig(config);
                this._element = $(element)[0];
                this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];

                this._addEventListeners();
            }

            // getters

            // public

            Carousel.prototype.next = function next() {
                if (!this._isSliding) {
                    this._slide(Direction.NEXT);
                }
            };

            Carousel.prototype.nextWhenVisible = function nextWhenVisible() {
                // Don't call next when the page isn't visible
                if (!document.hidden) {
                    this.next();
                }
            };

            Carousel.prototype.prev = function prev() {
                if (!this._isSliding) {
                    this._slide(Direction.PREV);
                }
            };

            Carousel.prototype.pause = function pause(event) {
                if (!event) {
                    this._isPaused = true;
                }

                if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
                    Util.triggerTransitionEnd(this._element);
                    this.cycle(true);
                }

                clearInterval(this._interval);
                this._interval = null;
            };

            Carousel.prototype.cycle = function cycle(event) {
                if (!event) {
                    this._isPaused = false;
                }

                if (this._interval) {
                    clearInterval(this._interval);
                    this._interval = null;
                }

                if (this._config.interval && !this._isPaused) {
                    this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
                }
            };

            Carousel.prototype.to = function to(index) {
                var _this3 = this;

                this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

                var activeIndex = this._getItemIndex(this._activeElement);

                if (index > this._items.length - 1 || index < 0) {
                    return;
                }

                if (this._isSliding) {
                    $(this._element).one(Event.SLID, function () {
                        return _this3.to(index);
                    });
                    return;
                }

                if (activeIndex === index) {
                    this.pause();
                    this.cycle();
                    return;
                }

                var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

                this._slide(direction, this._items[index]);
            };

            Carousel.prototype.dispose = function dispose() {
                $(this._element).off(EVENT_KEY);
                $.removeData(this._element, DATA_KEY);

                this._items = null;
                this._config = null;
                this._element = null;
                this._interval = null;
                this._isPaused = null;
                this._isSliding = null;
                this._activeElement = null;
                this._indicatorsElement = null;
            };

            // private

            Carousel.prototype._getConfig = function _getConfig(config) {
                config = $.extend({}, Default, config);
                Util.typeCheckConfig(NAME, config, DefaultType);
                return config;
            };

            Carousel.prototype._addEventListeners = function _addEventListeners() {
                var _this4 = this;

                if (this._config.keyboard) {
                    $(this._element).on(Event.KEYDOWN, function (event) {
                        return _this4._keydown(event);
                    });
                }

                if (this._config.pause === 'hover') {
                    $(this._element).on(Event.MOUSEENTER, function (event) {
                        return _this4.pause(event);
                    }).on(Event.MOUSELEAVE, function (event) {
                        return _this4.cycle(event);
                    });
                    if ('ontouchstart' in document.documentElement) {
                        // if it's a touch-enabled device, mouseenter/leave are fired as
                        // part of the mouse compatibility events on first tap - the carousel
                        // would stop cycling until user tapped out of it;
                        // here, we listen for touchend, explicitly pause the carousel
                        // (as if it's the second time we tap on it, mouseenter compat event
                        // is NOT fired) and after a timeout (to allow for mouse compatibility
                        // events to fire) we explicitly restart cycling
                        $(this._element).on(Event.TOUCHEND, function () {
                            _this4.pause();
                            if (_this4.touchTimeout) {
                                clearTimeout(_this4.touchTimeout);
                            }
                            _this4.touchTimeout = setTimeout(function (event) {
                                return _this4.cycle(event);
                            }, TOUCHEVENT_COMPAT_WAIT + _this4._config.interval);
                        });
                    }
                }
            };

            Carousel.prototype._keydown = function _keydown(event) {
                if (/input|textarea/i.test(event.target.tagName)) {
                    return;
                }

                switch (event.which) {
                    case ARROW_LEFT_KEYCODE:
                        event.preventDefault();
                        this.prev();
                        break;
                    case ARROW_RIGHT_KEYCODE:
                        event.preventDefault();
                        this.next();
                        break;
                    default:
                        return;
                }
            };

            Carousel.prototype._getItemIndex = function _getItemIndex(element) {
                this._items = $.makeArray($(element).parent().find(Selector.ITEM));
                return this._items.indexOf(element);
            };

            Carousel.prototype._getItemByDirection = function _getItemByDirection(direction, activeElement) {
                var isNextDirection = direction === Direction.NEXT;
                var isPrevDirection = direction === Direction.PREV;
                var activeIndex = this._getItemIndex(activeElement);
                var lastItemIndex = this._items.length - 1;
                var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

                if (isGoingToWrap && !this._config.wrap) {
                    return activeElement;
                }

                var delta = direction === Direction.PREV ? -1 : 1;
                var itemIndex = (activeIndex + delta) % this._items.length;

                return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
            };

            Carousel.prototype._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
                var targetIndex = this._getItemIndex(relatedTarget);
                var fromIndex = this._getItemIndex($(this._element).find(Selector.ACTIVE_ITEM)[0]);
                var slideEvent = $.Event(Event.SLIDE, {
                    relatedTarget: relatedTarget,
                    direction: eventDirectionName,
                    from: fromIndex,
                    to: targetIndex
                });

                $(this._element).trigger(slideEvent);

                return slideEvent;
            };

            Carousel.prototype._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
                if (this._indicatorsElement) {
                    $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

                    var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

                    if (nextIndicator) {
                        $(nextIndicator).addClass(ClassName.ACTIVE);
                    }
                }
            };

            Carousel.prototype._slide = function _slide(direction, element) {
                var _this5 = this;

                var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
                var activeElementIndex = this._getItemIndex(activeElement);
                var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
                var nextElementIndex = this._getItemIndex(nextElement);
                var isCycling = Boolean(this._interval);

                var directionalClassName = void 0;
                var orderClassName = void 0;
                var eventDirectionName = void 0;

                if (direction === Direction.NEXT) {
                    directionalClassName = ClassName.LEFT;
                    orderClassName = ClassName.NEXT;
                    eventDirectionName = Direction.LEFT;
                } else {
                    directionalClassName = ClassName.RIGHT;
                    orderClassName = ClassName.PREV;
                    eventDirectionName = Direction.RIGHT;
                }

                if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
                    this._isSliding = false;
                    return;
                }

                var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
                if (slideEvent.isDefaultPrevented()) {
                    return;
                }

                if (!activeElement || !nextElement) {
                    // some weirdness is happening, so we bail
                    return;
                }

                this._isSliding = true;

                if (isCycling) {
                    this.pause();
                }

                this._setActiveIndicatorElement(nextElement);

                var slidEvent = $.Event(Event.SLID, {
                    relatedTarget: nextElement,
                    direction: eventDirectionName,
                    from: activeElementIndex,
                    to: nextElementIndex
                });

                if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {

                    $(nextElement).addClass(orderClassName);

                    Util.reflow(nextElement);

                    $(activeElement).addClass(directionalClassName);
                    $(nextElement).addClass(directionalClassName);

                    $(activeElement).one(Util.TRANSITION_END, function () {
                        $(nextElement).removeClass(directionalClassName + ' ' + orderClassName).addClass(ClassName.ACTIVE);

                        $(activeElement).removeClass(ClassName.ACTIVE + ' ' + orderClassName + ' ' + directionalClassName);

                        _this5._isSliding = false;

                        setTimeout(function () {
                            return $(_this5._element).trigger(slidEvent);
                        }, 0);
                    }).emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    $(activeElement).removeClass(ClassName.ACTIVE);
                    $(nextElement).addClass(ClassName.ACTIVE);

                    this._isSliding = false;
                    $(this._element).trigger(slidEvent);
                }

                if (isCycling) {
                    this.cycle();
                }
            };

            // static

            Carousel._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);
                    var _config = $.extend({}, Default, $(this).data());

                    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
                        $.extend(_config, config);
                    }

                    var action = typeof config === 'string' ? config : _config.slide;

                    if (!data) {
                        data = new Carousel(this, _config);
                        $(this).data(DATA_KEY, data);
                    }

                    if (typeof config === 'number') {
                        data.to(config);
                    } else if (typeof action === 'string') {
                        if (data[action] === undefined) {
                            throw new Error('No method named "' + action + '"');
                        }
                        data[action]();
                    } else if (_config.interval) {
                        data.pause();
                        data.cycle();
                    }
                });
            };

            Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
                var selector = Util.getSelectorFromElement(this);

                if (!selector) {
                    return;
                }

                var target = $(selector)[0];

                if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
                    return;
                }

                var config = $.extend({}, $(target).data(), $(this).data());
                var slideIndex = this.getAttribute('data-slide-to');

                if (slideIndex) {
                    config.interval = false;
                }

                Carousel._jQueryInterface.call($(target), config);

                if (slideIndex) {
                    $(target).data(DATA_KEY).to(slideIndex);
                }

                event.preventDefault();
            };

            _createClass(Carousel, null, [{
                key: 'VERSION',
                get: function get() {
                    return VERSION;
                }
            }, {
                key: 'Default',
                get: function get() {
                    return Default;
                }
            }]);

            return Carousel;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);

        $(window).on(Event.LOAD_DATA_API, function () {
            $(Selector.DATA_RIDE).each(function () {
                var $carousel = $(this);
                Carousel._jQueryInterface.call($carousel, $carousel.data());
            });
        });

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Carousel._jQueryInterface;
        $.fn[NAME].Constructor = Carousel;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Carousel._jQueryInterface;
        };

        return Carousel;
    }(jQuery);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): collapse.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Collapse = function ($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'collapse';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.collapse';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 600;

        var Default = {
            toggle: true,
            parent: ''
        };

        var DefaultType = {
            toggle: 'boolean',
            parent: 'string'
        };

        var Event = {
            SHOW: 'show' + EVENT_KEY,
            SHOWN: 'shown' + EVENT_KEY,
            HIDE: 'hide' + EVENT_KEY,
            HIDDEN: 'hidden' + EVENT_KEY,
            CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };

        var ClassName = {
            SHOW: 'show',
            COLLAPSE: 'collapse',
            COLLAPSING: 'collapsing',
            COLLAPSED: 'collapsed'
        };

        var Dimension = {
            WIDTH: 'width',
            HEIGHT: 'height'
        };

        var Selector = {
            ACTIVES: '.show, .collapsing',
            DATA_TOGGLE: '[data-toggle="collapse"]'

            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };
        var Collapse = function () {
            function Collapse(element, config) {
                _classCallCheck(this, Collapse);

                this._isTransitioning = false;
                this._element = element;
                this._config = this._getConfig(config);
                this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));
                var tabToggles = $(Selector.DATA_TOGGLE);
                for (var i = 0; i < tabToggles.length; i++) {
                    var elem = tabToggles[i];
                    var selector = Util.getSelectorFromElement(elem);
                    if (selector !== null && $(selector).filter(element).length > 0) {
                        this._triggerArray.push(elem);
                    }
                }

                this._parent = this._config.parent ? this._getParent() : null;

                if (!this._config.parent) {
                    this._addAriaAndCollapsedClass(this._element, this._triggerArray);
                }

                if (this._config.toggle) {
                    this.toggle();
                }
            }

            // getters

            // public

            Collapse.prototype.toggle = function toggle() {
                if ($(this._element).hasClass(ClassName.SHOW)) {
                    this.hide();
                } else {
                    this.show();
                }
            };

            Collapse.prototype.show = function show() {
                var _this6 = this;

                if (this._isTransitioning || $(this._element).hasClass(ClassName.SHOW)) {
                    return;
                }

                var actives = void 0;
                var activesData = void 0;

                if (this._parent) {
                    actives = $.makeArray($(this._parent).children().children(Selector.ACTIVES));
                    if (!actives.length) {
                        actives = null;
                    }
                }

                if (actives) {
                    activesData = $(actives).data(DATA_KEY);
                    if (activesData && activesData._isTransitioning) {
                        return;
                    }
                }

                var startEvent = $.Event(Event.SHOW);
                $(this._element).trigger(startEvent);
                if (startEvent.isDefaultPrevented()) {
                    return;
                }

                if (actives) {
                    Collapse._jQueryInterface.call($(actives), 'hide');
                    if (!activesData) {
                        $(actives).data(DATA_KEY, null);
                    }
                }

                var dimension = this._getDimension();

                $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

                this._element.style[dimension] = 0;

                if (this._triggerArray.length) {
                    $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
                }

                this.setTransitioning(true);

                var complete = function complete() {
                    $(_this6._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);

                    _this6._element.style[dimension] = '';

                    _this6.setTransitioning(false);

                    $(_this6._element).trigger(Event.SHOWN);
                };

                if (!Util.supportsTransitionEnd()) {
                    complete();
                    return;
                }

                var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
                var scrollSize = 'scroll' + capitalizedDimension;

                $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

                this._element.style[dimension] = this._element[scrollSize] + 'px';
            };

            Collapse.prototype.hide = function hide() {
                var _this7 = this;

                if (this._isTransitioning || !$(this._element).hasClass(ClassName.SHOW)) {
                    return;
                }

                var startEvent = $.Event(Event.HIDE);
                $(this._element).trigger(startEvent);
                if (startEvent.isDefaultPrevented()) {
                    return;
                }

                var dimension = this._getDimension();

                this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + 'px';

                Util.reflow(this._element);

                $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

                if (this._triggerArray.length) {
                    for (var i = 0; i < this._triggerArray.length; i++) {
                        var trigger = this._triggerArray[i];
                        var selector = Util.getSelectorFromElement(trigger);
                        if (selector !== null) {
                            var $elem = $(selector);
                            if (!$elem.hasClass(ClassName.SHOW)) {
                                $(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
                            }
                        }
                    }
                }

                this.setTransitioning(true);

                var complete = function complete() {
                    _this7.setTransitioning(false);
                    $(_this7._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
                };

                this._element.style[dimension] = '';

                if (!Util.supportsTransitionEnd()) {
                    complete();
                    return;
                }

                $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
            };

            Collapse.prototype.setTransitioning = function setTransitioning(isTransitioning) {
                this._isTransitioning = isTransitioning;
            };

            Collapse.prototype.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);

                this._config = null;
                this._parent = null;
                this._element = null;
                this._triggerArray = null;
                this._isTransitioning = null;
            };

            // private

            Collapse.prototype._getConfig = function _getConfig(config) {
                config = $.extend({}, Default, config);
                config.toggle = Boolean(config.toggle); // coerce string values
                Util.typeCheckConfig(NAME, config, DefaultType);
                return config;
            };

            Collapse.prototype._getDimension = function _getDimension() {
                var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
                return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
            };

            Collapse.prototype._getParent = function _getParent() {
                var _this8 = this;

                var parent = $(this._config.parent)[0];
                var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';

                $(parent).find(selector).each(function (i, element) {
                    _this8._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
                });

                return parent;
            };

            Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
                if (element) {
                    var isOpen = $(element).hasClass(ClassName.SHOW);

                    if (triggerArray.length) {
                        $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
                    }
                }
            };

            // static

            Collapse._getTargetFromElement = function _getTargetFromElement(element) {
                var selector = Util.getSelectorFromElement(element);
                return selector ? $(selector)[0] : null;
            };

            Collapse._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var $this = $(this);
                    var data = $this.data(DATA_KEY);
                    var _config = $.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

                    if (!data && _config.toggle && /show|hide/.test(config)) {
                        _config.toggle = false;
                    }

                    if (!data) {
                        data = new Collapse(this, _config);
                        $this.data(DATA_KEY, data);
                    }

                    if (typeof config === 'string') {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config]();
                    }
                });
            };

            _createClass(Collapse, null, [{
                key: 'VERSION',
                get: function get() {
                    return VERSION;
                }
            }, {
                key: 'Default',
                get: function get() {
                    return Default;
                }
            }]);

            return Collapse;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            if (!/input|textarea/i.test(event.target.tagName)) {
                event.preventDefault();
            }

            var $trigger = $(this);
            var selector = Util.getSelectorFromElement(this);
            $(selector).each(function () {
                var $target = $(this);
                var data = $target.data(DATA_KEY);
                var config = data ? 'toggle' : $trigger.data();
                Collapse._jQueryInterface.call($target, config);
            });
        });

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Collapse._jQueryInterface;
        $.fn[NAME].Constructor = Collapse;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Collapse._jQueryInterface;
        };

        return Collapse;
    }(jQuery);

    /* global Popper */

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): dropdown.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Dropdown = function ($) {

        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
            throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
        }

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'dropdown';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.dropdown';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
        var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key
        var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key
        var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
        var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
        var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)
        var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + '|' + ARROW_DOWN_KEYCODE + '|' + ESCAPE_KEYCODE);

        var Event = {
            HIDE: 'hide' + EVENT_KEY,
            HIDDEN: 'hidden' + EVENT_KEY,
            SHOW: 'show' + EVENT_KEY,
            SHOWN: 'shown' + EVENT_KEY,
            CLICK: 'click' + EVENT_KEY,
            CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
            KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY,
            KEYUP_DATA_API: 'keyup' + EVENT_KEY + DATA_API_KEY
        };

        var ClassName = {
            DISABLED: 'disabled',
            SHOW: 'show',
            DROPUP: 'dropup',
            MENURIGHT: 'dropdown-menu-right',
            MENULEFT: 'dropdown-menu-left'
        };

        var Selector = {
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: '.dropdown form',
            MENU: '.dropdown-menu',
            NAVBAR_NAV: '.navbar-nav',
            VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
        };

        var AttachmentMap = {
            TOP: 'top-start',
            TOPEND: 'top-end',
            BOTTOM: 'bottom-start',
            BOTTOMEND: 'bottom-end'
        };

        var Default = {
            placement: AttachmentMap.BOTTOM,
            offset: 0,
            flip: true
        };

        var DefaultType = {
            placement: 'string',
            offset: '(number|string)',
            flip: 'boolean'

            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };
        var Dropdown = function () {
            function Dropdown(element, config) {
                _classCallCheck(this, Dropdown);

                this._element = element;
                this._popper = null;
                this._config = this._getConfig(config);
                this._menu = this._getMenuElement();
                this._inNavbar = this._detectNavbar();

                this._addEventListeners();
            }

            // getters

            // public

            Dropdown.prototype.toggle = function toggle() {
                if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {
                    return;
                }

                var parent = Dropdown._getParentFromElement(this._element);
                var isActive = $(this._menu).hasClass(ClassName.SHOW);

                Dropdown._clearMenus();

                if (isActive) {
                    return;
                }

                var relatedTarget = {
                    relatedTarget: this._element
                };
                var showEvent = $.Event(Event.SHOW, relatedTarget);

                $(parent).trigger(showEvent);

                if (showEvent.isDefaultPrevented()) {
                    return;
                }

                var element = this._element;
                // for dropup with alignment we use the parent as popper container
                if ($(parent).hasClass(ClassName.DROPUP)) {
                    if ($(this._menu).hasClass(ClassName.MENULEFT) || $(this._menu).hasClass(ClassName.MENURIGHT)) {
                        element = parent;
                    }
                }
                this._popper = new Popper(element, this._menu, this._getPopperConfig());

                // if this is a touch-enabled device we add extra
                // empty mouseover listeners to the body's immediate children;
                // only needed because of broken event delegation on iOS
                // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {
                    $('body').children().on('mouseover', null, $.noop);
                }

                this._element.focus();
                this._element.setAttribute('aria-expanded', true);

                $(this._menu).toggleClass(ClassName.SHOW);
                $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
            };

            Dropdown.prototype.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                $(this._element).off(EVENT_KEY);
                this._element = null;
                this._menu = null;
                if (this._popper !== null) {
                    this._popper.destroy();
                }
                this._popper = null;
            };

            Dropdown.prototype.update = function update() {
                this._inNavbar = this._detectNavbar();
                if (this._popper !== null) {
                    this._popper.scheduleUpdate();
                }
            };

            // private

            Dropdown.prototype._addEventListeners = function _addEventListeners() {
                var _this9 = this;

                $(this._element).on(Event.CLICK, function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    _this9.toggle();
                });
            };

            Dropdown.prototype._getConfig = function _getConfig(config) {
                var elementData = $(this._element).data();
                if (elementData.placement !== undefined) {
                    elementData.placement = AttachmentMap[elementData.placement.toUpperCase()];
                }

                config = $.extend({}, this.constructor.Default, $(this._element).data(), config);

                Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

                return config;
            };

            Dropdown.prototype._getMenuElement = function _getMenuElement() {
                if (!this._menu) {
                    var parent = Dropdown._getParentFromElement(this._element);
                    this._menu = $(parent).find(Selector.MENU)[0];
                }
                return this._menu;
            };

            Dropdown.prototype._getPlacement = function _getPlacement() {
                var $parentDropdown = $(this._element).parent();
                var placement = this._config.placement;

                // Handle dropup
                if ($parentDropdown.hasClass(ClassName.DROPUP) || this._config.placement === AttachmentMap.TOP) {
                    placement = AttachmentMap.TOP;
                    if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
                        placement = AttachmentMap.TOPEND;
                    }
                } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
                    placement = AttachmentMap.BOTTOMEND;
                }
                return placement;
            };

            Dropdown.prototype._detectNavbar = function _detectNavbar() {
                return $(this._element).closest('.navbar').length > 0;
            };

            Dropdown.prototype._getPopperConfig = function _getPopperConfig() {
                var popperConfig = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: {
                            offset: this._config.offset
                        },
                        flip: {
                            enabled: this._config.flip
                        }
                    }

                    // Disable Popper.js for Dropdown in Navbar
                };if (this._inNavbar) {
                    popperConfig.modifiers.applyStyle = {
                        enabled: !this._inNavbar
                    };
                }
                return popperConfig;
            };

            // static

            Dropdown._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);
                    var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

                    if (!data) {
                        data = new Dropdown(this, _config);
                        $(this).data(DATA_KEY, data);
                    }

                    if (typeof config === 'string') {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config]();
                    }
                });
            };

            Dropdown._clearMenus = function _clearMenus(event) {
                if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
                    return;
                }

                var toggles = $.makeArray($(Selector.DATA_TOGGLE));
                for (var i = 0; i < toggles.length; i++) {
                    var parent = Dropdown._getParentFromElement(toggles[i]);
                    var context = $(toggles[i]).data(DATA_KEY);
                    var relatedTarget = {
                        relatedTarget: toggles[i]
                    };

                    if (!context) {
                        continue;
                    }

                    var dropdownMenu = context._menu;
                    if (!$(parent).hasClass(ClassName.SHOW)) {
                        continue;
                    }

                    if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
                        continue;
                    }

                    var hideEvent = $.Event(Event.HIDE, relatedTarget);
                    $(parent).trigger(hideEvent);
                    if (hideEvent.isDefaultPrevented()) {
                        continue;
                    }

                    // if this is a touch-enabled device we remove the extra
                    // empty mouseover listeners we added for iOS support
                    if ('ontouchstart' in document.documentElement) {
                        $('body').children().off('mouseover', null, $.noop);
                    }

                    toggles[i].setAttribute('aria-expanded', 'false');

                    $(dropdownMenu).removeClass(ClassName.SHOW);
                    $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
                }
            };

            Dropdown._getParentFromElement = function _getParentFromElement(element) {
                var parent = void 0;
                var selector = Util.getSelectorFromElement(element);

                if (selector) {
                    parent = $(selector)[0];
                }

                return parent || element.parentNode;
            };

            Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
                if (!REGEXP_KEYDOWN.test(event.which) || /button/i.test(event.target.tagName) && event.which === SPACE_KEYCODE || /input|textarea/i.test(event.target.tagName)) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();

                if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
                    return;
                }

                var parent = Dropdown._getParentFromElement(this);
                var isActive = $(parent).hasClass(ClassName.SHOW);

                if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {

                    if (event.which === ESCAPE_KEYCODE) {
                        var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
                        $(toggle).trigger('focus');
                    }

                    $(this).trigger('click');
                    return;
                }

                var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

                if (!items.length) {
                    return;
                }

                var index = items.indexOf(event.target);

                if (event.which === ARROW_UP_KEYCODE && index > 0) {
                    // up
                    index--;
                }

                if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
                    // down
                    index++;
                }

                if (index < 0) {
                    index = 0;
                }

                items[index].focus();
            };

            _createClass(Dropdown, null, [{
                key: 'VERSION',
                get: function get() {
                    return VERSION;
                }
            }, {
                key: 'Default',
                get: function get() {
                    return Default;
                }
            }, {
                key: 'DefaultType',
                get: function get() {
                    return DefaultType;
                }
            }]);

            return Dropdown;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + ' ' + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            event.preventDefault();
            event.stopPropagation();
            Dropdown._jQueryInterface.call($(this), 'toggle');
        }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
            e.stopPropagation();
        });

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Dropdown._jQueryInterface;
        $.fn[NAME].Constructor = Dropdown;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Dropdown._jQueryInterface;
        };

        return Dropdown;
    }(jQuery);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): modal.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Modal = function ($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'modal';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.modal';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 300;
        var BACKDROP_TRANSITION_DURATION = 150;
        var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

        var Default = {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: true
        };

        var DefaultType = {
            backdrop: '(boolean|string)',
            keyboard: 'boolean',
            focus: 'boolean',
            show: 'boolean'
        };

        var Event = {
            HIDE: 'hide' + EVENT_KEY,
            HIDDEN: 'hidden' + EVENT_KEY,
            SHOW: 'show' + EVENT_KEY,
            SHOWN: 'shown' + EVENT_KEY,
            FOCUSIN: 'focusin' + EVENT_KEY,
            RESIZE: 'resize' + EVENT_KEY,
            CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
            KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
            MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
            MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
            CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };

        var ClassName = {
            SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
            BACKDROP: 'modal-backdrop',
            OPEN: 'modal-open',
            FADE: 'fade',
            SHOW: 'show'
        };

        var Selector = {
            DIALOG: '.modal-dialog',
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
            NAVBAR_TOGGLER: '.navbar-toggler'

            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };
        var Modal = function () {
            function Modal(element, config) {
                _classCallCheck(this, Modal);

                this._config = this._getConfig(config);
                this._element = element;
                this._dialog = $(element).find(Selector.DIALOG)[0];
                this._backdrop = null;
                this._isShown = false;
                this._isBodyOverflowing = false;
                this._ignoreBackdropClick = false;
                this._originalBodyPadding = 0;
                this._scrollbarWidth = 0;
            }

            // getters

            // public

            Modal.prototype.toggle = function toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget);
            };

            Modal.prototype.show = function show(relatedTarget) {
                var _this10 = this;

                if (this._isTransitioning) {
                    return;
                }

                if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                    this._isTransitioning = true;
                }

                var showEvent = $.Event(Event.SHOW, {
                    relatedTarget: relatedTarget
                });

                $(this._element).trigger(showEvent);

                if (this._isShown || showEvent.isDefaultPrevented()) {
                    return;
                }

                this._isShown = true;

                this._checkScrollbar();
                this._setScrollbar();

                $(document.body).addClass(ClassName.OPEN);

                this._setEscapeEvent();
                this._setResizeEvent();

                $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
                    return _this10.hide(event);
                });

                $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
                    $(_this10._element).one(Event.MOUSEUP_DISMISS, function (event) {
                        if ($(event.target).is(_this10._element)) {
                            _this10._ignoreBackdropClick = true;
                        }
                    });
                });

                this._showBackdrop(function () {
                    return _this10._showElement(relatedTarget);
                });
            };

            Modal.prototype.hide = function hide(event) {
                var _this11 = this;

                if (event) {
                    event.preventDefault();
                }

                if (this._isTransitioning || !this._isShown) {
                    return;
                }

                var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

                if (transition) {
                    this._isTransitioning = true;
                }

                var hideEvent = $.Event(Event.HIDE);

                $(this._element).trigger(hideEvent);

                if (!this._isShown || hideEvent.isDefaultPrevented()) {
                    return;
                }

                this._isShown = false;

                this._setEscapeEvent();
                this._setResizeEvent();

                $(document).off(Event.FOCUSIN);

                $(this._element).removeClass(ClassName.SHOW);

                $(this._element).off(Event.CLICK_DISMISS);
                $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

                if (transition) {

                    $(this._element).one(Util.TRANSITION_END, function (event) {
                        return _this11._hideModal(event);
                    }).emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    this._hideModal();
                }
            };

            Modal.prototype.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);

                $(window, document, this._element, this._backdrop).off(EVENT_KEY);

                this._config = null;
                this._element = null;
                this._dialog = null;
                this._backdrop = null;
                this._isShown = null;
                this._isBodyOverflowing = null;
                this._ignoreBackdropClick = null;
                this._scrollbarWidth = null;
            };

            Modal.prototype.handleUpdate = function handleUpdate() {
                this._adjustDialog();
            };

            // private

            Modal.prototype._getConfig = function _getConfig(config) {
                config = $.extend({}, Default, config);
                Util.typeCheckConfig(NAME, config, DefaultType);
                return config;
            };

            Modal.prototype._showElement = function _showElement(relatedTarget) {
                var _this12 = this;

                var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

                if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
                    // don't move modals dom position
                    document.body.appendChild(this._element);
                }

                this._element.style.display = 'block';
                this._element.removeAttribute('aria-hidden');
                this._element.scrollTop = 0;

                if (transition) {
                    Util.reflow(this._element);
                }

                $(this._element).addClass(ClassName.SHOW);

                if (this._config.focus) {
                    this._enforceFocus();
                }

                var shownEvent = $.Event(Event.SHOWN, {
                    relatedTarget: relatedTarget
                });

                var transitionComplete = function transitionComplete() {
                    if (_this12._config.focus) {
                        _this12._element.focus();
                    }
                    _this12._isTransitioning = false;
                    $(_this12._element).trigger(shownEvent);
                };

                if (transition) {
                    $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    transitionComplete();
                }
            };

            Modal.prototype._enforceFocus = function _enforceFocus() {
                var _this13 = this;

                $(document).off(Event.FOCUSIN) // guard against infinite focus loop
                    .on(Event.FOCUSIN, function (event) {
                        if (document !== event.target && _this13._element !== event.target && !$(_this13._element).has(event.target).length) {
                            _this13._element.focus();
                        }
                    });
            };

            Modal.prototype._setEscapeEvent = function _setEscapeEvent() {
                var _this14 = this;

                if (this._isShown && this._config.keyboard) {
                    $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
                        if (event.which === ESCAPE_KEYCODE) {
                            event.preventDefault();
                            _this14.hide();
                        }
                    });
                } else if (!this._isShown) {
                    $(this._element).off(Event.KEYDOWN_DISMISS);
                }
            };

            Modal.prototype._setResizeEvent = function _setResizeEvent() {
                var _this15 = this;

                if (this._isShown) {
                    $(window).on(Event.RESIZE, function (event) {
                        return _this15.handleUpdate(event);
                    });
                } else {
                    $(window).off(Event.RESIZE);
                }
            };

            Modal.prototype._hideModal = function _hideModal() {
                var _this16 = this;

                this._element.style.display = 'none';
                this._element.setAttribute('aria-hidden', true);
                this._isTransitioning = false;
                this._showBackdrop(function () {
                    $(document.body).removeClass(ClassName.OPEN);
                    _this16._resetAdjustments();
                    _this16._resetScrollbar();
                    $(_this16._element).trigger(Event.HIDDEN);
                });
            };

            Modal.prototype._removeBackdrop = function _removeBackdrop() {
                if (this._backdrop) {
                    $(this._backdrop).remove();
                    this._backdrop = null;
                }
            };

            Modal.prototype._showBackdrop = function _showBackdrop(callback) {
                var _this17 = this;

                var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

                if (this._isShown && this._config.backdrop) {
                    var doAnimate = Util.supportsTransitionEnd() && animate;

                    this._backdrop = document.createElement('div');
                    this._backdrop.className = ClassName.BACKDROP;

                    if (animate) {
                        $(this._backdrop).addClass(animate);
                    }

                    $(this._backdrop).appendTo(document.body);

                    $(this._element).on(Event.CLICK_DISMISS, function (event) {
                        if (_this17._ignoreBackdropClick) {
                            _this17._ignoreBackdropClick = false;
                            return;
                        }
                        if (event.target !== event.currentTarget) {
                            return;
                        }
                        if (_this17._config.backdrop === 'static') {
                            _this17._element.focus();
                        } else {
                            _this17.hide();
                        }
                    });

                    if (doAnimate) {
                        Util.reflow(this._backdrop);
                    }

                    $(this._backdrop).addClass(ClassName.SHOW);

                    if (!callback) {
                        return;
                    }

                    if (!doAnimate) {
                        callback();
                        return;
                    }

                    $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                } else if (!this._isShown && this._backdrop) {
                    $(this._backdrop).removeClass(ClassName.SHOW);

                    var callbackRemove = function callbackRemove() {
                        _this17._removeBackdrop();
                        if (callback) {
                            callback();
                        }
                    };

                    if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                        $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                    } else {
                        callbackRemove();
                    }
                } else if (callback) {
                    callback();
                }
            };

            // ----------------------------------------------------------------------
            // the following methods are used to handle overflowing modals
            // todo (fat): these should probably be refactored out of modal.js
            // ----------------------------------------------------------------------

            Modal.prototype._adjustDialog = function _adjustDialog() {
                var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

                if (!this._isBodyOverflowing && isModalOverflowing) {
                    this._element.style.paddingLeft = this._scrollbarWidth + 'px';
                }

                if (this._isBodyOverflowing && !isModalOverflowing) {
                    this._element.style.paddingRight = this._scrollbarWidth + 'px';
                }
            };

            Modal.prototype._resetAdjustments = function _resetAdjustments() {
                this._element.style.paddingLeft = '';
                this._element.style.paddingRight = '';
            };

            Modal.prototype._checkScrollbar = function _checkScrollbar() {
                this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
                this._scrollbarWidth = this._getScrollbarWidth();
            };

            Modal.prototype._setScrollbar = function _setScrollbar() {
                var _this18 = this;

                if (this._isBodyOverflowing) {
                    // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
                    //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set

                    // Adjust fixed content padding
                    $(Selector.FIXED_CONTENT).each(function (index, element) {
                        var actualPadding = $(element)[0].style.paddingRight;
                        var calculatedPadding = $(element).css('padding-right');
                        $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this18._scrollbarWidth + 'px');
                    });

                    // Adjust navbar-toggler margin
                    $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
                        var actualMargin = $(element)[0].style.marginRight;
                        var calculatedMargin = $(element).css('margin-right');
                        $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this18._scrollbarWidth + 'px');
                    });

                    // Adjust body padding
                    var actualPadding = document.body.style.paddingRight;
                    var calculatedPadding = $('body').css('padding-right');
                    $('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + 'px');
                }
            };

            Modal.prototype._resetScrollbar = function _resetScrollbar() {
                // Restore fixed content padding
                $(Selector.FIXED_CONTENT).each(function (index, element) {
                    var padding = $(element).data('padding-right');
                    if (typeof padding !== 'undefined') {
                        $(element).css('padding-right', padding).removeData('padding-right');
                    }
                });

                // Restore navbar-toggler margin
                $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
                    var margin = $(element).data('margin-right');
                    if (typeof margin !== 'undefined') {
                        $(element).css('margin-right', margin).removeData('margin-right');
                    }
                });

                // Restore body padding
                var padding = $('body').data('padding-right');
                if (typeof padding !== 'undefined') {
                    $('body').css('padding-right', padding).removeData('padding-right');
                }
            };

            Modal.prototype._getScrollbarWidth = function _getScrollbarWidth() {
                // thx d.walsh
                var scrollDiv = document.createElement('div');
                scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
                document.body.appendChild(scrollDiv);
                var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
                return scrollbarWidth;
            };

            // static

            Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);
                    var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

                    if (!data) {
                        data = new Modal(this, _config);
                        $(this).data(DATA_KEY, data);
                    }

                    if (typeof config === 'string') {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config](relatedTarget);
                    } else if (_config.show) {
                        data.show(relatedTarget);
                    }
                });
            };

            _createClass(Modal, null, [{
                key: 'VERSION',
                get: function get() {
                    return VERSION;
                }
            }, {
                key: 'Default',
                get: function get() {
                    return Default;
                }
            }]);

            return Modal;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            var _this19 = this;

            var target = void 0;
            var selector = Util.getSelectorFromElement(this);

            if (selector) {
                target = $(selector)[0];
            }

            var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

            if (this.tagName === 'A' || this.tagName === 'AREA') {
                event.preventDefault();
            }

            var $target = $(target).one(Event.SHOW, function (showEvent) {
                if (showEvent.isDefaultPrevented()) {
                    // only register focus restorer if modal will actually get shown
                    return;
                }

                $target.one(Event.HIDDEN, function () {
                    if ($(_this19).is(':visible')) {
                        _this19.focus();
                    }
                });
            });

            Modal._jQueryInterface.call($(target), config, this);
        });

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Modal._jQueryInterface;
        $.fn[NAME].Constructor = Modal;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Modal._jQueryInterface;
        };

        return Modal;
    }(jQuery);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): scrollspy.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var ScrollSpy = function ($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'scrollspy';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.scrollspy';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];

        var Default = {
            offset: 10,
            method: 'auto',
            target: ''
        };

        var DefaultType = {
            offset: 'number',
            method: 'string',
            target: '(string|element)'
        };

        var Event = {
            ACTIVATE: 'activate' + EVENT_KEY,
            SCROLL: 'scroll' + EVENT_KEY,
            LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
        };

        var ClassName = {
            DROPDOWN_ITEM: 'dropdown-item',
            DROPDOWN_MENU: 'dropdown-menu',
            ACTIVE: 'active'
        };

        var Selector = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: '.active',
            NAV_LIST_GROUP: '.nav, .list-group',
            NAV_LINKS: '.nav-link',
            LIST_ITEMS: '.list-group-item',
            DROPDOWN: '.dropdown',
            DROPDOWN_ITEMS: '.dropdown-item',
            DROPDOWN_TOGGLE: '.dropdown-toggle'
        };

        var OffsetMethod = {
            OFFSET: 'offset',
            POSITION: 'position'

            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };
        var ScrollSpy = function () {
            function ScrollSpy(element, config) {
                var _this20 = this;

                _classCallCheck(this, ScrollSpy);

                this._element = element;
                this._scrollElement = element.tagName === 'BODY' ? window : element;
                this._config = this._getConfig(config);
                this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.LIST_ITEMS + ',') + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
                this._offsets = [];
                this._targets = [];
                this._activeTarget = null;
                this._scrollHeight = 0;

                $(this._scrollElement).on(Event.SCROLL, function (event) {
                    return _this20._process(event);
                });

                this.refresh();
                this._process();
            }

            // getters

            // public

            ScrollSpy.prototype.refresh = function refresh() {
                var _this21 = this;

                var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;

                var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;

                var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;

                this._offsets = [];
                this._targets = [];

                this._scrollHeight = this._getScrollHeight();

                var targets = $.makeArray($(this._selector));

                targets.map(function (element) {
                    var target = void 0;
                    var targetSelector = Util.getSelectorFromElement(element);

                    if (targetSelector) {
                        target = $(targetSelector)[0];
                    }

                    if (target) {
                        var targetBCR = target.getBoundingClientRect();
                        if (targetBCR.width || targetBCR.height) {
                            // todo (fat): remove sketch reliance on jQuery position/offset
                            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
                        }
                    }
                    return null;
                }).filter(function (item) {
                    return item;
                }).sort(function (a, b) {
                    return a[0] - b[0];
                }).forEach(function (item) {
                    _this21._offsets.push(item[0]);
                    _this21._targets.push(item[1]);
                });
            };

            ScrollSpy.prototype.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                $(this._scrollElement).off(EVENT_KEY);

                this._element = null;
                this._scrollElement = null;
                this._config = null;
                this._selector = null;
                this._offsets = null;
                this._targets = null;
                this._activeTarget = null;
                this._scrollHeight = null;
            };

            // private

            ScrollSpy.prototype._getConfig = function _getConfig(config) {
                config = $.extend({}, Default, config);

                if (typeof config.target !== 'string') {
                    var id = $(config.target).attr('id');
                    if (!id) {
                        id = Util.getUID(NAME);
                        $(config.target).attr('id', id);
                    }
                    config.target = '#' + id;
                }

                Util.typeCheckConfig(NAME, config, DefaultType);

                return config;
            };

            ScrollSpy.prototype._getScrollTop = function _getScrollTop() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            };

            ScrollSpy.prototype._getScrollHeight = function _getScrollHeight() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            };

            ScrollSpy.prototype._getOffsetHeight = function _getOffsetHeight() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
            };

            ScrollSpy.prototype._process = function _process() {
                var scrollTop = this._getScrollTop() + this._config.offset;
                var scrollHeight = this._getScrollHeight();
                var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

                if (this._scrollHeight !== scrollHeight) {
                    this.refresh();
                }

                if (scrollTop >= maxScroll) {
                    var target = this._targets[this._targets.length - 1];

                    if (this._activeTarget !== target) {
                        this._activate(target);
                    }
                    return;
                }

                if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
                    this._activeTarget = null;
                    this._clear();
                    return;
                }

                for (var i = this._offsets.length; i--;) {
                    var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);

                    if (isActiveTarget) {
                        this._activate(this._targets[i]);
                    }
                }
            };

            ScrollSpy.prototype._activate = function _activate(target) {
                this._activeTarget = target;

                this._clear();

                var queries = this._selector.split(',');
                queries = queries.map(function (selector) {
                    return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');
                });

                var $link = $(queries.join(','));

                if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
                    $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
                    $link.addClass(ClassName.ACTIVE);
                } else {
                    // Set triggered link as active
                    $link.addClass(ClassName.ACTIVE);
                    // Set triggered links parents as active
                    // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
                    $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ', ' + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE);
                }

                $(this._scrollElement).trigger(Event.ACTIVATE, {
                    relatedTarget: target
                });
            };

            ScrollSpy.prototype._clear = function _clear() {
                $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
            };

            // static

            ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);
                    var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

                    if (!data) {
                        data = new ScrollSpy(this, _config);
                        $(this).data(DATA_KEY, data);
                    }

                    if (typeof config === 'string') {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config]();
                    }
                });
            };

            _createClass(ScrollSpy, null, [{
                key: 'VERSION',
                get: function get() {
                    return VERSION;
                }
            }, {
                key: 'Default',
                get: function get() {
                    return Default;
                }
            }]);

            return ScrollSpy;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(window).on(Event.LOAD_DATA_API, function () {
            var scrollSpys = $.makeArray($(Selector.DATA_SPY));

            for (var i = scrollSpys.length; i--;) {
                var $spy = $(scrollSpys[i]);
                ScrollSpy._jQueryInterface.call($spy, $spy.data());
            }
        });

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = ScrollSpy._jQueryInterface;
        $.fn[NAME].Constructor = ScrollSpy;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return ScrollSpy._jQueryInterface;
        };

        return ScrollSpy;
    }(jQuery);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): tab.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Tab = function ($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'tab';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.tab';
        var EVENT_KEY = '.' + DATA_KEY;
        var DATA_API_KEY = '.data-api';
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 150;

        var Event = {
            HIDE: 'hide' + EVENT_KEY,
            HIDDEN: 'hidden' + EVENT_KEY,
            SHOW: 'show' + EVENT_KEY,
            SHOWN: 'shown' + EVENT_KEY,
            CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
        };

        var ClassName = {
            DROPDOWN_MENU: 'dropdown-menu',
            ACTIVE: 'active',
            DISABLED: 'disabled',
            FADE: 'fade',
            SHOW: 'show'
        };

        var Selector = {
            DROPDOWN: '.dropdown',
            NAV_LIST_GROUP: '.nav, .list-group',
            ACTIVE: '.active',
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            DROPDOWN_TOGGLE: '.dropdown-toggle',
            DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'

            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };
        var Tab = function () {
            function Tab(element) {
                _classCallCheck(this, Tab);

                this._element = element;
            }

            // getters

            // public

            Tab.prototype.show = function show() {
                var _this22 = this;

                if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
                    return;
                }

                var target = void 0;
                var previous = void 0;
                var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
                var selector = Util.getSelectorFromElement(this._element);

                if (listElement) {
                    previous = $.makeArray($(listElement).find(Selector.ACTIVE));
                    previous = previous[previous.length - 1];
                }

                var hideEvent = $.Event(Event.HIDE, {
                    relatedTarget: this._element
                });

                var showEvent = $.Event(Event.SHOW, {
                    relatedTarget: previous
                });

                if (previous) {
                    $(previous).trigger(hideEvent);
                }

                $(this._element).trigger(showEvent);

                if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
                    return;
                }

                if (selector) {
                    target = $(selector)[0];
                }

                this._activate(this._element, listElement);

                var complete = function complete() {
                    var hiddenEvent = $.Event(Event.HIDDEN, {
                        relatedTarget: _this22._element
                    });

                    var shownEvent = $.Event(Event.SHOWN, {
                        relatedTarget: previous
                    });

                    $(previous).trigger(hiddenEvent);
                    $(_this22._element).trigger(shownEvent);
                };

                if (target) {
                    this._activate(target, target.parentNode, complete);
                } else {
                    complete();
                }
            };

            Tab.prototype.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                this._element = null;
            };

            // private

            Tab.prototype._activate = function _activate(element, container, callback) {
                var _this23 = this;

                var active = $(container).find(Selector.ACTIVE)[0];
                var isTransitioning = callback && Util.supportsTransitionEnd() && active && $(active).hasClass(ClassName.FADE);

                var complete = function complete() {
                    return _this23._transitionComplete(element, active, isTransitioning, callback);
                };

                if (active && isTransitioning) {
                    $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    complete();
                }

                if (active) {
                    $(active).removeClass(ClassName.SHOW);
                }
            };

            Tab.prototype._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
                if (active) {
                    $(active).removeClass(ClassName.ACTIVE);

                    var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

                    if (dropdownChild) {
                        $(dropdownChild).removeClass(ClassName.ACTIVE);
                    }

                    active.setAttribute('aria-expanded', false);
                }

                $(element).addClass(ClassName.ACTIVE);
                element.setAttribute('aria-expanded', true);

                if (isTransitioning) {
                    Util.reflow(element);
                    $(element).addClass(ClassName.SHOW);
                } else {
                    $(element).removeClass(ClassName.FADE);
                }

                if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {

                    var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
                    if (dropdownElement) {
                        $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
                    }

                    element.setAttribute('aria-expanded', true);
                }

                if (callback) {
                    callback();
                }
            };

            // static

            Tab._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var $this = $(this);
                    var data = $this.data(DATA_KEY);

                    if (!data) {
                        data = new Tab(this);
                        $this.data(DATA_KEY, data);
                    }

                    if (typeof config === 'string') {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config]();
                    }
                });
            };

            _createClass(Tab, null, [{
                key: 'VERSION',
                get: function get() {
                    return VERSION;
                }
            }]);

            return Tab;
        }();

        /**
         * ------------------------------------------------------------------------
         * Data Api implementation
         * ------------------------------------------------------------------------
         */

        $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
            event.preventDefault();
            Tab._jQueryInterface.call($(this), 'show');
        });

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Tab._jQueryInterface;
        $.fn[NAME].Constructor = Tab;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Tab._jQueryInterface;
        };

        return Tab;
    }(jQuery);

    /* global Popper */

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): tooltip.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Tooltip = function ($) {

        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
            throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');
        }

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'tooltip';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.tooltip';
        var EVENT_KEY = '.' + DATA_KEY;
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var TRANSITION_DURATION = 150;
        var CLASS_PREFIX = 'bs-tooltip';
        var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

        var DefaultType = {
            animation: 'boolean',
            template: 'string',
            title: '(string|element|function)',
            trigger: 'string',
            delay: '(number|object)',
            html: 'boolean',
            selector: '(string|boolean)',
            placement: '(string|function)',
            offset: '(number|string)',
            container: '(string|element|boolean)',
            fallbackPlacement: '(string|array)'
        };

        var AttachmentMap = {
            AUTO: 'auto',
            TOP: 'top',
            RIGHT: 'right',
            BOTTOM: 'bottom',
            LEFT: 'left'
        };

        var Default = {
            animation: true,
            template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
            trigger: 'hover focus',
            title: '',
            delay: 0,
            html: false,
            selector: false,
            placement: 'top',
            offset: 0,
            container: false,
            fallbackPlacement: 'flip'
        };

        var HoverState = {
            SHOW: 'show',
            OUT: 'out'
        };

        var Event = {
            HIDE: 'hide' + EVENT_KEY,
            HIDDEN: 'hidden' + EVENT_KEY,
            SHOW: 'show' + EVENT_KEY,
            SHOWN: 'shown' + EVENT_KEY,
            INSERTED: 'inserted' + EVENT_KEY,
            CLICK: 'click' + EVENT_KEY,
            FOCUSIN: 'focusin' + EVENT_KEY,
            FOCUSOUT: 'focusout' + EVENT_KEY,
            MOUSEENTER: 'mouseenter' + EVENT_KEY,
            MOUSELEAVE: 'mouseleave' + EVENT_KEY
        };

        var ClassName = {
            FADE: 'fade',
            SHOW: 'show'
        };

        var Selector = {
            TOOLTIP: '.tooltip',
            TOOLTIP_INNER: '.tooltip-inner',
            ARROW: '.arrow'
        };

        var Trigger = {
            HOVER: 'hover',
            FOCUS: 'focus',
            CLICK: 'click',
            MANUAL: 'manual'

            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };
        var Tooltip = function () {
            function Tooltip(element, config) {
                _classCallCheck(this, Tooltip);

                // private
                this._isEnabled = true;
                this._timeout = 0;
                this._hoverState = '';
                this._activeTrigger = {};
                this._popper = null;

                // protected
                this.element = element;
                this.config = this._getConfig(config);
                this.tip = null;

                this._setListeners();
            }

            // getters

            // public

            Tooltip.prototype.enable = function enable() {
                this._isEnabled = true;
            };

            Tooltip.prototype.disable = function disable() {
                this._isEnabled = false;
            };

            Tooltip.prototype.toggleEnabled = function toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            };

            Tooltip.prototype.toggle = function toggle(event) {
                if (event) {
                    var dataKey = this.constructor.DATA_KEY;
                    var context = $(event.currentTarget).data(dataKey);

                    if (!context) {
                        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                        $(event.currentTarget).data(dataKey, context);
                    }

                    context._activeTrigger.click = !context._activeTrigger.click;

                    if (context._isWithActiveTrigger()) {
                        context._enter(null, context);
                    } else {
                        context._leave(null, context);
                    }
                } else {

                    if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
                        this._leave(null, this);
                        return;
                    }

                    this._enter(null, this);
                }
            };

            Tooltip.prototype.dispose = function dispose() {
                clearTimeout(this._timeout);

                $.removeData(this.element, this.constructor.DATA_KEY);

                $(this.element).off(this.constructor.EVENT_KEY);
                $(this.element).closest('.modal').off('hide.bs.modal');

                if (this.tip) {
                    $(this.tip).remove();
                }

                this._isEnabled = null;
                this._timeout = null;
                this._hoverState = null;
                this._activeTrigger = null;
                if (this._popper !== null) {
                    this._popper.destroy();
                }
                this._popper = null;

                this.element = null;
                this.config = null;
                this.tip = null;
            };

            Tooltip.prototype.show = function show() {
                var _this24 = this;

                if ($(this.element).css('display') === 'none') {
                    throw new Error('Please use show on visible elements');
                }

                var showEvent = $.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    $(this.element).trigger(showEvent);

                    var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

                    if (showEvent.isDefaultPrevented() || !isInTheDom) {
                        return;
                    }

                    var tip = this.getTipElement();
                    var tipId = Util.getUID(this.constructor.NAME);

                    tip.setAttribute('id', tipId);
                    this.element.setAttribute('aria-describedby', tipId);

                    this.setContent();

                    if (this.config.animation) {
                        $(tip).addClass(ClassName.FADE);
                    }

                    var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

                    var attachment = this._getAttachment(placement);
                    this.addAttachmentClass(attachment);

                    var container = this.config.container === false ? document.body : $(this.config.container);

                    $(tip).data(this.constructor.DATA_KEY, this);

                    if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
                        $(tip).appendTo(container);
                    }

                    $(this.element).trigger(this.constructor.Event.INSERTED);

                    this._popper = new Popper(this.element, tip, {
                        placement: attachment,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: Selector.ARROW
                            }
                        },
                        onCreate: function onCreate(data) {
                            if (data.originalPlacement !== data.placement) {
                                _this24._handlePopperPlacementChange(data);
                            }
                        },
                        onUpdate: function onUpdate(data) {
                            _this24._handlePopperPlacementChange(data);
                        }
                    });

                    $(tip).addClass(ClassName.SHOW);

                    // if this is a touch-enabled device we add extra
                    // empty mouseover listeners to the body's immediate children;
                    // only needed because of broken event delegation on iOS
                    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                    if ('ontouchstart' in document.documentElement) {
                        $('body').children().on('mouseover', null, $.noop);
                    }

                    var complete = function complete() {
                        if (_this24.config.animation) {
                            _this24._fixTransition();
                        }
                        var prevHoverState = _this24._hoverState;
                        _this24._hoverState = null;

                        $(_this24.element).trigger(_this24.constructor.Event.SHOWN);

                        if (prevHoverState === HoverState.OUT) {
                            _this24._leave(null, _this24);
                        }
                    };

                    if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
                        $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
                    } else {
                        complete();
                    }
                }
            };

            Tooltip.prototype.hide = function hide(callback) {
                var _this25 = this;

                var tip = this.getTipElement();
                var hideEvent = $.Event(this.constructor.Event.HIDE);
                var complete = function complete() {
                    if (_this25._hoverState !== HoverState.SHOW && tip.parentNode) {
                        tip.parentNode.removeChild(tip);
                    }

                    _this25._cleanTipClass();
                    _this25.element.removeAttribute('aria-describedby');
                    $(_this25.element).trigger(_this25.constructor.Event.HIDDEN);
                    if (_this25._popper !== null) {
                        _this25._popper.destroy();
                    }

                    if (callback) {
                        callback();
                    }
                };

                $(this.element).trigger(hideEvent);

                if (hideEvent.isDefaultPrevented()) {
                    return;
                }

                $(tip).removeClass(ClassName.SHOW);

                // if this is a touch-enabled device we remove the extra
                // empty mouseover listeners we added for iOS support
                if ('ontouchstart' in document.documentElement) {
                    $('body').children().off('mouseover', null, $.noop);
                }

                this._activeTrigger[Trigger.CLICK] = false;
                this._activeTrigger[Trigger.FOCUS] = false;
                this._activeTrigger[Trigger.HOVER] = false;

                if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {

                    $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    complete();
                }

                this._hoverState = '';
            };

            Tooltip.prototype.update = function update() {
                if (this._popper !== null) {
                    this._popper.scheduleUpdate();
                }
            };

            // protected

            Tooltip.prototype.isWithContent = function isWithContent() {
                return Boolean(this.getTitle());
            };

            Tooltip.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
                $(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
            };

            Tooltip.prototype.getTipElement = function getTipElement() {
                return this.tip = this.tip || $(this.config.template)[0];
            };

            Tooltip.prototype.setContent = function setContent() {
                var $tip = $(this.getTipElement());
                this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
                $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
            };

            Tooltip.prototype.setElementContent = function setElementContent($element, content) {
                var html = this.config.html;
                if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && (content.nodeType || content.jquery)) {
                    // content is a DOM node or a jQuery
                    if (html) {
                        if (!$(content).parent().is($element)) {
                            $element.empty().append(content);
                        }
                    } else {
                        $element.text($(content).text());
                    }
                } else {
                    $element[html ? 'html' : 'text'](content);
                }
            };

            Tooltip.prototype.getTitle = function getTitle() {
                var title = this.element.getAttribute('data-original-title');

                if (!title) {
                    title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
                }

                return title;
            };

            // private

            Tooltip.prototype._getAttachment = function _getAttachment(placement) {
                return AttachmentMap[placement.toUpperCase()];
            };

            Tooltip.prototype._setListeners = function _setListeners() {
                var _this26 = this;

                var triggers = this.config.trigger.split(' ');

                triggers.forEach(function (trigger) {
                    if (trigger === 'click') {
                        $(_this26.element).on(_this26.constructor.Event.CLICK, _this26.config.selector, function (event) {
                            return _this26.toggle(event);
                        });
                    } else if (trigger !== Trigger.MANUAL) {
                        var eventIn = trigger === Trigger.HOVER ? _this26.constructor.Event.MOUSEENTER : _this26.constructor.Event.FOCUSIN;
                        var eventOut = trigger === Trigger.HOVER ? _this26.constructor.Event.MOUSELEAVE : _this26.constructor.Event.FOCUSOUT;

                        $(_this26.element).on(eventIn, _this26.config.selector, function (event) {
                            return _this26._enter(event);
                        }).on(eventOut, _this26.config.selector, function (event) {
                            return _this26._leave(event);
                        });
                    }

                    $(_this26.element).closest('.modal').on('hide.bs.modal', function () {
                        return _this26.hide();
                    });
                });

                if (this.config.selector) {
                    this.config = $.extend({}, this.config, {
                        trigger: 'manual',
                        selector: ''
                    });
                } else {
                    this._fixTitle();
                }
            };

            Tooltip.prototype._fixTitle = function _fixTitle() {
                var titleType = _typeof(this.element.getAttribute('data-original-title'));
                if (this.element.getAttribute('title') || titleType !== 'string') {
                    this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
                    this.element.setAttribute('title', '');
                }
            };

            Tooltip.prototype._enter = function _enter(event, context) {
                var dataKey = this.constructor.DATA_KEY;

                context = context || $(event.currentTarget).data(dataKey);

                if (!context) {
                    context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                    $(event.currentTarget).data(dataKey, context);
                }

                if (event) {
                    context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
                }

                if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
                    context._hoverState = HoverState.SHOW;
                    return;
                }

                clearTimeout(context._timeout);

                context._hoverState = HoverState.SHOW;

                if (!context.config.delay || !context.config.delay.show) {
                    context.show();
                    return;
                }

                context._timeout = setTimeout(function () {
                    if (context._hoverState === HoverState.SHOW) {
                        context.show();
                    }
                }, context.config.delay.show);
            };

            Tooltip.prototype._leave = function _leave(event, context) {
                var dataKey = this.constructor.DATA_KEY;

                context = context || $(event.currentTarget).data(dataKey);

                if (!context) {
                    context = new this.constructor(event.currentTarget, this._getDelegateConfig());
                    $(event.currentTarget).data(dataKey, context);
                }

                if (event) {
                    context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
                }

                if (context._isWithActiveTrigger()) {
                    return;
                }

                clearTimeout(context._timeout);

                context._hoverState = HoverState.OUT;

                if (!context.config.delay || !context.config.delay.hide) {
                    context.hide();
                    return;
                }

                context._timeout = setTimeout(function () {
                    if (context._hoverState === HoverState.OUT) {
                        context.hide();
                    }
                }, context.config.delay.hide);
            };

            Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger() {
                for (var trigger in this._activeTrigger) {
                    if (this._activeTrigger[trigger]) {
                        return true;
                    }
                }

                return false;
            };

            Tooltip.prototype._getConfig = function _getConfig(config) {
                config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

                if (config.delay && typeof config.delay === 'number') {
                    config.delay = {
                        show: config.delay,
                        hide: config.delay
                    };
                }

                if (config.title && typeof config.title === 'number') {
                    config.title = config.title.toString();
                }

                if (config.content && typeof config.content === 'number') {
                    config.content = config.content.toString();
                }

                Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

                return config;
            };

            Tooltip.prototype._getDelegateConfig = function _getDelegateConfig() {
                var config = {};

                if (this.config) {
                    for (var key in this.config) {
                        if (this.constructor.Default[key] !== this.config[key]) {
                            config[key] = this.config[key];
                        }
                    }
                }

                return config;
            };

            Tooltip.prototype._cleanTipClass = function _cleanTipClass() {
                var $tip = $(this.getTipElement());
                var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
                if (tabClass !== null && tabClass.length > 0) {
                    $tip.removeClass(tabClass.join(''));
                }
            };

            Tooltip.prototype._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
                this._cleanTipClass();
                this.addAttachmentClass(this._getAttachment(data.placement));
            };

            Tooltip.prototype._fixTransition = function _fixTransition() {
                var tip = this.getTipElement();
                var initConfigAnimation = this.config.animation;
                if (tip.getAttribute('x-placement') !== null) {
                    return;
                }
                $(tip).removeClass(ClassName.FADE);
                this.config.animation = false;
                this.hide();
                this.show();
                this.config.animation = initConfigAnimation;
            };

            // static

            Tooltip._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);
                    var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

                    if (!data && /dispose|hide/.test(config)) {
                        return;
                    }

                    if (!data) {
                        data = new Tooltip(this, _config);
                        $(this).data(DATA_KEY, data);
                    }

                    if (typeof config === 'string') {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config]();
                    }
                });
            };

            _createClass(Tooltip, null, [{
                key: 'VERSION',
                get: function get() {
                    return VERSION;
                }
            }, {
                key: 'Default',
                get: function get() {
                    return Default;
                }
            }, {
                key: 'NAME',
                get: function get() {
                    return NAME;
                }
            }, {
                key: 'DATA_KEY',
                get: function get() {
                    return DATA_KEY;
                }
            }, {
                key: 'Event',
                get: function get() {
                    return Event;
                }
            }, {
                key: 'EVENT_KEY',
                get: function get() {
                    return EVENT_KEY;
                }
            }, {
                key: 'DefaultType',
                get: function get() {
                    return DefaultType;
                }
            }]);

            return Tooltip;
        }();

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Tooltip._jQueryInterface;
        $.fn[NAME].Constructor = Tooltip;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Tooltip._jQueryInterface;
        };

        return Tooltip;
    }(jQuery);

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.0.0-beta): popover.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */

    var Popover = function ($) {

        /**
         * ------------------------------------------------------------------------
         * Constants
         * ------------------------------------------------------------------------
         */

        var NAME = 'popover';
        var VERSION = '4.0.0-beta';
        var DATA_KEY = 'bs.popover';
        var EVENT_KEY = '.' + DATA_KEY;
        var JQUERY_NO_CONFLICT = $.fn[NAME];
        var CLASS_PREFIX = 'bs-popover';
        var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

        var Default = $.extend({}, Tooltip.Default, {
            placement: 'right',
            trigger: 'click',
            content: '',
            template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
        });

        var DefaultType = $.extend({}, Tooltip.DefaultType, {
            content: '(string|element|function)'
        });

        var ClassName = {
            FADE: 'fade',
            SHOW: 'show'
        };

        var Selector = {
            TITLE: '.popover-header',
            CONTENT: '.popover-body'
        };

        var Event = {
            HIDE: 'hide' + EVENT_KEY,
            HIDDEN: 'hidden' + EVENT_KEY,
            SHOW: 'show' + EVENT_KEY,
            SHOWN: 'shown' + EVENT_KEY,
            INSERTED: 'inserted' + EVENT_KEY,
            CLICK: 'click' + EVENT_KEY,
            FOCUSIN: 'focusin' + EVENT_KEY,
            FOCUSOUT: 'focusout' + EVENT_KEY,
            MOUSEENTER: 'mouseenter' + EVENT_KEY,
            MOUSELEAVE: 'mouseleave' + EVENT_KEY

            /**
             * ------------------------------------------------------------------------
             * Class Definition
             * ------------------------------------------------------------------------
             */

        };
        var Popover = function (_Tooltip) {
            _inherits(Popover, _Tooltip);

            function Popover() {
                _classCallCheck(this, Popover);

                return _possibleConstructorReturn(this, _Tooltip.apply(this, arguments));
            }

            // overrides

            Popover.prototype.isWithContent = function isWithContent() {
                return this.getTitle() || this._getContent();
            };

            Popover.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
                $(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
            };

            Popover.prototype.getTipElement = function getTipElement() {
                return this.tip = this.tip || $(this.config.template)[0];
            };

            Popover.prototype.setContent = function setContent() {
                var $tip = $(this.getTipElement());

                // we use append for html objects to maintain js events
                this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
                this.setElementContent($tip.find(Selector.CONTENT), this._getContent());

                $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
            };

            // private

            Popover.prototype._getContent = function _getContent() {
                return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
            };

            Popover.prototype._cleanTipClass = function _cleanTipClass() {
                var $tip = $(this.getTipElement());
                var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
                if (tabClass !== null && tabClass.length > 0) {
                    $tip.removeClass(tabClass.join(''));
                }
            };

            // static

            Popover._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function () {
                    var data = $(this).data(DATA_KEY);
                    var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

                    if (!data && /destroy|hide/.test(config)) {
                        return;
                    }

                    if (!data) {
                        data = new Popover(this, _config);
                        $(this).data(DATA_KEY, data);
                    }

                    if (typeof config === 'string') {
                        if (data[config] === undefined) {
                            throw new Error('No method named "' + config + '"');
                        }
                        data[config]();
                    }
                });
            };

            _createClass(Popover, null, [{
                key: 'VERSION',


                // getters

                get: function get() {
                    return VERSION;
                }
            }, {
                key: 'Default',
                get: function get() {
                    return Default;
                }
            }, {
                key: 'NAME',
                get: function get() {
                    return NAME;
                }
            }, {
                key: 'DATA_KEY',
                get: function get() {
                    return DATA_KEY;
                }
            }, {
                key: 'Event',
                get: function get() {
                    return Event;
                }
            }, {
                key: 'EVENT_KEY',
                get: function get() {
                    return EVENT_KEY;
                }
            }, {
                key: 'DefaultType',
                get: function get() {
                    return DefaultType;
                }
            }]);

            return Popover;
        }(Tooltip);

        /**
         * ------------------------------------------------------------------------
         * jQuery
         * ------------------------------------------------------------------------
         */

        $.fn[NAME] = Popover._jQueryInterface;
        $.fn[NAME].Constructor = Popover;
        $.fn[NAME].noConflict = function () {
            $.fn[NAME] = JQUERY_NO_CONFLICT;
            return Popover._jQueryInterface;
        };

        return Popover;
    }(jQuery);


})();