(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(5),c=a(2),s=a(7),o=(a(14),a(1)),d=a(9),l=a.n(d),u=a(0),m=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=function(e){var t=e.todo,a=t.id,n=t.title,i=t.user,r=t.completed;return Object(u.jsxs)("article",{"data-id":a,className:l()("TodoInfo",{"TodoInfo--completed":r}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:n}),i&&Object(u.jsx)(m,{user:i})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],f=function(e,t){return t.find((function(t){return t.id===e}))||null},O=function(e){return Math.max.apply(Math,Object(r.a)(e.map((function(e){return e.id}))))+1},p=function(e){var t=e.addNewTodo,a=Object(o.useState)(""),n=Object(c.a)(a,2),i=n[0],r=n[1],s=Object(o.useState)(!1),d=Object(c.a)(s,2),l=d[0],m=d[1],j=Object(o.useState)(!1),b=Object(c.a)(j,2),f=b[0],O=b[1],p=Object(o.useState)(0),x=Object(c.a)(p,2),v=x[0],y=x[1];return Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault();var a=i.trim();m(!a),O(!v),a&&v&&(l||f||(t(i,v),r(""),y(0)))},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("input",{type:"text","data-cy":"titleInput",value:i,onChange:function(e){r(e.target.value),m(!1)},placeholder:"Enter a title"}),l&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("select",{"data-cy":"userSelect",value:v,onChange:function(e){y(+e.target.value),O(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),f&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},x=[{id:1,title:"delectus aut autem",completed:!1,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:f(e.userId,h)})})),v=function(){var e=Object(o.useState)(x),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsx)(p,{addNewTodo:function(e,t){var i={id:O(a),title:e,completed:!1,userId:t,user:f(t,h)};n((function(e){return[].concat(Object(r.a)(e),[i])}))}}),Object(u.jsx)(b,{todos:a})]})};i.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.474509ee.chunk.js.map