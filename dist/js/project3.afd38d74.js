"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[582,179],{2374:function(t,e,n){n.d(e,{Z:function(){return h}});var r=n(3396),a=n(7139);const o={class:"navbar navbar-default"},s={class:"navbar-header"},u={class:"nav navbar-nav navbar-right cart"},c={class:"btn btn-default btn-lg"},i={class:"bi bi-cart"};function l(t,e,n,l,d,m){const v=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("div",o,[(0,r._)("div",s,[(0,r._)("h2",null,[(0,r.Wm)(v,{to:{name:"Project3"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(d.sitename),1)])),_:1})])]),(0,r._)("div",u,[(0,r._)("button",c,[(0,r.Wm)(v,{"active-class":"active",to:{name:"Form"}},{default:(0,r.w5)((()=>[(0,r._)("p",i,(0,a.zw)(this.userStore.cartItemCount.length),1)])),_:1})])])])])}var d=n(4573),m={name:"my-header",setup(){const t=(0,d.U)();return{userStore:t}},data(){return{sitename:"Распродажа склада!"}},methods:{showCheckout(){this.$router.push({name:"Form"})}}},v=n(89);const p=(0,v.Z)(m,[["render",l],["__scopeId","data-v-4544e781"]]);var h=p},1677:function(t,e,n){n.r(e),n.d(e,{default:function(){return T}});var r=n(3396),a=n(7139);const o=t=>((0,r.dD)("data-v-6f5b6cec"),t=t(),(0,r.Cn)(),t),s={class:"row"},u={class:"col-md-4 col-md-offset-0"},c=["src"],i={class:"col-md-8 col-md-offset-0 description"},l=["innerHTML"],d={class:"price"},m={class:"rating"},v=o((()=>(0,r._)("span",null,"Состояние товара: ",-1))),p=o((()=>(0,r._)("br",null,null,-1))),h=["onClick"],g={key:1,disabled:"true",class:"btn btn-primary btn-lg"},b={key:2,class:"inventory-message"},f={key:3,class:"inventory-message"},_={key:4,class:"inventory-message"},w=o((()=>(0,r._)("hr",null,null,-1)));function C(t,e,n,o,C,k){const y=(0,r.up)("Header"),D=(0,r.up)("my-header"),I=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(y),(0,r.Wm)(D),(0,r._)("main",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(k.sortedProducts,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id},[(0,r._)("div",s,[(0,r._)("div",u,[(0,r._)("figure",null,[(0,r._)("img",{class:"product",src:t.image},null,8,c)])]),(0,r._)("div",i,[(0,r._)("h1",null,[(0,r.Wm)(I,{to:{name:"ProductId",params:{id:t.id}}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(t.title),1)])),_:2},1032,["to"])]),(0,r._)("p",{innerHTML:t.description},null,8,l),(0,r._)("p",d,"Цена: "+(0,a.zw)(t.price)+" грн ",1),(0,r._)("div",m,[v,((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(5,(e=>(0,r._)("span",{class:(0,a.C_)({"rating-active":k.checkRating(e,t)}),key:e},"☆",2))),64))]),p,k.canAddToCart(t)?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"btn btn-primary btn-lg",onClick:e=>k.addToCart(t)},"Добавить в корзину",8,h)):((0,r.wg)(),(0,r.iD)("button",g,"Добавить в корзину")),t.availableInventory-k.cartCount(t.id)===0?((0,r.wg)(),(0,r.iD)("span",b,"Товар закончился ")):t.availableInventory-k.cartCount(t.id)<5?((0,r.wg)(),(0,r.iD)("div",f," Осталось: "+(0,a.zw)(t.availableInventory-k.cartCount(t.id))+" шт! ",1)):((0,r.wg)(),(0,r.iD)("span",_,"Купить сейчас! "))])]),w])))),128))])])}var k=n(2374),y=n(6265),D=n.n(y),I=n(4573),H={name:"main-component",data(){return{products:{}}},components:{MyHeader:k.Z},setup(){const t=(0,I.U)();return{userStore:t}},methods:{checkRating(t,e){return e.rating-t>=0},addToCart(t){this.userStore.addToCart(t.id)},canAddToCart(t){return t.availableInventory>this.cartCount(t.id)},cartCount(t){let e=0;for(let n=0;n<this.userStore.cartItemCount.length;n++)this.userStore.cartItemCount[n]===t&&e++;return e}},computed:{cartItemCount(){return this.userStore.cartItemCount.length||""},sortedProducts(){function t(t,e){return t.title.toLowerCase()<e.title.toLowerCase()?-1:t.title.toLowerCase()>e.title.toLowerCase()?1:0}if(Object.keys(this.products).length>0){let e=this.products.slice(0);return e.sort(t)}return 0}},created:async function(){await D().get("products.json").then((t=>{this.products=t.data.products}))}},W=n(89);const S=(0,W.Z)(H,[["render",C],["__scopeId","data-v-6f5b6cec"]]);var T=S},4765:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(3396);function a(t,e,n,a,o,s){const u=(0,r.up)("Header"),c=(0,r.up)("Main"),i=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u),(0,r._)("div",null,[(0,r.Wm)(c)]),(0,r.Wm)(i)])}var o=n(4210),s=n(7804),u=n(1677),c={name:"project3-component",components:{Header:o.Z,Main:u["default"],Footer:s.Z}},i=n(89);const l=(0,i.Z)(c,[["render",a]]);var d=l}}]);
//# sourceMappingURL=project3.afd38d74.js.map