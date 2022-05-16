"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1491],{9172:(h,d,n)=>{n.d(d,{b:()=>g});var m=n(655),s=n(6435),r=n(3349);let g=(()=>{class l{constructor(c){this.loadingController=c}startLoading(c="Chargement ..."){this.loadingController.create({spinner:"lines",cssClass:"my-custom-class",message:c}).then(p=>{p.present()})}stopLoading(){return(0,m.mG)(this,void 0,void 0,function*(){setTimeout(()=>{this.loadingController.dismiss()},100)})}}return l.\u0275fac=function(c){return new(c||l)(s.LFG(r.HT))},l.\u0275prov=s.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},1491:(h,d,n)=>{n.r(d),n.d(d,{LoginPageModule:()=>A});var m=n(9808),s=n(4182),r=n(3349),g=n(4406),l=n(2340),e=n(6435),c=n(7704),p=n(9172),v=n(1086),f=n(2853);let L=(()=>{class o{constructor(t,i){this.authService=t,this.alertService=i,this.tableUpdates=[{id:1,dateUpdate:new Date(2022,4,9),description:"Pour associer un outillage \xe0 un moulage il suffit de scanner le num\xe9ro d'OT dans l'OF.Vous devez le scanner comme un kit",title:"Module Moulage"},{id:2,dateUpdate:new Date(2022,4,9),description:"Le module outillage est ouvert pour test",title:"Module Outillage"}]}showUpdates(){this.getUpdatesToShow().subscribe(t=>{t&&t.forEach(i=>{this.alertService.simpleAlert("Info sur la mise \xe0 jours",i.title,i.description)})})}getUpdates(t){const i=this.tableUpdates.filter(a=>a.dateUpdate>=new Date(t));return i.length>0?i:null}getUpdatesToShow(){return(0,v.of)(this.getUpdates(this.authService.authUser.lastCon))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(c.e),e.LFG(f.c))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const U=["userName"],E=["password"],S=function(){return["/register"]},O=[{path:"",component:(()=>{class o{constructor(t,i,a,T,M,R){this.authService=t,this.formBuilder=i,this.loadingService=a,this.updateService=T,this.navControler=M,this.alertService=R,this.reRouteOpts=[{roles:["ROLE_MOULEUR","\tROLE_RESP_MOULAGE","ROLE_CE_MOULAGE"],route:"molding"},{roles:["ROLE_RESP_OUTIL","ROLE_CE_OUTIL","ROLE_OUTILLEUR"],route:"tooling"},{roles:["ROLE_ADMIN","ROLE_USER","ROLE_METHODE"],route:"molding/create-molding"}]}ionViewWillEnter(){(0,e.X6Q)()&&this.loginForm.setValue({userName:l.N.username,password:l.N.password})}ngOnInit(){this.loginForm=this.formBuilder.group({userName:["",s.kI.required],password:[""]})}onSubmit(){this.loadingService.startLoading("Patienter pendant la connexion"),this.authService.authenticate(this.loginForm.get("userName").value,this.loginForm.get("password").value||this.loginForm.get("userName").value).subscribe(()=>{this.afterLoginActions()},t=>{this.logginError(t)})}afterLoginActions(){this.loadingService.stopLoading().then(()=>{this.loginForm.reset(),this.reRouteUser(),this.updateService.showUpdates()})}reRouteUser(){this.reRouteOpts.forEach(t=>{this.authService.authUser.roles.find(i=>t.roles.find(a=>a===i))?this.navControler.navigateForward(t.route):this.navControler.navigateForward("home")})}logginError(t){console.error(t),this.alertService.simpleAlert("Erreur d'authentification","","Le nom d'utilisateur ou votre mot de passe n'est pas correct"),this.loadingService.stopLoading()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.e),e.Y36(s.qu),e.Y36(p.b),e.Y36(L),e.Y36(r.SH),e.Y36(f.c))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],viewQuery:function(t,i){if(1&t&&(e.Gf(U,5),e.Gf(E,5)),2&t){let a;e.iGM(a=e.CRH())&&(i.userName=a.first),e.iGM(a=e.CRH())&&(i.password=a.first)}},decls:22,vars:5,consts:[[3,"fullscreen"],["fixed","",1,"full-height","ion-align-items-center","ion-justify-content-center"],[1,"ion-align-items-center"],[3,"formGroup","ngSubmit","keyup.enter"],["position","floating"],["color","danger"],["autocapitalize","on","required","","formControlName","userName","type","text","autocomplete","off","autofocus","true","inputmode","numeric","value","204292"],["userName",""],["formControlName","password","type","password","value",""],["password",""],["block","","color","primary","type","submit",3,"disabled"],["fill","clear",3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-content",0),e.TgZ(1,"ion-grid",1),e.TgZ(2,"ion-row",2),e.TgZ(3,"form",3),e.NdJ("ngSubmit",function(){return i.onSubmit()})("keyup.enter",function(){return i.onSubmit()}),e.TgZ(4,"ion-item"),e.TgZ(5,"ion-label",4),e._uU(6,"Nom d'utilisateur "),e.TgZ(7,"ion-text",5),e._uU(8,"*"),e.qZA(),e.qZA(),e._UZ(9,"ion-input",6,7),e.TgZ(11,"ion-note"),e._uU(12," Le nom d'utilisateur est le num\xe9ro de matricule pr\xe9sent sur le badge "),e.qZA(),e.qZA(),e.TgZ(13,"ion-item"),e.TgZ(14,"ion-label",4),e._uU(15,"Password "),e.qZA(),e._UZ(16,"ion-input",8,9),e.qZA(),e.TgZ(18,"ion-button",10),e._uU(19," Se connecter "),e.qZA(),e.TgZ(20,"ion-button",11),e._uU(21," Cr\xe9er un compte "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(3),e.Q6J("formGroup",i.loginForm),e.xp6(15),e.Q6J("disabled",i.loginForm.invalid),e.xp6(2),e.Q6J("routerLink",e.DdM(4,S)))},directives:[r.W2,r.jY,r.Nd,s._Y,s.JL,s.sg,r.Ie,r.Q$,r.yW,r.pK,r.j9,s.Q7,s.JJ,s.u,r.uN,r.YG,r.YI,g.rH],styles:[".full-height[_ngcontent-%COMP%]{height:100%;display:flex!important;flex-direction:column}ion-title[_ngcontent-%COMP%]{font-size:60px!important;text-transform:uppercase}"]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.Bz.forChild(O)],g.Bz]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,s.u5,r.Pc,P,s.UX]]}),o})()}}]);