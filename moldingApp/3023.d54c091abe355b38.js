"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3023],{3023:(he,Z,l)=>{l.r(Z),l.d(Z,{AdminPageModule:()=>Ae});var c=l(9808),_=l(4182),s=l(8402),i=l(3349),m=l(4406),p=l(2833),e=l(6435),A=l(9528);function v(t,o){1&t&&e._UZ(0,"ion-spinner",9)}function q(t,o){1&t&&(e.TgZ(0,"div",10),e.TgZ(1,"ion-label"),e._uU(2,"Pas de moulage \xe0 afficher"),e.qZA(),e.qZA())}function C(t,o){1&t&&e._UZ(0,"th",24)}function x(t,o){if(1&t&&(e.TgZ(0,"td",25),e._UZ(1,"ion-icon",26),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("color",n.status?"danger":"success")}}function P(t,o){1&t&&(e.TgZ(0,"th",24),e._uU(1," ID "),e.qZA())}function y(t,o){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.id," ")}}function b(t,o){1&t&&(e.TgZ(0,"th",24),e._uU(1," Date du moulage "),e.qZA())}function D(t,o){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,n.moldingDay,"dd/MM/yyyy")," ")}}function M(t,o){1&t&&(e.TgZ(0,"th",24),e._uU(1," Cr\xe9\xe9 par "),e.qZA())}function w(t,o){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.userCreat.username," ")}}function S(t,o){1&t&&(e.TgZ(0,"th",24),e._uU(1," Outillage "),e.qZA())}function N(t,o){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.AsE(" ",n.OT.sapToolNumber," - ",n.OT.designation,"")}}function k(t,o){1&t&&e._UZ(0,"th",24)}function Y(t,o){if(1&t&&(e.TgZ(0,"td",25),e.TgZ(1,"ion-button",27),e._uU(2," Editer "),e.qZA(),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("routerLink","/molding/create-molding/"+n.id)}}function Q(t,o){1&t&&e._UZ(0,"tr",28)}function E(t,o){1&t&&e._UZ(0,"tr",29)}function J(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",11),e.TgZ(1,"ion-input",12),e.NdJ("ionInput",function(r){return e.CHM(n),e.oxw().applyFilter(r)}),e.qZA(),e.TgZ(2,"table",13),e.ynx(3,14),e.YNc(4,C,1,0,"th",15),e.YNc(5,x,2,1,"td",16),e.BQk(),e.ynx(6,17),e.YNc(7,P,2,0,"th",15),e.YNc(8,y,2,1,"td",16),e.BQk(),e.ynx(9,18),e.YNc(10,b,2,0,"th",15),e.YNc(11,D,3,4,"td",16),e.BQk(),e.ynx(12,19),e.YNc(13,M,2,0,"th",15),e.YNc(14,w,2,1,"td",16),e.BQk(),e.ynx(15,20),e.YNc(16,S,2,0,"th",15),e.YNc(17,N,2,2,"td",16),e.BQk(),e.ynx(18,21),e.YNc(19,k,1,0,"th",15),e.YNc(20,Y,3,1,"td",16),e.BQk(),e.YNc(21,Q,1,0,"tr",22),e.YNc(22,E,1,0,"tr",23),e.qZA(),e.qZA()}if(2&t){const n=e.oxw();e.xp6(2),e.Q6J("dataSource",n.dataSource),e.xp6(19),e.Q6J("matHeaderRowDef",n.displayedMoldingColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedMoldingColumns)}}let I=(()=>{class t{constructor(n){this.moldingService=n,this.moldingListLoading=!1,this.moldingsError=!1,this.displayedMoldingColumns=["status","id","moldingDay","createdBy","outillage","commands"]}ngAfterViewChecked(){}ngOnDestroy(){}ionViewDidEnter(){this.getMoldings()}ngOnInit(){}getMoldings(){this.moldingListLoading=!0,this.moldingService.getMoldings().subscribe(n=>{this.moldings=n,this.moldingListLoading=!1,this.moldingsError=!1,this.moldings.forEach(a=>{a.status=!1}),this.dataSource=new s.by(this.moldings)},n=>{console.error(n),this.moldingListLoading=!1,this.moldingsError=!0})}applyFilter(n){this.dataSource.filter=n.target.value.trim().toLowerCase()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(A.s))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-admin-molding"]],decls:37,vars:3,consts:[["color","light"],["size","8"],[1,"ion-no-margin"],["slot","end","name","circles",4,"ngIf"],["size","small","slot","end",3,"click"],["size","small","slot","icon-only","name","refresh"],["class","error",4,"ngIf"],["class","moldings-table",4,"ngIf"],["size","4"],["slot","end","name","circles"],[1,"error"],[1,"moldings-table"],["type","text","placeholder","Num\xe9ro d'OT",3,"ionInput"],["mat-table","","fixedLayout","true",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","status"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["matColumnDef","moldingDay"],["matColumnDef","createdBy"],["matColumnDef","outillage"],["matColumnDef","commands"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["name","ellipse",3,"color"],["size","small","expand","block","fill","solid","shape","round",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar"),e.TgZ(2,"ion-title"),e._uU(3,"Administration des moulages"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"ion-content",0),e.TgZ(5,"ion-grid"),e.TgZ(6,"ion-row"),e.TgZ(7,"ion-col",1),e.TgZ(8,"ion-card"),e.TgZ(9,"ion-card-header"),e.TgZ(10,"ion-toolbar",2),e.TgZ(11,"ion-card-title"),e._uU(12,"Liste des moulages"),e.qZA(),e.YNc(13,v,1,0,"ion-spinner",3),e.TgZ(14,"ion-button",4),e.NdJ("click",function(){return a.getMoldings()}),e._UZ(15,"ion-icon",5),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"ion-card-content"),e.YNc(17,q,3,0,"div",6),e.YNc(18,J,23,3,"div",7),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"ion-col",8),e.TgZ(20,"ion-card"),e.TgZ(21,"ion-card-header"),e.TgZ(22,"ion-card-title"),e._uU(23,"Tableau de bord"),e.qZA(),e.qZA(),e.TgZ(24,"ion-card-content"),e.TgZ(25,"ion-card"),e.TgZ(26,"ion-card-header"),e.TgZ(27,"ion-card-subtitle"),e._uU(28,"Nouveaux moulages"),e.qZA(),e.qZA(),e.TgZ(29,"ion-card-content"),e._uU(30," GRAPHIQUE ICI "),e.qZA(),e.qZA(),e.TgZ(31,"ion-card"),e.TgZ(32,"ion-card-header"),e.TgZ(33,"ion-card-subtitle"),e._uU(34,"Nombre de connexions par jour"),e.qZA(),e.qZA(),e.TgZ(35,"ion-card-content"),e._uU(36," GRAPHIQUE ICI "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(13),e.Q6J("ngIf",a.moldingListLoading),e.xp6(4),e.Q6J("ngIf",a.moldingsError&&!a.moldingListLoading),e.xp6(1),e.Q6J("ngIf",a.moldings))},directives:[i.Gu,i.sr,i.wd,i.W2,i.jY,i.Nd,i.wI,i.PM,i.Zi,i.Dq,c.O5,i.YG,i.gu,i.FN,i.tO,i.PQ,i.Q$,i.pK,i.j9,s.BZ,s.w1,s.fO,s.Dz,s.as,s.nj,s.ge,s.ev,i.YI,m.rH,s.XQ,s.Gk],pipes:[c.uU],styles:["mat-table[_ngcontent-%COMP%], table[_ngcontent-%COMP%]{width:100%}"]}),t})();var H=l(9356),u=l(1377),h=l(9172),f=l(2853);function L(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar"),e.TgZ(2,"ion-title"),e._uU(3),e.qZA(),e.TgZ(4,"ion-icon",1),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return r.userState=!1,r.log(r.userState)}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(5,"ion-content"),e.TgZ(6,"ion-item"),e.TgZ(7,"ion-label"),e._uU(8,"Nom"),e.qZA(),e._UZ(9,"ion-input",2),e.qZA(),e.TgZ(10,"ion-item"),e.TgZ(11,"ion-label"),e._uU(12,"Pr\xe9nom"),e.qZA(),e._UZ(13,"ion-input",2),e.qZA(),e.TgZ(14,"ion-item"),e.TgZ(15,"ion-label"),e._uU(16,"Matricule"),e.qZA(),e._UZ(17,"ion-input",2),e.qZA(),e.TgZ(18,"ion-item"),e.TgZ(19,"ion-label"),e._uU(20,"E-Mail"),e.qZA(),e._UZ(21,"ion-input",2),e.qZA(),e.TgZ(22,"ion-item"),e.TgZ(23,"ion-label"),e._uU(24,"T\xe9l\xe9phone"),e.qZA(),e._UZ(25,"ion-input",2),e.qZA(),e.qZA(),e.TgZ(26,"ion-footer"),e.TgZ(27,"ion-toolbar"),e.TgZ(28,"ion-buttons",3),e.TgZ(29,"ion-button",4),e.NdJ("click",function(){return e.CHM(n),e.oxw().deleteUserClick()}),e._UZ(30,"ion-icon",5),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){const n=e.oxw();e.xp6(3),e.AsE(" Fiche utilisateur : ",n.user.nom," ",n.user.prenom,""),e.xp6(6),e.Q6J("value",n.user.nom),e.xp6(4),e.Q6J("value",n.user.prenom),e.xp6(4),e.Q6J("value",n.user.matricule),e.xp6(4),e.Q6J("value",n.user.mail),e.xp6(4),e.Q6J("value",n.user.tel)}}let B=(()=>{class t{constructor(n,a,r){this.loadingService=n,this.alertService=a,this.userService=r,this.userState=!1,this.stateChangeEv=new e.vpe}log(n){console.log(n)}ngOnInit(){}deleteUserClick(){this.loadingService.startLoading("Suppression de l'utilisateur"),this.userService.deleteUser(this.user.id).subscribe(()=>{this.loadingService.stopLoading()},n=>{this.alertService.simpleAlert("Erreur","Suppression d'un utilisateur","Une erreur est survenue pendant la suppression de l'utilisateur. "+n.message),this.loadingService.stopLoading()})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(h.b),e.Y36(f.c),e.Y36(u.f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-sheet"]],inputs:{user:"user",userState:"userState"},outputs:{stateChangeEv:"stateChangeEv"},decls:2,vars:1,consts:[["trigger","trigger-button",3,"isOpen","ionModalDidDismiss"],["button","","slot","end","name","close-outline","size","large",3,"click"],["type","text",3,"value"],["slot","start"],["size","small",3,"click"],["slot","icon-only","name","trash-outline"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-modal",0),e.NdJ("ionModalDidDismiss",function(){return a.userState=!1,a.stateChangeEv.emit(!1)}),e.YNc(1,L,31,7,"ng-template"),e.qZA()),2&n&&e.Q6J("isOpen",a.userState)},directives:[i.ki,i.Gu,i.sr,i.wd,i.gu,i.W2,i.Ie,i.Q$,i.pK,i.j9,i.fr,i.Sm,i.YG],styles:[""]}),t})();const O=["newUsers"];function R(t,o){1&t&&(e.TgZ(0,"th",20),e._uU(1," UserName "),e.qZA())}function j(t,o){if(1&t&&(e.TgZ(0,"td",21),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.id," ")}}function F(t,o){1&t&&(e.TgZ(0,"th",20),e._uU(1," UserName "),e.qZA())}function G(t,o){if(1&t&&(e.TgZ(0,"td",21),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.username," ")}}function z(t,o){1&t&&(e.TgZ(0,"th",20),e._uU(1," Nom "),e.qZA())}function $(t,o){if(1&t&&(e.TgZ(0,"td",21),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.nom," ")}}function W(t,o){1&t&&(e.TgZ(0,"th",20),e._uU(1," Pr\xe9nom "),e.qZA())}function X(t,o){if(1&t&&(e.TgZ(0,"td",21),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.prenom," ")}}function V(t,o){1&t&&(e.TgZ(0,"th",20),e._uU(1," Matricule "),e.qZA())}function K(t,o){if(1&t&&(e.TgZ(0,"td",21),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.matricule," ")}}function ee(t,o){1&t&&(e.TgZ(0,"th",20),e._uU(1," Mail "),e.qZA())}function te(t,o){if(1&t&&(e.TgZ(0,"td",21),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.mail," ")}}function ne(t,o){1&t&&(e.TgZ(0,"th",20),e._uU(1," Roles "),e.qZA())}function ie(t,o){if(1&t&&(e.TgZ(0,"td",21),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.roles," ")}}function oe(t,o){1&t&&e._UZ(0,"th",20)}function ae(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"td",22),e.TgZ(1,"ion-segment",23),e.NdJ("ionChange",function(r){const g=e.CHM(n).$implicit;return e.oxw().statusChanged(r,g)}),e.TgZ(2,"ion-segment-button",24),e._UZ(3,"ion-icon",25),e.qZA(),e.TgZ(4,"ion-segment-button",26),e._UZ(5,"ion-icon",27),e.qZA(),e.qZA(),e.qZA()}}function re(t,o){1&t&&e._UZ(0,"tr",28)}function se(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"tr",29),e.NdJ("click",function(){const d=e.CHM(n).$implicit;return e.oxw().onSelectUser(d)}),e.qZA()}}let le=(()=>{class t{constructor(n,a,r,d){this.userService=n,this.datePipe=a,this.loadingService=r,this.alertService=d,this.isUserSelected=!1,this.displayedUserInactiveColumns=["id","nom","prenom","matricule","roles","commands"],this.weeklyLabels=[],this.weeklyUsers=[]}onSelectUser(n){console.log(n),this.isUserSelected=!0,this.selectedUser=n}ngOnInit(){this.loadingService.startLoading(),this.userService.getUsers().subscribe(n=>{this.users=n,this.weeklyLabels=this.createWeeklyLabel(),this.weeklyUsers=this.createWeeklyUserData(),console.log(this.weeklyLabels,this.weeklyUsers),this.lineChart=new H.Z(this.newUsersCanvas.nativeElement,{type:"line",data:{labels:this.weeklyLabels,datasets:[{label:"Evolution du nombre d'inscription",fill:!1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.weeklyUsers,spanGaps:!1}]}}),this.lineChart.update(),this.loadingService.stopLoading()})}createWeeklyLabel(){const n=new Date,a=new Date(2022,0,1),r=[];for(;a<n;)r.push(this.datePipe.transform(a,"dd/MM")),a.setDate(a.getDate()+7);return r}createWeeklyUserData(){const n=new Date;let a=new Date(2022,0,1);const r=[];for(;a<n;){const d=new Date(a);d.setDate(d.getDate()+7);const T=this.users.filter(U=>new Date(U.createdAt)>a&&new Date(U.createdAt)<=d).length;r.push(T),a=d}return r}statusChanged(n,a){this.confirmUser(a,n.detail.value)}confirmUser(n,a){console.log(n,a)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.f),e.Y36(c.uU),e.Y36(h.b),e.Y36(f.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-admin-user"]],viewQuery:function(n,a){if(1&n&&e.Gf(O,5),2&n){let r;e.iGM(r=e.CRH())&&(a.newUsersCanvas=r.first)}},decls:57,vars:5,consts:[["color","light"],["false",""],["size","8"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","username"],["matColumnDef","nom"],["matColumnDef","prenom"],["matColumnDef","matricule"],["matColumnDef","mail"],["matColumnDef","roles"],["matColumnDef","commands"],["mat-cell","","class","commands",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["size","4"],["newUsers",""],[3,"user","userState","stateChangeEv"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"commands"],[3,"ionChange"],["value","true"],["color","success","name","checkmark-outline"],["value","false"],["color","danger","name","close-outline"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar"),e.TgZ(2,"ion-title"),e._uU(3,"Administration des utilisateurs"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"ion-content",0),e.TgZ(5,"ion-grid",1),e.TgZ(6,"ion-row"),e.TgZ(7,"ion-col",2),e.TgZ(8,"ion-card"),e.TgZ(9,"ion-card-content"),e.TgZ(10,"table",3),e.ynx(11,4),e.YNc(12,R,2,0,"th",5),e.YNc(13,j,2,1,"td",6),e.BQk(),e.ynx(14,7),e.YNc(15,F,2,0,"th",5),e.YNc(16,G,2,1,"td",6),e.BQk(),e.ynx(17,8),e.YNc(18,z,2,0,"th",5),e.YNc(19,$,2,1,"td",6),e.BQk(),e.ynx(20,9),e.YNc(21,W,2,0,"th",5),e.YNc(22,X,2,1,"td",6),e.BQk(),e.ynx(23,10),e.YNc(24,V,2,0,"th",5),e.YNc(25,K,2,1,"td",6),e.BQk(),e.ynx(26,11),e.YNc(27,ee,2,0,"th",5),e.YNc(28,te,2,1,"td",6),e.BQk(),e.ynx(29,12),e.YNc(30,ne,2,0,"th",5),e.YNc(31,ie,2,1,"td",6),e.BQk(),e.ynx(32,13),e.YNc(33,oe,1,0,"th",5),e.YNc(34,ae,6,0,"td",14),e.BQk(),e.YNc(35,re,1,0,"tr",15),e.YNc(36,se,1,0,"tr",16),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(37,"ion-col",17),e.TgZ(38,"ion-card"),e.TgZ(39,"ion-card-header"),e.TgZ(40,"ion-card-title"),e._uU(41,"Tableau de bord"),e.qZA(),e.qZA(),e.TgZ(42,"ion-card-content"),e.TgZ(43,"ion-card"),e.TgZ(44,"ion-card-header"),e.TgZ(45,"ion-card-subtitle"),e._uU(46,"Nouveaux inscrits"),e.qZA(),e.qZA(),e.TgZ(47,"ion-card-content"),e._UZ(48,"canvas",null,18),e.qZA(),e.qZA(),e.TgZ(50,"ion-card"),e.TgZ(51,"ion-card-header"),e.TgZ(52,"ion-card-subtitle"),e._uU(53,"Nombre de connexions par jour"),e.qZA(),e.qZA(),e.TgZ(54,"ion-card-content"),e._uU(55," GRAPHIQUE ICI "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(56,"app-user-sheet",19),e.NdJ("stateChangeEv",function(d){return a.isUserSelected=d}),e.qZA(),e.qZA()),2&n&&(e.xp6(10),e.Q6J("dataSource",a.users),e.xp6(25),e.Q6J("matHeaderRowDef",a.displayedUserInactiveColumns),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedUserInactiveColumns),e.xp6(20),e.Q6J("user",a.selectedUser)("userState",a.isUserSelected))},directives:[i.Gu,i.sr,i.wd,i.W2,i.jY,i.Nd,i.wI,i.PM,i.FN,s.BZ,s.w1,s.fO,s.Dz,s.as,s.nj,i.Zi,i.Dq,i.tO,B,s.ge,s.ev,i.cJ,i.QI,i.GO,i.gu,s.XQ,s.Gk],styles:["mat-cell[_ngcontent-%COMP%]{padding:100px!important}table[_ngcontent-%COMP%]{width:100%}.commands[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around}"]}),t})();var de=l(7704);let ce=(()=>{class t{constructor(n,a){this.authService=n,this.router=a}ngOnInit(){this.user=this.authService.authUser}logoutClick(){this.authService.logout().subscribe(()=>{this.router.navigate(["/login"])})}navigateHome(){this.router.navigate(["/home"])}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(de.e),e.Y36(m.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-shared-admin-header"]],decls:15,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light"],["src","assets/images/logoDaherFondBleu.png",1,"ion-hide-sm-down","logo",3,"click"],[1,"ion-text-uppercase","ion-text-center"],["id","button-profil","color","light","slot","end","outline","",1,"ion-margin-end"],["name","person-circle-outline"],["slot","end","color","danger",1,"ion-hide-sm-down",3,"click"],["slot","end","name","log-out-outline"],[1,"ion-hide-md-down"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar",1),e.TgZ(2,"ion-buttons",2),e._UZ(3,"ion-menu-button",3),e.TgZ(4,"ion-img",4),e.NdJ("click",function(){return a.navigateHome()}),e.qZA(),e.qZA(),e.TgZ(5,"ion-title",5),e._uU(6,"Administration"),e.qZA(),e.TgZ(7,"ion-chip",6),e._UZ(8,"ion-icon",7),e.TgZ(9,"ion-label",3),e._uU(10),e.qZA(),e.qZA(),e.TgZ(11,"ion-button",8),e.NdJ("click",function(){return a.logoutClick()}),e._UZ(12,"ion-icon",9),e.TgZ(13,"ion-label",10),e._uU(14,"D\xe9connexion"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.Q6J("translucent",!1),e.xp6(10),e.Oqu(null==a.user?null:a.user.username))},directives:[i.Gu,i.sr,i.Sm,i.fG,i.Xz,i.wd,i.hM,i.gu,i.Q$,i.YG],styles:[".logo[_ngcontent-%COMP%]{width:100px}"]}),t})();const me=["menuAdmin"],ue=[{path:"",component:(()=>{class t{constructor(n){this.navCtrl=n}ionViewWillEnter(){this.menuAdmin.open()}navigate(n){this.navCtrl.navigateForward(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(i.SH))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-admin"]],viewQuery:function(n,a){if(1&n&&e.Gf(me,5),2&n){let r;e.iGM(r=e.CRH())&&(a.menuAdmin=r.first)}},decls:24,vars:1,consts:[["color","medium",3,"fullscreen"],["side","start","type","push","contentId","admin-content","open","true"],["menuAdmin",""],["color","danger"],["auto-hide","true"],[3,"click"],["slot","end"],["id","admin-content"]],template:function(n,a){1&n&&(e._UZ(0,"app-shared-admin-header"),e.TgZ(1,"ion-content",0),e.TgZ(2,"ion-menu",1,2),e.TgZ(4,"ion-header"),e.TgZ(5,"ion-toolbar",3),e.TgZ(6,"ion-title"),e._uU(7,"Menu de l'admnistration"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"ion-content"),e.TgZ(9,"ion-list"),e.TgZ(10,"ion-menu-toggle",4),e.TgZ(11,"ion-item",5),e.NdJ("click",function(){return a.navigate("admin/admin-user")}),e.TgZ(12,"ion-label"),e._uU(13,"Utilisateurs"),e.qZA(),e.TgZ(14,"ion-badge",6),e._uU(15,"11"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"ion-item"),e._uU(17,"Outillages"),e.qZA(),e.TgZ(18,"ion-menu-toggle",4),e.TgZ(19,"ion-item",5),e.NdJ("click",function(){return a.navigate("admin/admin-molding")}),e._uU(20,"Moulages"),e.qZA(),e.qZA(),e.TgZ(21,"ion-item"),e._uU(22,"Kits"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(23,"ion-router-outlet",7),e.qZA()),2&n&&(e.xp6(1),e.Q6J("fullscreen",!1))},directives:[ce,i.W2,i.z0,i.Gu,i.sr,i.wd,i.q_,i.zc,i.Ie,i.Q$,i.yp,i.jP],styles:[""]}),t})(),children:[{path:"admin-user",component:le,canActivate:[p.p],data:{expectedRole:["ROLE_ADMIN"]}},{path:"admin-molding",canActivate:[p.p],data:{expectedRole:["ROLE_ADMIN"]},component:I}]},{path:"**",redirectTo:"home"}];let ge=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.Bz.forChild(ue)],m.Bz]}),t})(),Ze=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,_.u5,i.Pc]]}),t})();var _e=l(5375),pe=l(2396);let Ae=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[c.uU,_e.e,A.s,u.f],imports:[[c.ez,_.u5,i.Pc,s.p0,ge,Ze,pe.D]]}),t})()}}]);