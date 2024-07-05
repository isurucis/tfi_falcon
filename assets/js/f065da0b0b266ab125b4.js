"use strict";(()=>{var it=Object.defineProperty,st=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable;var B=(d,a,o)=>a in d?it(d,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):d[a]=o,p=(d,a)=>{for(var o in a||(a={}))ot.call(a,o)&&B(d,o,a[o]);if(Y)for(var o of Y(a))rt.call(a,o)&&B(d,o,a[o]);return d},P=(d,a)=>st(d,nt(a));(self.webpackChunkFalcon_theme=self.webpackChunkFalcon_theme||[]).push([[813,618],{7813:(d,a,o)=>{o.r(a),o.d(a,{default:()=>j});var $=o(5311),f=o.n($),b=o(7618);const T="popover",U="4.6.2",v="bs.popover",h=`.${v}`,M=f().fn[T],i="bs-popover",I=new RegExp(`(^|\\s)${i}\\S+`,"g"),g="fade",m="show",F=".popover-header",A=".popover-body",c=P(p({},b.default.Default),{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),K=P(p({},b.default.DefaultType),{content:"(string|element|function)"}),w={HIDE:`hide${h}`,HIDDEN:`hidden${h}`,SHOW:`show${h}`,SHOWN:`shown${h}`,INSERTED:`inserted${h}`,CLICK:`click${h}`,FOCUSIN:`focusin${h}`,FOCUSOUT:`focusout${h}`,MOUSEENTER:`mouseenter${h}`,MOUSELEAVE:`mouseleave${h}`};class _ extends b.default{static get VERSION(){return U}static get Default(){return c}static get NAME(){return T}static get DATA_KEY(){return v}static get Event(){return w}static get EVENT_KEY(){return h}static get DefaultType(){return K}isWithContent(){return this.getTitle()||this._getContent()}addAttachmentClass(r){f()(this.getTipElement()).addClass(`${i}-${r}`)}getTipElement(){return this.tip=this.tip||f()(this.config.template)[0],this.tip}setContent(){const r=f()(this.getTipElement());this.setElementContent(r.find(F),this.getTitle());let l=this._getContent();typeof l=="function"&&(l=l.call(this.element)),this.setElementContent(r.find(A),l),r.removeClass(`${g} ${m}`)}_getContent(){return this.element.getAttribute("data-content")||this.config.content}_cleanTipClass(){const r=f()(this.getTipElement()),l=r.attr("class").match(I);l!==null&&l.length>0&&r.removeClass(l.join(""))}static _jQueryInterface(r){return this.each(function(){let l=f()(this).data(v);const D=typeof r=="object"?r:null;if(!(!l&&/dispose|hide/.test(r))&&(l||(l=new _(this,D),f()(this).data(v,l)),typeof r=="string")){if(typeof l[r]=="undefined")throw new TypeError(`No method named "${r}"`);l[r]()}})}}f().fn[T]=_._jQueryInterface,f().fn[T].Constructor=_,f().fn[T].noConflict=()=>(f().fn[T]=M,_._jQueryInterface);const j=_},7618:(d,a,o)=>{o.r(a),o.d(a,{default:()=>x});const $=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],b={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},T=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,U=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function v(C,t){const e=C.nodeName.toLowerCase();if(t.indexOf(e)!==-1)return $.indexOf(e)!==-1?Boolean(T.test(C.nodeValue)||U.test(C.nodeValue)):!0;const s=t.filter(n=>n instanceof RegExp);for(let n=0,u=s.length;n<u;n++)if(s[n].test(e))return!0;return!1}function h(C,t,e){if(C.length===0)return C;if(e&&typeof e=="function")return e(C);const n=new window.DOMParser().parseFromString(C,"text/html"),u=Object.keys(t),L=[].slice.call(n.body.querySelectorAll("*"));for(let S=0,W=L.length;S<W;S++){const E=L[S],R=E.nodeName.toLowerCase();if(u.indexOf(E.nodeName.toLowerCase())===-1){E.parentNode.removeChild(E);continue}const tt=[].slice.call(E.attributes),et=[].concat(t["*"]||[],t[R]||[]);tt.forEach(V=>{v(V,et)||E.removeAttribute(V.nodeName)})}return n.body.innerHTML}var M=o(5311),i=o.n(M),I=o(8981),g=o(980);const m="tooltip",F="4.6.2",A="bs.tooltip",c=`.${A}`,K=i().fn[m],w="bs-tooltip",_=new RegExp(`(^|\\s)${w}\\S+`,"g"),j=["sanitize","whiteList","sanitizeFn"],O="fade",r="show",l="show",D="out",G=".tooltip-inner",k=".arrow",N="hover",H="focus",z="click",Q="manual",Z={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},X={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:b,popperConfig:null},J={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},q={HIDE:`hide${c}`,HIDDEN:`hidden${c}`,SHOW:`show${c}`,SHOWN:`shown${c}`,INSERTED:`inserted${c}`,CLICK:`click${c}`,FOCUSIN:`focusin${c}`,FOCUSOUT:`focusout${c}`,MOUSEENTER:`mouseenter${c}`,MOUSELEAVE:`mouseleave${c}`};class y{constructor(t,e){if(typeof I.Z=="undefined")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}static get VERSION(){return F}static get Default(){return X}static get NAME(){return m}static get DATA_KEY(){return A}static get Event(){return q}static get EVENT_KEY(){return c}static get DefaultType(){return J}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this.constructor.DATA_KEY;let s=i()(t.currentTarget).data(e);s||(s=new this.constructor(t.currentTarget,this._getDelegateConfig()),i()(t.currentTarget).data(e,s)),s._activeTrigger.click=!s._activeTrigger.click,s._isWithActiveTrigger()?s._enter(null,s):s._leave(null,s)}else{if(i()(this.getTipElement()).hasClass(r)){this._leave(null,this);return}this._enter(null,this)}}dispose(){clearTimeout(this._timeout),i().removeData(this.element,this.constructor.DATA_KEY),i()(this.element).off(this.constructor.EVENT_KEY),i()(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&i()(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null}show(){if(i()(this.element).css("display")==="none")throw new Error("Please use show on visible elements");const t=i().Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){i()(this.element).trigger(t);const e=g.Z.findShadowRoot(this.element),s=i().contains(e!==null?e:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!s)return;const n=this.getTipElement(),u=g.Z.getUID(this.constructor.NAME);n.setAttribute("id",u),this.element.setAttribute("aria-describedby",u),this.setContent(),this.config.animation&&i()(n).addClass(O);const L=typeof this.config.placement=="function"?this.config.placement.call(this,n,this.element):this.config.placement,S=this._getAttachment(L);this.addAttachmentClass(S);const W=this._getContainer();i()(n).data(this.constructor.DATA_KEY,this),i().contains(this.element.ownerDocument.documentElement,this.tip)||i()(n).appendTo(W),i()(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new I.Z(this.element,n,this._getPopperConfig(S)),i()(n).addClass(r),i()(n).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&i()(document.body).children().on("mouseover",null,i().noop);const E=()=>{this.config.animation&&this._fixTransition();const R=this._hoverState;this._hoverState=null,i()(this.element).trigger(this.constructor.Event.SHOWN),R===D&&this._leave(null,this)};if(i()(this.tip).hasClass(O)){const R=g.Z.getTransitionDurationFromElement(this.tip);i()(this.tip).one(g.Z.TRANSITION_END,E).emulateTransitionEnd(R)}else E()}}hide(t){const e=this.getTipElement(),s=i().Event(this.constructor.Event.HIDE),n=()=>{this._hoverState!==l&&e.parentNode&&e.parentNode.removeChild(e),this._cleanTipClass(),this.element.removeAttribute("aria-describedby"),i()(this.element).trigger(this.constructor.Event.HIDDEN),this._popper!==null&&this._popper.destroy(),t&&t()};if(i()(this.element).trigger(s),!s.isDefaultPrevented()){if(i()(e).removeClass(r),"ontouchstart"in document.documentElement&&i()(document.body).children().off("mouseover",null,i().noop),this._activeTrigger[z]=!1,this._activeTrigger[H]=!1,this._activeTrigger[N]=!1,i()(this.tip).hasClass(O)){const u=g.Z.getTransitionDurationFromElement(e);i()(e).one(g.Z.TRANSITION_END,n).emulateTransitionEnd(u)}else n();this._hoverState=""}}update(){this._popper!==null&&this._popper.scheduleUpdate()}isWithContent(){return Boolean(this.getTitle())}addAttachmentClass(t){i()(this.getTipElement()).addClass(`${w}-${t}`)}getTipElement(){return this.tip=this.tip||i()(this.config.template)[0],this.tip}setContent(){const t=this.getTipElement();this.setElementContent(i()(t.querySelectorAll(G)),this.getTitle()),i()(t).removeClass(`${O} ${r}`)}setElementContent(t,e){if(typeof e=="object"&&(e.nodeType||e.jquery)){this.config.html?i()(e).parent().is(t)||t.empty().append(e):t.text(i()(e).text());return}this.config.html?(this.config.sanitize&&(e=h(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e)}getTitle(){let t=this.element.getAttribute("data-original-title");return t||(t=typeof this.config.title=="function"?this.config.title.call(this.element):this.config.title),t}_getPopperConfig(t){const e={placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:k},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:s=>{s.originalPlacement!==s.placement&&this._handlePopperPlacementChange(s)},onUpdate:s=>this._handlePopperPlacementChange(s)};return p(p({},e),this.config.popperConfig)}_getOffset(){const t={};return typeof this.config.offset=="function"?t.fn=e=>(e.offsets=p(p({},e.offsets),this.config.offset(e.offsets,this.element)),e):t.offset=this.config.offset,t}_getContainer(){return this.config.container===!1?document.body:g.Z.isElement(this.config.container)?i()(this.config.container):i()(document).find(this.config.container)}_getAttachment(t){return Z[t.toUpperCase()]}_setListeners(){this.config.trigger.split(" ").forEach(e=>{if(e==="click")i()(this.element).on(this.constructor.Event.CLICK,this.config.selector,s=>this.toggle(s));else if(e!==Q){const s=e===N?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===N?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;i()(this.element).on(s,this.config.selector,u=>this._enter(u)).on(n,this.config.selector,u=>this._leave(u))}}),this._hideModalHandler=()=>{this.element&&this.hide()},i()(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=P(p({},this.config),{trigger:"manual",selector:""}):this._fixTitle()}_fixTitle(){const t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||t!=="string")&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))}_enter(t,e){const s=this.constructor.DATA_KEY;if(e=e||i()(t.currentTarget).data(s),e||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),i()(t.currentTarget).data(s,e)),t&&(e._activeTrigger[t.type==="focusin"?H:N]=!0),i()(e.getTipElement()).hasClass(r)||e._hoverState===l){e._hoverState=l;return}if(clearTimeout(e._timeout),e._hoverState=l,!e.config.delay||!e.config.delay.show){e.show();return}e._timeout=setTimeout(()=>{e._hoverState===l&&e.show()},e.config.delay.show)}_leave(t,e){const s=this.constructor.DATA_KEY;if(e=e||i()(t.currentTarget).data(s),e||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),i()(t.currentTarget).data(s,e)),t&&(e._activeTrigger[t.type==="focusout"?H:N]=!1),!e._isWithActiveTrigger()){if(clearTimeout(e._timeout),e._hoverState=D,!e.config.delay||!e.config.delay.hide){e.hide();return}e._timeout=setTimeout(()=>{e._hoverState===D&&e.hide()},e.config.delay.hide)}}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=i()(this.element).data();return Object.keys(e).forEach(s=>{j.indexOf(s)!==-1&&delete e[s]}),t=p(p(p({},this.constructor.Default),e),typeof t=="object"&&t?t:{}),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),g.Z.typeCheckConfig(m,t,this.constructor.DefaultType),t.sanitize&&(t.template=h(t.template,t.whiteList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};if(this.config)for(const e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t}_cleanTipClass(){const t=i()(this.getTipElement()),e=t.attr("class").match(_);e!==null&&e.length&&t.removeClass(e.join(""))}_handlePopperPlacementChange(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))}_fixTransition(){const t=this.getTipElement(),e=this.config.animation;t.getAttribute("x-placement")===null&&(i()(t).removeClass(O),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)}static _jQueryInterface(t){return this.each(function(){const e=i()(this);let s=e.data(A);const n=typeof t=="object"&&t;if(!(!s&&/dispose|hide/.test(t))&&(s||(s=new y(this,n),e.data(A,s)),typeof t=="string")){if(typeof s[t]=="undefined")throw new TypeError(`No method named "${t}"`);s[t]()}})}}i().fn[m]=y._jQueryInterface,i().fn[m].Constructor=y,i().fn[m].noConflict=()=>(i().fn[m]=K,y._jQueryInterface);const x=y}}]);})();
