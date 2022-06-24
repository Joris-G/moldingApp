"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2080],{9172:(Z,v,r)=>{r.d(v,{b:()=>c});var t=r(655),e=r(5e3),p=r(3349);let c=(()=>{class n{constructor(s){this.loadingController=s}startLoading(s="Chargement ..."){this.loadingController.create({spinner:"lines",cssClass:"my-custom-class",message:s}).then(_=>{_.present()})}stopLoading(){return(0,t.mG)(this,void 0,void 0,function*(){setTimeout(()=>{this.loadingController.dismiss()},100)})}}return n.\u0275fac=function(s){return new(s||n)(e.LFG(p.HT))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},8627:(Z,v,r)=>{r.d(v,{W:()=>c});var t=r(2340),e=r(5e3),p=r(8219);let c=(()=>{class n{constructor(s){this.requestService=s}getPrograms(){return this.requestService.createGetRequest(`${t.N.usineApi}programme_avions`)}getIri(s){return"string"==typeof s?s:`/api/programme_avions/${s.id}`}}return n.\u0275fac=function(s){return new(s||n)(e.LFG(p.s))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},181:(Z,v,r)=>{r.d(v,{N:()=>n});var t=r(2340),e=r(5e3),p=r(8219);let n=(()=>{class g{constructor(_){this.requestService=_}getRoles(){return this.requestService.createGetRequest(`${t.N.usineApi}postes`)}getIri(_){return"string"==typeof _?_:`/api/postes/${_.id}`}}return g.\u0275fac=function(_){return new(_||g)(e.LFG(p.s))},g.\u0275prov=e.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},4337:(Z,v,r)=>{r.d(v,{z:()=>c});var t=r(2340),e=r(5e3),p=r(8219);let c=(()=>{class n{constructor(s){this.requestService=s}getServices(){return this.requestService.createGetRequest(`${t.N.usineApi}services`)}getIri(s){return"string"==typeof s?s:`/api/services/${s.id}`}}return n.\u0275fac=function(s){return new(s||n)(e.LFG(p.s))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},7847:(Z,v,r)=>{r.d(v,{W:()=>c});var t=r(2340),e=r(5e3),p=r(8219);let c=(()=>{class n{constructor(s){this.requestService=s}getUnites(){return this.requestService.createGetRequest(`${t.N.usineApi}divisions`)}getIri(s){return"string"==typeof s?s:`/api/services/${s.id}`}}return n.\u0275fac=function(s){return new(s||n)(e.LFG(p.s))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},1377:(Z,v,r)=>{r.d(v,{f:()=>a});var t=r(655),e=r(2340),p=r(5e3),c=r(8219),n=r(181),g=r(4337),s=r(8627),_=r(7847);let h=(()=>{class o{constructor(){}getIri(i){return"string"==typeof i?i:`/api/services/${i.id}`}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275prov=p.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),a=(()=>{class o{constructor(i,U,T,S,l,f){this.requestService=i,this.roleService=U,this.serviceService=T,this.programService=S,this.uniteService=l,this.usineService=f}getUserById(i){return this.requestService.createGetRequest(e.N.usineApi+`users/${i}`)}getUsers(i){return this.requestService.createGetRequest(e.N.usineApi+"users")}registerUser(i){return this.requestService.createPostRequest(e.N.usineApi+"users",i)}getIri(i){return"string"==typeof i?i:`/api/users/${i.id}`}getGroups(){return this.requestService.createGetRequest(`${e.N.usineApi}groupe_affectations`)}createGroup(i){return this.requestService.createPostRequest(`${e.N.usineApi}groupe_affectations`,i)}updateUser(i){const U={matricule:i.matricule,nom:i.nom,prenom:i.prenom,poste:this.roleService.getIri(i.poste),service:this.serviceService.getIri(i.service),programmeAvion:i.programmeAvion.map(T=>this.programService.getIri(T)),unite:this.uniteService.getIri(i.unite),site:this.usineService.getIri(i.site),tel:i.tel};return this.requestService.createPatchRequest(`${e.N.usineApi}users/${i.id}`,U)}addUserToGroup(i){return new Promise((U,T)=>(0,t.mG)(this,void 0,void 0,function*(){for(const S of i.groupeAffectations){const l={libelle:S.libelle,population:S.population.map(f=>this.getIri(f))};l.population.push(this.getIri(i)),yield this.requestService.createPatchRequest(`${e.N.usineApi}groupe_affectations/$${S.id}/addUsers`,{population:l.population}).subscribe(f=>{i.groupeAffectations=f})}U(i)}))}getUsersByService(i){return this.requestService.createGetRequest(`${e.N.usineApi}services/${i}`)}deleteUser(i){return this.requestService.createDeleteRequest(`${e.N.usineApi}users/${i}`)}confirmUser(i,U){return this.requestService.createPatchRequest(`${e.N.usineApi}users/${i}`,{isActive:U})}}return o.\u0275fac=function(i){return new(i||o)(p.LFG(c.s),p.LFG(n.N),p.LFG(g.z),p.LFG(s.W),p.LFG(_.W),p.LFG(h))},o.\u0275prov=p.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},5681:(Z,v,r)=>{r.d(v,{Q:()=>_});var t=r(4147),e=r(5e3),p=r(7704),c=r(3349),n=r(2361);const g=["menu"];function s(h,u){if(1&h){const a=e.EpF();e.TgZ(0,"ion-content"),e.TgZ(1,"ion-list"),e.TgZ(2,"ion-item",15),e.NdJ("click",function(){e.CHM(a);const d=e.oxw();return d.isUserOpen=!0,d.isPopoverOpen=!d.isPopoverOpen,d.log(d.isUserOpen)}),e.TgZ(3,"ion-label"),e._uU(4,"Profil"),e.qZA(),e.qZA(),e.TgZ(5,"ion-item"),e.TgZ(6,"ion-label"),e._uU(7,"Pr\xe9f\xe9rences"),e.qZA(),e._UZ(8,"ion-icon",16),e.qZA(),e.TgZ(9,"ion-item",17),e.NdJ("click",function(){return e.CHM(a),e.oxw().navigate("admin")}),e.TgZ(10,"ion-label"),e._uU(11,"Administration"),e.qZA(),e._UZ(12,"ion-icon",18),e.qZA(),e.TgZ(13,"ion-item",19),e.NdJ("click",function(){return e.CHM(a),e.oxw().logoutClick()}),e._UZ(14,"ion-icon",20),e.TgZ(15,"ion-label"),e._uU(16,"D\xe9connexion"),e.qZA(),e.qZA(),e.TgZ(17,"ion-item"),e.TgZ(18,"ion-label"),e._uU(19),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&h){const a=e.oxw();e.xp6(19),e.hij(" Version : ",a.version," ")}}let _=(()=>{class h{constructor(a,o){this.authService=a,this.navCtrl=o,this.isPopoverOpen=!1,this.isUserOpen=!1,this.version=t.i8}log(a){console.log(a)}ngOnChanges(a){this.user=this.authService.authUser}ngOnInit(){(0,e.X6Q)()&&(this.envMode="DEV")}logoutClick(){this.authService.logout().subscribe(()=>{this.navCtrl.navigateBack("/login")})}navigate(a){this.navCtrl.navigateRoot(a)}}return h.\u0275fac=function(a){return new(a||h)(e.Y36(p.e),e.Y36(c.SH))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-shared-user-header"]],viewQuery:function(a,o){if(1&a&&e.Gf(g,5),2&a){let d;e.iGM(d=e.CRH())&&(o.menu=d.first)}},inputs:{pageTitle:"pageTitle"},features:[e.TTD],decls:21,vars:7,consts:[[3,"translucent"],["color","primary"],["slot","start"],["autoHide","false","color","light"],["src","assets/images/logoDaherFondBleu.png",1,"ion-hide-sm-down","logo",3,"click"],[1,"ion-text-uppercase","ion-text-center"],["slot","end",1,"dev"],["id","button-profil","color","light","slot","end","outline","",1,"ion-margin-end",3,"click"],["name","person-circle-outline"],["color","light"],["slot","end","trigger","button-profil","alignment","end","side","bottom",3,"isOpen"],["slot","end","color","danger",1,"ion-hide-sm-down","margin",3,"click"],["slot","end","name","log-out-outline"],[1,"ion-hide-md-down"],[3,"user","userState","stateChangeEv"],["button","","id","trigger-button",3,"click"],["name","settings-outline","slot","start"],["button","",3,"click"],["name","construct-outline","slot","start"],["color","danger",1,"ion-hide-sm-up",3,"click"],["slot","start","name","log-out-outline"]],template:function(a,o){1&a&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar",1),e.TgZ(2,"ion-buttons",2),e._UZ(3,"ion-menu-button",3),e.TgZ(4,"ion-img",4),e.NdJ("click",function(){return o.navigate("home")}),e.qZA(),e.qZA(),e.TgZ(5,"ion-title",5),e._uU(6),e.qZA(),e.TgZ(7,"ion-label",6),e._uU(8),e.qZA(),e.TgZ(9,"ion-chip",7),e.NdJ("click",function(){return o.isPopoverOpen=!o.isPopoverOpen}),e._UZ(10,"ion-icon",8),e.TgZ(11,"ion-label",9),e._uU(12),e.qZA(),e.qZA(),e.TgZ(13,"ion-popover",10),e.YNc(14,s,20,1,"ng-template"),e.qZA(),e.TgZ(15,"ion-button",11),e.NdJ("click",function(){return o.logoutClick()}),e._UZ(16,"ion-icon",12),e.TgZ(17,"ion-label",13),e._uU(18,"D\xe9connexion"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"ion-content"),e.TgZ(20,"app-user-sheet",14),e.NdJ("stateChangeEv",function(i){return o.isUserOpen=i}),e.qZA(),e.qZA()),2&a&&(e.Q6J("translucent",!0),e.xp6(6),e.Oqu(o.pageTitle),e.xp6(2),e.Oqu(o.envMode),e.xp6(4),e.Oqu(null==o.user?null:o.user.username),e.xp6(1),e.Q6J("isOpen",o.isPopoverOpen),e.xp6(7),e.Q6J("user",o.user)("userState",o.isUserOpen))},directives:[c.Gu,c.sr,c.Sm,c.fG,c.Xz,c.wd,c.Q$,c.hM,c.gu,c.d8,c.YG,c.W2,n.A,c.q_,c.Ie],styles:[".margin[_ngcontent-%COMP%]{margin-right:10px}.logo[_ngcontent-%COMP%]{width:100px}@media print{[_nghost-%COMP%]{display:none}}.dev[_ngcontent-%COMP%]{color:red;text-transform:uppercase;font-size:large;font-weight:700;padding-right:100px}"]}),h})()},2361:(Z,v,r)=>{r.d(v,{A:()=>s});var t=r(5e3),e=r(9172),p=r(2853),c=r(1377),n=r(3349);function g(_,h){if(1&_){const u=t.EpF();t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar"),t.TgZ(2,"ion-title"),t._uU(3),t.qZA(),t.TgZ(4,"ion-icon",1),t.NdJ("click",function(){return t.CHM(u),t.oxw().userState=!1}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(5,"ion-content"),t.TgZ(6,"ion-item"),t.TgZ(7,"ion-label"),t._uU(8,"Nom"),t.qZA(),t._UZ(9,"ion-input",2),t.qZA(),t.TgZ(10,"ion-item"),t.TgZ(11,"ion-label"),t._uU(12,"Pr\xe9nom"),t.qZA(),t._UZ(13,"ion-input",2),t.qZA(),t.TgZ(14,"ion-item"),t.TgZ(15,"ion-label"),t._uU(16,"Matricule"),t.qZA(),t._UZ(17,"ion-input",3),t._UZ(18,"ion-icon",4),t.qZA(),t.TgZ(19,"ion-item"),t.TgZ(20,"ion-label"),t._uU(21,"E-Mail"),t.qZA(),t._UZ(22,"ion-input",3),t._UZ(23,"ion-icon",4),t.qZA(),t.TgZ(24,"ion-item"),t.TgZ(25,"ion-label"),t._uU(26,"T\xe9l\xe9phone"),t.qZA(),t._UZ(27,"ion-input",2),t.qZA(),t.qZA(),t.TgZ(28,"ion-footer"),t.TgZ(29,"ion-toolbar"),t.TgZ(30,"ion-buttons"),t.TgZ(31,"ion-button",5),t.NdJ("click",function(){return t.CHM(u),t.oxw().updateUserClick()}),t.TgZ(32,"label"),t._uU(33,"Enregistrer"),t.qZA(),t._UZ(34,"ion-icon",6),t.qZA(),t.TgZ(35,"ion-button",5),t.NdJ("click",function(){return t.CHM(u),t.oxw().deleteUserClick()}),t._UZ(36,"ion-icon",7),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&_){const u=t.oxw();t.xp6(3),t.AsE(" Fiche utilisateur : ",u.user.nom," ",u.user.prenom,""),t.xp6(6),t.Q6J("value",u.user.nom),t.xp6(4),t.Q6J("value",u.user.prenom),t.xp6(4),t.Q6J("value",u.user.matricule),t.xp6(5),t.Q6J("value",u.user.mail),t.xp6(5),t.Q6J("value",u.user.tel)}}let s=(()=>{class _{constructor(u,a,o){this.loadingService=u,this.alertService=a,this.userService=o,this.userState=!1,this.stateChangeEv=new t.vpe}updateUserClick(){this.loadingService.startLoading("Mise \xe0 jour de l'utilisateur"),this.userService.updateUser(this.user).subscribe(u=>{console.log(u),this.loadingService.stopLoading()},u=>{console.error(u),this.loadingService.stopLoading(),this.alertService.simpleAlert("Erreur serveur","Probl\xe8me lors de la mise \xe0 jour","L'utilisateur n'a pas \xe9t\xe9 modifi\xe9. Veuillez recommencer.")})}deleteUserClick(){this.loadingService.startLoading("Suppression de l'utilisateur"),this.userService.deleteUser(this.user.id).subscribe(()=>{this.loadingService.stopLoading()},u=>{this.alertService.simpleAlert("Erreur","Suppression d'un utilisateur","Une erreur est survenue pendant la suppression de l'utilisateur. "+u.message),this.loadingService.stopLoading()})}}return _.\u0275fac=function(u){return new(u||_)(t.Y36(e.b),t.Y36(p.c),t.Y36(c.f))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-user-sheet"]],inputs:{user:"user",userState:"userState"},outputs:{stateChangeEv:"stateChangeEv"},decls:2,vars:1,consts:[["trigger","trigger-button",3,"isOpen","ionModalDidDismiss"],["button","","slot","end","name","close-outline","size","large",3,"click"],["type","text",3,"value"],["disabled","true","type","text",3,"value"],["slot","end","name","lock-closed-outline"],["slot","end","size","small",3,"click"],["slot","start","name","sync-outline"],["slot","icon-only","name","trash-outline"]],template:function(u,a){1&u&&(t.TgZ(0,"ion-modal",0),t.NdJ("ionModalDidDismiss",function(){return a.userState=!1,a.stateChangeEv.emit(!1)}),t.YNc(1,g,37,7,"ng-template"),t.qZA()),2&u&&t.Q6J("isOpen",a.userState)},directives:[n.ki,n.Gu,n.sr,n.wd,n.gu,n.W2,n.Ie,n.Q$,n.pK,n.j9,n.fr,n.Sm,n.YG],styles:["ion-content[_ngcontent-%COMP%]{height:50%}"]}),_})()},2080:(Z,v,r)=>{r.r(v),r.d(v,{HomePageModule:()=>S});var t=r(9808),e=r(3349),p=r(4182),c=r(4406),n=r(5e3),g=r(7704),s=r(5681);function _(l,f){1&l&&n._UZ(0,"ion-icon",6)}function h(l,f){1&l&&(n.TgZ(0,"ion-card-content"),n.TgZ(1,"ion-item",7),n.TgZ(2,"ion-label"),n._uU(3,"Id Moulage"),n.qZA(),n._UZ(4,"ion-input",8,9),n.TgZ(6,"ion-note",10),n._uU(7,"Entrer un num\xe9ro d'ID ou scanner le code barre de la feuille de moulage"),n.qZA(),n.qZA(),n.qZA())}function u(l,f){if(1&l&&(n.TgZ(0,"ion-card",3),n.TgZ(1,"ion-card-header"),n.TgZ(2,"ion-card-title"),n.YNc(3,_,1,0,"ion-icon",4),n._uU(4),n.qZA(),n.qZA(),n.YNc(5,h,8,0,"ion-card-content",5),n.qZA()),2&l){const m=f.$implicit;n.Q6J("button","button"===m.type)("routerLink","button"===m.type?m.path:""),n.xp6(3),n.Q6J("ngIf",null==m.options?null:m.options.qualityOnly),n.xp6(1),n.hij(" ",m.title," "),n.xp6(1),n.Q6J("ngIf",null==m.options?null:m.options.input)}}const a=[{title:"Moulage",path:"/molding",type:"button"},{title:"Outillage",path:"/tooling",type:"button"}],d=[{path:"",component:(()=>{class l{constructor(m,A,E){this.router=m,this.navCtrl=A,this.authService=E}ionViewWillEnter(){this.page={pageTitle:"ACCUEIL",menuItems:a,contentId:"home-content"}}ngOnInit(){this.page={pageTitle:"ACCUEIL",menuItems:a,contentId:"home-content"}}}return l.\u0275fac=function(m){return new(m||l)(n.Y36(c.F0),n.Y36(e.SH),n.Y36(g.e))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-home"]],decls:3,vars:3,consts:[[3,"pageTitle"],["color","medium",3,"fullscreen"],["class","menu-item-card","routerDirection","root",3,"button","routerLink",4,"ngFor","ngForOf"],["routerDirection","root",1,"menu-item-card",3,"button","routerLink"],["name","shield-half-outline",4,"ngIf"],[4,"ngIf"],["name","shield-half-outline"],["shape","round"],["type","text","placeholder",""],["inputIdMolding",""],["slot","helper"]],template:function(m,A){1&m&&(n._UZ(0,"app-shared-user-header",0),n.TgZ(1,"ion-content",1),n.YNc(2,u,6,5,"ion-card",2),n.qZA()),2&m&&(n.Q6J("pageTitle",A.page.pageTitle),n.xp6(1),n.Q6J("fullscreen",!1),n.xp6(1),n.Q6J("ngForOf",A.page.menuItems))},directives:[s.Q,e.W2,t.sg,e.PM,e.YI,c.rH,e.Zi,e.Dq,t.O5,e.gu,e.FN,e.Ie,e.Q$,e.pK,e.j9,e.uN],styles:[".menu-item-card[_ngcontent-%COMP%]{width:auto}"]}),l})()}];let i=(()=>{class l{constructor(){}}return l.\u0275fac=function(m){return new(m||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[[c.Bz.forChild(d)],c.Bz]}),l})();var U=r(8890),T=r(6091);let S=(()=>{class l{}return l.\u0275fac=function(m){return new(m||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[[t.ez,p.u5,e.Pc,i,U.A,T.$]]}),l})()},4147:Z=>{Z.exports={i8:"1.5.1"}}}]);