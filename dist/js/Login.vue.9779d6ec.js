"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[225],{5892:function(e,s,t){t.r(s),t.d(s,{default:function(){return x}});var a=t(3396),r=t(9242),i=t(7139);const o=e=>((0,a.dD)("data-v-5837f6f4"),e=e(),(0,a.Cn)(),e),n={class:"container"},l=o((()=>(0,a._)("p",{class:"formDescription"},"Домашняя бухгалтерия",-1))),d={class:"form-floating mb-3"},u=o((()=>(0,a._)("label",{for:"floatingInput"},"Email",-1))),c={key:0,class:"text-danger errors"},m={key:0},p={class:"form-floating"},f=o((()=>(0,a._)("label",{for:"floatingPassword"},"Пароль",-1))),v={key:0,class:"text-danger errors"},w={key:0},g={key:0,class:"mt-4 d-grid gap-2"},k=o((()=>(0,a._)("button",{type:"submit",class:"btn btn-success"},[(0,a.Uk)(" Войти "),(0,a._)("i",{class:"bi bi-arrow-right-square-fill float-end"})],-1))),$=[k],h={class:"form-button mt-3 account have-not-account"},y=(0,a.Uk)(" Нет аккаунта? "),b=(0,a.Uk)("Зарегистрироваться");function _(e,s,t,o,k,_){const D=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("form",{class:"form",onSubmit:s[2]||(s[2]=(0,r.iM)((e=>_.onSubmit()),["prevent"]))},[l,(0,a._)("div",d,[(0,a.wy)((0,a._)("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com",autocomplete:"username ","onUpdate:modelValue":s[0]||(s[0]=s=>e.email=s)},null,512),[[r.nr,e.email,void 0,{trim:!0}]]),u,o.v$.$invalid?((0,a.wg)(),(0,a.iD)("div",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.v$.$silentErrors,(e=>((0,a.wg)(),(0,a.iD)("span",{key:e.uid},["email"===e.$property?((0,a.wg)(),(0,a.iD)("i",m,(0,i.zw)(e.$message),1)):(0,a.kq)("",!0)])))),128))])):(0,a.kq)("",!0)]),(0,a._)("div",p,[(0,a.wy)((0,a._)("input",{type:"password",class:"form-control",id:"floatingPassword",placeholder:"Пароль",autocomplete:"current-password","onUpdate:modelValue":s[1]||(s[1]=s=>e.password=s)},null,512),[[r.nr,e.password,void 0,{trim:!0}]]),f,o.v$.$invalid?((0,a.wg)(),(0,a.iD)("div",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.v$.$silentErrors,(e=>((0,a.wg)(),(0,a.iD)("span",{key:e.uid},["password"===e.$property?((0,a.wg)(),(0,a.iD)("i",w,(0,i.zw)(e.$message),1)):(0,a.kq)("",!0)])))),128))])):(0,a.kq)("",!0)]),o.v$.$invalid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",g,$)),(0,a._)("div",h,[(0,a._)("p",null,[y,(0,a.Wm)(D,{class:"register",to:"/register"},{default:(0,a.w5)((()=>[b])),_:1})])])],32)])}var D=t(3053),q=t(9117),S=t(5635),C={name:"login-component",setup(){const e=(0,S.S)();return{crmStore:e,v$:(0,D.ZP)()}},data:()=>({email:"",password:""}),validations(){return{email:{required:q.C1,email:q.Do},password:{required:q.C1,minLength:(0,q.Ei)(6)}}},methods:{async onSubmit(){if(this.v$.$invalid)return;const e={email:this.email,password:this.password};try{await this.crmStore.login(e),this.$toast.success("Вы вошли в систему"),this.$router.push({name:"Home"})}catch(s){this.$toast.error(s.message)}}}},U=t(89);const E=(0,U.Z)(C,[["render",_],["__scopeId","data-v-5837f6f4"]]);var x=E}}]);
//# sourceMappingURL=Login.vue.9779d6ec.js.map