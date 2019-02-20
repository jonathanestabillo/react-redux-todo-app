(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(44),r=a.n(i),c=a(2),l=a(21),s=a(51),d=a(32),m=a(5),u=a(46),p=a.n(u),h={items:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Load state from LocalStorage":var a=JSON.parse(window.localStorage.getItem("jata-state"));return a?Object(m.a)({},e,{items:a}):e;case"Saving state to Local Storage":return window.localStorage.setItem("jata-state",JSON.stringify(t.payload.state)),e;case"Add item":var n=p()(),o={value:t.payload.value,id:n,completed:!1};return Object(m.a)({},e,{items:[].concat(Object(d.a)(e.items),[o])});case"Cancel edit item":return e.items.length?Object(m.a)({},e,{editingItem:{}}):Object(m.a)({},e);case"Delete item":var i=e.items.filter(function(e){return e.id!==t.payload.id});return Object(m.a)({},e,{items:i});case"Edit item":var r=e.items.map(function(e){return e.id===t.payload.modifiedItem.id&&(e.value=t.payload.modifiedItem.value),e});return Object(m.a)({},e,{items:r,editingItem:{}});case"Item completion":var c=e.items.map(function(e){return e.id===t.payload.modifiedItem.id&&(e.completed=!e.completed),e});return Object(m.a)({},e,{items:c});case"Select edit item":var l=e.items.find(function(e){return e.id===t.payload.id});return Object(m.a)({},e,{editingItem:l});case"Reorder item":var u=Object(d.a)(e.items),f=u.splice(t.payload.initialPosition,1),E=Object(s.a)(f,1)[0];return u.splice(t.payload.newPosition,0,E),Object(m.a)({},e,{items:u});default:return e}},E=Object(c.c)({todos:f}),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(63),a(64),a(65);var g=a(6),y=a(7),I=a(9),_=a(8),N=a(10),O=(a(66),a(3)),j=a(4),w=(a(70),function(e){var t=e.className;return o.a.createElement("div",{className:t},o.a.createElement("div",{className:"header__container"},o.a.createElement("nav",{className:"navbar"},o.a.createElement("span",{className:"header__span navbar-brand"},o.a.createElement(O.a,{className:"d-inline-block",icon:j.d,size:"lg",alt:"List emoji"})),o.a.createElement("span",{className:"header__span"},"Sample React + Redux TODO App"))))}),S=a(23),C=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(I.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).state={itemValue:""},a.handleSubmitAndResetForm=function(e){return e.preventDefault(),a.props.handleAddItem(a.state.itemValue),a.setState({itemValue:""})},a.handleItemChange=function(e){return a.setState({itemValue:e.target.value})},a}return Object(N.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{method:"POST",onSubmit:this.handleSubmitAndResetForm},o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col"},o.a.createElement("input",{type:"text",className:"form-control",id:"new-todo-item",name:"new-todo-item",placeholder:"I want to do...","aria-label":"Todo item description",value:this.state.itemValue,onChange:this.handleItemChange,autoFocus:!0})),o.a.createElement("div",{className:"col-auto"},o.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!this.state.itemValue,"aria-label":"Add todo item"},o.a.createElement(O.a,{icon:j.e}))))))}}]),t}(n.Component),D=(a(71),function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(I.a)(this,Object(_.a)(t).call(this,e))).componentDidMount=function(){return window.addEventListener("keyup",a.handleKeyUp)},a.handleKeyUp=function(e){"Escape"===e.code&&a.props.handleCancelEditItem(e)},a.handleItemChange=function(e){return a.setState({itemValue:e.target.value})},a.handleEditAndResetForm=function(e){return e.preventDefault(),a.props.handleEditItem(Object(m.a)({},a.props.item,{value:a.state.itemValue})),a.setState({itemValue:""})},a.state={itemValue:e.item.value},a}return Object(N.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return o.a.createElement("li",{className:"form_edit__component list-group-item"},o.a.createElement("form",{method:"POST",onSubmit:this.handleEditAndResetForm},o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col"},o.a.createElement("input",{type:"text",className:"form-control",id:"input-edit-todo-item",name:"edit-todo-item",value:this.state.itemValue,onChange:this.handleItemChange,autoFocus:!0})),o.a.createElement("div",{className:"col-auto"},o.a.createElement("button",{type:"submit",id:"submit-edit-todo-item",className:"btn btn-primary form_edit__button--first",disabled:!this.state.itemValue},o.a.createElement(O.a,{icon:j.a})),o.a.createElement("button",{id:"cancel-edit-todo-item",type:"button",className:"btn btn-danger",onClick:this.props.handleCancelEditItem},o.a.createElement(O.a,{icon:j.g}))))))}}]),t}(n.Component)),k=(a(72),a(73),function(e){return o.a.createElement("div",{className:"property_bar__component"},o.a.createElement("button",{className:"btn btn-secondary property_bar__button",onClick:function(){return e.handleSelectEditItem(e.id)}},o.a.createElement(O.a,{icon:j.c,size:"sm"})),o.a.createElement("button",{className:"btn btn-danger property_bar__button",onClick:function(){return e.handleDeleteItem(e.id)}},o.a.createElement(O.a,{icon:j.h,size:"sm"})))}),A=function(e){return o.a.createElement("span",null,e.isCompleted?o.a.createElement(O.a,{icon:j.b,size:"2x"}):o.a.createElement(O.a,{icon:j.f,size:"2x"}))},L=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(I.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).state={displayMenu:!1},a.setDisplayMenu=function(e){a.state.displayMenu!==e&&a.setState({displayMenu:e})},a}return Object(N.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("li",{className:"form_item__component list-group-item form-control",onMouseMove:function(){return e.setDisplayMenu(!0)},onMouseLeave:function(){return e.setDisplayMenu(!1)}},o.a.createElement("div",{className:"text-truncate",onClick:function(){return e.props.handleItemCompletion(e.props.item)}},o.a.createElement("div",{className:"form_item__checkout d-inline-block"},o.a.createElement(A,{isCompleted:this.props.item.completed})),o.a.createElement("span",{className:"form_item__text"},this.props.item.value)),this.state.displayMenu?o.a.createElement(k,{id:this.props.item.id,handleSelectEditItem:this.props.handleSelectEditItem,handleDeleteItem:this.props.handleDeleteItem}):null)}}]),t}(n.Component),x=(a(74),function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(I.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).onDragEnd=function(e){e.destination&&a.props.handleReorderItem(e.source.index,e.destination.index)},a}return Object(N.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:this.props.className},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-12 col-md-9 col-lg-7 col-xl-6"},o.a.createElement("div",{className:"card text-center"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},"Welcome!"),o.a.createElement("p",{className:"card-text"},"To get started, add some items to your list:"),o.a.createElement("div",{className:"d-inline-block"},o.a.createElement(C,{handleAddItem:this.props.handleAddItem})))))),this.props.items.length?o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-12 col-md-9 col-lg-7 col-xl-6"},o.a.createElement("div",{className:"content__todos"},o.a.createElement("ul",{className:"list-group content__todos__ul"},o.a.createElement(S.a,{onDragEnd:this.onDragEnd},o.a.createElement(S.c,{droppableId:"droppable"},function(t){return o.a.createElement("div",{ref:t.innerRef},e.props.items.map(function(t,a){return o.a.createElement(S.b,{key:t.id,draggableId:t.id,index:a},function(a){return o.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps,{className:"content__todos__li"}),e.props.editingItem.id===t.id?o.a.createElement(D,{item:e.props.editingItem,handleEditItem:e.props.handleEditItem,handleCancelEditItem:e.props.handleCancelEditItem}):o.a.createElement(L,{item:t,handleDeleteItem:e.props.handleDeleteItem,handleSelectEditItem:e.props.handleSelectEditItem,handleItemCompletion:e.props.handleItemCompletion}))})}))})))))):null))}}]),t}(n.Component));x.defaultProps={items:[],editingItem:{}};var R=x,V=(a(110),function(e){var t=e.className;return o.a.createElement("div",{className:t},o.a.createElement("div",{className:"footer__container"},o.a.createElement("p",{className:"footer__p"})))}),M=function(e){return o.a.createElement("div",{className:"app__container"},o.a.createElement(w,{className:"app__header"}),o.a.createElement(R,Object.assign({},e,{className:"app__content"})),o.a.createElement(V,{className:"app__footer"}))},T=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(I.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){return a.props.handleLoadStateLocalStorage()},a.componentDidUpdate=function(){return a.props.handleSaveStateLocalStorage(a.props.items)},a.handleAddItem=function(e){return a.props.handleAddItem(e)},a.handleCancelEditItem=function(){return a.props.handleCancelEditItem()},a.handleDeleteItem=function(e){return a.props.handleDeleteItem(e)},a.handleEditItem=function(e){return a.props.handleEditItem(e)},a.handleItemCompletion=function(e){return a.props.handleItemCompletion(e)},a.handleSelectEditItem=function(e){return a.props.handleSelectEditItem(e)},a.handleReorderItem=function(e,t){return a.props.handleReorderItem(e,t)},a}return Object(N.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return o.a.createElement(M,this.props)}}]),t}(n.Component),P={handleAddItem:function(e){return{type:"Add item",payload:{value:e}}},handleCancelEditItem:function(){return{type:"Cancel edit item",payload:{}}},handleDeleteItem:function(e){return{type:"Delete item",payload:{id:e}}},handleEditItem:function(e){return{type:"Edit item",payload:{modifiedItem:e}}},handleItemCompletion:function(e){return{type:"Item completion",payload:{modifiedItem:e}}},handleSelectEditItem:function(e){return{type:"Select edit item",payload:{id:e}}},handleSaveStateLocalStorage:function(e){return{type:"Saving state to Local Storage",payload:{state:e}}},handleLoadStateLocalStorage:function(){return{type:"Load state from LocalStorage",payload:{}}},handleReorderItem:function(e,t){return{type:"Reorder item",payload:{initialPosition:e,newPosition:t}}}},F=Object(l.b)(function(e){return{items:e.todos.items,editingItem:e.todos.editingItem}},P)(T),U=Object(c.e)(E,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(o.a.createElement(l.a,{store:U},o.a.createElement(F,null)),document.getElementById("app")),function(){if("serviceWorker"in navigator){if(new URL("/react-redux-todo-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-redux-todo-app","/service-worker.js");v?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):b(e)})}}()},52:function(e,t,a){e.exports=a(111)},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.c33e6cac.chunk.js.map