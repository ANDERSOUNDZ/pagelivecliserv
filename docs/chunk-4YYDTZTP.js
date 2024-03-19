import{$ as L,A as Be,C as z,E as f,F as A,G as U,H as $e,I as Q,J as K,K as J,L as W,M as X,N as Y,O as Z,P as Oe,Q as Pe,R as Ge,S as He,T as ze,U as ee,V as Ae,W as te,X as Ue,Y as Qe,Z as F,_ as Ke,aa as Je,ba as We,ca as Xe,d as Se,da as Ye,ea as Ze,f as Ee,fa as et,g as xe,ga as tt,h as be,i as Me,j as ye,k as we,l as Ie,m as Fe,n as Le,o as Te,p as ke,q as De,r as Ne,s as G,t as je,u as Re,v as Ve,w,x as H,y as qe,z as I}from"./chunk-HB6P2RLI.js";import{a as _e,g as ve,h as ge,i as M,j as y,l as oe}from"./chunk-YZA5K5WE.js";import"./chunk-AESYL7IM.js";import{$ as R,Ab as $,D as x,Db as v,Fb as O,Jb as ie,Kb as re,Lb as ne,Mb as pe,Nb as a,Pb as b,Qb as ue,Tb as fe,Ua as m,Va as C,_ as ce,da as de,ja as _,jb as u,ka as V,lb as s,ra as q,sa as B,ub as o,vb as n,wb as c,wc as Ce,xb as S,xc as P,yb as E,zc as he}from"./chunk-SQTYW5OA.js";var it=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=_({type:t,selectors:[["app-clientes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"]],template:function(r,l){r&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),c(4,"router-outlet"),n()()()())},dependencies:[ge]});let e=t;return e})();var k=(()=>{let t=class t{constructor(i){this.httpClient=i,this.apiUrl="https://www.apiclienteservicio.somee.com/api"}listaCliente(){let i=`${this.apiUrl}/Cliente/listaCliente`;return this.httpClient.get(i).pipe(x(r=>[]))}obtenerCliente(i){let r=`${this.apiUrl}/Cliente/obtenerCliente/${i}`;return this.httpClient.get(r).pipe(x(l=>[]))}obtenerServicioCliente(i){let r=`${this.apiUrl}/ClienteServicio/ListaClienteServicios/${i}`;return this.httpClient.get(r).pipe(x(l=>[]))}crearCliente(i){console.log(i,"desdeElServicio");let r=`${this.apiUrl}/Cliente/agregarCliente`;return this.httpClient.post(r,i).pipe(x(l=>[]))}editarCliente(i,r){let l=`${this.apiUrl}/Cliente/actualizarCliente/${i}`;return this.httpClient.put(l,r).pipe(x(d=>[]))}eliminarCliente(i){let r=`${this.apiUrl}/Cliente/eliminar/${i}`;return this.httpClient.delete(r)}};t.\u0275fac=function(r){return new(r||t)(de(_e))},t.\u0275prov=ce({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var dt=()=>[5,10,25,100];function pt(e,t){e&1&&(o(0,"th",21),a(1," ID "),n())}function ut(e,t){if(e&1&&(o(0,"td",22),a(1),n()),e&2){let p=t.$implicit;m(),b(" ",p.id," ")}}function ft(e,t){e&1&&(o(0,"th",21),a(1," Nombre Cliente "),n())}function Ct(e,t){if(e&1&&(o(0,"td",22),a(1),n()),e&2){let p=t.$implicit;m(),b(" ",p.nombreCliente,"")}}function ht(e,t){e&1&&(o(0,"th",21),a(1," Correo "),n())}function _t(e,t){if(e&1&&(o(0,"td",22),a(1),n()),e&2){let p=t.$implicit;m(),b(" ",p.correo," ")}}function vt(e,t){e&1&&(o(0,"th",21),a(1," Estado "),n())}function gt(e,t){if(e&1&&(o(0,"td",22),a(1),n()),e&2){let p=t.$implicit;m(),b(" ",p.estado?"Activo":"Inactivo"," ")}}function St(e,t){e&1&&(o(0,"th",21),a(1," Editar "),n())}function Et(e,t){if(e&1){let p=$();o(0,"td",22)(1,"button",23),v("click",function(){let r=q(p).$implicit,l=O();return B(l.actualizarCliente(r.id))}),o(2,"mat-icon"),a(3,"edit"),n()()()}}function xt(e,t){e&1&&(o(0,"th",21),a(1," Eliminar "),n())}function bt(e,t){if(e&1){let p=$();o(0,"td",22)(1,"button",23),v("click",function(){let r=q(p).$implicit,l=O();return B(l.deleteCliente(r.id))}),o(2,"mat-icon"),a(3,"delete"),n()()()}}function Mt(e,t){e&1&&c(0,"tr",24)}function yt(e,t){e&1&&c(0,"tr",25)}function wt(e,t){if(e&1&&(o(0,"tr",26)(1,"td",27),a(2),n()()),e&2){O();let p=pe(11);m(2),b('No data matching the filter "',p.value,'"')}}var lt=(()=>{let t=class t{constructor(i,r,l){this.clienteService=i,this.snackBar=r,this.route=l,this.displayedColumns=["id","nombreCliente","correo","estado","edit","delete"],this.listaCliente()}ngOnInit(){}listaCliente(){this.clienteService.listaCliente().subscribe({next:i=>{this.dataSource=new Ne(i),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,console.log(i)}})}actualizarCliente(i){console.log(i),this.route.navigate(["/cliente/listascliente/editarcliente",i])}deleteCliente(i){this.clienteService.eliminarCliente(i).subscribe({next:()=>{this.alertaMensaje("Registro eliminado","ok"),this.dataSource.data=this.dataSource.data.filter(r=>r.id!==i),this.dataSource.paginator.length!==this.dataSource.data.length&&(this.dataSource.paginator.length=this.dataSource.data.length)},error:r=>{r.status===500?this.alertaMensaje("No se puede eliminar un cliente pues mantiene servicios adjuntos","ok"):this.snackBar.open("Error al eliminar cliente: "+r.message,"Cerrar",{duration:3e3})}})}alertaMensaje(i,r){this.snackBar.open(i,r),this.snackBar.open(i,r,{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})}applyFilter(i){let r=i.target.value;this.dataSource.filter=r.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}};t.\u0275fac=function(r){return new(r||t)(C(k),C(F),C(M))},t.\u0275cmp=_({type:t,selectors:[["app-clientes-list"]],viewQuery:function(r,l){if(r&1&&(ie(ee,7),ie(te,5)),r&2){let d;re(d=ne())&&(l.paginator=d.first),re(d=ne())&&(l.sort=d.first)}},decls:43,vars:5,consts:[["input",""],[1,"row"],[1,"col"],[1,"col-md-9"],["matInput","","appearance","outline",1,"example-full-width",3,"keyup"],["matInput","","placeholder",""],[1,"col","mb-3"],["mat-fab","","extended","","color","primary","routerLink","/cliente/listascliente/crearcliente"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombreCliente"],["matColumnDef","correo"],["matColumnDef","estado"],["matColumnDef","edit"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(r,l){if(r&1){let d=$();o(0,"div",1)(1,"div",2)(2,"h2"),a(3,"Panel Clientes"),n(),c(4,"hr"),n()(),o(5,"div",1)(6,"div",3)(7,"mat-form-field",4),v("keyup",function(g){return q(d),B(l.applyFilter(g))}),o(8,"mat-label"),a(9,"Buscar cliente"),n(),c(10,"input",5,0),n()(),o(12,"div",6)(13,"button",7)(14,"mat-icon"),a(15,"add"),n(),a(16," Crear cliente: "),n()(),c(17,"hr"),n(),o(18,"div",1)(19,"div",2)(20,"table",8),S(21,9),u(22,pt,2,0,"th",10)(23,ut,2,1,"td",11),E(),S(24,12),u(25,ft,2,0,"th",10)(26,Ct,2,1,"td",11),E(),S(27,13),u(28,ht,2,0,"th",10)(29,_t,2,1,"td",11),E(),S(30,14),u(31,vt,2,0,"th",10)(32,gt,2,1,"td",11),E(),S(33,15),u(34,St,2,0,"th",10)(35,Et,4,0,"td",11),E(),S(36,16),u(37,xt,2,0,"th",10)(38,bt,4,0,"td",11),E(),u(39,Mt,1,0,"tr",17)(40,yt,1,0,"tr",18)(41,wt,3,1,"tr",19),n(),c(42,"mat-paginator",20),n()()}r&2&&(m(20),s("dataSource",l.dataSource),m(19),s("matHeaderRowDef",l.displayedColumns),m(),s("matRowDefColumns",l.displayedColumns),m(2),s("pageSizeOptions",fe(4,dt)))},dependencies:[y,Ee,be,Ie,Me,xe,Fe,ye,we,Le,Te,ke,I,w,L,te,Ue,ee,Re,je,We],styles:[".example-full-width[_ngcontent-%COMP%]{width:100%}"]});let e=t;return e})();function Lt(e,t){e&1&&(o(0,"mat-error"),a(1," Nombre del Cliente es requerido. "),n())}function Tt(e,t){e&1&&(o(0,"mat-error"),a(1," El nombre debe tener al menos 10 caracteres. "),n())}function kt(e,t){e&1&&(o(0,"mat-error"),a(1," El nombre debe tener maximo 30 caracteres. "),n())}function Dt(e,t){e&1&&(o(0,"mat-error"),a(1," Correo es requerido. "),n())}function Nt(e,t){e&1&&(o(0,"mat-error"),a(1," Ingrese un correo electr\xF3nico v\xE1lido. "),n())}function jt(e,t){e&1&&(o(0,"mat-error"),a(1," El nombre debe tener al menos 10 caracteres. "),n())}function Rt(e,t){e&1&&(o(0,"mat-error"),a(1," El nombre debe tener maximo 40 caracteres. "),n())}function Vt(e,t){e&1&&(o(0,"mat-error"),a(1," Estado es requerido. "),n())}var mt=(()=>{let t=class t{constructor(i,r,l){this.servicioService=i,this.snackBar=r,this.route=l,this.formularioCliente=new $e({nombreCliente:new Q("",[f.required,f.minLength(10),f.maxLength(30)]),correo:new Q("",[f.required,f.email,f.minLength(10),f.maxLength(40)]),estado:new Q("",[f.required])})}ngOnInit(){}guardarCliente(){if(this.formularioCliente.invalid){this.alertaMensaje("Porfavor llenar el formulario.","Error");return}let i={nombreCliente:this.formularioCliente.value.nombreCliente,correo:this.formularioCliente.value.correo,estado:this.formularioCliente.value.estado==="true"};this.servicioService.crearCliente(i).subscribe({next:r=>{this.alertaMensaje("Cliente creado.","OK"),this.formularioCliente.reset(),this.route.navigate(["/cliente/listascliente"])},error:r=>{this.alertaMensaje("No se puede crear el cliente.","Error")}})}alertaMensaje(i,r){this.snackBar.open(i,r),this.snackBar.open(i,r,{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})}};t.\u0275fac=function(r){return new(r||t)(C(k),C(F),C(M))},t.\u0275cmp=_({type:t,selectors:[["app-clientes-create"]],decls:52,vars:9,consts:[[1,"row"],[1,"col"],[3,"formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","nombreCliente","required","","minlength","10","maxlength","30"],["align","start"],[4,"ngIf"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","correo","type","email","required","","minlength","10","maxlength","40"],["name","estadoCliente","formControlName","estado"],["value","true"],["value","false"],[1,"text-center","mt-3"],["mat-flat-button","","color","primary","routerLink","/cliente/listascliente",1,"m-2"],["mat-flat-button","","color","primary",1,"m-2",3,"click"]],template:function(r,l){if(r&1&&(o(0,"div",0)(1,"div",1)(2,"h2"),a(3,"Crear Cliente"),n()()(),c(4,"hr"),o(5,"form",2)(6,"div",0)(7,"div",1)(8,"mat-form-field",3)(9,"mat-label"),a(10,"Nombre del Cliente"),n(),c(11,"input",4),o(12,"mat-hint",5)(13,"strong"),a(14,"Ingresa el nombre del cliente."),n()(),u(15,Lt,2,0,"mat-error",6)(16,Tt,2,0,"mat-error",6)(17,kt,2,0,"mat-error",6),n()(),o(18,"div",1)(19,"mat-form-field",7)(20,"mat-label"),a(21,"Correo"),n(),c(22,"input",8),o(23,"mat-hint",5)(24,"strong"),a(25,"Ingresa correo electronico."),n()(),u(26,Dt,2,0,"mat-error",6)(27,Nt,2,0,"mat-error",6)(28,jt,2,0,"mat-error",6)(29,Rt,2,0,"mat-error",6),n()(),o(30,"div",1)(31,"mat-form-field",3)(32,"mat-label"),a(33,"Estado"),n(),o(34,"mat-select",9)(35,"mat-option",10),a(36,"Activo"),n(),o(37,"mat-option",11),a(38,"Inactivo"),n()(),o(39,"mat-hint",5)(40,"strong"),a(41,"Elige el estado del cliente."),n()(),u(42,Vt,2,0,"mat-error",6),n()()(),c(43,"hr"),o(44,"div",0)(45,"div",1)(46,"section")(47,"div",12)(48,"button",13),a(49," Volver "),n(),o(50,"button",14),v("click",function(){return l.guardarCliente()}),a(51," Guardar "),n()()()()()()),r&2){let d,h,g,D,N,j,me,se;m(5),s("formGroup",l.formularioCliente),m(10),s("ngIf",(d=l.formularioCliente.get("nombreCliente"))==null?null:d.hasError("required")),m(),s("ngIf",(h=l.formularioCliente.get("nombreCliente"))==null?null:h.hasError("minlength")),m(),s("ngIf",(g=l.formularioCliente.get("nombreServicio"))==null?null:g.hasError("maxlength")),m(9),s("ngIf",(D=l.formularioCliente.get("correo"))==null?null:D.hasError("required")),m(),s("ngIf",(N=l.formularioCliente.get("correo"))==null?null:N.hasError("required")),m(),s("ngIf",(j=l.formularioCliente.get("correo"))==null?null:j.hasError("minlength")),m(),s("ngIf",(me=l.formularioCliente.get("correo"))==null?null:me.hasError("maxlength")),m(13),s("ngIf",(se=l.formularioCliente.get("estado"))==null?null:se.hasError("required"))}},dependencies:[P,y,I,w,qe,H,L,G,K,z,A,U,X,Y,Z,J,W,He,Se]});let e=t;return e})();function qt(e,t){e&1&&(o(0,"mat-error"),a(1," Nombre del Servicio es requerido. "),n())}function Bt(e,t){e&1&&(o(0,"mat-error"),a(1," El nombre debe tener al menos 10 caracteres. "),n())}function $t(e,t){e&1&&(o(0,"mat-error"),a(1," El nombre debe tener maximo 30 caracteres. "),n())}function Ot(e,t){e&1&&(o(0,"mat-error"),a(1," La descripci\xF3n del servicio es requerido. "),n())}function Pt(e,t){e&1&&(o(0,"mat-error"),a(1," La descripci\xF3n debe tener al menos 10 caracteres. "),n())}function Gt(e,t){e&1&&(o(0,"mat-error"),a(1," La descripci\xF3n debe tener maximo 30 caracteres. "),n())}function Ht(e,t){if(e&1&&(o(0,"div")(1,"div",1),a(2),n()()),e&2){let p=t.$implicit;m(2),ue(" ",p.nombreServicio," - Estado: ",p.estado?"Activo":"Inactivo"," ")}}var st=(()=>{let t=class t{constructor(i,r,l,d,h){this.route=i,this.clienteService=r,this.fb=l,this.snackBar=d,this.router=h,this.editForm=this.fb.group({nombreCliente:["",[f.required,f.minLength(10),f.maxLength(30)]],correo:["",[f.required,f.minLength(10),f.maxLength(30)]],estado:[""]})}ngOnInit(){this.id=this.route.snapshot.params.id,this.clienteService.obtenerCliente(this.id).subscribe(i=>{this.cliente=i,this.editForm=this.fb.group({nombreCliente:[i.nombreCliente],correo:[i.correo],estado:[i.estado]})}),this.clienteService.obtenerServicioCliente(this.id).subscribe(i=>{console.log(i.servicios),this.servicioCliente=i.servicios})}onSubmit(){if(this.editForm.valid){let i={nombreCliente:this.editForm.get("nombreCliente").value,correo:this.editForm.get("correo").value,estado:this.editForm.get("estado").value};this.clienteService.editarCliente(this.id,i).subscribe(()=>{this.alertaMensaje("Cliente actualizado.","OK"),this.router.navigate(["/cliente/listascliente"])})}}alertaMensaje(i,r){this.snackBar.open(i,r),this.snackBar.open(i,r,{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})}};t.\u0275fac=function(r){return new(r||t)(C(ve),C(k),C(Oe),C(F),C(M))},t.\u0275cmp=_({type:t,selectors:[["app-clientes-edit"]],decls:39,vars:8,consts:[[1,"row"],[1,"col"],[3,"formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","nombreCliente","required","","minlength","10","maxlength","30"],[4,"ngIf"],["matInput","","type","text","formControlName","correo","required","","minlength","10","maxlength","30"],[1,"example-section"],["formControlName","estado",1,"example-margin"],[4,"ngFor","ngForOf"],["mat-flat-button","","color","primary","routerLink","/cliente/listascliente",1,"m-2"],["mat-flat-button","","color","primary","type","submit",1,"m-2",3,"click"]],template:function(r,l){if(r&1&&(o(0,"div",0)(1,"div",1)(2,"h2"),a(3,"Editar Cliente"),n()()(),c(4,"hr"),o(5,"form",2)(6,"div",0)(7,"div",1)(8,"mat-form-field",3)(9,"mat-label"),a(10,"Nombre del Cliente"),n(),c(11,"input",4),u(12,qt,2,0,"mat-error",5)(13,Bt,2,0,"mat-error",5)(14,$t,2,0,"mat-error",5),n()(),o(15,"div",1)(16,"mat-form-field",3)(17,"mat-label"),a(18,"Correo"),n(),c(19,"input",6),u(20,Ot,2,0,"mat-error",5)(21,Pt,2,0,"mat-error",5)(22,Gt,2,0,"mat-error",5),n()(),o(23,"div",1)(24,"section",7)(25,"mat-checkbox",8),a(26," Activo "),n()()(),c(27,"hr"),o(28,"div",0)(29,"h4"),a(30,"Servicios del Cliente"),n(),c(31,"hr"),u(32,Ht,3,2,"div",9),n(),c(33,"hr"),o(34,"div",1)(35,"button",10),a(36," Volver "),n(),o(37,"button",11),v("click",function(){return l.onSubmit()}),a(38," Guardar "),n()()()()),r&2){let d,h,g,D,N,j;m(5),s("formGroup",l.editForm),m(7),s("ngIf",(d=l.editForm.get("nombreCliente"))==null?null:d.hasError("required")),m(),s("ngIf",(h=l.editForm.get("nombreCliente"))==null?null:h.hasError("minlength")),m(),s("ngIf",(g=l.editForm.get("nombreCliente"))==null?null:g.hasError("maxlength")),m(6),s("ngIf",(D=l.editForm.get("correo"))==null?null:D.hasError("required")),m(),s("ngIf",(N=l.editForm.get("correo"))==null?null:N.hasError("minlength")),m(),s("ngIf",(j=l.editForm.get("correo"))==null?null:j.hasError("maxlength")),m(10),s("ngForOf",l.servicioCliente)}},dependencies:[Ce,P,y,I,w,H,L,G,K,z,A,U,X,Y,Z,J,W,Ye]});let e=t;return e})();var zt=[{path:"listascliente",component:it,children:[{path:"",component:lt},{path:"crearcliente",component:mt},{path:"editarcliente/:id",component:st}]},{path:"**",redirectTo:"listascliente"}],ct=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=V({type:t}),t.\u0275inj=R({imports:[oe.forChild(zt),oe]});let e=t;return e})();var Bi=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=V({type:t}),t.\u0275inj=R({imports:[he,ct,De,Be,Je,Qe,Ae,et,Ve,Ke,Ge,ze,tt,Pe,Xe,Ze]});let e=t;return e})();export{Bi as ClientesModule};
