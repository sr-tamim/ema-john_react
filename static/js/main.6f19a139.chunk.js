(this["webpackJsonpema-john_react"]=this["webpackJsonpema-john_react"]||[]).push([[0],{18:function(t,e,c){},19:function(t,e,c){},20:function(t,e,c){},22:function(t,e,c){},23:function(t,e,c){},24:function(t,e,c){},30:function(t,e,c){},31:function(t,e,c){},32:function(t,e,c){"use strict";c.r(e);var r=c(1),n=c.n(r),s=c(9),o=c.n(s),a=(c(18),c(4)),i=(c(19),c(20),c.p+"static/media/logo.0dd9a510.png"),d=c(0),j=function(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("img",{src:i,alt:"logo"}),Object(d.jsxs)("nav",{children:[Object(d.jsx)("a",{href:"/shop",children:"Shop"}),Object(d.jsx)("a",{href:"/review",children:"Order Review"}),Object(d.jsx)("a",{href:"/inventory",children:"Manage Inventory here"})]})]})},l=(c(22),function(t){var e=t.allProducts,c=t.setShowProducts;return Object(d.jsx)("div",{id:"search-area",children:Object(d.jsx)("input",{type:"text",id:"search-field",placeholder:"type here for search",onChange:function(t){var r=t.target.value.toLowerCase(),n=e.filter((function(t){return t.name.toLowerCase().includes(r)||t.category.toLowerCase().includes(r)}));c(n)}})})}),u=c(13),h=(c(23),function(t){var e=t.cart,c=e.length>0?e.reduce((function(t,e){return t+e.price}),0):0,r=e.length>0?e.reduce((function(t,e){return t+e.shipping}),0):0,n=c+r,s=.1*n,o=n+s;return Object(d.jsx)("div",{id:"cart",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Cart"}),Object(d.jsx)("div",{id:"cart-info",children:Object(d.jsx)("table",{children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Items Added:"}),Object(d.jsx)("td",{children:e.length})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Shipping:"}),Object(d.jsxs)("td",{children:["$",r?r.toFixed(2):0]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Total before Tax:"}),Object(d.jsxs)("td",{children:["$",n?n.toFixed(2):0]})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Tax:"}),Object(d.jsxs)("td",{children:["$",s?s.toFixed(2):0]})]}),Object(d.jsxs)("tr",{id:"grand-total",children:[Object(d.jsx)("td",{children:"GrandTotal:"}),Object(d.jsxs)("td",{children:["$",o?o.toFixed(2):0]})]})]})})})]})})}),b=(c(24),c(10)),O=c(12),f=c(11),x=function(t){var e=t.product,c=e.name,r=e.img,n=e.seller,s=e.category,o=e.price,a=e.stock,i=e.star,j=e.starCount;return Object(d.jsxs)("div",{className:"product",children:[Object(d.jsx)("img",{src:r,alt:c}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:"product-name",children:c}),Object(d.jsxs)("p",{className:"product-seller",children:["By: ",n]}),Object(d.jsxs)("p",{className:"product-category",children:["Category: ",s]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"product-info",children:[Object(d.jsxs)("h3",{className:"product-price",children:["$",o]}),Object(d.jsxs)("p",{className:"product-stock",children:["In stock: ",a]}),Object(d.jsx)("p",{className:"product-rating",children:Object(d.jsx)(f.a,{initialRating:i,emptySymbol:"fa fa-star-o icon-color",fullSymbol:"fa fa-star icon-color",readonly:!0})}),Object(d.jsx)("p",{className:"product-star-count",children:j})]}),Object(d.jsxs)("button",{className:"product-add-button",onClick:function(){t.addToCart(t.product)},children:[Object(d.jsx)(b.a,{icon:O.a,className:"cart-icon"}),"Add to Cart"]})]})]})},p=(c(30),function(t){return Object(d.jsxs)("div",{id:"products",children:[Object(d.jsx)("h3",{children:"Products"}),t.showProducts.map((function(e){return Object(d.jsx)(x,{product:e,addToCart:t.addToCart},e.key)}))]})}),g=(c(31),function(t){var e=t.allProducts,c=Object(r.useState)([]),n=Object(a.a)(c,2),s=n[0],o=n[1];Object(r.useEffect)((function(){return o(function(t){var e=localStorage.getItem("shopping-cart"),c=[];if(null===e)return c;if(t.length>0)for(var r=JSON.parse(e),n=Object.keys(r),s=function(){for(var e=a[o],n=t.find((function(t){return t.key===e})),s=1;s<=r[e];s++)c.push(n)},o=0,a=n;o<a.length;o++)s();return c}(e))}),[e]);return Object(d.jsxs)("div",{id:"shop",children:[Object(d.jsx)(p,{addToCart:function(t){return function(t,e,c){var r=[].concat(Object(u.a)(e),[t]);c(r);var n=r.map((function(t){return t.key})),s=localStorage.getItem("shopping-cart")?JSON.parse(localStorage.getItem("shopping-cart")):{};n.forEach((function(t){s[t]=n.filter((function(e){return e===t})).length})),localStorage.setItem("shopping-cart",JSON.stringify(s))}(t,s,o)},showProducts:t.showProducts}),Object(d.jsx)(h,{cart:s})]})});var m=function(){var t=Object(r.useState)([]),e=Object(a.a)(t,2),c=e[0],n=e[1];Object(r.useEffect)((function(){fetch("./fakeData/products.JSON").then((function(t){return t.json()})).then((function(t){return n(t)}))}),[]);var s=Object(r.useState)(c),o=Object(a.a)(s,2),i=o[0],u=o[1];return Object(r.useEffect)((function(){u(c)}),[c]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(l,{allProducts:c,setShowProducts:u}),Object(d.jsx)(g,{allProducts:c,showProducts:i})]})]})},v=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(e){var c=e.getCLS,r=e.getFID,n=e.getFCP,s=e.getLCP,o=e.getTTFB;c(t),r(t),n(t),s(t),o(t)}))};o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),v()}},[[32,1,2]]]);
//# sourceMappingURL=main.6f19a139.chunk.js.map