import{b as R,c as s,d as V,e as q,g as M,k as _,m as D,n as G,o as L,p as g}from"./chunk-MZBMCS3W.js";import{A as y,D as v,E as d,G as t,H as i,I as p,K as j,M as r,N as c,O as F,R as f,S as u,W as P,X as T,Y as B,ca as E,d as b,h as C,k as w,l as h,p as N,q as x,z as a}from"./chunk-VTVJBYY4.js";var O=(()=>{let e=class e{validate(l){let m=l.value;return new b(S=>{console.log({email:m}),m==="pedro@google.com"&&(S.next({emailTaken:!0}),S.complete()),S.next(null),S.complete()}).pipe(C(3e3))}};e.\u0275fac=function(m){return new(m||e)},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function J(n,e){n&1&&(t(0,"span",13),r(1," Debe de ser en formato de nombre y apellido "),i())}function z(n,e){n&1&&(t(0,"span",13),r(1," mensaje de error del email "),i())}function H(n,e){n&1&&(t(0,"span",13),r(1," El username no puede ser Strider "),i())}function K(n,e){n&1&&(t(0,"span",13),r(1," La contrase\xF1a debe de ser mayor de 6 caracteres. "),i())}function Q(n,e){n&1&&(t(0,"span",13),r(1," Las contrase\xF1as deben de ser iguales "),i())}var k=(()=>{let e=class e{constructor(l,m,o){this.formBuilder=l,this.validatorService=m,this.emailValidator=o,this.myForm=this.formBuilder.group({name:["",[s.required,s.pattern(g.firstNameAndLastnamePatter)]],email:["",[s.required,s.pattern(g.emailPattern)],[this.emailValidator.validate]],username:["",[s.required,this.validatorService.cantBeStrider]],password:["",[s.required,s.minLength(6)]],password2:["",[s.required]]},{validators:[this.validatorService.isFieldOneEqualFieldTwo("password","password2")]})}isInvalidField(l){return this.validatorService.isInvalidField(this.myForm,l)}onSubmit(){this.myForm.markAllAsTouched()}};e.\u0275fac=function(m){return new(m||e)(y(G),y(g),y(O))},e.\u0275cmp=N({type:e,selectors:[["ng-component"]],decls:76,vars:27,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"ngSubmit","formGroup"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","name","placeholder","Nombre del usuario",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","email","formControlName","email","placeholder","Email del usuario",1,"form-control"],["type","text","formControlName","username","placeholder","Nombre c\xF3digo del usuario",1,"form-control"],["type","password","formControlName","password","placeholder","Password de su cuenta",1,"form-control"],["type","password","formControlName","password2","placeholder","Confirmar la contrase\xF1a",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(m,o){m&1&&(t(0,"h2"),r(1,"Validaciones Reactivas"),i(),p(2,"hr"),t(3,"div",0)(4,"div",1)(5,"form",2),j("ngSubmit",function(){return o.onSubmit()}),t(6,"div",3)(7,"label",4),r(8,"Nombre"),i(),t(9,"div",5),p(10,"input",6),v(11,J,2,0,"span",7),i()(),t(12,"div",3)(13,"label",4),r(14,"Email"),i(),t(15,"div",5),p(16,"input",8),v(17,z,2,0,"span",7),i()(),t(18,"div",3)(19,"label",4),r(20,"Username"),i(),t(21,"div",5),p(22,"input",9),v(23,H,2,0,"span",7),i()(),t(24,"div",3)(25,"label",4),r(26,"Password"),i(),t(27,"div",5),p(28,"input",10),v(29,K,2,0,"span",7),i()(),t(30,"div",3)(31,"label",4),r(32,"Confirmar"),i(),t(33,"div",5),p(34,"input",11),v(35,Q,2,0,"span",7),i()(),t(36,"div",0)(37,"div",1)(38,"button",12),r(39," Crear "),i()()()()()(),t(40,"h2"),r(41),i(),t(42,"h2"),r(43),i(),t(44,"h2"),r(45),i(),t(46,"h2"),r(47,"Form errors"),i(),t(48,"pre"),r(49),f(50,"json"),i(),t(51,"h5"),r(52,"Nombre"),i(),t(53,"pre"),r(54),f(55,"json"),i(),t(56,"h5"),r(57,"Email"),i(),t(58,"pre"),r(59),f(60,"json"),i(),t(61,"h5"),r(62,"Username"),i(),t(63,"pre"),r(64),f(65,"json"),i(),t(66,"h5"),r(67,"Password"),i(),t(68,"pre"),r(69),f(70,"json"),i(),t(71,"h5"),r(72,"Confirmar"),i(),t(73,"pre"),r(74),f(75,"json"),i()),m&2&&(a(5),d("formGroup",o.myForm),a(6),d("ngIf",o.isInvalidField("name")),a(6),d("ngIf",o.isInvalidField("email")),a(6),d("ngIf",o.isInvalidField("username")),a(6),d("ngIf",o.isInvalidField("password")),a(6),d("ngIf",o.isInvalidField("password2")),a(6),F("Form Valid: ",o.myForm.valid,""),a(2),F("Form Status: ",o.myForm.status,""),a(2),F("Form Pending: ",o.myForm.pending,""),a(4),c(u(50,15,o.myForm.errors)),a(5),c(u(55,17,o.myForm.controls.name.errors)),a(5),c(u(60,19,o.myForm.controls.email.errors)),a(5),c(u(65,21,o.myForm.controls.username.errors)),a(5),c(u(70,23,o.myForm.value.password)),a(5),c(u(75,25,o.myForm.controls.password2.errors)))},dependencies:[P,M,R,V,q,_,D,T],encapsulation:2});let n=e;return n})();var W=[{path:"",children:[{path:"sign-up",component:k},{path:"**",redirectTo:"sign-up"}]}],U=(()=>{let e=class e{};e.\u0275fac=function(m){return new(m||e)},e.\u0275mod=x({type:e}),e.\u0275inj=h({imports:[E.forChild(W),E]});let n=e;return n})();var pe=(()=>{let e=class e{};e.\u0275fac=function(m){return new(m||e)},e.\u0275mod=x({type:e}),e.\u0275inj=h({imports:[B,U,L]});let n=e;return n})();export{pe as AuthModule};
