"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4883],{14883:(t,e,n)=>{n.d(e,{Z:()=>F});var r=n(87462),i=n(29867),o=n(89900),s=(n(2359),n(1413)),c=n(71002),u=n(18538),a=n(4390),h=i.createContext(null);var f=function(){if("undefined"!==typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),d="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,l="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),v="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(l):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var p=["top","right","bottom","left","width","height","size","weight"],_="undefined"!==typeof MutationObserver,b=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&c()}function s(){v(o)}function c(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,e);i=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){d&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),_?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){d&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;p.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),m=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},y=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||l},g=A(0,0,0,0);function w(t){return parseFloat(t)||0}function E(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+w(t["border-"+n+"-width"])}),0)}function O(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return g;var r=y(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=w(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,c=w(r.width),u=w(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=E(r,"left","right")+o),Math.round(u+s)!==n&&(u-=E(r,"top","bottom")+s)),!function(t){return t===y(t).document.documentElement}(t)){var a=Math.round(c+o)-e,h=Math.round(u+s)-n;1!==Math.abs(a)&&(c-=a),1!==Math.abs(h)&&(u-=h)}return A(i.left,i.top,c,u)}var M="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof y(t).SVGGraphicsElement}:function(t){return t instanceof y(t).SVGElement&&"function"===typeof t.getBBox};function R(t){return d?M(t)?function(t){var e=t.getBBox();return A(0,0,e.width,e.height)}(t):O(t):g}function A(t,e,n,r){return{x:t,y:e,width:n,height:r}}var k=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=A(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=R(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),x=function(t,e){var n=function(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return m(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}(e);m(this,{target:t,contentRect:n})},T=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new f,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof y(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new k(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof y(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new x(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),C="undefined"!==typeof WeakMap?new WeakMap:new f,Z=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=b.getInstance(),r=new T(e,n,this);C.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){Z.prototype[t]=function(){var e;return(e=C.get(this))[t].apply(e,arguments)}}));const z="undefined"!==typeof l.ResizeObserver?l.ResizeObserver:Z;var W=new Map;var H=new z((function(t){t.forEach((function(t){var e,n=t.target;null===(e=W.get(n))||void 0===e||e.forEach((function(t){return t(n)}))}))}));var D=n(15671),j=n(43144),S=n(79340),L=n(98557),B=function(t){(0,S.Z)(n,t);var e=(0,L.Z)(n);function n(){return(0,D.Z)(this,n),e.apply(this,arguments)}return(0,j.Z)(n,[{key:"render",value:function(){return this.props.children}}]),n}(i.Component);function q(t,e){var n=t.children,r=t.disabled,o=i.useRef(null),f=i.useRef(null),d=i.useContext(h),l="function"===typeof n,v=l?n(o):n,p=i.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),_=!l&&i.isValidElement(v)&&(0,a.Yr)(v),b=_?v.ref:null,m=(0,a.x1)(b,o),y=function(){var t;return(0,u.Z)(o.current)||(o.current&&"object"===(0,c.Z)(o.current)?(0,u.Z)(null===(t=o.current)||void 0===t?void 0:t.nativeElement):null)||(0,u.Z)(f.current)};i.useImperativeHandle(e,(function(){return y()}));var g=i.useRef(t);g.current=t;var w=i.useCallback((function(t){var e=g.current,n=e.onResize,r=e.data,i=t.getBoundingClientRect(),o=i.width,c=i.height,u=t.offsetWidth,a=t.offsetHeight,h=Math.floor(o),f=Math.floor(c);if(p.current.width!==h||p.current.height!==f||p.current.offsetWidth!==u||p.current.offsetHeight!==a){var l={width:h,height:f,offsetWidth:u,offsetHeight:a};p.current=l;var v=u===Math.round(o)?o:u,_=a===Math.round(c)?c:a,b=(0,s.Z)((0,s.Z)({},l),{},{offsetWidth:v,offsetHeight:_});null===d||void 0===d||d(b,t,r),n&&Promise.resolve().then((function(){n(b,t)}))}}),[]);return i.useEffect((function(){var t,e,n=y();return n&&!r&&(t=n,e=w,W.has(t)||(W.set(t,new Set),H.observe(t)),W.get(t).add(e)),function(){return function(t,e){W.has(t)&&(W.get(t).delete(e),W.get(t).size||(H.unobserve(t),W.delete(t)))}(n,w)}}),[o.current,r]),i.createElement(B,{ref:f},_?i.cloneElement(v,{ref:m}):v)}const G=i.forwardRef(q);function P(t,e){var n=t.children;return("function"===typeof n?[n]:(0,o.Z)(n)).map((function(n,o){var s=(null===n||void 0===n?void 0:n.key)||"".concat("rc-observer-key","-").concat(o);return i.createElement(G,(0,r.Z)({},t,{key:s,ref:0===o?e:void 0}),n)}))}var V=i.forwardRef(P);V.Collection=function(t){var e=t.children,n=t.onBatchResize,r=i.useRef(0),o=i.useRef([]),s=i.useContext(h),c=i.useCallback((function(t,e,i){r.current+=1;var c=r.current;o.current.push({size:t,element:e,data:i}),Promise.resolve().then((function(){c===r.current&&(null===n||void 0===n||n(o.current),o.current=[])})),null===s||void 0===s||s(t,e,i)}),[n,s]);return i.createElement(h.Provider,{value:c},e)};const F=V}}]);
//# sourceMappingURL=4883.d91282d2.chunk.js.map