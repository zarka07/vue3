"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[8],{1008:function(e,s,r){r.r(s),r.d(s,{default:function(){return ie}});var t=r(3396);const i={class:"container-fluid"},n={class:"row"},a={class:"col-xs-12 col-md-12 form"};function o(e,s,r,o,l,d){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",i,[(0,t._)("div",n,[(0,t._)("div",a,[l.selected?((0,t.wg)(),(0,t.j4)((0,t.LL)(l.selected),{key:0,onSignIn:d.signIn,onBack:d.back,onShowUser:d.toUser},null,8,["onSignIn","onBack","onShowUser"])):(0,t.kq)("",!0)])])])])}var l=r(7139),d=r(9242);const c=e=>((0,t.dD)("data-v-7ee32dfd"),e=e(),(0,t.Cn)(),e),u={class:"form-body"},m={class:"row"},v={class:"form-holder"},p={class:"form-content"},g={class:"form-items"},h=c((()=>(0,t._)("h3",null,"Sign Up",-1))),w={class:"requires-validation",novalidate:""},_={class:"col-md-12"},$={class:"error-msg"},f={class:"col-md-12"},b={class:"error-msg"},y=(0,t.uE)('<div class="col-md-12" data-v-7ee32dfd><select class="form-select mt-3" required data-v-7ee32dfd><option selected disabled value="" data-v-7ee32dfd>Gender</option><option value="Male" data-v-7ee32dfd>Male</option><option value="Femail" data-v-7ee32dfd>Femail</option></select></div>',1),k={class:"col-md-12"},U={class:"error-msg"},C={class:"form-check"},D=c((()=>(0,t._)("label",{class:"form-check-label"},"I confirm that all data are correct",-1))),I={class:"form-button mt-3"},S={class:"form-button mt-3 account"},q=(0,t.Uk)(" Already have an account? ");function z(e,s,r,i,n,a){return(0,t.wg)(),(0,t.iD)("div",u,[(0,t._)("div",m,[(0,t._)("div",v,[(0,t._)("div",p,[(0,t._)("div",g,[h,(0,t._)("form",w,[(0,t._)("div",_,[(0,t._)("div",{class:(0,l.C_)({error:i.v$.username.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>n.username=e),placeholder:"Username",autocomplete:"username"},null,512),[[d.nr,n.username]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.v$.username.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",$,(0,l.zw)(e.$message),1)])))),128))],2)]),(0,t._)("div",f,[(0,t._)("div",{class:(0,l.C_)({error:i.v$.email.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"email","onUpdate:modelValue":s[1]||(s[1]=e=>n.email=e),placeholder:"E-mail",autocomplete:"email"},null,512),[[d.nr,n.email]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.v$.email.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",b,(0,l.zw)(e.$message),1)])))),128))],2)]),y,(0,t._)("div",k,[(0,t._)("div",{class:(0,l.C_)({error:i.v$.password.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"password","onUpdate:modelValue":s[2]||(s[2]=e=>n.password=e),placeholder:"Password (at least 8 long)",autocomplete:"new-password"},null,512),[[d.nr,n.password]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.v$.password.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",U,(0,l.zw)(e.$message),1)])))),128))],2)]),(0,t._)("div",C,[(0,t._)("div",{class:(0,l.C_)({error:i.v$.agree.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[3]||(s[3]=e=>n.agree=e),onChange:s[4]||(s[4]=e=>i.v$.agree.$touch())},null,544),[[d.e8,n.agree]]),D],2)]),(0,t._)("div",I,[(0,t._)("button",{type:"submit",onClick:s[5]||(s[5]=(0,d.iM)(((...e)=>a.signUp&&a.signUp(...e)),["prevent"])),class:"btn btn-success"},"Sign Up ")]),(0,t._)("div",S,[q,(0,t._)("button",{type:"submit",onClick:s[6]||(s[6]=(0,d.iM)(((...e)=>a.signIn&&a.signIn(...e)),["prevent"])),class:"btn account btn-link"},"Sign In ")])])])])])])])}var M=r(4573),V=r(9117),E=r(3053),H={name:"signup-component",setup(){return{v$:(0,E.ZP)()}},data(){const e=(0,M.U)();return{mainStore:e,username:"",email:"",password:"",agree:!1}},validations(){return{email:{email:V.Do,required:V.C1},password:{required:V.C1,minLength:(0,V.Ei)(8)},username:{required:V.C1},agree:{checked:e=>e}}},emits:{"sign-in":{type:String,required:!1,default:""}},methods:{async signUp(){if(this.v$.$invalid)return void this.v$.$touch();const e=await this.v$.$validate();if(!e)return;const s={email:this.email,password:this.password,username:this.username};try{this.mainStore.addUser(s),this.$emit("showUser"),console.log("show user")}catch(r){console.log(r)}},signIn(){this.$emit("sign-in")}}},K=r(89);const L=(0,K.Z)(H,[["render",z],["__scopeId","data-v-7ee32dfd"]]);var Y=L;const Z=e=>((0,t.dD)("data-v-fb93b2b2"),e=e(),(0,t.Cn)(),e),P={class:"form-body"},x={class:"row"},A={class:"form-holder"},B={class:"form-content"},F={class:"form-items"},j=Z((()=>(0,t._)("h3",null,"Sign In",-1))),G={class:"requires-validation",novalidate:""},T={class:"col-md-12"},J={class:"error-msg"},N={class:"col-md-12"},O={class:"error-msg"},Q={class:"form-button mt-3"},R={class:"form-button mt-3"};function W(e,s,r,i,n,a){return(0,t.wg)(),(0,t.iD)("div",P,[(0,t._)("div",null,[(0,t._)("div",x,[(0,t._)("div",A,[(0,t._)("div",B,[(0,t._)("div",F,[j,(0,t._)("form",G,[(0,t._)("div",T,[(0,t._)("div",{class:(0,l.C_)({error:i.v$.email.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"email","onUpdate:modelValue":s[0]||(s[0]=e=>n.email=e),placeholder:"E-mail",autocomplete:"email"},null,512),[[d.nr,n.email]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.v$.email.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",J,(0,l.zw)(e.$message),1)])))),128))],2)]),(0,t._)("div",N,[(0,t._)("div",{class:(0,l.C_)({error:i.v$.password.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"password","onUpdate:modelValue":s[1]||(s[1]=e=>n.password=e),placeholder:"Password",autocomplete:"current-password",required:""},null,512),[[d.nr,n.password]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.v$.password.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",O,(0,l.zw)(e.$message),1)])))),128))],2)]),(0,t._)("div",Q,[(0,t._)("button",{type:"button",onClick:s[2]||(s[2]=(0,d.iM)((s=>e.$emit("back")),["prevent"])),class:"btn btn-primary"},"back ")]),(0,t._)("div",R,[(0,t._)("button",{type:"submit",onClick:s[3]||(s[3]=(0,d.iM)(((...e)=>a.signIn&&a.signIn(...e)),["prevent"])),class:"btn btn-success"},"Sign in ")])])])])])])])])}var X={name:"signin-component",setup(){return{v$:(0,E.ZP)()}},data(){const e=(0,M.U)();return{mainStore:e,email:"",password:""}},validations(){return{email:{email:V.Do,required:V.C1},password:{required:V.C1,minLength:(0,V.Ei)(8)}}},emits:{showUser:{type:String,required:!1,default:""},back:{type:String,required:!1,default:""}},methods:{async signIn(){if(this.v$.$invalid)return void this.v$.$touch();const e=await this.v$.$validate();if(!e)return;const s={email:this.email,password:this.password};try{this.mainStore.signIn(s),this.$emit("showUser")}catch(r){console.log(r)}}}};const ee=(0,K.Z)(X,[["render",W],["__scopeId","data-v-fb93b2b2"]]);var se=ee,re={components:{signup:Y,signin:se},name:"AuthorizationItem",emits:{showUser:{type:String,required:!1,default:""}},data(){return{items:["signup","signin"],selected:"signup",articles:[]}},computed:{currentTabComponent:function(){return this.selected.toLowerCase()}},methods:{back(){"signin"==this.selected&&(this.selected="signup")},signIn(){"signup"==this.selected&&(this.selected="signin")},toUser(){this.$router.push("/user")}}};const te=(0,K.Z)(re,[["render",o]]);var ie=te}}]);
//# sourceMappingURL=8.ac4b4146.js.map