import{B as e,C as t,D as m,H as i,I as l,M as d,N as p,S,T as E,Z as u,i as s,l as x,m as c,u as a}from"./chunk-PYGIIBS6.js";var v=(()=>{let n=class n{};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=x({type:n,selectors:[["ng-component"]],decls:81,vars:18,consts:[[1,"row"],[1,"col"],["autocomplete","off"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","placeholder","Nombre del usuario",1,"form-control"],[1,"form-text","text-danger"],["type","email","placeholder","Email del usuario",1,"form-control"],["type","text","placeholder","Nombre c\xF3digo del usuario",1,"form-control"],["type","password","placeholder","Password de su cuenta",1,"form-control"],["type","password","placeholder","Confirmar la contrase\xF1a",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"]],template:function(o,y){o&1&&(e(0,"h2"),i(1,"Validaciones Reactivas"),t(),m(2,"hr"),e(3,"div",0)(4,"div",1)(5,"form",2)(6,"div",3)(7,"label",4),i(8,"Nombre"),t(),e(9,"div",5),m(10,"input",6),e(11,"span",7),i(12," Debe de ser en formato de nombre y apellido "),t()()(),e(13,"div",3)(14,"label",4),i(15,"Email"),t(),e(16,"div",5),m(17,"input",8),e(18,"span",7),i(19," mensaje de error del email "),t()()(),e(20,"div",3)(21,"label",4),i(22,"Username"),t(),e(23,"div",5),m(24,"input",9),e(25,"span",7),i(26," El username no puede ser Strider "),t()()(),e(27,"div",3)(28,"label",4),i(29,"Password"),t(),e(30,"div",5),m(31,"input",10),e(32,"span",7),i(33," La contrase\xF1a debe de ser mayor de 6 caracteres. "),t()()(),e(34,"div",3)(35,"label",4),i(36,"Confirmar"),t(),e(37,"div",5),m(38,"input",11),e(39,"span",7),i(40," Las contrase\xF1as deben de ser iguales "),t()()(),e(41,"div",0)(42,"div",1)(43,"button",12),i(44," Crear "),t()()()()()(),e(45,"h2"),i(46,"Form Valid: "),t(),e(47,"h2"),i(48,"Form Status: "),t(),e(49,"h2"),i(50,"Form Pending: "),t(),e(51,"h2"),i(52,"Form errors"),t(),e(53,"pre"),i(54),d(55,"json"),t(),e(56,"h5"),i(57,"Nombre"),t(),e(58,"pre"),i(59),d(60,"json"),t(),e(61,"h5"),i(62,"Email"),t(),e(63,"pre"),i(64),d(65,"json"),t(),e(66,"h5"),i(67,"Username"),t(),e(68,"pre"),i(69),d(70,"json"),t(),e(71,"h5"),i(72,"Password"),t(),e(73,"pre"),i(74),d(75,"json"),t(),e(76,"h5"),i(77,"Confirmar"),t(),e(78,"pre"),i(79),d(80,"json"),t()),o&2&&(a(54),l(p(55,6,"formulario")),a(5),l(p(60,8,"formulario")),a(5),l(p(65,10,"formulario")),a(5),l(p(70,12,"formulario")),a(5),l(p(75,14,"formulario")),a(5),l(p(80,16,"formulario")))},dependencies:[S]});let r=n;return r})();var g=[{path:"",children:[{path:"sign-up",component:v},{path:"**",redirectTo:"sign-up"}]}],b=(()=>{let n=class n{};n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=c({type:n}),n.\u0275inj=s({imports:[u.forChild(g),u]});let r=n;return r})();var D=(()=>{let n=class n{};n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=c({type:n}),n.\u0275inj=s({imports:[E,b]});let r=n;return r})();export{D as AuthModule};