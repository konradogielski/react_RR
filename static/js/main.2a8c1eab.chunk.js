(this.webpackJsonpsecond_app_router=this.webpackJsonpsecond_app_router||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),a=c.n(i),r=c(18),s=c.n(r),u=(c(26),c(10)),o=c(11),j=c(13),d=c(12),m=(c(27),c(4)),l=(c(28),c(2)),b=c.p+"static/media/viessmann_1.d7aa37bb.png",h=c.p+"static/media/viessmann_2.04cf9cac.png",p=c.p+"static/media/viessmann_3.7eeebc86.png",x=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(l.e,{children:[Object(n.jsx)(l.c,{path:"/",exact:!0,render:function(){return Object(n.jsx)("img",{src:h,alt:"d"})}}),Object(n.jsx)(l.c,{path:"/contact",render:function(){return Object(n.jsx)("img",{src:p,alt:"d"})}}),Object(n.jsx)(l.c,{path:"/products",render:function(){return Object(n.jsx)("img",{src:b,alt:"d"})}}),Object(n.jsx)(l.c,{path:"/admin",render:function(){return Object(n.jsx)("img",{src:p,alt:"d"})}}),Object(n.jsx)(l.c,{render:function(){return Object(n.jsx)("img",{src:b,alt:"d"})}})]})})},O=(c(37),[{name:"Home",path:"./",exact:!0},{name:"Produkty",path:"./products"},{name:"Kontakt",path:"./contact"},{name:"Panel admina",path:"./admin"}]),f=function(){var e=O.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(m.c,{exact:e.exact?e.exact:e.exact=!1,to:e.path,children:e.name})},e.name)}));return Object(n.jsx)("nav",{className:"main",children:Object(n.jsx)("ul",{children:e})})},g=c(20),v=function(e){return Object(n.jsxs)("article",{style:{marginTop:30},children:[Object(n.jsx)("h3",{style:{marginBottom:10},children:e.title}),Object(n.jsx)("small",{style:{fontSize:12},children:e.author}),Object(n.jsx)("p",{style:{marginTop:5},children:e.text})]})},y=[{id:1,title:"pierwszy tytul",author:"Janek",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem totam officia quasi distinctio et sit rerum cum reiciendis! Laborum aliquam fugit accusamus, voluptate rerum maxime numquam cum eaque quidem id maiores quaerat modi impedit facere velit eum animi architecto eligendi."},{id:2,title:"drugi tytul",author:"Janek",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem totam officia quasi distinctio et sit rerum cum reiciendis! Laborum aliquam fugit accusamus, voluptate rerum maxime numquam cum eaque quidem id maiores quaerat modi impedit facere velit eum animi architecto eligendi."},{id:3,title:"trzeci tytul",author:"Janek",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem totam officia quasi distinctio et sit rerum cum reiciendis! Laborum aliquam fugit accusamus, voluptate rerum maxime numquam cum eaque quidem id maiores quaerat modi impedit facere velit eum animi architecto eligendi."}],q=function(){var e=y.map((function(e){return Object(n.jsx)(v,Object(g.a)({},e),e.id)}));return Object(n.jsx)("div",{className:"home",children:e})},k=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:e.id})})},w=function(e){var t=e.match;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:"Strona prduktu"}),Object(n.jsx)(k,{id:t.params.id}),Object(n.jsx)(m.b,{to:"/products",children:" Powr\xf3t do strony produktow"})]})},S=["car","bike","motocycle"],z=function(){var e=S.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(m.b,{to:"/product/".concat(e),children:e})},e)}));return Object(n.jsxs)("div",{className:"products",children:[Object(n.jsx)("h2",{children:"Lista produktow"}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{children:e})})]})},L=(c(38),function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(u.a)(this,c);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={value:"",isEmpty:!1},e.handleValue=function(t){t.target.value.length>0?e.setState({value:t.target.value,isEmpty:!0}):e.setState({value:t.target.value,isEmpty:!1})},e.handleSubmit=function(t){t.preventDefault(),e.setState({value:"",isEmpty:!1})},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"contact",children:[Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsx)("h3",{children:"Napisz do nas ! "}),Object(n.jsx)("textarea",{value:this.state.value,onChange:this.handleValue,placeholder:"wpisz wiadomosc"}),Object(n.jsx)("button",{children:"WYSLIJ"})]}),Object(n.jsx)(l.a,{when:this.state.isEmpty,message:"niewypelniony formuarz czy checesz op\xf3\u015bci\u0107 strone?"})]})}}]),c}(i.Component)),R=function(){return Object(n.jsx)(l.c,{render:function(){return Object(n.jsx)(l.b,{to:"/login"})}})},_=function(){return Object(n.jsx)("h1",{children:"ERROR"})},E=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"zaloguj sie do panelu admina:"}),Object(n.jsx)("label",{htmlFor:"",children:"login"}),Object(n.jsx)("input",{type:"text"})]})},N=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(l.e,{children:[Object(n.jsx)(l.c,{path:"/",exact:!0,component:q}),Object(n.jsx)(l.c,{path:"/products",component:z}),Object(n.jsx)(l.c,{path:"/product/:id",component:w}),Object(n.jsx)(l.c,{path:"/contact",component:L}),Object(n.jsx)(l.c,{path:"/admin",component:R}),Object(n.jsx)(l.c,{path:"/login",component:E}),Object(n.jsx)(l.c,{component:_})]})})},J=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Stopka"}),Object(n.jsx)(l.c,{path:"/",exact:!0,render:function(){return Object(n.jsx)("p",{children:"jestes na stronie glowenej"})}}),Object(n.jsx)(l.c,{path:"/:page",exact:!0,render:function(e){return Object(n.jsxs)("p",{children:["jestes na stronie: ",Object(n.jsx)("span",{children:e.match.params.page})]})}})]})},F=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(u.a)(this,c);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsx)(m.a,{basename:"/react_RR",children:Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)("header",{children:Object(n.jsx)(x,{})}),Object(n.jsxs)("main",{children:[Object(n.jsx)("aside",{children:Object(n.jsx)(f,{})}),Object(n.jsx)("section",{className:"page",children:Object(n.jsx)(N,{})})]}),Object(n.jsx)("footer",{children:Object(n.jsx)(J,{})})]})})}}]),c}(i.Component);s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.2a8c1eab.chunk.js.map