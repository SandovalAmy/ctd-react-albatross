(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports={ListItem:"TodoListItem_ListItem__26qu3",text:"TodoListItem_text__3gdy9",trash:"TodoListItem_trash__18Zqn",btn:"TodoListItem_btn__2bMsw"}},function(e,t,n){e.exports={background:"About_background__1UC2o",img:"About_img__DY4jA",header:"About_header__3WtQF",p:"About_p__33Obi"}},function(e,t,n){e.exports={social:"Footer_social__3rA7E",img:"Footer_img__3cNj8",connect:"Footer_connect__2IA2t",icons:"Footer_icons__3DTJ5"}},function(e,t,n){e.exports={welcome:"Home_welcome__TDLoa",header:"Home_header__29vfa",p:"Home_p__3Zw69"}},function(e,t,n){e.exports={input:"InputWithLabel_input__2F5NO",btn:"InputWithLabel_btn__3bA4P"}},,,function(e,t,n){},,,function(e,t,n){e.exports={List:"TodoList_List__Ab8lp"}},function(e,t,n){e.exports={form:"AddTodoForm_form__2g-a0"}},,function(e,t,n){e.exports=n(27)},,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),i=n.n(o),c=n(14),l=n(10),u=n(4),s=(n(12),n(3)),m=function(){return a.a.createElement("nav",{className:"nav"},a.a.createElement("a",{href:"/",className:"site-name"},a.a.createElement(s.b,null)),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"/todolist"},"Todo List"))))},h=n(8),f=n.n(h),d=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:f.a.welcome},a.a.createElement("h2",{className:f.a.header},"Welcome to my ",a.a.createElement("br",null),a.a.createElement(s.e,null)," React.js ",a.a.createElement("br",null),"final project!"),a.a.createElement("p",{className:f.a.p},"Through Code the Dream School's React Front End Class, I learned how to build a Todo app using React. This course utilizes Road to React by Robin Wieruch as its learning material, with supplemental assignments created by curriculum developers. All of my work throughout the course was done in my GitHub repository"," ",a.a.createElement("a",{href:"https://github.com/SandovalAmy/ctd-react-albatross",target:"_blank",rel:"noopener noreferrer"},"here"),".",a.a.createElement("br",null),a.a.createElement("br",null),"To see my Todo app, click ",a.a.createElement("a",{href:"/todolist"},"here"),".")))},p=n(5),v=n.n(p),g=function(e){var t=e.todo,n=e.onRemoveTodo;return a.a.createElement("li",{className:v.a.ListItem},a.a.createElement("span",{className:v.a.text},t.title),a.a.createElement("button",{onClick:function(){return n(t.id)},className:v.a.btn},a.a.createElement(s.f,{className:v.a.trash})))},y=n(15),E=n.n(y),b=function(e){var t=e.todoList,n=e.onRemoveTodo;return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",{className:E.a.List},t.map(function(e){return a.a.createElement(g,{key:e.id,todo:e,onRemoveTodo:n})})))},_=n(6),w=n.n(_),L=function(){return a.a.createElement("div",{className:w.a.background},a.a.createElement("img",{src:"images/profile-photo-pink.jpg",alt:"profile",className:w.a.img}),a.a.createElement("h1",{className:w.a.header},"About Me"),a.a.createElement("p",{className:w.a.p},"Hi, I'm Amy! I began learning to code with Code the Dream in January 2022. Thanks to Code the Dream School, I have been able to learn HTML, CSS, JavaScript, and React.js. I am ",a.a.createElement("i",null,"breaking into tech")," because in addition to closing the gender gap, I would like to see more Latinx and queer representation.",a.a.createElement("br",null),a.a.createElement("br",null),"Pronouns: she/her"))},x=n(7),T=n.n(x),j=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:T.a.social},"Hello World!",a.a.createElement("img",{src:"images/renato-ramos-puma-S4MjllDvauE-unsplash.jpg",alt:"",className:T.a.img}),a.a.createElement("p",{className:T.a.connect},"Want to connect?"),a.a.createElement("ul",{className:T.a.icons},a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/SandovalAmy",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(s.a,null))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.linkedin.com/in/amyjensandoval/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(s.c,null))))))},N=n(9),k=n.n(N),O=function(e){var t=e.id,n=e.type,o=void 0===n?"text":n,i=e.name,c=e.placeholder,l=e.value,u=e.onChange,m=e.children,h=Object(r.useRef)(null);return Object(r.useEffect)(function(){h.current.focus()},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("label",{htmlFor:t},m),a.a.createElement("input",{className:k.a.input,ref:h,id:t,type:o,name:i,placeholder:c,value:l,onChange:u}),a.a.createElement("button",{type:"submit",className:k.a.btn},a.a.createElement(s.d,{className:k.a.plus})," Add Todo"))},A=n(16),S=n.n(A),D=function(e){var t=e.onAddTodo,n=Object(r.useState)(""),o=Object(u.a)(n,2),i=o[0],c=o[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t([{title:i,id:Date.now()}]),c("")},className:S.a.form},a.a.createElement(O,{label:"Title",id:"todoTitle",type:"text",name:"title",placeholder:"Add new todo",value:i,onChange:function(e){var t=e.target.value;c(t)}})))},F=n(17),I=n(1);function C(){C=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new L(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return T()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var s={};function m(){}function h(){}function f(){}var d={};c(d,a,function(){return this});var p=Object.getPrototypeOf,v=p&&p(p(x([])));v&&v!==t&&n.call(v,a)&&(d=v);var g=f.prototype=m.prototype=Object.create(d);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(m).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(l.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return h.prototype=f,c(g,"constructor",f),c(f,"constructor",h),h.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;w(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var R=function(){var e="https://api.airtable.com/v0/".concat("appCcjZDYi2ldu0W2","/Default?sort%5B0%5D%5Bfield%5D=Title&sort%5B0%5D%5Bdirection%5D=asc&view=Grid%20view"),t=Object(r.useState)([]),n=Object(u.a)(t,2),o=n[0],i=n[1],s=Object(r.useState)(!0),h=Object(u.a)(s,2),f=h[0],p=h[1];Object(r.useEffect)(function(){var t={method:"GET",headers:{Authorization:"Bearer ".concat("keyqRDC013ZHCgK7n")}};fetch(e,t).then(function(e){return e.json()}).then(function(e){i(e.records.map(function(e){return{title:e.fields.Title,id:e.id}})),p(!1)})},[]),Object(r.useEffect)(function(){!1===f&&p(localStorage.setItem("savedTodoList",JSON.stringify(o)))},[o]);var v=function(){var e=Object(c.a)(C().mark(function e(t){var n;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"DELETE",headers:{Authorization:"Bearer ".concat("keyqRDC013ZHCgK7n")}},e.next=3,fetch("https://api.airtable.com/v0/".concat("appCcjZDYi2ldu0W2","/Default/").concat(t),n);case 3:i(o.filter(function(e){return e.id!==t}));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(F.a,{basename:"/ctd-react-albatross"},a.a.createElement(I.c,null,a.a.createElement(I.a,{exact:!0,path:"/",element:a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null),a.a.createElement(d,null),a.a.createElement(L,null),a.a.createElement(j,null))}),a.a.createElement(I.a,{path:"/todolist",element:a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null),a.a.createElement("div",{className:"background"},a.a.createElement("h1",{className:"header"},"My Todo List"),a.a.createElement(D,{onAddTodo:function(t){var n={fields:{Title:t[0].title},typecast:!0},r={method:"POST",headers:{Authorization:"Bearer ".concat("keyqRDC013ZHCgK7n"),"Content-Type":"application/json"},body:JSON.stringify(n)},a={};fetch(e,r).then(function(e){return e.json()}).then(function(e){a.id=e.id,a.title=e.fields.Title}),i([].concat(Object(l.a)(o),Object(l.a)(t)))}}),f?a.a.createElement("p",null,"Loading ..."):a.a.createElement(b,{todoList:o,onRemoveTodo:v})))})))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(R,null)))}],[[18,1,2]]]);
//# sourceMappingURL=main.02f58219.chunk.js.map