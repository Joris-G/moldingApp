"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1547],{8190:(x,f,l)=>{l.d(f,{b:()=>c});var e=l(4762),u=l(3668),p=l(1704);let c=(()=>{class a{constructor(m){this.loadingController=m}startLoading(m){this.loadingController.create({cssClass:"my-custom-class",message:m}).then(T=>{T.present()})}stopLoading(){return(0,e.mG)(this,void 0,void 0,function*(){setTimeout(()=>{this.loadingController.dismiss()},100)})}}return a.\u0275fac=function(m){return new(m||a)(u.LFG(p.HT))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},1547:(x,f,l)=>{l.r(f),l.d(f,{ToolRequestsPageModule:()=>oe});var e=l(3668),u=l(6019),p=l(9133),c=l(2899),a=l(1704),d=l(3050),m=l(4382),T=l(4762),h=l(9814),R=l(3580),Z=l(5243),C=l(8190),P=l(1171);function v(o,n){if(1&o&&(e.TgZ(0,"ion-select-option",28),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function A(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"ion-item",25),e.TgZ(1,"ion-label"),e._uU(2),e.qZA(),e.TgZ(3,"ion-select",26),e.NdJ("ionChange",function(s){const _=e.CHM(t).$implicit;return e.oxw().filterChange(_,s)}),e.YNc(4,v,2,2,"ion-select-option",27),e.qZA(),e.qZA()}if(2&o){const t=n.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(1),e.Q6J("placeholder","Filtre "+t.name),e.xp6(1),e.Q6J("ngForOf",t.options)}}function b(o,n){1&o&&(e.TgZ(0,"th",29),e._uU(1," Statut "),e.qZA())}function S(o,n){if(1&o&&(e.TgZ(0,"td",30),e._uU(1),e.qZA()),2&o){const t=n.$implicit,i=e.oxw();e.Udp("border-left",i.getBorder(t)),e.xp6(1),e.hij(" ",t.statut,"")}}function D(o,n){1&o&&(e.TgZ(0,"th",29),e._uU(1," Num\xe9ro "),e.qZA())}function y(o,n){if(1&o&&(e.TgZ(0,"td",30),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.hij(" ",t.id," ")}}function O(o,n){1&o&&(e.TgZ(0,"th",29),e._uU(1," Outillage "),e.qZA())}function N(o,n){if(1&o&&(e.TgZ(0,"ion-label"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.AsE("OT",t.controle.outillage.sapToolNumber," - ",t.controle.outillage.designation,"")}}function M(o,n){if(1&o&&(e.TgZ(0,"ion-label"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.AsE("OT",t.maintenance.outillage.sapToolNumber," - ",t.maintenance.outillage.designation,"")}}function U(o,n){if(1&o&&(e.TgZ(0,"td",30),e.YNc(1,N,2,2,"ion-label",31),e.YNc(2,M,2,2,"ion-label",31),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.Q6J("ngIf",t.controle),e.xp6(1),e.Q6J("ngIf",t.maintenance)}}function Y(o,n){1&o&&(e.TgZ(0,"th",32),e._uU(1," Date demande "),e.qZA())}function F(o,n){if(1&o&&(e.TgZ(0,"td",30),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.hij(" ",e.Dn7(2,1,t.createdAt,"EE dd MMM yyyy","local")," ")}}function w(o,n){1&o&&(e.TgZ(0,"th",29),e._uU(1," Demandeur "),e.qZA())}function J(o,n){if(1&o&&(e.TgZ(0,"ion-label"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.controle.demandeur.username)}}function Q(o,n){if(1&o&&(e.TgZ(0,"ion-label"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.maintenance.demandeur.username)}}function E(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"td",33),e.NdJ("click",function(){return e.CHM(t),e.oxw().userClick()}),e.YNc(1,J,2,1,"ion-label",31),e.YNc(2,Q,2,1,"ion-label",31),e.qZA()}if(2&o){const t=n.$implicit;e.xp6(1),e.Q6J("ngIf",t.controle),e.xp6(1),e.Q6J("ngIf",t.maintenance)}}function L(o,n){1&o&&(e.TgZ(0,"th",32),e._uU(1," Date Besoin "),e.qZA())}function k(o,n){if(1&o&&(e.TgZ(0,"ion-label"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.Dn7(2,1,t.controle.dateBesoin,"dd MMMM yyyy","local"),"")}}function I(o,n){if(1&o&&(e.TgZ(0,"ion-label"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.Dn7(2,1,t.maintenance.dateBesoin,"dd MMMM yyyy","local"),"")}}function B(o,n){if(1&o&&(e.TgZ(0,"td",30),e.YNc(1,k,3,5,"ion-label",31),e.YNc(2,I,3,5,"ion-label",31),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.Q6J("ngIf",t.controle),e.xp6(1),e.Q6J("ngIf",t.maintenance)}}function $(o,n){1&o&&e._UZ(0,"th",29)}function j(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"ion-button",35),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit;return e.oxw().openControlClick(s)}),e._uU(1," Ouvrir "),e.qZA()}}function H(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"ion-button",35),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit;return e.oxw().openMaintenanceClick(s)}),e._uU(1," Ouvrir "),e.qZA()}}function V(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"ion-button",35),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit;return e.oxw().removeRequestClick(s)}),e._UZ(1,"ion-icon",36),e._uU(2," Delete "),e.qZA()}}function z(o,n){if(1&o&&(e.TgZ(0,"td",30),e.YNc(1,j,2,0,"ion-button",34),e.YNc(2,H,2,0,"ion-button",34),e.YNc(3,V,3,0,"ion-button",34),e.qZA()),2&o){const t=n.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngIf",t.controle),e.xp6(1),e.Q6J("ngIf",t.maintenance),e.xp6(1),e.Q6J("ngIf",i.isAdmin)}}function G(o,n){1&o&&e._UZ(0,"tr",37)}function W(o,n){1&o&&e._UZ(0,"tr",38),2&o&&e.Q6J("@openClose","EN COURS DE REALISATION"===n.$implicit.statut?"open":"")}const K=[{path:"",component:(()=>{class o{constructor(t,i,s,r,_){this.toolRequestService=t,this.alertControleService=i,this.navCtrl=s,this.loaderService=r,this.authGuard=_,this.displayedRequestColumns=["statut","id","tool","createdAt","userCreat","needDate","buttons"],this.tableRequestsDataSource=new c.by,this.isAdmin=!1,this.filterSelectObjects=[],this.filterValues={},this.activeFilters=[],this.filterSelectObjects=[{name:"Statut",columnProp:"statut",options:[]},{name:"Type de demande",columnProp:"type",options:[]}]}ionViewWillEnter(){this.updateRequestList(),this.isAdmin=this.authGuard.isRole(["ROLE_ADMIN"])}ngOnInit(){this.tableRequestsDataSource.filterPredicate=this.createFilter()}createFilter(){return(i,s)=>{const r=JSON.parse(s);let _=!1;for(const g in r)g&&(""!==r[g].toString()?_=!0:delete r[g]);let q=!1;if(_){for(const g in r)g&&r[g].trim().toLowerCase().split(" ").forEach(ne=>{-1!==i[g].toString().toLowerCase().indexOf(ne)&&_&&(q=!0)});return q}return!0}}resetFilters(){this.filterValues={},this.filterSelectObjects.forEach((t,i)=>{t.modelValue=void 0}),this.activeFilters.forEach(t=>{t.value=""}),this.tableRequestsDataSource.filter=""}getFilterObject(t,i){console.log(t,i);const s=[];return t.filter(r=>(s.includes(r[i])||s.push(r[i]),r)),s}updateRequestList(){return(0,T.mG)(this,void 0,void 0,function*(){this.loaderService.startLoading("Pateinter pendant le chargement des demandes"),this.toolRequestService.getToolRequests().then(t=>{this.tableRequestsDataSource.data=t,this.filterSelectObjects.filter(i=>{console.log(i),i.options=this.getFilterObject(this.tableRequestsDataSource.data,i.columnProp)})}).catch(t=>{console.error(t),this.alertControleService.simpleAlert("Erreur","Mise \xe0 jour de la liste","La liste des requ\xeates ne s'est pas mise \xe0 jour correctement ")}).finally(()=>{this.loaderService.stopLoading()})})}userClick(){}openControlClick(t){this.navCtrl.navigateForward("tooling/3D-tool/"+t.id)}openMaintenanceClick(t){this.navCtrl.navigateForward("tooling/repair-tool/"+t.id)}getBorder(t){return"controle"===this.toolRequestService.getType(t)?"4px lawngreen solid":"maintenance"===this.toolRequestService.getType(t)?"4px yellow solid":void 0}filterChange(t,i){console.log(t,i),this.activeFilters.push(i.target),this.filterValues[t.columnProp]=i.target.value.trim(),console.log(this.filterValues[t.columnProp]),console.log(JSON.stringify(this.filterValues)),this.tableRequestsDataSource.filter=JSON.stringify(this.filterValues)}filterRequestTypeChanged(t){this.tableRequestsDataSource.filter=t.target.value.trim().toLowerCase(),console.log(t)}filterRequestStatusChanged(t){this.tableRequestsDataSource.filter=t.target.value.trim().toLowerCase(),console.log(t)}removeRequestClick(t){this.toolRequestService.removeRequest(t).then(()=>{this.updateRequestList()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(R.C),e.Y36(Z.c),e.Y36(a.SH),e.Y36(C.b),e.Y36(P.p))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-tool-requests"]],decls:44,vars:5,consts:[["color","dark"],["multi","",1,"example-headers-align"],["togglePosition","before"],["slot","start","name","filter-outline"],[1,"filter-toolbar"],["aria-expanded","true",1,"filters"],["class","filter-item ion-margin",4,"ngFor","ngForOf"],["slot","end",3,"click"],[1,"table","ion-justify-content-center","ion-align-items-center"],["mat-table","","fixedLayout","true","matSort","","matSortActive","needDate",1,"mat-elevation-z8",3,"dataSource"],["table",""],["matColumnDef","statut"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"border-left",4,"matCellDef"],["matColumnDef","id"],["mat-cell","",4,"matCellDef"],["matColumnDef","tool"],["matColumnDef","createdAt"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","userCreat"],["mat-cell","",3,"click",4,"matCellDef"],["matColumnDef","needDate"],["matColumnDef","buttons"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"filter-item","ion-margin"],["multiple","false",1,"filter",3,"placeholder","ionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",3,"click"],["size","small",3,"click",4,"ngIf"],["size","small",3,"click"],["slot","end","name","trash-outline"],["mat-header-row",""],["mat-row",""]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar",0),e.TgZ(2,"ion-title"),e._uU(3,"Liste des demandes"),e.qZA(),e.qZA(),e.TgZ(4,"ion-toolbar"),e.TgZ(5,"mat-accordion",1),e.TgZ(6,"mat-expansion-panel",2),e.TgZ(7,"mat-expansion-panel-header"),e.TgZ(8,"mat-panel-title"),e._UZ(9,"ion-icon",3),e._uU(10," Filtres "),e.qZA(),e._UZ(11,"mat-panel-description"),e.qZA(),e.TgZ(12,"ion-toolbar",4),e.TgZ(13,"div",5),e.YNc(14,A,5,3,"ion-item",6),e.qZA(),e.TgZ(15,"ion-button",7),e.NdJ("click",function(){return i.resetFilters()}),e._uU(16," Supprimer les filtres "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"ion-content"),e.TgZ(18,"div",8),e.TgZ(19,"table",9,10),e.ynx(21,11),e.YNc(22,b,2,0,"th",12),e.YNc(23,S,2,3,"td",13),e.BQk(),e.ynx(24,14),e.YNc(25,D,2,0,"th",12),e.YNc(26,y,2,1,"td",15),e.BQk(),e.ynx(27,16),e.YNc(28,O,2,0,"th",12),e.YNc(29,U,3,2,"td",15),e.BQk(),e.ynx(30,17),e.YNc(31,Y,2,0,"th",18),e.YNc(32,F,3,5,"td",15),e.BQk(),e.ynx(33,19),e.YNc(34,w,2,0,"th",12),e.YNc(35,E,3,2,"td",20),e.BQk(),e.ynx(36,21),e.YNc(37,L,2,0,"th",18),e.YNc(38,B,3,2,"td",15),e.BQk(),e.ynx(39,22),e.YNc(40,$,1,0,"th",12),e.YNc(41,z,4,3,"td",15),e.BQk(),e.YNc(42,G,1,0,"tr",23),e.YNc(43,W,1,1,"tr",24),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(14),e.Q6J("ngForOf",i.filterSelectObjects),e.xp6(5),e.Q6J("dataSource",i.tableRequestsDataSource),e.xp6(23),e.Q6J("matHeaderRowDef",i.displayedRequestColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",i.displayedRequestColumns))},directives:[a.Gu,a.sr,a.wd,d.pp,d.ib,d.yz,d.yK,a.gu,d.u4,u.sg,a.YG,a.W2,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,a.Ie,a.Q$,a.t9,a.QI,a.n0,c.ge,c.ev,u.O5,c.XQ,c.Gk],pipes:[u.uU],styles:[".mat-row[_ngcontent-%COMP%]{height:auto}.mat-cell[_ngcontent-%COMP%]{padding:8px 16px 8px 0}.table[_ngcontent-%COMP%]{display:flex;padding:14px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%]{border-color:currentColor}.filter-item[_ngcontent-%COMP%]{width:auto}.filters[_ngcontent-%COMP%]{display:flex}"],data:{animation:[(0,h.X$)("openClose",[(0,h.SB)("open",(0,h.oB)({backgroundColor:"DarkOrange",opacity:"0.7"}))])]}}),o})()}];let X=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.Bz.forChild(K)],m.Bz]}),o})();var ee=l(5523),te=l(9749);let oe=(()=>{class o{constructor(){(0,u.qS)(te.Z)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[{provide:e.soG,useValue:"fr-FR"}],imports:[[u.ez,p.u5,a.Pc,X,ee.A,c.p0,d.To]]}),o})()}}]);