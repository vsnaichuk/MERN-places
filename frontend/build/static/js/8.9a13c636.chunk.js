(this["webpackJsonpmern-app"]=this["webpackJsonpmern-app"]||[]).push([[8],{101:function(e,t,a){e.exports={placeForm:"PlaceForm_placeForm__xrtE_",row:"PlaceForm_row__3-534",placeTitle:"PlaceForm_placeTitle__UAQGO"}},112:function(e,t,a){"use strict";a.r(t);var n=a(85),r=a.n(n),c=a(86),i=a(13),u=a(0),s=a.n(u),o=a(2),l=a(92),d=a(24),p=a(98),f=a(87),v=a(31),b=a(100),m=a(88),O=a(94),j=a(101),E=a.n(j);t.default=function(){var e=Object(o.i)().placeId,t=Object(m.a)().addToast,a=Object(l.c)(e),n=Object(i.a)(a,3),j=n[0],h=n[1],x=n[2],P=Object(l.e)(),_=Object(i.a)(P,4),w=_[0],y=_[1],S=_[2],L=_[3],g=Object(b.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),C=Object(i.a)(g,2),k=C[0],A=C[1];Object(u.useEffect)((function(){L&&t("success",y.message)}),[L,y]);var F=function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,w({id:e,body:{title:k.inputs.title.value,description:k.inputs.description.value}});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return 404===x?s.a.createElement(f.a,{center:!0},s.a.createElement("h2",null,"Could not find place!")):h?s.a.createElement(v.a,{center:!0}):s.a.createElement(s.a.Fragment,null,(null===j||void 0===j?void 0:j.place)&&s.a.createElement("form",{className:E.a.placeForm,onSubmit:F},(S||h)&&s.a.createElement(v.a,{asOverlay:!0}),s.a.createElement(p.a,{id:"title",el:"input",type:"text",label:"Title",errorText:"Please enter a valid name.",validators:[Object(O.c)()],onInput:A,initValue:j.place.title,initValid:!0}),s.a.createElement(p.a,{id:"description",el:"textarea",label:"Description",errorText:"Please enter a valid description (at least 5 characters).",validators:[Object(O.b)(5)],onInput:A,initValue:j.place.description,initValid:!0}),s.a.createElement(d.a,{size:"big",type:"submit",disabled:!k.isValid},"UPDATE PLACE")))}},87:function(e,t,a){"use strict";var n=a(14),r=a.n(n),c=a(0),i=a.n(c),u=a(91),s=a.n(u);t.a=function(e){var t=e.center,a=e.className,n=e.style,c=e.children,u=i.a.createElement("div",{className:r()(s.a.card,a),style:n},c);return t?i.a.createElement("div",{className:s.a.center},u):u}},91:function(e,t,a){e.exports={card:"Card_card__3G_du",center:"Card_center__2XfKQ"}},92:function(e,t,a){"use strict";a.d(t,"d",(function(){return O})),a.d(t,"c",(function(){return j})),a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return h})),a.d(t,"e",(function(){return x}));var n=a(13),r=a(85),c=a.n(r),i=a(86),u=a(23),s=a.n(u),o=a(32),l=a(89),d=a(90),p=Object(l.a)(function(){var e=Object(i.a)(c.a.mark((function e(t,a,n){var r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat(d.a.USER_PLACES,"/").concat(a),n);case 2:return r=e.sent,i=r.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()),f=Object(l.a)(function(){var e=Object(i.a)(c.a.mark((function e(t,a,n){var r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat(d.a.PLACES,"/").concat(a),n);case 2:return r=e.sent,i=r.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()),v=Object(l.a)(function(){var e=Object(i.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post(d.a.PLACES,t,a);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),b=Object(l.a)(function(){var e=Object(i.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.delete("".concat(d.a.PLACES,"/").concat(t),a);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),m=Object(l.a)(function(){var e=Object(i.a)(c.a.mark((function e(t,a){var n,r,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.body,e.next=3,s.a.patch("".concat(d.a.PLACES,"/").concat(n),r,a);case 3:return i=e.sent,u=i.data,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),O=function(e){var t,a=Object(o.d)(["userPlaces",e],p),n=a.isLoading,r=a.data,c=a.error;return[r,n,null===c||void 0===c||null===(t=c.response)||void 0===t?void 0:t.data]},j=function(e){var t,a=Object(o.d)(["userPlace",e],f),n=a.isLoading,r=a.data,c=a.error;return[r,n,null===c||void 0===c||null===(t=c.response)||void 0===t?void 0:t.status]},E=function(){var e,t=Object(o.c)(v),a=Object(n.a)(t,2),r=a[0],c=a[1],i=c.data,u=c.error,s=c.isSuccess;return[r,i,c.isLoading,s,u,null===u||void 0===u||null===(e=u.response)||void 0===e?void 0:e.data]},h=function(e){var t,a=Object(o.c)(b,{onMutate:function(t){o.b.cancelQueries(["userPlaces",e]),o.b.setQueryData(["userPlaces",e],(function(e){return e.places.filter((function(e){return e.id!==t}))}))},onSettled:function(){o.b.invalidateQueries("userPlaces")}}),r=Object(n.a)(a,2),c=r[0],i=r[1],u=i.data,s=i.error,l=i.isSuccess;return[c,u,i.isLoading,l,s,null===s||void 0===s||null===(t=s.response)||void 0===t?void 0:t.data]},x=function(){var e=Object(o.c)(m,{onSuccess:function(){o.b.invalidateQueries("userPlace")}}),t=Object(n.a)(e,2),a=t[0],r=t[1];return[a,r.data,r.isLoading,r.isSuccess]}}}]);
//# sourceMappingURL=8.9a13c636.chunk.js.map