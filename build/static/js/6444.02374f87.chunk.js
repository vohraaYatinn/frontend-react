"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6444],{26768:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(29439),c=n(29867),o=n(28544),a=n(1223),i=(n(2359),n(4390));const u=c.createContext(null);var E=n(93433),d=n(32988),s=[];var l,N=n(31172);function f(e){var t=e.match(/^(.*)px$/),n=Number(null===t||void 0===t?void 0:t[1]);return Number.isNaN(n)?function(e){if("undefined"===typeof document)return 0;if(e||void 0===l){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var n=document.createElement("div"),r=n.style;r.position="absolute",r.top="0",r.left="0",r.pointerEvents="none",r.visibility="hidden",r.width="200px",r.height="150px",r.overflow="hidden",n.appendChild(t),document.body.appendChild(n);var c=t.offsetWidth;n.style.overflow="scroll";var o=t.offsetWidth;c===o&&(o=n.clientWidth),document.body.removeChild(n),l=c-o}return l}():n}var _="rc-util-locker-".concat(Date.now()),S=0;function v(e){var t=!!e,n=c.useState((function(){return S+=1,"".concat(_,"_").concat(S)})),o=(0,r.Z)(n,1)[0];(0,d.Z)((function(){if(t){var e=function(e){if("undefined"===typeof document||!e||!(e instanceof Element))return{width:0,height:0};var t=getComputedStyle(e,"::-webkit-scrollbar"),n=t.width,r=t.height;return{width:f(n),height:f(r)}}(document.body).width,n=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth;(0,N.hq)("\nhtml body {\n  overflow-y: hidden;\n  ".concat(n?"width: calc(100% - ".concat(e,"px);"):"","\n}"),o)}else(0,N.jL)(o);return function(){(0,N.jL)(o)}}),[t,o])}var M=!1;var C=function(e){return!1!==e&&((0,a.Z)()&&e?"string"===typeof e?document.querySelector(e):"function"===typeof e?e():e:null)};const T=c.forwardRef((function(e,t){var n=e.open,l=e.autoLock,N=e.getContainer,f=(e.debug,e.autoDestroy),_=void 0===f||f,S=e.children,T=c.useState(n),U=(0,r.Z)(T,2),A=U[0],I=U[1],O=A||n;c.useEffect((function(){(_||n)&&I(n)}),[n,_]);var h=c.useState((function(){return C(N)})),R=(0,r.Z)(h,2),P=R[0],m=R[1];c.useEffect((function(){var e=C(N);m(null!==e&&void 0!==e?e:null)}));var p=function(e,t){var n=c.useState((function(){return(0,a.Z)()?document.createElement("div"):null})),o=(0,r.Z)(n,1)[0],i=c.useRef(!1),l=c.useContext(u),N=c.useState(s),f=(0,r.Z)(N,2),_=f[0],S=f[1],v=l||(i.current?void 0:function(e){S((function(t){return[e].concat((0,E.Z)(t))}))});function M(){o.parentElement||document.body.appendChild(o),i.current=!0}function C(){var e;null===(e=o.parentElement)||void 0===e||e.removeChild(o),i.current=!1}return(0,d.Z)((function(){return e?l?l(M):M():C(),C}),[e]),(0,d.Z)((function(){_.length&&(_.forEach((function(e){return e()})),S(s))}),[_]),[o,v]}(O&&!P),L=(0,r.Z)(p,2),y=L[0],F=L[1],w=null!==P&&void 0!==P?P:y;v(l&&n&&(0,a.Z)()&&(w===y||w===document.body));var Z=null;S&&(0,i.Yr)(S)&&t&&(Z=S.ref);var H=(0,i.x1)(Z,t);if(!O||!(0,a.Z)()||void 0===P)return null;var K,D=!1===w||("boolean"===typeof K&&(M=K),M),b=S;return t&&(b=c.cloneElement(S,{ref:H})),c.createElement(u.Provider,{value:F},D?b:(0,o.createPortal)(b,w))}))},72922:(e,t,n)=>{n.d(t,{Cn:()=>d,u6:()=>i});var r=n(29867),c=n(11716),o=n(70972);const a=100,i=1e3,u={Modal:a,Drawer:a,Popover:a,Popconfirm:a,Tooltip:a,Tour:a},E={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function d(e,t){const[,n]=(0,c.ZP)(),a=r.useContext(o.Z),d=e in u;if(void 0!==t)return[t,t];let s=null!==a&&void 0!==a?a:0;return d?(s+=(a?0:n.zIndexPopupBase)+u[e],s=Math.min(s,n.zIndexPopupBase+i)):s+=E[e],[void 0===a?t:s,s]}},66053:(e,t,n)=>{n.d(t,{m:()=>r});const r=(e,t,n)=>void 0!==n?n:"".concat(e,"-").concat(t)},70972:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(29867).createContext(void 0)},39865:(e,t,n)=>{n.d(t,{Z:()=>c});var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=r.F1&&t<=r.F12)return!1;switch(t){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=r.ZERO&&e<=r.NINE)return!0;if(e>=r.NUM_ZERO&&e<=r.NUM_MULTIPLY)return!0;if(e>=r.A&&e<=r.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const c=r}}]);
//# sourceMappingURL=6444.02374f87.chunk.js.map