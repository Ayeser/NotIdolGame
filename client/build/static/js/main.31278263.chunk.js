(this.webpackJsonpgroupproject3=this.webpackJsonpgroupproject3||[]).push([[0],{30:function(e,t,n){e.exports=n(60)},35:function(e,t,n){},36:function(e,t,n){},54:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27),c=n.n(l);function u(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function o(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function m(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)}var i=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)};var s=function(){return r.a.createElement(u,{fluid:!0},r.a.createElement(o,null,r.a.createElement(m,{size:"md-12"},r.a.createElement(i,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},E=n(9),f=n(12),d=n(7);n(35);var h=function(e){return r.a.createElement("span",Object.assign({className:"country-switch-btn"},e,{role:"button",tabIndex:"0"}))};n(36);var b=function(e){var t=e.children;return r.a.createElement("div",{className:"countryjum"},t)},g=n(14),v=n.n(g),p=function(){return v.a.get("/api/countries")},j=function(e){return v.a.get("/api/countries/"+e)},O=n(10);n(54);function N(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function y(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}function C(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function w(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function k(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var S=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)({}),s=Object(d.a)(c,2),g=s[0],v=s[1],S=Object(a.useState)({}),x=Object(d.a)(S,2),z=x[0],D=x[1];function F(e){var t=e.target,n=t.name,a=t.value;D(Object(f.a)({},z,Object(E.a)({},n,a)))}return Object(a.useEffect)((function(){p().then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(u,{fluid:!0},r.a.createElement(o,null,r.a.createElement(m,{size:"md-6 sm-12"},r.a.createElement(b,null,r.a.createElement("h1",null,"Country Name ",g.name)),n.length?r.a.createElement(N,null,n.map((function(e){return r.a.createElement(y,{key:e.name},r.a.createElement(O.b,{to:"/countries/"+e.name},r.a.createElement("strong",null,e.name)),r.a.createElement(h,{onClick:function(){return t=e.name,console.log(t),j(t).then((function(e){return v(e.data)})).catch((function(e){return console.log(e)})),void console.log(g);var t}}))}))):r.a.createElement("h3",null,"No Results to Display")),r.a.createElement(m,{size:"md-6"},r.a.createElement(i,null,r.a.createElement("h1",null,"What advice would you give about visiting this culture?")),r.a.createElement("form",null,r.a.createElement(C,{onChange:F,name:"author",placeholder:"Author (required)"}),r.a.createElement(w,{onChange:F,name:"comment",placeholder:"Comment would go here"}),r.a.createElement(k,{disabled:!(z.author&&z.title),onClick:function(e){e.preventDefault(),console.log("Form submitted!")}},"Submit Comment")))))},x=n(6);var z=function(e){var t=Object(a.useState)({}),n=Object(d.a)(t,2),l=n[0],c=n[1],s=Object(a.useState)([]),g=Object(d.a)(s,2),v=g[0],S=g[1],z=Object(a.useState)({}),D=Object(d.a)(z,2),F=D[0],A=D[1],R=Object(x.f)().name;function W(e){var t=e.target,n=t.name,a=t.value;A(Object(f.a)({},F,Object(E.a)({},n,a)))}return Object(a.useEffect)((function(){j(R).then((function(e){return c(e.data)})).catch((function(e){return console.log(e)})),console.log(R)}),[R]),Object(a.useEffect)((function(){p().then((function(e){return S(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(u,{fluid:!0},r.a.createElement(o,null,r.a.createElement(m,{size:"md-6 sm-12"},r.a.createElement(b,null,r.a.createElement("h1",null,R),r.a.createElement("img",{src:this.state.profilePicture,alt:R})),v.length?r.a.createElement(N,null,v.map((function(e){return r.a.createElement(y,{key:e.name},r.a.createElement(O.b,{to:"/countries/"+e.name},r.a.createElement("strong",null,e.name)),r.a.createElement(h,{onClick:function(){return function(e){j(e).then((function(e){return c(e.data)})).catch((function(e){return console.log(e)})),console.log(l)}(e.name)}}))}))):r.a.createElement("h3",null,"No Results to Display")),r.a.createElement(m,{size:"md-6"},r.a.createElement(i,null,r.a.createElement("h1",null,"What advice would you give about visiting this culture?")),r.a.createElement("form",null,r.a.createElement(C,{onChange:W,name:"author",placeholder:"Author (required)"}),r.a.createElement(w,{onChange:W,name:"comment",placeholder:"Comment would go here"}),r.a.createElement(k,{disabled:!(F.author&&F.title),onClick:function(e){e.preventDefault(),console.log("Form submitted!")}},"Submit Comment")))))};var D=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Culture by Country"))};var F=function(){return r.a.createElement(O.a,null,r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:["/","/country"]},r.a.createElement(S,null)),r.a.createElement(x.a,{exact:!0,path:["/countries/:name"]},r.a.createElement(z,null)),r.a.createElement(x.a,null,r.a.createElement(s,null)))))};c.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.31278263.chunk.js.map