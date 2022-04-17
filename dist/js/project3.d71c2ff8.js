"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[582,179],{7433:function(t,e,n){n.d(e,{Z:function(){return g}});var r=n(3396),a=n(7139);const o={class:"d.flex d-flex justify-content-between align-items-center mb-1 flex-wrap"},s={style:{"margin-left":"1rem"}},i={class:""},u={class:"btn"},c={class:"bi bi-cart",style:{"margin-top":"8px","margin-right":"1rem"}};function l(t,e,n,l,d,m){const p=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("div",o,[(0,r._)("div",s,[(0,r._)("h4",null,[(0,r.Wm)(p,{to:{name:"Project3"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(d.sitename),1)])),_:1})])]),(0,r._)("div",i,[(0,r._)("button",u,[(0,r.Wm)(p,{"active-class":"active",to:{name:"Form"}},{default:(0,r.w5)((()=>[(0,r._)("p",c,(0,a.zw)(this.userStore.cartItemCount.length),1)])),_:1})])])])])}var d=n(4573),m={name:"my-header",setup(){const t=(0,d.U)();return{userStore:t}},data(){return{sitename:"Распродажа склада!"}},methods:{showCheckout(){this.$router.push({name:"Form"})}}},p=n(89);const v=(0,p.Z)(m,[["render",l],["__scopeId","data-v-717cc7a8"]]);var g=v},3914:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=n(3396),a=n(7139);const o=t=>((0,r.dD)("data-v-53b37a26"),t=t(),(0,r.Cn)(),t),s={class:"m-3"},i={class:"row"},u={class:"col-md-4 col-md-offset-0"},c=["src"],l={class:"col-md-8 col-md-offset-0 description"},d=["innerHTML"],m={class:"price"},p={class:"rating"},v=o((()=>(0,r._)("span",null,"Состояние товара: ",-1))),g=o((()=>(0,r._)("br",null,null,-1))),f={class:"d-flex mt-4 flex-wrap align-content-around"},h=["onClick"],w={key:1,disabled:"true",class:"btn btn-light"},_={key:2,class:"inventory-message"},C={key:3,class:"inventory-message"},b={key:4,class:"inventory-message"},y=o((()=>(0,r._)("hr",null,null,-1)));function k(t,e,n,o,k,D){const I=(0,r.up)("Header"),H=(0,r.up)("my-header"),W=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(I),(0,r.Wm)(H),(0,r._)("main",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(D.sortedProducts,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id},[(0,r._)("div",i,[(0,r._)("div",u,[(0,r._)("figure",null,[(0,r._)("img",{class:"product",src:t.image},null,8,c)])]),(0,r._)("div",l,[(0,r._)("h3",null,[(0,r.Wm)(W,{to:{name:"ProductId",params:{id:t.id}}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(t.title),1)])),_:2},1032,["to"])]),(0,r._)("p",{innerHTML:t.description},null,8,d),(0,r._)("p",m,"Цена: "+(0,a.zw)(t.price)+" грн ",1),(0,r._)("div",p,[v,((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(5,(e=>(0,r._)("span",{class:(0,a.C_)({"rating-active":D.checkRating(e,t)}),key:e},"☆",2))),64))]),g,(0,r._)("div",f,[D.canAddToCart(t)?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"btn add-btn",onClick:e=>D.addToCart(t)},"Добавить в корзину ",8,h)):((0,r.wg)(),(0,r.iD)("button",w,"Добавить в корзину ")),t.availableInventory-D.cartCount(t.id)===0?((0,r.wg)(),(0,r.iD)("span",_,"Товар закончился ")):t.availableInventory-D.cartCount(t.id)<5?((0,r.wg)(),(0,r.iD)("div",C," Осталось: "+(0,a.zw)(t.availableInventory-D.cartCount(t.id))+" шт! ",1)):((0,r.wg)(),(0,r.iD)("span",b,"Купить сейчас! "))])])]),y])))),128))])])}var D=n(7433),I=n(6265),H=n.n(I),W=n(4573),S={name:"main-component",data(){return{products:{}}},components:{MyHeader:D.Z},setup(){const t=(0,W.U)();return{userStore:t}},methods:{checkRating(t,e){return e.rating-t>=0},addToCart(t){this.userStore.addToCart(t.id)},canAddToCart(t){return t.availableInventory>this.cartCount(t.id)},cartCount(t){let e=0;for(let n=0;n<this.userStore.cartItemCount.length;n++)this.userStore.cartItemCount[n]===t&&e++;return e}},computed:{cartItemCount(){return this.userStore.cartItemCount.length||""},sortedProducts(){function t(t,e){return t.title.toLowerCase()<e.title.toLowerCase()?-1:t.title.toLowerCase()>e.title.toLowerCase()?1:0}if(Object.keys(this.products).length>0){let e=this.products.slice(0);return e.sort(t)}return 0}},created:async function(){await H().get("products.json").then((t=>{this.products=t.data.products}))}},T=n(89);const Z=(0,T.Z)(S,[["render",k],["__scopeId","data-v-53b37a26"]]);var x=Z},9918:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(3396);function a(t,e,n,a,o,s){const i=(0,r.up)("Header"),u=(0,r.up)("Main"),c=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i),(0,r._)("div",null,[(0,r.Wm)(u)]),(0,r.Wm)(c)])}var o=n(8073),s=n(9974),i=n(3914),u={name:"project3-component",components:{Header:o.Z,Main:i["default"],Footer:s.Z}},c=n(89);const l=(0,c.Z)(u,[["render",a]]);var d=l}}]);
//# sourceMappingURL=project3.d71c2ff8.js.map