(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))_(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&_(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function _(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var L,l,se,C,J,R={},le=[],we=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function E(e,n){for(var t in n)e[t]=n[t];return e}function ue(e){var n=e.parentNode;n&&n.removeChild(e)}function Ae(e,n,t){var _,i,r,c={};for(r in n)r=="key"?_=n[r]:r=="ref"?i=n[r]:c[r]=n[r];if(arguments.length>2&&(c.children=arguments.length>3?L.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return M(e,c,_,i,null)}function M(e,n,t,_,i){var r={type:e,props:n,key:t,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++se:i};return i==null&&l.vnode!=null&&l.vnode(r),r}function x(e){return e.children}function $(e,n){this.props=e,this.context=n}function T(e,n){if(n==null)return e.__?T(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?T(e):null}function ae(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return ae(e)}}function Q(e){(!e.__d&&(e.__d=!0)&&C.push(e)&&!V.__r++||J!==l.debounceRendering)&&((J=l.debounceRendering)||setTimeout)(V)}function V(){for(var e;V.__r=C.length;)e=C.sort(function(n,t){return n.__v.__b-t.__v.__b}),C=[],e.some(function(n){var t,_,i,r,c,u;n.__d&&(c=(r=(t=n).__v).__e,(u=t.__P)&&(_=[],(i=E({},r)).__v=r.__v+1,Y(u,r,i,t.__n,u.ownerSVGElement!==void 0,r.__h!=null?[c]:null,_,c==null?T(r):c,r.__h),pe(_,r),r.__e!=c&&ae(r)))})}function de(e,n,t,_,i,r,c,u,d,p){var o,m,h,s,f,A,v,g=_&&_.__k||le,b=g.length;for(t.__k=[],o=0;o<n.length;o++)if((s=t.__k[o]=(s=n[o])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?M(null,s,null,null,s):Array.isArray(s)?M(x,{children:s},null,null,null):s.__b>0?M(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)!=null){if(s.__=t,s.__b=t.__b+1,(h=g[o])===null||h&&s.key==h.key&&s.type===h.type)g[o]=void 0;else for(m=0;m<b;m++){if((h=g[m])&&s.key==h.key&&s.type===h.type){g[m]=void 0;break}h=null}Y(e,s,h=h||R,i,r,c,u,d,p),f=s.__e,(m=s.ref)&&h.ref!=m&&(v||(v=[]),h.ref&&v.push(h.ref,null,s),v.push(m,s.__c||f,s)),f!=null?(A==null&&(A=f),typeof s.type=="function"&&s.__k===h.__k?s.__d=d=he(s,d,e):d=fe(e,s,h,g,f,d),typeof t.type=="function"&&(t.__d=d)):d&&h.__e==d&&d.parentNode!=e&&(d=T(h))}for(t.__e=A,o=b;o--;)g[o]!=null&&ve(g[o],g[o]);if(v)for(o=0;o<v.length;o++)me(v[o],v[++o],v[++o])}function he(e,n,t){for(var _,i=e.__k,r=0;i&&r<i.length;r++)(_=i[r])&&(_.__=e,n=typeof _.type=="function"?he(_,n,t):fe(t,_,_,i,_.__e,n));return n}function fe(e,n,t,_,i,r){var c,u,d;if(n.__d!==void 0)c=n.__d,n.__d=void 0;else if(t==null||i!=r||i.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(i),c=null;else{for(u=r,d=0;(u=u.nextSibling)&&d<_.length;d+=1)if(u==i)break e;e.insertBefore(i,r),c=r}return c!==void 0?c:i.nextSibling}function Ie(e,n,t,_,i){var r;for(r in t)r==="children"||r==="key"||r in n||W(e,r,null,t[r],_);for(r in n)i&&typeof n[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||t[r]===n[r]||W(e,r,n[r],t[r],_)}function X(e,n,t){n[0]==="-"?e.setProperty(n,t):e[n]=t==null?"":typeof t!="number"||we.test(n)?t:t+"px"}function W(e,n,t,_,i){var r;e:if(n==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||X(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||X(e.style,n,t[n])}else if(n[0]==="o"&&n[1]==="n")r=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?_||e.addEventListener(n,r?ee:Z,r):e.removeEventListener(n,r?ee:Z,r);else if(n!=="dangerouslySetInnerHTML"){if(i)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!=="href"&&n!=="list"&&n!=="form"&&n!=="tabIndex"&&n!=="download"&&n in e)try{e[n]=t==null?"":t;break e}catch{}typeof t=="function"||(t==null||t===!1&&n.indexOf("-")==-1?e.removeAttribute(n):e.setAttribute(n,t))}}function Z(e){this.l[e.type+!1](l.event?l.event(e):e)}function ee(e){this.l[e.type+!0](l.event?l.event(e):e)}function Y(e,n,t,_,i,r,c,u,d){var p,o,m,h,s,f,A,v,g,b,S,I,z,F,O,k=n.type;if(n.constructor!==void 0)return null;t.__h!=null&&(d=t.__h,u=n.__e=t.__e,n.__h=null,r=[u]),(p=l.__b)&&p(n);try{e:if(typeof k=="function"){if(v=n.props,g=(p=k.contextType)&&_[p.__c],b=p?g?g.props.value:p.__:_,t.__c?A=(o=n.__c=t.__c).__=o.__E:("prototype"in k&&k.prototype.render?n.__c=o=new k(v,b):(n.__c=o=new $(v,b),o.constructor=k,o.render=Te),g&&g.sub(o),o.props=v,o.state||(o.state={}),o.context=b,o.__n=_,m=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),k.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=E({},o.__s)),E(o.__s,k.getDerivedStateFromProps(v,o.__s))),h=o.props,s=o.state,m)k.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==h&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,b),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,b)===!1||n.__v===t.__v){for(o.props=v,o.state=o.__s,n.__v!==t.__v&&(o.__d=!1),o.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach(function(H){H&&(H.__=n)}),S=0;S<o._sb.length;S++)o.__h.push(o._sb[S]);o._sb=[],o.__h.length&&c.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,b),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(h,s,f)})}if(o.context=b,o.props=v,o.__v=n,o.__P=e,I=l.__r,z=0,"prototype"in k&&k.prototype.render){for(o.state=o.__s,o.__d=!1,I&&I(n),p=o.render(o.props,o.state,o.context),F=0;F<o._sb.length;F++)o.__h.push(o._sb[F]);o._sb=[]}else do o.__d=!1,I&&I(n),p=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++z<25);o.state=o.__s,o.getChildContext!=null&&(_=E(E({},_),o.getChildContext())),m||o.getSnapshotBeforeUpdate==null||(f=o.getSnapshotBeforeUpdate(h,s)),O=p!=null&&p.type===x&&p.key==null?p.props.children:p,de(e,Array.isArray(O)?O:[O],n,t,_,i,r,c,u,d),o.base=n.__e,n.__h=null,o.__h.length&&c.push(o),A&&(o.__E=o.__=null),o.__e=!1}else r==null&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=Ce(t.__e,n,t,_,i,r,c,d);(p=l.diffed)&&p(n)}catch(H){n.__v=null,(d||r!=null)&&(n.__e=u,n.__h=!!d,r[r.indexOf(u)]=null),l.__e(H,n,t)}}function pe(e,n){l.__c&&l.__c(n,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(_){_.call(t)})}catch(_){l.__e(_,t.__v)}})}function Ce(e,n,t,_,i,r,c,u){var d,p,o,m=t.props,h=n.props,s=n.type,f=0;if(s==="svg"&&(i=!0),r!=null){for(;f<r.length;f++)if((d=r[f])&&"setAttribute"in d==!!s&&(s?d.localName===s:d.nodeType===3)){e=d,r[f]=null;break}}if(e==null){if(s===null)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,h.is&&h),r=null,u=!1}if(s===null)m===h||u&&e.data===h||(e.data=h);else{if(r=r&&L.call(e.childNodes),p=(m=t.props||R).dangerouslySetInnerHTML,o=h.dangerouslySetInnerHTML,!u){if(r!=null)for(m={},f=0;f<e.attributes.length;f++)m[e.attributes[f].name]=e.attributes[f].value;(o||p)&&(o&&(p&&o.__html==p.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(Ie(e,h,m,i,u),o)n.__k=[];else if(f=n.props.children,de(e,Array.isArray(f)?f:[f],n,t,_,i&&s!=="foreignObject",r,c,r?r[0]:t.__k&&T(t,0),u),r!=null)for(f=r.length;f--;)r[f]!=null&&ue(r[f]);u||("value"in h&&(f=h.value)!==void 0&&(f!==e.value||s==="progress"&&!f||s==="option"&&f!==m.value)&&W(e,"value",f,m.value,!1),"checked"in h&&(f=h.checked)!==void 0&&f!==e.checked&&W(e,"checked",f,m.checked,!1))}return e}function me(e,n,t){try{typeof e=="function"?e(n):e.current=n}catch(_){l.__e(_,t)}}function ve(e,n,t){var _,i;if(l.unmount&&l.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||me(_,null,n)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(r){l.__e(r,n)}_.base=_.__P=null,e.__c=void 0}if(_=e.__k)for(i=0;i<_.length;i++)_[i]&&ve(_[i],n,t||typeof e.type!="function");t||e.__e==null||ue(e.__e),e.__=e.__e=e.__d=void 0}function Te(e,n,t){return this.constructor(e,t)}function Ne(e,n,t){var _,i,r;l.__&&l.__(e,n),i=(_=typeof t=="function")?null:t&&t.__k||n.__k,r=[],Y(n,e=(!_&&t||n).__k=Ae(x,null,[e]),i||R,R,n.ownerSVGElement!==void 0,!_&&t?[t]:i?null:n.firstChild?L.call(n.childNodes):null,r,!_&&t?t:i?i.__e:n.firstChild,_),pe(r,e)}L=le.slice,l={__e:function(e,n,t,_){for(var i,r,c;n=n.__;)if((i=n.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,_||{}),c=i.__d),c)return i.__E=i}catch(u){e=u}throw e}},se=0,$.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof e=="function"&&(e=e(E({},t),this.props)),e&&E(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),Q(this))},$.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Q(this))},$.prototype.render=x,C=[],V.__r=0;var B,y,j,ne,N=0,ye=[],D=[],te=l.__b,oe=l.__r,re=l.diffed,_e=l.__c,ie=l.unmount;function q(e,n){l.__h&&l.__h(y,e,N||n),N=0;var t=y.__H||(y.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:D}),t.__[e]}function Se(e){return N=1,ge(xe,e)}function ge(e,n,t){var _=q(B++,2);if(_.t=e,!_.__c&&(_.__=[t?t(n):xe(void 0,n),function(r){var c=_.__N?_.__N[0]:_.__[0],u=_.t(c,r);c!==u&&(_.__N=[u,_.__[1]],_.__c.setState({}))}],_.__c=y,!y.u)){y.u=!0;var i=y.shouldComponentUpdate;y.shouldComponentUpdate=function(r,c,u){if(!_.__c.__H)return!0;var d=_.__c.__H.__.filter(function(o){return o.__c});if(d.every(function(o){return!o.__N}))return!i||i.call(this,r,c,u);var p=!1;return d.forEach(function(o){if(o.__N){var m=o.__[0];o.__=o.__N,o.__N=void 0,m!==o.__[0]&&(p=!0)}}),!(!p&&_.__c.props===r)&&(!i||i.call(this,r,c,u))}}return _.__N||_.__}function Fe(e,n){var t=q(B++,3);!l.__s&&be(t.__H,n)&&(t.__=e,t.i=n,y.__H.__h.push(t))}function Oe(e){return N=5,ke(function(){return{current:e}},[])}function ke(e,n){var t=q(B++,7);return be(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function K(e,n){return N=8,ke(function(){return e},n)}function He(){for(var e;e=ye.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(P),e.__H.__h.forEach(G),e.__H.__h=[]}catch(n){e.__H.__h=[],l.__e(n,e.__v)}}l.__b=function(e){y=null,te&&te(e)},l.__r=function(e){oe&&oe(e),B=0;var n=(y=e.__c).__H;n&&(j===y?(n.__h=[],y.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=D,t.__N=t.i=void 0})):(n.__h.forEach(P),n.__h.forEach(G),n.__h=[])),j=y},l.diffed=function(e){re&&re(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(ye.push(n)!==1&&ne===l.requestAnimationFrame||((ne=l.requestAnimationFrame)||Me)(He)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==D&&(t.__=t.__V),t.i=void 0,t.__V=D})),j=y=null},l.__c=function(e,n){n.some(function(t){try{t.__h.forEach(P),t.__h=t.__h.filter(function(_){return!_.__||G(_)})}catch(_){n.some(function(i){i.__h&&(i.__h=[])}),n=[],l.__e(_,t.__v)}}),_e&&_e(e,n)},l.unmount=function(e){ie&&ie(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(_){try{P(_)}catch(i){n=i}}),t.__H=void 0,n&&l.__e(n,t.__v))};var ce=typeof requestAnimationFrame=="function";function Me(e){var n,t=function(){clearTimeout(_),ce&&cancelAnimationFrame(n),setTimeout(e)},_=setTimeout(t,100);ce&&(n=requestAnimationFrame(t))}function P(e){var n=y,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),y=n}function G(e){var n=y;e.__c=e.__(),y=n}function be(e,n){return!e||e.length!==n.length||n.some(function(t,_){return t!==e[_]})}function xe(e,n){return typeof n=="function"?n(e):n}const $e="/one-armed-rogue-like/logo.png";function De(){const e=Oe(0),[n,t]=Se(""),_=K(i=>{e.current&&clearTimeout(e.current),t(i),e.current=setTimeout(()=>{t("")},3e3)},[]);return[n,_]}const U={unfinished:{enemy:"\u{1F6A7}",emoji:"\u{1F477}",text:"This game is still under construction. Please check back later!",choices:[{text:"Return to the main menu",action:"RETURN_TO_MAIN_MENU"}]},intro0:{enemy:"\u{1F6AA}\u{1F6AA}",emoji:"\u{1F7E1}",text:"You find yourself in a dark corridor with two doors. Which do you choose?",choices:[{text:"The Death Door",action:"MOVE",payload:"intro1"},{text:"The Pumpkin Door",action:"MOVE",payload:"intro2"}]},intro1:{enemy:"\u2620\uFE0F",emoji:"",text:"You died a horrible painful death. What did you expect would happen?",choices:[{text:"Continue",action:"MOVE",payload:"unfinished"}]},intro2:{enemy:"\u{1F383}",emoji:"\u{1F7E1}",text:"There is a door on the far side of the room, but it is blocked by a very large pumpkin. You can't see any way to get past it.",choices:[{text:"Kick the pumpkin",action:"MOVE",payload:"intro2a"},{text:"Reason with the pumpkin",action:"MOVE",payload:"intro2b"},{text:"Yell at the pumpkin",action:"MOVE",payload:"intro2c"},{text:"Use an item",action:"USE_ITEM"},{text:"Return to the previous room",action:"BACK"}]},intro2a:{enemy:"\u{1F383}",emoji:"\u{1F7E1}",text:"Ouch. You hurt your foot, but the pumpkin is unaffected. It is still blocking the door.",choices:[{text:"Continue",action:"BACK"}]},intro2b:{enemy:"\u{1F383}",emoji:"\u{1F7E1}",text:"The pumpkin is being entirely unreasonable. It is still blocking the door.",choices:[{text:"Continue",action:"BACK"}]},intro2c:{enemy:"\u{1F383}",emoji:"\u{1F7E1}",text:"The pumpkin is not impressed by your yelling. It is still blocking the door.",choices:[{text:"Continue",action:"BACK"}]}};var Pe=0;function a(e,n,t,_,i){var r,c,u={};for(c in n)c=="ref"?r=n[c]:u[c]=n[c];var d={type:e,props:u,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Pe,__source:i,__self:_};if(typeof e=="function"&&(r=e.defaultProps))for(c in r)u[c]===void 0&&(u[c]=r[c]);return l.vnode&&l.vnode(d),d}function Re(){const[e,n]=ge(Ve,null,Ue);return[e,n]}function Ve(e,n){const t=We(e,n),{choices:_,...i}=t;return localStorage.setItem("gameState",JSON.stringify(i)),t}function We(e,n){switch(n.type){case"DOWN":const t=e.activeIndex>=e.choices.length-1?0:e.activeIndex+1;return{...e,activeIndex:t};case"BACK":if(e.stack.length===0)return e;const _=e.stack.slice(0,-1),i=e.stack[e.stack.length-1];return{...e,activeIndex:i.activeIndex,choices:w({...e,screen:i.screen,room:i.room}),stack:_,screen:i.screen,room:i.room};case"START_GAME":return{...e,activeIndex:0,screen:"intro",room:"intro0",choices:w({screen:"intro",room:"intro0"})};case"MOVE":return console.log("MOVE",n.payload),{...e,activeIndex:0,room:n.payload,choices:w({...e,room:n.payload}),stack:[...e.stack,{screen:e.screen,room:e.room,activeIndex:e.activeIndex}]};case"USE_ITEM":return{...e,activeIndex:0,stack:[...e.stack,{screen:e.screen,room:e.room,activeIndex:e.activeIndex}],choices:w({...e,screen:"useItem"})};case"END_GAME":return{...e,activeIndex:0,screen:"end"};case"RETURN_TO_MAIN_MENU":return Ee();case"VIEW_CREDITS":return{...e,activeIndex:0,choices:w({...e,screen:"credits"}),stack:[...e.stack,{screen:e.screen,activeIndex:e.activeIndex}],screen:"credits"};default:return console.error("Unknown action type",n.type),e}}function w(e={}){switch(e.screen){case"menu":return[{text:"New Game",action:"START_GAME",details:a(x,{children:[a("div",{children:"Play one-handed!"}),a("div",{children:"There are only two buttons! \u{1F447}"})]})},{text:"How to Play",action:"VIEW_HOW_TO_PLAY",warning:"You'll figure it out!",details:a(x,{children:a("div",{children:"Use the two buttons!"})})},{text:"Options",action:"VIEW_OPTIONS",warning:"Sorry, there are no options.",details:a(x,{children:a("div",{children:"There are no options!"})})},{text:"Achievements",action:"VIEW_ACHIEVEMENTS",warning:"Achievement unlocked: Disappointment",details:a(x,{children:a("div",{children:"There are no achievements!"})})},{text:"Credits",action:"VIEW_CREDITS",details:a(x,{children:a("div",{children:"For those who enjoy backstory!"})})}];case"credits":return[{text:"Back",action:"BACK"}];case"intro":return U[e.room]?U[e.room].choices:[{text:"Back",action:"BACK"}];case"useItem":return[...e.items.map(t=>({text:t.name,action:"MOVE",payload:`${e.room}${t.id}`})),{text:"Never mind",action:"BACK"}];default:return[]}}function Ee(){return{activeIndex:0,screen:"menu",stack:[],items:[],choices:w({screen:"menu"})}}function Ue(){try{const e=localStorage.getItem("gameState");if(e){const n=JSON.parse(e);return n.choices=w(n),n}}catch(e){console.error("Error loading saved game state",e)}return Ee()}function Le(e,n=[]){Fe(()=>{function t(_){const i=e[_.key];i&&i(_)}return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},n)}function Be({gameState:e}){switch(e.screen){case"menu":return a("div",{class:"screen",children:[a("img",{src:$e,class:"logo",alt:"One-Armed Rogue-Like Logo"}),a("h1",{children:"One-Armed Rogue-Like"})]});case"intro":if(!U[e.room])return a("div",{class:"screen error",children:["\u{1F4A5} ERROR:",a("br",{}),"no conversation found for ",e.room]});const n=U[e.room];return a("div",{class:"screen intro",children:[a("div",{class:"enemy",children:n.enemy}),a("div",{class:"emoji",children:n.emoji}),a("p",{class:"text",children:n.text})]});case"credits":return a("div",{class:"screen align-left",children:[a("h1",{children:"Credits"}),a("p",{children:"This game was made by Robert Bolender, inspired by the birth of his son Daniel."}),a("p",{children:"Robert found that he was limited in the games he could play while holding his sleeping son, so he tried to make this game. But he also found that his time was as limited as his hands, so he never finished the game."})]});default:return a("div",{class:"screen",children:["Unknown screen: ",e.screen]})}}function je({choices:e,activeIndex:n}){return a("ul",{class:"choices",children:e.map((t,_)=>a("li",{class:n===_?"active":"",children:t.text}))})}function Ke(){var d;const[e,n]=Re(),{activeIndex:t,choices:_}=e,i=K(p=>{p.preventDefault(),n({type:"DOWN"})},[]),[r,c]=De(),u=K(p=>{p.preventDefault();const o=_[t];if(o.warning){c(o.warning);return}n({type:o.action,payload:o.payload})},[_,t]);return Le({ArrowDown:i,s:i,ArrowRight:u,d:u},[_,t]),a(x,{children:[r&&a("div",{class:"warning",children:r}),a(Be,{gameState:e}),a("div",{class:"card",children:a(je,{choices:_,activeIndex:t})}),((d=_[t])==null?void 0:d.details)&&a("div",{class:"details",children:_[t].details}),a("div",{class:"buttons",children:[a("button",{onClick:i,children:"\xA0"}),a("button",{onClick:u,children:"\xA0"})]}),a("div",{class:"visible-buttons",children:[a("button",{children:"\u2B07\uFE0F"}),a("button",{children:"\u27A1\uFE0F"})]})]})}Ne(a(Ke,{}),document.getElementById("app"));