"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2477],{2477:(v,Z,s)=>{s.d(Z,{Q:()=>_});var d=s(655),e=s(2340),u=s(4147),m=s(6862),n=s(5e3),t=s(9928),p=s(3919),g=s(4501);let U=(()=>{class r{constructor(o,i,a,c){this.navCtrl=o,this.authService=i,this.loadingService=a,this.modalCtrl=c,this.version=u.i8}ngOnInit(){}navigate(o){this.navCtrl.navigateRoot(o)}editProfilClick(){return(0,d.mG)(this,void 0,void 0,function*(){(yield this.modalCtrl.create({component:m.A,componentProps:{user:this.authService.authUser},animated:!0,backdropDismiss:!1})).present()})}logoutClick(){this.loadingService.startLoading("D\xe9connexion"),this.authService.logout().subscribe(()=>{this.loadingService.stopLoading(),this.navCtrl.navigateRoot("/login")})}}return r.\u0275fac=function(o){return new(o||r)(n.Y36(t.SH),n.Y36(p.e),n.Y36(g.b),n.Y36(t.IN))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-user-popover"]],decls:19,vars:1,consts:[["button","","id","trigger-button",3,"click"],["name","settings-outline","slot","start"],["button","",3,"click"],["name","construct-outline","slot","start"],["color","danger",1,"ion-hide-sm-up",3,"click"],["slot","start","name","log-out-outline"]],template:function(o,i){1&o&&(n.TgZ(0,"ion-list")(1,"ion-item",0),n.NdJ("click",function(){return i.editProfilClick()}),n.TgZ(2,"ion-label"),n._uU(3,"Profil"),n.qZA()(),n.TgZ(4,"ion-item")(5,"ion-label"),n._uU(6,"Pr\xe9f\xe9rences"),n.qZA(),n._UZ(7,"ion-icon",1),n.qZA(),n.TgZ(8,"ion-item",2),n.NdJ("click",function(){return i.navigate("admin")}),n.TgZ(9,"ion-label"),n._uU(10,"Administration"),n.qZA(),n._UZ(11,"ion-icon",3),n.qZA(),n.TgZ(12,"ion-item",4),n.NdJ("click",function(){return i.logoutClick()}),n._UZ(13,"ion-icon",5),n.TgZ(14,"ion-label"),n._uU(15,"D\xe9connexion"),n.qZA()(),n.TgZ(16,"ion-item")(17,"ion-label"),n._uU(18),n.qZA()()()),2&o&&(n.xp6(18),n.hij(" Version : ",i.version," "))},dependencies:[t.gu,t.Ie,t.Q$,t.q_]}),r})();var h=s(9808);function C(r,l){1&r&&n._UZ(0,"ion-menu-button",14)}let _=(()=>{class r{constructor(o,i,a,c){this.authService=o,this.loadingService=i,this.navCtrl=a,this.popoverCtrl=c,this.user=this.authService.authUser}ngOnDestroy(){console.log("destroy header")}ngOnInit(){this.envMode=e.N.name}logoutClick(){this.loadingService.startLoading("D\xe9connexion"),this.authService.logout().subscribe(()=>{this.loadingService.stopLoading(),this.navCtrl.navigateRoot("/login")})}triggerUserPopover(o){return(0,d.mG)(this,void 0,void 0,function*(){o.preventDefault(),(yield this.popoverCtrl.create({component:U,reference:"trigger",showBackdrop:!0,backdropDismiss:!0,animated:!0,dismissOnSelect:!0})).present()})}navigate(o){this.navCtrl.navigateRoot(o)}}return r.\u0275fac=function(o){return new(o||r)(n.Y36(p.e),n.Y36(g.b),n.Y36(t.SH),n.Y36(t.Dh))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-shared-user-header"]],inputs:{title:"title",hideMenuIcon:"hideMenuIcon"},decls:18,vars:5,consts:[[3,"translucent"],["color","primary"],["slot","start"],["autoHide","false","color","light","menu","main-menu",4,"ngIf"],["src","assets/images/logoDaherFondBleu.png",1,"ion-hide-sm-down","logo",3,"click"],[1,"ion-text-uppercase","ion-text-center"],["slot","end",1,"dev","ion-hide-sm-down"],["color","light","slot","end","outline","",1,"ion-margin-end",3,"contextmenu"],["buttonProfil",""],["name","person-circle-outline"],["color","light"],["slot","end","color","danger",1,"ion-hide-sm-down","margin",3,"click"],["slot","end","name","log-out-outline"],[1,"ion-hide-md-down"],["autoHide","false","color","light","menu","main-menu"]],template:function(o,i){1&o&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),n.YNc(3,C,1,0,"ion-menu-button",3),n.TgZ(4,"ion-img",4),n.NdJ("click",function(){return i.navigate("home")}),n.qZA()(),n.TgZ(5,"ion-title",5),n._uU(6),n.qZA(),n.TgZ(7,"ion-label",6),n._uU(8),n.qZA(),n.TgZ(9,"ion-chip",7,8),n.NdJ("contextmenu",function(c){return i.triggerUserPopover(c)}),n._UZ(11,"ion-icon",9),n.TgZ(12,"ion-label",10),n._uU(13),n.qZA()(),n.TgZ(14,"ion-button",11),n.NdJ("click",function(){return i.logoutClick()}),n._UZ(15,"ion-icon",12),n.TgZ(16,"ion-label",13),n._uU(17,"D\xe9connexion"),n.qZA()()()()),2&o&&(n.Q6J("translucent",!0),n.xp6(3),n.Q6J("ngIf",!i.hideMenuIcon),n.xp6(3),n.Oqu(i.title),n.xp6(2),n.Oqu(i.envMode),n.xp6(5),n.Oqu(null==i.user?null:i.user.username))},dependencies:[h.O5,t.YG,t.Sm,t.hM,t.Gu,t.gu,t.Xz,t.Q$,t.fG,t.sr,t.wd],styles:[".margin[_ngcontent-%COMP%]{margin-right:10px}.logo[_ngcontent-%COMP%]{width:100px}@media print{[_nghost-%COMP%]{display:none}}.dev[_ngcontent-%COMP%]{color:red;text-transform:uppercase;font-size:large;font-weight:700;padding-right:100px}"]}),r})()},6862:(v,Z,s)=>{s.d(Z,{A:()=>_});var d=s(655),e=s(5e3),u=s(3075),m=s(8),n=s(3919),t=s(9928);let p=(()=>{class r{constructor(o,i,a){this.fb=o,this.userService=i,this.authService=a,this.changePasswordForm=this.fb.group({newPassword:["",u.kI.required]})}confirmChangePasswordClick(){const o=this.authService.authUser;o.password=this.changePasswordForm.get("newPassword").value,this.userService.updateUser(o)}onSubmit(){}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(u.qu),e.Y36(m.f),e.Y36(n.e))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-change-password"]],decls:22,vars:2,consts:[[3,"formGroup","ngSubmit"],["color","dark"],["formControlName","newPassword","type","password",3,"value"],["slot","end","name","checkmark-outline"],["formControlName","password","type","password",3,"value"],["color","success","slot","end","name","checkmark-done-outline"],["color","light"],["slot","end"],["fill","solid",3,"disabled","click"],["slot","end","name","airplane"]],template:function(o,i){1&o&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(1,"ion-header")(2,"ion-toolbar",1)(3,"ion-title"),e._uU(4,"Changement du mot de passe"),e.qZA()()(),e.TgZ(5,"ion-content")(6,"ion-item")(7,"ion-label"),e._uU(8,"Nouveau mot de passe"),e.qZA(),e._UZ(9,"ion-input",2)(10,"ion-icon",3),e.qZA(),e.TgZ(11,"ion-item")(12,"ion-label"),e._uU(13,"Confirmer mot de passe"),e.qZA(),e._UZ(14,"ion-input",4)(15,"ion-icon",5),e.qZA()(),e.TgZ(16,"ion-footer")(17,"ion-toolbar",6)(18,"ion-buttons",7)(19,"ion-button",8),e.NdJ("click",function(){return i.confirmChangePasswordClick()}),e._UZ(20,"ion-icon",9),e._uU(21," Confirmer "),e.qZA()()()()()),2&o&&(e.Q6J("formGroup",i.changePasswordForm),e.xp6(19),e.Q6J("disabled",i.changePasswordForm.invalid))},dependencies:[t.YG,t.Sm,t.W2,t.fr,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.sr,t.wd,t.j9,u._Y,u.JJ,u.JL,u.sg,u.u]}),r})();var g=s(4501),U=s(512),h=s(9808);function C(r,l){if(1&r){const o=e.EpF();e.ynx(0),e.TgZ(1,"ion-content")(2,"ion-item")(3,"ion-label"),e._uU(4,"Nom"),e.qZA(),e._UZ(5,"ion-input",4),e.qZA(),e.TgZ(6,"ion-item")(7,"ion-label"),e._uU(8,"Pr\xe9nom"),e.qZA(),e._UZ(9,"ion-input",4),e.qZA(),e.TgZ(10,"ion-item")(11,"ion-label"),e._uU(12,"Matricule"),e.qZA(),e._UZ(13,"ion-input",5)(14,"ion-icon",6),e.qZA(),e.TgZ(15,"ion-item")(16,"ion-label"),e._uU(17,"E-Mail"),e.qZA(),e._UZ(18,"ion-input",5)(19,"ion-icon",6),e.qZA(),e.TgZ(20,"ion-item")(21,"ion-label"),e._uU(22,"T\xe9l\xe9phone"),e.qZA(),e._UZ(23,"ion-input",4),e.qZA(),e.TgZ(24,"ion-item")(25,"ion-label"),e._uU(26,"Date de cr\xe9ation"),e.qZA(),e._UZ(27,"ion-input",5),e.ALo(28,"date"),e._UZ(29,"ion-icon",6),e.qZA(),e.TgZ(30,"ion-item")(31,"ion-label"),e._uU(32,"Date de derni\xe8re connexion"),e.qZA(),e._UZ(33,"ion-input",5),e.ALo(34,"date"),e._UZ(35,"ion-icon",6),e.qZA(),e.TgZ(36,"ion-item")(37,"ion-label"),e._uU(38,"Site"),e.qZA(),e.TgZ(39,"ion-label"),e._uU(40),e.qZA(),e._UZ(41,"ion-icon",6),e.qZA(),e.TgZ(42,"ion-item")(43,"ion-label"),e._uU(44,"Service"),e.qZA(),e.TgZ(45,"ion-label"),e._uU(46),e.qZA(),e._UZ(47,"ion-icon",6),e.qZA(),e.TgZ(48,"ion-item")(49,"ion-label"),e._uU(50,"Division"),e.qZA(),e.TgZ(51,"ion-label"),e._uU(52),e.qZA(),e._UZ(53,"ion-icon",6),e.qZA()(),e.TgZ(54,"ion-footer")(55,"ion-toolbar")(56,"ion-buttons",1)(57,"ion-button",7),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.updatePasswordClick())}),e.TgZ(58,"label"),e._uU(59,"Changer mot de passe"),e.qZA(),e._UZ(60,"ion-icon",8),e.qZA()(),e.TgZ(61,"ion-buttons",9)(62,"ion-button",7),e.NdJ("click",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.updateUserClick())}),e.TgZ(63,"label"),e._uU(64,"Enregistrer"),e.qZA(),e._UZ(65,"ion-icon",10),e.qZA()()()(),e.BQk()}if(2&r){const o=e.oxw();e.xp6(5),e.Q6J("value",o.user.nom),e.xp6(4),e.Q6J("value",o.user.prenom),e.xp6(4),e.Q6J("value",o.user.matricule),e.xp6(5),e.Q6J("value",o.user.mail),e.xp6(5),e.Q6J("value",o.user.tel),e.xp6(4),e.Q6J("value",e.lcZ(28,10,o.user.createdAt)),e.xp6(6),e.Q6J("value",e.lcZ(34,12,o.user.lastCon)),e.xp6(7),e.Oqu(o.user.site.nom),e.xp6(6),e.Oqu(o.user.service.nom),e.xp6(6),e.Oqu(o.user.unite.nom)}}let _=(()=>{class r{constructor(o,i,a,c){this.loadingService=o,this.alertService=i,this.userService=a,this.modalCtrl=c,this.stateChangeEv=new e.vpe}updateUserClick(){this.loadingService.startLoading("Mise \xe0 jour de l'utilisateur"),this.userService.updateUser(this.user).subscribe(o=>{console.log(o),this.loadingService.stopLoading()},o=>{console.error(o),this.loadingService.stopLoading(),this.alertService.simpleAlert("Erreur serveur","Probl\xe8me lors de la mise \xe0 jour","L'utilisateur n'a pas \xe9t\xe9 modifi\xe9. Veuillez recommencer.")})}deleteUserClick(){this.loadingService.startLoading("Suppression de l'utilisateur"),this.userService.deleteUser(this.user.id).subscribe(()=>{this.loadingService.stopLoading()},o=>{this.alertService.simpleAlert("Erreur","Suppression d'un utilisateur","Une erreur est survenue pendant la suppression de l'utilisateur. "+o.message),this.loadingService.stopLoading()})}closeUserSheetClick(){this.modalCtrl.dismiss()}updatePasswordClick(){return(0,d.mG)(this,void 0,void 0,function*(){(yield this.modalCtrl.create({component:p,cssClass:"modal-adjusted"})).present()})}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(g.b),e.Y36(U.c),e.Y36(m.f),e.Y36(t.IN))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-user-sheet"]],inputs:{user:"user"},outputs:{stateChangeEv:"stateChangeEv"},decls:6,vars:1,consts:[["color","dark"],["slot","start"],["slot","end","name","close-circle","size","large",3,"click"],[4,"ngIf"],["type","text",3,"value"],["disabled","true","type","text",3,"value"],["slot","end","name","lock-closed-outline"],["slot","end","size","small",3,"click"],["slot","start","name","key-outline"],["slot","end"],["slot","start","name","save-outline"]],template:function(o,i){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),e._uU(3," Fiche utilisateur"),e.qZA(),e.TgZ(4,"ion-icon",2),e.NdJ("click",function(){return i.closeUserSheetClick()}),e.qZA()()(),e.YNc(5,C,66,14,"ng-container",3)),2&o&&(e.xp6(5),e.Q6J("ngIf",i.user))},dependencies:[h.O5,t.YG,t.Sm,t.W2,t.fr,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.sr,t.wd,t.j9,h.uU],styles:["ion-content[_ngcontent-%COMP%]{height:50%}"]}),r})()},4147:v=>{v.exports={i8:"1.6.0"}}}]);