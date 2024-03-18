import{$ as Xe,A as Q,B as Ve,C as U,D as K,E as J,F as W,G as X,H as Y,I as Z,J as qe,K as Be,L as Pe,M as $e,N as Ge,O as ee,P as He,Q as te,R as Oe,S as ze,T as I,U as Ae,V as L,W as Qe,X as Ue,Y as Ke,Z as Je,_ as We,a as he,aa as Ye,b as _e,c as ge,d as Ce,e as xe,f as Ee,g as be,h as Me,i as ye,j as we,k as Ie,l as Le,m as Fe,n as Te,o as H,p as ke,q as De,r as Ne,s as y,t as O,u as je,v as w,w as Re,x as z,y as u,z as A}from"./chunk-ELSB7MIJ.js";import{a as fe,g as ve,h as Se,i as b,j as M,l as ne}from"./chunk-YZA5K5WE.js";import"./chunk-AESYL7IM.js";import{$ as R,Ab as P,D as j,Db as _,Fb as $,Jb as ie,Kb as re,Lb as oe,Mb as de,Nb as a,Pb as E,Tb as pe,Ua as l,Va as f,_ as ce,da as se,ja as h,jb as p,ka as V,lb as c,ra as q,sa as B,ub as n,vb as r,wb as s,xb as C,xc as G,yb as x,zc as ue}from"./chunk-SQTYW5OA.js";var Ze=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h({type:t,selectors:[["app-servicios"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"]],template:function(i,m){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),s(4,"router-outlet"),r()()()())},dependencies:[Se]});let e=t;return e})();var T=(()=>{let t=class t{constructor(o){this.httpClient=o,this.apiUrl="http://www.apiclienteservicio.somee.com/api"}listaServicios(){let o=`${this.apiUrl}/Servicio/listaServicio`;return this.httpClient.get(o).pipe(j(i=>[]))}obtenerServicio(o){let i=`${this.apiUrl}/Servicio/obtenerServicio/${o}`;return this.httpClient.get(i).pipe(j(m=>[]))}crearServicio(o){console.log(o,"desdeElServicio");let i=`${this.apiUrl}/Servicio/agregarServicio`;return this.httpClient.post(i,o).pipe(j(m=>[]))}editarServicio(o,i){let m=`${this.apiUrl}/Servicio/actualizarServicio/${o}`;return this.httpClient.put(m,i).pipe(j(d=>[]))}eliminarServicio(o){let i=`${this.apiUrl}/Servicio/eliminar/${o}`;return this.httpClient.delete(i)}};t.\u0275fac=function(i){return new(i||t)(se(fe))},t.\u0275prov=ce({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var lt=()=>[5,10,25,100];function ct(e,t){e&1&&(n(0,"th",21),a(1," ID "),r())}function st(e,t){if(e&1&&(n(0,"td",22),a(1),r()),e&2){let v=t.$implicit;l(),E(" ",v.id," ")}}function dt(e,t){e&1&&(n(0,"th",21),a(1," Nombre Servicio "),r())}function pt(e,t){if(e&1&&(n(0,"td",22),a(1),r()),e&2){let v=t.$implicit;l(),E(" ",v.nombreServicio,"")}}function ut(e,t){e&1&&(n(0,"th",21),a(1," Descripci\xF3n "),r())}function ft(e,t){if(e&1&&(n(0,"td",22),a(1),r()),e&2){let v=t.$implicit;l(),E(" ",v.descripcion," ")}}function vt(e,t){e&1&&(n(0,"th",21),a(1," Estado "),r())}function St(e,t){if(e&1&&(n(0,"td",22),a(1),r()),e&2){let v=t.$implicit;l(),E(" ",v.estado?"Activo":"Inactivo"," ")}}function ht(e,t){e&1&&(n(0,"th",21),a(1," Editar "),r())}function _t(e,t){if(e&1){let v=P();n(0,"td",22)(1,"button",23),_("click",function(){let i=q(v).$implicit,m=$();return B(m.actualizarServicio(i.id))}),n(2,"mat-icon"),a(3,"edit"),r()()()}}function gt(e,t){e&1&&(n(0,"th",21),a(1," Eliminar "),r())}function Ct(e,t){if(e&1){let v=P();n(0,"td",22)(1,"button",23),_("click",function(){let i=q(v).$implicit,m=$();return B(m.deleteServicio(i.id))}),n(2,"mat-icon"),a(3,"delete"),r()()()}}function xt(e,t){e&1&&s(0,"tr",24)}function Et(e,t){e&1&&s(0,"tr",25)}function bt(e,t){if(e&1&&(n(0,"tr",26)(1,"td",27),a(2),r()()),e&2){$();let v=de(11);l(2),E('No data matching the filter "',v.value,'"')}}var ot=(()=>{let t=class t{constructor(o,i,m){this.servicioService=o,this.snackBar=i,this.route=m,this.displayedColumns=["id","nombreServicio","descripcion","estado","edit","delete"],this.listaServicio()}ngOnInit(){}listaServicio(){this.servicioService.listaServicios().subscribe({next:o=>{this.dataSource=new Te(o),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,console.log(o)}})}actualizarServicio(o){console.log(o),this.route.navigate(["/servicio/listaservicio/editarservicio",o])}deleteServicio(o){this.servicioService.eliminarServicio(o).subscribe({next:()=>{this.alertaMensaje("Registro eliminado","ok"),this.dataSource.data=this.dataSource.data.filter(i=>i.id!==o),this.dataSource.paginator.length!==this.dataSource.data.length&&(this.dataSource.paginator.length=this.dataSource.data.length)},error:i=>{i.status===500?this.alertaMensaje("No se puede eliminar este servicio pues mantiene servicios adjuntos","Error"):this.snackBar.open("Error al eliminar el servicio: "+i.message,"Cerrar",{duration:3e3})}})}alertaMensaje(o,i){this.snackBar.open(o,i),this.snackBar.open(o,i,{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})}applyFilter(o){let i=o.target.value;this.dataSource.filter=i.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}};t.\u0275fac=function(i){return new(i||t)(f(T),f(I),f(b))},t.\u0275cmp=h({type:t,selectors:[["app-servicios-list"]],viewQuery:function(i,m){if(i&1&&(ie(ee,7),ie(te,5)),i&2){let d;re(d=oe())&&(m.paginator=d.first),re(d=oe())&&(m.sort=d.first)}},decls:43,vars:5,consts:[["input",""],[1,"row"],[1,"col"],[1,"col-md-9"],["matInput","","appearance","outline",1,"example-full-width",3,"keyup"],["matInput","","placeholder",""],[1,"col","mb-3"],["mat-fab","","extended","","color","primary","routerLink","/servicio/listaservicio/crearservicio"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombreServicio"],["matColumnDef","descripcion"],["matColumnDef","estado"],["matColumnDef","edit"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(i,m){if(i&1){let d=P();n(0,"div",1)(1,"div",2)(2,"h2"),a(3,"Panel Servicios"),r(),s(4,"hr"),r()(),n(5,"div",1)(6,"div",3)(7,"mat-form-field",4),_("keyup",function(g){return q(d),B(m.applyFilter(g))}),n(8,"mat-label"),a(9,"Buscar servicio"),r(),s(10,"input",5,0),r()(),n(12,"div",6)(13,"button",7)(14,"mat-icon"),a(15,"add"),r(),a(16," Crear servicio: "),r()(),s(17,"hr"),r(),n(18,"div",1)(19,"div",2)(20,"table",8),C(21,9),p(22,ct,2,0,"th",10)(23,st,2,1,"td",11),x(),C(24,12),p(25,dt,2,0,"th",10)(26,pt,2,1,"td",11),x(),C(27,13),p(28,ut,2,0,"th",10)(29,ft,2,1,"td",11),x(),C(30,14),p(31,vt,2,0,"th",10)(32,St,2,1,"td",11),x(),C(33,15),p(34,ht,2,0,"th",10)(35,_t,4,0,"td",11),x(),C(36,16),p(37,gt,2,0,"th",10)(38,Ct,4,0,"td",11),x(),p(39,xt,1,0,"tr",17)(40,Et,1,0,"tr",18)(41,bt,3,1,"tr",19),r(),s(42,"mat-paginator",20),r()()}i&2&&(l(20),c("dataSource",m.dataSource),l(19),c("matHeaderRowDef",m.displayedColumns),l(),c("matRowDefColumns",m.displayedColumns),l(2),c("pageSizeOptions",pe(4,lt)))},dependencies:[M,_e,Ce,Me,xe,ge,ye,Ee,be,we,Ie,Le,w,y,L,te,Oe,ee,De,ke,Ue],styles:[".example-full-width[_ngcontent-%COMP%]{width:100%}"]});let e=t;return e})();function wt(e,t){e&1&&(n(0,"mat-error"),a(1," Nombre del Servicio es requerido. "),r())}function It(e,t){e&1&&(n(0,"mat-error"),a(1," El nombre debe tener al menos 10 caracteres. "),r())}function Lt(e,t){e&1&&(n(0,"mat-error"),a(1," El nombre debe tener maximo 30 caracteres. "),r())}function Ft(e,t){e&1&&(n(0,"mat-error"),a(1," La descripci\xF3n es requerida. "),r())}function Tt(e,t){e&1&&(n(0,"mat-error"),a(1," La descripci\xF3n debe tener al menos 10 caracteres. "),r())}function kt(e,t){e&1&&(n(0,"mat-error"),a(1," La descripci\xF3n debe tener menos de 30 caracteres. "),r())}function Dt(e,t){e&1&&(n(0,"mat-error"),a(1," Estado es requerido. "),r())}var nt=(()=>{let t=class t{constructor(o,i,m){this.servicioService=o,this.snackBar=i,this.route=m,this.formularioServicio=new Ve({nombreServicio:new U("",[u.required,u.minLength(10),u.maxLength(30)]),descripcionServicio:new U("",[u.required,u.minLength(10),u.maxLength(30)]),estado:new U("",[u.required])})}guardarServicio(){if(this.formularioServicio.invalid){this.alertaMensaje("Porfavor llenar el formulario.","Error");return}let o={nombreServicio:this.formularioServicio.value.nombreServicio,descripcion:this.formularioServicio.value.descripcionServicio,estado:this.formularioServicio.value.estado==="true"};this.servicioService.crearServicio(o).subscribe({next:i=>{this.alertaMensaje("Servicio creado.","OK"),this.formularioServicio.reset(),this.route.navigate(["/listaservicio"])},error:i=>{this.alertaMensaje("No se puede crear el servicio.","Error")}})}alertaMensaje(o,i){this.snackBar.open(o,i),this.snackBar.open(o,i,{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})}};t.\u0275fac=function(i){return new(i||t)(f(T),f(I),f(b))},t.\u0275cmp=h({type:t,selectors:[["app-servicios-create"]],decls:51,vars:8,consts:[[1,"row"],[1,"col"],[3,"formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","nombreServicio","required","","minlength","10","maxlength","30"],["align","start"],[4,"ngIf"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","descripcionServicio","required","","minlength","10","maxlength","30"],["name","estadoServicio","formControlName","estado"],["value","true"],["value","false"],[1,"text-center","mt-3"],["mat-flat-button","","color","primary","routerLink","/listaservicio",1,"m-2"],["mat-flat-button","","color","primary",1,"m-2",3,"click"]],template:function(i,m){if(i&1&&(n(0,"div",0)(1,"div",1)(2,"h2"),a(3,"Crear Servicio"),r()()(),s(4,"hr"),n(5,"form",2)(6,"div",0)(7,"div",1)(8,"mat-form-field",3)(9,"mat-label"),a(10,"Nombre del Servicio"),r(),s(11,"input",4),n(12,"mat-hint",5)(13,"strong"),a(14,"Ingresa el nombre del servicio."),r()(),p(15,wt,2,0,"mat-error",6)(16,It,2,0,"mat-error",6)(17,Lt,2,0,"mat-error",6),r()(),n(18,"div",1)(19,"mat-form-field",7)(20,"mat-label"),a(21,"Descripci\xF3n"),r(),s(22,"input",8),n(23,"mat-hint",5)(24,"strong"),a(25,"Ingresa la descripcion del servicio."),r()(),p(26,Ft,2,0,"mat-error",6)(27,Tt,2,0,"mat-error",6)(28,kt,2,0,"mat-error",6),r()(),n(29,"div",1)(30,"mat-form-field",3)(31,"mat-label"),a(32,"Estado"),r(),n(33,"mat-select",9)(34,"mat-option",10),a(35,"Activo"),r(),n(36,"mat-option",11),a(37,"Inactivo"),r()(),n(38,"mat-hint",5)(39,"strong"),a(40,"Elige el estado del servivio."),r()(),p(41,Dt,2,0,"mat-error",6),r()()(),s(42,"hr"),n(43,"div",0)(44,"div",1)(45,"section")(46,"div",12)(47,"button",13),a(48," Volver "),r(),n(49,"button",14),_("click",function(){return m.guardarServicio()}),a(50," Guardar "),r()()()()()()),i&2){let d,S,g,k,D,N,le;l(5),c("formGroup",m.formularioServicio),l(10),c("ngIf",(d=m.formularioServicio.get("nombreServicio"))==null?null:d.hasError("required")),l(),c("ngIf",(S=m.formularioServicio.get("nombreServicio"))==null?null:S.hasError("minlength")),l(),c("ngIf",(g=m.formularioServicio.get("nombreServicio"))==null?null:g.hasError("maxlength")),l(9),c("ngIf",(k=m.formularioServicio.get("descripcionServicio"))==null?null:k.hasError("required")),l(),c("ngIf",(D=m.formularioServicio.get("descripcionServicio"))==null?null:D.hasError("minlength")),l(),c("ngIf",(N=m.formularioServicio.get("descripcionServicio"))==null?null:N.hasError("maxlength")),l(13),c("ngIf",(le=m.formularioServicio.get("estado"))==null?null:le.hasError("required"))}},dependencies:[G,M,w,y,je,O,L,H,K,z,A,Q,X,Y,Z,J,W,$e,he],styles:[".example-button-row[_ngcontent-%COMP%]{display:table-cell;max-width:600px}"]});let e=t;return e})();function Nt(e,t){e&1&&(n(0,"mat-error"),a(1," Nombre del Servicio es requerido. "),r())}function jt(e,t){e&1&&(n(0,"mat-error"),a(1," El nombre debe tener al menos 10 caracteres. "),r())}function Rt(e,t){e&1&&(n(0,"mat-error"),a(1," El nombre debe tener maximo 30 caracteres. "),r())}function Vt(e,t){e&1&&(n(0,"mat-error"),a(1," La descripci\xF3n del servicio es requerido. "),r())}function qt(e,t){e&1&&(n(0,"mat-error"),a(1," La descripci\xF3n debe tener al menos 10 caracteres. "),r())}function Bt(e,t){e&1&&(n(0,"mat-error"),a(1," La descripci\xF3n debe tener maximo 30 caracteres. "),r())}var at=(()=>{let t=class t{constructor(o,i,m,d,S){this.route=o,this.servicioService=i,this.fb=m,this.snackBar=d,this.router=S,this.editForm=this.fb.group({nombreServicio:["",[u.required,u.minLength(10),u.maxLength(30)]],descripcion:["",[u.required,u.minLength(10),u.maxLength(30)]],estado:[""]})}ngOnInit(){this.id=this.route.snapshot.params.id,this.servicioService.obtenerServicio(this.id).subscribe(o=>{this.servicio=o,this.editForm=this.fb.group({nombreServicio:[o.nombreServicio],descripcion:[o.descripcion],estado:[o.estado]})})}onSubmit(){if(this.editForm.valid){let o={nombreServicio:this.editForm.get("nombreServicio").value,descripcion:this.editForm.get("descripcion").value,estado:this.editForm.get("estado").value};this.servicioService.editarServicio(this.id,o).subscribe(()=>{this.alertaMensaje("Servicio actualizado.","OK"),this.router.navigate(["/listaservicio"])})}}alertaMensaje(o,i){this.snackBar.open(o,i),this.snackBar.open(o,i,{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})}};t.\u0275fac=function(i){return new(i||t)(f(ve),f(T),f(qe),f(I),f(b))},t.\u0275cmp=h({type:t,selectors:[["app-servicios-edit"]],decls:33,vars:7,consts:[[1,"row"],[1,"col"],[3,"formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","nombreServicio","required","","minlength","10","maxlength","30"],[4,"ngIf"],["matInput","","type","text","type","text","formControlName","descripcion","required","","minlength","10","maxlength","30"],[1,"example-section"],["formControlName","estado",1,"example-margin"],["mat-flat-button","","color","primary","routerLink","/listaservicio",1,"m-2"],["mat-flat-button","","color","primary","type","submit",1,"m-2",3,"click"]],template:function(i,m){if(i&1&&(n(0,"div",0)(1,"div",1)(2,"h2"),a(3,"Editar Servicio"),r()()(),s(4,"hr"),n(5,"form",2)(6,"div",0)(7,"div",1)(8,"mat-form-field",3)(9,"mat-label"),a(10,"Nombre del Servicio"),r(),s(11,"input",4),p(12,Nt,2,0,"mat-error",5)(13,jt,2,0,"mat-error",5)(14,Rt,2,0,"mat-error",5),r()(),n(15,"div",1)(16,"mat-form-field",3)(17,"mat-label"),a(18,"Descripcion"),r(),s(19,"input",6),p(20,Vt,2,0,"mat-error",5)(21,qt,2,0,"mat-error",5)(22,Bt,2,0,"mat-error",5),r()(),n(23,"div",1)(24,"section",7)(25,"mat-checkbox",8),a(26," Activo "),r()()(),s(27,"hr"),n(28,"div",1)(29,"button",9),a(30," Volver "),r(),n(31,"button",10),_("click",function(){return m.onSubmit()}),a(32," Guardar "),r()()()()),i&2){let d,S,g,k,D,N;l(5),c("formGroup",m.editForm),l(7),c("ngIf",(d=m.editForm.get("nombreServicio"))==null?null:d.hasError("required")),l(),c("ngIf",(S=m.editForm.get("nombreServicio"))==null?null:S.hasError("minlength")),l(),c("ngIf",(g=m.editForm.get("nombreServicio"))==null?null:g.hasError("maxlength")),l(6),c("ngIf",(k=m.editForm.get("descripcion"))==null?null:k.hasError("required")),l(),c("ngIf",(D=m.editForm.get("descripcion"))==null?null:D.hasError("minlength")),l(),c("ngIf",(N=m.editForm.get("nombreServicio"))==null?null:N.hasError("maxlength"))}},dependencies:[G,M,w,y,O,L,H,K,z,A,Q,X,Y,Z,J,W,Je]});let e=t;return e})();var Pt=[{path:"listaservicio",component:Ze,children:[{path:"",component:ot},{path:"crearservicio",component:nt},{path:"editarservicio/:id",component:at}]},{path:"**",redirectTo:"listaservicio"}],mt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=V({type:t}),t.\u0275inj=R({imports:[ne.forChild(Pt),ne]});let e=t;return e})();var Ni=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=V({type:t}),t.\u0275inj=R({imports:[ue,mt,Fe,Re,Qe,ze,He,Xe,Ne,Ae,Pe,Ge,Ye,Be,Ke,We]});let e=t;return e})();export{Ni as ServiciosModule};
