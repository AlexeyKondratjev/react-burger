(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{101:function(e,t,n){},19:function(e,t,n){e.exports={header:"AppHeader_header__1w2x_",content:"AppHeader_content__182-B",list:"AppHeader_list__1QMOZ",link:"AppHeader_link__26-ny",link_active:"AppHeader_link_active__38wdI",personalCab:"AppHeader_personalCab__Fwkkn"}},190:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(29),s=n.n(a),i=(n(101),n(65)),o=n.n(i),l=n(19),d=n.n(l),u=n(8),j=n(0);var _=function(){return Object(j.jsx)("header",{className:d.a.header,children:Object(j.jsxs)("div",{className:d.a.content,children:[Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:d.a.list,children:[Object(j.jsx)("li",{className:"mt-4 mr-7 mb-4 ml-5",children:Object(j.jsxs)("a",{href:"#",className:"".concat(d.a.link," ").concat(d.a.link_active),children:[Object(j.jsx)(u.BurgerIcon,{type:"primary"}),Object(j.jsx)("p",{className:"text text_type_main-default ml-2",children:"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"})]})}),Object(j.jsx)("li",{className:"mt-4 mr-5 mb-4 ml-5",children:Object(j.jsxs)("a",{href:"#",className:d.a.link,children:[Object(j.jsx)(u.ListIcon,{type:"secondary"}),Object(j.jsx)("p",{className:"text text_type_main-default ml-2",children:"\u041b\u0435\u043d\u0442\u0430 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"})]})})]})}),Object(j.jsx)(u.Logo,{}),Object(j.jsx)("nav",{className:d.a.personalCab,children:Object(j.jsx)("ul",{className:d.a.list,children:Object(j.jsx)("li",{className:"mt-4 mr-5 mb-4 ml-5",children:Object(j.jsxs)("a",{href:"#",className:d.a.link,children:[Object(j.jsx)(u.ProfileIcon,{type:"secondary"}),Object(j.jsx)("p",{className:"text text_type_main-default ml-2",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})]})})})})]})})},m=n(5),b=n(20),p=n.n(b),O=n(40),x=n.n(O),h=n(18),f=n.n(h),g=(f.a.string,f.a.number,f.a.string,f.a.string,f.a.number,f.a.number,f.a.number,f.a.number,n(196)),v=n(10);var y=function(e){var t=e.data,n=e.onClick,r=Object(v.c)((function(e){return e.constructorIngredients.bun})),a=Object(v.c)((function(e){return e.constructorIngredients.stuffing})),s=Object(c.useMemo)((function(){return function(){var e=0;return"bun"===t.type?r._id===t._id&&(e=2):a.forEach((function(n){n._id===t._id&&e++})),e}}),[r,a]),i=Object(g.a)({type:"ingredients",item:t,collect:function(e){return{opacity:e.isDragging()?.3:1}}}),o=Object(m.a)(i,2),l=o[0].opacity,d=o[1];return Object(j.jsxs)("li",{className:"".concat(x.a.content," ml-2"),onClick:n,ref:d,style:{opacity:l},children:[0!==s()&&Object(j.jsx)(u.Counter,{count:s(),size:"default"}),Object(j.jsx)("img",{src:t.image,alt:t.name,className:x.a.image}),Object(j.jsxs)("div",{className:"".concat(x.a.priceGroup," mt-2 mb-2"),children:[Object(j.jsx)("p",{className:"text text_type_digits-default mr-2",children:t.price}),Object(j.jsx)(u.CurrencyIcon,{type:"primary"})]}),Object(j.jsx)("p",{className:"text text_type_main-default",children:t.name})]})},N=n(41),I=n.n(N),E=n(92),L=n.n(E);var C=function(e){var t=e.onClick;return Object(j.jsx)("div",{className:L.a.overlay,onClick:t})};var T=function(e){var t=e.children,n=e.isOpened,r=e.onClose,a=e.title,i=void 0===a?"":a;return Object(c.useEffect)((function(){var e=function(e){"Escape"===e.key&&r()};if(n)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[n]),n?s.a.createPortal(Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:I.a.modalContainer,children:[Object(j.jsxs)("div",{className:"".concat(I.a.titleButtonGroup," pt-10 pl-10 pr-10"),children:[Object(j.jsx)("h2",{className:"text text_type_main-large",children:i}),Object(j.jsx)("button",{className:"".concat(I.a.closeButton),onClick:r,children:Object(j.jsx)(u.CloseIcon,{type:"primary"})})]}),t]}),Object(j.jsx)(C,{onClick:r})]}),document.getElementById("react-modals")):null},k=n(23),D=n.n(k);var R=function(){var e=Object(v.c)((function(e){return e.viewedIngredient.ingredientData}));return Object(j.jsxs)("div",{className:D.a.content,children:[Object(j.jsx)("img",{src:e.image_large,alt:e.name,className:D.a.image}),Object(j.jsx)("h3",{className:"text text_type_main-medium mt-4",children:e.name}),Object(j.jsxs)("ul",{className:"".concat(D.a.propertiesList," mt-8"),children:[Object(j.jsxs)("li",{className:"".concat(D.a.propertiesListItem," mr-5"),children:[Object(j.jsx)("p",{className:"text text_type_main-default text_color_inactive",children:"\u041a\u0430\u043b\u043e\u0440\u0438\u0438,\xa0\u043a\u043a\u0430\u043b"}),Object(j.jsx)("p",{className:"text text_type_digits-default text_color_inactive",children:e.calories})]}),Object(j.jsxs)("li",{className:"".concat(D.a.propertiesListItem," mr-5"),children:[Object(j.jsx)("p",{className:"text text_type_main-default text_color_inactive",children:"\u0411\u0435\u043b\u043a\u0438,\xa0\u0433"}),Object(j.jsx)("p",{className:"text text_type_digits-default text_color_inactive",children:e.proteins})]}),Object(j.jsxs)("li",{className:"".concat(D.a.propertiesListItem," mr-5"),children:[Object(j.jsx)("p",{className:"text text_type_main-default text_color_inactive",children:"\u0416\u0438\u0440\u044b,\xa0\u0433"}),Object(j.jsx)("p",{className:"text text_type_digits-default text_color_inactive",children:e.fat})]}),Object(j.jsxs)("li",{className:D.a.propertiesListItem,children:[Object(j.jsx)("p",{className:"text text_type_main-default text_color_inactive",children:"\u0423\u0433\u043b\u0435\u0432\u043e\u0434\u044b,\xa0\u0433"}),Object(j.jsx)("p",{className:"text text_type_digits-default text_color_inactive",children:e.carbohydrates})]})]})]})},w=n(93),S=n.n(w),B=function(e){var t=e.color,n=void 0===t?"#3C39EC":t,c=e.size;return Object(j.jsx)("svg",{width:c,height:c,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:n,children:Object(j.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(j.jsxs)("g",{transform:"translate(1 1)",strokeWidth:"2",children:[Object(j.jsx)("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),Object(j.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:Object(j.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})})]})})})},G={small:16,medium:24,large:40,superLarge:100},A=function(e){var t=e.size,n="wrapper_"+t;return Object(j.jsx)("div",{className:S.a[n],children:Object(j.jsx)(B,{color:"#3C39EC",size:G[t]})})},M={threshold:.1};var P="GET_ALL_INGREDIENTS_REQUEST",F="GET_ALL_INGREDIENTS_SUCCESS",U="GET_ALL_INGREDIENTS_FAILED";function z(){return function(e){e({type:P}),fetch("https://norma.nomoreparties.space/api/ingredients").then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))})).then((function(t){t&&t.success?e({type:F,items:t.data}):e({type:U})}))}}var q="GET_VIEWED_INGREDIENT",H="REMOVE_VIEWED_INGREDIENT",V=n(42);var Y=function(){var e=Object(v.b)(),t=r.a.useState("bunTab"),n=Object(m.a)(t,2),a=n[0],s=n[1],i=r.a.useState(!1),o=Object(m.a)(i,2),l=o[0],d=o[1],_=Object(v.c)((function(e){return e.allIngredients})),b=_.allIngredients,O=_.allIngredientsRequest,x=Object(c.useCallback)((function(t){d(!0),e({type:q,payload:t})}),[l,e]),h=Object(c.useCallback)((function(){d(!1),e({type:H})}),[l,e]),f=function(e,t){return e.filter((function(e){return e.type===t})).map((function(e){return Object(j.jsx)(y,{data:e,onClick:function(){x(e)}},e._id)}))};Object(c.useEffect)((function(){e(z())}),[e]);var g=Object(V.a)(M),N=Object(m.a)(g,2),I=N[0],E=N[1],L=Object(V.a)(M),C=Object(m.a)(L,2),k=C[0],D=C[1],w=Object(V.a)(M),S=Object(m.a)(w,2),B=S[0],G=S[1];return Object(c.useEffect)((function(){!function(){switch(!0){case E:s("bunTab");break;case D:s("sauceTab");break;case G:s("mainTab")}}()}),[E,D,G]),Object(j.jsxs)("section",{className:p.a.section,children:[Object(j.jsx)("h1",{className:"text text_type_main-large mt-10",children:"\u0421\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0443\u0440\u0433\u0435\u0440"}),Object(j.jsxs)("div",{className:"".concat(p.a.tabs," mt-5 mb-10"),children:[Object(j.jsx)("a",{href:"#bunListItem",className:p.a.link,children:Object(j.jsx)(u.Tab,{value:"bunTab",active:"bunTab"===a,onClick:s,children:"\u0411\u0443\u043b\u043a\u0438"})}),Object(j.jsx)("a",{href:"#sauceListItem",className:p.a.link,children:Object(j.jsx)(u.Tab,{value:"sauceTab",active:"sauceTab"===a,onClick:s,children:"\u0421\u043e\u0443\u0441\u044b"})}),Object(j.jsx)("a",{href:"#mainListItem",className:p.a.link,children:Object(j.jsx)(u.Tab,{value:"mainTab",active:"mainTab"===a,onClick:s,children:"\u041d\u0430\u0447\u0438\u043d\u043a\u0438"})})]}),O?Object(j.jsx)(A,{size:"superLarge"}):Object(j.jsxs)("ul",{className:p.a.categoryList,children:[Object(j.jsxs)("li",{id:"bunListItem",ref:I,children:[Object(j.jsx)("h2",{className:"text text_type_main-medium",children:"\u0411\u0443\u043b\u043a\u0438"}),Object(j.jsx)("ul",{className:"".concat(p.a.ingredientsList," mt-6 mb-10"),children:f(b,"bun")})]}),Object(j.jsxs)("li",{id:"sauceListItem",ref:k,children:[Object(j.jsx)("h2",{className:"text text_type_main-medium",children:"\u0421\u043e\u0443\u0441\u044b"}),Object(j.jsx)("ul",{className:"".concat(p.a.ingredientsList," mt-6 mb-10"),children:f(b,"sauce")})]}),Object(j.jsxs)("li",{id:"mainListItem",ref:B,children:[Object(j.jsx)("h2",{className:"text text_type_main-medium",children:"\u041d\u0430\u0447\u0438\u043d\u043a\u0438"}),Object(j.jsx)("ul",{className:"".concat(p.a.ingredientsList," mt-6 mb-10"),children:f(b,"main")})]})]}),Object(j.jsx)(T,{title:"\u0414\u0435\u0442\u0430\u043b\u0438 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u0430",isOpened:l,onClose:function(){h()},children:Object(j.jsx)(R,{})})]})},J=n(6),Q=n(17),X=n(21),K=n.n(X),W=n(68),Z=n.n(W),$=n(197),ee="ADD_BUN_TO_CONSTRUCTOR",te="ADD_STUFFING_ELEMENT_TO_CONSTRUCTOR",ne="DELETE_STUFFING_ELEMENT_FROM_CONSTRUCTOR",ce="REORDER_STUFFING_ELEMENTS",re="CONSTRUCTOR_CLEANUP";var ae=function(e){var t=e.data,n=e.index,r=Object(v.b)(),a=t.id,s=Object(c.useRef)(null),i=Object(g.a)({type:"ingredient",item:{id:a,index:n},collect:function(e){return{opacity:e.isDragging()?.3:1}}}),o=Object(m.a)(i,2),l=o[0].opacity,d=o[1],_=Object($.a)({accept:"ingredient",hover:function(e){if(s.current){var t=e.index,c=n;r({type:ce,dragIndex:t,dropIndex:c}),e.index=c}},collect:function(e){return{isHover:e.isOver()}}}),b=Object(m.a)(_,2),p=b[0].isHover;return d((0,b[1])(s)),Object(j.jsxs)("li",{className:"".concat(Z.a.listItem," ").concat(p?Z.a.hoveredItem:""," mb-4 mr-2"),ref:s,style:{opacity:l},children:[Object(j.jsx)(u.DragIcon,{type:"primary"}),Object(j.jsx)(u.ConstructorElement,{text:t.name,price:t.price,thumbnail:t.image,handleClose:function(){return function(e){r({type:ne,id:e})}(a)}})]})},se=n(43),ie=n.n(se);var oe=function(e){var t=e.orderId,n=e.orderStatus,c=e.orderInfoMessage;return Object(j.jsxs)("div",{className:ie.a.content,children:[Object(j.jsx)("h3",{className:"".concat(ie.a.header," text text_type_digits-large mt-4"),children:t}),Object(j.jsx)("p",{className:"text text_type_main-medium mt-8",children:"\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u043a\u0430\u0437\u0430"}),Object(j.jsx)("div",{className:"".concat(ie.a.image," mt-15")}),Object(j.jsx)("p",{className:"text text_type_main-default mt-15",children:n}),Object(j.jsx)("p",{className:"text text_type_main-default text_color_inactive mt-2 mb-30",children:c})]})},le="GET_ORDER_DATA_REQUEST",de="GET_ORDER_DATA_SUCCESS",ue="GET_ORDER_DATA_FAILED";function je(e){return function(t){t({type:le}),function(e){return fetch("https://norma.nomoreparties.space/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}))}(e).then((function(e){return t({type:de,payload:e})})).catch((function(e){console.log(e),t({type:ue})}))}}var _e=function(){var e=Object(v.b)(),t=Object(c.useState)(!1),n=Object(m.a)(t,2),r=n[0],a=n[1],s=Object(v.c)((function(e){return e.constructorIngredients.bun})),i=Object(v.c)((function(e){return e.constructorIngredients.stuffing})),o=Object(c.useMemo)((function(){return[s].concat(Object(Q.a)(i),[s]).map((function(e){return e?e._id:""}))}),[s,i]),l=Object(v.c)((function(e){return e.orderData})),d=l.orderData,_=l.orderDataRequest,b=Object(c.useMemo)((function(){return(Object.keys(s).length>0?2*s.price:0)+i.reduce((function(e,t){return e+t.price}),0)}),[s,i]),p=Object($.a)({accept:"ingredients",drop:function(t){"bun"===t.type?e({type:ee,payload:t}):e({type:te,payload:Object(J.a)(Object(J.a)({},t),{},{id:Math.random().toString().slice(2)})})},collect:function(e){return{isHover:e.isOver()}}}),O=Object(m.a)(p,2),x=O[0].isHover,h=O[1],f=i&&i.length>=5?"chosenPositionsList_overflowY_scroll":"chosenPositionsList_overflowY_hidden";return Object(j.jsxs)("div",{className:"".concat(K.a.section," pt-25"),children:[Object(j.jsxs)("ul",{className:"".concat(K.a.positionsList," ").concat(x?K.a.hoveredList:""),ref:h,children:[Object(j.jsx)("li",{className:"".concat(K.a.lockedPosition," ml-8 mr-4 mb-4"),children:Object.keys(s).length>0&&Object(j.jsx)(u.ConstructorElement,{type:"top",isLocked:!0,text:"".concat(s.name," (\u0432\u0435\u0440\u0445)"),price:s.price,thumbnail:s.image},s._id)}),Object(j.jsx)("li",{children:Object(j.jsx)("ul",{className:"".concat(K.a.chosenPositionsList," ").concat(K.a[f]),children:i&&i.map((function(e,t){return Object(j.jsx)(ae,{data:e,index:t},e.id)}))})}),Object(j.jsx)("li",{className:"".concat(K.a.lockedPosition," mt-4 ml-8 mr-4"),children:Object.keys(s).length>0&&Object(j.jsx)(u.ConstructorElement,{type:"bottom",isLocked:!0,text:"".concat(s.name," (\u043d\u0438\u0437)"),price:s.price,thumbnail:s.image},s._id)})]}),Object(j.jsxs)("div",{className:"".concat(K.a.infoGroup," mt-10 mr-4"),children:[Object(j.jsxs)("div",{className:"".concat(K.a.priceGroup," mr-10"),children:[Object(j.jsx)("p",{className:"text text_type_digits-medium mr-5",children:b}),Object(j.jsx)(u.CurrencyIcon,{type:"primary"})]}),Object(j.jsx)(u.Button,{type:"primary",size:"large",disabled:!(Object.keys(s).length>0|Object.keys(i).length>0),onClick:function(){var t;t=o,a(!0),e(je(t))},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),Object(j.jsx)(T,{isOpened:r,onClose:function(){a(!1),d.success&&e({type:re})},children:_?Object(j.jsx)(A,{size:"superLarge"}):d.success?Object(j.jsx)(oe,{orderId:d.order.number.toString(),orderStatus:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043d\u0430\u0447\u0430\u043b\u0438 \u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c",orderInfoMessage:"\u0414\u043e\u0436\u0434\u0438\u0442\u0435\u0441\u044c \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u043e\u0440\u0431\u0438\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0430\u043d\u0446\u0438\u0438"}):Object(j.jsx)(oe,{orderId:"",orderStatus:"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",orderInfoMessage:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \u043f\u043e\u0437\u0436\u0435"})})]})]})},me=n(195),be=n(95);function pe(){return Object(j.jsxs)("div",{className:o.a.page,children:[Object(j.jsx)(_,{}),Object(j.jsx)(me.a,{backend:be.a,children:Object(j.jsxs)("main",{className:o.a.main,children:[Object(j.jsx)(Y,{}),Object(j.jsx)(_e,{})]})})]})}var Oe=n(22),xe=n(94),he={allIngredients:[],allIngredientsRequest:!1,allIngredientsFailed:!1},fe={bun:{},stuffing:[]},ge={ingredientData:{}},ve={orderData:{name:"",order:{number:null},success:!1},orderDataRequest:!1},ye=Object(Oe.b)({allIngredients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(J.a)(Object(J.a)({},e),{},{allIngredientsRequest:!0});case F:return Object(J.a)(Object(J.a)({},e),{},{allIngredientsRequest:!1,allIngredientsFailed:!1,allIngredients:t.items});case U:return Object(J.a)(Object(J.a)({},e),{},{allIngredientsRequest:!1,allIngredientsFailed:!0});default:return e}},constructorIngredients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(J.a)(Object(J.a)({},e),{},{bun:t.payload});case te:return Object(J.a)(Object(J.a)({},e),{},{stuffing:[].concat(Object(Q.a)(e.stuffing),[t.payload])});case ne:return Object(J.a)(Object(J.a)({},e),{},{stuffing:Object(Q.a)(e.stuffing).filter((function(e){return e.id!==t.id}))});case ce:var n=Object(Q.a)(e.stuffing);return n.splice(t.dragIndex,0,n.splice(t.dropIndex,1)[0]),Object(J.a)(Object(J.a)({},e),{},{stuffing:n});case re:return fe;default:return e}},viewedIngredient:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return{ingredientData:t.payload};case H:return ge;default:return e}},orderData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return Object(J.a)(Object(J.a)({},e),{},{orderDataRequest:!0});case de:return Object(J.a)(Object(J.a)({},e),{},{orderDataRequest:!1,orderData:t.payload});case ue:return ve;default:return e}}}),Ne=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Oe.c)(Object(Oe.a)(xe.a)),Ie=Object(Oe.d)(ye,Ne);s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v.a,{store:Ie,children:Object(j.jsx)(pe,{})})}),document.getElementById("root"))},20:function(e,t,n){e.exports={section:"BurgerIngredients_section__rc4KB",tabs:"BurgerIngredients_tabs__2hjFG",link:"BurgerIngredients_link__1E9e9",categoryList:"BurgerIngredients_categoryList__17zy_",ingredientsList:"BurgerIngredients_ingredientsList__q4bP7"}},21:function(e,t,n){e.exports={section:"BurgerConstructor_section__1fTRd",positionsList:"BurgerConstructor_positionsList__3EIZl",hoveredList:"BurgerConstructor_hoveredList__wgO8l",lockedPosition:"BurgerConstructor_lockedPosition__1gK-r",chosenPositionsList:"BurgerConstructor_chosenPositionsList__2DB1h",chosenPositionsList_overflowY_scroll:"BurgerConstructor_chosenPositionsList_overflowY_scroll__IV9LI",chosenPositionsList_overflowY_hidden:"BurgerConstructor_chosenPositionsList_overflowY_hidden__3y7d-",infoGroup:"BurgerConstructor_infoGroup__kBo-o",priceGroup:"BurgerConstructor_priceGroup__1rqyS"}},23:function(e,t,n){e.exports={content:"IngredientDetails_content__1Qe9B",image:"IngredientDetails_image__VTrN3",propertiesList:"IngredientDetails_propertiesList__2tsBn",propertiesListItem:"IngredientDetails_propertiesListItem__3cPGv"}},40:function(e,t,n){e.exports={content:"Ingredient_content__ToxGT",image:"Ingredient_image__JcbXo",priceGroup:"Ingredient_priceGroup__1m-_n"}},41:function(e,t,n){e.exports={modalContainer:"Modal_modalContainer__3vzLN",titleButtonGroup:"Modal_titleButtonGroup__7CBVz",closeButton:"Modal_closeButton__3JRA0"}},43:function(e,t,n){e.exports={content:"OrderDetails_content__E2x48",header:"OrderDetails_header__rQ-ME",image:"OrderDetails_image__1SZ6-"}},65:function(e,t,n){e.exports={page:"App_page__j3H6w",main:"App_main__2x994"}},68:function(e,t,n){e.exports={listItem:"BurgerConstructorItem_listItem__1abez",hoveredItem:"BurgerConstructorItem_hoveredItem__2OOO4"}},92:function(e,t,n){e.exports={overlay:"ModalOverlay_overlay__1GF0D"}},93:function(e,t,n){e.exports={superLarge:"Loader_superLarge__7ueN4",large:"Loader_large__3fR2z",medium:"Loader_medium__1-fIK",small:"Loader_small__3lcu4",wrapper_superLarge:"Loader_wrapper_superLarge__2Rl7u",wrapper_large:"Loader_wrapper_large__sDRIM",wrapper_medium:"Loader_wrapper_medium__1TGPs",wrapper_small:"Loader_wrapper_small__FMgAb"}}},[[190,1,2]]]);
//# sourceMappingURL=main.06137dee.chunk.js.map