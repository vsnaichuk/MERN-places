(this["webpackJsonpmern-app"]=this["webpackJsonpmern-app"]||[]).push([[5],{102:function(t,e,r){t.exports={avatar:"Avatar_avatar__14rac"}},103:function(t,e,r){t.exports={userImage:"UserItem_userImage__3Zy8w",userItem:"UserItem_userItem__Q3II6"}},104:function(t,e,r){t.exports={usersList:"UsersList_usersList__atwNM"}},114:function(t,e,r){"use strict";r.r(e);var n=r(13),a=r(0),o=r.n(a),i=r(85),c=r.n(i),u=r(86),s=r(23),l=r.n(s),f=r(32),h=r(89),p=r(90),d=Object(h.a)(function(){var t=Object(u.a)(c.a.mark((function t(e,r){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(p.a.USERS,r);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),v=r(87),m=r(31),y=r(88),g=r(5),w=r(2),E=r(12),L=r(25),_=r(14),x=r.n(_),b=r(102),N=r.n(b),O=r(95),j=function(t){var e=t.className,r=t.style,n=t.image,a=t.alt,i=t.width;Object(L.a)(t,["className","style","image","alt","width"]);return o.a.createElement("div",{className:x()(N.a.avatar,e),style:r},o.a.createElement(O.a,{src:"".concat("https://api-yourplaces.herokuapp.com","/").concat(n),type:"user",alt:a,style:{width:i,height:i}}))},S=r(103),I=r.n(S),k=function(t){var e=t.id,r=t.name,n=t.image,a=t.placeCount;return o.a.createElement("li",{className:I.a.userItem},o.a.createElement(v.a,{className:I.a.userContent},o.a.createElement(g.b,{to:Object(w.f)(E.b.USER_PLACES,{userId:e})},o.a.createElement(j,{image:n,className:I.a.userImage,alt:r}),o.a.createElement("div",{className:I.a.userInfo},o.a.createElement("h2",null,r),o.a.createElement("h3",null,a," ",1===a?"Place":"Places")))))},P=r(104),G=r.n(P),C=function(t){var e=t.items;return 0===e.length?o.a.createElement(v.a,{center:!0},o.a.createElement("h2",null,"No users found")):o.a.createElement("ul",{className:G.a.usersList},e.map((function(t){return o.a.createElement(k,{key:t.id,id:t.id,name:t.name,image:t.image,placeCount:t.places.length})})))};e.default=function(){var t=function(){var t,e=Object(f.d)("usersList",d),r=e.isLoading,n=e.data,a=e.error;return[n,r,a,null===a||void 0===a||null===(t=a.response)||void 0===t?void 0:t.data]}(),e=Object(n.a)(t,4),r=e[0],i=e[1],c=e[2],u=e[3],s=Object(y.a)().addToast;return Object(a.useEffect)((function(){c&&s("danger",u||"Something went wrong")}),[c,s]),(null===r||void 0===r?void 0:r.users)||i?i?o.a.createElement(m.a,{center:!0}):o.a.createElement(C,{items:r.users}):o.a.createElement(v.a,{center:!0},o.a.createElement("h2",null,"Users not found"))}},85:function(t,e,r){t.exports=r(93)},86:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,u,"next",t)}function u(t){n(i,a,o,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return a}))},87:function(t,e,r){"use strict";var n=r(14),a=r.n(n),o=r(0),i=r.n(o),c=r(91),u=r.n(c);e.a=function(t){var e=t.center,r=t.className,n=t.style,o=t.children,c=i.a.createElement("div",{className:a()(u.a.card,r),style:n},o);return e?i.a.createElement("div",{className:u.a.center},c):c}},88:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(0),a=r(33),o=function(){return Object(n.useContext)(a.a)}},89:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(23),a=function(t){return function(){for(var e=n.CancelToken.source(),r={cancelToken:e.token},a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];var c=t.apply(void 0,o.concat([r]));return c.cancel=function(){e.cancel("Query was cancelled")},c}}},90:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={LOGIN:"/api/users/login",SIGN_UP:"/api/users/signup",USERS:"/api/users",PLACES:"/api/places",USER_PLACES:"/api/places/user"}},91:function(t,e,r){t.exports={card:"Card_card__3G_du",center:"Card_center__2XfKQ"}},93:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var a=e&&e.prototype instanceof l?e:l,o=Object.create(a.prototype),i=new _(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return b()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var s={};function l(){}function f(){}function h(){}var p={};p[a]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(x([])));v&&v!==e&&r.call(v,a)&&(p=v);var m=h.prototype=l.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var s=u(t[a],t,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:b}}function b(){return{value:void 0,done:!0}}return f.prototype=m.constructor=h,h.constructor=f,h[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[o]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new g(c(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(m),m[i]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},95:function(t,e,r){"use strict";var n=r(25),a=r(0),o=r.n(a);e.a=function(t){var e=t.type,r=Object(n.a)(t,["type"]);return o.a.createElement("img",Object.assign({onError:function(t){"user"===e&&(t.target.src="/icons/user-placeholder.png"),e||(t.target.src="/icons/no-image.png")}},r))}}}]);
//# sourceMappingURL=5.9888d96b.chunk.js.map