(this["webpackJsonpema-john_react"]=this["webpackJsonpema-john_react"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){"use strict";c.r(t);var r=c(4),n=c.n(r),s=c(53),a=c.n(s),i=(c(63),c(13)),o=c(11),j=(c(64),c(12)),l=c(22),u=c.n(l),d=c(0),b=c.n(d),h=c(3),O=c(19),p=c(21),x=function(){var e=Object(h.a)(b.a.mark((function e(){var t,c,r,n,s,a,i,o,j,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("shopping-cart")){e.next=3;break}return e.abrupt("return",[]);case 3:return c=JSON.parse(t),r=Object.keys(c),e.next=8,u.a.post("https://ema-john-srt.herokuapp.com/products/byID",r);case 8:n=e.sent,s=n.data,a=[],i=Object(O.a)(s);try{for(i.s();!(o=i.n()).done;)for(j=o.value,l=0;l<c[j._id];l++)a.push(j)}catch(d){i.e(d)}finally{i.f()}return e.abrupt("return",a);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function m(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(0),a=Object(j.a)(s,2),i=a[0],o=a[1],l=Object(r.useState)([]),d=Object(j.a)(l,2),O=d[0],m=d[1],f=Object(r.useState)(null),g=Object(j.a)(f,2),v=g[0],y=g[1];function N(){v?u.a.get("https://ema-john-srt.herokuapp.com/products/search?name=".concat(v,"&&page=").concat(c,"&&itemsOnPage=").concat(10)).then((function(e){var t=e.data;m(t.products),o(t.totalPage)})):u.a.get("https://ema-john-srt.herokuapp.com/?page=".concat(c,"&&itemsOnPage=").concat(10)).then((function(e){var t=e.data;m(t.products),o(t.totalPage)}))}Object(r.useEffect)(N,[c,v]);var C=Object(r.useState)([]),S=Object(j.a)(C,2),k=S[0],w=S[1];function P(){return(P=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,w(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){return function(){return P.apply(this,arguments)}()}),[]);return{page:c,setPage:n,totalPage:i,setSearchedText:y,products:O,setProducts:m,cart:k,setCart:w,addToCart:function(e){return function(e,t,c){var r=[].concat(Object(p.a)(t),[e]);c(r);var n=r.map((function(e){return e._id})),s=localStorage.getItem("shopping-cart")?JSON.parse(localStorage.getItem("shopping-cart")):{};n.forEach((function(e){s[e]=n.filter((function(t){return t===e})).length})),localStorage.setItem("shopping-cart",JSON.stringify(s))}(e,k,w)},getProducts:N}}var f=c(1),g=Object(r.createContext)(),v=function(e){var t=e.children,c=m();return Object(f.jsx)(g.Provider,{value:c,children:t})},y=(c(84),function(e){var t=e.method,c=Object(r.useContext)(g).getProducts,n=Object(o.i)().id,s=Object(r.useState)({}),a=Object(j.a)(s,2),i=a[0],l=a[1],d=i.name,b=i.seller,h=i.price,O=i.stock,p=i.category,x=i.star,m=i.starCount;Object(r.useEffect)((function(){u()("https://ema-john-srt.herokuapp.com/product/".concat(n)).then((function(e){var t=e.data;return l(t)})).catch(console.dir)}),[n]);var v={name:Object(r.useRef)(),seller:Object(r.useRef)(),stock:Object(r.useRef)(),category:Object(r.useRef)(),star:Object(r.useRef)(),starCount:Object(r.useRef)(),price:Object(r.useRef)()};return Object(f.jsxs)("div",{className:"product-update",children:[Object(f.jsxs)("h1",{className:"heading",children:[t," product"]}),Object(f.jsxs)("h5",{children:["Product id: ",n]}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={};Object.keys(v).forEach((function(e){t[e]=v[e].current.value})),u.a.post("https://ema-john-srt.herokuapp.com/product/update/".concat(n),t).then((function(e){return e.data.modifiedCount>0&&alert("Updated")})).then((function(){return c()}))},className:"product-edit-form",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Name"}),Object(f.jsx)("input",{type:"text",ref:v.name,defaultValue:d,required:!0})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Seller"}),Object(f.jsx)("input",{type:"text",ref:v.seller,defaultValue:b,required:!0})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Price"}),Object(f.jsx)("input",{type:"number",ref:v.price,defaultValue:h,step:.01,required:!0})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"In stock"}),Object(f.jsx)("input",{type:"number",ref:v.stock,defaultValue:O,required:!0})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Category"}),Object(f.jsx)("input",{type:"text",ref:v.category,defaultValue:p,required:!0})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Rating"}),Object(f.jsx)("input",{type:"number",ref:v.star,defaultValue:x,max:5,min:0,step:.1,required:!0})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Rated by"}),Object(f.jsx)("input",{type:"number",ref:v.starCount,defaultValue:m,required:!0})]}),"Edit"===t&&Object(f.jsx)("input",{type:"submit",value:"Update",className:"primary-button"})]})]})}),N=c(23),C=c(56),S={apiKey:"AIzaSyAxZNe0t6WrleQXcgb7_lrh8Uq2eBiAWuE",authDomain:"ema-john-srt.firebaseapp.com",projectId:"ema-john-srt",storageBucket:"ema-john-srt.appspot.com",messagingSenderId:"788243960256",appId:"1:788243960256:web:8fa2c7c0d9c18ca2003825"},k=c(42),w=function(e){var t=new k.a;return Object(k.b)(e,t)},P=function(e,t,c,r){return Object(N.b)(e,c,r).then((function(){return Object(N.h)(e.currentUser,{displayName:t})}))};Object(C.a)(S);var E=Object(N.c)(),I=function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(!0),a=Object(j.a)(s,2),i=a[0],o=a[1],l=Object(r.useState)(null),u=Object(j.a)(l,2),d=u[0],b=u[1];Object(N.d)(E,(function(e){e?n(e):c&&n(null),c&&b(null),i&&o(!1)}));return{user:c,setUser:n,error:d,setError:b,userLoading:i,googleLogin:function(){return w(E).catch((function(e){return b(e)}))},logout:function(){return Object(N.g)(E).catch((function(e){return b(e)}))},signup:function(e,t,c){return P(E,e,t,c).catch((function(e){return b(e)}))},emailLogin:function(e,t){return Object(N.e)(E,e,t).catch((function(e){return b(e)}))}}},R=Object(r.createContext)(),L=function(e){var t=e.children,c=I();return Object(f.jsx)(R.Provider,{value:c,children:t})},F=(c(92),function(){var e,t=Object(r.useContext)(R),c=t.user,n=t.emailLogin,s=t.googleLogin,a=t.error,j=t.setError;Object(r.useEffect)((function(){return j(null)}),[j]);var l=Object(o.g)(),u=(null===(e=Object(o.h)().state)||void 0===e?void 0:e.from.pathname)||"/profile";c&&l.push(u);var d={email:Object(r.useRef)(),password:Object(r.useRef)()};return Object(f.jsxs)("div",{className:"login-container",children:[Object(f.jsx)("h1",{children:"Login"}),"/profile"!==u&&Object(f.jsxs)("h4",{children:["Login first to visit ",u.slice(1,u.length).toUpperCase()," page"]}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=d.email,c=d.password;c.current.value.length>5?n(t.current.value,c.current.value):j({message:"Password must be at least 6 characters long"})},className:"primary-form",children:[a&&Object(f.jsx)("h5",{className:"firebase-error",children:a.message}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Email"}),Object(f.jsx)("input",{type:"email",ref:d.email,required:!0})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Password"}),Object(f.jsx)("input",{type:"password",ref:d.password,required:!0})]}),Object(f.jsx)("input",{type:"submit",value:"Sign up",className:"primary-button"})]}),Object(f.jsxs)("div",{className:"login-buttons-container",children:[Object(f.jsx)("h5",{children:"Sign in with"}),Object(f.jsx)("button",{className:"login-button primary-button",onClick:s,children:Object(f.jsx)("i",{class:"fab fa-google"})})]}),Object(f.jsxs)("h4",{style:{marginTop:"40px"},children:["Don't have account? ",Object(f.jsx)(i.b,{to:"/signup",children:"Sign up"})]})]})}),q=c(43),T=c(58),A=["children"],D=function(e){var t=e.children,c=Object(T.a)(e,A),n=Object(r.useContext)(R),s=n.user,a=n.userLoading;return Object(f.jsx)(f.Fragment,{children:a?Object(f.jsx)("h1",{children:"Loading"}):Object(f.jsx)(o.b,Object(q.a)(Object(q.a)({},c),{},{render:function(e){var c=e.location;return s?t:Object(f.jsx)(o.a,{to:{pathname:"/login",state:{from:c}}})}}))})},U=(c(93),function(){var e=Object(r.useContext)(R),t=e.user,c=e.logout;return Object(f.jsx)("div",{className:"profile-container",children:t&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("img",{src:t.photoURL,alt:""}),Object(f.jsx)("h1",{children:t.displayName}),Object(f.jsx)("h5",{children:t.email}),Object(f.jsx)("button",{className:"primary-button",onClick:c,children:"Log out"})]})})}),V=function(){var e=Object(r.useContext)(R),t=e.signup,c=e.googleLogin,n=e.error,s=e.setError;Object(r.useEffect)((function(){return s(null)}),[s]);var a={name:Object(r.useRef)(),email:Object(r.useRef)(),password:Object(r.useRef)()};return Object(f.jsxs)("div",{className:"login-container",children:[Object(f.jsx)("h1",{children:"Create Account"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=a.name,r=a.email,n=a.password;n.current.value.length>5?t(c.current.value,r.current.value,n.current.value):s({message:"Password must be at least 6 characters long"})},className:"primary-form",children:[n&&Object(f.jsx)("h5",{className:"firebase-error",children:n.message}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Name"}),Object(f.jsx)("input",{type:"text",ref:a.name,required:!0})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Email"}),Object(f.jsx)("input",{type:"email",ref:a.email,required:!0})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Password"}),Object(f.jsx)("input",{type:"password",ref:a.password,required:!0})]}),Object(f.jsx)("input",{type:"submit",value:"Sign up",className:"primary-button"})]}),Object(f.jsxs)("div",{className:"login-buttons-container",children:[Object(f.jsx)("h5",{children:"Sign in with"}),Object(f.jsx)("button",{className:"login-button primary-button",onClick:c,children:Object(f.jsx)("i",{class:"fab fa-google"})})]}),Object(f.jsxs)("h4",{style:{marginTop:"40px"},children:["Already have an account? ",Object(f.jsx)(i.b,{to:"/login",children:"Login"})]})]})},B=(c(94),function(){var e=Object(r.useContext)(g),t=e.cart,c=e.setCart,n=t.length>0?t.reduce((function(e,t){return e+parseFloat(t.price)}),0):0,s=t.length>0?t.reduce((function(e,t){return e+parseFloat(t.shipping)}),0):0,a=n+s,i=.1*a,o=a+i;return Object(f.jsx)("div",{id:"cart",className:"hide",children:Object(f.jsxs)("div",{id:"cart-container",children:[Object(f.jsx)("h2",{children:"Cart"}),Object(f.jsx)("table",{children:Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Items Added:"}),Object(f.jsx)("td",{children:t.length})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Shipping:"}),Object(f.jsxs)("td",{children:["$",s?s.toFixed(2):0]})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Total before Tax:"}),Object(f.jsxs)("td",{children:["$",a?a.toFixed(2):0]})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Tax:"}),Object(f.jsxs)("td",{children:["$",i?i.toFixed(2):0]})]}),Object(f.jsxs)("tr",{id:"grand-total",children:[Object(f.jsx)("td",{children:"GrandTotal:"}),Object(f.jsxs)("td",{children:["$",o?o.toFixed(2):0]})]})]})}),Object(f.jsx)("button",{id:"empty-cart-button",onClick:function(){return function(e){localStorage.removeItem("shopping-cart"),e([])}(c)},children:"Empty Cart"})]})})}),_=(c(95),c.p+"static/media/logo.0dd9a510.png"),$=function(){document.getElementById("cart").classList.toggle("hide")},J=function(){var e=Object(r.useContext)(R).user,t=Object(r.useContext)(g).cart.length;return Object(f.jsxs)("header",{children:[Object(f.jsx)("img",{src:_,alt:"logo"}),Object(f.jsxs)("nav",{children:[Object(f.jsx)(i.b,{activeClassName:"active",to:"/shop",children:"Shop"}),Object(f.jsx)(i.b,{activeClassName:"active",to:"/review",children:"Order Review"}),Object(f.jsx)(i.b,{activeClassName:"active",to:"/inventory",children:"Inventory"}),e?Object(f.jsx)(i.b,{activeClassName:"active",to:"/profile",children:"Profile"}):Object(f.jsx)(i.b,{activeClassName:"active",to:"/login",children:"Login"}),Object(f.jsxs)("span",{id:"cart-icon",children:[Object(f.jsx)("i",{className:"fas fa-shopping-cart",onClick:$}),t>0?Object(f.jsx)("small",{id:"cart-items",children:t}):""]})]})]})},W=(c(96),c(35)),z=c(37),G=c(36),K=function(e){var t=e.product,c=t._id,n=t.name,s=t.img,a=t.seller,o=t.category,j=t.price,l=t.stock,u=t.star,d=t.starCount,b=Object(r.useContext)(g).addToCart;return Object(f.jsxs)("div",{className:"product",children:[Object(f.jsx)("img",{src:s,alt:n}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{className:"product-name",children:n}),Object(f.jsxs)("p",{className:"product-seller",children:["By: ",a]}),Object(f.jsxs)("p",{className:"product-category",children:["Category: ",o]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"product-info",children:[Object(f.jsxs)("h3",{className:"product-price",children:["$",j]}),Object(f.jsxs)("p",{className:"product-stock",children:["In stock: ",l]}),Object(f.jsxs)("p",{className:"product-rating",children:[Object(f.jsx)(G.a,{initialRating:u,emptySymbol:"fa fa-star-o icon-color",fullSymbol:"fa fa-star icon-color",readonly:!0}),Object(f.jsx)("span",{className:"product-star-count",children:d})]})]}),"/inventory"!==window.location.pathname&&Object(f.jsxs)("button",{className:"primary-button",onClick:function(){b(t)},children:[Object(f.jsx)(W.a,{icon:z.a,className:"cart-icon"}),"Add to Cart"]}),Object(f.jsx)(i.b,{to:"/product/".concat(c),children:Object(f.jsx)("button",{className:"primary-button",children:"View"})}),"/inventory"===window.location.pathname&&Object(f.jsx)(i.b,{to:"/product/update/".concat(c),children:Object(f.jsx)("button",{className:"primary-button",children:"Update"})})]})]})},M=(c(99),c(100),function(){var e=Object(r.useContext)(g),t=e.setSearchedText,c=e.setPage,n=Object(r.useRef)();return Object(f.jsx)("div",{id:"search-area",children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=n.current.value.toLowerCase();c(0),t(r)},children:[Object(f.jsx)("input",{type:"text",id:"search-field",placeholder:"type here for search",ref:n}),Object(f.jsx)("input",{type:"submit",id:"search-submit",value:"Search"})]})})}),Q=function(){var e=Object(r.useContext)(g),t=e.products,c=e.page,n=e.setPage,s=e.totalPage;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(M,{}),Object(f.jsxs)("div",{id:"products",children:[Object(f.jsx)("h2",{children:"Products"}),t.map((function(e){return Object(f.jsx)(K,{product:e},e._id)}))]}),Object(f.jsx)("div",{className:"pagination",children:Object(p.a)(Array(s).keys()).map((function(e){return Object(f.jsx)("button",{onClick:function(){return n(e)},className:c===e?"active":"",children:e+1},e)}))})]})},X=function(){var e=Object(r.useContext)(R).user;return Object(f.jsx)("div",{children:e&&"saifur.tamim@gmail.com"===e.email?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"heading",children:"Inventory"}),Object(f.jsx)(Q,{})]}):Object(f.jsx)("h1",{style:{textAlign:"center"},children:"Authorised Persons Only"})})},Z=function(){var e=Object(r.useContext)(g).addToCart,t=Object(o.i)().id,c=Object(r.useState)({}),n=Object(j.a)(c,2),s=n[0],a=n[1],i=s.img,l=s.name,d=s.seller,b=s.price,h=s.stock,O=s.category,p=s.star,x=s.starCount;return Object(r.useEffect)((function(){u()("https://ema-john-srt.herokuapp.com/product/".concat(t)).then((function(e){var t=e.data;return a(t)})).catch(console.dir)}),[t]),Object(f.jsxs)("div",{className:"product",children:[Object(f.jsx)("img",{src:i,alt:l}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{className:"product-name",children:l}),Object(f.jsxs)("p",{className:"product-seller",children:["By: ",d]}),Object(f.jsxs)("p",{className:"product-category",children:["Category: ",O]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"product-info",children:[Object(f.jsxs)("h3",{className:"product-price",children:["$",b]}),Object(f.jsxs)("p",{className:"product-stock",children:["In stock: ",h]}),Object(f.jsxs)("p",{className:"product-rating",children:[Object(f.jsx)(G.a,{initialRating:p,emptySymbol:"fa fa-star-o icon-color",fullSymbol:"fa fa-star icon-color",readonly:!0}),Object(f.jsx)("span",{className:"product-star-count",children:x})]})]}),Object(f.jsxs)("button",{className:"primary-button",onClick:function(){e(s)},children:[Object(f.jsx)(W.a,{icon:z.a,className:"cart-icon"}),"Add to Cart"]})]})]})};var H=function(){return Object(f.jsx)(L,{children:Object(f.jsx)(v,{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(i.a,{children:[Object(f.jsx)(J,{}),Object(f.jsxs)("main",{children:[Object(f.jsx)(B,{}),Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/",children:Object(f.jsx)(Q,{})}),Object(f.jsx)(o.b,{path:"/shop",children:Object(f.jsx)(Q,{})}),Object(f.jsx)(o.b,{exact:!0,path:"/product/:id",children:Object(f.jsx)(Z,{})}),Object(f.jsx)(D,{exact:!0,path:"/inventory",children:Object(f.jsx)(X,{})}),Object(f.jsx)(o.b,{path:"/signup",children:Object(f.jsx)(V,{})}),Object(f.jsx)(o.b,{path:"/login",children:Object(f.jsx)(F,{})}),Object(f.jsx)(D,{path:"/profile",children:Object(f.jsx)(U,{})}),Object(f.jsx)(o.b,{path:"/product/update/:id",children:Object(f.jsx)(y,{method:"Edit"})})]})]})]})})})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,102)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),r(e),n(e),s(e),a(e)}))};a.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(H,{})}),document.getElementById("root")),Y()},63:function(e,t,c){},64:function(e,t,c){},84:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},99:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.2b202818.chunk.js.map