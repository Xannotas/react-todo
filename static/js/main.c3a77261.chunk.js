(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"colors":["gray","green","blue","pink","light_green","purple","orange","red"]}')},16:function(e,t,l){e.exports=l.p+"static/media/list.244e2000.svg"},17:function(e,t,l){e.exports=l(30)},28:function(e,t,l){},29:function(e,t,l){},30:function(e,t,l){"use strict";l.r(t);var o=l(0),r=l.n(o),n=l(7),a=l.n(n),c=l(2),d=(l(28),l(29),l(3)),s=l(4),i=l.n(s),u=l(16),m=l.n(u),f=l(13),b=function(e){var t=e.onBlur,l=e.value,o=e.className,n=e.placeholder,a=void 0===n?"...":n,c=e.onSubmit,d=e.setValue,s=e.maxLenght,u=void 0===s?50:s;return r.a.createElement("input",{autoFocus:!0,placeholder:a,className:i()("input",o),value:l,onChange:function(e){var t=e.currentTarget.value;t.length<=u&&d(t)},onBlur:t,onKeyDown:function(e){"Enter"===e.key&&c()}})},E=Object(c.b)(null,{addFolder:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";return{type:"FOLDER:ADD",title:e,colorName:t}}})((function(e){var t=e.hideFormFolderCreactor,l=e.addFolder,n=Object(o.useState)(""),a=Object(d.a)(n,2),c=a[0],s=a[1],u=Object(o.useState)(0),m=Object(d.a)(u,2),E=m[0],O=m[1],h=function(){c.length>0&&c.length<=30&&(l(c,f.colors[E]),s(""),t())},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){O(e)}};return r.a.createElement("div",{className:"sidebar__create-folder-form"},r.a.createElement("button",{className:"btn btn-close",onClick:t},"\xd7"),r.a.createElement(b,{value:c,setValue:s,maxLenght:30,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438",onSubmit:h}),r.a.createElement("div",{className:"sidebar-colors"},f.colors.map((function(e,t){return r.a.createElement("button",{key:e,onClick:F(t),className:i()("sidebar-colors__item","color-"+e,{active:E===t})})}))),r.a.createElement("button",{className:"btn btn-submit w100",onClick:h},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))})),O=function(e){var t=e.title,l=e.color,o=e.id,n=e.currentFolderId,a=e.setFolderId,c=e.deleteFolder,d=e.isShowAllFolders;return r.a.createElement("div",{className:"sidebar-content__item-wrapper"},r.a.createElement("div",{className:i()("sidebar-content__item",{active:n===o&&!d}),onClick:function(){o!==n&&a(o)}},r.a.createElement("i",{className:i()("sidebar-content__item-color","color-".concat(l))}),r.a.createElement("span",{className:"sidebar-content__item-title"},t)),r.a.createElement("button",{className:"btn btn-remove d-none",onClick:function(){c(o)}},"\xd7"))},h=Object(c.b)((function(e){return{folders:e.folders,currentFolderId:e.currentFolderId,isShowAllFolders:e.isShowAllFolders}}),{setFolderId:function(e){return{type:"FOLDER:SET-ID",id:e}},deleteFolder:function(e){return{type:"FODLER:DELETE",folderId:e}},showAllFolders:function(){return{type:"SHOW-ALL-FOLDERS:ON"}}})((function(e){var t=e.setFolderId,l=e.folders,n=e.currentFolderId,a=e.deleteFolder,c=e.showAllFolders,s=e.isShowAllFolders,u=Object(o.useState)(!1),f=Object(d.a)(u,2),b=f[0],h=f[1];return r.a.createElement("aside",{className:"sidebar"},r.a.createElement("div",{className:"sidebar-content"},l.length>1&&r.a.createElement("div",{className:i()("sidebar-content__item","sidebar-content__item-all-todos",{active:s}),onClick:function(){c()}},r.a.createElement("i",{className:"sidebar-content__item-img"}," ",r.a.createElement("img",{src:m.a,alt:"list"})," "),r.a.createElement("span",{className:"sidebar-content__item-title"},"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438")),l.map((function(e){return r.a.createElement(O,{key:e.id,deleteFolder:a,title:e.title,color:e.color,id:e.id,setFolderId:t,currentFolderId:n,isShowAllFolders:s})}))),r.a.createElement("div",{className:"sidebar__create-folder"},r.a.createElement("button",{className:"btn sidebar__create-folder-btn",onClick:function(){h(!0)}},r.a.createElement("i",null,"+")," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u041f\u0430\u043f\u043a\u0443"),b&&r.a.createElement(E,{hideFormFolderCreactor:function(){h(!1)}})))})),F=function(e,t){return e.indexOf(e.find((function(e){return e.id===t})))},p=Object(c.b)(null,{compliteTodo:function(e,t){return{type:"TODO:COMPLITE",folderId:e,todoId:t}},deleleTodo:function(e,t){return{type:"TODO:DELETE",folderId:e,todoId:t}}})((function(e){var t=e.folderId,l=e.todoId,o=e.complited,n=e.text,a=e.compliteTodo,c=e.deleleTodo;return r.a.createElement("div",{className:"todo-item"},r.a.createElement("label",{className:"todo-item-content"},r.a.createElement("input",{type:"checkbox",checked:o,onChange:function(){a(t,l)}}),r.a.createElement("span",{className:"checkbox"},r.a.createElement("svg",{width:"11",height:"8",viewBox:"0 0 11 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))),r.a.createElement("span",{className:"todo-item-content__text"},n)),r.a.createElement("button",{className:"btn btn-remove",onClick:function(){c(t,l)}},"\xd7"))})),I=function(e){var t=e.todos,l=e.title,n=e.color,a=e.folderId,c=e.setFolderTitle,s=Object(o.useState)(!1),u=Object(d.a)(s,2),m=u[0],f=u[1],E=Object(o.useState)(l),O=Object(d.a)(E,2),h=O[0],F=O[1],I=i()("content-folder__title","color-".concat(n));Object(o.useEffect)((function(){F(l)}),[l]);var g=function(){(f(!1),h!==l&&h.length<=30)&&c(a,""===h?"\u0411\u0435\u0437 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f":h)};return r.a.createElement("div",{className:"content-folder"},m?r.a.createElement(b,{className:I,onBlur:g,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438",onSubmit:g,value:h,setValue:F}):r.a.createElement("h3",{onClick:function(){"\u0411\u0435\u0437 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f"===h&&F(""),f(!0)},className:I},r.a.createElement("span",null,l),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 383.947 383.947",width:"20px",height:"20px",fill:"#DFDFDF"},r.a.createElement("g",null,r.a.createElement("polygon",{points:"0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893"}),r.a.createElement("path",{d:"M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04 C386.027,77.92,386.027,64.373,377.707,56.053z"})))),r.a.createElement("div",{className:"hr"}),t.length>0&&r.a.createElement("div",{className:"content-folder__todos"},t.map((function(e){return r.a.createElement(p,{key:a+"_"+e.id,folderId:a,text:e.text,todoId:e.id,complited:e.complited})}))))},g=function(e){var t=e.hideTodoForm,l=e.addTodo,n=e.folderId,a=Object(o.useState)(""),c=Object(d.a)(a,2),s=c[0],i=c[1],u=function(){s.length>0&&s.length<=50&&(l(n,s),i(""))};return r.a.createElement("div",{className:"content-todo-form"},r.a.createElement(b,{placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438",onSubmit:u,value:s,setValue:i,maxLenght:50}),r.a.createElement("button",{className:"btn btn-submit",onClick:u},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0417\u0430\u0434\u0430\u0447\u0443"),r.a.createElement("button",{className:"btn btn-cancel",onClick:t},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"))},v=Object(c.b)((function(e){return{folders:e.folders,currentFolderId:e.currentFolderId,isShowAllFolders:e.isShowAllFolders}}),{addTodo:function(e,t){return{type:"TODO:ADD",folderId:e,text:t}},setFolderTitle:function(e,t){return{type:"FOLDER:SET-TITLE",folderId:e,folderTitle:t}}})((function(e){var t=e.addTodo,l=e.folders,n=e.currentFolderId,a=e.isShowAllFolders,c=e.setFolderTitle,s=Object(o.useState)(!1),i=Object(d.a)(s,2),u=i[0],m=i[1],f=F(l,n);return r.a.createElement("main",{className:"content"},l.length?r.a.createElement("div",{className:"content-folder"},a||f<0?l.map((function(e){return 0===e.todos.length?null:r.a.createElement(I,{key:e.id,todos:e.todos,color:e.color,title:e.title,folderId:e.id,setFolderTitle:c})})):r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{todos:l[f].todos,color:l[f].color,title:l[f].title,folderId:l[f].id,setFolderTitle:c}),u?r.a.createElement(g,{hideTodoForm:function(){m(!1)},addTodo:t,folderId:f}):r.a.createElement("button",{className:"btn content-folder__add-btn",onClick:function(){m(!0)}},r.a.createElement("i",null,"+"),"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"))):r.a.createElement("p",{className:"content__empty"},"\u0417\u0430\u0434\u0430\u0447\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"))})),S=Object(c.b)((function(e){return{folders:e.folders,currentFolderId:e.currentFolderId,isShowAllFolders:e.isShowAllFolders}}))((function(e){var t=e.folders,l=e.currentFolderId,n=e.isShowAllFolders;return Object(o.useEffect)((function(){localStorage.setItem("folders",JSON.stringify(t))}),[t]),Object(o.useEffect)((function(){localStorage.setItem("currentFolderId",null!==l?l.toString():"")}),[l]),Object(o.useEffect)((function(){localStorage.setItem("isShowAllFolders",n?"true":"false")}),[n]),r.a.createElement("div",{className:"app"},r.a.createElement(h,null),r.a.createElement(v,null))})),N=l(8),_=l(6),j=l(1),w={folders:localStorage.getItem("folders")?JSON.parse(localStorage.getItem("folders")):[],currentFolderId:""!==localStorage.getItem("currentFolderId")?Number(localStorage.getItem("currentFolderId")):null,isShowAllFolders:"true"===localStorage.getItem("isShowAllFolders")},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLDER:ADD":var l=e.folders.length,o={id:l?e.folders[l-1].id+1:0,color:t.colorName,title:t.title,todos:[]};return Object(j.a)(Object(j.a)({},e),{},{folders:[].concat(Object(_.a)(e.folders),[o]),currentFolderId:o.id,isShowAllFolders:!e.folders.length&&!1});case"TODO:ADD":var r={id:e.folders[t.folderId].todos.length,text:t.text,complited:!1},n=Object(j.a)(Object(j.a)({},e),{},{folders:Object(_.a)(e.folders)});return n.folders[t.folderId].todos.push(r),n;case"FOLDER:SET-ID":return Object(j.a)(Object(j.a)({},e),{},{currentFolderId:t.id,isShowAllFolders:!1});case"TODO:COMPLITE":var a=Object(j.a)(Object(j.a)({},e),{},{folders:Object(_.a)(e.folders)}),c=F(e.folders,t.folderId);return a.folders[c].todos.map((function(e){return e.id===t.todoId?e.complited=!e.complited:e})),a;case"TODO:DELETE":var d=Object(j.a)(Object(j.a)({},e),{},{folders:Object(_.a)(e.folders)}),s=e.folders[t.folderId].todos.filter((function(e){return e.id!==t.todoId}));return d.folders[t.folderId].todos=s,d;case"FODLER:DELETE":var i=null;if(e.folders.length<2)i=null;else{var u=F(e.folders,t.folderId);i=e.folders[u-1]?e.folders[u-1].id:0}return Object(j.a)(Object(j.a)({},e),{},{folders:e.folders.length>1?e.folders.filter((function(e){return e.id!==t.folderId})):[],currentFolderId:i,isShowAllFolders:null===i});case"SHOW-ALL-FOLDERS:ON":return Object(j.a)(Object(j.a)({},e),{},{isShowAllFolders:!0,currentFolderId:null});case"FOLDER:SET-TITLE":return Object(j.a)(Object(j.a)({},e),{},{folders:e.folders.map((function(e){return e.id===t.folderId?Object(j.a)(Object(j.a)({},e),{},{title:t.folderTitle}):e}))});default:return e}},D=Object(N.b)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());window._state=D.getState();var L=D;a.a.render(r.a.createElement(c.a,{store:L},r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null))),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c3a77261.chunk.js.map